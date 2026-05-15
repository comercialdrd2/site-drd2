const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "src", "app");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile() && entry.name === "page.tsx") {
      files.push(full);
    }
  }
  return files;
}

function pageSlug(file) {
  const dir = path.dirname(file);
  return "/" + path.relative(root, dir).replace(/\\/g, "/");
}

function occupationFromFile(content, slug) {
  const existing = content.match(/<OccupationAuthorityBlock\s+occupation="([^"]+)"/);
  if (existing) return existing[1];

  return slug
    .replace(/^\/(avcb-para-|alvara-bombeiro-|renovacao-avcb-)/, "")
    .replace(/-sao-paulo$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

let changed = 0;

for (const file of walk(root)) {
  let content = fs.readFileSync(file, "utf8");
  if (!content.includes("OccupationAuthorityBlock")) continue;
  if (content.includes("OccupationDepthBlock")) continue;

  const slug = pageSlug(file);
  const occupation = occupationFromFile(content, slug);
  const importLine = 'import OccupationDepthBlock from "@/components/OccupationDepthBlock";';

  const authorityImport = 'import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";';
  if (content.includes(authorityImport)) {
    content = content.replace(authorityImport, `${authorityImport}\n${importLine}`);
  } else {
    const lastImport = content.match(/import .*?;\r?\n(?!import )/);
    if (!lastImport) continue;
    content = content.replace(lastImport[0], `${lastImport[0]}${importLine}\n`);
  }

  const anchor = content.indexOf("\n      <InternalLinksBlock");
  const fallback = content.indexOf("\n      <ServiceClusterLinks");
  const index = anchor >= 0 ? anchor : fallback;
  if (index < 0) continue;

  const block = `

      <OccupationDepthBlock
        occupation="${occupation}"
        currentSlug="${slug}"
      />
`;

  content = content.slice(0, index) + block + content.slice(index);
  fs.writeFileSync(file, content);
  changed += 1;
}

console.log(`OccupationDepthBlock inserted in ${changed} pages.`);
