const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/page.tsx');
let data = [];

for(const file of files) {
  // ignore non-commercial pages
  if (file.includes('__test__') || file.includes('[slug]') || file.includes('blog') || file.includes('contato') || file.includes('obrigado') || file.includes('mapa-paginas') || file.includes('politica-de-privacidade')) continue;

  const content = fs.readFileSync(file, 'utf-8');
  
  // Extract H1
  let h1 = null;
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    // Strip inner tags
    h1 = h1Match[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // Extract first Image
  let img_src = null;
  let img_alt = null;
  const sectionMatch = content.match(/<section[^>]*>([\s\S]*?)<\/section>/i);
  if (sectionMatch) {
    const imgMatch = sectionMatch[1].match(/<Image\s+([\s\S]+?)\/?>/i);
    if (imgMatch) {
      const attrs = imgMatch[1];
      const srcMatch = attrs.match(/src\s*=\s*(?:\{['"]|['"])(.*?)(?:['"]\}|['"])/i);
      const altMatch = attrs.match(/alt\s*=\s*(?:\{['"]|['"])(.*?)(?:['"]\}|['"])/i);
      if (srcMatch) img_src = srcMatch[1];
      if (altMatch) img_alt = altMatch[1];
    }
  }

  data.push({ file, h1, img_src, img_alt });
}

fs.writeFileSync('hero_analysis.json', JSON.stringify(data, null, 2));
console.log('Analysis saved to hero_analysis.json');
