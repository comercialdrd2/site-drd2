const fs = require("fs");
const path = require("path");

const root = process.cwd();
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    if (entry.isFile() && /\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
}

walk(path.join(root, "src"));

let changedFiles = 0;
let replacements = 0;

for (const file of files) {
  let source = fs.readFileSync(file, "utf8");
  const before = source;
  source = source.replace(/quality=\{80\}/g, () => {
    replacements += 1;
    return "quality={65}";
  });

  if (source !== before) {
    fs.writeFileSync(file, source, "utf8");
    changedFiles += 1;
  }
}

console.log(`Updated ${changedFiles} files and lowered ${replacements} quality props from 80 to 65.`);
