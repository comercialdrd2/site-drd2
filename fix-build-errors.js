const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "src", "app");

// 1. Remove invalid sub-directories inside bairro/zona folders
const bairroDirs = fs.readdirSync(appDir).filter(d => {
  const full = path.join(appDir, d);
  return fs.statSync(full).isDirectory() && (d.startsWith("avcb-") || d.startsWith("renovacao-"));
});

let removed = 0;
for (const bairro of bairroDirs) {
  const bairroPath = path.join(appDir, bairro);
  const subs = fs.readdirSync(bairroPath).filter(s => {
    const sp = path.join(bairroPath, s);
    return fs.statSync(sp).isDirectory();
  });
  for (const sub of subs) {
    const subPath = path.join(bairroPath, sub);
    fs.rmSync(subPath, { recursive: true, force: true });
    console.log(`Removed sub-page: ${bairro}/${sub}`);
    removed++;
  }
}

// 2. Fix "lg: flex" typo -> "lg:flex" in all page.tsx files
let fixed = 0;
function walkPages(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkPages(full);
    else if (f === "page.tsx") {
      let c = fs.readFileSync(full, "utf8");
      if (c.includes("lg: flex") || c.includes("lg: pt-")) {
        c = c.replace(/lg: flex/g, "lg:flex").replace(/lg: pt-/g, "lg:pt-");
        fs.writeFileSync(full, c, "utf8");
        console.log(`Fixed className typo: ${path.relative(__dirname, full)}`);
        fixed++;
      }
    }
  }
}
walkPages(appDir);

console.log(`\nSub-pages removed: ${removed}`);
console.log(`className typos fixed: ${fixed}`);
