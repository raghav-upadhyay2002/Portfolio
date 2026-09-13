"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { sections, site } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

const staticLabels: Record<string, string> = {
  "/privacy": "Privacy Addendum",
};

export function RunningHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>(sections[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const rightLabel = isHome
    ? sections.find((s) => s.id === active)?.label
    : (staticLabels[pathname] ?? "Not Found");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ground/92 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-4 px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-dim sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-ink transition-colors hover:text-mark"
        >
          <span aria-hidden className="text-mark">
            §
          </span>
          <span className="hidden sm:inline">{site.name}</span>
          <span className="sm:hidden">R. Upadhyay</span>
        </Link>

        {isHome && (
          <nav className="hidden items-center gap-5 md:flex" aria-label="Sections">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "transition-colors",
                  active === s.id ? "text-mark" : "hover:text-ink"
                )}
                aria-current={active === s.id ? "true" : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex shrink-0 items-center gap-3">
          {!isHome && <span className="text-ink-faint">{rightLabel}</span>}
          <span className="hidden text-ink-faint sm:inline" title="Current revision">
            {site.revision}
          </span>
          {isHome && <span className="text-ink-faint md:hidden">· {rightLabel}</span>}
          <ThemeToggle />
          {isHome && (
            <button
              type="button"
              className="text-ink transition-colors hover:text-mark md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle contents"
            >
              {open ? <X size={15} /> : <Menu size={15} />}
            </button>
          )}
        </div>
      </div>

      {isHome && open && (
        <nav
          className="flex flex-col gap-1 border-t border-border bg-ground px-4 py-3 md:hidden"
          aria-label="Sections"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "px-1 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                active === s.id ? "text-mark" : "text-ink-dim hover:text-ink"
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
