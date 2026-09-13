import { revisions } from "@/lib/content";

export function RevisionHistory() {
  return (
    <section id="experience" className="scroll-mt-12 hairline-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          4. Revision History <span className="text-ink-faint">(Work Experience)</span>
        </h2>
        <p className="prose-measure mt-3 font-serif text-ink-dim">
          Work experience, kept as a paper keeps its versions: what changed, and why it needed a new one.
        </p>

        <div className="mt-10 space-y-12">
          {revisions.map((rev) => (
            <article key={rev.version} className="border-t border-border pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-serif text-xl text-ink sm:text-2xl">
                  <span className="mr-2 font-mono text-base text-ink-faint">{rev.version}</span>
                  {rev.role}
                  {rev.current && (
                    <span className="ml-3 border border-mark/40 px-1.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.1em] text-mark">
                      current
                    </span>
                  )}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">{rev.dates}</span>
              </div>
              <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-dim">
                {rev.org}
                {rev.location ? ` · ${rev.location}` : ""}
              </p>
              {rev.subline && <p className="mt-2 font-serif italic text-ink-dim">{rev.subline}</p>}

              <ul className="prose-measure mt-5 space-y-3 font-serif leading-[1.7] text-ink-dim">
                {rev.changes.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 shrink-0 text-ink-faint" aria-hidden>
                      +
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.08em]">
                <span className="text-ink-faint">{rev.tags.join(" · ")}</span>
                {rev.link && (
                  <a
                    href={rev.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mark underline decoration-mark/30 underline-offset-4 hover:text-ink"
                  >
                    {rev.link.label} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
