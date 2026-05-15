const fs = require('fs');
const path = require('path');

const srcDir = './src/app';
const dirs = fs.readdirSync(srcDir, {withFileTypes: true})
  .filter(d => d.isDirectory() && d.name.startsWith('avcb-'))
  .map(d => d.name);

let count = 0;

for (const dir of dirs) {
  const pageFile = path.join(srcDir, dir, 'page.tsx');
  if (!fs.existsSync(pageFile)) continue;
  
  let content = fs.readFileSync(pageFile, 'utf8');

  // Insert Import if absent
  if (!content.includes('import NeighborhoodSilo')) {
      content = content.replace(/(import LeadForm from "@\/components\/LeadForm";)/, "$1\nimport NeighborhoodSilo from \"@/components/NeighborhoodSilo\";");
      // Fallback if LeadForm import doesn't exist
      if (!content.includes('import NeighborhoodSilo')) {
         content = content.replace(/(import { JsonLD.*? } from "@\/components\/JsonLD";)/, "$1\nimport NeighborhoodSilo from \"@/components/NeighborhoodSilo\";");
      }
  }

  // Regex to match the old div block containing manual links
  // <div className="mt-12 pt-12 border-t border-slate-200 flex flex-wrap justify-center gap-8"> ... </div>
  const regex = /<div className="mt-12 pt-12 border-t border-slate-200 flex flex-wrap justify-center gap-[4-8]">[\s\S]*?(<\/div>)/g;
  
  if (regex.test(content)) {
      content = content.replace(regex, `<NeighborhoodSilo currentSlug="/${dir}" />`);
  } else {
     // Some pages might not have it exactly matching. We'll fallback if we can't find it.
  }

  fs.writeFileSync(pageFile, content);
  count++;
}

console.log(`Silos injetados e importados em ${count} páginas.`);
