import { redirect } from "@/src/i18n/navigation";
import { defaultLocale } from "@/src/i18n/routing";

export default function RootPage() {
  redirect({ href: "/", locale: defaultLocale });
}
