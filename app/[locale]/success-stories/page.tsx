import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SuccessStoriesCarousel } from "@/src/components/success-stories/SuccessStoriesCarousel";
import { Container } from "@/src/components/design/Container";
import { Section } from "@/src/components/design/Section";
import { createPageMetadata } from "@/src/constants/metadata";
import { successStories } from "@/src/data/successStories";
import { Link } from "@/src/i18n/navigation";

type LocalePageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "successStories" });
  return createPageMetadata({ title: t("realMetaTitle"), description: t("realMetaDescription"), path: `/${locale}/success-stories` });
}

export default async function SuccessStoriesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("successStories");
  const common = await getTranslations("common");

  return <><Section className="border-b border-border bg-[linear-gradient(180deg,var(--brand-soft),var(--background))]"><Container><div className="max-w-3xl"><p className="text-sm font-semibold text-[var(--brand)]">{t("realEyebrow")}</p><h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">{t("realTitle")}</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">{t("realIntro")}</p><p className="mt-5 flex gap-2 text-sm leading-6 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />{t("independentNotice")}</p></div></Container></Section><Section className="bg-background"><Container><SuccessStoriesCarousel stories={successStories} readSourceLabel={t("readOriginal")} /><div className="mt-10 flex flex-col justify-between gap-5 border-t border-border pt-10 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-semibold text-foreground">{t("ctaTitle")}</h2><p className="mt-2 max-w-2xl text-muted-foreground">{t("ctaText")}</p></div><Link href="/complaint-finder" className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white">{common("openFinder")}<ArrowRight className="size-4" aria-hidden="true" /></Link></div></Container></Section></>;
}
