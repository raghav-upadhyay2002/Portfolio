import { buildLogTicker } from "@/lib/content";

export function BuildLogTicker() {
  const items = [...buildLogTicker, ...buildLogTicker];

  return (
    <div className="hairline-t hairline-b overflow-hidden border-border bg-surface py-3" aria-hidden>
      <div className="flex w-max running-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-4 flex items-center gap-4">
            <span className="text-mark">$</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
