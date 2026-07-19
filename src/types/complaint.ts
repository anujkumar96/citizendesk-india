import type { LucideIcon } from "lucide-react";

export type ComplaintCategory = {
  title: string;
  description: string;
  href: string;
  authority: string;
  timeframe: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PlatformFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PlatformStatistic = {
  value: string;
  label: string;
};

