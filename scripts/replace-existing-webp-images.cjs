const fs = require("fs");
const path = require("path");

const root = process.cwd();
const imagesDir = path.join(root, "public", "images");
const scanDirs = [path.join(root, "src")];
const exts = new Set([".tsx", ".ts", ".js", ".jsx"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile() && exts.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function hasWebp(publicImagePath) {
  const webpPublic = publicImagePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const diskPath = path.join(root, "public", webpPublic.replace(/^\//, ""));
  return fs.existsSync(diskPath) ? webpPublic : null;
}

let changedFiles = 0;
let replacements = 0;
const details = [];

for (const file of scanDirs.flatMap((dir) => walk(dir))) {
  let source = fs.readFileSync(file, "utf8");
  const before = source;

  source = source.replace(/\/images\/[^"'`)\s]+\.(?:png|jpg|jpeg)/gi, (match) => {
    const webp = hasWebp(match);
    if (!webp || webp === match) return match;
    replacements += 1;
    details.push(`${path.relative(root, file)}: ${match} -> ${webp}`);
    return webp;
  });

  if (source !== before) {
    fs.writeFileSync(file, source, "utf8");
    changedFiles += 1;
  }
}

console.log(`Updated ${changedFiles} files with ${replacements} image references.`);
for (const line of details.slice(0, 120)) console.log(line);
if (details.length > 120) console.log(`...and ${details.length - 120} more`);
