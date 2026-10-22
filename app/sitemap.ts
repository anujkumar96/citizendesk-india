import type { MetadataRoute } from "next";

import { siteConfig } from "@/src/config/site";
import { guides } from "@/src/data/guides/guides";
import { locales } from "@/src/i18n/routing";

export const dynamic = "force-static";

const routes = ["/", "/about", "/contact", "/complaint-finder", "/guides", "/privacy-policy", "/success-stories", "/terms"] as const;
const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`;

  return locales.flatMap((locale) =>
    [...routes, ...guideRoutes].map((route) => ({
      url: new URL(`${locale}/${route === "/" ? "" : `${route.slice(1)}/`}`, baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.75,
    }))
  );
}
