const fs = require('fs');
const path = require('path');

const replacements = [
  { old: '/avcb-para-farmacia-sao-paulo', new: '/avcb-farmacia-drogaria-sao-paulo' },
  { old: '/avcb-para-drogaria-sao-paulo', new: '/avcb-farmacia-drogaria-sao-paulo' },
  { old: '/avcb-para-boate-sao-paulo', new: '/avcb-casas-noturnas-boates-sao-paulo' },
  { old: '/avcb-para-casa-noturna-sao-paulo', new: '/avcb-casas-noturnas-boates-sao-paulo' },
  { old: '/avcb-para-bar-com-show-sao-paulo', new: '/avcb-casas-noturnas-boates-sao-paulo' },
  { old: '/avcb-para-clinica-odontologica-sao-paulo', new: '/avcb-consultorios-medicos-odontologicos-sao-paulo' },
  { old: '/avcb-bar-adega-sao-paulo', new: '/avcb-bares-restaurantes-sao-paulo' },
  { old: '/avcb-hotel-sao-paulo', new: '/avcb-hoteis-pousadas-sao-paulo' },
  
  // also without slash for page.tsx references
  { old: '"avcb-hotel-sao-paulo"', new: '"avcb-hoteis-pousadas-sao-paulo"' },
  { old: '"avcb-para-clinica-odontologica-sao-paulo"', new: '"avcb-consultorios-medicos-odontologicos-sao-paulo"' },
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      // Use global regex to replace all occurrences
      content = content.split(r.old).join(r.new);
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated links in ${filePath}`);
    }
  }
});
