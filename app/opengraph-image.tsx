import { ImageResponse } from "next/og";

import { siteConfig } from "@/src/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8fafc",
          color: "#0f172a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #dbe3ef",
            borderRadius: "28px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "56px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                alignItems: "center",
                background: "#2563eb",
                borderRadius: "18px",
                color: "#ffffff",
                display: "flex",
                fontSize: 34,
                fontWeight: 800,
                height: 76,
                justifyContent: "center",
                width: 76,
              }}
            >
              CD
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 800 }}>{siteConfig.name}</div>
              <div style={{ color: "#2563eb", fontSize: 22, fontWeight: 600 }}>Citizen Assistance Platform</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -1, lineHeight: 1.04, maxWidth: 900 }}>
              {siteConfig.tagline}
            </div>
            <div style={{ color: "#475569", fontSize: 28, lineHeight: 1.35, maxWidth: 900 }}>
              Find the correct grievance authority, understand procedures, and prepare better complaint drafts.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
