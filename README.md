# Core Cell for Well-Seasoned Business Owners

This repository contains the **static, single-page CREATAIV Core Cell microsite for the well-seasoned business owner**. It is plain HTML/CSS/JS with self-hosted assets and no application runtime, database, analytics, tracking scripts, third-party form service, or external CDN.

| Item | Value |
| --- | --- |
| Suggested production URL | `https://retired.smb.creataiv.com` |
| Entry page | `index.html` |
| Brand reference | `BRAND.md` |
| Site assets | `assets/` |
| Lead destination | `nick@e4lv.com` |
| Hosting target | Cloudflare Pages or Cloudflare Workers static assets |

## Repository structure

```text
/
├── index.html
├── BRAND.md
├── assets/
│   ├── creataiv-horizontal.webp
│   ├── creataiv-icon.webp
│   ├── favicon.png
│   ├── hero-owner.webp
│   ├── hero-owner-mobile.webp
│   ├── janet.webp
│   ├── fritz.webp
│   ├── og-preview.webp
│   └── fonts/
│       ├── Orbitron-Variable.ttf
│       ├── Rajdhani-Regular.ttf
│       ├── Rajdhani-Medium.ttf
│       ├── Rajdhani-SemiBold.ttf
│       ├── Rajdhani-Bold.ttf
│       ├── OFL-Orbitron.txt
│       └── OFL-Rajdhani.txt
├── robots.txt
├── sitemap.xml
└── README.md
```

All production images, icons, typography, styling, and scripts are stored in this repository. Do not replace them with hotlinks or CDN references.

## CreatAIv brand system

The site follows `BRAND.md` and uses the supplied **Abstract Hive** identity. The primary production palette is near-black `#010204`, teal `#008687`, cyan `#00A8A9`, gold `#D6A54D`, white, and charcoal `#0A0F1A`. Headings use locally bundled Orbitron; body and interface copy use locally bundled Rajdhani. Both font families are included under the SIL Open Font License, with their license files retained in `assets/fonts/`.

Use `creataiv-horizontal.webp` for wide dark-background brand applications and `creataiv-icon.webp` only where compact geometry is necessary. Preserve the marks' proportions, clear space, colors, and orientation. Do not add text over a logo image, distort a mark, recolor it, or introduce gradients outside the supplied logo artwork.

## Preview locally

From the repository root, serve the directory with any static file server. For example:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`. Also inspect the page with JavaScript disabled to confirm that the core pitch, pricing, and sole CTA remain readable.

## Deploy with Cloudflare Pages

1. In Cloudflare, create a **Pages** project and connect this GitHub repository.
2. Select **no framework**. Leave the build command empty because the repository already contains deployable static files.
3. Set the output directory to the repository root (`/`). If the interface requires a value, use `.`.
4. Deploy the default branch and confirm that `index.html`, `robots.txt`, `sitemap.xml`, and every file in `assets/` resolve successfully.
5. Add the custom domain `retired.smb.creataiv.com` to the Pages project, then create or approve the DNS record Cloudflare proposes.
6. Verify the production page, Open Graph image, favicon, sole Nick CTA, and HTTPS response before announcing the site.

## Deploy with Cloudflare Workers static assets

1. Create a Cloudflare Worker whose static asset directory is this repository root.
2. Configure the Worker to serve `index.html` for `/` and upload the repository files as static assets; no server-side application code is required.
3. Deploy the Worker and verify the Cloudflare preview URL.
4. Add the Worker route or custom domain `retired.smb.creataiv.com` and create the corresponding Cloudflare DNS record.
5. Verify that every local asset resolves, the page remains readable without JavaScript, and no redirect creates a second lead path.

If the team uses Wrangler, keep any Wrangler configuration limited to deployment metadata and static-asset binding. Do not add a JavaScript application server, authentication layer, package-dependent runtime, or Manus service.

## Edit and republish

**Edit `index.html`, `BRAND.md`, or a local file in `assets/`, preview and validate the page, commit the change to the default branch, and let Cloudflare redeploy that commit.**

Before publishing an edit, rerun the Core Cell hard-truth review and confirm that the only lead destination remains `nick@e4lv.com`.

## Ownership and privacy constraints

This microsite deliberately includes no analytics, tracking pixel, chatbot, SaaS lead form, cookie banner, external font host, or third-party asset CDN. Core Cell copy must not present encryption at rest, a kill switch, blockchain storage, or a downloadable mobile app as shipped functionality. Pricing is authorized by the Christina persona brief and must continue to match the canonical CREATAIV pricing terms exactly.

## Completed handoff checklist

| Handoff check | Status | Evidence |
| --- | --- | --- |
| Repository and source | PASS | One framework-free `index.html`; no application server, package runtime, database, OAuth, or hosting shim. |
| Brand replacement | PASS | The former visual system and logo are removed; the supplied Abstract Hive marks, palette, spacing, and geometry govern the new layout. |
| Typography licensing | PASS | Orbitron and Rajdhani are self-hosted; their SIL Open Font License files are retained in `assets/fonts/`. |
| README | PASS | Includes both Cloudflare paths, `retired.smb.creataiv.com`, brand guidance, asset locations, and the edit/re-publish line. |
| Self-hosted assets | PASS | Every production image, logo, icon, and font is stored in `assets/`; no production hotlinks or external CDN. |
| Nick-only lead path | PASS | The sole contact form uses `mailto:nick@e4lv.com` in `index.html`; no second email or phone CTA. |
| Forbidden integrations | PASS | No trackers, analytics, chatbots, SaaS forms, OAuth, Manus services, or third-party font hosts. |
| Hard-truth firewall | PASS | Encryption at rest and kill-switch language is explicitly future-tense/not shipped; no blockchain or downloadable-app claim. |
| Pricing | PASS | Shows $7,500 + separately billed $500–$5,000 hardware; $3,750/$3,750 payments; required $650/month from day 91 billed $1,950 quarterly; separate $49/$175 Hive Mind tiers. |
| Progressive enhancement | PASS | Core pitch, pricing, ownership copy, six hard questions, and the CTA are present in semantic HTML; JavaScript only adds reveal motion. |
| Link and visual QA | PASS | Local assets and section links resolve; alt text, responsive layouts, and exactly one `<h1>` are present. The brief-specified Buzz URL is included and should be rechecked with production DNS. |

Deployment and DNS are documented here but are **not claimed as completed** by this repository handoff. The external `buzz.creataiv.com` DNS name did not resolve from the validation sandbox on July 25, 2026; its production availability should be checked during deployment.
