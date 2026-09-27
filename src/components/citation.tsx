"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Align = "center" | "start" | "end";

const POPOVER_HALF_WIDTH = 112;
const EDGE_GUTTER = 16;

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
  const [align, setAlign] = useState<Align>("center");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverId = useId();

  // Keep the popover inside the viewport: a centered 224px box overflows when
  // the mark sits near either edge (sidebar marks, narrow phones).
  const place = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mid = rect.left + rect.width / 2;
    const vw = document.documentElement.clientWidth;
    if (mid - POPOVER_HALF_WIDTH < EDGE_GUTTER) setAlign("start");
    else if (mid + POPOVER_HALF_WIDTH > vw - EDGE_GUTTER) setAlign("end");
    else setAlign("center");
  };

  return (
    <span
      className="group relative inline-block"
      onPointerEnter={place}
      onFocus={place}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          place();
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-controls={popoverId}
        className="relative m-0 border-0 bg-transparent p-0 align-super font-mono text-[0.7em] text-mark no-underline transition-colors before:absolute before:-inset-1.5 before:content-[''] hover:text-ink"
      >
        [{n}]
      </button>
      <span
        id={popoverId}
        className={cn(
          "absolute bottom-full z-20 mb-2 hidden w-56 max-w-[calc(100vw-2rem)] border border-border bg-surface-2 p-2.5 font-mono text-[11px] leading-snug normal-case tracking-normal text-ink-dim shadow-[0_8px_24px_rgba(0,0,0,0.45)]",
          "transition-[opacity,translate] duration-150 ease-[var(--ease-out)] starting:translate-y-1 starting:opacity-0",
          "after:absolute after:inset-x-0 after:top-full after:h-2 after:content-['']",
          "group-hover:block group-focus-within:block",
          open && "block",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "start" && "left-0",
          align === "end" && "right-0"
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
