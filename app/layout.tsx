import type { Metadata } from "next";

import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { defaultMetadata } from "@/src/constants/metadata";
import { cn } from "@/src/utils/helpers";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={cn("h-full scroll-smooth")}>
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-950 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
