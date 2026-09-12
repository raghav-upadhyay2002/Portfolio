import Image from "next/image";
import { certificates, education } from "@/lib/content";

export function Appendix() {
  return (
    <section id="appendix" className="scroll-mt-12 hairline-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">6. Appendix</h2>

        <div className="mt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mark">A. Education</p>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {education.map((ed) => (
              <div key={ed.degree} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-lg text-ink sm:text-xl">{ed.degree}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">{ed.dates}</span>
                </div>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-dim">
                  {ed.org} · {ed.location}
                </p>
                <p className="mt-2 font-serif text-ink-dim">{ed.detail}</p>
                <p className="prose-measure mt-3 font-mono text-[11px] leading-relaxed text-ink-faint">
                  {ed.courses.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mark">B. Certificates</p>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {certificates.map((cert) => (
              <div key={cert.title} className="flex items-start justify-between gap-4 py-5">
                <div>
                  <h3 className="font-serif text-ink">{cert.title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim">
                    {cert.issuer} · {cert.issued}
                  </p>
                  <p className="prose-measure mt-2 font-mono text-[11px] leading-relaxed text-ink-faint">
                    {cert.skills.join(" · ")}
                  </p>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.08em] text-mark hover:text-ink"
                  >
                    Verify ↗
                  </a>
                </div>
                {cert.logo && (
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={72}
                    height={28}
                    className="mt-1 h-6 w-auto shrink-0 object-contain opacity-90"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
