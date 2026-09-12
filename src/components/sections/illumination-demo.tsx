"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function IlluminationDemo() {
  const reduce = useReducedMotion();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <figure className="mt-6">
      <svg
        viewBox="0 0 400 90"
        className="w-full"
        role="img"
        aria-label="Illustrative chart: relative-structure edge detection holds steady confidence as corridor illumination drops left to right, while absolute-brightness detection collapses past roughly the halfway point."
      >
        <defs>
          <linearGradient id="corridor" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e9e6df" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#e9e6df" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="4" width="400" height="70" fill="url(#corridor)" />
        <line x1="0" y1="78" x2="400" y2="78" stroke="var(--border)" strokeWidth="1" />
        <text x="0" y="88" className="fill-ink-faint font-mono text-[8px] uppercase tracking-[0.1em]">
          bright
        </text>
        <text x="400" y="88" textAnchor="end" className="fill-ink-faint font-mono text-[8px] uppercase tracking-[0.1em]">
          dim
        </text>

        <motion.path
          d="M0,24 C 120,22 240,26 400,23"
          fill="none"
          stroke="var(--mark)"
          strokeWidth="2"
          variants={draw}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduce ? 0 : 1.1, ease: EASE_OUT }}
        />
        <motion.path
          d="M0,24 C 140,25 200,30 240,46 C 280,62 320,70 400,72"
          fill="none"
          stroke="var(--gate)"
          strokeWidth="2"
          variants={draw}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduce ? 0 : 1.1, ease: EASE_OUT, delay: reduce ? 0 : 0.1 }}
        />

        <motion.g
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.3, delay: reduce ? 0 : 1.15 }}
        >
          <circle cx="398" cy="23" r="3.5" className="fill-mark" />
          <text x="390" y="14" textAnchor="end" className="fill-mark font-mono text-[9px]">
            relative — holds
          </text>

          <circle cx="398" cy="72" r="3.5" className="fill-gate" />
          <text x="390" y="65" textAnchor="end" className="fill-gate font-mono text-[9px]">
            absolute — breaks
          </text>
        </motion.g>
      </svg>
      <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
        Illustrative — detector confidence vs. corridor illumination, not plotted telemetry.
      </figcaption>
    </figure>
  );
}
