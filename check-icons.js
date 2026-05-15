// Check and fix missing icons in affected pages
const fs = require("fs");
const path = require("path");

const failingPages = [
  "avcb-alphaville-barueri",
  "avcb-comercial-escritorio-sao-paulo",
  "avcb-farmacia-drogaria-sao-paulo",
  "avcb-salao-de-festas-sao-paulo"
];

for (const p of failingPages) {
  const file = path.join("src", "app", p, "page.tsx");
  const c = fs.readFileSync(file, "utf8");
  const lines = c.split("\n");

  // Find lucide import block
  let importStart = -1, importEnd = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^import\s*\{/) && lines[i].includes("lucide-react")) {
      importStart = i; importEnd = i; break;
    }
    if (lines[i].match(/^import\s*\{/) && !lines[i].includes("from")) {
      importStart = i;
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].includes("lucide-react")) { importEnd = j; break; }
      }
      break;
    }
  }

  const importBlock = lines.slice(importStart, importEnd + 1).join("\n");
  console.log(`\n=== ${p} ===`);
  console.log("Import block:", importBlock);

  // Find all icon usages in JSX (capitalized words used as <Icon ...>)
  const usedIcons = [...new Set(c.match(/(?<=[<{, ])([A-Z][a-zA-Z0-9]+)(?=[ />])/g) || [])];
  const importedIcons = importBlock.match(/\b([A-Z][a-zA-Z0-9]+)\b/g) || [];
  const missingIcons = usedIcons.filter(icon => !importedIcons.includes(icon) && icon !== "Image" && icon !== "Link" && icon !== "React");
  console.log("Missing icons:", missingIcons.join(", ") || "none");
}
