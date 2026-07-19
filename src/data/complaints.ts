import {
  Banknote,
  Building2,
  FileQuestion,
  Landmark,
  PhoneCall,
  ShieldAlert,
  ShoppingBag,
  Wifi,
} from "lucide-react";

import type {
  ComplaintCategory,
  PlatformFeature,
  PlatformStatistic,
  ProcessStep,
} from "@/src/types/complaint";

export const complaintCategories: ComplaintCategory[] = [
  {
    title: "Consumer Complaints",
    description: "Products, services, refunds, defective goods, misleading ads, and unfair trade practices.",
    href: "/complaint-finder?category=consumer",
    authority: "Consumer Commission",
    timeframe: "Varies by case stage",
    icon: ShoppingBag,
  },
  {
    title: "Banking & Payments",
    description: "Failed transactions, unauthorized debits, loan issues, credit card disputes, and UPI problems.",
    href: "/complaint-finder?category=banking",
    authority: "RBI Integrated Ombudsman",
    timeframe: "Escalate after bank response window",
    icon: Banknote,
  },
  {
    title: "Telecom & Internet",
    description: "Billing disputes, number portability, service outages, DND violations, and broadband concerns.",
    href: "/complaint-finder?category=telecom",
    authority: "Service provider appellate authority",
    timeframe: "Escalate after first complaint",
    icon: Wifi,
  },
  {
    title: "Cybercrime",
    description: "Online fraud, phishing, impersonation, harassment, and suspicious financial activity.",
    href: "/complaint-finder?category=cybercrime",
    authority: "National Cyber Crime Portal",
    timeframe: "Immediate action recommended",
    icon: ShieldAlert,
  },
  {
    title: "Municipal Services",
    description: "Roads, drainage, waste collection, streetlights, property services, and local civic issues.",
    href: "/complaint-finder?category=municipal",
    authority: "Local municipal body",
    timeframe: "Depends on local service charter",
    icon: Building2,
  },
  {
    title: "Public Grievances",
    description: "Central and state department services, delayed responses, benefits, certificates, and schemes.",
    href: "/complaint-finder?category=public-grievance",
    authority: "CPGRAMS or state grievance portal",
    timeframe: "Usually tracked by portal SLA",
    icon: Landmark,
  },
  {
    title: "RTI Guidance",
    description: "Right to Information applications, first appeals, second appeals, and public authority discovery.",
    href: "/complaint-finder?category=rti",
    authority: "Public Information Officer",
    timeframe: "30 days in most cases",
    icon: FileQuestion,
  },
  {
    title: "Emergency Escalation",
    description: "Find official helplines and urgent complaint channels for time-sensitive citizen issues.",
    href: "/complaint-finder?category=urgent",
    authority: "Relevant emergency authority",
    timeframe: "Use official helplines first",
    icon: PhoneCall,
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Describe the issue",
    description: "Start with the facts: what happened, who was involved, when it happened, and what outcome you need.",
  },
  {
    title: "Find the authority",
    description: "Map the issue to the right department, ombudsman, portal, commission, or local grievance channel.",
  },
  {
    title: "Prepare the complaint",
    description: "Use a clear structure with evidence, dates, reference numbers, relief requested, and escalation history.",
  },
  {
    title: "Track and escalate",
    description: "Follow response timelines, keep records, and escalate only when the prescribed process allows it.",
  },
];

export const platformFeatures: PlatformFeature[] = [
  {
    title: "Authority mapping",
    description: "Reduce confusion by matching issue types with the grievance body most likely to handle them.",
    icon: Landmark,
  },
  {
    title: "Procedure-first guidance",
    description: "Explain what to do before escalation, what documents matter, and what timeline to expect.",
    icon: FileQuestion,
  },
  {
    title: "Draft-ready structure",
    description: "Help citizens convert scattered facts into concise, respectful, evidence-backed complaint drafts.",
    icon: ShieldAlert,
  },
  {
    title: "Trustworthy learning",
    description: "Publish practical guides written for citizens, with official links and plain-language explanations.",
    icon: Building2,
  },
];

export const platformStatistics: PlatformStatistic[] = [
  { value: "8", label: "priority complaint categories" },
  { value: "30+", label: "authority types planned" },
  { value: "95+", label: "target Lighthouse score" },
  { value: "24/7", label: "self-serve guidance" },
];

