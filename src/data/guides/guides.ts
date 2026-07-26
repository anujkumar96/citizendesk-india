export const guides = [
  { slug: "consumer-complaint-guide", category: "Consumer", officialName: "National Consumer Helpline", officialUrl: "https://consumerhelpline.gov.in/" },
  { slug: "cpgrams-guide", category: "Public Grievance", officialName: "CPGRAMS", officialUrl: "https://pgportal.gov.in/" },
  { slug: "rti-application-guide", category: "RTI", officialName: "RTI Online", officialUrl: "https://rtionline.gov.in/" },
  { slug: "banking-ombudsman-guide", category: "Banking", officialName: "RBI CMS", officialUrl: "https://cms.rbi.org.in/" },
  { slug: "rail-madad-guide", category: "Railways", officialName: "Rail Madad", officialUrl: "https://railmadad.indianrailways.gov.in/" },
  { slug: "passport-seva-guide", category: "Passport", officialName: "Passport Seva", officialUrl: "https://www.passportindia.gov.in/" },
  { slug: "cyber-crime-guide", category: "Cyber Crime", officialName: "National Cyber Crime Portal", officialUrl: "https://cybercrime.gov.in/" },
  { slug: "uidai-guide", category: "Identity", officialName: "UIDAI", officialUrl: "https://uidai.gov.in/" },
] as const;

export type GuideSlug = (typeof guides)[number]["slug"];
