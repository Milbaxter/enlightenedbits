# enlightenedbits.com

The website for **Enlightened Bits** — a Finnish AI company based in Helsinki.

It's a single static page. No build step, no framework, no database — just
`index.html` plus `robots.txt` and `sitemap.xml`.

## How to make a change

You have two ways to edit the site:

**Easiest (in the browser):**
1. Open [`index.html`](./index.html) here on GitHub.
2. Click the ✏️ pencil icon (top-right of the file).
3. Make your edits, scroll down, and **Commit changes** to `main`.
4. That's it — the change goes live in ~30 seconds (see *Deployment* below).

**Locally (if you've cloned the repo):**
```bash
git clone git@github.com:Milbaxter/enlightenedbits.git
cd enlightenedbits
# edit index.html
git commit -am "Update copy"
git push
```

To preview your changes before committing, just open `index.html` in a browser
— it's a plain file, no server needed.

## Deployment

Every push to the `main` branch automatically deploys the site.

A GitHub Action (`.github/workflows/deploy.yml`) copies the files to the
Hetzner server in Germany, where [Caddy](https://caddyserver.com) serves them
at <https://enlightenedbits.com> with automatic HTTPS. Hosting stays in Europe
by design — same principle the company is built on.

You can watch a deploy happen, or trigger one manually, from the
**Actions** tab on GitHub.

## Files

| File          | Purpose                                  |
|---------------|------------------------------------------|
| `index.html`  | The entire site (markup, styles, content)|
| `robots.txt`  | Search-crawler rules                     |
| `sitemap.xml` | Sitemap for search engines               |

## Infrastructure notes (for maintainers)

- **Server:** Hetzner (`178.104.13.79`), files live in `/var/www/enlightenedbits/`.
- **Web server:** Caddy, config at `/etc/caddy/Caddyfile` (auto-HTTPS, gzip/zstd, security headers).
- **Deploy auth:** a dedicated SSH key (GitHub secret `DEPLOY_SSH_KEY`) that is
  locked down on the server with an `rrsync` forced command — it can *only*
  rsync files into `/var/www/enlightenedbits`, nothing else. It cannot open a
  shell. Repo secrets: `DEPLOY_SSH_KEY`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_TARGET`.
