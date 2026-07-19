import type { Metadata } from "next";

import { defaultMetadata } from "@/src/constants/metadata";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className="h-full scroll-smooth">
      <body className="min-h-full bg-slate-50 font-sans text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
