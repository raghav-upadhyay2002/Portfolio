import { Check } from "lucide-react";

export function VerifiedMark({ label = "verifiable" }: { label?: string }) {
  return (
    <span className="ml-2 inline-flex items-center gap-1 align-middle font-mono text-[9px] uppercase tracking-[0.08em] text-mark/80">
      <Check size={9} strokeWidth={2.5} aria-hidden />
      {label}
    </span>
  );
}
