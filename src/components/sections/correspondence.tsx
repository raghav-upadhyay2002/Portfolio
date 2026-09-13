import { correspondence } from "@/lib/content";

export function Correspondence() {
  return (
    <section id="correspondence" className="scroll-mt-12 hairline-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          8. Correspondence <span className="text-ink-faint">(Contact)</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <p className="prose-measure font-serif text-lg leading-[1.75] text-ink-dim">
            {correspondence.intro}
          </p>

          <address className="h-fit space-y-4 border border-border bg-surface p-5 not-italic">
            {correspondence.channels.map((c) => (
              <div key={c.label} className="flex items-baseline justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">{c.label}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-mono text-[13px] text-mark transition-colors hover:text-ink"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </address>
        </div>
      </div>
    </section>
  );
}
