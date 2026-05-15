const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name === 'page.tsx') {
      const original = fs.readFileSync(fullPath, 'utf8');
      
      // We look for {/* ── CTA INTERMEDIÁRIO ── */} or {/* ── CTA INTERMEDIÁRIO 1 ── */} etc.
      // And the following <div className="...">
      
      let fixed = original.replace(/(\{\/\*\s*──\s*CTA INTERMEDIÁRIO.*?\s*──\s*\*\/\}\s*)<div className="([^"]*)"/g, (match, comment, classes) => {
        let newClasses = classes;
        
        // Remove old backgrounds and borders
        newClasses = newClasses.replace(/bg-slate-950/g, '');
        newClasses = newClasses.replace(/bg-white/g, '');
        newClasses = newClasses.replace(/bg-slate-50/g, '');
        newClasses = newClasses.replace(/border-slate-800/g, '');
        newClasses = newClasses.replace(/border-slate-200/g, '');
        newClasses = newClasses.replace(/border-slate-100/g, '');
        
        // Add new background and border
        newClasses = newClasses + " bg-[#7F1D1D] border-red-900";
        
        // Clean up double spaces
        newClasses = newClasses.replace(/\s+/g, ' ').trim();
        
        return `${comment}<div className="${newClasses}"`;
      });
      
      // Also some text inside the CTA wrapper might be dark. The user said "texto branco"
      // If it's a <p className="text-slate-900 ..."> change to text-white
      if (fixed !== original) {
        // Because we replaced the background to dark red, any text-slate-900 or text-slate-800 inside the CTA wrapper needs to be text-white
        // A quick hack: just replace text-slate-900 with text-white near CTA INTERMEDIÁRIO
        const ctaSections = fixed.split(/(?=\{\/\*\s*──\s*CTA INTERMEDIÁRIO)/);
        let finalContent = ctaSections[0];
        
        for (let i = 1; i < ctaSections.length; i++) {
          let section = ctaSections[i];
          // Replace text-slate-900 -> text-white inside this section block until the next </section> or </div> </div>
          // Actually, just replace text-slate-900 with text-white in the first 1500 chars
          let topPart = section.substring(0, 1500).replace(/text-slate-900/g, 'text-white').replace(/text-slate-800/g, 'text-white');
          finalContent += topPart + section.substring(1500);
        }
        
        fixed = finalContent;
        
        fs.writeFileSync(fullPath, fixed, 'utf8');
        console.log('Updated Intermediate CTA in:', path.relative(appDir, path.dirname(fullPath)));
      }
    }
  }
}

processDir(appDir);
console.log('✅ Intermediate CTA backgrounds updated to #7F1D1D globally.');
