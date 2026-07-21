import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Heading } from "@/src/components/design/Heading";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { complaintCategories } from "@/src/data/complaints";
import { Link } from "@/src/i18n/navigation";

export function CategoryGrid() {
  const home = useTranslations("home");
  const categories = useTranslations("categories");

  return (
    <Section
      className="bg-white dark:bg-slate-950"
      id="categories"
      aria-labelledby="categories-title"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow={home("categoriesEyebrow")}
          id="categories-title"
          title={home("categoriesTitle")}
          description={home("categoriesText")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {complaintCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.key}
                href={category.href}
                className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <PremiumCard className="h-full overflow-hidden p-0">
                  <div className={`h-1.5 bg-gradient-to-r ${category.tone}`} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.tone} text-white shadow-lg shadow-blue-500/20`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className="size-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-700 dark:text-slate-500 dark:group-hover:text-blue-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">
                      {categories(`${category.key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {categories(`${category.key}.description`)}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-blue-700 dark:text-blue-300">
                      {categories("cta")}
                    </p>
                  </div>
                </PremiumCard>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
