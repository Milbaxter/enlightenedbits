# enlightenedbits.com

The website for **Enlightened Bits** — a Finnish AI company based in Helsinki.

Static HTML, one shared stylesheet, no framework and no database. The fonts
and images are served from this repo — nothing is fetched from Google or any
other third party at page load.

The team page is **generated** from a content file so the Finnish and English
versions cannot drift apart; every other page is hand-written HTML. See
*Editing the team page* below.

## Structure

The site is bilingual. Finnish lives at the root, English under `/en/`.

| URL                | File                    | Language |
|--------------------|-------------------------|----------|
| `/`                | `index.html`            | Finnish  |
| `/tiimi/`          | `tiimi/index.html`      | Finnish, **generated** |
| `/en/`             | `en/index.html`         | English  |
| `/en/team/`        | `en/team/index.html`    | English, **generated** |

The old English URLs `/team/` and `/local-ai/` 301-redirect via `vercel.json`
so existing search rankings and inbound links still land somewhere sensible —
`/team/` to `/en/team/`, and `/local-ai/` to `/en/` now that the local-AI page
is retired.

Each page declares `hreflang` alternates for both languages, and `sitemap.xml`
lists every URL with its alternates.

## Design system

`assets/eb.css` is the whole visual language, ported from the Claude Design
canvas export. It is worth reading before editing any page:

- **Colour** is drawn from `kuvat/landing-page-picture.webp` — near-black
  headlands, desaturated tide blues, grey-green water shadow, washed sky.
  Nothing is saturated. If a colour feels bright, it is wrong.
- **The grid** (`.eb-grid` / `.eb-cell`) is four columns with hairline rules.
  Type is placed in cells, not centred, and the first one or two columns are
  usually left empty on purpose. That emptiness is the layout — don't fill it.
  The grid collapses to two columns under 900px and one under 600px.
- **Type** is Work Sans for everything, IBM Plex Mono for eyebrows, numerals
  and metadata, and Gajraj One for the wordmark only — never for running text.

## How to make a change

**In the browser:** open the file on GitHub, click the ✏️ pencil, edit, and
**Commit changes** to `main`. The change is live in about a minute.

**Locally:**
```bash
git clone git@github.com:Milbaxter/enlightenedbits.git
cd enlightenedbits
python3 -m http.server 8000    # then open http://localhost:8000
```

Use a local server rather than opening the file directly — the pages link
`/assets/eb.css` and `/fonts/…` with absolute paths, which only resolve when
something is serving the directory as a site root.

When you change copy on one hand-written page, change the other language too.
The team page handles that for you — see below.

## Editing the team page

`/tiimi/` and `/en/team/` are built from a single file:

```
content/tiimi.md     ← the words. This is the file you edit.
templates/team.html  ← the markup. You rarely need to touch this.
build.py             ← turns the two into both HTML pages.
```

Edit the prose in `content/tiimi.md`, then:

```bash
python3 build.py
```

```
  wrote  tiimi/index.html
  wrote  en/team/index.html
```

Commit the content file **and** the two generated HTML files together — Vercel
deploys the HTML, not the content file.

The format is deliberately small:

```
## person juhani
name:      Juhani
email:     juhani@enlightenedbits.com
role.fi:   Perustaja
role.en:   Co-founder

bio.fi: >
  Indent the lines under a `>` and they become one paragraph.

  A blank line inside the block starts a new paragraph.
```

`key.fi` / `key.en` give the two languages; a plain `key` is used for both.
Adding a `## person <id>` section adds a third person to both pages, numbered
and ruled automatically. Lines beginning with `#` are comments.

`python3 build.py --check` exits non-zero if the HTML is out of date with the
content file — handy before committing.

## Deployment

Every push to `main` deploys automatically via **Vercel**.

`vercel.json` holds the redirects, the cache headers (fonts and images are
immutable for a year; `eb.css` always revalidates) and the security headers.

The old Hetzner deploy is retired — `.github/workflows/deploy.yml.disabled` is
kept only for reference and does not run.

## Files

| Path                  | Purpose                                        |
|-----------------------|------------------------------------------------|
| `content/tiimi.md`    | Team-page copy, both languages                  |
| `templates/team.html` | Team-page markup                                |
| `build.py`            | Builds the team page from the two above         |
| `assets/eb.css`       | The design system — tokens, grid, components    |
| `kuvat/`              | Photography (WebP with a JPEG fallback)         |
| `fonts/`              | Self-hosted WOFF2 subsets                       |
| `vercel.json`         | Redirects, cache and security headers           |
| `robots.txt`          | Crawler rules (disallows `/dashboard`)          |
| `sitemap.xml`         | Sitemap with `hreflang` alternates              |
| `og-image.png`        | Social preview card, 1200×630                   |

## The dashboard

The internal company dashboard used to live at `/dashboard/`. It has moved to
a **private** repo — `lindhj3/enlightenedbits-dashboard` — because this repo
is public, and the password gate never protected the source. Don't copy it
back in.
