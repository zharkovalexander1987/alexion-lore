import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "10_structured_data");
const outDir = path.join(root, "site");

const read = (name) =>
  JSON.parse(fs.readFileSync(path.join(dataDir, name), "utf8"));

const characters = read("characters.json").characters
  .filter((item) => item.accessLevel === "public")
  .map(({ forbiddenDisclosures, ...item }) => item);

const mysteries = read("mysteries.json").mysteries
  .filter((item) => item.accessLevel === "public");

const events = read("events.json").events
  .filter((item) => item.accessLevel === "public");

const quests = read("quests.json").quests
  .filter((item) => item.public === true);

const terms = read("terms.json").terms;

const index = {
  generatedAt: new Date().toISOString(),
  characters,
  mysteries,
  events,
  quests,
  terms
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "lore-index.json"),
  JSON.stringify(index, null, 2)
);

console.log("Created site/lore-index.json");
