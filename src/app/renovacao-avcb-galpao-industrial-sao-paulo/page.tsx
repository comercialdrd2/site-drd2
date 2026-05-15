import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  ShieldX, AlertTriangle, MapPin, Factory, Activity, Zap, Users
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { renovacaoAvcbGalpaoContent as c } from "@/data/pages/renovacao-avcb-galpao-industrial-sao-paulo";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: c.meta.canonical,
  },
};

export default function RenovacaoAVCBGalpaoPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/renovacao-avcb-galpao-industrial-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Renovação de AVCB para Galpão Industrial em São Paulo",
        faqs: c.h2_faq.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Renovação de AVCB para Galpão", item: "/renovacao-avcb-galpao-industrial-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[500px] lg:min-h-[600px] pt-[100px] pb-[60px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/bg-galpao.jpg"
          alt="Renovação de AVCB para Galpão Industrial"
          fill
          className="object-cover object-center opacity-40"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg shadow-red-900/20">
              Setor Industrial — Renovação 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">RENOVAÇÃO DE AVCB</span>
              <span className="text-red-600 not-italic mt-1 block drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                PARA GALPÃO INDUSTRIAL
              </span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-tight font-black max-w-2xl border-l-4 border-red-600 pl-5 italic drop-shadow-lg">
                AVCB do galpão vencido? Cada dia irregular é risco real de interdição — produção parada, entregas atrasadas e contratos descumpridos.
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold max-w-2xl drop-shadow-md">
                A DRD2 renova com resposta incluída a qualquer Comunique-se, sem custo adicional. Blindamos sua operação fabril e logística.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="animate-alert-pulse bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white text-white font-black px-8 py-4 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366] w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" /> FALAR COM ENGENHEIRO AGORA
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-widest bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-white/10 inline-flex">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-red-600 bg-slate-800 flex items-center justify-center overflow-hidden">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="drop-shadow-md">+1.200 Indústrias & Galpões Regularizados pela DRD2</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Renovação de AVCB para Galpão Industrial em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── H2 #1: POR QUE VENCE? ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Por que o AVCB do Galpão{" "}
                <span className="text-red-600 not-italic font-black italic">Vence sem que o Gestor Perceba?</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: c.h2_porqueVence.intro }} />
                {c.h2_porqueVence.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-6 font-bold text-slate-900">Situações que complicam a renovação de galpões:</p>
              <ul className="mt-3 space-y-3">
                {c.h2_porqueVence.complicadores.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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

      {/* ── H2 #2: RISCOS ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Quais são os Riscos para o Gestor do Galpão com{" "}
              <span className="text-red-600 not-italic">AVCB Vencido?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.h2_riscos.riscos.map((item, i) => (
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

      {/* ── CTA INTERMEDIÁRIO 1 ── */}
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Não corra o risco de interdição. Fale com um engenheiro especialista.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico para Galpão"
            occupationType="galpao-industrial"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #3: O QUE É VERIFICADO ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              O que é Verificado na{" "}
              <span className="text-red-600 not-italic">Renovação do AVCB do Galpão?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_verificado.intro }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.h2_verificado.pontos.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-base mb-2">{p.nome}</p>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #4: TROCA DE LOCATÁRIO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                {c.h2_locatário.heading.replace(" — Atenção Especial na Renovação", "")} —{" "}
                <span className="text-red-600 not-italic">Atenção Especial na Renovação</span>
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10" dangerouslySetInnerHTML={{ __html: c.h2_locatário.intro }} />
              <div className="space-y-6">
                {c.h2_locatário.cenarios.map((cenario, i) => (
                  <div key={i} className="flex items-start gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black mb-1">{cenario.nome}</p>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm">{cenario.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-slate-900 font-bold border-l-4 border-red-600 pl-5 italic" dangerouslySetInnerHTML={{ __html: c.h2_locatário.closing }} />
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
               <Factory className="absolute -bottom-10 -right-10 w-64 h-64 text-red-600 opacity-10" />
               <h3 className="font-black text-2xl uppercase italic mb-6 relative z-10">
                {c.h2_condomínio.heading.replace(" — Como Funciona a Renovação", "")}
              </h3>
              <p className="text-slate-400 mb-8 relative z-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.h2_condomínio.intro }} />
              <ul className="space-y-6 relative z-10">
                {c.h2_condomínio.cenarios.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                        <span className="text-white font-bold block mb-1">{item.nome}</span>
                        <span className="text-slate-400 font-medium text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Aumentou a área ou trocou o uso do galpão? Seu AVCB pode estar desatualizado.
          </p>
          <CtaWhatsApp
            label="Consultar um engenheiro gratuitamente"
            occupationType="galpao-industrial"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #5: PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Como a DRD2 Conduz a Renovação do{" "}
              <span className="text-red-600 not-italic">AVCB do seu Galpão</span>
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

      {/* ── H2 #6: COBERTURA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
                Atendemos Renovações de AVCB em Galpões em{" "}
                <span className="text-red-600 not-italic">São Paulo e Grande SP</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: c.h2_cobertura.intro }} />
              </div>
            </div>
            <div className="bg-slate-950 rounded-[3rem] p-10 text-white">
              <div className="flex items-center gap-4 mb-8">
                <MapPin className="w-10 h-10 text-red-600 flex-shrink-0" />
                <p className="font-black text-xl uppercase italic">Regiões Atendidas</p>
              </div>
              <div className="space-y-4">
                {c.h2_cobertura.regioes.map((reg, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-200 font-medium text-sm leading-relaxed">{reg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #7: FAQ ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes —{" "}
              <span className="text-red-600 not-italic font-black italic uppercase">Renovação para Galpão Industrial</span>
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
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-slate-400 mb-8">
            Saiba mais sobre nossos serviços
          </p>
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

      {/* ── RESULTADOS ── */}
      <section className="py-24 bg-slate-900 text-center border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <p className="text-2xl md:text-4xl font-black uppercase italic tracking-tight mb-6">
            Não deixe sua operação industrial parar por falta de AVCB.
          </p>
          <p className="text-xl text-slate-300 font-medium mb-10 italic">
            Fale com um engenheiro e receba seu diagnóstico gratuito hoje.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista no WhatsApp"
            occupationType="galpao-industrial"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Galpao Industrial"
        currentSlug="/renovacao-avcb-galpao-industrial-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Galpao Industrial"
        currentSlug="/renovacao-avcb-galpao-industrial-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/renovacao-avcb-galpao-industrial-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="Renovação de AVCB para Galpões Industriais"
      />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-galpao-industrial-sao-paulo" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-galpao-industrial-sao-paulo" />

      <NeighborhoodSilo currentSlug="/renovacao-avcb-galpao-industrial-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]" dangerouslySetInnerHTML={{ __html: c.ctaFinal.heading }} />
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic" dangerouslySetInnerHTML={{ __html: c.ctaFinal.body }} />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-2xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline" /> {c.ctaFinal.cta.replace("📲 ", "")}
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">
            DRD2 Engenharia — Renovação de AVCB para Galpão Industrial em SP
          </p>
        </div>
      </section>

    </>
  );
}



