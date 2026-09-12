"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const nodes = [
  { x: 10, label: "PDF", sub: "input" },
  { x: 185, label: "Chunk", sub: "loader" },
  { x: 360, label: "Hybrid Search", sub: "60% vector · 40% BM25" },
  { x: 535, label: "Rerank", sub: "cross-encoder · top 10→3" },
  { x: 710, label: "LLM", sub: "LLaMA via Groq" },
  { x: 885, label: "Cited Answer", sub: "or flagged" },
];

const BOX_W = 150;
const BOX_H = 56;
const ROW_Y = 40;
const CX = 885 + BOX_W / 2;

export function RagDiagram() {
  const reduce = useReducedMotion();
  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };
  const rise = {
    hidden: { opacity: 0, transform: "translateY(4px)" },
    visible: { opacity: 1, transform: "translateY(0px)" },
  };

  return (
    <figure>
      <svg
        viewBox="0 0 1080 340"
        role="img"
        aria-label="AskMyDocs pipeline: a PDF is chunked, retrieved by hybrid vector and BM25 search, reranked by a cross-encoder, answered by an LLM, then scored by an LLM judge; a CI gate ships the release only if faithfulness, relevance, and citation-rate thresholds are met, otherwise it blocks the deploy."
        className="w-full text-ink-faint"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
          <marker id="arrow-mark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--mark)" />
          </marker>
          <marker id="arrow-gate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--gate)" />
          </marker>
        </defs>

        {/* main pipeline */}
        {nodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x}
              y={ROW_Y}
              width={BOX_W}
              height={BOX_H}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.5}
            />
            <text x={n.x + BOX_W / 2} y={ROW_Y + 24} textAnchor="middle" className="fill-ink font-mono text-[13px]">
              {n.label}
            </text>
            <text x={n.x + BOX_W / 2} y={ROW_Y + 41} textAnchor="middle" className="fill-ink-faint font-mono text-[9px]">
              {n.sub}
            </text>
          </g>
        ))}
        {nodes.slice(0, -1).map((n, i) => (
          <line
            key={`arrow-${n.label}`}
            x1={n.x + BOX_W}
            y1={ROW_Y + BOX_H / 2}
            x2={nodes[i + 1].x}
            y2={ROW_Y + BOX_H / 2}
            stroke="currentColor"
            strokeOpacity={0.5}
            markerEnd="url(#arrow)"
          />
        ))}

        {/* judge */}
        <line x1={CX} y1={ROW_Y + BOX_H} x2={CX} y2={150} stroke="currentColor" strokeOpacity={0.5} markerEnd="url(#arrow)" />
        <rect x={CX - 100} y={150} width={200} height={56} fill="none" stroke="currentColor" strokeOpacity={0.5} />
        <text x={CX} y={174} textAnchor="middle" className="fill-ink font-mono text-[13px]">
          LLM-as-Judge
        </text>
        <text x={CX} y={191} textAnchor="middle" className="fill-ink-faint font-mono text-[9px]">
          faithfulness · relevance · citations
        </text>

        {/* gate */}
        <line x1={CX} y1={206} x2={CX} y2={240} stroke="currentColor" strokeOpacity={0.5} markerEnd="url(#arrow)" />
        <rect x={CX - 100} y={240} width={200} height={56} fill="none" stroke="var(--mark)" />
        <text x={CX} y={262} textAnchor="middle" className="fill-ink font-mono text-[13px]">
          CI Gate
        </text>
        <text x={CX} y={279} textAnchor="middle" className="fill-ink-faint font-mono text-[9px]">
          F≥0.70 · R≥0.70 · C≥0.80
        </text>

        {/* outcomes — draw on once the diagram scrolls into view */}
        <motion.line
          x1={CX - 60}
          y1={296}
          x2={CX - 60}
          y2={314}
          stroke="var(--mark)"
          markerEnd="url(#arrow-mark)"
          variants={drawLine}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.45, ease: EASE_OUT }}
        />
        <motion.text
          x={CX - 60}
          y={330}
          textAnchor="middle"
          className="font-mono text-[11px]"
          fill="var(--mark)"
          variants={rise}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.3, ease: EASE_OUT, delay: reduce ? 0 : 0.4 }}
        >
          pass → ships
        </motion.text>

        <motion.line
          x1={CX + 60}
          y1={296}
          x2={CX + 60}
          y2={314}
          stroke="var(--gate)"
          markerEnd="url(#arrow-gate)"
          variants={drawLine}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.45, ease: EASE_OUT, delay: reduce ? 0 : 0.12 }}
        />
        <motion.text
          x={CX + 60}
          y={330}
          textAnchor="middle"
          className="font-mono text-[11px]"
          fill="var(--gate)"
          variants={rise}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.3, ease: EASE_OUT, delay: reduce ? 0 : 0.52 }}
        >
          fail → blocked
        </motion.text>
      </svg>
      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
        Fig. 1 — AskMyDocs retrieval and CI-gate architecture. Modules (loader, chunker, embedder, vectorstore, reranker, LLM, prompts) are independently swappable.
      </figcaption>
    </figure>
  );
}
