import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-09-12",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${site.url}/privacy`,
      lastModified: "2026-09-12",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
