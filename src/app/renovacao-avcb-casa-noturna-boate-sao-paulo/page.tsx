import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  ShieldX, AlertTriangle, MapPin, Music, Martini, Users,
  ClipboardList, Hammer, LayoutGrid, Clock
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { renovacaoAvcbCasaNoturnaContent as c } from "@/data/pages/renovacao-avcb-casa-noturna-boate-sao-paulo";
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

export default function RenovacaoAVCBCasaNoturnaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/renovacao-avcb-casa-noturna-boate-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Renovação de AVCB para Casas Noturnas e Boates em São Paulo",
        faqs: c.faq.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Renovação de AVCB para Casas Noturnas", item: "/renovacao-avcb-casa-noturna-boate-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/hero-casa-noturna.webp"
          alt="Renovação de AVCB para Casas Noturnas e Boates em São Paulo"
          fill
          className="object-cover object-center opacity-40 grayscale-[30%]"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              {c.badge}
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                RENOVAÇÃO DE AVCB
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                PARA CASAS NOTURNAS<br className="hidden sm:block" /> E BOATES EM SP
              </span>
            </h1>
            <div className="mb-4">
                <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium max-w-2xl text-balance border-l-4 border-red-600 pl-6 py-1" dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            </div>
            <div className="block mt-4">
              <a 
                href={whatsappLink} 
                className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
              >
                <Phone className="w-5 h-5 flex-shrink-0" /> 
                <span className="sm:whitespace-nowrap font-black">FALAR COM ENGENHEIRO AGORA</span>
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
          { label: "Renovação de AVCB para Casas Noturnas em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── CONTEXTO (Abaixo da Dobra) ── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center text-balance">
            <div className="space-y-6 text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: c.intro[1] }} />
                <p dangerouslySetInnerHTML={{ __html: c.intro[2] }} />
            </div>
        </div>
      </section>

      {/* ── H2 #1: FISCALIZAÇÃO RIGOROSA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-balance">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                {c.sections[0].title}
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                {c.sections[0].content.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full text-balance">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic leading-tight">
                  Sua boate está com <span className="text-red-600">AVCB Vencido?</span>
                </h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #2: MOTIVOS DE COMUNIQUE-SE ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none" dangerouslySetInnerHTML={{ __html: c.sections[1].title }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.sections[1].content.map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg mb-2 italic uppercase tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: item.split(': ')[0] }} />
                    <p className="text-slate-400 font-medium leading-relaxed text-sm italic" dangerouslySetInnerHTML={{ __html: item.split(': ')[1] }} />
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
            Não arrisque a interdição da sua casa noturna. Fale agora com a DRD2 Engenharia.
          </p>
          <CtaWhatsApp
            label="Solicitar vistoria diagnóstica gratuita"
            occupationType="casa noturna"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #3: INSTRUÇÕES TÉCNICAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none" dangerouslySetInnerHTML={{ __html: c.sections[2].title }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.sections[2].content.map((p, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-base mb-1 italic uppercase tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: p.split(': ')[0] }} />
                    <p className="text-slate-600 font-medium leading-relaxed text-sm italic" dangerouslySetInnerHTML={{ __html: p.split(': ')[1] || "" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #4: CAPACIDADE DE PÚBLICO ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <Image
          src="/images/hero-boate.webp"
          alt="Capacidade de público casa noturna"
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
        />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic leading-none" dangerouslySetInnerHTML={{ __html: c.sections[3].title }} />
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-medium italic">
                {c.sections[3].content.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-[3rem] p-10 border border-white/10 backdrop-blur-md">
                <Users className="w-16 h-16 text-red-600 mb-6" />
                <p className="text-2xl font-black text-white italic uppercase tracking-tighter leading-tight mb-4">
                    Ocupação máxima é lei.
                </p>
                <p className="text-slate-400 font-medium italic mb-8">
                    Operar acima do limite aprovado no AVCB é o motivo nº 1 de lacre imediato pela prefeitura e bombeiros em São Paulo.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-bold text-white uppercase italic">Cálculo pela IT-08</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-bold text-white uppercase italic">Adequação de Layout</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-bold text-white uppercase italic">Memorial Descritivo</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #5: O QUE ENTREGAMOS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none" dangerouslySetInnerHTML={{ __html: c.sections[4].title }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {c.sections[4].content.map((item, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 group hover:bg-slate-900 hover:text-white transition-all duration-500">
                        <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-600/20 group-hover:bg-white group-hover:shadow-none transition-colors">
                            {[<ClipboardList key={1} className="w-6 h-6 text-white group-hover:text-slate-900" />, <LayoutGrid key={2} className="w-6 h-6 text-white group-hover:text-slate-900" />, <Hammer key={3} className="w-6 h-6 text-white group-hover:text-slate-900" />, <ShieldCheck key={4} className="w-6 h-6 text-white group-hover:text-slate-900" />][i]}
                        </div>
                        <p className="font-black text-lg uppercase italic tracking-tight leading-tight mb-3" dangerouslySetInnerHTML={{ __html: item.split(': ')[0] }} />
                        <p className="text-slate-600 group-hover:text-slate-400 font-medium text-sm leading-relaxed italic" dangerouslySetInnerHTML={{ __html: item.split(': ')[1] }} />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ── H2 #6: VALIDADE ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                <Clock className="absolute -bottom-10 -right-10 w-64 h-64 text-red-600 opacity-10" />
                <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic leading-none relative z-10" dangerouslySetInnerHTML={{ __html: c.sections[5].title }} />
                <div className="space-y-6 relative z-10 text-lg text-slate-300 leading-relaxed font-medium italic">
                    {c.sections[5].content.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter leading-tight">
                    Não espere o <span className="text-red-600">AVCB vencer.</span>
                </h3>
                <p className="text-lg text-slate-600 font-medium italic mb-8">
                    O processo de renovação deve ser iniciado com antecedência mínima de 60 a 90 dias antes do vencimento para evitar que sua casa noturna opere na ilegalidade.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <MapPin className="w-8 h-8 text-red-600 shrink-0" />
                        <div>
                            <p className="font-black text-slate-900 uppercase italic text-sm tracking-tight">Atendimento Imediato</p>
                            <p className="text-slate-600 text-xs font-medium italic">São Paulo e toda Grande SP</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic leading-none">
                Perguntas Frequentes — <span className="text-red-600">Renovação de AVCB para Casa Noturna em SP</span>
            </h2>
          </div>
          <div className="space-y-4">
            {c.faq.map((faq, i) => (
              <details
                key={i}
                className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-white"
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

      {/* ── RESULTADOS ── */}
      <section className="py-24 bg-slate-950 text-center border-y border-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <p className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Proteja seu faturamento e sua licença.
          </p>
          <p className="text-xl text-slate-400 font-medium mb-10 italic">
            Fale com um engenheiro e receba seu diagnóstico de renovação hoje mesmo.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista no WhatsApp"
            occupationType="casa noturna"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Casa Noturna Boate"
        currentSlug="/renovacao-avcb-casa-noturna-boate-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Casa Noturna Boate"
        currentSlug="/renovacao-avcb-casa-noturna-boate-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/renovacao-avcb-casa-noturna-boate-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="Renovação de AVCB para Casas Noturnas"
      />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-casa-noturna-boate-sao-paulo" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-casa-noturna-boate-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/renovacao-avcb-casa-noturna-boate-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-950 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            RENOVE O AVCB DA SUA BOATE <br/> <span className="text-slate-950 not-italic">COM QUEM ENTENDE DE GRUPO F-3</span>
          </h2>
          <p className="text-xl text-red-50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            A DRD2 Engenharia cuida de tudo: do laudo de capacidade à aprovação final no Corpo de Bombeiros.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-2xl shadow-2xl hover:bg-slate-950 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline" /> CHAMAR AGORA NO WHATSAPP
          </a>
          <p className="mt-10 text-[10px] font-black uppercase tracking-[0.4em] text-red-200 opacity-60 italic">
            DRD2 ENGENHARIA — ESPECIALISTA EM RENOVAÇÃO DE AVCB PARA CASAS NOTURNAS EM SÃO PAULO
          </p>
        </div>
      </section>

    </>
  );
}
