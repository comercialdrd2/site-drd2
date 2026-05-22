import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  ShieldX, AlertTriangle, MapPin, Clock, Zap,
  Building2, Utensils, Dumbbell, Church, HeartPulse, BookOpen, Scissors, Briefcase,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { renovacaoClcbContent as c } from "@/data/pages/renovacao-clcb-sao-paulo";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: c.meta.canonical,
  },
};

const occupationIcons: Record<string, any> = {
  "Renovação para Comércio e Lojas": Building2,
  "Renovação para Consultório e Clínica": HeartPulse,
  "Renovação para Salão de Beleza": Scissors,
  "Renovação para Restaurante e Lanchonete": Utensils,
  "Renovação para Escritório": Briefcase,
  "Renovação para Academia": Dumbbell,
  "Renovação para Igreja e Templo": Church,
  "Renovação para Escola e Creche": BookOpen,
};

export default function RenovacaoCLCBPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: "/renovacao-clcb-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Renovação de CLCB em São Paulo",
        faqs: c.h2_faq.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Renovação de CLCB em São Paulo", item: "/renovacao-clcb-sao-paulo" },
        ],
      })} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB em São Paulo — DRD2 Engenharia"
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
              Certificado do Corpo de Bombeiros — São Paulo 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">RENOVAÇÃO DE CLCB</span>
              <span className="text-red-600 not-italic text-2xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl text-wrap">
                EM SÃO PAULO — CLCB VENCIDO? EVITE INTERDIÇÃO E MULTA
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              {c.intro[0]}
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-medium max-w-2xl">
              {c.intro[1]}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={whatsappLink}
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366] w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" /> FALAR COM ENGENHEIRO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Renovação de CLCB em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── H2 #1: PRAZO DE VALIDADE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                {c.h2_prazo.heading}
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p>{c.h2_prazo.body}</p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">
                  Diagnóstico <span className="text-red-600">Gratuito</span>
                </h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #2: O QUE ACONTECE ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              {c.h2_acontece.heading}
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-3xl mx-auto">{c.h2_acontece.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.h2_acontece.itens.map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShieldX className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg mb-2">{item.titulo}</p>
                    <p className="text-slate-400 font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            CLCB vencido? Fale agora com um engenheiro pelo WhatsApp e receba o diagnóstico gratuito.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="geral"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #3: RENOVAÇÃO VS PRIMEIRA VEZ ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic text-balance">
              {c.h2_primeiraVez.heading}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium mb-6">
              {c.h2_primeiraVez.body1}
            </p>
            <p className="text-xl text-red-600 font-black uppercase tracking-tight italic">
              {c.h2_primeiraVez.body2}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {c.h2_primeiraVez.itens.map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <ShieldAlert className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-base mb-2 uppercase italic">{item.titulo}</p>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-red-600/10 p-8 rounded-3xl border-l-8 border-red-600">
            <p className="text-slate-900 font-bold italic text-lg leading-relaxed">{c.h2_primeiraVez.closing}</p>
          </div>
        </div>
      </section>

      {/* ── H2 #4: COMO FUNCIONA ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              {c.h2_processo.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.h2_processo.etapas.map((e, i) => (
              <div key={i} className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
                <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] group-hover:text-red-600/20 transition-colors leading-none select-none pointer-events-none z-0 opacity-[0.12]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">{e.numero}</p>
                <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic tracking-tight">{e.titulo}</h3>
                <p className="relative z-10 text-gray-400 leading-relaxed font-medium text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #5: QUANDO INICIAR ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
                {c.h2_quando.heading}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">{c.h2_quando.body1}</p>
                <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
                  <div className="flex items-center gap-4 mb-4">
                    <AlertTriangle className="text-amber-600 w-8 h-8" />
                    <span className="text-amber-900 font-black uppercase italic text-lg leading-tight">Urgência na Regularização</span>
                  </div>
                  <p className="text-amber-900 font-medium leading-relaxed italic">{c.h2_quando.body2}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
              <Clock className="absolute -bottom-10 -right-10 w-64 h-64 text-red-600 opacity-10" />
              <h3 className="font-black text-2xl uppercase italic mb-6 relative z-10">
                Resumo Cronológico
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  { t: "60 dias antes", d: "Início recomendado do diagnóstico" },
                  { t: "30 dias antes", d: "Execução de adequações e protocolo" },
                  { t: "CLCB Vencido", d: "Risco imediato de interdição e multa" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-black block text-base mb-1 uppercase italic tracking-tight">{item.t}</span>
                      <span className="text-slate-400 font-medium text-sm">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #6: TIPOS DE ESTABELECIMENTO ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
            {c.h2_tipos.heading}
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium">
            {c.h2_tipos.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.h2_tipos.tipos.map((tipo, i) => {
              const Icon = occupationIcons[tipo.nome] || Building2;
              return (
                <Link
                  key={i}
                  href={tipo.href}
                  className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-red-600 hover:shadow-xl transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-slate-50 group-hover:bg-red-600 transition-colors rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-900 font-black uppercase italic tracking-tight text-sm text-left">{tipo.nome}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── H2 #7: POR QUE ESCOLHER DRD2 ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-none">
                {c.h2_escolher.heading}
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium italic">
                <p>{c.h2_escolher.body1}</p>
                <p>{c.h2_escolher.body2}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Aprovação conduzida por engenharia", i: ShieldCheck },
                { l: "Processo Simplificado CLCB", i: Zap },
                { l: "Diagnóstico Grátis", i: CheckCircle2 },
                { l: "Time Próprio", i: Phone },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
                  <item.i className="w-10 h-10 text-red-600 mb-4" />
                  <span className="text-slate-900 font-black uppercase italic tracking-tight text-xs leading-tight">{item.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #8: COBERTURA ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                {c.h2_cobertura.heading}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <MapPin className="text-red-600 w-8 h-8 flex-shrink-0" />
                  <p className="text-gray-300 font-medium leading-relaxed">{c.h2_cobertura.body1}</p>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <MapPin className="text-red-600 w-8 h-8 flex-shrink-0" />
                  <p className="text-gray-300 font-medium leading-relaxed">{c.h2_cobertura.body2}</p>
                </div>
              </div>
            </div>
            <div className="bg-red-600 p-10 rounded-[3rem] shadow-2xl">
              <h3 className="font-black text-2xl uppercase italic mb-6">Unidade São Paulo</h3>
              <p className="text-red-100 font-bold mb-8 leading-relaxed italic">
                Atendimento especializado para renovação de CLCB em todas as regiões metropolitanas.
              </p>
              <CtaWhatsApp
                label="Falar com Unidade SP"
                occupationType="geral"
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #9: FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes sobre Renovação de CLCB
            </h2>
          </div>
          <div className="space-y-4">
            {c.h2_faq.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50"
              >
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Links Relacionados</p>
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

      <ServiceClusterLinks currentSlug="/renovacao-clcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/renovacao-clcb-sao-paulo" />
      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/renovacao-clcb-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            {c.ctaFinal.heading}
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            {c.ctaFinal.body}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-2xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline" /> {c.ctaFinal.cta}
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">
            DRD2 Engenharia — Especialista em Renovação de CLCB — Decreto 69.118/2024
          </p>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
