# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui, statically exported (`output: 'export'`) and deployed to GitHub Pages via a GitHub Actions build. User-decided (asked explicitly): recommended because the current hand-rolled CSS already emulates shadcn/ui's zinc-dark aesthetic in plain CSS, and a real component + Tailwind stack pairs directly with the Motion animation library the installed `animate` skill targets. Custom domain preserved via the existing `CNAME` (`raghavupadhyay.org`); no backend/server, no CMS.

## Users

Primary: hiring managers and recruiters evaluating Raghav Upadhyay for full-time AI/ML engineering roles in the US (evidenced by the hero availability pill and the Contact section's explicit "looking for AI/ML engineering and research roles" statement — this is the site's stated purpose, not an inference from silence).

Secondary: academic collaborators, researchers, or engineers who arrive via his GitHub, Hugging Face Spaces, LinkedIn, or arXiv listing and want to verify a specific claim (a metric, a result, a paper) rather than get a general impression.

## Product Purpose

A personal portfolio that proves hands-on rigor in LLM evaluation/reliability, RAG systems, and vision-based robotics research, and converts a visit into an interview request or research conversation. Success is a visitor being convinced enough by checkable evidence (live demos, repos, a paper under review, CI gates) to email him.

## Positioning

Unlike typical ML portfolios that showcase demos, the mechanism here is "measured and gated, not eyeballed": AskMyDocs fails its own GitHub Actions build if faithfulness drops below 0.70 or citation rate below 0.80; the robotics work reports a counter-intuitive *negative* result (brightness-keyed detectors break under dimming) rather than a "look, it works" demo; the social-network study explicitly tests whether its own findings are artifacts of a single prompting method rather than reporting one clean result. A neighboring portfolio could not truthfully copy this without the underlying deployed, CI-graded systems and the completed, self-scrutinized research behind it.

## Operating Context

Today the site is a single long-scroll page with anchor-nav sections (Home/Hero, About, Projects, Experience, Skills, Certificates, Education, Publications, Resume, Contact) plus standalone Privacy Policy and custom 404 pages. Visitors arrive via links from LinkedIn, GitHub, Hugging Face, arXiv, or a direct URL shared during a job application. Google Analytics (GA4) runs on the main page only, disclosed in the Privacy Policy.

The redesign replaces the look and (per the user's stack decision) the implementation, but keeps this as a static, content-driven personal site with no login, no CMS, and no server-side logic.

## Capabilities and Constraints

- No CMS or backend; all content lives in source (component/data files instead of hand-written HTML, once rebuilt).
- Must preserve exactly: project titles/descriptions/metrics/tech tags/links (GitHub, Hugging Face Spaces, arXiv), the CV PDF (`Raghav_Upadhyay_CV.pdf`), the real headshot (`Raghav_profile.jpg`), contact links (email, LinkedIn, GitHub, Hugging Face, arXiv), and SEO surface (meta tags, JSON-LD `Person` + `ScholarlyArticle` structured data or equivalent, `sitemap.xml`, `robots.txt`, GA4 tag).
- Deploy target: GitHub Pages static hosting at `raghavupadhyay.org` (custom domain via `CNAME`); the new build must ship a GitHub Actions workflow that builds the static export and publishes it, since the current deploy is raw files with no build step.
- Must preserve the existing `prefers-reduced-motion` behavior (all current motion — canvas particles, counters, marquee, scroll effects — is neutralized for users who request reduced motion); this is existing behavior to carry forward, not a newly stated requirement.
- `Raghav_Upadhyay_Resume.pdf` exists in assets but is referenced nowhere on the current site (orphaned). Default: leave it unreferenced in the rebuild unless the user asks to surface it.
- Confirmed correction for this pass (asked explicitly): the hero typing-animation phrase list in `assets/jss/styles.js` still reads "Research Assistant @ VSI Lab", stale against every other section's already-updated "Research Collaborator @ University of Arizona." The rebuild uses the current title everywhere, including that phrase list.
- No testimonials, customer logos, pricing, or licensing exist anywhere in the current site or its evidence — none should be invented.

## Brand Commitments

Name: Raghav Upadhyay. No standalone logo file exists — the current "mark" is an inline three-dot/triangle SVG (green/cyan/blue), reused as both the nav logo and the favicon. This is evidence of a prior choice, not a binding identity constraint the user stated explicitly; the user granted full creative freedom on visual identity, so new-work may keep, evolve, or replace this mark. The real headshot photo and the real CV file are not replaceable — no stand-in or invented imagery.

Current typography (Space Grotesk + JetBrains Mono) and current color system are prior visual choices, not stated-binding constraints — visual identity decisions belong to new-work, not here.

## Evidence on Hand

**Projects** (all real, deployed or published; preserve descriptions/metrics/links verbatim in meaning):
1. AskMyDocs — production RAG app, live on Hugging Face Spaces, GitHub public, hybrid 60/40 vector+BM25 retrieval, cross-encoder rerank, CI-gated LLM-judge evaluation (faithfulness ≥0.70, relevance ≥0.70, citation rate ≥0.80).
2. Vision-Based Virtual Maze Navigator — e-puck robot, Webots simulation, OpenCV, GitHub public with `RESULTS.md` write-up and a demo video; feeds directly into the current UArizona research role.
3. LLM-Generated Social Networks (capstone, first-author) — under review at NeurIPS 2026, public on arXiv (`arXiv:2605.12898`), 192 generated networks across 4 cultures × 4 languages × 3 model tiers.
4. RUL Prediction with LSTM — uncertainty-aware predictive maintenance on NASA C-MAPSS, GitHub public.
5–7. Three smaller projects (commonsense reasoning benchmark, hate-speech text classification, abstractive summarizer app) — all GitHub public, supporting breadth rather than anchor credibility.

**Experience:**
- Research Collaborator, University of Arizona (Aug 2026–present), advised by Prof. Eungjoo Lee, target venue IEEE RA-L, GitHub repo `visual-reliability-nav` public.
- Data Analyst Intern, Sudhir Mehrotra & Associates (Jan–Aug 2025).

**Education:** M.S. Data Science, University of Arizona (Apr 2024–May 2026, GPA 3.78/4.00); B.Tech CSE, SRM Institute of Science and Technology (2020–2024, CGPA 8.51/10.00).

**Certificates:** Anthropic "AI Fluency: Framework & Foundations", Anthropic "Claude 101", NVIDIA "Fundamentals of Accelerated Data Science", AWS Academy Cloud Operations — each with a real verification link.

**Publications:** "When Do LLMs Generate Realistic Social Networks?" — first author, under review NeurIPS 2026, arXiv:2605.12898, real co-author list.

**Skills:** real tag lists across LLMs & RAG, LLM Eval & Reliability, Deep Learning, Computer Vision & Robotics, Languages, Data & Viz, MLOps & Tools, Databases — see current `index.html` for exact tags; do not invent additional ones.

**Contact:** email `raghav0408upadhyay@gmail.com`, LinkedIn `raghavupadhya04`, GitHub `raghav-upadhyay2002`, Hugging Face `raghavupadhyay`, arXiv author page. No Twitter/X presence.

**Absences to not fabricate:** no testimonials, no customer/client logos, no pricing, no press mentions, no additional employers or degrees beyond the above.

## Product Principles

1. Every claim traces to a checkable artifact — a live demo, a public repo, an arXiv link, or a CI badge — never illustrate a capability that isn't actually shipped.
2. Numbers replace adjectives: cite the metric (192 networks, 0.70 faithfulness gate, 792 trials, 30% reduction) rather than describing work as "robust" or "thorough."
3. The site's job is to shorten the path from "arrived" to "convinced enough to email" — every section should earn its place against that job, not against visual novelty alone.
4. Preserve exact technical specificity (model names, thresholds, dataset names, venue names) — generic marketing language would misrepresent the work.
5. AskMyDocs (CI-gated RAG), the robotics negative-result finding, and the first-author NeurIPS submission are the three anchor credibility pieces; the remaining projects support breadth and should read as secondary, not equal-weight.
