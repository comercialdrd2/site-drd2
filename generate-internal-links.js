/**
 * generate-internal-links.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Gera um arquivo JSON de mapeamento de links internos entre páginas de
 * BAIRRO e páginas de OCUPAÇÃO do site DRD2 Engenharia.
 *
 * Saída: src/data/internalLinks.json
 * Uso:   node generate-internal-links.js
 * ─────────────────────────────────────────────────────────────────────────────
 */

const fs = require("fs");
const path = require("path");

// ─── 1. MAPA DE BAIRROS ───────────────────────────────────────────────────────
const BAIRROS = [
  { slug: "/avcb-moema",              label: "Moema",              zona: "Sul"   },
  { slug: "/avcb-itaim-bibi",         label: "Itaim Bibi",         zona: "Sul"   },
  { slug: "/avcb-brooklin",           label: "Brooklin",           zona: "Sul"   },
  { slug: "/avcb-campo-belo",         label: "Campo Belo",         zona: "Sul"   },
  { slug: "/avcb-sacoma",             label: "Sacomã",             zona: "Sul"   },
  { slug: "/avcb-jabaquara",          label: "Jabaquara",          zona: "Sul"   },
  { slug: "/avcb-saude",              label: "Saúde",              zona: "Sul"   },
  { slug: "/avcb-santo-amaro",        label: "Santo Amaro",        zona: "Sul"   },
  { slug: "/avcb-morumbi",            label: "Morumbi",            zona: "Oeste" },
  { slug: "/avcb-vila-olimpia",       label: "Vila Olímpia",       zona: "Sul"   },
  { slug: "/avcb-pinheiros",          label: "Pinheiros",          zona: "Oeste" },
  { slug: "/avcb-vila-madalena",      label: "Vila Madalena",      zona: "Oeste" },
  { slug: "/avcb-perdizes",           label: "Perdizes",           zona: "Oeste" },
  { slug: "/avcb-lapa",               label: "Lapa",               zona: "Oeste" },
  { slug: "/avcb-butanta",            label: "Butantã",            zona: "Oeste" },
  { slug: "/avcb-vila-leopoldina",    label: "Vila Leopoldina",    zona: "Oeste" },
  { slug: "/avcb-santana",            label: "Santana",            zona: "Norte" },
  { slug: "/avcb-casa-verde",         label: "Casa Verde",         zona: "Norte" },
  { slug: "/avcb-tucuruvi",           label: "Tucuruvi",           zona: "Norte" },
  { slug: "/avcb-limao",              label: "Limão",              zona: "Norte" },
  { slug: "/avcb-jacana",             label: "Jaçanã",             zona: "Norte" },
  { slug: "/avcb-tatuape",            label: "Tatuapé",            zona: "Leste" },
  { slug: "/avcb-mooca",              label: "Mooca",              zona: "Leste" },
  { slug: "/avcb-analia-franco",      label: "Anália Franco",      zona: "Leste" },
  { slug: "/avcb-penha",              label: "Penha",              zona: "Leste" },
  { slug: "/avcb-itaquera",           label: "Itaquera",           zona: "Leste" },
  { slug: "/avcb-aricanduva",         label: "Aricanduva",         zona: "Leste" },
  { slug: "/avcb-vila-prudente",      label: "Vila Prudente",      zona: "Leste" },
  { slug: "/avcb-ipiranga",           label: "Ipiranga",           zona: "Leste" },
  { slug: "/avcb-centro-sao-paulo",   label: "Centro",             zona: "Centro"},
  { slug: "/avcb-republica",          label: "República",          zona: "Centro"},
  { slug: "/avcb-bela-vista",         label: "Bela Vista",         zona: "Centro"},
  { slug: "/avcb-liberdade",          label: "Liberdade",          zona: "Centro"},
  { slug: "/avcb-consolacao",         label: "Consolação",         zona: "Centro"},
  { slug: "/avcb-se",                 label: "Sé",                 zona: "Centro"},
  { slug: "/avcb-vila-mariana",       label: "Vila Mariana",       zona: "Sul"   },
  { slug: "/avcb-guarulhos",          label: "Guarulhos",          zona: "ABCG"  },
  { slug: "/avcb-osasco",             label: "Osasco",             zona: "Oeste" },
  { slug: "/avcb-santo-andre",        label: "Santo André",        zona: "ABCG"  },
  { slug: "/avcb-sao-bernardo",       label: "São Bernardo",       zona: "ABCG"  },
  { slug: "/avcb-sao-caetano",        label: "São Caetano",        zona: "ABCG"  },
  { slug: "/avcb-barueri-alphaville", label: "Barueri/Alphaville", zona: "Oeste" },
];

// ─── 2. MAPA DE OCUPAÇÕES ─────────────────────────────────────────────────────
const OCUPACOES = [
  {
    slug:       "/avcb-para-condominio-sao-paulo",
    label:      "AVCB para Condomínio",
    ancoras:    ["regularizar o condomínio", "AVCB para prédios residenciais", "certificado do bombeiro do condomínio"],
    bairrosTipo: ["Sul", "Oeste", "Centro", "Norte", "Leste"],
  },
  {
    slug:       "/alvara-bombeiro-galpao-industrial-sao-paulo",
    label:      "Alvará Bombeiro Galpão",
    ancoras:    ["regularização de galpão industrial", "AVCB para depósito logístico", "alvará do bombeiro industrial"],
    bairrosTipo: ["ABCG", "Leste", "Norte", "Oeste"],
  },
  {
    slug:       "/alvara-bombeiro-restaurante-sao-paulo",
    label:      "Alvará Bombeiro Restaurante",
    ancoras:    ["alvará para restaurante", "AVCB de bares e restaurantes", "regularizar estabelecimento alimentar"],
    bairrosTipo: ["Sul", "Oeste", "Centro", "Leste"],
  },
  {
    slug:       "/alvara-bombeiro-escritorio-sao-paulo",
    label:      "Alvará Bombeiro Escritório",
    ancoras:    ["AVCB para escritório comercial", "regularização de espaço corporativo", "alvará bombeiro para escritório"],
    bairrosTipo: ["Sul", "Oeste", "Centro"],
  },
  {
    slug:       "/alvara-bombeiro-farmacia-drogaria-sao-paulo",
    label:      "Alvará Bombeiro Farmácia",
    ancoras:    ["regularização de farmácia ou drogaria", "AVCB para farmácias", "alvará bombeiro para drogaria"],
    bairrosTipo: ["Sul", "Norte", "Leste", "Centro"],
  },
  {
    slug:       "/alvara-bombeiro-hospital-clinica-sao-paulo",
    label:      "Alvará Bombeiro Clínica",
    ancoras:    ["AVCB para clínicas médicas", "regularizar hospital ou clínica", "alvará bombeiro para estabelecimentos de saúde"],
    bairrosTipo: ["Sul", "Oeste", "Centro", "Norte"],
  },
  {
    slug:       "/renovacao-avcb-condominio-sao-paulo",
    label:      "Renovação AVCB Condomínio",
    ancoras:    ["renovar o AVCB do prédio", "renovação do certificado de incêndio", "AVCB vencido no condomínio"],
    bairrosTipo: ["Sul", "Oeste", "Centro", "Norte", "Leste"],
  },
  {
    slug:       "/avcb-para-escola-sao-paulo",
    label:      "AVCB para Escola",
    ancoras:    ["regularizar escola ou faculdade", "AVCB para instituição de ensino", "alvará bombeiro para escola"],
    bairrosTipo: ["Sul", "Norte", "Leste", "ABCG"],
  },
  {
    slug:       "/alvara-bombeiro-hotel-pousada-sao-paulo",
    label:      "Alvará Bombeiro Hotel",
    ancoras:    ["AVCB para hotéis e pousadas", "regularizar estabelecimento de hospedagem", "alvará bombeiro para hotel"],
    bairrosTipo: ["Centro", "Sul", "Oeste"],
  },
  {
    slug:       "/alvara-bombeiro-supermercado-sao-paulo",
    label:      "Alvará Bombeiro Supermercado",
    ancoras:    ["AVCB para supermercado", "regularizar mercado ou hipermercado", "alvará bombeiro para varejo alimentar"],
    bairrosTipo: ["Sul", "Norte", "Leste", "ABCG"],
  },
];

// ─── 3. GERAR MAPEAMENTO CRUZADO ──────────────────────────────────────────────
/**
 * Estrutura de saída por slug de ocupação:
 * {
 *   "/avcb-para-condominio-sao-paulo": [
 *     { bairroSlug, bairroLabel, ancora, zona },
 *     ...
 *   ]
 * }
 */
const linkMap = {};

for (const ocup of OCUPACOES) {
  const links = [];
  const bairrosFiltrados = BAIRROS.filter((b) =>
    ocup.bairrosTipo.includes(b.zona)
  );

  for (const bairro of bairrosFiltrados) {
    // Escolhe âncora aleatória para variação semântica
    const ancora = ocup.ancoras[Math.floor(Math.random() * ocup.ancoras.length)];

    links.push({
      bairroSlug:  bairro.slug,
      bairroLabel: bairro.label,
      zona:        bairro.zona,
      ancora:      ancora,
      textoSugerido: `Se você precisa de ${ancora} em ${bairro.label}, a DRD2 atende essa região com diagnóstico gratuito.`,
    });
  }

  linkMap[ocup.slug] = {
    label:       ocup.label,
    totalLinks:  links.length,
    links:       links,
  };
}

// ─── 4. GERAR MAPEAMENTO REVERSO (BAIRRO → OCUPAÇÕES) ────────────────────────
/**
 * Estrutura reversa — para cada página de bairro, quais ocupações referenciar:
 */
const reverseMap = {};

for (const bairro of BAIRROS) {
  const ocupacoesDoBairro = [];

  for (const ocup of OCUPACOES) {
    if (ocup.bairrosTipo.includes(bairro.zona)) {
      const ancora = ocup.ancoras[Math.floor(Math.random() * ocup.ancoras.length)];
      ocupacoesDoBairro.push({
        ocupacaoSlug:  ocup.slug,
        ocupacaoLabel: ocup.label,
        ancora:        ancora,
        textoSugerido: `Precisa de ${ancora} em ${bairro.label}? Veja nossa página especializada.`,
      });
    }
  }

  reverseMap[bairro.slug] = {
    label:      bairro.label,
    zona:       bairro.zona,
    totalLinks: ocupacoesDoBairro.length,
    ocupacoes:  ocupacoesDoBairro,
  };
}

// ─── 5. MONTAR SAÍDA FINAL ────────────────────────────────────────────────────
const output = {
  geradoEm:        new Date().toISOString(),
  totalBairros:    BAIRROS.length,
  totalOcupacoes:  OCUPACOES.length,
  // Ocupação → lista de bairros relacionados
  ocupacaoParaBairros: linkMap,
  // Bairro → lista de ocupações relacionadas
  bairroParaOcupacoes: reverseMap,
};

// ─── 6. SALVAR JSON ───────────────────────────────────────────────────────────
const outputPath = path.join("src", "data", "internalLinks.json");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf8");

console.log("─────────────────────────────────────────────");
console.log(" DRD2 — Gerador de Internal Links");
console.log("─────────────────────────────────────────────");
console.log(" Bairros mapeados:    " + BAIRROS.length);
console.log(" Ocupações mapeadas:  " + OCUPACOES.length);
console.log(" Arquivo salvo em:    " + outputPath);
console.log("─────────────────────────────────────────────");
console.log(" Links ocupacao→bairro:");
for (const [slug, data] of Object.entries(linkMap)) {
  console.log("  " + slug + " → " + data.totalLinks + " bairros");
}
console.log("─────────────────────────────────────────────");
