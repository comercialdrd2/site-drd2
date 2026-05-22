import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  ShieldX, AlertTriangle, Clock, MapPin, Users, FileText,
  Calendar, Home, Wrench, Flame, ChefHat, Store,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { renovacaoAvcbRestauranteContent as c } from "@/data/pages/renovacao-avcb-restaurante-sao-paulo";
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

export default function RenovacaoAVCBRestaurantePage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/renovacao-avcb-restaurante-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Renovação de AVCB para Restaurante em São Paulo",
        faqs: c.h2_faq.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Renovação de AVCB para Restaurante", item: "/renovacao-avcb-restaurante-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/bg-restaurante.jpg"
          alt="Renovação de AVCB"
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
              Uso Comercial — Alimentação — Renovação 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              
              <span className="text-white">RENOVAÇÃO DE AVCB</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                PARA RESTAURANTE EM SP
              </span>
            
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl" dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366] w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" /> QUERO RENOVAR DO MEU RESTAURANTE
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
          { label: "Renovação de AVCB para Restaurante em SP" },
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
                Por que o AVCB do Restaurante{" "}
                <span className="text-red-600 not-italic font-black italic">Vence com Frequência?</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                {c.h2_porqueVence.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {c.h2_porqueVence.motivos.map((motivo, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium leading-relaxed">{motivo}</span>
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

      {/* ── H2 #2: RISCOS PARA O DONO ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Quais são os Riscos para o Dono do Restaurante com{" "}
              <span className="text-red-600 not-italic">AVCB Vencido?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.h2_riscos.itens.map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <div className="flex flex-col items-start gap-5">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 mb-2">
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
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            AVCB vencido? O alvará e a licença sanitária do seu restaurante estão em risco.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico de renovação gratuito"
            occupationType="restaurante"
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
              <span className="text-red-600 not-italic">Renovação do AVCB do Restaurante?</span>
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

      {/* ── H2 #4: IMPACTO MÍNIMO E SHOPPING ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                Renovação com <span className="text-red-600 not-italic">Impacto Mínimo</span> na Operação
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10" dangerouslySetInnerHTML={{ __html: c.h2_impacto.intro }} />
              <div className="space-y-6">
                {c.h2_impacto.itens.map((tipo, i) => (
                  <div key={i} className="flex items-start gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black mb-1">{tipo.titulo}</p>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm">{tipo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-10 text-white">
              <div className="flex items-center gap-4 mb-8">
                <Store className="w-10 h-10 text-red-500 flex-shrink-0" />
                <h3 className="font-black text-2xl uppercase italic tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: c.h2_shopping.heading }} />
              </div>
              <p className="text-slate-300 font-medium mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.h2_shopping.intro }} />
              {c.h2_shopping.itens.map((cenario, i) => (
                <div key={i} className="mb-6 pb-6 border-b border-white/10 last:border-0 last:mb-0 last:pb-0">
                  <p className="font-black text-white text-base mb-2">{cenario.titulo}</p>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">{cenario.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #5: COMO A DRD2 CONDUZ (ETAPAS) ── */}
      <section className="py-24 bg-red-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic text-white drop-shadow-md">
              Como a DRD2 Conduz a Renovação do AVCB do seu Restaurante
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.h2_etapas.etapas.map((etapa, i) => (
              <div key={i} className="bg-slate-900 rounded-[2rem] p-8 border border-white/10 shadow-2xl hover:-translate-y-1 transition-transform">
                <div className="text-red-500 font-black text-sm uppercase tracking-widest mb-4">Etapa {i + 1}</div>
                <h3 className="text-white font-black text-xl mb-3 leading-tight">{etapa.nome.split("—")[1]?.trim() || etapa.nome}</h3>
                <p className="text-slate-300 font-medium text-sm leading-relaxed">{etapa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-16 border-b bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-2xl font-black uppercase italic tracking-tight mb-6">
            Seu restaurante precisa estar legalizado para funcionar e faturar.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista em restaurantes"
            occupationType="restaurante"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #6: COBERTURA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
                {c.h2_cobertura.heading.split("São Paulo")[0]}
                <span className="text-red-600 not-italic">São Paulo e Grande SP</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                {c.h2_cobertura.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 rounded-[3rem] p-10 text-white">
              <div className="flex items-center gap-4 mb-8">
                <MapPin className="w-10 h-10 text-red-600 flex-shrink-0" />
                <p className="font-black text-xl uppercase italic">Regiões Atendidas</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Moema / Saúde / Vila Mariana",
                  "Santana / Tucuruvi",
                  "Tatuapé / Mooca / Penha",
                  "Pinheiros / Perdizes / Lapa",
                  "Jardins / Itaim Bibi",
                  "Bela Vista / Liberdade",
                  "Guarulhos / Osasco",
                  "Santo André / São Bernardo",
                  "São Caetano / Barueri",
                  "Mauá / Diadema",
                ].map((reg, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-200 font-medium text-sm">{reg}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-400 text-sm font-medium italic">+ toda a Grande São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #7: FAQ ── */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes —{" "}
              <span className="text-red-600 not-italic font-black italic uppercase">Renovação de AVCB para Restaurante SP</span>
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
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-slate-400 mb-8">
            Saiba mais sobre nossos serviços
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {c.linksInternos.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 bg-white hover:bg-red-600 hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-red-600 transition-all text-sm"
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
            Não perca faturamento por interdição. Renove seu AVCB com segurança.
          </p>
          <p className="text-xl text-slate-300 font-medium mb-10 italic">
            Fale com um engenheiro especialista em restaurantes e receba seu diagnóstico gratuito.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista no WhatsApp"
            occupationType="restaurante"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Restaurante"
        currentSlug="/renovacao-avcb-restaurante-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Restaurante"
        currentSlug="/renovacao-avcb-restaurante-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/renovacao-avcb-restaurante-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="Renovação de AVCB para Restaurantes"
      />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-restaurante-sao-paulo" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-restaurante-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/renovacao-avcb-restaurante-sao-paulo" />

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
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline" /> {c.ctaFinal.cta.replace("📲 ", "")}
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">
            DRD2 Engenharia — Renovação de AVCB para Restaurantes em São Paulo — Decreto 69.118/2024
          </p>
        </div>
      </section>

    </>
  );
}



