export const mainNavigation = [
  { label: "Complaint Finder", href: "/complaint-finder" },
  { label: "Guides", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = {
  platform: [
    { label: "Complaint Finder", href: "/complaint-finder" },
    { label: "Complaint Drafts", href: "/complaint-finder#drafts" },
    { label: "Procedure Guides", href: "/blog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Consumer Complaints", href: "/blog/consumer-complaint-guide" },
    { label: "Banking Complaints", href: "/blog/banking-ombudsman-guide" },
    { label: "RTI Basics", href: "/blog/rti-application-guide" },
  ],
} as const;
