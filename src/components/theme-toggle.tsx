"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
      className="relative flex h-7 w-7 shrink-0 items-center justify-center border border-border text-ink-dim transition-colors hover:border-mark hover:text-mark"
    >
      <Sun
        size={14}
        strokeWidth={1.75}
        aria-hidden
        className={cn(
          "absolute transition-[transform,opacity] duration-200 ease-[var(--ease-out)]",
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        )}
      />
      <Moon
        size={14}
        strokeWidth={1.75}
        aria-hidden
        className={cn(
          "absolute transition-[transform,opacity] duration-200 ease-[var(--ease-out)]",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        )}
      />
    </button>
  );
}
