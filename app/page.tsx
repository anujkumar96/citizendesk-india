import type { Metadata } from "next";

import { CTA } from "@/src/components/home/CTA";
import { CategoryGrid } from "@/src/components/home/CategoryGrid";
import { FAQ } from "@/src/components/home/FAQ";
import { Features } from "@/src/components/home/Features";
import { Hero } from "@/src/components/home/Hero";
import { HowItWorks } from "@/src/components/home/HowItWorks";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { createPageMetadata } from "@/src/constants/metadata";
import { homepageBreadcrumbSchema, homepageFaqSchema, organizationSchema, websiteSchema } from "@/src/constants/schema";

export const metadata: Metadata = createPageMetadata({
  title: "CitizenDesk India - Find the Right Grievance Authority",
  description:
    "Find the right complaint authority in India, understand grievance procedures, and prepare better complaint drafts with CitizenDesk India.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={homepageFaqSchema} />
      <JsonLd data={homepageBreadcrumbSchema} />
      <Hero />
      <CategoryGrid />
      <HowItWorks />
      <Features />
      <FAQ />
      <CTA />
    </>
  );
}

