import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RunningHeader } from "@/components/running-header";
import { BackToTop } from "@/components/back-to-top";
import { site, social } from "@/lib/content";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Raghav Upadhyay",
    "AI Engineer",
    "LLM Engineer",
    "ML Engineer",
    "Applied Scientist",
    "NLP Engineer",
    "AI Research Engineer",
    "LLM evaluation",
    "hallucination detection",
    "LLM-as-a-judge",
    "RAG",
    "Retrieval-Augmented Generation",
    "uncertainty quantification",
    "robot navigation",
    "Machine Learning Engineer",
    "NLP",
    "Deep Learning",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      email: site.email,
      jobTitle: "Research Collaborator",
      affiliation: { "@type": "CollegeOrUniversity", name: site.affiliation },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of Arizona" },
        { "@type": "CollegeOrUniversity", name: "SRM Institute of Science and Technology" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.locality,
        addressRegion: site.location.region,
        addressCountry: site.location.country,
      },
      knowsAbout: [
        "Large Language Models",
        "Retrieval-Augmented Generation",
        "LLM Evaluation",
        "Hallucination Detection",
        "Computer Vision",
        "Robot Navigation",
        "Uncertainty Quantification",
        "Deep Learning",
        "Natural Language Processing",
        "Machine Learning",
      ],
      sameAs: [social.github, social.linkedin, social.huggingface, social.arxiv],
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${site.url}/#publication`,
      headline:
        "When Do LLMs Generate Realistic Social Networks? A Multi-Dimensional Study of Culture, Language, Scale, and Method",
      author: { "@id": `${site.url}/#person` },
      datePublished: "2026-05-13",
      url: "https://arxiv.org/abs/2605.12898",
      identifier: "arXiv:2605.12898",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RunningHeader />
          <div className="flex-1">{children}</div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
