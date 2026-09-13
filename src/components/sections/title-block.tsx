import Image from "next/image";
import { Citation } from "@/components/citation";
import { BuildLogTicker } from "@/components/sections/build-log-ticker";
import {
  abstract,
  alsoSearchingTitles,
  availability,
  cv,
  headlineFigures,
  plainSummary,
  site,
  tags,
  thesis,
  workAuthorization,
} from "@/lib/content";

export function TitleBlock() {
  return (
    <section id="abstract" className="scroll-mt-12">
      <div className="mx-auto max-w-5xl px-4 pt-20 sm:px-6 sm:pt-24">
        <div className="hairline-b flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-border pb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
          <span>
            {site.url.replace("https://", "")} / {site.revision}
          </span>
          <span>Revised {site.lastRevised}</span>
          <span className="flex flex-col items-end gap-0.5 text-right">
            <span className="text-mark">{availability}</span>
            <span className="normal-case tracking-normal text-ink-dim">{workAuthorization}</span>
          </span>
        </div>

        <div className="pt-10 sm:pt-14">
          <h1 className="text-balance font-serif text-[2.5rem] leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-[4.5rem]">
            {site.name}
          </h1>
          <p className="mt-3 font-sans text-sm uppercase tracking-[0.1em] text-ink-dim sm:text-base">
            {site.role} — Research Collaborator, {site.affiliation}
          </p>

          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-ink-dim sm:text-lg">
            {plainSummary}
          </p>

          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
            Also searching under: {alsoSearchingTitles.join(" · ")}
          </p>

          <p className="mt-8 max-w-3xl border-l border-border py-1 pl-5 font-serif text-xl italic leading-relaxed text-ink sm:text-2xl">
            “{thesis}”
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 pb-14 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
              Abstract
            </p>
            <div className="prose-measure space-y-5 font-serif text-[1.05rem] leading-[1.75] text-ink-dim">
              <p>{abstract[0]}</p>
              <p>
                {"That's what "}
                <span className="text-ink">AskMyDocs</span>
                <Citation
                  n={1}
                  target="fig-askmydocs"
                  preview="AskMyDocs — hybrid 60/40 retrieval, CI-gated on faithfulness ≥0.70 and citation rate ≥0.80."
                />
                {
                  " is. It splits retrieval 60/40 between a vector index and BM25, reranks with a cross-encoder, and grades every answer with an LLM judge in CI: faithfulness below 0.70 or citation rate below 0.80 and the pipeline fails. It's deployed and public on Hugging Face Spaces. The same instinct produced my study of LLM-generated social networks, now under review at NeurIPS 2026"
                }
                <Citation
                  n={3}
                  target="fig-publication"
                  preview="LLM-Generated Social Networks — 192 networks, first-author, under review at NeurIPS 2026."
                />
                {
                  ": 192 generated networks across four cultures, four languages and three model tiers, measured rather than eyeballed."
                }
              </p>
              <p>
                {abstract[2]}{" "}
                <Citation
                  n={2}
                  target="fig-maze"
                  preview="Vision-Based Virtual Maze Navigator — the brightness-keyed detector that broke under dimming."
                />
              </p>
              <p>{abstract[3]}</p>
            </div>
          </div>

          <aside className="h-fit border border-border bg-surface p-5">
            <div className="mb-5 flex items-center gap-3 border-b border-border pb-5">
              <Image
                src="/images/raghav-profile.jpg"
                alt={site.name}
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 border border-border object-cover object-[50%_22%]"
              />
              <div>
                <p className="font-serif text-[15px] leading-tight text-ink">{site.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">Corresponding author</p>
              </div>
            </div>

            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
              Status
            </p>
            <dl className="space-y-3 font-mono text-[13px]">
              {headlineFigures.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-3 hairline-b border-border pb-3">
                  <dt className="text-ink-dim">{f.label}</dt>
                  <dd className="tabular whitespace-nowrap text-ink">
                    {f.value}{" "}
                    <Citation n="→" target={f.cite} preview={`See ${f.label}.`} />
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-3 hairline-b border-border pb-3">
                <dt className="text-ink-dim">location</dt>
                <dd className="text-right text-ink">{tags.location}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 hairline-b border-border pb-3">
                <dt className="text-ink-dim">degree</dt>
                <dd className="text-right text-ink">{tags.degree}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-ink-dim">work auth</dt>
                <dd className="text-right text-ink">{tags.workAuth}</dd>
              </div>
            </dl>

            <a
              href={cv.href}
              download
              className="mt-5 block border border-border py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-mark hover:text-mark"
            >
              Download CV ↓
            </a>
            <p className="mt-2 text-center font-mono text-[10px] text-ink-faint">
              Updated {cv.lastUpdated}
            </p>
          </aside>
        </div>
      </div>

      <BuildLogTicker />
    </section>
  );
}
