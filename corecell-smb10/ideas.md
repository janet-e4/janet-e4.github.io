# Jeremy G. Core Cell Microsite — Design Direction

## Three candidate approaches

| Theme Name | Very Brief Intro | Probability |
| --- | --- | ---: |
| **Operational Atlas** | A mature operating map for a growing company: editorial clarity, wayfinding geometry, department routes, and one calm command point. It communicates structure without turning enterprise-cold. | 0.031 |
| **Paper Ledger Modernism** | A tactile, light-first composition inspired by field notebooks, operating manuals, and annotated business ledgers. It would feel human, practical, and deliberately low-tech. | 0.006 |
| **Human Relay Documentary** | A warm photographic system centered on people passing knowledge across a real small team, supported by restrained captions and documentary pacing. | 0.082 |

## Chosen approach: Operational Atlas

**Design Movement.** The direction combines International Typographic Style, transit wayfinding, and mid-century industrial operating manuals. It treats the page as a clear map of how knowledge moves through a ten-person company rather than as a generic software landing page.

**Core Principles.** Every section must reinforce four ideas: one shared operating memory, visible departmental lanes, owner control, and human conversation. Geometry is square and purposeful; emphasis comes from route lines, coordinates, labels, and editorial scale rather than rounded cards. The page alternates dark command fields with mineral-white working fields so the story feels organized but not sterile. Human imagery remains documentary and grounded, never cybernetic or futuristic.

**Color Philosophy.** Deep navy represents the owner-controlled Core Cell: stable, private, and central. Mineral white gives complex operational ideas room to breathe. **Lattice Teal** traces knowledge routes across departments, while restrained decision gold marks the few moments where the owner should act. Rust appears only around friction and scattered knowledge. This functional color logic should make the system understandable before a visitor reads every word.

| Token | Value | Role |
| --- | --- | --- |
| Command Navy | `#06111C` | Owner-controlled core, header, hero, and high-confidence sections |
| Mineral White | `#F4F1E8` | Editorial working fields and long-form readability |
| Paper | `#FBFAF6` | Secondary light sections and content surfaces |
| **Lattice Teal** | `#00A7A7` | Signature brand color; knowledge routes, active states, and section wayfinding |
| Decision Gold | `#D8A84C` | Primary CTA and key commercial moments |
| Friction Rust | `#B85F3F` | Pain points and scattered-knowledge markers only |

**Layout Paradigm.** An asymmetric operating spine runs down the page. A narrow left rail carries section codes and coordinates; the wider right field carries the argument, diagrams, and proof. The hero uses an uneven copy/image split, while the department section becomes a horizontal route map rather than a centered feature grid. On mobile, the rail collapses into compact route labels while the narrative remains linear and complete.

**Signature Elements.** The first motif is a teal route line connecting section coordinates. The second is a four-lane department band for Sales, Service, Operations, and Marketing. The third is a clipped-corner decision marker used sparingly for the sole Nick CTA and price milestones.

**Interaction Philosophy.** Interaction should feel like following a well-marked operating route. Navigation links reveal their path with a short left-to-right line; buttons shift a few pixels in the intended direction and compress on activation; question disclosures open quickly without decorative delay. Keyboard interaction remains immediate, and every essential message is present without JavaScript.

**Animation.** Section content may enter with opacity and a maximum 18-pixel translation over 260–420 milliseconds using a strong ease-out, staggered by 45 milliseconds. Route lines may draw once as they enter the viewport. Hover and press responses remain under 180 milliseconds. No scale-from-zero, looping glow, parallax, or layout animation is permitted. Under `prefers-reduced-motion`, entrances, line drawing, and smooth scrolling are disabled.

**Typography System.** Self-hosted Rajdhani carries headlines and body copy because its condensed geometry feels operational while retaining a human voice. Orbitron is restricted to small coordinate labels, section numbers, and the product signature; it must never dominate paragraphs. The H1 is large, tightly tracked, and sentence-cased. H2s use a strong Rajdhani weight with generous line breaks, while body copy remains at least 18 pixels with a relaxed 1.5–1.6 line height.

**Brand Essence.** Core Cell is the owner-controlled operating memory for growing small teams that need one shared brain without an IT department or another per-seat dependency. Personality: **structured, candid, owner-minded**.

**Brand Voice.** Headlines sound like an experienced operator naming the real problem; CTAs sound like a practical next conversation, not a funnel. Microcopy is short, specific, and free of software jargon. Example headline: **“Ten people. One brain. Every department smarter.”** Example microcopy: **“Keep the tools. Give the company one place to remember.”** Generic greetings and generic “get started” language are banned.

**Wordmark & Logo.** Use the approved CREATAIV horizontal wordmark with its distinctive existing letterforms and the approved Core Cell graphic icon as a visible route marker and favicon. Do not regenerate or typeset the brand name in a default font. The icon must remain clearly legible in the header and cannot be reduced to a tiny decorative speck.

**Signature Brand Color.** **Lattice Teal (`#00A7A7`)** is the ownable color for this persona. It appears wherever knowledge moves, departments connect, or the visitor advances through the operating story.

## File-level reminders

Every HTML, CSS, or JavaScript file edited for this release must begin with a short comment reminding the implementer that Operational Atlas is an asymmetric owner-control map using navy command fields, mineral working fields, Lattice Teal routes, decision gold, documentary people, and restrained wayfinding motion. When a design choice is uncertain, ask: **Does this reinforce the operating map, or dilute it?**
