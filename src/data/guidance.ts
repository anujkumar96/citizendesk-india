import type { ComplaintCategoryKey } from "@/src/data/complaints";

export type GuidanceProfile = {
  category: ComplaintCategoryKey;
  keywords: string[];
  guide: string;
};

export const guidanceProfiles: GuidanceProfile[] = [
  {
    category: "consumer",
    keywords: ["refund", "defect", "delivery", "warranty", "shop", "seller", "service"],
    guide: "consumer-complaint-guide",
  },
  {
    category: "banking",
    keywords: ["bank", "upi", "atm", "card", "loan", "transaction", "debit", "credit"],
    guide: "banking-ombudsman-guide",
  },
  {
    category: "insurance",
    keywords: ["insurance", "claim", "premium", "policy", "insurer", "cashless"],
    guide: "banking-ombudsman-guide",
  },
  {
    category: "pension",
    keywords: ["pension", "epfo", "retirement", "arrears", "life certificate"],
    guide: "cpgrams-guide",
  },
  {
    category: "cpgrams",
    keywords: ["government", "department", "ministry", "delay", "service", "certificate"],
    guide: "cpgrams-guide",
  },
  {
    category: "rti",
    keywords: ["information", "rti", "record", "public authority", "pio"],
    guide: "rti-application-guide",
  },
  {
    category: "railways",
    keywords: ["train", "rail", "ticket", "pnr", "refund", "station"],
    guide: "rail-madad-guide",
  },
  {
    category: "passport",
    keywords: ["passport", "appointment", "police verification", "seva"],
    guide: "passport-seva-guide",
  },
  {
    category: "electricity",
    keywords: ["electricity", "meter", "bill", "power", "connection", "discom"],
    guide: "consumer-complaint-guide",
  },
  {
    category: "ingram",
    keywords: ["helpline", "consumer helpline", "ingram", "company response"],
    guide: "consumer-complaint-guide",
  },
];

export function matchGuidance(input: string, selected?: ComplaintCategoryKey) {
  if (selected) return guidanceProfiles.find((profile) => profile.category === selected) ?? guidanceProfiles[0];
  const lowered = input.toLowerCase();
  return (
    guidanceProfiles.find((profile) => profile.keywords.some((keyword) => lowered.includes(keyword))) ??
    guidanceProfiles[0]
  );
}
