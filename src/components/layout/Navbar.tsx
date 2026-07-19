import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { siteConfig } from "@/src/config/site";
import { mainNavigation } from "@/src/constants/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" aria-label={`${siteConfig.name} home`}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm">CD</span>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-950 sm:block">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/blog" className="hidden size-9 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:flex" aria-label="Search guides">
            <Search className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/complaint-finder" className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Find authority
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
