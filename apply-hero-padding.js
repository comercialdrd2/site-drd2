const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function updatePage(content, filepath) {
  let newContent = content;

  // Reduce hero paddings to guarantee above-the-fold CTA
  newContent = newContent.replace(/pt-\[120px\]\s+pb-\[80px\]\s+lg:pt-\[160px\]\s+lg:pb-\[100px\]/g, 'pt-[100px] pb-[40px] lg:pt-[120px] lg:pb-[40px]');
  newContent = newContent.replace(/pt-\[120px\]\s+pb-\[80px\]\s+lg:pt-\[140px\]\s+lg:pb-\[80px\]/g, 'pt-[100px] pb-[40px] lg:pt-[120px] lg:pb-[40px]');

  // Remove duplicate pb-[40px] at the end of the class string
  newContent = newContent.replace(/pb-\[40px\]([^"]*)pb-\[40px\]/g, 'pb-[40px]$1');

  // Also reduce mb-8 and mb-10 in Hero to mb-4 to save vertical space
  // We can do this safely in the hero section by finding the section and replacing inside it
  const heroRegex = /<section[^>]*min-h-\[auto\][^>]*>.*?<\/section>/gs;
  newContent = newContent.replace(heroRegex, (hero) => {
    let updatedHero = hero;
    updatedHero = updatedHero.replace(/mb-10/g, 'mb-6');
    updatedHero = updatedHero.replace(/mb-8/g, 'mb-4');
    updatedHero = updatedHero.replace(/py-12/g, 'py-8');
    updatedHero = updatedHero.replace(/mt-8/g, 'mt-4');
    return updatedHero;
  });

  return newContent;
}

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name === 'page.tsx') {
      const original = fs.readFileSync(fullPath, 'utf8');
      const fixed = updatePage(original, fullPath);
      if (fixed !== original) {
        fs.writeFileSync(fullPath, fixed, 'utf8');
        console.log('Updated Hero padding in:', path.relative(appDir, path.dirname(fullPath)));
      }
    }
  }
}

processDir(appDir);
console.log('✅ Hero padding adjustments completed.');
