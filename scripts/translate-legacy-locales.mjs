import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const locales = ["sa"];
const messagesDir = resolve("messages");
const source = JSON.parse(await readFile(resolve(messagesDir, "en.json"), "utf8"));

function collectStrings(value, path = [], entries = []) {
  if (typeof value === "string") entries.push({ path, value });
  else if (Array.isArray(value)) value.forEach((item, index) => collectStrings(item, [...path, index], entries));
  else if (value && typeof value === "object") Object.entries(value).forEach(([key, item]) => collectStrings(item, [...path, key], entries));
  return entries;
}

function setValue(target, path, value) {
  const last = path.at(-1);
  const parent = path.slice(0, -1).reduce((current, key) => current[key], target);
  parent[last] = value;
}

function shouldKeep(value) {
  return /^https?:\/\//.test(value) || /^\/[\w/-]+$/.test(value);
}

async function translateChunk(locale, entries) {
  const marker = (index) => {
    let current = index + 1;
    let result = "";
    while (current > 0) {
      current -= 1;
      result = String.fromCharCode(65 + (current % 26)) + result;
      current = Math.floor(current / 26);
    }
    return `[[CDX${result}]]`;
  };
  const markerIndex = (value) => value.slice(3, -2).split("").reduce((total, letter) => total * 26 + letter.charCodeAt(0) - 64, 0) - 1;
  const payload = entries.map(({ value }, index) => `${marker(index)}\n${value}`).join("\n");
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", locale);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", payload);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${locale}: translation request failed (${response.status})`);
  const data = await response.json();
  const text = data[0].map((part) => part[0]).join("");
  const parts = text.split(/\[\[CDX([A-Z]+)\]\]\n?/g);
  const translations = new Map();
  for (let index = 1; index < parts.length; index += 2) translations.set(markerIndex(`CDX${parts[index]}]]`), parts[index + 1]?.trim() ?? "");
  if (translations.size !== entries.length) {
    const translated = await Promise.all(entries.map(async (entry) => {
      const individualUrl = new URL("https://translate.googleapis.com/translate_a/single");
      individualUrl.searchParams.set("client", "gtx");
      individualUrl.searchParams.set("sl", "en");
      individualUrl.searchParams.set("tl", locale);
      individualUrl.searchParams.set("dt", "t");
      individualUrl.searchParams.set("q", entry.value);
      const individualResponse = await fetch(individualUrl);
      if (!individualResponse.ok) throw new Error(`${locale}: fallback translation request failed (${individualResponse.status})`);
      const individualData = await individualResponse.json();
      return { ...entry, value: individualData[0].map((part) => part[0]).join("") };
    }));
    return translated;
  }
  return entries.map((entry, index) => ({ ...entry, value: translations.get(index) }));
}

async function translateLocale(locale) {
  const target = structuredClone(source);
  const entries = collectStrings(source).filter((entry) => !shouldKeep(entry.value));
  const chunks = [];
  let chunk = [];
  let length = 0;
  for (const entry of entries) {
    if (chunk.length && length + entry.value.length > 5000) {
      chunks.push(chunk);
      chunk = [];
      length = 0;
    }
    chunk.push(entry);
    length += entry.value.length + 18;
  }
  if (chunk.length) chunks.push(chunk);
  for (const [index, chunkEntries] of chunks.entries()) {
    const translated = await translateChunk(locale, chunkEntries);
    translated.forEach((entry) => setValue(target, entry.path, entry.value));
    console.log(`${locale}: ${index + 1}/${chunks.length}`);
  }
  await writeFile(resolve(messagesDir, `${locale}.json`), `${JSON.stringify(target, null, 2)}\n`, "utf8");
}

for (const locale of locales) await translateLocale(locale);
