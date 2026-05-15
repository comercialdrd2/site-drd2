/**
 * fix-orphan-divs.js
 * Corrige divs órfãs e fechamentos de fragmento quebrados deixados 
 * pelo fix-hero-css.js nas páginas de 2 colunas.
 */
const fs = require("fs");
const path = require("path");

const PAGES = [
  "avcb-casa-verde",
  "avcb-jacana",
  "avcb-lapa",
  "avcb-limao",
  "avcb-tucuruvi",
  "avcb-santana",
  "avcb-perdizes",
  "avcb-vila-prudente",
  "avcb-vila-leopoldina",
  "avcb-vila-madalena",
];

let fixed = 0;

for (const dir of PAGES) {
  const filePath = path.join("src", "app", dir, "page.tsx");
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  // 1. Remover div orphã com LeadForm compact dentro do hero
  //    Padrão: <div className="lg:w-..."> ... <LeadForm variant="compact" /> ... </div>
  const orphanLeadForm = /\s*<div className="lg:w-[^"]*">\s*[\s\S]*?<LeadForm variant="compact" \/>\s*[\s\S]*?<\/div>\s*<\/div>/;
  if (orphanLeadForm.test(content)) {
    content = content.replace(orphanLeadForm, "\n          </div>");
    changed = true;
  }

  // 2. Remover div orphã SEM LeadForm (só lg:w-2/5 ou similar sobrando)
  const orphanDiv = /\s*<div className="lg:w-[^"]*">\s*<\/div>/g;
  if (orphanDiv.test(content)) {
    content = content.replace(/\s*<div className="lg:w-[^"]*">\s*<\/div>/g, "");
    changed = true;
  }

  // 3. Corrigir fragmento de fechamento quebrado: </> no lugar errado
  //    Padrão: </>\n  );\n} → sem LeadForm/NeighborhoodSilo antes
  const brokenFragment = /<InternalLinksBlock[\s\S]*?\/>\s*\n<\/>\s*\n\s*\);\s*\n\}/;
  if (brokenFragment.test(content)) {
    // Extrair o slug da página para reconstruir os componentes finais
    const slugMatch = content.match(/currentSlug="(\/avcb-[^"]+)"/);
    const slug = slugMatch ? slugMatch[1] : "";
    const titulo = content.match(/titulo="([^"]+)"/)?.[1] || "Serviços de AVCB";
    const maxLinks = content.match(/maxLinks=\{(\d+)\}/)?.[1] || "6";

    content = content.replace(
      brokenFragment,
      `<InternalLinksBlock\n        currentSlug="${slug}"\n        mode="bairro"\n        maxLinks={${maxLinks}}\n        titulo="${titulo}"\n      />\n      <LeadForm />\n      <NeighborhoodSilo currentSlug="${slug}" />\n    </>\n  );\n}`
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("[CORRIGIDO]  " + dir);
    fixed++;
  } else {
    console.log("[OK]         " + dir);
  }
}

console.log("\nTotal corrigidos: " + fixed);
