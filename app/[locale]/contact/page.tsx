import { Mail, MapPin, MessageSquare } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { siteConfig } from "@/src/config/site";

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <Section className="bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-[var(--brand)]">{t("contactEyebrow")}</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{t("contactTitle")}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{t("contactText")}</p>
            <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p className="flex gap-3"><Mail className="size-5 text-[var(--brand)]" />{siteConfig.supportEmail}</p>
              <p className="flex gap-3"><MapPin className="size-5 text-[var(--brand)]" />{t("formLocation")}</p>
            </div>
          </div>
          <PremiumCard className="p-6">
            <MessageSquare className="size-6 text-[var(--brand)]" />
            <h2 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{t("formTitle")}</h2>
            <form className="mt-6 grid gap-4">
              <input className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm dark:border-white/10 dark:bg-white/5" placeholder={t("formName")} aria-label={t("formName")} />
              <input className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm dark:border-white/10 dark:bg-white/5" placeholder={t("formEmail")} aria-label={t("formEmail")} />
              <textarea className="min-h-32 rounded-md border border-slate-300 bg-white px-3 py-3 text-sm dark:border-white/10 dark:bg-white/5" placeholder={t("formMessage")} aria-label={t("messageLabel")} />
              <button className="h-11 rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white hover:brightness-95" type="submit">{t("formSubmit")}</button>
            </form>
          </PremiumCard>
        </div>
      </Container>
    </Section>
  );
}
