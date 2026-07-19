import Link from "next/link";

import { siteConfig } from "@/src/config/site";
import { footerNavigation } from "@/src/constants/navigation";

const navigationGroups = [
  ["Platform", footerNavigation.platform],
  ["Company", footerNavigation.company],
  ["Resources", footerNavigation.resources],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8 lg:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" aria-label={`${siteConfig.name} home`}>
            <span className="flex size-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">CD</span>
            <span className="font-semibold tracking-tight text-slate-950">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">{siteConfig.description}</p>
          <p className="mt-4 text-xs leading-5 text-slate-500">Independent citizen assistance platform. Not affiliated with any government department.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {navigationGroups.map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
              <ul className="mt-4 space-y-3" aria-label={`${title} links`}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-600 transition hover:text-blue-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for clarity, trust, and responsible citizen action.</p>
        </div>
      </div>
    </footer>
  );
}

