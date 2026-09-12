# raghavupadhyay.org — Portfolio

Personal portfolio site for **Raghav Upadhyay** — AI/ML Engineer building production-grade LLM and deep learning systems, from retrieval to evaluation to deployment.

👉 **Live:** [raghavupadhyay.org](https://raghavupadhyay.org)

---

## 🧠 About Me

I'm an AI/ML Engineer focused on the unglamorous part of LLM work: making systems *reliable*. Retrieval quality, grounded answers, measurable evaluation, and shipping things people can actually use.

Current focus areas:
- LLM systems — RAG pipelines, hybrid retrieval, cross-encoder reranking, citation grounding
- LLM evaluation & reliability — LLM-as-a-judge, hallucination detection, CI-gated quality thresholds
- Deep learning — LSTM/attention architectures, uncertainty quantification, explainability
- Computer vision & robotics — visual navigation in simulation (Webots / OpenCV)

M.S. in Data Science, University of Arizona (May 2026). Research Collaborator at the University of Arizona. Open to full-time AI/ML Engineer roles across the US.

---

## 🗂️ Design: "The Manuscript"

The site is built as a living preprint rather than a conventional resume page — a running paper-style header instead of a navbar, projects presented as numbered Figures with a real results table, experience as a paper's revision history, and inline citation numbers that jump to their source. Full design rationale lives in [DESIGN.md](DESIGN.md).

| Section | Contents |
| --- | --- |
| **Abstract** | Title block, thesis statement, status panel, build-log ticker |
| **Method** | The three-step engineering loop: Retrieve, Evaluate, Ship |
| **Figures** | AskMyDocs (featured, with a hand-drawn pipeline diagram + CI-gate table), maze navigator, capstone study, RUL prediction, supporting NLP work |
| **Revision History** | Work experience, versioned like a paper (v1, v2…) |
| **Results** | Skills, grouped by how they're actually used together |
| **Appendix** | Education (A) and certificates (B) |
| **References** | Full publication write-up — arXiv preprint, under review at NeurIPS 2026 |
| **Correspondence** | Email, LinkedIn, GitHub, Hugging Face, arXiv |

---

## 🔬 Featured Work

- **[AskMyDocs](https://github.com/raghav-upadhyay2002/AskMyDocs)** — production-grade RAG over user-uploaded PDFs with hybrid retrieval (ChromaDB 60% + BM25 40%), cross-encoder reranking, hallucination detection, and an LLM-as-a-judge harness wired into GitHub Actions. [Live demo →](https://huggingface.co/spaces/raghavupadhyay/askmydocs)
- **[Vision-Based Virtual Maze Navigator](https://github.com/raghav-upadhyay2002/Vision-Based-Virtual-Maze-Navigator)** — autonomous e-puck agent navigating an unknown Webots maze from camera pixels alone; now the seed project for faculty-advised research targeting IEEE RA-L.
- **[RUL Prediction with LSTM](https://github.com/raghav-upadhyay2002/RUL-prediction-using-LSTM-for-Aircraft-Engine)** — four recurrent architectures benchmarked on NASA C-MAPSS with MC Dropout and deep ensembles for uncertainty-aware maintenance decisions.
- **[When Do LLMs Generate Realistic Social Networks?](https://arxiv.org/abs/2605.12898)** — arXiv:2605.12898, first-author, under review at NeurIPS 2026.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router) + TypeScript, statically exported (`output: 'export'`)
- **Styling:** Tailwind CSS v4 + shadcn/ui (`base-nova` preset), custom design tokens for the manuscript palette
- **Type:** Source Serif 4 (display/body), Inter (UI chrome), JetBrains Mono (data/captions), all self-hosted via `next/font`
- **Motion:** [Motion](https://motion.dev) for the two signature moments (the illumination/degradation demo on Fig. 2, the CI-gate outcome reveal on Fig. 1's diagram) — everything else is a plain CSS transition. Every animated element respects `prefers-reduced-motion`.
- **SEO:** file-based `robots.ts`/`sitemap.ts`, a generated OG image (`next/og`), `Person` + `ScholarlyArticle` JSON-LD
- **Hosting:** GitHub Pages + custom domain (Namecheap), built and deployed by GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🧩 Run Locally

```bash
git clone https://github.com/raghav-upadhyay2002/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # static export to ./out
```

Pushing to `main` builds and deploys `./out` to GitHub Pages automatically. GitHub Pages must be set to source from **GitHub Actions** in the repo's Settings → Pages (one-time setup).

---

## 📁 Structure

```
src/
  app/                     # routes: /, /privacy, not-found, robots, sitemap, og image
  components/
    sections/              # one component per page section
    ui/                    # shadcn/ui primitives
  lib/
    content.ts             # all real content — the single source of truth
    utils.ts
public/
  images/                  # headshot, certificate logos
  resume/                  # downloadable CV PDF
  CNAME                    # custom domain
.github/workflows/deploy.yml
PRODUCT.md                 # durable product truth (impeccable skill)
DESIGN.md                  # shipped design system (impeccable skill)
```

---

## 🧾 License

Open-source under the [MIT License](LICENSE).

---

## 📬 Contact

- **Email:** [raghav0408upadhyay@gmail.com](mailto:raghav0408upadhyay@gmail.com)
- **LinkedIn:** [raghavupadhya04](https://www.linkedin.com/in/raghavupadhya04/)
- **GitHub:** [raghav-upadhyay2002](https://github.com/raghav-upadhyay2002)
- **Hugging Face:** [raghavupadhyay](https://huggingface.co/raghavupadhyay)
