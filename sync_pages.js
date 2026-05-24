const fs = require('fs');

// Read bairros-renovacao
const bairrosPath = 'src/data/bairros-renovacao.ts';
const seoPagesPath = 'src/data/localNeighborhoodSeoPages.ts';

const bairrosContent = fs.readFileSync(bairrosPath, 'utf8');
const seoContent = fs.readFileSync(seoPagesPath, 'utf8');

// Parse slugs from seoPages
const seoSlugsMatches = [...seoContent.matchAll(/slug:\s*"([^"]+)"/g)];
const seoSlugs = new Set(seoSlugsMatches.map(m => m[1]));

// Quick hack to extract objects from bairrosCondominio
// We will just regex parse them
const bairroObjects = [...bairrosContent.matchAll(/slug:\s*"([^"]+)",\s*nome:\s*"([^"]+)",\s*zona:\s*"([^"]+)",\s*tag:\s*"([^"]+)",\s*avenidas:\s*"([^"]+)",\s*perfil:\s*"([^"]+)"/g)];

let toAdd = [];
for (const match of bairroObjects) {
    const slug = match[1];
    const nome = match[2];
    const zona = match[3];
    const avenidas = match[5];
    const perfil = match[6];
    
    if (!seoSlugs.has(slug)) {
        // Build an object for localNeighborhoodSeoPages
        toAdd.push(`  {
    slug: "${slug}",
    name: "${nome}",
    zone: "${zona}",
    localRefs: ["${avenidas.split(', ')[0] || avenidas}", "Região Central", "Vias principais"],
    profile: "${perfil}",
    buildings: ["condomínios residenciais", "edifícios comerciais", "lojas e restaurantes"],
    risks: ["rotas de fuga desatualizadas", "falta de laudos recentes", "mudança de uso sem projeto"],
    urgency: "Em ${nome}, a fiscalização exige atenção contínua para evitar interdições ou multas pelo CBPMESP.",
    nearby: ["São Paulo"],
  }`);
    }
}

if (toAdd.length > 0) {
    const insertString = toAdd.join(',\n') + ',\n';
    // find the end of the localNeighborhoods array
    // It ends with   },
    // ];
    // We will replace "];" with insertString + "];"
    let newSeoContent = seoContent.replace(/\n];/g, ',\n' + insertString + '];');
    fs.writeFileSync(seoPagesPath, newSeoContent, 'utf8');
    console.log(`Added ${toAdd.length} missing neighborhoods to localNeighborhoodSeoPages.ts`);
} else {
    console.log("No missing neighborhoods found.");
}
