const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) results = results.concat(walk(full));
    else if (f === "page.tsx") results.push(full);
  }
  return results;
}

const pages = walk(path.join(__dirname, "src", "app"));
let fixed = 0;

for (const file of pages) {
  let content;
  try { content = fs.readFileSync(file, "utf8"); } catch { continue; }

  // Fix duplicate LeadForm imports
  const importLine = `import LeadForm from "@/components/LeadForm";`;
  const count = (content.split(importLine)).length - 1;
  if (count > 1) {
    // Remove all occurrences then add one at start of imports
    const cleaned = content.replace(new RegExp(importLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\n", "g"), "");
    // Find first import line and insert after it
    const firstImport = cleaned.indexOf("import ");
    const newline = cleaned.indexOf("\n", firstImport);
    const result = cleaned.slice(0, newline + 1) + importLine + "\n" + cleaned.slice(newline + 1);
    fs.writeFileSync(file, result, "utf8");
    fixed++;
    console.log(`Fixed duplicate LeadForm: ${path.relative(__dirname, file)}`);
  }
}

console.log(`\nTotal fixed: ${fixed}`);
