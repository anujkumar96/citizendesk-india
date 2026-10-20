import type { Metadata } from "next";
import { cookies } from "next/headers";

import { RouteRefreshRecovery } from "@/src/components/providers/RouteRefreshRecovery";
import { defaultMetadata } from "@/src/constants/metadata";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;

const accentScript = `
  try {
    const allowed = new Set(['blue', 'emerald', 'violet', 'rose', 'amber']);
    const accent = localStorage.getItem('citizendesk-accent');
    if (accent && allowed.has(accent)) {
      document.documentElement.dataset.accent = accent;
      document.cookie = 'citizendesk-accent=' + accent + '; path=/; max-age=31536000; samesite=lax';
    }
    const theme = localStorage.getItem('citizendesk-theme') || 'system';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'system' && prefersDark));
  } catch {}
`;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const savedAccent = (await cookies()).get("citizendesk-accent")?.value;
  const accent = ["blue", "emerald", "violet", "rose", "amber"].includes(savedAccent ?? "")
    ? savedAccent
    : "blue";

  return (
    <html lang="en-IN" data-accent={accent} suppressHydrationWarning className="h-full scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: accentScript }} />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <RouteRefreshRecovery />
        {children}
      </body>
    </html>
  );
}
