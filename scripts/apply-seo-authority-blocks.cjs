const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "src", "app");
const importLine = 'import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";';

const zones = {
  "zona-sul": ["brooklin", "campo-belo", "itaim-bibi", "jabaquara", "moema", "morumbi", "saude", "santo-amaro", "vila-mariana", "vila-olimpia"],
  "zona-leste": ["analia-franco", "aricanduva", "ipiranga", "itaquera", "mooca", "penha", "tatuape", "vila-prudente"],
  "zona-norte": ["casa-verde", "jacana", "limao", "santana", "tucuruvi"],
  "zona-oeste": ["butanta", "lapa", "perdizes", "pinheiros", "vila-leopoldina", "vila-madalena"],
  centro: ["bela-vista", "centro-bela-vista", "centro-sao-paulo", "consolacao", "liberdade", "se"],
  "grande-sp": ["alphaville-barueri", "barueri-alphaville", "guarulhos", "osasco", "sao-bernardo", "sao-caetano"],
};

const zoneLabels = {
  "zona-sul": "Zona Sul",
  "zona-leste": "Zona Leste",
  "zona-norte": "Zona Norte",
  "zona-oeste": "Zona Oeste",
  centro: "Centro",
  "grande-sp": "Grande SP",
};

const directNeighborhoods = new Set(Object.values(zones).flat());

function titleCaseFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function zoneFor(slug) {
  for (const [zone, list] of Object.entries(zones)) {
    if (list.includes(slug)) return zoneLabels[zone];
  }
  return "Sao Paulo";
}

function addImport(content) {
  if (content.includes(importLine)) return content;
  const anchor = 'import InternalLinksBlock from "@/components/InternalLinksBlock";';
  if (content.includes(anchor)) return content.replace(anchor, `${anchor}\n${importLine}`);
  const siloAnchor = 'import NeighborhoodSilo from "@/components/NeighborhoodSilo";';
  if (content.includes(siloAnchor)) return content.replace(siloAnchor, `${siloAnchor}\n${importLine}`);
  return content;
}

function insertBefore(content, anchor, block) {
  if (content.includes(block.trim())) return content;
  const idx = content.indexOf(anchor);
  if (idx < 0) return content;
  return `${content.slice(0, idx)}${block}\n${content.slice(idx)}`;
}

function isOccupationPage(dirName, content) {
  if (!content.includes("<NeighborhoodSilo") && !content.includes("<InternalLinksBlock")) return false;
  if (dirName.startsWith("renovacao-avcb-condominio-") && !dirName.endsWith("sao-paulo")) return false;
  if (dirName.startsWith("avcb-") && directNeighborhoods.has(dirName.replace(/^avcb-/, ""))) return false;
  if (dirName.includes("zona-") || ["avcb-sao-paulo", "avcb", "clcb-sao-paulo"].includes(dirName)) return false;
  return (
    dirName.startsWith("alvara-bombeiro-") ||
    dirName.startsWith("laudo-bombeiro-") ||
    (dirName.startsWith("renovacao-avcb-") && dirName.endsWith("sao-paulo")) ||
    (dirName.startsWith("avcb-") && dirName.endsWith("sao-paulo"))
  );
}

function occupationName(dirName) {
  return titleCaseFromSlug(
    dirName
      .replace(/^alvara-bombeiro-/, "")
      .replace(/^laudo-bombeiro-/, "")
      .replace(/^renovacao-avcb-/, "")
      .replace(/^avcb-para-/, "")
      .replace(/^avcb-/, "")
      .replace(/-sao-paulo$/, "")
  );
}

function handleOccupation(dirName, content) {
  if (content.includes("<OccupationAuthorityBlock")) return content;
  content = addImport(content);
  const block = `      <OccupationAuthorityBlock\n        occupation="${occupationName(dirName)}"\n        currentSlug="/${dirName}"\n      />\n\n`;
  if (content.includes("      <InternalLinksBlock")) return insertBefore(content, "      <InternalLinksBlock", block);
  if (content.includes("      <LeadForm")) return insertBefore(content, "      <LeadForm", block);
  if (content.includes("      <NeighborhoodSilo")) return insertBefore(content, "      <NeighborhoodSilo", block);
  return content;
}

function handleNeighborhood(dirName, content) {
  if (content.includes("<NeighborhoodAuthorityBlock")) return content;
  content = addImport(content);

  let slug = "";
  let currentSlug = "";
  let neighborhood = "";

  if (dirName.startsWith("avcb-")) {
    slug = dirName.replace(/^avcb-/, "");
    currentSlug = `"/${dirName}"`;
    neighborhood = titleCaseFromSlug(slug.replace(/^centro-/, ""));
  } else if (dirName.startsWith("renovacao-avcb-condominio-")) {
    slug = dirName.replace(/^renovacao-avcb-condominio-/, "");
    currentSlug = "{_slug}";
    neighborhood = titleCaseFromSlug(slug);
  } else if (dirName.startsWith("renovacao-avcb-restaurante-")) {
    slug = dirName.replace(/^renovacao-avcb-restaurante-/, "");
    currentSlug = "{_slug}";
    neighborhood = titleCaseFromSlug(slug);
  } else {
    return content;
  }

  const block = `      <NeighborhoodAuthorityBlock\n        neighborhood="${neighborhood}"\n        zone="${zoneFor(slug)}"\n        currentSlug=${currentSlug}\n      />\n\n`;

  if (content.includes("      <InternalLinksBlock")) return insertBefore(content, "      <InternalLinksBlock", block);
  if (content.includes("      <LeadForm")) return insertBefore(content, "      <LeadForm", block);
  return content;
}

let changed = 0;
let occupationChanged = 0;
let neighborhoodChanged = 0;

for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const pageFile = path.join(appDir, entry.name, "page.tsx");
  if (!fs.existsSync(pageFile)) continue;

  const original = fs.readFileSync(pageFile, "utf8");
  let next = original;

  const neighborhoodSlug = entry.name.startsWith("avcb-") ? entry.name.replace(/^avcb-/, "") : "";
  const isNeighborhood =
    (entry.name.startsWith("avcb-") && directNeighborhoods.has(neighborhoodSlug)) ||
    (entry.name.startsWith("renovacao-avcb-condominio-") && !entry.name.endsWith("sao-paulo")) ||
    entry.name.startsWith("renovacao-avcb-restaurante-");

  if (isNeighborhood) {
    next = handleNeighborhood(entry.name, next);
    if (next !== original) neighborhoodChanged += 1;
  } else if (isOccupationPage(entry.name, next)) {
    next = handleOccupation(entry.name, next);
    if (next !== original) occupationChanged += 1;
  }

  if (next !== original) {
    fs.writeFileSync(pageFile, next, "utf8");
    changed += 1;
  }
}

console.log(`SEO authority blocks inserted: ${changed} files (${occupationChanged} occupation, ${neighborhoodChanged} neighborhood).`);
