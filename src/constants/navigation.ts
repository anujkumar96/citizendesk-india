export const mainNavigation = [
  { key: "complaintFinder", href: "/complaint-finder" },
  { key: "guides", href: "/guides" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export const footerNavigation = {
  platform: [
    { label: "Complaint Finder", href: "/complaint-finder" },
    { label: "Supported Authorities", href: "/complaint-finder#authorities" },
    { label: "Guides", href: "/guides" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
