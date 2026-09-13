import type { Figure } from "@/lib/content";
import { figures, otherWork } from "@/lib/content";
import { RagDiagram } from "@/components/sections/rag-diagram";
import { IlluminationDemo } from "@/components/sections/illumination-demo";
import { VerifiedMark } from "@/components/verified-mark";

const featured = figures.find((f) => f.featured)!;
const standard = figures.filter((f) => !f.featured && !f.minor);
const minor = figures.filter((f) => f.minor);

const gateRows = [
  { metric: "Retrieval mix", gate: "60 / 40", note: "vector similarity / BM25" },
  { metric: "Faithfulness", gate: "≥ 0.70", note: "build fails below this" },
  { metric: "Relevance", gate: "≥ 0.70", note: "build fails below this" },
  { metric: "Citation rate", gate: "≥ 0.80", note: "build fails below this" },
];

function FigureLinks({ links }: { links: Figure["links"] }) {
  return (
    <p className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] uppercase tracking-[0.08em]">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mark underline decoration-mark/30 underline-offset-4 transition-colors hover:text-ink"
        >
          {l.label} ↗
        </a>
      ))}
    </p>
  );
}

function StandardFigure({ figure }: { figure: Figure }) {
  return (
    <article id={figure.id} className="scroll-mt-12 border-t border-border py-10 first:pt-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
        Fig. {figure.n} · {figure.category}
      </p>
      <h3 className="mt-2 font-serif text-xl text-ink sm:text-2xl">{figure.title}</h3>
      <p className="prose-measure mt-4 font-serif leading-[1.75] text-ink-dim">{figure.body}</p>

      {figure.id === "fig-maze" && <IlluminationDemo />}

      {figure.metrics && (
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[12px]">
          {figure.metrics.map((m) => (
            <div key={m.label} className="flex items-baseline gap-2">
              <dt className="text-ink-faint">{m.label}</dt>
              <dd className="tabular text-mark">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {figure.followUp && (
        <p className="mt-4 font-serif italic text-ink-dim">
          {figure.followUp.text}{" "}
          <a href={figure.followUp.href} className="not-italic text-mark hover:text-ink">
            {figure.followUp.linkText} →
          </a>
        </p>
      )}

      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">{figure.tech}</p>
      <div className="mt-4">
        <FigureLinks links={figure.links} />
      </div>
    </article>
  );
}

export function Figures() {
  return (
    <section id="projects" className="scroll-mt-12 hairline-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          3. Figures <span className="text-ink-faint">(Projects)</span>
        </h2>
        <p className="prose-measure mt-3 font-serif text-ink-dim">
          Seven projects, numbered as figures. Each links to the artifact it describes — a live app, a repo, or a paper — rather than a screenshot of one.
        </p>

        {/* Fig. 1 — featured */}
        <article id={featured.id} className="scroll-mt-12 mt-12 border border-border bg-surface p-5 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mark">
            Fig. {featured.n} · {featured.category}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">{featured.title}</h3>

          <div className="relative mt-8">
            <div className="overflow-x-auto">
              <div className="min-w-[640px]">
                <RagDiagram />
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface to-transparent sm:hidden"
            />
            <p aria-hidden className="mt-1 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint sm:hidden">
              scroll for full diagram →
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
            <p className="prose-measure font-serif leading-[1.75] text-ink-dim">{featured.body}</p>

            <table className="h-fit w-full border-collapse font-mono text-[12px]">
              <caption className="mb-2 text-left text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                Table 1 — CI gate thresholds
                <VerifiedMark label="verifiable in repo" />
              </caption>
              <thead>
                <tr className="border-b border-border text-left text-ink-faint">
                  <th className="py-2 font-normal">Metric</th>
                  <th className="py-2 font-normal">Gate</th>
                </tr>
              </thead>
              <tbody>
                {gateRows.map((row) => (
                  <tr key={row.metric} className="border-b border-border align-top">
                    <td className="py-2 pr-2 text-ink-dim">
                      {row.metric}
                      <span className="mt-0.5 block text-[10px] normal-case text-ink-faint">{row.note}</span>
                    </td>
                    <td className="tabular py-2 text-mark">{row.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">{featured.tech}</p>
          <div className="mt-4">
            <FigureLinks links={featured.links} />
          </div>
        </article>

        {/* Fig. 2–4 */}
        <div className="mt-4">
          {standard.map((f) => (
            <StandardFigure key={f.id} figure={f} />
          ))}
        </div>

        {/* Fig. 5–7, compact */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Fig. 5–7 · Supporting work</p>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {minor.map((f) => (
              <div key={f.id} id={f.id} className="scroll-mt-12 py-5">
                <p className="font-serif text-ink">
                  <span className="font-mono text-ink-faint">{f.n}.</span> {f.title}
                </p>
                <p className="prose-measure mt-1.5 text-sm text-ink-dim">{f.body}</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.06em]">
                  <span className="text-ink-faint">{f.tech}</span>
                  <FigureLinks links={f.links} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-serif text-sm text-ink-dim">
            {otherWork.text}{" "}
            <a href={otherWork.href} target="_blank" rel="noopener noreferrer" className="text-mark hover:text-ink">
              {otherWork.linkText} ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
