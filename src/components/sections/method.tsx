import { method } from "@/lib/content";

export function Method() {
  return (
    <section id="method" className="scroll-mt-12 hairline-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          2. Method <span className="text-ink-faint">(Approach)</span>
        </h2>
        <p className="prose-measure mt-3 font-serif text-ink-dim">
          Three steps, in order. Skipping the second is how the first stops meaning anything.
        </p>

        <ol className="mt-10 divide-y divide-border border-y border-border">
          {method.map((step) => (
            <li
              key={step.n}
              className="py-6 sm:grid sm:grid-cols-[4rem_180px_1fr] sm:items-baseline sm:gap-8"
            >
              <div className="flex items-baseline gap-4 sm:contents">
                <span className="font-mono text-2xl text-ink-faint">{step.n}</span>
                <h3 className="font-serif text-lg text-ink sm:text-xl">{step.title}</h3>
              </div>
              <p className="prose-measure mt-3 font-serif text-ink-dim sm:mt-0">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
