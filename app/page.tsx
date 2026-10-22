import Link from "next/link";

import { localeLabels, locales } from "@/src/i18n/routing";

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-3xl font-bold">CitizenDesk India</h1>
      <p>Select your language to continue.</p>
      <nav aria-label="Choose a language" className="flex flex-wrap justify-center gap-4">
        {locales.map((locale) => (
          <Link key={locale} href={`/${locale}`} className="underline">
            {localeLabels[locale]}
          </Link>
        ))}
      </nav>
    </main>
  );
}
