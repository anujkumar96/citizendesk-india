import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/citizendesk-india/",
    name: "CitizenDesk India",
    short_name: "CitizenDesk",
    description: "Guidance for Indian citizen complaints and grievances",
    start_url: "/citizendesk-india/en/",
    scope: "/citizendesk-india/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d4ed8",
    icons: [
      {
        src: "/citizendesk-india/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/citizendesk-india/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}