const fs = require('fs');
const path = require('path');

function replaceFileContent(filePath, rules) {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;
  
  for (const rule of rules) {
    content = content.replace(rule.find, rule.replace);
  }
  
  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

// 1. Padaria
replaceFileContent('src/app/avcb-para-padaria-sao-paulo/page.tsx', [
  { find: 'mb-6 leading-[0.9]', replace: 'mb-4 lg:mb-5 leading-[0.9]' },
  { find: 'mb-3 leading-relaxed', replace: 'mb-2 lg:mb-3 leading-relaxed' },
  { find: 'mb-5 leading-relaxed', replace: 'mb-3 lg:mb-5 leading-relaxed' }
]);

// 2. Farmacia
replaceFileContent('src/app/avcb-farmacia-drogaria-sao-paulo/page.tsx', [
  { find: 'mb-6 leading-[0.9]', replace: 'mb-4 lg:mb-5 leading-[0.9]' },
  { find: 'mb-3 leading-relaxed', replace: 'mb-2 lg:mb-3 leading-relaxed' },
  { find: 'mb-5 leading-relaxed', replace: 'mb-3 lg:mb-5 leading-relaxed' }
]);

// 3. Supermercado (This page is a bit different)
replaceFileContent('src/app/avcb-supermercado-sao-paulo/page.tsx', [
  { find: 'mb-3 shadow-lg', replace: 'mb-2 lg:mb-3 shadow-lg' },
  { find: 'mb-8 leading-[0.9]', replace: 'mb-4 lg:mb-6 leading-[0.9]' },
  { find: 'mt-2 block', replace: 'mt-1 lg:mt-2 block' },
  { find: 'mb-10 leading-relaxed', replace: 'mb-5 lg:mb-8 leading-relaxed' }
]);

// 4. AVCB Sao Paulo (Main)
replaceFileContent('src/app/avcb-sao-paulo/page.tsx', [
  { find: 'mb-8 leading-relaxed', replace: 'mb-4 lg:mb-6 leading-relaxed' }, // First paragraph
  { find: 'mb-8 leading-relaxed', replace: 'mb-4 lg:mb-6 leading-relaxed' }, // Will replace the next one if it matches
  // Replace globally if needed
]);

// Fix the globally replaced for AVCB Sao Paulo if it only did one
let avcbMain = fs.readFileSync(path.join(__dirname, 'src/app/avcb-sao-paulo/page.tsx'), 'utf8');
avcbMain = avcbMain.replace(/mb-8 leading-relaxed/g, 'mb-4 lg:mb-6 leading-relaxed');
fs.writeFileSync(path.join(__dirname, 'src/app/avcb-sao-paulo/page.tsx'), avcbMain, 'utf8');

console.log('Fixes applied.');
