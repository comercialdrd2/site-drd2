const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "src", "app");
const importLine = 'import LaudoDepthBlock from "@/components/LaudoDepthBlock";';

function titleFromSlug(slug) {
  return slug
    .replace(/^laudo-bombeiro-/, "")
    .replace(/-sao-paulo$/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function addImport(content) {
  if (content.includes(importLine)) return content;
  const anchor = 'import ServiceClusterLinks from "@/components/ServiceClusterLinks";';
  if (content.includes(anchor)) return content.replace(anchor, `${anchor}\n${importLine}`);
  return `${importLine}\n${content}`;
}

function insertBlock(content, slug) {
  if (content.includes("<LaudoDepthBlock")) return content;
  const block = `\n      <LaudoDepthBlock\n        occupation="${titleFromSlug(slug)}"\n        currentSlug="/${slug}"\n      />\n`;

  const anchors = [
    "      <ServiceClusterLinks",
    "      <NeighborhoodSilo",
    "      <InternalLinksBlock",
  ];

  for (const anchor of anchors) {
    const index = content.indexOf(anchor);
    if (index >= 0) return `${content.slice(0, index)}${block}\n${content.slice(index)}`;
  }

  return content;
}

let changed = 0;

for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || !entry.name.startsWith("laudo-bombeiro-")) continue;
  const file = path.join(appDir, entry.name, "page.tsx");
  if (!fs.existsSync(file)) continue;

  const original = fs.readFileSync(file, "utf8");
  let next = addImport(original);
  next = insertBlock(next, entry.name);

  if (next !== original) {
    fs.writeFileSync(file, next, "utf8");
    changed += 1;
  }
}

console.log(`Laudo depth block inserted in ${changed} pages.`);
