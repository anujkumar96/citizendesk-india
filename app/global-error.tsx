"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-IN">
      <body>
        <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "24px", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
          <div style={{ maxWidth: "440px" }}>
            <p style={{ color: "#2563eb", fontWeight: 700 }}>CitizenDesk India</p>
            <h1 style={{ marginTop: "12px", fontSize: "32px", lineHeight: 1.15 }}>This page needs a fresh load</h1>
            <p style={{ marginTop: "16px", color: "#475569", lineHeight: 1.6 }}>
              The route is valid, but the browser could not load the latest page files. Try again, or return to the homepage.
            </p>
            <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <button type="button" onClick={() => reset()} style={{ height: "44px", border: 0, borderRadius: "6px", background: "#2563eb", color: "white", padding: "0 16px", fontWeight: 700 }}>
                Try again
              </button>
              <Link href="/en" style={{ height: "44px", display: "inline-flex", alignItems: "center", borderRadius: "6px", border: "1px solid #cbd5e1", color: "#0f172a", padding: "0 16px", fontWeight: 700, textDecoration: "none" }}>
                Go home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
