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

const files = walk(path.join(__dirname, "src", "app"));
let n = 0;

for (const f of files) {
  try {
    let c = fs.readFileSync(f, "utf8");
    const orig = c;
    // Replace smart/curly quotes with straight quotes
    c = c.replace(/\u201c/g, '"').replace(/\u201d/g, '"');
    c = c.replace(/\u2018/g, "'").replace(/\u2019/g, "'");
    if (c !== orig) {
      fs.writeFileSync(f, c, "utf8");
      n++;
      console.log("Fixed: " + path.relative(__dirname, f));
    }
  } catch {}
}

console.log("Total files fixed: " + n);
