const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
const nextConfigFile = path.join(__dirname, 'next.config.mjs');

const NEIGHBORHOODS = [
  "moema", "itaim-bibi", "brooklin", "campo-belo", "sacoma", "jabaquara", "saude",
  "santo-amaro", "morumbi", "vila-olimpia", "pinheiros", "vila-madalena", "perdizes",
  "lapa", "butanta", "barra-funda", "bela-vista", "centro", "consolacao", "jardins",
  "republica", "bom-retiro", "santa-cecilia", "higienopolis", "liberdade", "se",
  "cambuci", "ipiranga", "vila-mariana", "vila-clementino", "paraiso", "carrao",
  "santana", "tucuruvi", "casa-verde", "freguesia-do-o", "jacana", "limao", "tremembe",
  "mandaqui", "brasilandia", "pirituba", "tatuape", "mooca", "vila-prudente", "penha",
  "itaquera", "sapopemba", "vila-formosa", "vila-matilde", "agua-rasa", "bras", "belem",
  "ermelino-matarazzo", "cangaiba", "sao-mateus", "sao-miguel-paulista", "aricanduva",
  "vila-andrade", "interlagos", "campo-limpo", "capao-redondo", "rio-pequeno",
  "graja", "mboi-mirim", "cursino", "aclimacao", "pompeia", "comercio",
  "analia-franco", "agua-branca", "altos-de-santana", "chacara-klabin",
  "chacara-santo-antonio", "cidade-moncoes", "moema-indios", "moema-passaros",
  "vila-ipojuca", "vila-leopoldina", "vila-nova-conceicao", "vila-re",
  "santo-andre", "sao-bernardo", "sao-caetano", "diadema", "maua", "guarulhos",
  "osasco", "barueri", "alphaville", "carapicuiba", "taboao-da-serra",
  "santos", "praia-grande", "guaruja", "sao-vicente", "bertioga", "itanhaem",
  "cubatao", "santos-aparecida", "santos-boqueirao", "santos-centro",
  "santos-embare", "santos-gonzaga", "santos-ponta-da-praia",
  "campinas", "sorocaba", "jundiai", "mogi-das-cruzes", "suzano", "poa",
  "sao-jose-dos-campos", "ribeirao-preto", "campo-grande",
  "zona-sul", "zona-norte", "zona-leste", "zona-oeste", "zona-centro"
];

function isNeighborhood(name) {
  return NEIGHBORHOODS.some(kw => name.includes(kw));
}

let redirects = [];
let deletedCount = 0;

const entries = fs.readdirSync(appDir, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const name = entry.name;
  
  let shouldDelete = false;
  let destination = '';

  // 1. renovacao-clcb-* (exceto o principal)
  if (name.startsWith('renovacao-clcb-') && name !== 'renovacao-clcb-sao-paulo') {
    shouldDelete = true;
    destination = '/renovacao-clcb-sao-paulo';
  }
  
  // 2. renovacao-avcb-condominio-*
  if (name.startsWith('renovacao-avcb-condominio-') && name !== 'renovacao-avcb-condominio-sao-paulo') {
    shouldDelete = true;
    destination = '/avcb-para-condominio-sao-paulo';
  }

  // 3. alvara-bombeiro-* e laudo-bombeiro-*
  if (name.startsWith('alvara-bombeiro-') || name.startsWith('laudo-bombeiro-')) {
    shouldDelete = true;
    const occupationMatch = name.match(/^(?:alvara|laudo)-bombeiro-(.+)-sao-paulo$/);
    if (occupationMatch) {
      const occupation = occupationMatch[1];
      const possibleAvcb = `avcb-para-${occupation}-sao-paulo`;
      const possibleAvcbDir = path.join(appDir, possibleAvcb);
      if (fs.existsSync(possibleAvcbDir)) {
        destination = `/${possibleAvcb}`;
      } else {
        destination = '/avcb-sao-paulo';
      }
    } else {
      destination = '/avcb-sao-paulo';
    }
  }

  // 4. Bairros genéricos AVCB (avcb-moema, avcb-jardins) -- mas cuidado para não apagar cidades grandes que queremos no Balde 2!
  // Balde 2 = Manter Jardins, Moema, Higienopolis, Perdizes, e cidades ptotep.
  // Então não apagaremos genericamente avcb-* agora se não estivermos 100% seguros.
  // Vamos focar nos bairros puramente de doorways (os que dão match com NEIGHBORHOODS, exceto os balde 2)
  const exceptionsBalde2 = ['jardins', 'moema', 'higienopolis', 'perdizes'];
  if (name.startsWith('avcb-') && isNeighborhood(name)) {
    const isException = exceptionsBalde2.some(ex => name.includes(ex));
    // E não apagar o avcb-sao-paulo e avcb-campinas
    if (!isException && name !== 'avcb-sao-paulo' && name !== 'avcb-campinas-centro') {
      shouldDelete = true;
      destination = '/avcb-sao-paulo';
    }
  }

  // 5. Exceções explícitas de ocupação duplicada
  if (name === 'avcb-escola-faculdade-sao-paulo') {
    shouldDelete = true; destination = '/avcb-para-escola-sao-paulo';
  }
  if (name === 'avcb-hostel-sao-paulo' || name === 'avcb-pousada-sao-paulo') {
    shouldDelete = true; destination = '/avcb-hoteis-pousadas-sao-paulo';
  }
  if (name === 'avcb-clinica-veterinaria-sao-paulo' || name === 'avcb-pet-shop-sao-paulo') {
    shouldDelete = true; destination = '/avcb-clinica-hospital-veterinario-sao-paulo';
  }
  if (name === 'sistema-hidrante-edificio-residencial-avcb-sp') {
    shouldDelete = true; destination = '/sistema-de-hidrantes-para-condominio-sao-paulo';
  }

  if (shouldDelete) {
    const dirPath = path.join(appDir, name);
    fs.rmSync(dirPath, { recursive: true, force: true });
    redirects.push(`{ source: '/${name}', destination: '${destination}', permanent: true },`);
    deletedCount++;
    console.log(`DELETED: ${name} -> ${destination}`);
  }
}

console.log(`\n✅ Total de páginas removidas: ${deletedCount}`);

// Salvar redirects gerados
fs.writeFileSync('generated_redirects.txt', redirects.join('\n'));
console.log('Redirects salvos em generated_redirects.txt');
