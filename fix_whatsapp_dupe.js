const fs = require('fs');
const path = require('path');

let fixed = 0;

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f === 'page.tsx') {
      let c = fs.readFileSync(full, 'utf8');
      if (c.includes('WhatsAppFloatingButton')) {
        c = c.replace(/import WhatsAppFloatingButton from ['"@][^'"]+['"];\n/g, '');
        c = c.replace(/\s*<WhatsAppFloatingButton \/>/g, '');
        fs.writeFileSync(full, c, 'utf8');
        console.log('Fixed:', full.replace(process.cwd() + '\\', ''));
        fixed++;
      }
    }
  });
}

walk('src/app');
console.log(`\nTotal pages fixed: ${fixed}`);
