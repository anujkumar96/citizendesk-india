import { readFileSync, readdirSync } from "node:fs";

const messagesDir = new URL("../messages/", import.meta.url);

function flatten(value, prefix = "", entries = new Map()) {
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === "object" && !Array.isArray(child)) flatten(child, path, entries);
    else entries.set(path, JSON.stringify(child));
  }
  return entries;
}

const english = flatten(JSON.parse(readFileSync(new URL("en.json", messagesDir), "utf8")));
let invalid = false;

for (const file of readdirSync(messagesDir).filter((name) => name.endsWith(".json"))) {
  const locale = file.slice(0, -5);
  const messages = flatten(JSON.parse(readFileSync(new URL(file, messagesDir), "utf8")));
  const missing = [...english.keys()].filter((key) => !messages.has(key));
  const unexpected = [...messages.keys()].filter((key) => !english.has(key));
  const empty = [...messages].filter(([, value]) => value === '""');
  console.log(`${locale}: ${messages.size} entries; missing ${missing.length}; unexpected ${unexpected.length}; empty ${empty.length}`);
  if (missing.length || unexpected.length || empty.length) invalid = true;
}

if (invalid) process.exitCode = 1;
