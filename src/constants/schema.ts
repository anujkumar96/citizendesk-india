import { siteConfig } from "@/src/config/site";
import { absoluteUrl } from "@/src/constants/metadata";
import { homepageFaq } from "@/src/data/faq";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  foundingLocation: siteConfig.foundingLocation,
  areaServed: {
    "@type": "Country",
    name: siteConfig.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.supportEmail,
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [siteConfig.social.x, siteConfig.social.linkedin],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: `${absoluteUrl("/blog")}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const homepageBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
  ],
};

