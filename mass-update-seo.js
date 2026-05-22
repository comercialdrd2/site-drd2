const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');

function updatePageTsx(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Inject "Atualizado em Maio de 2026" into the last <section> or just above <NeighborhoodSilo> or at the end of the file
    if (content.includes('<NeighborhoodSilo') && !content.includes('Atualizado em 2026')) {
        content = content.replace(
            '<NeighborhoodSilo', 
            `<div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>\n      <NeighborhoodSilo`
        );
        changed = true;
    } else if (content.includes('<ServiceClusterLinks') && !content.includes('Atualizado em 2026')) {
        content = content.replace(
            '<ServiceClusterLinks', 
            `<div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>\n      <ServiceClusterLinks`
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
    return changed;
}

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            count += scanDir(fullPath);
        } else if (file === 'page.tsx') {
            if (updatePageTsx(fullPath)) count++;
        }
    }
    return count;
}

const updatedCount = scanDir(srcAppDir);
console.log(`Successfully updated ${updatedCount} pages with 'Atualizado em 2026' tag.`);
