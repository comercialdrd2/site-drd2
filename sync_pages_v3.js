const fs = require('fs');

const content = fs.readFileSync('src/data/bairros-renovacao.ts', 'utf8');
const slugs = [...content.matchAll(/\"?slug\"?:\s*\"([^\"]+)\"/g)].map(m => m[1]);
const unique = [...new Set(slugs)];

const seoContent = fs.readFileSync('src/data/localNeighborhoodSeoPages.ts', 'utf8');
const seoSlugs = [...seoContent.matchAll(/\"?slug\"?:\s*\"([^\"]+)\"/g)].map(m => m[1]);

const missing = unique.filter(x => !seoSlugs.includes(x));
console.log('Missing in seoPages:', missing.length);

if (missing.length > 0) {
    let toAdd = [];
    for (const slug of missing) {
        const regex = new RegExp(`\"?slug\"?:\\s*"${slug}",\\s*\"?nome\"?:\\s*"([^"]+)",\\s*\"?zona\"?:\\s*"([^"]+)",\\s*\"?tag\"?:\\s*"[^"]+",\\s*\"?avenidas\"?:\\s*"([^"]+)",\\s*\"?perfil\"?:\\s*"([^"]+)"`);
        const match = content.match(regex);
        if (match) {
            const nome = match[1];
            const zona = match[2];
            const avenidas = match[3];
            const perfil = match[4];
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
        } else {
            console.log(`Failed to parse data for ${slug} from bairros-renovacao`);
        }
    }
    
    if (toAdd.length > 0) {
        const insertString = toAdd.join(',\n') + ',\n';
        let newSeoContent = seoContent.replace(/\n\];/g, ',\n' + insertString + '];');
        fs.writeFileSync('src/data/localNeighborhoodSeoPages.ts', newSeoContent, 'utf8');
        console.log(`Added ${toAdd.length} missing neighborhoods to localNeighborhoodSeoPages.ts`);
    }
}
