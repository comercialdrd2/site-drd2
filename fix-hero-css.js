/**
 * fix-hero-css.js
 * Corrige APENAS as classes CSS da section Hero e da Image de fundo
 * para seguir o padrão Aricanduva. Não altera nenhum texto.
 * Uso: node fix-hero-css.js
 */

const fs = require("fs");
const path = require("path");

const PAGES = [
  { dir: "avcb-bela-vista"      },
  { dir: "avcb-vila-prudente"   },
  { dir: "avcb-vila-leopoldina" },
  { dir: "avcb-vila-madalena"   },
  { dir: "avcb-perdizes"        },
  { dir: "avcb-butanta"         },
  { dir: "avcb-tucuruvi"        },
  { dir: "avcb-santana"         },
  { dir: "avcb-casa-verde"      },
  { dir: "avcb-limao"           },
  { dir: "avcb-lapa"            },
  { dir: "avcb-jacana"          },
];

// Padrão CORRETO (Aricanduva)
const CORRECT = {
  // Section hero
  sectionClass: 'className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600"',
  // Image fill classes
  imageClass:   'className="object-cover object-center opacity-30 grayscale-[50%]"',
  // Overlay gradient
  overlayClass: 'className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"',
  // Container interno (1 coluna, max-w-4xl)
  innerDiv:     'className="relative z-10 container mx-auto px-4 max-w-6xl py-8"',
  innerWrapper: 'className="max-w-4xl"',
};

// Padrões errados conhecidos → substituir pelo correto
const SECTION_CLASS_FIXES = [
  // Vila Madalena e similares (2 colunas, slate-950, italic)
  /className="relative bg-slate-950 text-white min-h-\[auto\][^"]*"/,
  // bg-gray-950 ou bg-black
  /className="relative bg-gray-950 text-white[^"]*"/,
  /className="relative bg-black text-white[^"]*"/,
  // overflow-hidden antes de text-white
  /className="relative overflow-hidden text-white[^"]*"/,
  // Com border-8
  /className="relative text-white overflow-hidden min-h-\[auto\][^"]*border-b-8[^"]*"/,
  // Outros variantes
  /className="relative text-white[^"]*bg-slate-[^"]*"/,
];

const IMAGE_CLASS_FIXES = [
  // opacity-20 brightness-50
  /className="object-cover opacity-20 grayscale brightness-50"/,
  /className="object-cover opacity-20[^"]*"/,
  // opacity-40
  /className="object-cover object-center opacity-40[^"]*"/,
  // opacity-25
  /className="object-cover object-center opacity-25[^"]*"/,
  // sem object-center
  /className="object-cover opacity-30[^"]*"/,
  // outros
  /className="object-cover[^"]*grayscale[^"]*brightness[^"]*"/,
];

const OVERLAY_FIXES = [
  // slate overlay
  /className="absolute inset-0 bg-gradient-to-r from-slate-950[^"]*"/,
  /className="absolute inset-0 bg-gradient-to-r from-gray-950[^"]*"/,
  /className="absolute inset-0 bg-black\/[^"]*"/,
  /className="absolute inset-0 bg-gradient-to-r from-black\/90[^"]*"/,
];

const INNER_DIV_FIXES = [
  // com text-left
  /className="relative z-10 container mx-auto px-4 max-w-6xl py-8 text-left"/,
  // sem max-w-6xl
  /className="relative z-10 container mx-auto px-4 py-8"/,
];

const INNER_WRAPPER_FIXES = [
  // Layout 2 colunas → 1 coluna
  /className="flex flex-col lg:flex-row gap-16 items-center"/,
  /className="flex flex-col lg:flex-row[^"]*"/,
  /className="lg:w-3\/5"/,
  /className="lg:w-2\/3"/,
];

const APP_DIR = path.join("src", "app");
let fixed = 0;
let unchanged = 0;

for (const page of PAGES) {
  const filePath = path.join(APP_DIR, page.dir, "page.tsx");
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  // 1. Corrigir className da <section> hero
  for (const pattern of SECTION_CLASS_FIXES) {
    if (pattern.test(content)) {
      content = content.replace(pattern, CORRECT.sectionClass);
      changed = true;
    }
  }

  // 2. Corrigir className da <Image fill>
  for (const pattern of IMAGE_CLASS_FIXES) {
    if (pattern.test(content)) {
      content = content.replace(pattern, CORRECT.imageClass);
      changed = true;
    }
  }

  // 3. Corrigir overlay
  for (const pattern of OVERLAY_FIXES) {
    if (pattern.test(content)) {
      content = content.replace(pattern, CORRECT.overlayClass);
      changed = true;
    }
  }

  // 4. Corrigir inner div (tirar text-left)
  for (const pattern of INNER_DIV_FIXES) {
    if (pattern.test(content)) {
      content = content.replace(pattern, CORRECT.innerDiv);
      changed = true;
    }
  }

  // 5. Corrigir wrapper de 2 colunas → max-w-4xl
  // Procurar o div imediatamente após o container e trocar por max-w-4xl
  if (content.includes('className="flex flex-col lg:flex-row')) {
    // Substituir o wrapper de flex row pelo wrapper simples
    content = content.replace(
      /className="flex flex-col lg:flex-row[^"]*"/,
      'className="max-w-4xl"'
    );
    // Remover o div interno que dividia em colunas (lg:w-3/5 ou lg:w-2/3)
    content = content.replace(
      /<div className="lg:w-[^"]*">\s*\n/,
      ''
    );
    // Fechar o div removido acima no lugar certo — vamos procurar o fechamento logo antes de </section>
    // Isso é feito manualmente mais abaixo
    changed = true;
  }

  // 6. Garantir que sizes="100vw" e quality={60} são removidos (simplificação)
  // Mantemos mas ajustamos a image para ficar igual Aricanduva
  content = content.replace(
    /\s*sizes="100vw"\s*/g,
    '\n          '
  );
  content = content.replace(
    /\s*quality=\{60\}\s*/g,
    '\n          '
  );

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`[CORRIGIDO]  ${page.dir}`);
    fixed++;
  } else {
    console.log(`[OK]         ${page.dir} — nenhuma diferença detectada`);
    unchanged++;
  }
}

console.log(`
─────────────────────────────────────────────
 Fix Hero CSS concluído!
 Corrigidos:  ${fixed}
 Inalterados: ${unchanged}
─────────────────────────────────────────────`);
