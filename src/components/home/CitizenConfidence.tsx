import { FileCheck2, Lightbulb, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

import { Heading } from "@/src/components/design/Heading";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { Link } from "@/src/i18n/navigation";

const storyKeys = ["pension", "banking", "consumer"] as const;
const rightKeys = ["evidence", "noResponse", "escalate"] as const;
const icons = [FileCheck2, Lightbulb, ShieldAlert] as const;

export function CitizenConfidence() {
  const t = useTranslations("confidence");
  const common = useTranslations("common");

  return (
    <Section className="bg-background" aria-labelledby="confidence-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading eyebrow={t("eyebrow")} id="confidence-title" title={t("title")} description={t("text")} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {storyKeys.map((key) => (
            <PremiumCard key={key} className="p-6">
              <p className="text-xs font-semibold uppercase text-[var(--brand)]">{t("illustrative")}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{t(`${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(`${key}.body`)}</p>
              <p className="mt-4 text-sm font-semibold text-foreground">{t(`${key}.lesson`)}</p>
            </PremiumCard>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {rightKeys.map((key, index) => {
            const Icon = icons[index];
            return (
              <div key={key} className="rounded-lg border border-border bg-card p-5">
                <Icon className="size-5 text-[var(--brand)]" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold text-foreground">{t(`rights.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(`rights.${key}.text`)}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/complaint-finder" className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white">
            {common("start")}
          </Link>
          <Link href="/guides" className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-4 text-sm font-semibold text-foreground">
            {common("learn")}
          </Link>
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-5 text-muted-foreground">{t("trust")}</p>
      </div>
    </Section>
  );
}
