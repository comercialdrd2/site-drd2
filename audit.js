const fs = require('fs');
const path = require('path');
const dir = './src/app';

function getFiles(dirPath, arrayOfFiles) {
  const dirFiles = fs.readdirSync(dirPath);
  dirFiles.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file === 'page.tsx') {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getFiles(dir, []);
const results = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const titleMatch = content.match(/title:\s*["'](.*?)["']/);
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  
  // Analise técnica (Engenharia de Incêndio e SEO/CRO)
  // Verificando menções ao CBPMESP
  const mentionsIT = content.match(/IT[-\s]?\d{1,2}/g) || [];
  const hasOutdatedDecree = content.includes('63.911') || content.includes('56.819');
  const hasNewDecree = content.includes('69.118');
  
  // Verificando CTA
  const hasLeadForm = content.includes('<LeadForm');
  const hasWhatsapp = content.includes('wa.me') || content.includes('whatsappLink');
  const multipleH1 = content.split('<h1').length > 2;

  const info = {
    file: file.replace(/\\/g, '/'),
    title: titleMatch ? titleMatch[1] : 'Sem Título',
    hasLeadForm,
    hasWhatsapp,
    hasOutdatedDecree,
    hasNewDecree,
    mentionsIT: [...new Set(mentionsIT)],
    multipleH1,
    size: content.length
  };
  results.push(info);
});

fs.writeFileSync('audit_raw.json', JSON.stringify(results, null, 2));
console.log('Arquivos processados: ' + files.length);
