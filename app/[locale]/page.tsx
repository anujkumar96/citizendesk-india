import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { CTA } from "@/src/components/home/CTA";
import { CategoryGrid } from "@/src/components/home/CategoryGrid";
import { FAQ } from "@/src/components/home/FAQ";
import { Features } from "@/src/components/home/Features";
import { Hero } from "@/src/components/home/Hero";
import { HowItWorks } from "@/src/components/home/HowItWorks";
import { CitizenConfidence } from "@/src/components/home/CitizenConfidence";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { createPageMetadata } from "@/src/constants/metadata";
import { homepageBreadcrumbSchema, homepageFaqSchema, organizationSchema, websiteSchema } from "@/src/constants/schema";

export const metadata: Metadata = createPageMetadata({
  title: "CitizenDesk India - Find the Right Grievance Authority",
  description: "Find the right complaint authority in India, understand grievance procedures, and prepare better complaint drafts with CitizenDesk India.",
  path: "/",
});

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={homepageFaqSchema} />
      <JsonLd data={homepageBreadcrumbSchema} />
      <HomeSections />
    </>
  );
}

function HomeSections() {
  const t = useTranslations("home");

  return (
    <>
      <Hero />
      <section className="border-y border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm font-medium text-slate-600 dark:text-slate-300 sm:px-6 lg:px-8">{t("trustedBy")}</div>
      </section>
      <CategoryGrid />
      <HowItWorks />
      <Features />
      <CitizenConfidence />
      <FAQ />
      <CTA />
    </>
  );
}
