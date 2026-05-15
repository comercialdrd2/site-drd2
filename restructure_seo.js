const fs = require('fs');
const path = require('path');

const renames = [
  {
    oldDir: 'avcb-para-farmacia-sao-paulo',
    newDir: 'avcb-farmacia-drogaria-sao-paulo',
    oldSlug: 'avcb-para-farmacia-sao-paulo',
    newSlug: 'avcb-farmacia-drogaria-sao-paulo',
    newTitle: 'AVCB para Farmácias e Drogarias em São Paulo',
    toDelete: ['avcb-para-drogaria-sao-paulo']
  },
  {
    oldDir: 'avcb-para-boate-sao-paulo',
    newDir: 'avcb-casas-noturnas-boates-sao-paulo',
    oldSlug: 'avcb-para-boate-sao-paulo',
    newSlug: 'avcb-casas-noturnas-boates-sao-paulo',
    newTitle: 'AVCB para Casas Noturnas, Boates e Bares em São Paulo',
    toDelete: ['avcb-para-casa-noturna-sao-paulo', 'avcb-para-bar-com-show-sao-paulo']
  },
  {
    oldDir: 'avcb-para-clinica-odontologica-sao-paulo',
    newDir: 'avcb-consultorios-medicos-odontologicos-sao-paulo',
    oldSlug: 'avcb-para-clinica-odontologica-sao-paulo',
    newSlug: 'avcb-consultorios-medicos-odontologicos-sao-paulo',
    newTitle: 'AVCB para Consultórios Médicos e Odontológicos em São Paulo',
    toDelete: []
  },
  {
    oldDir: 'avcb-bar-adega-sao-paulo',
    newDir: 'avcb-bares-restaurantes-sao-paulo',
    oldSlug: 'avcb-bar-adega-sao-paulo',
    newSlug: 'avcb-bares-restaurantes-sao-paulo',
    newTitle: 'AVCB para Bares e Restaurantes em São Paulo',
    toDelete: []
  },
  {
    oldDir: 'avcb-hotel-sao-paulo',
    newDir: 'avcb-hoteis-pousadas-sao-paulo',
    oldSlug: 'avcb-hotel-sao-paulo',
    newSlug: 'avcb-hoteis-pousadas-sao-paulo',
    newTitle: 'AVCB para Hotéis e Pousadas em São Paulo',
    toDelete: []
  }
];

const appDir = path.join(__dirname, 'src/app');

renames.forEach(r => {
  const oldPath = path.join(appDir, r.oldDir);
  const newPath = path.join(appDir, r.newDir);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${r.oldDir} to ${r.newDir}`);
    
    // Update page.tsx inside the new dir
    const pageTsx = path.join(newPath, 'page.tsx');
    if (fs.existsSync(pageTsx)) {
      let content = fs.readFileSync(pageTsx, 'utf8');
      // replace slug references
      content = content.replace(new RegExp(r.oldSlug, 'g'), r.newSlug);
      // Try to replace the hardcoded H1 if it exists
      content = content.replace(/(<span className="text-red-600[^>]*>\s*)(.*?)(<\/span>)/s, (m, p1, p2, p3) => {
         // This might break if it's not the H1, but usually H1 has text-red-600 block drop-shadow
         if (p2.includes("FARMÁCIA") || p2.includes("BOATE") || p2.includes("CLÍNICA") || p2.includes("BAR") || p2.includes("HOTEL")) {
            const shortName = r.newTitle.replace('AVCB para ', '').replace(' em São Paulo', '').toUpperCase();
            return `${p1}${shortName}${p3}`;
         }
         return m;
      });
      fs.writeFileSync(pageTsx, content, 'utf8');
    }
  }

  r.toDelete.forEach(del => {
    const delPath = path.join(appDir, del);
    if (fs.existsSync(delPath)) {
      fs.rmSync(delPath, { recursive: true, force: true });
      console.log(`Deleted ${del}`);
    }
  });
});

// Rename avcb-hotel-sao-paulo.ts in src/data/pages
const pagesDir = path.join(__dirname, 'src/data/pages');
if (fs.existsSync(path.join(pagesDir, 'avcb-hotel-sao-paulo.ts'))) {
  let pContent = fs.readFileSync(path.join(pagesDir, 'avcb-hotel-sao-paulo.ts'), 'utf8');
  pContent = pContent.replace(/avcb-hotel-sao-paulo/g, 'avcb-hoteis-pousadas-sao-paulo');
  pContent = pContent.replace(/AVCB para Hotel em São Paulo/g, 'AVCB para Hotéis e Pousadas em São Paulo');
  pContent = pContent.replace(/AVCB PARA HOTÉIS — TRANQUILIDADE PARA SEUS HÓSPEDES/g, 'AVCB PARA HOTÉIS E POUSADAS — TRANQUILIDADE PARA SEUS HÓSPEDES');
  fs.writeFileSync(path.join(pagesDir, 'avcb-hoteis-pousadas-sao-paulo.ts'), pContent, 'utf8');
  fs.unlinkSync(path.join(pagesDir, 'avcb-hotel-sao-paulo.ts'));
  console.log(`Renamed data file avcb-hotel-sao-paulo.ts`);
}

// Update services.ts
const servicesTs = path.join(__dirname, 'src/data/services.ts');
if (fs.existsSync(servicesTs)) {
  let content = fs.readFileSync(servicesTs, 'utf8');
  renames.forEach(r => {
    content = content.replace(new RegExp(`"${r.oldSlug}": {`, 'g'), `"${r.newSlug}": {`);
    content = content.replace(new RegExp(`slug: "${r.oldSlug}"`, 'g'), `slug: "${r.newSlug}"`);
    // Find the metaTitle and replace it
    // This uses a simple regex that might need to be more robust, but assuming the block is close
    const titleRegex = new RegExp(`("${r.newSlug}"[\\s\\S]*?metaTitle:\\s*")([^"]+)(")`, 'g');
    content = content.replace(titleRegex, `$1${r.newTitle}$3`);
  });
  fs.writeFileSync(servicesTs, content, 'utf8');
  console.log('Updated services.ts');
}
