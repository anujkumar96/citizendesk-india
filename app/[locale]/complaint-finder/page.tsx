"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { ComplaintFinder } from "@/src/components/complaints/ComplaintFinder";
import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { complaintCategories } from "@/src/data/complaints";
import { Link } from "@/src/i18n/navigation";

export default function ComplaintFinderPage() {
  return (
    <Suspense fallback={<main className="min-h-[60svh]" aria-busy="true" />}>
      <ComplaintFinderContent />
    </Suspense>
  );
}

function ComplaintFinderContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? undefined;
  const t = useTranslations("pages");
  const categories = useTranslations("categories");

  return (
    <Section className="bg-background">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[var(--brand)]">{t("finderEyebrow")}</p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">{t("finderTitle")}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{t("finderText")}</p>
        </div>
        <ComplaintFinder initialCategory={initialCategory} />
        <div id="authorities" className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {complaintCategories.map((category) => {
            const Icon = category.icon;
            return (
              <PremiumCard key={category.key} className="overflow-hidden p-0">
                <div className={`h-2 bg-gradient-to-r ${category.tone}`} />
                <div className="p-6">
                  <Icon className="size-6 text-[var(--brand)]" />
                  <h2 className="mt-4 text-lg font-semibold text-foreground">{categories(`${category.key}.title`)}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{categories(`${category.key}.description`)}</p>
                  <dl className="mt-5 space-y-2 text-sm">
                    <div>
                      <dt className="font-semibold text-foreground">{categories("authority")}</dt>
                      <dd className="text-muted-foreground">{categories(`${category.key}.authority`)}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">{categories("timeline")}</dt>
                      <dd className="text-muted-foreground">{categories(`${category.key}.timeframe`)}</dd>
                    </div>
                  </dl>
                  <Link href="/guides" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:brightness-90">
                    {categories("learnMore")} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </PremiumCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
