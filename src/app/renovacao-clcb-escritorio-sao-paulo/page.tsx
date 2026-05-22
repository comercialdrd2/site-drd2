import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight,
  ShieldX, Briefcase, Monitor, AlertTriangle,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { OccupationAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { renovacaoClcbEscritorioContent as c } from "@/data/pages/renovacao-clcb-escritorio-sao-paulo";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: c.meta.canonical,
  },
};

export default function RenovacaoCLCBEscritorioPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: "/renovacao-clcb-escritorio-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Renovação de CLCB para Escritório em São Paulo",
        faqs: c.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Renovação CLCB", item: "/renovacao-clcb-sao-paulo" },
          { name: "Escritório e Sala Comercial", item: "/renovacao-clcb-escritorio-sao-paulo" },
        ],
      })} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB para Escritório em São Paulo — DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              {c.badge}
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                RENOVAÇÃO DE CLCB — ESCRITÓRIO E SALA COMERCIAL
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                CLCB VENCIDO? EVITE INTERDIÇÃO E PERDA DE CONTRATOS
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              {c.intro[0]}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>FALAR COM ENGENHEIRO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Renovação CLCB", href: "/renovacao-clcb-sao-paulo" },
          { label: "Escritório e Sala Comercial" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── INTRO + FORM ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
              <p>{c.intro[1]}</p>
              <div className="flex items-start gap-4 bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <AlertTriangle className="text-amber-600 w-8 h-8 flex-shrink-0 mt-0.5" />
                <p className="text-amber-900 font-bold text-base leading-relaxed">
                  CLCB vencido pode inviabilizar licitações, contratos corporativos e credenciamentos que exigem documentação de regularidade da empresa. Não espere a fiscalização — regularize antes que o certificado vença.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl sticky top-32">
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tight">
                  Diagnóstico <span className="text-red-600">Gratuito</span>
                </h3>
                <p className="text-slate-500 font-medium mb-6 text-sm">Preencha e um engenheiro entra em contato em até 2 horas.</p>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 1: POR QUE RENOVAR NO PRAZO ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-10 uppercase italic tracking-tighter text-center">
            {c.sections[0].title}
          </h2>
          <div className="space-y-5">
            {c.sections[0].content.map((p, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <ShieldX className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 font-medium leading-relaxed text-base">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <div className="py-14 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            CLCB do seu escritório vencido? Fale agora e receba diagnóstico gratuito.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="escritório em São Paulo"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── SEÇÃO 2: PRINCIPAIS PENDÊNCIAS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter text-center">
            {c.sections[1].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.sections[1].content.map((item, i) => {
              const colonIdx = item.indexOf(": ");
              const titulo = item.slice(0, colonIdx);
              const desc = item.slice(colonIdx + 2);
              return (
                <div key={i} className="bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:border-red-600/30 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldAlert className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-sm uppercase italic tracking-tight mb-2">{titulo}</p>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3: COMO A DRD2 RENOVA ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase italic tracking-tighter text-center">
            {c.sections[2].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.sections[2].content.map((etapa, i) => {
              const dotIndex = etapa.indexOf(". ");
              const num = etapa.slice(0, dotIndex);
              const rest = etapa.slice(dotIndex + 2);
              const colonIndex = rest.indexOf(": ");
              const titulo = rest.slice(0, colonIndex);
              const desc = rest.slice(colonIndex + 2);
              return (
                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden group">
                  <span className="text-6xl font-black text-red-600/10 absolute bottom-[-8px] right-[4px] leading-none select-none pointer-events-none group-hover:text-red-600/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2 relative z-10">{num}</p>
                  <h3 className="font-black text-white text-base uppercase italic mb-3 relative z-10">{titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium relative z-10">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic tracking-tight">
                Por que escolher a DRD2 para o seu escritório?
              </h2>
              <div className="space-y-4">
                {[
                  "Especialistas em CLCB para escritórios e salas comerciais",
                  "Diagnóstico técnico gratuito sem enquadramentos errados",
                  "Adequações executadas sem interromper as atividades",
                  "Documentação para compliance corporativo e licitações",
                  "Resposta rápida a exigências do CBPMESP",
                  "Atendimento em toda a Grande SP e interior",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Briefcase, l: "Escritórios Corporativos" },
                { Icon: Monitor, l: "Agências e Startups" },
                { Icon: Briefcase, l: "Salas de Coworking" },
                { Icon: Monitor, l: "Ateliês e Estúdios" },
              ].map(({ Icon, l }, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-3">
                  <Icon className="w-8 h-8 text-red-600" />
                  <span className="font-black text-slate-800 text-xs uppercase italic tracking-tight">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-red-600">CLCB para Escritório</span>
          </h2>
          <div className="space-y-4">
            {c.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl p-8 border border-slate-100 cursor-pointer open:ring-4 open:ring-red-600/10 transition-all">
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <p className="mt-6 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-6 italic">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Páginas Relacionadas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {c.linksInternos.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 bg-slate-50 hover:bg-red-600 hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-red-600 transition-all text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceClusterLinks currentSlug="/renovacao-clcb-escritorio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/renovacao-clcb-escritorio-sao-paulo" />
      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/renovacao-clcb-escritorio-sao-paulo" />

      <OccupationAuthorityBlock occupation="Escritório" currentSlug="/renovacao-clcb-escritorio-sao-paulo" />
      <OccupationDepthBlock occupation="Escritório" currentSlug="/renovacao-clcb-escritorio-sao-paulo" />
      <InternalLinksBlock currentSlug="/renovacao-clcb-escritorio-sao-paulo" mode="ocupação" maxLinks={8} titulo="Renovação de CLCB para Escritório em São Paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight italic">
            CLCB do seu escritório vencido ou próximo do vencimento?
          </h2>
          <p className="text-xl mb-10 font-bold opacity-95 max-w-3xl mx-auto italic leading-relaxed border-b border-white/20 pb-10">
            A DRD2 renova sem interromper suas atividades — do diagnóstico à entrega do certificado.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-7 h-7" /> Agendar Diagnóstico Gratuito
          </a>
          <p className="mt-10 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">
            Atendemos toda a Grande São Paulo e Interior — Decreto 69.118/2024
          </p>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
