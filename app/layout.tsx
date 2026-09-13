import type { Metadata } from "next";

import { RouteRefreshRecovery } from "@/src/components/providers/RouteRefreshRecovery";
import { defaultMetadata } from "@/src/constants/metadata";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;

const accentScript = `
  try {
    const accent = localStorage.getItem('citizendesk-accent');
    if (accent) document.documentElement.dataset.accent = accent;
  } catch {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className="h-full scroll-smooth">
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <script dangerouslySetInnerHTML={{ __html: accentScript }} />
        <RouteRefreshRecovery />
        {children}
      </body>
    </html>
  );
}
