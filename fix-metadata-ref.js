/**
 * Fix bairro pages that fail SWC compilation.
 * 
 * Root cause: These pages reference `metadata.title` and `metadata.description`
 * inside the JSX/function body. The SWC compiler in Next.js 14 has a bug
 * where referencing the exported `metadata` object inside the same file's
 * function body inside a complex JSX prop causes a parse error.
 *
 * Fix: Extract the title and description as module-level constants BEFORE
 * the metadata export, then use those constants in both the metadata export
 * and inside the function body (instead of metadata.title).
 */

const fs = require("fs");
const path = require("path");

function walk(d) {
  let r = [];
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) r = r.concat(walk(p));
    else if (f === "page.tsx") r.push(p);
  }
  return r;
}

const appDir = path.join(__dirname, "src", "app");
const pages = walk(appDir);
let fixed = 0;
let skipped = 0;

for (const file of pages) {
  try {
    let content = fs.readFileSync(file, "utf8");

    // Only process pages that use metadata.title inside the function body
    // AND have the problematic pattern
    if (!content.includes("metadata.title") && !content.includes("metadata.description")) {
      skipped++;
      continue;
    }

    // Check if file has `export const metadata = {` pattern (old-style)
    if (!content.includes("export const metadata = {")) {
      skipped++;
      continue;
    }

    // Extract title value from metadata export
    const titleMatch = content.match(/export const metadata = \{[^}]*title:\s*["']([^"']+)["']/);
    const descMatch = content.match(/export const metadata = \{[^}]*description:\s*["']([^"']+)["']/);

    if (!titleMatch || !descMatch) {
      console.log(`SKIP (no match): ${path.relative(__dirname, file)}`);
      skipped++;
      continue;
    }

    const titleValue = titleMatch[1];
    const descValue = descMatch[1];

    // Check if we already have module-level constants
    if (content.includes("const _pageTitle =") || content.includes("const _pageDesc =")) {
      skipped++;
      continue;
    }

    // Build the module-level constants block
    const constBlock = `const _pageTitle = "${titleValue}";\nconst _pageDesc = "${descValue}";\n\n`;

    // Insert before "export const metadata"
    const metadataIndex = content.indexOf("export const metadata = {");
    if (metadataIndex === -1) {
      skipped++;
      continue;
    }

    // Insert the constants before metadata export
    let newContent = content.slice(0, metadataIndex) + constBlock + content.slice(metadataIndex);

    // Replace metadata.title and metadata.description in the function body
    newContent = newContent.replace(/\bmetadata\.title\b/g, "_pageTitle");
    newContent = newContent.replace(/\bmetadata\.description\b/g, "_pageDesc");

    if (newContent !== content) {
      fs.writeFileSync(file, newContent, "utf8");
      fixed++;
      console.log(`Fixed: ${path.relative(__dirname, file)}`);
    }

  } catch (e) {
    console.error(`Error: ${file} - ${e.message}`);
  }
}

console.log(`\nFixed: ${fixed} files`);
console.log(`Skipped: ${skipped} files`);
