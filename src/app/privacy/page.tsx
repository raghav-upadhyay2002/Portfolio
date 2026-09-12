import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for raghavupadhyay.org: what data is collected, how Google Analytics is used, and how to get in touch about it.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Analytics",
    body: (
      <>
        This site uses Google Analytics (GA4) to see aggregate traffic: which pages get visited,
        roughly where from, what device and browser, and which link brought you here. Google
        Analytics sets cookies and processes an IP-derived approximate location to do this. I
        don&apos;t receive your name, email, or any other way to identify you individually from
        it, just aggregate numbers. See{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mark underline decoration-mark/30 underline-offset-4 hover:text-ink"
        >
          Google&apos;s Privacy Policy
        </a>{" "}
        for how Google itself handles that data.
      </>
    ),
  },
  {
    heading: "Information you send directly",
    body: (
      <>
        If you email me or message me on LinkedIn/GitHub using the links on this site, I receive
        whatever you choose to send (your address, name, and message). That&apos;s used only to
        reply to you and isn&apos;t stored anywhere beyond my own inbox, and isn&apos;t shared
        with anyone else.
      </>
    ),
  },
  {
    heading: "Cookies",
    body: (
      <>
        The only cookies set on this site are the ones Google Analytics uses for the purpose
        above. There are no advertising or third-party tracking cookies.
      </>
    ),
  },
  {
    heading: "Third-party links",
    body: (
      <>
        This site links out to things like GitHub, Hugging Face Spaces, arXiv, and LinkedIn. Once
        you click through, you&apos;re on their site under their privacy policy, not this one.
      </>
    ),
  },
  {
    heading: "Questions",
    body: (
      <>
        Email{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-mark underline decoration-mark/30 underline-offset-4 hover:text-ink"
        >
          {site.email}
        </a>{" "}
        with any questions about this policy or to request that analytics data associated with
        your visit be disregarded.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
      <Link href="/" className="font-mono text-[11px] uppercase tracking-[0.1em] text-mark hover:text-ink">
        ← Back to home
      </Link>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Addendum</p>
      <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">Privacy Policy</h1>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
        Last updated: September 2026
      </p>

      <p className="prose-measure mt-8 font-serif leading-[1.75] text-ink-dim">
        This is a personal portfolio site. It doesn&apos;t have user accounts, doesn&apos;t run
        ads, and doesn&apos;t sell or share data with anyone. Here&apos;s exactly what does happen
        when you visit.
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <div key={s.heading} className="border-t border-border pt-6">
            <h2 className="font-serif text-lg text-ink">{s.heading}</h2>
            <p className="prose-measure mt-3 font-serif leading-[1.75] text-ink-dim">{s.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
