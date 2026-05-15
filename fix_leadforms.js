const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/page.tsx');
let fixedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;

  const regex = /(\s+)<LeadForm\s*\/>/g;
  content = content.replace(regex, (match, indent) => {
    // If it's indented by 10 or more spaces (or tab combinations that make it large), it's likely in the sidebar
    if (indent.replace(/\t/g, '  ').length >= 10) {
      changed = true;
      return indent + '<LeadForm variant="compact" showWrapper={false} />';
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf-8');
    fixedCount++;
  }
}

console.log('Fixed LeadForm in ' + fixedCount + ' files.');
