const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Only target pages that have a Hero section
      if (content.includes('{/* ── HERO ── */}') || content.includes('{/* ── HERO — VERSÃO 10/10 MASTER ── */}')) {
        
        // 1. Hero section paddings
        // from: pt-[100px] pb-[40px] lg:pt-[120px] lg:pb-[60px]
        // or pt-[100px] lg:pt-[120px]
        content = content.replace(/pt-\[100px\]/g, 'pt-[85px]');
        content = content.replace(/lg:pt-\[120px\]/g, 'lg:pt-[95px]');
        content = content.replace(/lg:pb-\[60px\]/g, 'lg:pb-[30px]');
        content = content.replace(/pb-\[40px\]/g, 'pb-[20px]');
        
        // 2. Badge margin
        // from: tracking-widest mb-6 shadow-lg
        content = content.replace(/tracking-widest mb-6 shadow-lg/g, 'tracking-widest mb-3 shadow-lg');

        // 3. H1 margin and size
        // from: font-black mb-4 leading-[0.9]
        // or mb-6
        content = content.replace(/font-black mb-4 leading-\[0.9\]/g, 'font-black mb-2 leading-[0.9]');
        content = content.replace(/font-black mb-6 leading-\[1.1\]/g, 'font-black mb-2 leading-[1.1]');
        content = content.replace(/font-black mb-6 leading-\[0.9\]/g, 'font-black mb-2 leading-[0.9]');
        // lg:text-5xl -> lg:text-4xl (to save vertical space)
        content = content.replace(/lg:text-5xl/g, 'lg:text-4xl');

        // 4. Intro paragraph size and margin
        // from: text-xl md:text-2xl text-gray-200 mb-6
        // or text-lg md:text-xl text-gray-200 mb-4
        content = content.replace(/text-xl md:text-2xl text-gray-200 mb-6/g, 'text-base md:text-lg lg:text-xl text-gray-200 mb-4');
        content = content.replace(/text-lg md:text-xl text-gray-200 mb-4/g, 'text-base md:text-lg lg:text-xl text-gray-200 mb-4');
        content = content.replace(/text-lg md:text-xl text-gray-200 mb-6/g, 'text-base md:text-lg lg:text-xl text-gray-200 mb-4');

        // 5. Button size
        // from: px-10 py-5 rounded-2xl text-xl
        content = content.replace(/px-10 py-5 rounded-2xl text-xl/g, 'px-8 py-3 rounded-2xl text-lg');
        content = content.replace(/px-12 py-6 rounded-2xl text-2xl/g, 'px-8 py-4 rounded-2xl text-xl');

        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Optimized spacing in: ${fullPath}`);
      }
    }
  }
}

processDir(appDir);
console.log("Done shrinking Hero sections!");
