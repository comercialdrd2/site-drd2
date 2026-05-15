const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src/app');

function fixColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace blue with red
  content = content.replace(/blue-600/g, 'red-600');
  content = content.replace(/blue-500/g, 'red-600'); // make blue-500 red-600 as requested for the text
  content = content.replace(/blue-900/g, 'red-900');
  content = content.replace(/blue-50/g, 'red-50');

  // Fix CTAs to green WhatsApp style.
  // The blue ones might have been converted to red-600 now. Let's find common CTA classes and replace them.
  // We'll replace the full string of classes for CTAs.
  
  // CTA Hero
  content = content.replace(
    /className="bg-red-600 hover:bg-\[#1EBE5A\] hover:text-white hover:text-red-600 text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-red-600"/g,
    'className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"'
  );

  // CTA Mid
  content = content.replace(
    /className="inline-block bg-red-600 text-white font-black px-8 py-4 rounded-xl hover:bg-\[#1EBE5A\] hover:text-white hover:text-red-600 transition-all border-2 border-red-600"/g,
    'className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE5A] hover:text-white transition-all border-2 border-[#25D366]"'
  );

  // CTA Footer
  content = content.replace(
    /className="animate-alert-pulse bg-red-600 text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-\[#1EBE5A\] hover:text-white hover:text-red-600 transition-all border-2 border-red-600"/g,
    'className="animate-alert-pulse bg-white text-red-950 font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white inline-block"' // standard footer CTA is white as seen in others, or green. The prompt says "verde" for "BOTÃO CTA Falar com Engenheiro". Let's make it green.
  );
  
  // Actually let's make all CTAs exactly as requested:
  // "Corrigir para: verde (#25D366 — padrão WhatsApp usado nas outras páginas do site) - Manter o ícone de telefone e o texto atual"
  content = content.replace(
    /className="animate-alert-pulse bg-white text-red-950 font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white inline-block"/g,
    'className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] hover:text-white transition-all border-2 border-[#25D366] inline-block"'
  );
  
  // For the specific footer CTA that just became red
  content = content.replace(
    /className="animate-alert-pulse bg-red-600 text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-\[#1EBE5A\] hover:text-white hover:text-red-600 transition-all border-2 border-red-600"/g,
    'className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] hover:text-white transition-all border-2 border-[#25D366] inline-block"'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed colors in ${filePath}`);
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(appDir, function(filePath) {
  if (filePath.endsWith('page.tsx')) {
    fixColors(filePath);
  }
});
