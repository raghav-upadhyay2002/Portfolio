"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-4 z-40 border border-border bg-surface px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-dim shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-[opacity,translate,visibility,border-color,color] duration-200 ease-[var(--ease-out)] hover:border-mark/50 hover:text-mark sm:right-6",
        visible ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"
      )}
    >
      ↑ top
    </button>
  );
}
