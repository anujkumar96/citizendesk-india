  export const mainNavigation = [
    { key: "complaintFinder", href: "/complaint-finder" },
    { key: "guides", href: "/guides" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ] as const;

  export const footerNavigation = {
    platform: [
      { label: "complaintFinder", href: "/complaint-finder" },
      { label: "categoriesEyebrow", href: "/complaint-finder#authorities" },
      { label: "guides", href: "/guides" },
    ],
    company: [
      { label: "about", href: "/about" },
      { label: "contact", href: "/contact" },
    ],
    legal: [
      { label: "privacyTitle", href: "/privacy-policy" },
      { label: "termsTitle", href: "/terms" },
    ],
  } as const;
