#!/usr/bin/env python3
"""Build the team page from content/tiimi.md into Finnish and English HTML.

Usage:  python3 build.py            build once
        python3 build.py --check    fail if the built files are out of date

Only the team page is generated. The other pages are hand-written HTML — see
the README. Nothing here needs installing; it is standard-library only.
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
CONTENT = ROOT / "content" / "tiimi.md"
TEMPLATE = ROOT / "templates" / "team.html"

LANGS = {
    # lang: (output file, own url, og locale, og image, footer place, nav aria)
    "fi": ("tiimi/index.html", "/tiimi/", "fi_FI", "og-image.png",
           "Kallio, Helsinki", "Päävalikko", "Tapaamispyyntö"),
    "en": ("en/team/index.html", "/en/team/", "en_GB", "og-image-en.png",
           "Kallio, Helsinki", "Main", "Meeting request"),
}
HOME = {"fi": "/", "en": "/en/"}
CONTACT_ANCHOR = {"fi": "yhteystiedot", "en": "contact"}


# ---------------------------------------------------------------- parsing

def parse(text):
    """Parse the content file into {section: {key: value}}.

    Sections start with '## name'. Keys are 'key: value', or 'key: >' followed
    by an indented block. A blank line inside a block starts a new paragraph.
    """
    sections, current, key, block, indent = {}, None, None, None, 0
    lines = text.splitlines()

    def flush():
        nonlocal key, block
        if key is not None:
            sections[current][key] = "\n".join(block).strip("\n")
            key, block = None, None

    for raw in lines:
        line = raw.rstrip()

        # inside a multi-line block: keep going while indented or blank
        if key is not None:
            if not line.strip():
                block.append("")
                continue
            if len(line) - len(line.lstrip()) >= indent:
                block.append(line.strip())
                continue
            flush()

        if not line.strip() or line.lstrip().startswith("#") and not line.startswith("##"):
            continue

        if line.startswith("##"):
            flush()
            current = line[2:].strip()
            sections.setdefault(current, {})
            continue

        m = re.match(r"^([A-Za-z_][\w.]*)\s*:\s*(.*)$", line)
        if not m:
            continue
        k, v = m.group(1), m.group(2).strip()
        if v == ">":
            key, block, indent = k, [], 2
        else:
            sections[current][k] = v

    flush()
    return sections


def pick(d, key, lang):
    """Value for `key` in `lang`, falling back to a language-neutral key."""
    if f"{key}.{lang}" in d:
        return d[f"{key}.{lang}"]
    if key in d:
        return d[key]
    raise KeyError(f"missing '{key}' (or '{key}.{lang}')")


def paragraphs(text, cls=""):
    """Turn a block into <p> tags, splitting on blank lines."""
    attr = f' class="{cls}"' if cls else ""
    out = []
    for para in re.split(r"\n\s*\n", text.strip()):
        para = " ".join(para.split())
        if para:
            out.append(f"<p{attr}>{esc(para)}</p>")
    return "\n          ".join(out)


def esc(s):
    """Escape for HTML text, but keep the typographic characters as-is."""
    return html.escape(s, quote=False)


def attr(s):
    return html.escape(s, quote=True)


# ---------------------------------------------------------------- render

def render(sections, lang):
    out_file, self_url, og_locale, og_image, place, nav_label, subject = LANGS[lang]
    nav, page, story, contact, photo = (
        sections[k] for k in ("nav", "page", "story", "contact", "photo"))
    people = [(k.split(None, 1)[1], v) for k, v in sections.items()
              if k.startswith("person ")]

    primary = people[0][1]["email"]
    tpl = TEMPLATE.read_text()

    # people blocks
    block = re.search(r"<!-- PERSON -->(.*?)<!-- /PERSON -->", tpl, re.S).group(1)
    rendered = []
    for i, (_, p) in enumerate(people):
        b = block
        b = b.replace("{{person_rule}}", " eb-rule-r" if i % 2 == 0 else "")
        b = b.replace("{{person.num}}", f"{i + 1:02d}")
        b = b.replace("{{person.name}}", esc(p["name"]))
        b = b.replace("{{person.role}}", esc(pick(p, "role", lang)))
        b = b.replace("{{person.degree}}", esc(pick(p, "degree", lang)))
        b = b.replace("{{person.bio}}", paragraphs(pick(p, "bio", lang), "eb-bio"))
        b = b.replace("{{person.email}}", attr(p["email"]))
        rendered.append(b.rstrip())
    tpl = re.sub(r"<!-- PERSON -->.*?<!-- /PERSON -->",
                 lambda _: "".join(rendered), tpl, flags=re.S)

    # address: one line per line, with <br>
    addr = "<br>\n          ".join(
        esc(l.strip()) for l in pick(contact, "address", lang).splitlines() if l.strip())

    def tel(number):
        """tel: hrefs must carry no spaces."""
        return re.sub(r"[^\d+]", "", number)

    blocks = []
    for _, p in people:
        rows = [f'            <p class="eb-contact-name">{esc(p["name"])}</p>',
                f'            <p><a class="eb-action-quiet" href="mailto:{attr(p["email"])}">'
                f'{esc(p["email"])}</a></p>']
        if "phone" in p:
            rows.append(f'            <p><a class="eb-action-quiet" '
                        f'href="tel:{attr(tel(p["phone"]))}">{esc(p["phone"])}</a></p>')
        blocks.append('          <div class="eb-contact">\n' + "\n".join(rows) + "\n          </div>")
    people_html = "\n".join(blocks)

    other = "en" if lang == "fi" else "fi"
    switch = []
    for code in ("fi", "en"):
        url = LANGS[code][1]
        cur = ' aria-current="page"' if code == lang else ""
        switch.append(f'<a href="{url}"{cur} hreflang="{code}">{code.upper()}</a>')
    lang_switch = "<span>/</span>".join(switch)

    schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": pick(page, "og_title", lang),
        "url": f"https://enlightenedbits.com{self_url}",
        "inLanguage": lang,
        "mainEntity": {
            "@type": "Organization",
            "name": "Enlightened Bits",
            "url": "https://enlightenedbits.com",
            "email": primary,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": pick(contact, "address", lang).splitlines()[1].strip()
                if len(pick(contact, "address", lang).splitlines()) > 1 else "",
                "addressLocality": "Helsinki",
                "addressCountry": "FI",
            },
            "employee": [
                {"@type": "Person", "name": p["name"],
                 "jobTitle": pick(p, "role", lang), "email": p["email"],
                 **({"telephone": p["phone"]} if "phone" in p else {})}
                for _, p in people
            ],
        },
    }

    values = {
        "lang": lang,
        "self_url": self_url,
        "home_url": HOME[lang],
        "contact_anchor": CONTACT_ANCHOR[lang],
        "og_locale": og_locale,
        "og_image": og_image,
        "footer_place": place,
        "nav_label": nav_label,
        "book_subject": attr(subject.replace(" ", "%20")),
        "primary_email": attr(primary),
        "lang_switch": lang_switch,
        "schema": json.dumps(schema, ensure_ascii=False, indent=2),
        "contact.address": addr,
        "contact.people": people_html,
        "contact.intro": esc(" ".join(pick(contact, "intro", lang).split())),
        "story.body": paragraphs(pick(story, "body", lang)),
        "page.lede": esc(" ".join(pick(page, "lede", lang).split())),
    }
    for name, sec in (("nav", nav), ("page", page), ("story", story),
                      ("contact", contact), ("photo", photo)):
        for k in {x.split(".")[0] for x in sec}:
            values.setdefault(f"{name}.{k}", esc(pick(sec, k, lang)))

    def sub(m):
        k = m.group(1)
        if k not in values:
            raise KeyError(f"template placeholder {{{{{k}}}}} has no value")
        return values[k]

    return out_file, re.sub(r"\{\{([\w.]+)\}\}", sub, tpl)


# ---------------------------------------------------------------- main

def main():
    check = "--check" in sys.argv
    sections = parse(CONTENT.read_text())
    stale = []
    for lang in LANGS:
        out_file, html_out = render(sections, lang)
        path = ROOT / out_file
        old = path.read_text() if path.exists() else None
        if check:
            if old != html_out:
                stale.append(out_file)
            continue
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(html_out)
        print(f"  {'wrote' if old != html_out else 'unchanged'}  {out_file}")
    if check:
        if stale:
            print("out of date (run python3 build.py): " + ", ".join(stale))
            return 1
        print("  up to date")
    return 0


if __name__ == "__main__":
    sys.exit(main())
