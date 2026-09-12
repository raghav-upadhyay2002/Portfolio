"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Citation({
  n,
  target,
  preview,
}: {
  n: number | string;
  target: string;
  preview: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="group relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="m-0 border-0 bg-transparent p-0 align-super text-[0.7em] font-mono text-mark no-underline transition-colors hover:text-ink"
      >
        [{n}]
      </button>
      <span
        role="tooltip"
        className={cn(
          "absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 translate-y-1 border border-border bg-surface-2 p-2.5 font-mono text-[11px] leading-snug normal-case tracking-normal text-ink-dim opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-150 pointer-events-none",
          "group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100",
          open && "pointer-events-auto translate-y-0 opacity-100"
        )}
      >
        {preview}
        <a
          href={`#${target}`}
          onClick={() => setOpen(false)}
          className="mt-1 block text-mark hover:text-ink"
        >
          jump to source →
        </a>
      </span>
    </span>
  );
}
