import Link from "next/link";
import { BadgeCheck, Building2, ClipboardCheck, FileCheck2, MapPin, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

type TrustItem = {
  icon: typeof ShieldCheck;
  title: string;
  text: ReactNode;
};

const trustItems: TrustItem[] = [
  {
    icon: ShieldCheck,
    title: "Responsavel técnico",
    text: (
      <>
        Eng. Samuel Costa,{" "}
        <a
          href="https://www.creasp.org.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 font-black hover:underline focus:underline"
          title="Verificar registro CREA-SP 5070163570 no site oficial"
        >
          CREA-SP 5070163570
        </a>
        , responsavel por análises, laudos e acompanhamento técnico.
      </>
    ),
  },
  {
    icon: Building2,
    title: "Empresa identificada",
    text: "DRD2 Engenharia LTDA, CNPJ 51.774.619/0001-94, base operacional em Sao Paulo capital.",
  },
  {
    icon: ClipboardCheck,
    title: "Metodo de aprovação",
    text: "Diagnóstico, conferencia documental, adequacoes, protocolo no Via Fácil Bombeiros e resposta a Comunique-se.",
  },
  {
    icon: FileCheck2,
    title: "Escopo técnico",
    text: "AVCB, CLCB, renovacao, projeto técnico, hidrantes, sprinklers, alarme, SPDA, gas e brigada.",
  },
];

export default function TechnicalTrustBlock() {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em]">EEAT técnico</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mt-4 mb-5">
              Engenharia identificada, processo rastreavel e atendimento local
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Paginas de AVCB precisam provar quem assina, onde atende e como conduz o processo. A DRD2 deixa essas
              informacoes visiveis para reduzir risco comercial, aumentar confianca e fortalecer a entidade local.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/sobre" className="inline-flex items-center gap-2 bg-slate-950 text-white px-5 py-3 rounded-xl text-xs font-black uppercase">
                <BadgeCheck className="w-4 h-4 text-red-500" />
                Ver empresa
              </Link>
              <Link href="/contato" className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl text-xs font-black uppercase">
                <MapPin className="w-4 h-4" />
                Solicitar diagnóstico
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustItems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 font-bold leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
