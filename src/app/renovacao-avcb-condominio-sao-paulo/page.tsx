import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  ShieldX, AlertTriangle, Clock, MapPin, Users, FileText,
  Calendar, Home, Wrench,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { renovacaoAvcbCondominioContent as c } from "@/data/pages/renovacao-avcb-condominio-sao-paulo";
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

const verificadoIcons: Record<string, React.ReactNode> = {
  "Estado dos extintores": <ShieldCheck className="w-6 h-6" />,
  "Iluminação de emergência": <ShieldCheck className="w-6 h-6" />,
  "Sinalização de emergência": <ShieldCheck className="w-6 h-6" />,
  "Sistema de hidrantes e mangotinhos": <ShieldCheck className="w-6 h-6" />,
  "Escadas de emergência": <ShieldCheck className="w-6 h-6" />,
  "Brigada de incêndio": <ShieldCheck className="w-6 h-6" />,
  "Alterações na edificação": <ShieldCheck className="w-6 h-6" />,
};

export default function RenovacaoAVCBCondominioPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: "/renovacao-avcb-condominio-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Renovação de AVCB para Condomínio em São Paulo",
        faqs: c.h2_faq.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Renovação de AVCB para Condomínio", item: "/renovacao-avcb-condominio-sao-paulo" },
        ],
      })} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/bg-condominios.jpg"
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
              Grupo A — Residencial Multifamiliar — Renovação 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              
              <span className="text-white">RENOVAÇÃO DE AVCB</span>
              <span className="text-red-600 not-italic text-2xl md:text-3xl lg:text-3xl mt-2 block drop-shadow-2xl">
                PARA CONDOMÍNIO EM SP
              </span>
            
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl" dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366] w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" /> QUERO RENOVAR DO MEU CONDOMÍNIO
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
          { label: "Renovação de AVCB para Condomínio em SP" },
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
                Por que o AVCB do Condomínio{" "}
                <span className="text-red-600 not-italic font-black italic">Vence e Precisa ser Renovado?</span>
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
              <p className="mt-8 text-lg text-slate-900 font-bold border-l-4 border-red-600 pl-5 italic" dangerouslySetInnerHTML={{ __html: c.h2_porqueVence.closing }} />
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

      {/* ── H2 #2: RISCOS PARA O SÍNDICO ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Quais são os Riscos para o Síndico com{" "}
              <span className="text-red-600 not-italic">AVCB Vencido?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_riscos.intro }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.h2_riscos.itens.map((item, i) => (
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
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900 bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            AVCB vencido? Cada dia sem renovação é um dia de risco para o síndico.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico de renovação gratuito"
            occupationType="condomínio"
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
              <span className="text-red-600 not-italic">Renovação do AVCB do Condomínio?</span>
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

      {/* ── H2 #4: COM OBRA OU SEM OBRA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                Renovação com Obra ou sem Obra —{" "}
                <span className="text-red-600 not-italic">Como Saber?</span>
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10" dangerouslySetInnerHTML={{ __html: c.h2_comOuSemObra.intro }} />
              <div className="space-y-6">
                {c.h2_comOuSemObra.tipos.map((tipo, i) => (
                  <div key={i} className="flex items-start gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black mb-1">{tipo.titulo}</p>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm">{tipo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-950 p-8 rounded-[2rem] text-white mt-8 border-l-8 border-red-600">
                <p className="text-slate-200 font-bold leading-relaxed italic" dangerouslySetInnerHTML={{ __html: c.h2_comOuSemObra.closing }} />
              </div>
            </div>

            <div className="bg-red-600 rounded-[3rem] p-10 text-white">
              <div className="flex items-center gap-4 mb-8">
                <Clock className="w-10 h-10 text-white flex-shrink-0" />
                <p className="font-black text-xl uppercase italic">Quando Iniciar a Renovação?</p>
              </div>
              {c.h2_quando.cenarios.map((cenario, i) => (
                <div key={i} className="mb-6 pb-6 border-b border-red-500 last:border-0 last:mb-0 last:pb-0">
                  <p className="font-black text-white text-base mb-2">{cenario.titulo}</p>
                  <p className="text-red-100 font-medium text-sm leading-relaxed">{cenario.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #5: ASSEMBLEIA ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase italic">
                Como Apresentar a Renovação do AVCB em{" "}
                <span className="text-red-600 not-italic">Assembleia de Condôminos</span>
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed text-lg mb-8" dangerouslySetInnerHTML={{ __html: c.h2_assembleia.intro }} />
              <ul className="space-y-4">
                {c.h2_assembleia.itens.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <FileText className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 font-medium leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-slate-300 font-bold leading-relaxed italic border-l-4 border-red-600 pl-5" dangerouslySetInnerHTML={{ __html: c.h2_assembleia.closing }} />
            </div>
            <div className="bg-white/5 rounded-[3rem] p-10 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <Home className="w-10 h-10 text-red-600 flex-shrink-0" />
                <p className="font-black text-xl uppercase italic">O síndico protegido</p>
              </div>
              {[
                "Relatório técnico pronto para assembleia",
                "Justificativa normativa por item",
                "Custo estimado detalhado",
                "Cronograma compatível com o orçamento",
                "Documentação do processo completa",
                "Sem surpresas no meio do caminho",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-slate-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900 bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisando de relatório técnico para apresentar em assembleia?
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro — sem compromisso"
            occupationType="condomínio"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #6: QUANDO INICIAR (standalone section) ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Quando Iniciar a Renovação do{" "}
              <span className="text-red-600 not-italic">AVCB do Condomínio</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.h2_quando.cenarios.map((cenario, i) => {
              const colors = ["bg-green-600", "bg-yellow-500", "bg-red-600"];
              const labels = ["Preventivo", "Urgente", "Emergência"];
              return (
                <div key={i} className="bg-white rounded-[2.5rem] border border-slate-200 p-10 hover:shadow-xl transition-all">
                  <span className={`inline-block ${colors[i]} text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-5`}>
                    {labels[i]}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{cenario.titulo}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm">{cenario.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── H2 #7: COBERTURA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
                Atendemos Renovações de AVCB em Condomínios em{" "}
                <span className="text-red-600 not-italic">São Paulo e Grande SP</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                {c.h2_cobertura.body.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
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
                  "Higienópolis / Consolação",
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

      {/* ── H2 #8: FAQ ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes —{" "}
              <span className="text-red-600 not-italic font-black italic uppercase">Renovação de AVCB para Condomínio SP</span>
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
            Já renovamos centenas de AVCBs de condomínios em São Paulo.
          </p>
          <p className="text-xl text-slate-300 font-medium mb-10 italic">
            Fale com um engenheiro e receba seu diagnóstico de renovação gratuito.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista no WhatsApp"
            occupationType="condomínio"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Condominio"
        currentSlug="/renovacao-avcb-condominio-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Condominio"
        currentSlug="/renovacao-avcb-condominio-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/renovacao-avcb-condominio-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="Renovação de AVCB para Condomínios em SP"
      />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-condominio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-condominio-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/renovacao-avcb-condominio-sao-paulo" />

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
            DRD2 Engenharia — Renovação de AVCB para Condomínios em São Paulo — Decreto 69.118/2024
          </p>
        </div>
      </section>

    </>
  );
}



