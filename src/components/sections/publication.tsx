import { publication } from "@/lib/content";
import { VerifiedMark } from "@/components/verified-mark";

export function Publication() {
  return (
    <section id="publication" className="scroll-mt-12 hairline-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">7. References</h2>

        <article id="fig-publication-full" className="mt-10 border border-border bg-surface p-5 sm:p-8">
          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.1em]">
            <span className="border border-mark/40 px-1.5 py-0.5 text-mark">{publication.status}</span>
            <span className="border border-border px-1.5 py-0.5 text-ink-dim">First author</span>
          </div>

          <h3 className="prose-measure mt-4 font-serif text-xl leading-snug text-ink sm:text-2xl">
            {publication.title}
          </h3>

          <p className="mt-3 font-mono text-[12px] leading-relaxed text-ink-dim">
            {publication.authors.map((a, i) => (
              <span key={a} className={a.startsWith("R. Upadhyay") ? "text-ink" : undefined}>
                {a}
                {i < publication.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
            {publication.date} · {publication.arxivId}
            <VerifiedMark label="on arXiv" />
          </p>

          <p className="prose-measure mt-6 font-serif leading-[1.75] text-ink-dim">{publication.abstract}</p>

          <ol className="mt-6 space-y-3 border-t border-border pt-6">
            {publication.findings.map((f, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 font-mono text-[11px] text-mark">F{i + 1}.</span>
                <span className="prose-measure font-serif leading-[1.7] text-ink-dim">{f}</span>
              </li>
            ))}
          </ol>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
            {publication.tags.join(" · ")}
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] uppercase tracking-[0.08em]">
            {publication.links.map((l) => (
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
        </article>
      </div>
    </section>
  );
}
