import { social, site } from "@/lib/content";

export function Colophon() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {site.name}. {site.location.locality}, {site.location.region}.
        </p>
        <p>
          Typeset with Next.js &amp; Tailwind CSS · revision {site.revision}, {site.lastRevised} ·{" "}
          <a
            href={social.repo}
            className="text-ink-dim underline decoration-border underline-offset-4 transition-colors hover:text-mark"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
