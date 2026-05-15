import Image from "next/image";
import Link from "next/link";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  Flame, Droplets, Lightbulb, TriangleAlert, Bell, Layers,
  Users, MapPin, ShieldX, Zap,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { avcbAcademiaContent as c } from "@/data/pages/avcb-academia-sao-paulo";
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

const sistemaIcons: Record<string, React.ReactNode> = {
  "Extintores de incêndio": <Flame className="w-7 h-7" />,
  "Iluminação de emergência": <Lightbulb className="w-7 h-7" />,
  "Sinalização de emergência": <TriangleAlert className="w-7 h-7" />,
  "Saídas de emergência": <ArrowRight className="w-7 h-7" />,
  "Controle de materiais de revestimento": <Layers className="w-7 h-7" />,
  "Compartimentação": <ShieldCheck className="w-7 h-7" />,
  "Alarme de incêndio": <Bell className="w-7 h-7" />,
  "Sistema de hidrantes ou mangotinhos": <Droplets className="w-7 h-7" />,
  "Brigada de incêndio": <Users className="w-7 h-7" />,
};

export default function AVCBAcademiaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-para-academia-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "AVCB para Academia em São Paulo",
        faqs: c.h2_faq.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Academia em São Paulo", item: "/avcb-para-academia-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[20px] flex items-center bg-slate-950 border-b-8 border-red-600  ">
        <Image
          src="/images/hero-academia-v2.webp"
          alt="Alvará do Bombeiro para Academia"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 60%, rgba(220,38,38,0.4) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Grupo F — Locais de Reunião de Público — 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                ACADEMIA EM SÃO PAULO
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl" dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            <p className="text-lg text-gray-300 mb-0 leading-relaxed font-medium max-w-2xl" dangerouslySetInnerHTML={{ __html: c.intro[1] }} />
            <div className="mt-4 block">
              <a
                href={whatsappLink}
                className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="sm:whitespace-nowrap">FALAR COM ENGENHEIRO AGORA</span>
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
          { label: "AVCB para Academia em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── H2 #1: ACADEMIA PRECISA DE AVCB? ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Academia Precisa de{" "}
                <span className="text-red-600 not-italic font-black italic">AVCB em São Paulo?</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                {c.h2_precisaDeAvcb.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <ul className="space-y-3">
                  {c.h2_precisaDeAvcb.riscos_lista.map((risco, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>{risco}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-slate-900 mt-6" dangerouslySetInnerHTML={{ __html: c.h2_precisaDeAvcb.intro_lista }} />
                <ul className="space-y-3">
                  {c.h2_precisaDeAvcb.tipos.map((tipo, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>{tipo}</span>
                    </li>
                  ))}
                </ul>
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

      {/* ── H2 #2: EXIGÊNCIAS TÉCNICAS ESPECÍFICAS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Por que o AVCB de Academia tem{" "}
              <span className="text-red-600 not-italic">Exigências Técnicas Específicas?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_exigencias.intro }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.h2_exigencias.itens.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-lg mb-2">{item.titulo}</p>
                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #3: SISTEMAS DE SEGURANÇA ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Sistemas de Segurança Exigidos pelo{" "}
              <span className="text-red-600 not-italic">Corpo de Bombeiros em Academias</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.h2_sistemas.sistemas.map((s, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <div className="text-red-600 mb-5 group-hover:scale-110 transition-transform">
                  {sistemaIcons[s.nome] ?? <ShieldCheck className="w-7 h-7" />}
                </div>
                <h3 className="text-base font-black mb-3 uppercase italic tracking-tight text-white">{s.nome}</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 1 ── */}
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua academia tem todos esses sistemas aprovados pelo CBPMESP?
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito"
            occupationType="academia"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #4: ACADEMIA EM SHOPPING, GALERIA OU CONDOMÍNIO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
              Academia em{" "}
              <span className="text-red-600 not-italic">Shopping, Galeria ou Condomínio</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_shopping.intro }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.h2_shopping.itens.map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 hover:shadow-xl hover:border-red-600/20 transition-all">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-900 font-black text-lg mb-3">{item.titulo}</p>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #5: ACADEMIA COM SAUNA, PISCINA OU SPA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Academia com{" "}
              <span className="text-red-600 not-italic">Sauna, Piscina ou Área de Spa</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_sauna.intro }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {c.h2_sauna.itens.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-[3rem] p-10 hover:shadow-xl hover:border-red-600/20 transition-all">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-900 font-black text-lg mb-3">{item.titulo}</p>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white border-l-8 border-red-600 max-w-4xl mx-auto">
            <p className="text-slate-200 font-bold leading-relaxed italic text-lg" dangerouslySetInnerHTML={{ __html: c.h2_sauna.closing }} />
          </div>
        </div>
      </section>

      {/* ── H2 #6: COMO A DRD2 REGULARIZA ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-red-500 font-black uppercase tracking-widest text-xs">Sem Comunique-se — Sem Retrabalho</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-none uppercase italic mt-4">
              Como a DRD2 Regulariza sua{" "}
              <span className="text-red-600 not-italic">Academia no Corpo de Bombeiros</span>
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

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar sua academia?
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro — sem compromisso"
            occupationType="academia"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #7: COBERTURA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter uppercase italic">
                Atendemos Academias em{" "}
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
                  "Moema / Campo Belo",
                  "Santana / Tucuruvi",
                  "Tatuapé / Mooca",
                  "Pinheiros / Perdizes",
                  "Jardins / Itaim Bibi",
                  "Vila Olímpia",
                  "Guarulhos / Osasco",
                  "Santo André / São Bernardo",
                  "Barueri / São Caetano",
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
              <span className="text-red-600 not-italic font-black italic uppercase">AVCB para Academia SP</span>
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
            Regularizamos mais de 2.500 estabelecimentos em São Paulo.
          </p>
          <p className="text-xl text-slate-300 font-medium mb-10 italic">
            Fale com um engenheiro e receba seu diagnóstico gratuito.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista no WhatsApp"
            occupationType="academia"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </section>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Academia</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel precisa dos seguintes documentos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa aprovada pela Prefeitura ou levantamento arquitetonico atualizado",
              "IPTU do exercicio atual com área total averbada e uso declarado",
              "Memorial descritivo da ocupação e destinacao de uso do imóvel",
              "Laudo de instalacoes elétricas com ART registrada no CREA-SP",
              "Laudo de para-raios (SPDA) para edificios acima de 5 pavimentos",
              "ART do engenheiro responsavel pelo projeto de prevencao de incêndio",
              "Matricula atualizada do imóvel no Cartorio de Registro de Imóveis",
              "CNPJ ou CPF do responsavel legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Academia"
        currentSlug="/avcb-para-academia-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Academia"
        currentSlug="/avcb-para-academia-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/avcb-para-escola-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Academias em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-para-academia-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-para-academia-sao-paulo" />

      <NeighborhoodSilo currentSlug="/avcb-para-academia-sao-paulo" />

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
            DRD2 Engenharia — AVCB para Academias em São Paulo — Decreto 69.118/2024
          </p>
        </div>
      </section>

      <LeadForm />
    </>
  );
}

