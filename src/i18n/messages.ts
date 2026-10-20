import enMessages from "@/messages/en.json";
import asMessages from "@/messages/as.json";
import bnMessages from "@/messages/bn.json";
import guMessages from "@/messages/gu.json";
import hiMessages from "@/messages/hi.json";
import knMessages from "@/messages/kn.json";
import mlMessages from "@/messages/ml.json";
import mrMessages from "@/messages/mr.json";
import orMessages from "@/messages/or.json";
import paMessages from "@/messages/pa.json";
import taMessages from "@/messages/ta.json";
import teMessages from "@/messages/te.json";
import { cache } from "react";

type MessageValue = string | MessageTree | MessageValue[];
type MessageTree = { [key: string]: MessageValue };

function mergeMessages(base: MessageTree, localized: MessageTree): MessageTree {
  return Object.fromEntries(
    Object.entries(base).map(([key, baseValue]) => {
      const localizedValue = localized[key];
      if (
        baseValue && localizedValue &&
        typeof baseValue === "object" && !Array.isArray(baseValue) &&
        typeof localizedValue === "object" && !Array.isArray(localizedValue)
      ) {
        return [key, mergeMessages(baseValue as MessageTree, localizedValue as MessageTree)];
      }
      return [key, localizedValue ?? baseValue];
    }),
  );
}

const messageCatalogs: Record<string, MessageTree> = {
  en: enMessages as MessageTree,
  as: asMessages as MessageTree,
  bn: bnMessages as MessageTree,
  gu: guMessages as MessageTree,
  hi: hiMessages as MessageTree,
  kn: knMessages as MessageTree,
  ml: mlMessages as MessageTree,
  mr: mrMessages as MessageTree,
  or: orMessages as MessageTree,
  pa: paMessages as MessageTree,
  ta: taMessages as MessageTree,
  te: teMessages as MessageTree,
};

export const getMessagesForLocale = cache(async (locale: string) => {
  const localized = messageCatalogs[locale] ?? enMessages as MessageTree;
  return locale === "en" ? localized : mergeMessages(enMessages as MessageTree, localized);
});
