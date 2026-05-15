const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function updatePage(content, filepath) {
  let newContent = content;

  // 1. All CTAs to Green
  // Find <a href={whatsappLink} ... className="..."> and replace bg-red-600 with bg-[#25D366]
  newContent = newContent.replace(/className="([^"]*whatsappLink[^"]*|[^"]*WhatsApp[^"]*)"/gi, (match, classes) => {
    // wait, className comes after or before href
    return match;
  });

  // A safer regex for any <a> tag that looks like a CTA (contains bg-red-600, or text-red-900 with bg-white)
  // that points to whatsappLink
  const aTagRegex = /<a\s+[^>]*>.*?<\/a>/gs;
  newContent = newContent.replace(aTagRegex, (aTag) => {
    if (aTag.includes('whatsappLink') || aTag.includes('wa.me')) {
      let updatedTag = aTag;
      // Change red backgrounds to green
      updatedTag = updatedTag.replace(/bg-red-600/g, 'bg-[#25D366]');
      updatedTag = updatedTag.replace(/bg-red-700/g, 'bg-[#1EBE5A]');
      updatedTag = updatedTag.replace(/hover:bg-red-700/g, 'hover:bg-[#1EBE5A]');
      updatedTag = updatedTag.replace(/border-red-600/g, 'border-[#25D366]');
      updatedTag = updatedTag.replace(/hover:text-red-600/g, 'hover:text-[#25D366]');
      updatedTag = updatedTag.replace(/hover:bg-white/g, 'hover:bg-[#1EBE5A] hover:text-white');
      
      // Also for the final CTA which is bg-white text-red-900 border-2 border-white
      if (updatedTag.includes('bg-white') && updatedTag.includes('text-red-900')) {
        updatedTag = updatedTag.replace(/text-red-900/g, 'text-white');
        updatedTag = updatedTag.replace(/bg-white/g, 'bg-[#25D366]');
      }

      return updatedTag;
    }
    return aTag;
  });

  // 2. Adjust Hero Section Heights
  // Find section with min-h-[100vh], min-h-[90vh], min-h-screen
  newContent = newContent.replace(/min-h-\[100vh\]|min-h-\[90vh\]|min-h-screen/g, 'min-h-[auto] pt-[120px] pb-[80px] lg:pt-[160px] lg:pb-[100px]');
  
  // Clean up any remaining pt-20, pt-[80px], pb-[40px] in the hero section to avoid double padding
  // Usually they are in the same className string
  newContent = newContent.replace(/(min-h-\[auto\][^"]*?)(pt-20|pt-\[80px\]|pb-\[40px\]|py-12)/g, '$1');

  // 3. Adjust H1 Font Sizes
  // We don't want to change ALL text-5xl, only those inside H1
  const h1Regex = /<h1[^>]*>.*?<\/h1>/gs;
  newContent = newContent.replace(h1Regex, (h1) => {
    let updatedH1 = h1;
    updatedH1 = updatedH1.replace(/lg:text-7xl/g, 'lg:text-5xl');
    updatedH1 = updatedH1.replace(/lg:text-6xl/g, 'lg:text-5xl');
    updatedH1 = updatedH1.replace(/md:text-5xl/g, 'md:text-4xl');
    updatedH1 = updatedH1.replace(/text-4xl md:text-4xl/g, 'text-3xl md:text-4xl'); // prevent weirdness
    updatedH1 = updatedH1.replace(/text-4xl/g, 'text-3xl');
    return updatedH1;
  });

  // 4. Specific Page Texts
  const dirName = path.basename(path.dirname(filepath));
  if (dirName === 'avcb-condominio-sao-paulo') {
    newContent = newContent.replace(/Falar com Engenheiro de Condomínios/g, 'QUERO REGULARIZAR MEU CONDOMÍNIO');
    newContent = newContent.replace(/Falar com Síndico|Falar com Engenheiro/g, 'FALAR COM ESPECIALISTA EM CONDOMÍNIO'); // fallback
    // ensure the primary CTA gets the right text
  } else if (dirName === 'avcb-hospital-clinica-sao-paulo') {
    newContent = newContent.replace(/Falar com Engenheiro Especialista/gi, 'QUERO REGULARIZAR MINHA CLÍNICA');
    newContent = newContent.replace(/Falar com Engenheiro/gi, 'FALAR COM ENGENHEIRO RESPONSÁVEL');
  } else if (dirName === 'avcb-para-academia-sao-paulo') {
    // just the global changes are enough
  }

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
        console.log('Updated:', path.relative(appDir, path.dirname(fullPath)));
      }
    }
  }
}

processDir(appDir);
console.log('✅ Global layout and CTA adjustments completed.');
