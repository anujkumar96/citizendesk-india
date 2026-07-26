import { ArrowRight, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { guides } from "@/src/data/guides/guides";
import { Link } from "@/src/i18n/navigation";

export default function GuidesPage() {
  const t = useTranslations("pages");
  return (
    <Section className="bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            {t("guidesEyebrow")}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
            {t("guidesTitle")}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t("guidesText")}
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <PremiumCard className="h-full p-6">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  {guide.category}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {guide.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4 text-sm">
                  <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Clock className="size-4" />
                    {guide.readingTime}
                  </p>
                  <span className="inline-flex items-center gap-1 font-semibold text-blue-700 dark:text-blue-300">
                    {t("readGuide")}{" "}
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </PremiumCard>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
