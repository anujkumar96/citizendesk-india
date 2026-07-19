import { Mail, MapPin, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { siteConfig } from "@/src/config/site";

export default function ContactPage() {
  const t = useTranslations("pages");
  return (
    <Section className="bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Contact</p><h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{t("contactTitle")}</h1><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{t("contactText")}</p><div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300"><p className="flex gap-3"><Mail className="size-5 text-blue-600" />{siteConfig.supportEmail}</p><p className="flex gap-3"><MapPin className="size-5 text-blue-600" />India-first, remote platform</p></div></div>
          <PremiumCard className="p-6"><MessageSquare className="size-6 text-blue-600" /><h2 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Send a message</h2><form className="mt-6 grid gap-4"><input className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm dark:border-white/10 dark:bg-white/5" placeholder="Your name" aria-label="Your name" /><input className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm dark:border-white/10 dark:bg-white/5" placeholder="Email address" aria-label="Email address" /><textarea className="min-h-32 rounded-md border border-slate-300 bg-white px-3 py-3 text-sm dark:border-white/10 dark:bg-white/5" placeholder="How can we help?" aria-label="Message" /><button className="h-11 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700" type="submit">Submit inquiry</button></form></PremiumCard>
        </div>
      </Container>
    </Section>
  );
}
