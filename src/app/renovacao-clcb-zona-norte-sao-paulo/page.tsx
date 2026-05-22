import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ArrowRight,
  ShieldX, MapPin, Building2,
  AlertTriangle, Store, HeartPulse, Scissors, Utensils,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const _pageTitle = "Renovação de CLCB na Zona Norte de São Paulo 2026 | DRD2 Engenharia";
const _pageDesc = "Renovação de CLCB na Zona Norte de SP para comércio, clínicas, salões e restaurantes. DRD2 Engenharia — diagnóstico gratuito e processo simplificado conforme Decreto 69.118/2024.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: {
    canonical: "/renovacao-clcb-zona-norte-sao-paulo",
  },
};

const faqs = [
  {
    question: "Quais bairros da Zona Norte a DRD2 atende para renovação de CLCB?",
    answer: "A DRD2 atende todos os bairros da Zona Norte de São Paulo, incluindo Santana, Tucuruvi, Casa Verde, Limão, Jaçanã, Tremembé, Vila Guilherme, Vila Maria, Mandaqui, Brasilândia, Cachoeirinha, Freguesia do Ó e demais regiões da zona.",
  },
  {
    question: "Meu estabelecimento na Zona Norte tem menos de 200 m² — precisa de CLCB?",
    answer: "Sim. O CLCB é obrigatório para estabelecimentos comerciais, clínicas, salões e demais atividades independentemente do tamanho, desde que enquadrados como risco reduzido. A DRD2 confirma o enquadramento correto no diagnóstico gratuito.",
  },
  {
    question: "Quanto tempo leva a renovação de CLCB na Zona Norte de SP?",
    answer: "Com documentação e adequações em ordem, o processo de renovação de CLCB tende a ser ágil. A DRD2 acompanha o prazo real junto ao CBPMESP e mantém o cliente informado em todas as etapas.",
  },
  {
    question: "Posso renovar o CLCB sem fechar meu negócio na Zona Norte?",
    answer: "Sim. As adequações mais comuns — recarga de extintores, reposição de sinalização, reparo de iluminação de emergência — são realizadas sem necessidade de fechar o estabelecimento.",
  },
  {
    question: "Qual o custo da renovação de CLCB na Zona Norte?",
    answer: "Varia conforme a área, o tipo de atividade e as adequações necessárias. A DRD2 fornece orçamento completo após a visita técnica gratuita — sem taxa de diagnóstico e sem compromisso prévio.",
  },
];

const bairrosZonaNorte = [
  "Santana", "Tucuruvi", "Casa Verde", "Limão",
  "Jaçanã", "Tremembé", "Vila Guilherme", "Vila Maria",
  "Mandaqui", "Brasilândia", "Cachoeirinha", "Freguesia do Ó",
  "Parque Edu Chaves", "Vila Medeiros", "Vila Nova Cachoeirinha", "Parada de Taipas",
  "Pirituba", "Jaraguá", "Perus", "Anhanguera",
];

const tiposEstabelecimento = [
  { Icon: Store, nome: "Comércio e Lojas", href: "/renovacao-clcb-comercio-sao-paulo" },
  { Icon: HeartPulse, nome: "Consultórios e Clínicas", href: "/renovacao-clcb-consultorio-clinica-sao-paulo" },
  { Icon: Scissors, nome: "Salões de Beleza", href: "/renovacao-clcb-salao-beleza-sao-paulo" },
  { Icon: Utensils, nome: "Restaurantes e Lanchonetes", href: "/renovacao-clcb-restaurante-sao-paulo" },
];

export default function RenovacaoCLCBZonaNortePage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const schema = generateMasterSchema({
    slug: "/renovacao-clcb-zona-norte-sao-paulo",
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Zona Norte",
    serviceName: "Renovação de CLCB na Zona Norte de São Paulo",
    faqs: faqs.map((f) => ({ question: f.question, answer: f.answer })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Renovação CLCB", item: "/renovacao-clcb-sao-paulo" },
      { name: "Zona Norte", item: "/renovacao-clcb-zona-norte-sao-paulo" },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB na Zona Norte de São Paulo — DRD2 Engenharia"
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
              CLCB — ZONA NORTE DE SÃO PAULO — RENOVAÇÃO 2026
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                RENOVAÇÃO DE CLCB — ZONA NORTE SP
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                CLCB VENCIDO NA ZONA NORTE? DIAGNÓSTICO GRATUITO EM ATÉ 2 HORAS
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              A DRD2 Engenharia renova o CLCB para comércios, clínicas, salões, restaurantes e demais estabelecimentos da Zona Norte de São Paulo com processo simplificado e conformidade total com o Decreto Estadual nº 69.118/2024.
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
          { label: "Zona Norte" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── INTRO + FORM ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
              <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">
                Renovação de CLCB na <span className="text-red-600">Zona Norte de São Paulo</span>
              </h2>
              <p>
                A Zona Norte de São Paulo abrange uma extensa faixa de bairros com forte presença de comércio de rua, serviços de saúde, salões de beleza e estabelecimentos de alimentação — de Santana e Tucuruvi até Pirituba, Perus e Anhanguera. A maioria desses estabelecimentos se enquadra no processo simplificado de CLCB e precisa manter o certificado válido para operar com alvará ativo.
              </p>
              <p>
                A DRD2 Engenharia atende toda a Zona Norte com equipe técnica própria — diagnóstico presencial rápido e processo conduzido do início ao fim pela mesma equipe, sem terceirizações.
              </p>
              <div className="flex items-start gap-4 bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <AlertTriangle className="text-amber-600 w-8 h-8 flex-shrink-0 mt-0.5" />
                <p className="text-amber-900 font-bold text-base leading-relaxed">
                  CLCB vencido = alvará em risco. Estabelecimentos da Zona Norte com CLCB vencido podem ser interditados em qualquer fiscalização de rotina do Corpo de Bombeiros ou da Vigilância Sanitária.
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

      {/* ── BAIRROS ATENDIDOS ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <MapPin className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">
              Bairros Atendidos na Zona Norte
            </h2>
            <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
              Atendimento presencial com engenheiro em toda a Zona Norte de São Paulo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {bairrosZonaNorte.map((bairro, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-center hover:bg-red-600/20 hover:border-red-600/30 transition-all">
                <span className="text-white font-bold text-xs uppercase tracking-wide">{bairro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <div className="py-14 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Estabelecimento na Zona Norte com CLCB vencido? Fale agora.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="estabelecimento na Zona Norte"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── TIPOS DE ESTABELECIMENTO ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
              Renovação de CLCB por Tipo de Estabelecimento na Zona Norte
            </h2>
            <p className="text-slate-600 font-medium">A DRD2 renova o CLCB para todos os tipos de estabelecimento enquadrados no processo simplificado.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiposEstabelecimento.map(({ Icon, nome, href }, i) => (
              <Link
                key={i}
                href={href}
                className="bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:border-red-600 hover:shadow-xl transition-all flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-red-600 transition-colors rounded-2xl flex items-center justify-center border border-slate-200 group-hover:border-red-600">
                  <Icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-black text-slate-900 text-sm uppercase italic tracking-tight leading-tight">{nome}</span>
                <span className="text-red-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver página <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE DRD2 NA ZONA NORTE ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic tracking-tight">
                Por que escolher a DRD2 na Zona Norte?
              </h2>
              <div className="space-y-4">
                {[
                  "Equipe técnica própria com cobertura em toda a Zona Norte",
                  "Diagnóstico presencial em até 2 horas após contato",
                  "Processo simplificado CLCB sem enquadramentos errados",
                  "Adequações executadas sem fechar o estabelecimento",
                  "Resposta imediata a exigências do CBPMESP",
                  "Mais de 15 anos de atuação na região",
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
                { Icon: Building2, l: "Santana e Tucuruvi" },
                { Icon: Store, l: "Casa Verde e Limão" },
                { Icon: Building2, l: "Jaçanã e Tremembé" },
                { Icon: Store, l: "Pirituba e Perus" },
              ].map(({ Icon, l }, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center gap-3 shadow-sm">
                  <Icon className="w-8 h-8 text-red-600" />
                  <span className="font-black text-slate-800 text-xs uppercase italic tracking-tight">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-red-600">CLCB Zona Norte SP</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 cursor-pointer open:bg-white open:ring-4 open:ring-red-600/10 transition-all">
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
            {[
              { label: "Renovação de CLCB em São Paulo", href: "/renovacao-clcb-sao-paulo" },
              { label: "CLCB em São Paulo", href: "/clcb-sao-paulo" },
              { label: "Renovação CLCB Zona Sul", href: "/renovacao-clcb-zona-sul-sao-paulo" },
              { label: "Renovação CLCB Zona Leste", href: "/renovacao-clcb-zona-leste-sao-paulo" },
              { label: "Renovação CLCB Zona Oeste", href: "/renovacao-clcb-zona-oeste-sao-paulo" },
            ].map((link, i) => (
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

      <ServiceClusterLinks currentSlug="/renovacao-clcb-zona-norte-sao-paulo" />
      <ServiceBlogLinks currentSlug="/renovacao-clcb-zona-norte-sao-paulo" />
      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/renovacao-clcb-zona-norte-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight italic">
            Estabelecimento na Zona Norte com CLCB vencido?
          </h2>
          <p className="text-xl mb-10 font-bold opacity-95 max-w-3xl mx-auto italic leading-relaxed border-b border-white/20 pb-10">
            A DRD2 atende toda a Zona Norte — diagnóstico presencial em até 2 horas e renovação sem fechar as portas.
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
            Zona Norte SP — Decreto 69.118/2024 — DRD2 Engenharia
          </p>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
