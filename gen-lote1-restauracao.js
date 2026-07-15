/**
 * Lote 1 da restauração das páginas apagadas em 23/05/2026 (commit e06284aa).
 * - Cria entradas em localNeighborhoodSeoPages.ts para 41 bairros/distritos,
 *   transformando o conteúdo único já existente em bairros-renovacao.ts e
 *   expansao-cidades.ts (nada de conteúdo duplicado: cada entrada vem da
 *   pesquisa local já escrita para aquele bairro).
 * - Gera os wrappers de página (5 linhas) para as 65 URLs antigas com dados prontos.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DATA_LN = path.join(ROOT, "src/data/localNeighborhoodSeoPages.ts");
const DATA_BR = path.join(ROOT, "src/data/bairros-renovacao.ts");
const DATA_EC = path.join(ROOT, "src/data/expansao-cidades.ts");
const MISSING = path.join(ROOT, "missing_com_dados.txt");

// ---------- extração de campos dos data files ----------
function extractEntries(file) {
  const src = fs.readFileSync(file, "utf8");
  const entries = {};
  // separa por ocorrências de "slug": "..."
  const re = /"?slug"?\s*:\s*"([a-z0-9-]+)"/g;
  const marks = [];
  let m;
  while ((m = re.exec(src))) marks.push({ slug: m[1], idx: m.index });
  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].idx;
    const end = i + 1 < marks.length ? marks[i + 1].idx : src.length;
    const chunk = src.slice(start, end);
    const get = (field) => {
      const r = new RegExp(`"?${field}"?\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`);
      const mm = chunk.match(r);
      return mm ? mm[1].replace(/\\"/g, '"').replace(/\\n/g, "\n") : "";
    };
    const getArr = (field) => {
      const r = new RegExp(`"?${field}"?\\s*:\\s*\\[([\\s\\S]*?)\\]`);
      const mm = chunk.match(r);
      if (!mm) return [];
      const items = [...mm[1].matchAll(/"((?:[^"\\\\]|\\\\.)*)"/g)].map((x) =>
        x[1].replace(/\\"/g, '"')
      );
      return items;
    };
    entries[marks[i].slug] = {
      nome: get("nome"),
      zona: get("zona"),
      avenidas: get("avenidas"),
      perfil: get("perfil"),
      box: get("box"),
      problemas: getArr("problemas"),
    };
  }
  return entries;
}

// ---------- buildings e nearby autorais por slug ----------
const MAP = {
  // bairros SP (fonte: bairros-renovacao.ts)
  "bela-vista": { buildings: ["prédios residenciais antigos", "teatros e casas de espetáculo", "restaurantes e cantinas", "comércios de rua"], nearby: ["Liberdade", "Consolação", "República", "Cambuci"] },
  "brooklin": { buildings: ["torres corporativas", "condomínios residenciais", "restaurantes", "escritórios"], nearby: ["Campo Belo", "Itaim Bibi", "Santo Amaro", "Vila Olímpia"] },
  "campo-belo": { buildings: ["condomínios verticais", "comércios de bairro", "clínicas", "escritórios"], nearby: ["Brooklin", "Moema", "Santo Amaro", "Jabaquara"] },
  "itaim-bibi": { buildings: ["torres corporativas", "restaurantes e bares", "clínicas", "condomínios de alto padrão"], nearby: ["Vila Olímpia", "Jardins", "Pinheiros", "Brooklin"] },
  "lapa": { buildings: ["galpões reconvertidos", "comércio de rua", "condomínios novos", "escolas"], nearby: ["Vila Leopoldina", "Pompeia", "Perdizes", "Barra Funda"] },
  "mooca": { buildings: ["galpões industriais antigos", "condomínios novos", "cantinas e restaurantes", "comércios tradicionais"], nearby: ["Brás", "Belém", "Tatuapé", "Cambuci"] },
  "pinheiros": { buildings: ["escritórios e coworkings", "bares e restaurantes", "clínicas", "edifícios residenciais"], nearby: ["Vila Madalena", "Itaim Bibi", "Butantã", "Jardins"] },
  "santo-amaro": { buildings: ["galpões e centros logísticos", "comércio popular", "escolas e faculdades", "prédios comerciais"], nearby: ["Chácara Santo Antônio", "Campo Belo", "Socorro", "Brooklin"] },
  "tatuape": { buildings: ["condomínios verticais novos", "shopping centers", "comércio de rua", "clínicas"], nearby: ["Anália Franco", "Carrão", "Penha", "Mooca"] },
  "vila-clementino": { buildings: ["hospitais e clínicas", "prédios residenciais", "consultórios", "escolas"], nearby: ["Vila Mariana", "Saúde", "Moema", "Paraíso"] },
  "vila-mariana": { buildings: ["prédios residenciais", "escolas e faculdades", "clínicas", "comércios de bairro"], nearby: ["Vila Clementino", "Paraíso", "Saúde", "Chácara Klabin"] },
  "vila-olimpia": { buildings: ["torres corporativas", "casas noturnas e bares", "restaurantes", "condomínios residenciais"], nearby: ["Itaim Bibi", "Brooklin", "Moema", "Vila Nova Conceição"] },
  "agua-branca": { buildings: ["condomínios novos", "galpões reconvertidos", "centros empresariais", "comércios"], nearby: ["Barra Funda", "Lapa", "Perdizes", "Pompeia"] },
  "altos-de-santana": { buildings: ["prédios residenciais", "comércios de bairro", "escolas", "clínicas"], nearby: ["Santana", "Jardim São Paulo", "Tucuruvi", "Mandaqui"] },
  "chacara-klabin": { buildings: ["condomínios de alto padrão", "clínicas", "escritórios", "comércios"], nearby: ["Vila Mariana", "Ipiranga", "Saúde", "Cambuci"] },
  "chacara-santo-antonio": { buildings: ["edifícios corporativos", "condomínios residenciais", "escolas", "restaurantes"], nearby: ["Santo Amaro", "Brooklin", "Granja Julieta", "Campo Belo"] },
  "cidade-moncoes": { buildings: ["torres corporativas", "condomínios residenciais", "restaurantes", "academias"], nearby: ["Vila Olímpia", "Brooklin", "Itaim Bibi", "Campo Belo"] },
  "moema-indios": { buildings: ["condomínios verticais", "restaurantes", "clínicas", "comércios de rua"], nearby: ["Moema Pássaros", "Vila Nova Conceição", "Ibirapuera", "Campo Belo"] },
  "moema-passaros": { buildings: ["condomínios verticais de alto padrão", "restaurantes e cafés", "clínicas e consultórios", "lojas"], nearby: ["Moema Índios", "Campo Belo", "Vila Nova Conceição", "Ibirapuera"] },
  "vila-andrade": { buildings: ["condomínios verticais", "escolas particulares", "comércios", "clínicas"], nearby: ["Morumbi", "Campo Limpo", "Paraisópolis", "Vila Sônia"] },
  "vila-ipojuca": { buildings: ["prédios residenciais", "comércios de bairro", "escritórios", "escolas"], nearby: ["Lapa", "Pompeia", "Perdizes", "Vila Romana"] },
  "vila-nova-conceicao": { buildings: ["condomínios de altíssimo padrão", "restaurantes", "galerias e lojas", "consultórios"], nearby: ["Moema", "Itaim Bibi", "Vila Olímpia", "Ibirapuera"] },
  // Guarulhos (fonte: expansao-cidades.ts)
  "guarulhos-centro": { buildings: ["prédios comerciais", "lojas de rua", "clínicas", "condomínios residenciais"], nearby: ["Vila Augusta", "Macedo", "Maia", "Gopoúva"] },
  "guarulhos-vila-augusta": { buildings: ["condomínios novos", "comércios", "centros empresariais", "escolas"], nearby: ["Centro", "Macedo", "Vila Galvão", "Gopoúva"] },
  "guarulhos-maia": { buildings: ["prédios corporativos", "condomínios verticais", "comércios", "clínicas"], nearby: ["Centro", "Macedo", "Vila Augusta", "Aeroporto"] },
  "guarulhos-macedo": { buildings: ["condomínios residenciais", "comércios de bairro", "escolas", "prédios mistos"], nearby: ["Centro", "Maia", "Vila Augusta", "Gopoúva"] },
  "guarulhos-aeroporto": { buildings: ["galpões logísticos", "hotéis", "transportadoras", "centros de distribuição"], nearby: ["Cumbica", "Bonsucesso", "Centro", "Itapegica"] },
  "guarulhos-bonsucesso": { buildings: ["galpões industriais", "centros logísticos", "comércios", "condomínios"], nearby: ["Pimentas", "Aeroporto", "Cumbica", "Taboão"] },
  "guarulhos-pimentas": { buildings: ["comércios de rua", "galpões", "escolas", "condomínios residenciais"], nearby: ["Bonsucesso", "Cumbica", "Aeroporto", "Itaquaquecetuba"] },
  // Campinas
  "campinas-cambui": { buildings: ["restaurantes e bares", "clínicas e consultórios", "prédios residenciais", "escritórios"], nearby: ["Centro", "Guanabara", "Castelo", "Nova Campinas"] },
  "campinas-barao-geraldo": { buildings: ["faculdades e institutos", "repúblicas e condomínios", "restaurantes", "comércios"], nearby: ["Taquaral", "Cidade Universitária", "Guará", "Centro"] },
  "campinas-castelo": { buildings: ["prédios residenciais", "comércios de bairro", "clínicas", "escolas"], nearby: ["Taquaral", "Guanabara", "Jardim Chapadão", "Centro"] },
  "campinas-guanabara": { buildings: ["prédios residenciais", "comércios", "consultórios", "escolas"], nearby: ["Cambuí", "Castelo", "Taquaral", "Centro"] },
  "campinas-mansoes-santo-antonio": { buildings: ["condomínios residenciais", "clínicas", "comércios", "escritórios"], nearby: ["Barão Geraldo", "Taquaral", "Cidade Universitária", "Guará"] },
  "campinas-taquaral": { buildings: ["condomínios verticais", "restaurantes", "academias", "comércios"], nearby: ["Cambuí", "Castelo", "Barão Geraldo", "Centro"] },
  // Santos
  "santos-aparecida": { buildings: ["prédios residenciais", "comércios de bairro", "restaurantes", "pousadas"], nearby: ["Embaré", "Ponta da Praia", "Boqueirão", "Estuário"] },
  "santos-boqueirao": { buildings: ["prédios residenciais e mistos", "comércios", "hotéis e pousadas", "clínicas"], nearby: ["Gonzaga", "Embaré", "Aparecida", "Centro"] },
  "santos-centro": { buildings: ["prédios históricos e comerciais", "escritórios", "armazéns", "comércios"], nearby: ["Valongo", "Paquetá", "Vila Nova", "Boqueirão"] },
  "santos-embare": { buildings: ["prédios residenciais", "restaurantes", "comércios", "escolas"], nearby: ["Aparecida", "Boqueirão", "Ponta da Praia", "Gonzaga"] },
  "santos-gonzaga": { buildings: ["hotéis e pousadas", "restaurantes e bares", "prédios residenciais", "lojas e galerias"], nearby: ["Boqueirão", "Pompéia", "José Menino", "Embaré"] },
  "santos-ponta-da-praia": { buildings: ["prédios residenciais", "restaurantes", "clubes e marinas", "comércios"], nearby: ["Aparecida", "Estuário", "Embaré", "Macuco"] },
};

// ---------- montar as entradas ----------
const br = extractEntries(DATA_BR);
const ec = extractEntries(DATA_EC);
const needLn = fs.readFileSync(path.join(ROOT, "need_ln.txt"), "utf8").split(/\r?\n/).filter(Boolean);

const lnSrc = fs.readFileSync(DATA_LN, "utf8");
const jaTem = new Set([...lnSrc.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]));

const novas = [];
const faltando = [];
for (const slug of needLn) {
  if (jaTem.has(slug)) continue;
  const src = br[slug] || ec[slug];
  const extra = MAP[slug];
  if (!src || !extra) { faltando.push(slug + (src ? " [sem MAP]" : " [sem fonte]")); continue; }
  const localRefs = src.avenidas
    ? src.avenidas.split(/,\s*|\s+e\s+/).map((s) => s.trim()).filter(Boolean)
    : [];
  const urgency = (src.box || "").split(/\n/)[0].trim();
  novas.push({
    slug,
    name: src.nome,
    zone: src.zona,
    localRefs,
    profile: src.perfil,
    buildings: extra.buildings,
    risks: src.problemas.length ? src.problemas : ["documentação desatualizada", "sistemas sem manutenção registrada", "laudos e ARTs vencidos"],
    urgency: urgency || `Em ${src.nome}, o processo costuma travar quando a documentação não reflete o uso atual do imóvel.`,
    nearby: extra.nearby,
  });
}

if (faltando.length) {
  console.error("SEM DADOS/MAP para:", faltando.join(", "));
  process.exit(1);
}

// injeta antes do fechamento do array
const marker = "];\n\nexport function getLocalNeighborhood";
if (!lnSrc.includes(marker)) { console.error("marcador não encontrado em localNeighborhoodSeoPages.ts"); process.exit(1); }
const bloco = novas.map((e) => "  " + JSON.stringify(e, null, 4).replace(/\n/g, "\n  ")).join(",\n") + ",\n";
const lnNovo = lnSrc.replace(marker, bloco + "];\n\nexport function getLocalNeighborhood");
fs.writeFileSync(DATA_LN, lnNovo);
console.log("entradas novas em localNeighborhoodSeoPages.ts:", novas.length);

// ---------- gerar wrappers ----------
const urls = fs.readFileSync(MISSING, "utf8").split(/\r?\n/).filter(Boolean).map((l) => l.split("  [dados:")[0].trim());
let criadas = 0, puladas = 0;
for (const url of urls) {
  let mode, base;
  let m;
  if ((m = url.match(/^renovacao-avcb-condominio-(.+)$/))) { mode = "condominio"; base = m[1]; }
  else if ((m = url.match(/^renovacao-clcb-(.+)-sao-paulo$/))) { mode = "clcb"; base = m[1]; }
  else if ((m = url.match(/^avcb-(.+)$/))) { mode = "avcb"; base = m[1]; }
  else { console.warn("padrão não reconhecido:", url); continue; }
  const dir = path.join(ROOT, "src/app", url);
  if (fs.existsSync(dir)) { puladas++; continue; }
  fs.mkdirSync(dir, { recursive: true });
  const page = `import LocalNeighborhoodSeoLanding, { localNeighborhoodMetadata } from "@/components/LocalNeighborhoodSeoLanding";
import { getLocalNeighborhood } from "@/data/localNeighborhoodSeoPages";
const neighborhood = getLocalNeighborhood("${base}")!;
export const metadata = localNeighborhoodMetadata(neighborhood, "${mode}");
export default function Page() { return <LocalNeighborhoodSeoLanding neighborhood={neighborhood} mode="${mode}" />; }
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), page);
  criadas++;
}
console.log("wrappers criados:", criadas, "| já existiam:", puladas);
