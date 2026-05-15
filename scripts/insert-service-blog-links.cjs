const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "src");
const targets = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (entry.isFile() && fullPath.endsWith(".tsx")) {
      targets.push(fullPath);
    }
  }
}

walk(root);

let changed = 0;
let insertedBlocks = 0;

for (const file of targets) {
  if (file.endsWith(`${path.sep}ServiceClusterLinks.tsx`) || file.endsWith(`${path.sep}ServiceBlogLinks.tsx`)) {
    continue;
  }

  let source = fs.readFileSync(file, "utf8");
  if (!source.includes("<ServiceClusterLinks")) continue;

  let next = source;

  if (!next.includes('ServiceBlogLinks from "@/components/ServiceBlogLinks"')) {
    if (next.includes('ServiceClusterLinks from "@/components/ServiceClusterLinks"')) {
      next = next.replace(
        /import ServiceClusterLinks from "@\/components\/ServiceClusterLinks";\r?\n/,
        (match) => `${match}import ServiceBlogLinks from "@/components/ServiceBlogLinks";\n`
      );
    } else {
      continue;
    }
  }

  next = next.replace(
    /(<ServiceClusterLinks\s+currentSlug=({[^}]+}|"[^"]+")\s*\/>)(?!\s*<ServiceBlogLinks)/g,
    (_, component, currentSlug) => {
      insertedBlocks += 1;
      return `${component}\n      <ServiceBlogLinks currentSlug=${currentSlug} />`;
    }
  );

  if (next !== source) {
    fs.writeFileSync(file, next, "utf8");
    changed += 1;
  }
}

console.log(`Updated ${changed} files and inserted ${insertedBlocks} ServiceBlogLinks blocks.`);
