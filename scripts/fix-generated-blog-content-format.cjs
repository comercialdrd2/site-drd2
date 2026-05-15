const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), "src", "data", "blog.ts");
let source = fs.readFileSync(file, "utf8");

source = source.replace(/content: "\r?\n([\s\S]*?)\r?\n    ",/g, (_, body) => {
  const normalized = body.replace(/\\"/g, '"').replace(/`/g, "\\`");
  return `content: \`\n${normalized}\n    \`,`;
});

fs.writeFileSync(file, source, "utf8");
console.log("Fixed generated blog content formatting.");
