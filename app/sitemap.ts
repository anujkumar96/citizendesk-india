import type { MetadataRoute } from "next";

import { siteConfig } from "@/src/config/site";
import { locales } from "@/src/i18n/routing";

const routes = ["/", "/about", "/contact", "/complaint-finder", "/guides", "/privacy-policy", "/success-stories", "/terms"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: new URL(`/${locale}${route === "/" ? "" : route}`, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.75,
    }))
  );
}
