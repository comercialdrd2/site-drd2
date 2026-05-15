/**
 * InternalLinksBlock.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Componente reutilizável para exibir links internos naturais entre páginas
 * de bairro e ocupação. Consome o JSON gerado por generate-internal-links.js.
 *
 * Uso em páginas de OCUPAÇÃO:
 *   <InternalLinksBlock currentSlug="/avcb-para-condominio-sao-paulo" mode="ocupacao" />
 *
 * Uso em páginas de BAIRRO:
 *   <InternalLinksBlock currentSlug="/avcb-moema" mode="bairro" />
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Link from "next/link";
import linksData from "@/data/internalLinks.json";
import { MapPin, ArrowRight, Building2 } from "lucide-react";

interface InternalLinksBlockProps {
  currentSlug: string;
  mode: "ocupação" | "bairro" | "renovacao" | "servico";
  /** Máximo de links a exibir (padrão: 8) */
  maxLinks?: number;
  /** Título customizável da seção */
  titulo?: string;
}

export default function InternalLinksBlock({
  currentSlug,
  mode,
  maxLinks = 8,
  titulo,
}: InternalLinksBlockProps) {
  // ── Modo OCUPAÇÃO: exibe links para bairros relacionados ──────────────────
  if (mode === "ocupação") {
    const data = (linksData.ocupacaoParaBairros as Record<string, any>)[currentSlug];
    if (!data) return null;

    const links = data.links.slice(0, maxLinks);
    const tituloFinal = titulo ?? `Atendemos ${data.label} em toda São Paulo`;

    return (
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-1">
                Atendimento Regional
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">
                {tituloFinal}
              </h2>
            </div>
          </div>

          {/* Grid de bairros */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {links.map((link: any, i: number) => (
              <Link
                key={i}
                href={link.bairroSlug}
                title={`${data.label} em ${link.bairroLabel} — DRD2 Engenharia`}
                className="group flex items-center justify-between gap-2 bg-white border border-slate-200 hover:border-red-500 hover:bg-red-50 px-4 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-700 group-hover:text-red-700 font-bold text-xs uppercase tracking-tight truncate">
                    {link.bairroLabel}
                  </span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Texto de âncora natural — SEO contextual */}
          <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              A <strong className="text-slate-800">DRD2 Engenharia</strong> atende{" "}
              <strong className="text-red-600">{data.label.toLowerCase()}</strong> em toda
              a Grande São Paulo. Nosso engenheiro vai até o local para{" "}
              <strong className="text-slate-700">diagnóstico técnico gratuito</strong>,
              com relatório de pendências e proposta de regularização sem compromisso.{" "}
              <Link href="/contato" className="text-red-600 hover:underline font-bold">
                Solicite agora →
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ── Modo BAIRRO: exibe links para ocupações relacionadas ──────────────────
  if (mode === "bairro") {
    const data = (linksData.bairroParaOcupacoes as Record<string, any>)[currentSlug];
    if (!data) return null;

    const ocupacoes = data.ocupacoes.slice(0, maxLinks);
    const tituloFinal = titulo ?? `Serviços de AVCB em ${data.label}`;

    return (
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">
                Por Tipo de Imóvel
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">
                {tituloFinal}
              </h2>
            </div>
          </div>

          {/* Cards de ocupação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ocupacoes.map((ocup: any, i: number) => (
              <Link
                key={i}
                href={ocup.ocupacaoSlug}
                title={`${ocup.ocupacaoLabel} em ${data.label} — DRD2 Engenharia`}
                className="group flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 hover:border-red-500 hover:bg-white px-5 py-4 rounded-xl transition-all shadow-sm hover:shadow-lg"
              >
                <div className="min-w-0">
                  <p className="text-[10px] text-red-600 font-black uppercase tracking-widest mb-0.5">
                    Regularização
                  </p>
                  <p className="text-slate-800 group-hover:text-red-700 font-bold text-sm uppercase italic tracking-tight truncate">
                    {ocup.ocupacaoLabel}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Contexto semântico */}
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Atuamos em <strong className="text-red-600">{data.label}</strong> e região para
              regularização de AVCB, CLCB e Alvará do Corpo de Bombeiros em diferentes tipos
              de imóvel. Do galpão industrial ao consultório médico,{" "}
              <strong className="text-slate-800">a DRD2 emite o certificado do início ao fim</strong>.{" "}
              <Link href="/avcb-sao-paulo" className="text-red-600 hover:underline font-bold">
                Saiba mais sobre o processo →
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
