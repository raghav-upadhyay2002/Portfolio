---
name: Raghav Upadhyay — Portfolio
description: A living academic preprint, not a resume page — evidence over decoration, argued through real manuscript conventions.
colors:
  near-black-graphite: "#0b0c0e"
  raised-graphite: "#111317"
  elevated-graphite: "#181a1f"
  warm-manuscript-ink: "#e9e6df"
  dimmed-ink: "#a9a59c"
  faint-ink: "#79766d"
  non-repro-blue: "#86b3da"
  non-repro-blue-dim: "rgba(134, 179, 218, 0.13)"
  gate-vermillion: "#dd6a49"
  gate-vermillion-dim: "rgba(221, 106, 73, 0.14)"
  hairline-border: "#26282d"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.75
  chrome:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    letterSpacing: "0.1em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  none: "0.1875rem"
  sm: "0.09375rem"
  md: "0.1875rem"
spacing:
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2.5rem"
  xl: "5rem"
components:
  button-bordered:
    backgroundColor: "transparent"
    textColor: "{colors.warm-manuscript-ink}"
    rounded: "{rounded.none}"
    padding: "0.625rem 1.25rem"
  button-bordered-hover:
    backgroundColor: "transparent"
    textColor: "{colors.non-repro-blue}"
  citation-mark:
    backgroundColor: "transparent"
    textColor: "{colors.non-repro-blue}"
    typography: "{typography.data}"
---

# Design System: Raghav Upadhyay — Portfolio

## Overview

**Creative North Star: "The Manuscript"**

The site reads as a living academic preprint rather than a resume page — a technical paper read at night on a screen. It refuses two AI-portfolio defaults observed and rejected during the build: the dashboard/glassmorphism dark-neon look (the exact look this project's own prior design used, now replaced) and the cream-paper/serif editorial cliché. Its argument — evidence over decoration, nothing ships without a real citation, link, or number behind it — is made through actual document conventions rather than described in copy: a running paper-header instead of a navbar, numbered Figures with real captions, inline citation numbers that are real cross-references, a revision-history timeline, an Appendix, a References section, and Correspondence instead of a contact form.

The register is restrained, citational, and documentary throughout. Confirmed visual rejections carried through the shipped build: no gradient text anywhere, no glassmorphism or blur used as decoration (the one `backdrop-blur-sm` in the system is on the fixed paper-header, a functional legibility aid over scrolling content, not a decorative panel), no stat-card grids (the "big number, small label" hero-metric template), no decorative eyebrow/kicker sitting above a heading with no referential meaning, no colored border-left accents used as decoration, and no rounded "app UI" corners.

**Key Characteristics:**
- Single committed dark world — near-black graphite ground, warm off-white ink, no light mode offered (the scene is a document read at night, so light mode is not a variant to add later)
- Exactly two functional accent colors in the entire system (see The Two-Mark Rule)
- Near-square corners everywhere (`--radius: 0.1875rem`) — a manuscript, table, or form has square corners
- Flat by default: hairline borders delineate surfaces, not shadows
- Three-font system with strict role separation: serif for manuscript voice, sans only at UI-chrome sizes, mono for every data/timestamp/figure-number value

## Colors

The palette is a single dark graphite scale with exactly two functional accents; there is no light mode.

### Primary
- **Non-Repro Blue** (`#86b3da`): the one default functional accent — a real print-production term for a blue used in editorial markup that doesn't reproduce when scanned. Used for all links, citation numbers (`[1]`, `Fig. 2`, `Table 1`), figure/table markers, the "current" revision tag, and focus rings (`--ring`). A 13%-opacity tint (`--mark-dim`, `rgba(134,179,218,0.13)`) is available for subtle fills/backgrounds keyed to the same accent.

### Secondary
- **Gate Vermillion / Reviewer's Red** (`#dd6a49`): reserved only for fail/attention/gate states — e.g. the "fail → blocked" branch of the CI-gate diagram outcome reveal. Never used decoratively and never doubles as a second "pretty" accent. A 14%-opacity tint (`--gate-dim`, `rgba(221,106,73,0.14)`) exists for the same reserved purpose.

### Neutral
- **Near-Black Graphite** (`#0b0c0e`): page background (`--ground`).
- **Raised Graphite** (`#111317`): first-level panel background (`--surface`) — the status aside, standard figure cards, the back-to-top control.
- **Elevated Graphite** (`#181a1f`): second-level panel background (`--surface-2`) — citation tooltips, popovers.
- **Warm Manuscript Ink** (`#e9e6df`): primary text color, deliberately warm off-white rather than pure white, evoking paper ink read on a dark screen.
- **Dimmed Ink** (`#a9a59c`): secondary/body-dim text — abstract prose, figure bodies, nav hover-inactive state.
- **Faint Ink** (`#79766d`): metadata, timestamps, captions, figure/table labels, section eyebrows.
- **Hairline border** (`#26282d`): the single rule color for every divider, table rule, and card outline in the system (`--border`).

### Named Rules
**The Two-Mark Rule.** Exactly two functional accent colors exist in the whole system: Non-Repro Blue for every default mark, link, and citation, and Gate Vermillion reserved only for fail/attention states. A third accent is never introduced, even for a "success" state — an absence of red already reads as passing.

**The Citation Rule.** Every numbered mark on the page — `[1]`, `Fig. 2`, `Table 1` — is a real, working cross-reference a reader can follow (confirmed in `src/components/citation.tsx`, whose tooltip carries a "jump to source →" anchor link, and in `figures.tsx`'s numbered Fig./Table captions), never a decorative label. This is also why section numbers (e.g. "3. Figures", "4. Revision History", "5. Results") are permitted here despite eyebrow/kicker devices being generally refused elsewhere in this system: they carry real referential information, not decorative rank.

## Typography

**Display/Body Font:** Source Serif 4 (with Georgia, serif fallback)
**UI-Chrome Font:** Inter (with system-ui, sans-serif fallback) — used only at nav/label/button sizes, never as a display face
**Data/Mono Font:** JetBrains Mono (with ui-monospace fallback) — used for all data, measurements, timestamps, captions, and figure/table numbers

**Character:** The serif carries the manuscript's actual voice (headings, abstract prose, figure bodies, pull-quote thesis line) at a generous 1.75 line-height; Inter appears only where the interface is chrome, not prose; JetBrains Mono renders every piece of metadata the way build output actually renders, because this world treats the site itself as a build artifact.

### Hierarchy
- **Display** (400, `2.5rem` → `4.5rem` clamp, line-height 1.04): the title-block `<h1>` — the subject's name set as a paper title.
- **Headline** (400, `1.5rem`–`1.875rem`, line-height ~1.3, serif): numbered section headings ("3. Figures", "4. Revision History").
- **Title** (400, `1.25rem`–`1.5rem`, serif): individual figure/article titles within a section.
- **Body** (400, `1.05rem` serif, line-height 1.75, `68ch` max measure via `.prose-measure`): abstract paragraphs, figure descriptions, revision-history bullet prose.
- **Label** (400, `11px`–`0.875rem` mono or sans, `0.06em`–`0.16em` letter-spacing, uppercase): nav items, figure/table captions, status-panel keys, button text, timestamps.

### Named Rules
**The Voice-vs-Chrome Rule.** Source Serif 4 is reserved for the document's own voice (headings and prose); Inter never appears above UI-chrome size and never carries a heading. Mixing the two inverts the manuscript metaphor.

## Layout

Single long-scroll page, `max-w-5xl` centered container, `px-4`/`px-6` horizontal padding. Sections stack full-bleed with a `hairline-t`/`hairline-b` (1px `--border`) rule between them rather than background-color changes or gap-only separation — the page reads as adjoining manuscript sections, not floating cards. Vertical rhythm is generous: `py-16`/`py-20` per section, `space-y-12` between revision entries. The title block's status aside breaks to a `1fr / 320px` two-column grid at `lg`, collapsing to a single column below. A fixed 48px (`h-12`) running paper-header sits above all content (`z-50`); a floating back-to-top control appears past `900px` of scroll.

## Elevation & Depth

The system is flat by default: surfaces are delineated with 1px hairline borders (`--border: #26282d`), never shadows. Confirmed by scanning every component: the only real drop shadows in the entire system belong to two floating/overlay elements — the fixed back-to-top control (`box-shadow: 0 4px 16px rgba(0,0,0,0.35)` in `back-to-top.tsx`) and the citation tooltip popover (`box-shadow: 0 8px 24px rgba(0,0,0,0.45)` in `citation.tsx`). Both are UI chrome floating above the page, never page content itself — a card, table, or figure never carries a shadow.

### Shadow Vocabulary
- **Floating-control shadow** (`box-shadow: 0 4px 16px rgba(0,0,0,0.35)`): the back-to-top button only.
- **Overlay-tooltip shadow** (`box-shadow: 0 8px 24px rgba(0,0,0,0.45)`): citation footnote tooltips only.

### Named Rules
**The Flat-by-Default Rule.** Page content — cards, tables, figures, the status aside — is delineated by hairline borders, never shadows. Shadow is reserved exclusively for floating/overlay UI (back-to-top, citation tooltips) that visually detaches from the document flow.

## Shapes

Corners are near-square throughout (`--radius: 0.1875rem`, scaled up via `--radius-lg` through `--radius-4xl` for the rare larger radius need) — a deliberate rejection of soft "app UI" rounding, because a manuscript, table, or form has square corners. Borders are always 1px solid `--border` hairlines; there is no card-style drop-shadow silhouette anywhere in page content. Images (the author photo) are square-cropped with a hairline border, not circular avatar treatment.

## Components

### Buttons
- **Shape:** near-square (`0.1875rem`), 1px bordered — never a filled or gradient pill.
- **Primary pattern (bordered text-label):** transparent background, `--border` outline, uppercase mono label (`11px`, `0.14em` tracking), `~10px/20px` padding. Confirmed in the title block's "Download CV ↓" and `not-found.tsx`'s "Back to home" — both are plain bordered anchors, not filled buttons.
- **Hover / Focus:** border and text shift to Non-Repro Blue (`hover:border-mark hover:text-mark`); focus-visible gets a 2px Non-Repro Blue outline with 2px offset, defined globally.
- **Note:** a generic shadcn `Button` primitive exists at `src/components/ui/button.tsx` (filled `bg-primary`, `rounded-lg` pill-radius variants) but is unused anywhere in the shipped page — it is scaffolding, not the system's real button. Do not treat its filled/rounded variants as canonical; the bordered text-label pattern above is what shipped.

### Tables
- **Style:** real `<table>` elements, `border-collapse`, 1px `--border` row rules, no zebra striping, no cell shading. Headers are uppercase mono (`11px`, `0.12em` tracking), body cells alternate serif (row headers) and mono (`13px`, tabular-nums data).
- **Caption:** left-aligned, uppercase mono, doubles as the figure/table number ("Table 1 — CI gate thresholds").
- Confirmed in `figures.tsx` (CI gate thresholds table) and `results-table.tsx` (skills/tools table).

### Navigation (Running Paper-Header)
- **Style:** fixed 48px bar, `bg-ground/92` with `backdrop-blur-sm` (the one functional, non-decorative blur in the system — legibility over scrolling content), 1px bottom border. Section links render as uppercase mono labels (`11px`, `0.14em` tracking); the active section (via `IntersectionObserver`) turns Non-Repro Blue, inactive sections dim to ink on hover.
- **Mobile:** collapses to a hamburger-toggled dropdown list rendered inline below the bar, same label typography.
- This is a paper-header, not a navbar: it also carries the site's revision string as a persistent identifier, echoing an arXiv-style running head.

### Signature: Citation Footnote (`src/components/citation.tsx`)
A superscript mono `[n]` button that toggles (and also responds to hover/focus) a bordered `Elevated Graphite` tooltip containing the real citation preview text and a "jump to source →` anchor link to the actual figure/section `id`. This is the load-bearing proof of the Citation Rule: every mark is a real cross-reference, not a decorative footnote glyph.

### Signature: RAG Pipeline Diagram (`src/components/sections/rag-diagram.tsx`)
A hand-authored SVG diagram of the AskMyDocs pipeline (PDF → chunk → hybrid search → rerank → LLM → judge → CI gate), stroked in the neutral `ink-faint` outline color with Non-Repro Blue and Gate Vermillion reserved for the two gate outcomes. The pass/fail branches are revealed via one authored `motion`/`whileInView` sequence (`pathLength` draw-on + staggered label fade), gated on `useReducedMotion` and firing only `once`.

### Signature: Illumination/Degradation Demo (`src/components/sections/illumination-demo.tsx`)
An SVG line chart illustrating the robotics finding — a relative-structure detector (Non-Repro Blue line) holding steady confidence against an absolute-brightness detector (Gate Vermillion line) collapsing as corridor illumination drops. Uses the same `motion`/`whileInView`/`useReducedMotion`/`once` authored-draw pattern as the RAG diagram; explicitly labeled "Illustrative" in its caption to avoid misrepresenting it as plotted telemetry.

### Verified Mark (`src/components/verified-mark.tsx`)
A small mono checkmark + label (`Check` icon, 9px, Non-Repro Blue at 80% opacity). Confirmed by grep: it appears in exactly two places in the entire shipped page — the arXiv link in `publication.tsx` and the CI-gate-thresholds table caption in `figures.tsx`. It marks independently-checkable claims, never a decorative badge.

## Do's and Don'ts

### Do:
- **Do** use Non-Repro Blue (`#86b3da`) as the only default link/mark/citation color, and Gate Vermillion (`#dd6a49`) only for fail/attention/gate states — never introduce a third accent.
- **Do** delineate all page-content surfaces with 1px `--border` hairlines; reserve shadow exclusively for floating/overlay UI (back-to-top, tooltips).
- **Do** keep every numbered mark (`[n]`, `Fig. n`, `Table n`) wired to a real, followable cross-reference.
- **Do** hold corners at `0.1875rem` (near-square) everywhere; do not introduce a larger, softer radius scale for new surfaces.
- **Do** restrict Inter to UI-chrome sizes (nav, labels, buttons) and JetBrains Mono to data/timestamps/captions; keep Source Serif 4 as the only heading and prose voice.
- **Do** gate any new scroll-triggered animation on `useReducedMotion` and fire it `whileInView` with `once: true`, matching the two existing authored moments (RAG diagram, illumination demo).

### Don't:
- **Don't** add gradient text, glassmorphism-as-decoration, or a stat-card "big number, small label" hero-metric grid — all three were explicitly rejected in this build.
- **Don't** add a decorative eyebrow/kicker above a heading that carries no referential information; the system's section numbers are permitted only because they are real cross-reference anchors (see The Citation Rule), not because bare kickers are acceptable.
- **Don't** add colored border-left accent bars as a decorative device.
- **Don't** use the unused shadcn `Button` primitive's filled/gradient/rounded-pill variants (`src/components/ui/button.tsx`) as a model for new buttons; the shipped pattern is the bordered text-label anchor.
- **Don't** scatter the Verified Mark as a generic trust badge; it is reserved for independently-checkable claims and currently appears in exactly two places by design.
- **Don't** add a light mode variant; the single dark graphite world is a stated invariant of this surface, not a missing feature.
