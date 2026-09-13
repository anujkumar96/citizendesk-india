export const guides = [
  { slug: "consumer-complaint-guide", categoryKey: "consumer", officialName: "National Consumer Helpline", officialUrl: "https://consumerhelpline.gov.in/" },
  { slug: "cpgrams-guide", categoryKey: "publicGrievance", officialName: "CPGRAMS", officialUrl: "https://pgportal.gov.in/" },
  { slug: "rti-application-guide", categoryKey: "rti", officialName: "RTI Online", officialUrl: "https://rtionline.gov.in/" },
  { slug: "banking-ombudsman-guide", categoryKey: "banking", officialName: "RBI CMS", officialUrl: "https://cms.rbi.org.in/" },
  { slug: "rail-madad-guide", categoryKey: "railways", officialName: "Rail Madad", officialUrl: "https://railmadad.indianrailways.gov.in/" },
  { slug: "passport-seva-guide", categoryKey: "passport", officialName: "Passport Seva", officialUrl: "https://www.passportindia.gov.in/" },
  { slug: "cyber-crime-guide", categoryKey: "cyberCrime", officialName: "National Cyber Crime Portal", officialUrl: "https://cybercrime.gov.in/" },
  { slug: "uidai-guide", categoryKey: "identity", officialName: "UIDAI", officialUrl: "https://uidai.gov.in/" },
] as const;

export type GuideSlug = (typeof guides)[number]["slug"];
