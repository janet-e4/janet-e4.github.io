# CREATAIV Core Cell — Confidential Work

This repository contains the **static, single-page CREATAIV Core Cell microsite for Deniz’s private-data persona**. It is plain HTML/CSS/JS with self-hosted assets and no application runtime, database, analytics, tracking scripts, third-party form service, or external CDN.

| Item | Value |
| --- | --- |
| Permanent published URL | `https://janet-e4.github.io/corecell-private-data-live/` |
| Suggested custom domain | `https://private.smb.creataiv.com` |
| Entry page | `index.html` |
| Site assets | `assets/` |
| Lead destination | `nick@e4lv.com` |
| Source repository | Private GitHub repository |
| Publication target | Public GitHub Pages deployment repository; Cloudflare Pages remains an optional custom-domain target |

## Repository structure

```text
/
├── index.html
├── assets/
│   ├── creataiv-horizontal.webp
│   ├── creataiv-icon.webp
│   ├── favicon.png
│   ├── hero-private-data.webp
│   ├── hero-private-data-mobile.webp
│   ├── og-preview.webp
│   └── fonts/
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── README.md
```

All production images, icons, and fonts are stored in this repository. Do not replace them with hotlinks or CDN references. The hero images are AI-generated editorial illustrations of an anonymous professional; they are not a portrait of Deniz or any named person.

## Preview locally

From the repository root, serve the directory with any static file server. For example:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`. Also inspect the page with JavaScript disabled to confirm that the core pitch, pricing, hard-truth status labels, and CTA remain readable.

## Permanent publication

The approved source revision is copied to the public `janet-e4/corecell-private-data-live` deployment repository and published by GitHub Pages. This preserves a private working repository while providing a stable public URL. Each publication must retain the source commit, deployment commit, validation report, and a reversible Git tag.

The suggested custom domain is `private.smb.creataiv.com`. DNS is intentionally not changed by this repository. If the domain is later connected through Cloudflare Pages or another static host, update the canonical and Open Graph URLs in `index.html`, plus `robots.txt` and `sitemap.xml`, in the same revision.

## Deploy with Cloudflare Pages

1. In Cloudflare, create a **Pages** project and connect this GitHub repository.
2. Select **no framework**. Leave the build command empty because the repository already contains deployable static files.
3. Set the output directory to the repository root (`/`). If the interface requires a value, use `.`.
4. Deploy the default branch and confirm that `index.html`, `robots.txt`, and all files in `assets/` resolve successfully.
5. Add the custom domain `private.smb.creataiv.com`, then create or approve the DNS record Cloudflare proposes.
6. Replace the GitHub Pages canonical, Open Graph, robots, and sitemap URLs with the custom-domain equivalents before announcing the domain.

## Deploy with Cloudflare Workers

A **Cloudflare Workers** project can serve this repository as static assets without adding an application backend. Create a Worker with static asset support, set the repository root as the asset directory, leave server-side handlers disabled, and deploy the default branch. Verify `index.html`, `robots.txt`, `sitemap.xml`, and `assets/` before attaching `private.smb.creataiv.com`. Update the canonical, Open Graph, robots, and sitemap URLs in the same approved revision when DNS is later authorized.

## Edit and republish

**Edit the relevant HTML/CSS/JS or local asset, preview and validate the page, commit the change to the private source repository, then copy the approved revision to the deployment repository.**

Before publishing an edit, rerun the Core Cell hard-truth review and confirm that the only lead destination remains `nick@e4lv.com`. Keep future or conceptual redaction language explicitly labeled as in development. Do not turn a buyer-selected model into a categorical statement that no material can ever reach a provider.

## Ownership and privacy constraints

This microsite deliberately includes no analytics, tracking pixel, chatbot, SaaS lead form, cookie banner, external font host, or third-party asset CDN. Core Cell copy must not present encryption at rest, a kill switch, wipe function, blockchain storage, permanent storage, a finished redaction workflow, or a downloadable mobile app as shipped functionality.

The public form uses `mailto:nick@e4lv.com`. It opens the visitor’s email program and stores nothing on the website. The form intentionally warns visitors not to include client names, matter details, account numbers, privileged facts, or other sensitive information.

## Pricing truth source

The site preserves the approved pricing exactly: **$7,500 plus hardware**, with hardware billed separately at **$500–$5,000**; **$3,750 at signing** and **$3,750 on day one of the 90-day program**; required level-one support beginning on day 91 at **$650 per month**, billed quarterly at **$1,950 per quarter**; and the optional Hive Mind add-on at **$49 per month** for the single-person tier or **$175 per month** for the business tier.
