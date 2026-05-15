const fs = require("fs");

let p = "src/app/alvara-bombeiro-condominio-sao-paulo/page.tsx";
let s = fs.readFileSync(p, "utf8");
s = s.replace(
  /\s*\{c\.sections\[6\] && \([\s\S]*?\n\s*\)\}\n\n\s*\{\/\*[^\n]*FAQ[^\n]*\*\/\}/,
  `
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">
            Instrucoes Tecnicas que mais impactam condominios
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              O processo de alvara do Bombeiro para condominios costuma envolver IT-11 para saidas de emergencia,
              IT-16 para extintores, IT-17 para hidrantes, IT-18 para iluminacao, IT-20 para sinalizacao,
              IT-28 para gas e IT-41 para inspecao eletrica.
            </p>
            <p>
              Em edificios com garagens, salao de festas, academia, casa de maquinas e areas tecnicas, a aprovacao
              depende de coerencia entre planta, area real, laudos com ART e funcionamento fisico dos sistemas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}`
);
fs.writeFileSync(p, s, "utf8");

p = "src/app/renovacao-avcb-restaurante-sao-paulo/page.tsx";
s = fs.readFileSync(p, "utf8");
s = s.replace(
  /<NeighborhoodAuthorityBlock\s+neighborhood="Sao Paulo"\s+zone="Sao Paulo"\s+currentSlug=\{_slug\}\s+\/>/,
  `<OccupationAuthorityBlock
        occupation="Restaurante"
        currentSlug="/renovacao-avcb-restaurante-sao-paulo"
      />`
);
fs.writeFileSync(p, s, "utf8");

console.log("Fixed authority block prerender references.");
