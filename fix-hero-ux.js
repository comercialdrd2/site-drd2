/**
 * fix-hero-ux.js
 * Padroniza o Hero Section das páginas de bairro para o padrão Aricanduva.
 * REGRA CRÍTICA: Não altera nenhum texto — apenas estrutura visual/CSS.
 * Uso: node fix-hero-ux.js
 */

const fs = require("fs");
const path = require("path");

// ─── Páginas a corrigir ────────────────────────────────────────────────────────
const PAGES = [
  { dir: "avcb-bela-vista",       bairro: "Bela Vista"      },
  { dir: "avcb-vila-prudente",    bairro: "Vila Prudente"   },
  { dir: "avcb-vila-leopoldina",  bairro: "Vila Leopoldina" },
  { dir: "avcb-vila-madalena",    bairro: "Vila Madalena"   },
  { dir: "avcb-perdizes",         bairro: "Perdizes"        },
  { dir: "avcb-butanta",          bairro: "Butantã"         },
  { dir: "avcb-tucuruvi",         bairro: "Tucuruvi"        },
  { dir: "avcb-santana",          bairro: "Santana"         },
  { dir: "avcb-casa-verde",       bairro: "Casa Verde"      },
  { dir: "avcb-limao",            bairro: "Limão"           },
  { dir: "avcb-lapa",             bairro: "Lapa"            },
  { dir: "avcb-jacana",           bairro: "Jaçanã"         },
];

// ─── Hero padrão Aricanduva (template) ────────────────────────────────────────
// Substitui TODA a section do hero, preservando apenas os textos internos
const ARICANDUVA_HERO_OPEN = `      {/* Hero Section - PADRÃO ARICANDUVA */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/banner-avcb.png"
          alt="Regularização de AVCB no bairro"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />`;

const APP_DIR = path.join("src", "app");

// Padrões de detecção de hero problemático (sem imagem de fundo)
const BROKEN_HERO_PATTERNS = [
  // Hero sem Image fill
  /<section[^>]*className[^>]*relative[^>]*text-white[^>]*>(?![\s\S]*?<Image[\s\S]*?fill)/,
  // Hero com bg- mas sem Image fill
  /className="relative text-white overflow-hidden[^"]*"[^>]*>(\s*<div)/,
];

let fixed = 0;
let skipped = 0;
let notFound = 0;
let alreadyGood = 0;

for (const page of PAGES) {
  const filePath = path.join(APP_DIR, page.dir, "page.tsx");

  if (!fs.existsSync(filePath)) {
    console.log(`[NAO ENCONTRADO] ${page.dir}`);
    notFound++;
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");

  // ── Verificar se já tem a estrutura correta ──────────────────────────────
  const hasImageFill = content.includes('fill\n') || content.includes('fill ') || content.includes('fill\r');
  const hasImageFillInHero = /Image[\s\S]{0,200}fill/.test(content.substring(0, content.indexOf('Introdução') > 0 ? content.indexOf('Introdução') : 5000));

  if (hasImageFillInHero) {
    console.log(`[JA OK]      ${page.dir} — Hero já tem Image com fill`);
    alreadyGood++;
    continue;
  }

  // ── Garantir que Image está importado ───────────────────────────────────
  if (!content.includes("import Image from")) {
    content = content.replace(
      'import Link from "next/link";',
      'import Link from "next/link";\nimport Image from "next/image";'
    );
  }

  // ── Substituir a abertura da section hero ────────────────────────────────
  // Detectar hero section existente — vários padrões possíveis
  const heroSectionPatterns = [
    // Padrão sem imagem: section com className relativo e bg sólido
    {
      search: /<section className="relative text-white overflow-hidden[^"]*">/,
      fullReplace: false,
    },
    // Padrão bg-gray sem Image
    {
      search: /\{\/\*[^*]*[Hh]ero[^*]*\*\/\}\s*<section[^>]+>/,
      fullReplace: false,
    },
  ];

  // Abordagem robusta: substituir a seção completa do hero
  // Encontrar início e fim da section hero
  const heroStartMatch = content.match(
    /(\{\/\*[^\n]*[Hh]ero[^\n]*\*\/\}\s*)?<section[^>]*relative[^>]*text-white[^>]*>/
  );

  if (!heroStartMatch) {
    console.log(`[SEM HERO]   ${page.dir} — padrão de hero não encontrado`);
    skipped++;
    continue;
  }

  const heroStart = content.indexOf(heroStartMatch[0]);

  // Encontrar o fechamento da section hero — procurar pelo próximo </section> no nível correto
  let depth = 0;
  let heroEnd = -1;
  let i = heroStart + heroStartMatch[0].length;

  while (i < content.length) {
    if (content[i] === '<') {
      if (content.substring(i, i + 8) === '<section') {
        depth++;
      } else if (content.substring(i, i + 10) === '</section>') {
        if (depth === 0) {
          heroEnd = i + 10;
          break;
        }
        depth--;
      }
    }
    i++;
  }

  if (heroEnd === -1) {
    console.log(`[SEM FIM]    ${page.dir} — fim da section hero não encontrado`);
    skipped++;
    continue;
  }

  // Extrair o conteúdo interno do hero existente (textos)
  const heroContent = content.substring(heroStart, heroEnd);

  // Extrair o bloco de conteúdo interno (div relativa com z-10)
  const innerContentMatch = heroContent.match(
    /(<div className="relative z-10[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/
  );

  // Extrair o badge/span de abertura se existir
  const badgeMatch = heroContent.match(
    /<span className="inline-flex items-center gap-2 bg-red-600\/20[\s\S]*?<\/span>/
  );

  // Extrair o H1 existente
  const h1Match = heroContent.match(/<h1[\s\S]*?<\/h1>/);

  // Extrair o parágrafo de subheadline
  const paraMatch = heroContent.match(/<p className="text-xl md:text-2xl[\s\S]*?<\/p>/);

  // Extrair o div do CTA
  const ctaMatch = heroContent.match(/<div className="flex flex-col[\s\S]*?<\/div>/);

  // Extrair a ul de bullets
  const ulMatch = heroContent.match(/<ul className="mt-10[\s\S]*?<\/ul>/);

  // ── Reconstruir o Hero com o padrão Aricanduva ───────────────────────────
  const badge    = badgeMatch  ? badgeMatch[0]  : `<span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm"><ShieldAlert className="w-4 h-4" /> Regularização AVCB/CLCB</span>`;
  const h1       = h1Match     ? h1Match[0]     : `<h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">AVCB no(a) ${page.bairro}</h1>`;
  const para     = paraMatch   ? paraMatch[0]   : `<p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">Regularize seu imóvel com segurança jurídica.</p>`;
  const ctaDiv   = ctaMatch    ? ctaMatch[0]    : `<div className="flex flex-col sm:flex-row gap-5"><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">Falar com Engenheiro no(a) ${page.bairro}</a></div>`;
  const bulletUl = ulMatch     ? ulMatch[0]     : `<ul className="mt-10 space-y-4">{["Atendimento com Engenheiro Especialista (CREA-SP)","Projeto Técnico conforme Decreto Estadual 69.118/2024","Acompanhamento total até a vistoria e aprovação final"].map((item, i) => (<li key={i} className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />{item}</li>))}</ul>`;

  const newHero = `      {/* Hero Section - PADRÃO ARICANDUVA */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/banner-avcb.png"
          alt="Regularização de AVCB no(a) ${page.bairro}"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            ${badge}
            ${h1}
            
            ${para}
            
            ${ctaDiv}

            ${bulletUl}
          </div>
        </div>
      </section>`;

  content = content.substring(0, heroStart) + newHero + content.substring(heroEnd);

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`[CORRIGIDO]  ${page.dir} — ${page.bairro}`);
  fixed++;
}

console.log(`
─────────────────────────────────────────────
 Padronização Hero UX concluída!
 Corrigidos:     ${fixed}
 Já estavam OK:  ${alreadyGood}
 Pulados:        ${skipped}
 Não encontrado: ${notFound}
─────────────────────────────────────────────`);
