import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { guides } from "@/src/data/guides/guides";
import { Link } from "@/src/i18n/navigation";

export default function GuidesPage() {
  const t = useTranslations("pages");
  const common = useTranslations("common");
  const guideText = useTranslations("guides");

  return (
    <Section className="bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[var(--brand)]">{t("guidesEyebrow")}</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{t("guidesTitle")}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{t("guidesText")}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((guide) => (
            <PremiumCard key={guide.slug} className="flex h-full flex-col p-6">
              <p className="text-sm font-semibold text-[var(--brand)]">{guideText(`categories.${guide.categoryKey}`)}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{guideText(`${guide.slug}.title`)}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{guideText(`${guide.slug}.description`)}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"><Clock className="size-4" />6-8 min</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/guides/${guide.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:underline">
                  {t("readGuide")} <ArrowRight className="size-4" />
                </Link>
                <a href={guide.officialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[var(--brand)] dark:text-slate-200" aria-label={`${common("officialResource")}: ${guide.officialName}`}>
                  {guide.officialName} <ExternalLink className="size-3.5" />
                </a>
              </div>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
