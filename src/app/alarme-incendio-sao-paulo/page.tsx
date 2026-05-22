import Image from "next/image";
import Link from "next/link";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import {
  CheckCircle, Bell, ShieldCheck, Zap, Activity, FileText,
  Building2, Factory, School, Heart, Hotel, Store, ArrowRight
} from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";

const _pageTitle = "Alarme de Incêndio em São Paulo 2026 | DRD2 Engenharia — IT 17/18";
const _pageDesc = "Projeto, instalação e manutenção de sistemas de alarme de incêndio em São Paulo conforme IT 17/18 do CBPMESP e NBR 17240. DRD2 Engenharia. Laudo técnico com ART inclusa para o AVCB.";

export const metadata = {
  title: "Alarme de Incêndio em São Paulo 2026 | DRD2 Engenharia — IT 17/18",
  description: "Projeto, instalação e manutenção de sistemas de alarme de incêndio em São Paulo conforme IT 17/18 do CBPMESP e NBR 17240. DRD2 Engenharia. Laudo técnico com ART inclusa para o AVCB.",
  alternates: {
    canonical: "/alarme-incendio-sao-paulo",
  },
};

const faqs = [
  {
    q: "Alarme de incêndio é obrigatório em São Paulo?",
    a: "Sim. Conforme a IT 18 do CBPMESP, o sistema de detecção e alarme de incêndio é exigido para a maioria dos estabelecimentos comerciais, industriais e residenciais de médio e grande porte em São Paulo. A obrigatoriedade e o tipo de sistema dependem do Grupo de ocupação, altura e área da edificação.",
  },
  {
    q: "Qual a diferença entre detector de fumaça e central de alarme?",
    a: "O detector de fumaça é o sensor que identifica a presença de fumaça no ambiente. A central de alarme é o 'cérebro' do sistema — ela recebe o sinal de todos os detectores, processa a informação e ativa as sirenes. Um sistema de alarme completo integra detectores, central, sirenes, botoeiras manuais e, nos sistemas endereçáveis, identifica com precisão o ponto exato do sinistro.",
  },
  {
    q: "Que sistema de alarme o Corpo de Bombeiros exige para o AVCB?",
    a: "O CBPMESP exige sistema de alarme dimensionado conforme a IT 18/2019. Para edificações de menor porte, um sistema convencional pode ser suficiente. Para edificações maiores ou de maior risco, o sistema endereçável (inteligente) é obrigatório, pois permite identificar com precisão o ponto de alarme. O laudo técnico com ART é obrigatório para aprovação.",
  },
  {
    q: "Com que frequência o sistema de alarme precisa de manutenção?",
    a: "A IT 18 exige manutenção preventiva semestral com emissão de laudo técnico. O laudo de manutenção é documento obrigatório no processo de renovação do AVCB — alarmes sem laudo atualizado geram Comunique-se e paralisam o processo de renovação.",
  },
  {
    q: "A DRD2 faz integração do alarme com sprinklers e hidrantes?",
    a: "Sim. A DRD2 Engenharia projeta sistemas integrados de proteção ativa — alarme, sprinklers e hidrantes — de forma coordenada, garantindo que o acionamento de um sistema não conflite com o outro e que toda a documentação para o AVCB esteja consolidada.",
  },
  {
    q: "Qual o prazo para instalar um sistema de alarme em SP?",
    a: "O prazo médio para projeto, fornecimento e instalação de um sistema de alarme é de 15 a 45 dias, dependendo da complexidade e área da edificação. O processo começa com o diagnóstico técnico presencial sem custo.",
  },
];

const segmentos = [
  {
    nome: "Condomínios",
    href: "/alarme-de-incendio-para-condominio-sao-paulo",
    icon: Building2,
    desc: "Torre residencial, condomínio horizontal, galpão de condomínio. IT 18 + NBR 17240 por número de pavimentos.",
  },
  {
    nome: "Galpão Industrial",
    href: "/alarme-de-incendio-galpao-industrial-sp",
    icon: Factory,
    desc: "Galpões logísticos e industriais com carga de incêndio elevada. Detectores de temperatura e fumaça conforme IT 02.",
  },
  {
    nome: "Hospital e Clínica",
    href: "/alarme-de-incendio-hospital-clinica-sp",
    icon: Heart,
    desc: "Estabelecimentos de saúde Grupo I. Detecção antecipada, sistema endereçável, integração com CIPA e corpo de bombeiros.",
  },
  {
    nome: "Escola e Faculdade",
    href: "/alarme-de-incendio-escola-faculdade-sp",
    icon: School,
    desc: "Escolas, creches e faculdades Grupo E. Sistema com acionamento por sirene diferenciada para evacuação ordenada.",
  },
  {
    nome: "Comércio e Escritório",
    href: "/alarme-de-incendio-comercial-escritorio-sp",
    icon: Store,
    desc: "Escritórios, lojas, clínicas e comércio em geral. Sistemas compactos e endereçáveis conforme área e ocupação.",
  },
];

export default function AlarmeIncendioSaoPauloPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/alarme-incendio-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Projeto e Instalação de Alarme de Incêndio em São Paulo",
        faqs: faqs.map(f => ({ question: f.q, answer: f.a })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Alarme de Incêndio em São Paulo", item: "/alarme-incendio-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-alarme.webp"
          alt="Sistema de Alarme de Incêndio em São Paulo — DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-30 grayscale-[20%]"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Proteção Ativa 24/7 — IT 17/18 — São Paulo 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">ALARME DE INCÊNDIO</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                EM SÃO PAULO — PROJETO E INSTALAÇÃO
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Projetamos e instalamos sistemas de detecção e alarme de incêndio conforme <strong>IT 18/2019 do CBPMESP</strong> e <strong>NBR 17240</strong> para aprovação no AVCB. Laudo técnico com ART inclusa.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              <span className="sm:whitespace-nowrap font-black">SOLICITAR DIAGNÓSTICO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Alarme de Incêndio em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── POR QUE O ALARME É CRÍTICO PARA O AVCB ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-red-600 pl-6 uppercase italic tracking-tight leading-none">
                Por que o alarme de incêndio é crítico para o AVCB em São Paulo?
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O sistema de detecção e alarme de incêndio é uma das medidas de proteção ativa mais fiscalizadas pelo CBPMESP em vistorias. Em São Paulo, a <strong>IT 18/2019</strong> determina a obrigatoriedade do sistema para a maioria das edificações comerciais, industriais e residenciais de médio e grande porte — e o laudo de manutenção periódica é documento obrigatório na renovação do AVCB.
                </p>
                <p>
                  Alarmes sem laudo de manutenção atualizado, sistemas com detectores defeituosos ou centrais sem comunicação com a brigada de incêndio geram <strong>Comunique-se</strong> no processo do CBPMESP e paralisam a aprovação até a regularização completa.
                </p>
                <p>
                  A DRD2 Engenharia projeta, instala e mantém sistemas de alarme com laudo técnico assinado por engenheiro responsável e ART incluída — eliminando as causas mais frequentes de exigência técnica no processo de AVCB.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic leading-tight">
                  Diagnóstico <span className="text-red-600">Gratuito</span>
                </h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            Nossas Soluções em <span className="text-red-600 not-italic">Alarme de Incêndio</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "Sistema Convencional", desc: "Indicado para edificações menores. Detectores por zona, central e sirenes conforme IT 18." },
              { icon: Zap, title: "Sistema Endereçável", desc: "Cada detector tem endereço único. Identifica o ponto exato do sinistro. Obrigatório em edificações de maior porte." },
              { icon: Bell, title: "Manutenção Preventiva", desc: "Semestral conforme IT 18. Laudo técnico com ART inclusa para renovação do AVCB." },
              { icon: FileText, title: "Laudo e ART para AVCB", desc: "Documentação técnica completa assinada por engenheiro para aprovação no CBPMESP." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Seu sistema de alarme está com laudo de manutenção em dia?
          </p>
          <CtaWhatsApp
            label="Solicitar vistoria diagnóstica gratuita"
            occupationType="alarme"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── HUB DE SEGMENTOS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic leading-none">
              Alarme de Incêndio por <span className="text-red-600 not-italic">Tipo de Edificação</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Cada segmento tem exigências específicas da IT 18. Consulte a página do seu tipo de edificação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentos.map((seg, i) => (
              <Link
                key={i}
                href={seg.href}
                className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-red-600/30 hover:shadow-xl hover:bg-white transition-all flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <seg.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-black text-slate-900 uppercase italic tracking-tight text-lg leading-tight">
                    {seg.nome}
                  </h3>
                </div>
                <p className="text-slate-600 font-medium text-sm leading-relaxed flex-1">{seg.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Ver página completa <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como funciona o <span className="text-red-600 not-italic">Projeto de Alarme</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Diagnóstico Técnico", d: "Vistoria presencial para identificar o Grupo de ocupação, área, altura e sistema de alarme adequado conforme IT 18." },
              { id: "02", t: "Projeto de Detecção", d: "Posicionamento de detectores de fumaça, temperatura e CIPA conforme layout real da edificação e norma NBR 17240." },
              { id: "03", t: "Instalação da Central", d: "Instalação de central de alarme convencional ou endereçável, painel de força, sirenes e botoeiras manuais." },
              { id: "04", t: "Teste e Comissionamento", d: "Teste de todos os detectores e acionadores, verificação de comunicação com a central e programação de zonas." },
              { id: "05", t: "Laudo e ART", d: "Laudo técnico com resultados dos testes, fotos e memorial descritivo. ART de execução inclusa para o AVCB." },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:bg-red-600 transition-all text-left">
                <div className="text-red-500 group-hover:text-white font-black text-xs mb-4 transition-colors">{step.id}</div>
                <h4 className="font-black italic uppercase mb-4 leading-tight">{step.t}</h4>
                <p className="text-sm text-slate-400 group-hover:text-white leading-relaxed transition-colors">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE ENTREGAMOS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-red-600 pl-6 uppercase italic tracking-tight">
            O que a DRD2 entrega no seu sistema de alarme
          </h2>
          <div className="space-y-3">
            {[
              "Projeto de detecção conforme IT 18/2019 e NBR 17240",
              "Instalação de central convencional ou endereçável",
              "Detectores de fumaça, temperatura e gás carbônico",
              "Botoeiras manuais, sirenes e sinalização integrada",
              "Manutenção semestral com laudo técnico para AVCB",
              "ART de projeto e execução inclusa",
              "Integração com sistemas de sprinklers e hidrantes",
              "Teste de comissionamento com relatório fotográfico",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-red-600/20 transition-all">
                <CheckCircle className="text-red-600 w-6 h-6 flex-shrink-0" />
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-red-600 not-italic">Alarme de Incêndio SP</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.q}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-2">
              Diagnóstico <span className="text-red-600">Gratuito</span>
            </h2>
            <p className="text-slate-500 font-medium">Preencha e um engenheiro entra em contato em até 24h.</p>
          </div>
          <LeadForm variant="compact" showWrapper={false} />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-950 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            SEU ALARME ESTÁ EM DIA <br /><span className="text-slate-950 not-italic">COM O CORPO DE BOMBEIROS?</span>
          </h2>
          <p className="text-xl text-red-50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            A DRD2 Engenharia projeta, instala e mantém seu sistema de alarme — com laudo técnico e ART para aprovação imediata no AVCB.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-2xl shadow-2xl hover:bg-slate-950 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-8 h-8 inline" /> CHAMAR AGORA NO WHATSAPP
          </a>
          <p className="mt-10 text-[10px] font-black uppercase tracking-[0.4em] text-red-200 opacity-60 italic">
            DRD2 ENGENHARIA — SISTEMA DE ALARME DE INCÊNDIO EM SÃO PAULO — IT 18/2019
          </p>
        </div>
      </section>


      <ServiceClusterLinks currentSlug="/alarme-incendio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/alarme-incendio-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/alarme-incendio-sao-paulo" />
    </>
  );
}
