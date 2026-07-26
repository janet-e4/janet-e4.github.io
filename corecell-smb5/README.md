# CREATAIV Core Cell — Eric Small-Team Site

This repository contains the **static, single-page CREATAIV Core Cell microsite for Eric, a hands-on owner with a team of five or fewer**. It is plain HTML/CSS/JS with self-hosted assets and no application runtime, database, analytics, tracking scripts, third-party form service, or external CDN.

| Item | Value |
| --- | --- |
| Permanent published URL | `https://janet-e4.github.io/corecell-smb5/` |
| Optional future custom domain | `https://smb5.creataiv.com` |
| Entry page | `index.html` |
| Site assets | `assets/` |
| Lead destination | `nick@e4lv.com` |
| Hosting target | GitHub Pages, isolated at `/corecell-smb5/` |
| Visual mode | Warm, energetic, operations-minded small team |

## Repository structure

```text
/
├── index.html
├── assets/
│   ├── creataiv-horizontal.webp
│   ├── creataiv-horizontal-tight.webp
│   ├── creataiv-icon.webp
│   ├── favicon.png
│   ├── hero-eric.webp
│   ├── hero-eric-mobile.webp
│   ├── og-preview.webp
│   └── fonts/        # font files and OFL license texts
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── README.md
```

All production images, icons, fonts, and scripts are stored in this repository. Do not replace them with hotlinks or CDN references.

The Eric hero person is an original, site-specific visual. The v1.0.2 desktop and mobile compositions intentionally show Eric at a smaller environmental scale with his complete head and generous headroom while preserving the warm workshop setting. **Do not substitute either person from the Christina/retired-owner site or the Deniz/private-data site, and do not reuse Eric as the hero on a later persona site.** Each Core Cell persona should remain visibly distinct.

## Preview locally

From the repository root, serve the directory with any static file server. For example:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`. Also inspect the page with JavaScript disabled to confirm that the core pitch, pricing, and Nick CTA remain readable.

## Permanent GitHub Pages publication

The approved site is published as an isolated subdirectory in the existing `janet-e4/janet-e4.github.io` Pages repository. The public entry point is `https://janet-e4.github.io/corecell-smb5/`. Publishing or updating this site must preserve all unrelated root files and other persona directories byte-for-byte.

1. Validate this source repository and create a tagged source revision.
2. Create a rollback tag at the current Pages-host repository revision.
3. Replace only `/corecell-smb5/` with the validated tagged source, excluding source-control metadata.
4. Confirm that no unrelated path changed, commit, and push the Pages host repository.
5. Wait for the GitHub Pages deployment workflow to succeed.
6. Verify the production page, Open Graph image, favicon, sole Nick CTA, sitemap, HTTPS response, and responsive rendering.

## Optional future Cloudflare Pages or Workers deployment

Cloudflare Pages can also serve this repository as a no-framework static site with no build command and the repository root as the output directory. If a later DNS change is approved, `smb5.creataiv.com` can be attached there. Alternatively, use Cloudflare Workers static assets:

1. Create a Cloudflare Worker whose static asset directory is this repository root.
2. Configure the Worker to serve `index.html` for `/` and upload the repository files as static assets; no server-side application code is required.
3. Deploy the Worker and verify the Cloudflare preview URL.
4. Add the Worker route or custom domain `smb5.creataiv.com` and create the corresponding Cloudflare DNS record.
5. Verify that every local asset resolves, the page remains readable without JavaScript, and no redirect creates a second lead path.

If the team uses Wrangler, keep any Wrangler configuration limited to deployment metadata and static-asset binding. Do not add a JavaScript application server, authentication layer, package-dependent runtime, or Manus service.

## Edit and republish

**Edit the relevant HTML/CSS/JS or local asset in this source repository, preview and validate the page, tag the approved revision, then copy only that revision into `/corecell-smb5/` in the Pages host repository.**

Before publishing an edit, rerun the Core Cell hard-truth review and confirm that the only lead destination remains `nick@e4lv.com`.

## Ownership, pricing, and privacy constraints

This microsite deliberately includes no analytics, tracking pixel, automated chat, SaaS lead form, cookie banner, external font host, or third-party asset CDN. Core Cell copy must not present encryption at rest, a kill switch, blockchain storage, or a downloadable mobile app as shipped functionality.

The approved Eric persona may state pricing. For this site, the owner explicitly corrected the startup price on 2026-07-26 to an Eric-specific **$17,500 plus separately billed hardware of approximately $500–$5,000; $8,750 at signing and $8,750 on day one of the 90-day program; required $650/month level-one support beginning day 91 and billed quarterly at $1,950; optional Hive Mind at $49/month for the single-person tier or $175/month for the business tier.** This documented Eric-specific correction supersedes the older `$7,500` factory-template value for this microsite only.

The line **“Five people. The output of fifteen.”** is positioning, not a guaranteed performance multiple. The page therefore qualifies that actual gains depend on the work taught to Core Cell and consistent team use.

## Asset provenance

The CREATAIV logos, favicon, and self-hosted font files follow the approved Core Cell brand kit. `creataiv-horizontal-tight.webp` is a tightly cropped derivative of the unchanged approved horizontal wordmark, created so the visible header logo is legible at its true aspect ratio; the original source asset remains in the repository. Font licenses are included beside the font files under `assets/fonts/`. Eric’s desktop and mobile hero images and the Open Graph preview were generated specifically for this microsite and optimized into local WebP files. The desktop and mobile hero images were reframed in v1.0.2 to preserve the approved workshop background while reducing Eric’s apparent scale and keeping his full head visible.
