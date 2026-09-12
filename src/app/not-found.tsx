import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 pt-12 text-center sm:px-6">
      <p aria-hidden className="font-mono text-6xl text-ink-faint sm:text-7xl">
        [404]
      </p>
      <h1 className="prose-measure mt-6 font-serif text-2xl text-ink sm:text-3xl">
        This route doesn&apos;t retrieve anything.
      </h1>
      <p className="prose-measure mt-4 font-serif leading-[1.75] text-ink-dim">
        No document in the index matches that path. Head back and try a section that actually
        exists.
      </p>
      <Link
        href="/"
        className="mt-8 border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-mark hover:text-mark"
      >
        Back to home
      </Link>
    </main>
  );
}
