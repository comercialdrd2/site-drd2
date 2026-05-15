const fs = require('fs');

const filesToFix = [
  'src/app/avcb-brooklin/escritorios-e-edificios-corporativos/page.tsx',
  'src/app/avcb-campo-belo/condominios-de-alto-padrao/page.tsx',
  'src/app/avcb-itaim-bibi/restaurantes-e-bares/page.tsx',
  'src/app/avcb-pinheiros/bares-e-vida-noturna/page.tsx',
  'src/app/avcb-santo-amaro/galpoes-e-industrias/page.tsx',
  'src/app/avcb-saude/clinicas-e-laboratorios/page.tsx',
  'src/app/avcb-tatuape/comercio-e-servicos/page.tsx',
  'src/app/avcb-vila-mariana/escolas-e-instituicoes-de-ensino/page.tsx',
  'src/app/avcb-vila-olimpia/escritorios-e-startups/page.tsx'
];

filesToFix.forEach(file => {
  if (!fs.existsSync(file)) {
      console.log('File not found: ' + file);
      return;
  }
  let content = fs.readFileSync(file, 'utf8');

  // Insert LeadForm import if missing
  if (!content.includes('import LeadForm')) {
     content = content.replace(/(import { JsonLD, generateMasterSchema } from "@\/components\/JsonLD";)/, "$1\nimport LeadForm from \"@/components/LeadForm\";");
  }

  // Look for `<div className="lg:w-3/5">...` and wrap it and add `<div className="lg:w-2/5">` after it.
  
  if (content.includes('className="lg:w-3/5"') && !content.includes('className="lg:w-2/5"')) {
      content = content.replace(
         /(<div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">\s*)<div className="lg:w-3\/5">([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/,
         `$1<div className="flex flex-col lg:flex-row gap-16 items-center">\n            <div className="lg:w-3/5">$2</div>\n            <div className="lg:w-2/5">\n              <div className="bg-white p-8 rounded-[3.5rem] shadow-4xl relative overflow-hidden text-slate-900 border border-slate-100">\n                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />\n                <h3 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3 italic uppercase text-sm">\n                  Orçamento <span className="text-primary not-italic">Express</span>\n                </h3>\n                <LeadForm variant="compact" />\n              </div>\n            </div>\n          </div>\n        $3`
      );
  }
  
  fs.writeFileSync(file, content);
  console.log('Fixed ' + file);
});
