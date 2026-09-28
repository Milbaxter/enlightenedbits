# enlightenedbits.com

The website for **Enlightened Bits** — AI on your own terms, from Helsinki.

Built with [Astro](https://astro.build) as a fully static site: no database,
no client framework, no third-party requests at page load. Fonts, images and
video are all served from this repo.

## Structure

The site is bilingual. Finnish lives at the root, English under `/en/`. Every
word on the new pages lives in two files, so the languages cannot drift apart:

```
src/i18n/fi.ts      ← all Finnish copy
src/i18n/en.ts      ← all English copy (same shape)
src/i18n/types.ts   ← the shape both files must follow
```

| URL                      | Page                        | Source                        |
|--------------------------|-----------------------------|-------------------------------|
| `/` · `/en/`             | Home                        | `src/components/Etusivu.astro` |
| `/nain-tyoskentelemme/` · `/en/approach/` | Services & how we work | `src/components/Tyotapa.astro` |
| `/tiimi/` · `/en/team/`  | Team & contact              | `src/components/Meista.astro`  |
| `/agi/` · `/en/agi/`     | R&D (hand-written HTML)     | `public/agi/`, `public/en/agi/` |
| `/notes/`                | Notebook (hand-written)     | `public/notes/`               |

Anything in `public/` is served as-is at the same path — the older hand-written
pages, `assets/eb.css` they use, the offer PDFs, `sitemap.xml` and `robots.txt`
all live there unchanged.

Other building blocks in `src/components/`:

- `Sukellus.astro` — the home hero: a scroll-scrubbed video (`public/media/sukellus*.mp4`).
- `Kohtaus.astro` — a full-bleed looping film scene; `Vaihe.astro` uses it for each service step.
- `Konteksti.astro` — the organisational-context service section.
- `Cta.astro` — the “text → → →” link used instead of buttons.

## Design

`src/styles/ilme.css` is the whole visual language: black-and-white film
scenes alternating with paper sections, Inter Tight set large and light, and
Instrument Serif italic reserved for the one word that carries the meaning.

Video loops in `public/media/` are 8-second seamless loops (same first and last
frame), H.264 720p with a short keyframe interval. Each has a `.jpg` poster of
its first frame, shown until the video loads and permanently for visitors who
prefer reduced motion.

## How to make a change

```bash
git clone https://github.com/Milbaxter/enlightenedbits.git
cd enlightenedbits
npm install
npm run dev        # http://127.0.0.1:4330
```

Change copy in `src/i18n/fi.ts` **and** `src/i18n/en.ts`. Both follow the
shape in `src/i18n/types.ts`, so an editor with TypeScript support flags a
field that one language is missing.

## Deployment

Every push to `main` deploys automatically via **Vercel**, which runs
`npm run build` and serves `dist/` (set explicitly in `vercel.json`, together
with redirects, cache headers and security headers). Pull requests get a
preview deployment.

Old URLs keep working: `/team/` and `/local-ai/` redirect as before, and
`/meista/` / `/en/about/` redirect to the team pages.

