import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { complaintCategories } from "@/src/data/complaints";
import { Link } from "@/src/i18n/navigation";

export default function ComplaintFinderPage() {
  const t = useTranslations("pages");
  const categories = useTranslations("categories");
  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container>
        <div className="max-w-3xl"><p className="text-sm font-semibold text-blue-700 dark:text-blue-300">{t("finderEyebrow")}</p><h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{t("finderTitle")}</h1><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{t("finderText")}</p></div>
        <div id="authorities" className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {complaintCategories.map((category) => { const Icon = category.icon; return <PremiumCard key={category.key} className="overflow-hidden p-0"><div className={`h-2 bg-gradient-to-r ${category.tone}`} /><div className="p-6"><Icon className="size-6 text-blue-600 dark:text-blue-300" /><h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{categories(`${category.key}.title`)}</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{categories(`${category.key}.description`)}</p><dl className="mt-5 space-y-2 text-sm"><div><dt className="font-semibold text-slate-900 dark:text-white">{categories("authority")}</dt><dd className="text-slate-600 dark:text-slate-300">{categories(`${category.key}.authority`)}</dd></div><div><dt className="font-semibold text-slate-900 dark:text-white">{categories("timeline")}</dt><dd className="text-slate-600 dark:text-slate-300">{categories(`${category.key}.timeframe`)}</dd></div></dl><Link href="/guides" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100">{categories("learnMore")} <ArrowRight className="size-4" /></Link></div></PremiumCard>; })}
        </div>
      </Container>
    </Section>
  );
}
