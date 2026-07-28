# CREATAIV Core Cell — Growing Team

This repository contains the **framework-free, static CREATAIV Core Cell microsite for an anonymous growing-business owner with up to ten staff**. It is plain HTML/CSS/JavaScript with self-hosted assets and no application runtime, database, analytics, tracker, automated chat widget, third-party form service, OAuth, external production CDN, or Manus dependency.

## Release identity

| Item | Value |
| --- | --- |
| Exact production URL | `https://janet-e4.github.io/corecell-smb10/` |
| Canonical route | `https://janet-e4.github.io/corecell-smb10/` |
| Suggested future DNS | `smb10.creataiv.com` — not configured and not used as production identity |
| Content/release date | `2026-07-28` |
| Release version | `v1.0.0` |
| Private source release revision | `b763da9d89de8a01dadead00d5155cebb5716a97` |
| Public host revision | `179acd0e483024f25b80dde7ea35df48cf751a26` |
| Public host rollback revision | `4707eb126c122cf8f11836d73483b455dae84493` |
| Source repository | `https://github.com/janet-e4/corecell-site-smb10` |
| Reversible baseline | `53bcc09feef44ed893f42b7ee3b3c8e90f61006e` |
| Lead destination | `nick@e4lv.com` |
| Pricing mode | `canonical` |
| Pricing authority | Current 2026-07-28 Jeremy G. brief and Core Cell SOP v1.1 |
| Hosting target | Existing `janet-e4.github.io` GitHub Pages host under `/corecell-smb10/` |

The exact production URL is authoritative for the canonical link, `og:url`, JSON-LD `url`/`@id`, social-image URL, `robots.txt`, `sitemap.xml`, live acceptance command, and handoff report. The unresolved suggested DNS is not present in production metadata.

## Repository structure

```text
/
├── index.html
├── assets/
│   ├── creataiv-logo.png
│   ├── favicon.png
│   ├── hero-owner-desktop.webp
│   ├── hero-owner-mobile.webp
│   ├── og-preview.webp          # physical dimensions: 1200 × 630
│   ├── department-lanes.webp
│   ├── team-knowledge.webp
│   └── fonts/
├── robots.txt
├── sitemap.xml
├── README.md
└── ideas.md
```

All production images, icons, fonts, scripts, and stylesheets are self-hosted. The production page contains no third-party script, stylesheet, font request, image hotlink, tracker, or form processor. QA reports and full-page screenshots are retained in a separate release-evidence directory and are not copied to the public Pages path; this prevents local paths, preview URLs, internal notes, and large captures from becoming public assets.

## Discoverability contract

| Surface | Release requirement |
| --- | --- |
| Canonical | Exactly one absolute HTTPS URL equal to `https://janet-e4.github.io/corecell-smb10/`. |
| Core metadata | Persona-specific title and description plus `index,follow`. |
| Open Graph | `website`, `CREATAIV`, title/description parity, exact canonical `og:url`, and absolute same-origin 1200×630 WebP image with type and alt text. |
| Twitter | `summary_large_image` with fields matching Open Graph. |
| JSON-LD | Truthful `ProfessionalService` identity with exact canonical URL, same-origin logo/image, and no invented business facts. |
| `robots.txt` | Explicit public allowlist and exact absolute sitemap declaration. |
| `sitemap.xml` | One exact canonical `<loc>` and truthful `2026-07-28` `<lastmod>`. |
| Semantics | One `<h1>`, logical headings, real `header`, `main`, headed `section`, and `footer`; core copy and Nick mail form remain usable without JavaScript. |

## Image-family map

| Variant | File | Required consistency |
| --- | --- | --- |
| Desktop hero | `assets/hero-owner-desktop.webp` | Anonymous growing-business owner, deep-teal overshirt, real small-team operations setting, Operational Atlas treatment. |
| Mobile hero | `assets/hero-owner-mobile.webp` | Same person, clothing, environment family, and premise in a tighter portrait composition. |
| Social preview | `assets/og-preview.webp` | Same identity and environment, recomposed to a physical 1200×630 canvas. |

The release review must compare all three files side by side and record the result in the non-public release evidence as `image-family-review.md`. Filename similarity is not evidence.

## Canonical pricing

The page states the current approved terms: **$7,500 plus separately billed hardware**, with **$3,750 to start** and **$3,750 on day one** of the 90-day **Move In → Hand It Over → Run It** program. Hardware is approximately **$500–$5,000**. Required level-one support begins on day 91 at **$650/month**, billed quarterly at **$1,950/quarter**. Hive Mind is separate: **$49/month** for the single-person tier or the recommended **$175/month business tier**, which includes the buyer’s own Buzz install.

## Lead and privacy contract

The form is the sole public lead mechanism and the sole destination is `nick@e4lv.com`. The static enhancement assembles a `mailto:` draft in the visitor’s email program. The site stores and transmits nothing itself. It contains no analytics, pixels, cookies, CRM, webhook, API, automated chat widget, SaaS form, public phone number, or second lead recipient. Visitors are asked not to include customer names, credentials, regulated data, or other sensitive details.

## Preview locally

```bash
python3 -m http.server 8080
```

Localhost is for preview only. Review the whole page at desktop, tablet, and mobile widths plus JavaScript-disabled desktop. Inspect every section, image, focus state, disclosure, overlap, clipping edge, text/background combination, and form field.

## Validate the source package

```bash
python3 /home/ubuntu/skills/corecell-microsite-builder/scripts/validate_microsite.py \
  /home/ubuntu/corecell-site-smb10-v11 \
  --production-url https://janet-e4.github.io/corecell-smb10/ \
  --expected-lastmod 2026-07-28 \
  --pricing-mode canonical \
  --hero-desktop assets/hero-owner-desktop.webp \
  --hero-mobile assets/hero-owner-mobile.webp \
  --report ../corecell-smb10-release-evidence/static-validation.json
```

Fix every failure and manually review every warning. The script does not replace human hard-truth, public-identity, visual-crop, contrast, or image-family review.

## Publish to the permanent GitHub Pages route

The public Pages host is `janet-e4/janet-e4.github.io`. Copy the committed deployable source into its isolated `/corecell-smb10/` directory without changing any unrelated route. Create a host-repository rollback commit before replacement, commit only that path, push, wait for Pages to publish, and record both the private source revision and public host revision here.

Do not add the suggested DNS, change DNS records, purchase a service, enter credentials, delete unrelated content, or introduce a second public identity without the account owner’s explicit confirmation.

Cloudflare Pages and Cloudflare Workers are documented alternatives in the broader Core Cell release workflow, but neither is used for this route. To **edit and republish**, change the private source repository, rerun every source and visual gate, create a new reversible checkpoint, update only the isolated host-repository directory, push the approved revision, and rerun permanent-route acceptance.

## Validate the permanent URL

```bash
node /home/ubuntu/skills/corecell-microsite-builder/scripts/validate_rendered_route.mjs \
  --url https://janet-e4.github.io/corecell-smb10/ \
  --report ../corecell-smb10-release-evidence/rendered-validation.json \
  --screenshots ../corecell-smb10-release-evidence/screenshots
```

The live gate must report zero URL, metadata, schema, semantic, asset, internal-link, overflow, JavaScript-disabled-content, console, page, and same-origin request failures. Full-page desktop, tablet, and mobile captures are required.

## Hard-truth firewall

The page does not claim shipped encryption at rest, a kill switch, blockchain storage, zero-knowledge guarantees, an automatic backup, a shipped mobile app, universal automatic ingestion, guaranteed business outcomes, or invented customer proof. BYO-backup means the owner controls the destination and CREATAIV configures it. Core Cell sits beside existing tools. Janet is the daily local interface; Fritz is deeper support. If day-to-day work keeps requiring Fritz, Janet is not doing her job.

## Release evidence

| Check | Status | Evidence |
| --- | --- | --- |
| Repository, commit, checkpoint, ZIP, and SHA-256 | PASS | Private source release `b763da9…`; baseline `53bcc09…`; public rollback `4707eb1…`; package `corecell-site-smb10-v1.0.0-20260728.zip` with a SHA-256 sidecar. |
| Permanent URL and published revision | PASS | `https://janet-e4.github.io/corecell-smb10/` at public host revision `179acd0e483024f25b80dde7ea35df48cf751a26`. |
| Canonical/social/schema/crawler/sitemap URL agreement | PASS | Deterministic source validation: 53 passes, zero failures. |
| Metadata parity and truthful JSON-LD | PASS | Deterministic source validation and manual truth review. |
| 1200×630 social card and image-family consistency | PASS | Physical dimension check and retained non-public `image-family-review.md`. |
| Semantic HTML and JavaScript-disabled core content | PASS | Source gate and local rendered JavaScript-disabled audit. |
| Nick-only lead path | PASS | Source scan and browser-form review. |
| Forbidden integrations and public-identity scrub | PASS | Source scan and retained non-public `privacy-truth-review.md`. |
| Hard-truth firewall | PASS | Source gate and human claim review. |
| Pricing authority | PASS | Current brief and SOP v1.1 authorize canonical pricing. |
| Full-page responsive visual review | PASS | Retained non-public `visual-review.md` and four local full-page screenshots. |
| Published-route, console, and same-origin request review | PASS | Published-route gate: zero warnings, zero failures, four full-page screenshots; desktop, tablet, mobile, and no-JavaScript captures visually accepted. |

Every release gate is **PASS**. The package checksum, reports, and screenshots are retained with the external handoff evidence rather than copied to the public Pages path.
