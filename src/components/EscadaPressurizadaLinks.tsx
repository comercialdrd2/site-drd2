import Link from "next/link";
import { ArrowRight, Building2, Calculator, FileCheck, Gauge, Hammer, ShieldCheck, Wind } from "lucide-react";

type EscadaLinksProps = {
  currentSlug: string;
};

const allPages = [
  {
    slug: "/escada-pressurizada-sao-paulo",
    label: "Escada Pressurizada em SP",
    desc: "Página principal: projeto, laudo, adequação e regularização para AVCB.",
    icon: Wind,
    kind: "principal",
  },
  {
    slug: "/projeto-escada-pressurizada-avcb-sao-paulo",
    label: "Projeto para AVCB em SP",
    desc: "Projeto completo: memorial de cálculo, dimensionamento, ART e aprovação no Corpo de Bombeiros.",
    icon: FileCheck,
    kind: "projeto",
  },
  {
    slug: "/quanto-custa-escada-pressurizada-sp",
    label: "Quanto Custa?",
    desc: "Fatores de custo: pavimentos, ocupação, ventilador e regularização.",
    icon: Calculator,
    kind: "custo",
  },
  {
    slug: "/instalacao-escada-pressurizada-sp",
    label: "Instalação",
    desc: "Fornecimento e instalação de ventilador, dutos, grelhas e casa de máquinas.",
    icon: Hammer,
    kind: "instalacao",
  },
  {
    slug: "/manutencao-escada-pressurizada-sp",
    label: "Manutenção",
    desc: "Inspeção, teste de vazão e pressão, laudo e ART para renovação do AVCB.",
    icon: Gauge,
    kind: "manutencao",
  },
  {
    slug: "/laudo-escada-pressurizada-sp",
    label: "Laudo Técnico",
    desc: "Laudo com ART: avaliação completa do sistema de pressurização.",
    icon: FileCheck,
    kind: "laudo",
  },
  {
    slug: "/regularizacao-escada-incendio",
    label: "Regularização",
    desc: "Adequação de escada enclausurada, portas corta-fogo e rota de fuga.",
    icon: ShieldCheck,
    kind: "regularizacao",
  },
  {
    slug: "/escada-pressurizada-obrigatoria-avcb-sp",
    label: "É Obrigatória?",
    desc: "Quando a pressurização é exigida pelo Corpo de Bombeiros.",
    icon: ShieldCheck,
    kind: "obrigatoriedade",
  },
  {
    slug: "/escada-pressurizada-condominio-sp",
    label: "Para Condomínio",
    desc: "Escada pressurizada em condomínios verticais para AVCB.",
    icon: Building2,
    kind: "ocupacao",
  },
  {
    slug: "/escada-pressurizada-hotel-sp",
    label: "Para Hotel",
    desc: "Pressurização de escada em hotéis, flats e pousadas.",
    icon: Building2,
    kind: "ocupacao",
  },
  {
    slug: "/escada-pressurizada-hospital-sp",
    label: "Para Hospital",
    desc: "Escada pressurizada em hospitais, clínicas e unidades de saúde.",
    icon: Building2,
    kind: "ocupacao",
  },
  {
    slug: "/escada-pressurizada-edificio-comercial-sp",
    label: "Para Edifício Comercial",
    desc: "Torres corporativas, escritórios e prédios comerciais.",
    icon: Building2,
    kind: "ocupacao",
  },
  {
    slug: "/escada-pressurizada-shopping-sp",
    label: "Para Shopping",
    desc: "Shoppings e centros comerciais — adequação e AVCB.",
    icon: Building2,
    kind: "ocupacao",
  },
  {
    slug: "/escada-pressurizada-galpao-industrial-sp",
    label: "Para Galpão Industrial",
    desc: "Galpões, centros de distribuição e indústrias.",
    icon: Building2,
    kind: "ocupacao",
  },
];

function pickLinks(currentSlug: string) {
  const others = allPages.filter((p) => p.slug !== currentSlug);

  // Sempre aparece: custo (link fixo repetido)
  const custo = others.find((p) => p.kind === "custo");

  // Varia por contexto: dor/problema
  const slug = currentSlug.toLowerCase();
  let dor = others.find((p) => p.kind === "regularizacao");
  if (/manutencao|laudo|obrigatori/.test(slug)) dor = others.find((p) => p.kind === "projeto");
  if (/projeto|instalacao/.test(slug)) dor = others.find((p) => p.kind === "obrigatoriedade");
  if (/regularizacao/.test(slug)) dor = others.find((p) => p.kind === "manutencao");

  // Específico: ocupação (se for página de ocupação, mostra próxima; senão mostra condomínio)
  const ocupacoes = others.filter((p) => p.kind === "ocupacao");
  const isOcupacao = currentSlug.includes("condominio") || currentSlug.includes("hotel") ||
    currentSlug.includes("hospital") || currentSlug.includes("comercial") ||
    currentSlug.includes("shopping") || currentSlug.includes("galpao");
  let especifico: typeof allPages[0] | undefined;
  if (isOcupacao) {
    const idx = ocupacoes.findIndex((p) => p.slug === currentSlug);
    especifico = ocupacoes[(idx + 1) % ocupacoes.length];
  } else {
    especifico = ocupacoes[0];
  }

  // Restante das páginas (sem repetir os 3 acima)
  const featured = [custo, dor, especifico].filter(Boolean).map((p) => p!.slug);
  const extras = others.filter((p) => !featured.includes(p.slug)).slice(0, 4);

  return { featured: [custo, dor, especifico].filter(Boolean) as typeof allPages, extras };
}

export default function EscadaPressurizadaLinks({ currentSlug }: EscadaLinksProps) {
  const { featured, extras } = pickLinks(currentSlug);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">
            Silo de Escada Pressurizada — DRD2
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase italic tracking-tight leading-none mb-3">
            Tudo sobre escada pressurizada em São Paulo
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl">
            Projeto, laudo, instalação, manutenção e regularização de escada enclausurada pressurizada para AVCB — por tipo de edificação.
          </p>
        </div>

        {/* 3 links estratégicos: custo (fixo), dor (varia), ocupação (específica) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {featured.map(({ slug, label, desc, icon: Icon }, i) => (
            <Link
              key={slug}
              href={slug}
              className={`group rounded-2xl p-6 flex items-start gap-4 border transition-all shadow-sm hover:shadow-md ${
                i === 0
                  ? "bg-red-600 border-red-500 text-white hover:bg-red-700"
                  : "bg-white border-slate-200 hover:border-red-400"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                i === 0 ? "bg-white/20" : "bg-red-600/10"
              }`}>
                <Icon className={`w-5 h-5 ${i === 0 ? "text-white" : "text-red-600"}`} />
              </div>
              <div className="min-w-0">
                <p className={`font-black uppercase italic tracking-tight leading-tight mb-2 ${
                  i === 0 ? "text-white" : "text-slate-950"
                }`}>
                  {label}
                </p>
                <p className={`text-sm font-medium leading-relaxed ${
                  i === 0 ? "text-red-100" : "text-slate-500"
                }`}>
                  {desc}
                </p>
              </div>
              <ArrowRight className={`w-4 h-4 ml-auto mt-1 shrink-0 group-hover:translate-x-1 transition-transform ${
                i === 0 ? "text-white/70" : "text-slate-300 group-hover:text-red-600"
              }`} />
            </Link>
          ))}
        </div>

        {/* Demais páginas do silo */}
        {extras.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {extras.map(({ slug, label, icon: Icon }) => (
              <Link
                key={slug}
                href={slug}
                className="group bg-white border border-slate-200 hover:border-red-400 rounded-xl p-4 flex items-center gap-3 transition-all shadow-sm hover:shadow-md"
              >
                <Icon className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs font-black uppercase tracking-tight text-slate-700 group-hover:text-red-600 transition-colors leading-tight">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
