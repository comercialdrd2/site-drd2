const fs = require("fs");
const path = require("path");

const bad = [];
const accented = /[áàãâéêíóôõúçÁÀÃÂÉÊÍÓÔÕÚÇ]/;
const quoted = /["'`]([^"'`]*\/[^"'`]*)["'`]/g;

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file);
    else if (/\.(ts|tsx|json)$/.test(file)) {
      const source = fs.readFileSync(file, "utf8");
      let match;
      while ((match = quoted.exec(source))) {
        if (accented.test(match[1])) bad.push(`${file}: ${match[1]}`);
      }
    }
  }
}

walk(path.join(process.cwd(), "src"));
console.log(bad.slice(0, 250).join("\n"));
console.log(`TOTAL=${bad.length}`);
