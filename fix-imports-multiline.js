/**
 * Fix: Split long single-line lucide-react imports into multi-line format.
 * Theory: SWC in Next.js 14.2.4 has issues parsing very long import lines
 * (>200 chars) in combination with certain TSX patterns.
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
const THRESHOLD = 150;

for (const file of pages) {
  try {
    let content = fs.readFileSync(file, "utf8");
    const lines = content.split("\n");
    let changed = false;

    const newLines = lines.map((line) => {
      // Find long lucide-react import lines
      if (
        line.length > THRESHOLD &&
        line.includes("lucide-react") &&
        line.match(/^import\s*\{/)
      ) {
        // Extract the imports
        const match = line.match(/^import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/);
        if (!match) return line;

        const imports = match[1]
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

        // Group into lines of max 5 imports
        const chunkSize = 5;
        const chunks = [];
        for (let i = 0; i < imports.length; i += chunkSize) {
          chunks.push(imports.slice(i, i + chunkSize));
        }

        changed = true;
        if (chunks.length === 1) {
          return `import { ${chunks[0].join(", ")} } from "lucide-react";`;
        }
        
        const importLines = chunks.map((chunk, i) => {
          if (i === 0) return `import {\n  ${chunk.join(", ")},`;
          if (i === chunks.length - 1) return `  ${chunk.join(", ")},\n} from "lucide-react";`;
          return `  ${chunk.join(", ")},`;
        });
        return importLines.join("\n");
      }
      return line;
    });

    if (changed) {
      fs.writeFileSync(file, newLines.join("\n"), "utf8");
      fixed++;
      console.log(`Fixed import: ${path.relative(__dirname, file)}`);
    }

  } catch (e) {
    console.error(`Error: ${file} - ${e.message}`);
  }
}

console.log(`\nFixed: ${fixed} files`);
console.log(`Skipped: ${skipped} files`);
