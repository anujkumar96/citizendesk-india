import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { CitizenAssistant } from "@/src/components/assistant/CitizenAssistant";
import { ThemeProvider } from "@/src/components/providers/ThemeProvider";
import { locales, routing } from "@/src/i18n/routing";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <div className="flex min-h-svh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CitizenAssistant />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
