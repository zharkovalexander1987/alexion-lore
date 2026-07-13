import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "10_structured_data/characters.json",
  "10_structured_data/terms.json",
  "10_structured_data/mysteries.json",
  "10_structured_data/events.json",
  "10_structured_data/quests.json"
];

let failed = false;

for (const rel of required) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${rel}`);
    failed = true;
    continue;
  }
  try {
    JSON.parse(fs.readFileSync(full, "utf8"));
    console.log(`OK: ${rel}`);
  } catch (error) {
    console.error(`Invalid JSON: ${rel}\n${error.message}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log("Lore validation completed successfully.");
