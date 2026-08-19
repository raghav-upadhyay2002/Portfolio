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

M.S. in Data Science, University of Arizona (May 2026). Open to full-time AI/ML Engineer roles across the US.

---

## 💼 Portfolio Sections

| Section | Contents |
| --- | --- |
| **Hero / About** | Introduction, availability, quick stats |
| **Projects** | AskMyDocs (featured), maze navigator, capstone study, RUL prediction, NLP work |
| **Experience** | Internship and applied data work |
| **Skills** | LLMs & RAG, evaluation, deep learning, CV/robotics, MLOps, databases |
| **Certificates** | NVIDIA, AWS — with verification links |
| **Education** | UArizona (M.S.) and SRM Institute (B.Tech) |
| **Research** | arXiv preprint, under review at NeurIPS 2026 |
| **Résumé** | Downloadable / viewable PDF |
| **Contact** | Email, LinkedIn, GitHub, Hugging Face |

---

## 🔬 Featured Work

- **[AskMyDocs](https://github.com/raghav-upadhyay2002/AskMyDocs)** — production-grade RAG over user-uploaded PDFs with hybrid retrieval (ChromaDB 60% + BM25 40%), cross-encoder reranking, hallucination detection, and an LLM-as-a-judge harness wired into GitHub Actions. [Live demo →](https://huggingface.co/spaces/raghavupadhyay/askmydocs)
- **[Vision-Based Virtual Maze Navigator](https://github.com/raghav-upadhyay2002/Vision-Based-Virtual-Maze-Navigator)** — *in progress* — autonomous e-puck agent navigating an unknown 3D maze from first-person camera input alone in Webots.
- **[RUL Prediction with LSTM](https://github.com/raghav-upadhyay2002/RUL-prediction-using-LSTM-for-Aircraft-Engine)** — four recurrent architectures benchmarked on NASA C-MAPSS with MC Dropout and deep ensembles for uncertainty-aware maintenance decisions.
- **[When Do LLMs Generate Realistic Social Networks?](https://arxiv.org/abs/2605.12898)** — arXiv:2605.12898, under review at NeurIPS 2026.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript — no framework, no build step
- **Design system:** "Neural Noir" — custom CSS properties, Space Grotesk / Inter / JetBrains Mono
- **Animation:** hand-rolled `IntersectionObserver` scroll reveals, animated counters, and a canvas neural-network background (all respecting `prefers-reduced-motion`)
- **SEO:** Open Graph + Twitter cards, `Person` and `ScholarlyArticle` JSON-LD
- **Hosting:** GitHub Pages + custom domain (Namecheap)

---

## 🧩 Run Locally

```bash
git clone https://github.com/raghav-upadhyay2002/Portfolio.git
cd Portfolio
python3 -m http.server 8000
```

Then open <http://localhost:8000>. No dependencies or build step required — opening `index.html` directly works too.

---

## 📁 Structure

```
index.html                 # entire page — all sections
assets/
  css/style.css            # design system + all component styles
  jss/styles.js            # nav, scroll spy, reveals, counters, canvas
  images/                  # profile photo, certificate logos
  resume/                  # downloadable résumé PDF
CNAME                      # custom domain
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
