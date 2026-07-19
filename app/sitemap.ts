import type { MetadataRoute } from "next";

import { siteConfig } from "@/src/config/site";

const staticRoutes = ["/", "/about", "/contact", "/complaint-finder", "/blog"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
