import {
  BadgeIndianRupee,
  Banknote,
  Building2,
  FileQuestion,
  Landmark,
  Plane,
  ShieldAlert,
  ShoppingBag,
  Train,
  Zap,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type ComplaintCategoryKey = "consumer" | "cpgrams" | "ingram" | "rti" | "banking" | "insurance" | "railways" | "passport" | "electricity" | "pension";

export type ComplaintCategoryMeta = {
  key: ComplaintCategoryKey;
  href: string;
  tone: string;
  icon: LucideIcon;
};

export const complaintCategories: ComplaintCategoryMeta[] = [
  { key: "consumer", href: "/complaint-finder?category=consumer", tone: "from-blue-500 to-cyan-400", icon: ShoppingBag },
  { key: "cpgrams", href: "/complaint-finder?category=cpgrams", tone: "from-indigo-500 to-blue-500", icon: Landmark },
  { key: "ingram", href: "/complaint-finder?category=ingram", tone: "from-sky-500 to-emerald-400", icon: ShieldAlert },
  { key: "rti", href: "/complaint-finder?category=rti", tone: "from-violet-500 to-fuchsia-400", icon: FileQuestion },
  { key: "banking", href: "/complaint-finder?category=banking", tone: "from-blue-600 to-indigo-500", icon: Banknote },
  { key: "insurance", href: "/complaint-finder?category=insurance", tone: "from-emerald-500 to-teal-400", icon: BadgeIndianRupee },
  { key: "railways", href: "/complaint-finder?category=railways", tone: "from-red-500 to-orange-400", icon: Train },
  { key: "passport", href: "/complaint-finder?category=passport", tone: "from-slate-700 to-blue-500", icon: Plane },
  { key: "electricity", href: "/complaint-finder?category=electricity", tone: "from-amber-500 to-yellow-300", icon: Zap },
  { key: "pension", href: "/complaint-finder?category=pension", tone: "from-purple-500 to-blue-500", icon: Building2 },
];

export const processStepKeys = ["describe", "authority", "prepare", "track"] as const;
export const platformFeatureKeys = ["mapping", "procedure", "draft", "learning"] as const;
export const platformStatistics = ["10", "30+", "12", "24/7"] as const;
