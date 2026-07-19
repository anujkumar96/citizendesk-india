export const siteConfig = {
  name: "CitizenDesk India",
  shortName: "CitizenDesk",
  tagline: "Find the Right Authority. Resolve with Confidence.",
  description:
    "CitizenDesk India helps citizens identify the right grievance authority, understand complaint procedures, and prepare better complaint drafts.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://citizendesk.in",
  locale: "en_IN",
  country: "India",
  foundingLocation: "India",
  supportEmail: "hello@citizendesk.in",
  social: {
    x: "https://x.com/citizendeskindia",
    linkedin: "https://www.linkedin.com/company/citizendesk-india",
  },
} as const;

export type SiteConfig = typeof siteConfig;

