import Link from "next/link";
import { ArrowRight, Bell, Droplets, Flame, ShieldCheck, Wind, Wrench, Zap } from "lucide-react";

type ServiceClusterLinksProps = {
  currentSlug: string;
};

const cluster = [
  {
    slug: "/alarme-incendio-sao-paulo",
    label: "Alarme de incêndio",
    desc: "Detecção, botoeiras, sirenes e central com laudo para o AVCB.",
    Icon: Bell,
  },
  {
    slug: "/manutencao-alarme-de-incendio-sao-paulo",
    label: "Manutenção de alarme",
    desc: "Preventiva e corretiva de central, detectores, sirenes e botoeiras.",
    Icon: Wrench,
  },
  {
    slug: "/sprinklers",
    label: "SPK / Sprinklers",
    desc: "Chuveiros automáticos, VGA, cálculo hidráulico e ART.",
    Icon: Droplets,
  },
  {
    slug: "/hidrantes",
    label: "Hidrantes",
    desc: "Rede pressurizada, bombas, mangueiras e teste hidráulico.",
    Icon: Flame,
  },
  {
    slug: "/spda",
    label: "SPDA",
    desc: "Para-raios, aterramento, medição e laudo conforme NBR 5419.",
    Icon: Zap,
  },
  {
    slug: "/escada-pressurizada-sao-paulo",
    label: "Escada pressurizada",
    desc: "Projeto, laudo, vazão, ventilador e regularização para AVCB.",
    Icon: Wind,
  },
  {
    slug: "/laudo-estanqueidade-gas-sao-paulo",
    label: "Gas",
    desc: "Laudo de estanqueidade, GLP/GN e ART para regularizacao.",
    Icon: ShieldCheck,
  },
  {
    slug: "/treinamento-brigada",
    label: "Brigada",
    desc: "Treinamento, dimensionamento e certificado para o processo.",
    Icon: ShieldCheck,
  },
  {
    slug: "/manutencao",
    label: "Manutenção preventiva",
    desc: "Plano de manutenção dos sistemas que sustentam a validade do AVCB.",
    Icon: Wrench,
  },
];

const hub = {
  slug: "/avcb-sao-paulo",
  label: "AVCB em São Paulo",
  desc: "Hub central de regularização, projeto, vistoria e emissão do certificado.",
  Icon: ShieldCheck,
};

function nextService(currentSlug: string) {
  const index = cluster.findIndex((item) => item.slug === currentSlug);
  if (index < 0) return cluster[0];
  return cluster[(index + 1) % cluster.length];
}

export default function ServiceClusterLinks({ currentSlug }: ServiceClusterLinksProps) {
  const isHub = currentSlug === hub.slug || currentSlug === "/avcb";
  const isClusterService = cluster.some((item) => item.slug === currentSlug);
  const related = isHub ? cluster : [hub, nextService(currentSlug), ...cluster.filter((item) => item.slug !== currentSlug && item.slug !== nextService(currentSlug).slug).slice(0, 4)];
  const title = isHub
    ? "Cluster completo de segurança contra incêndio"
    : isClusterService
      ? "Este servico faz parte do cluster AVCB"
      : "Servicos técnicos ligados ao AVCB";
  const intro = isHub
    ? "O AVCB e a página pilar. Ele conecta os sistemas técnicos que o Corpo de Bombeiros verifica em projeto, vistoria e renovacao."
    : isClusterService
      ? "Nenhum sistema trabalha isolado. Para ganhar autoridade de tema e orientar o usuario, esta página aponta para o hub AVCB e para o proximo sistema técnico do silo."
      : "Esta página tambem faz parte do tema de regularização contra incêndio. Por isso, aponta para o hub AVCB e para os sistemas técnicos que sustentam a aprovação no Corpo de Bombeiros.";

  return (
    <section className="py-20 bg-slate-950 text-white border-y border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em]">Silo técnico DRD2</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mt-4 mb-5 leading-none">
              {title}
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              {intro}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map(({ slug, label, desc, Icon }, index) => {
              const primary = slug === hub.slug || (isHub && index === 0);
              return (
                <Link
                  key={slug}
                  href={slug}
                  className={`group border rounded-2xl p-5 flex items-start gap-4 transition-all ${
                    primary
                      ? "bg-red-600 border-red-500 hover:bg-red-700"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-red-500/50"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    primary ? "bg-white text-red-600" : "bg-red-600/15 text-red-500"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-black uppercase italic tracking-tight leading-tight mb-2">
                      {label}
                    </p>
                    <p className={`text-sm font-medium leading-relaxed ${primary ? "text-red-50" : "text-slate-400"}`}>
                      {desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto mt-1 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
