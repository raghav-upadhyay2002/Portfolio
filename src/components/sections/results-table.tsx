import { skillGroups } from "@/lib/content";

export function ResultsTable() {
  return (
    <section id="skills" className="scroll-mt-12 hairline-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">5. Results</h2>
        <p className="prose-measure mt-3 font-serif text-ink-dim">
          Tools and methods, grouped the way they get used together rather than alphabetized.
        </p>

        <table className="mt-10 w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="w-48 py-3 pr-4 font-mono text-[11px] font-normal uppercase tracking-[0.12em] text-ink-faint sm:w-56">
                Category
              </th>
              <th className="py-3 font-mono text-[11px] font-normal uppercase tracking-[0.12em] text-ink-faint">
                Tools &amp; methods
              </th>
            </tr>
          </thead>
          <tbody>
            {skillGroups.map((group) => (
              <tr key={group.category} className="border-b border-border align-top">
                <th scope="row" className="py-4 pr-4 font-serif text-[15px] font-normal text-ink">
                  {group.category}
                </th>
                <td className="py-4 font-mono text-[13px] leading-relaxed text-ink-dim">
                  {group.items.join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
