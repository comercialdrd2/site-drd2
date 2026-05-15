// Fix: replace broken garbled sequences that fix-quotes.js introduced
// The em dash (—) was garbled as â€" where the last char U+201D was
// replaced by fix-quotes.js with straight " (U+0022), breaking strings.
const fs = require("fs");
const path = require("path");

function walk(d) {
  let r = [];
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) r = r.concat(walk(p));
    else if (f.endsWith(".tsx") || f.endsWith(".ts")) r.push(p);
  }
  return r;
}

const files = walk(path.join(__dirname, "src"));
let fixed = 0;

for (const file of files) {
  try {
    let c = fs.readFileSync(file, "utf8");
    const orig = c;

    // â€" = garbled em dash — the " at end was U+201D now is U+0022
    // Replace â€" (U+00E2 + U+20AC + U+0022) → — (em dash)
    c = c.replace(/\u00e2\u20ac"/g, "\u2014"); // em dash
    // Replace â€™ (U+00E2 + U+20AC + U+0027) → ' (apostrophe ok)
    // Actually keep as apostrophe - it's fine in double-quoted strings
    // But fix â€˜ and â€™ in general to be safe
    c = c.replace(/\u00e2\u20ac'/g, "\u2019"); // right single quote (apostrophe)
    // Also handle â€˜ (left single quote) if present
    // Other garbled sequences
    c = c.replace(/\u00e2\u20ac\u201c/g, "\u201c"); // left double quote
    c = c.replace(/\u00e2\u20ac\u201d/g, "\u201d"); // right double quote

    if (c !== orig) {
      fs.writeFileSync(file, c, "utf8");
      fixed++;
      console.log("Fixed: " + path.relative(__dirname, file));
    }
  } catch (e) {
    console.error("Error: " + file, e.message);
  }
}
console.log("\nTotal fixed:", fixed);
