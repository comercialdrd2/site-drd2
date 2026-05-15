import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  MapPin, Building2, Search, Activity, ClipboardCheck, Clock
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import HeroSection from "@/components/HeroSection";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import ExpansionAuthorityBlock from "@/components/ExpansionAuthorityBlock";

const _slug = "/avcb-campinas-barao-geraldo";
const _pageTitle = "AVCB e CLCB em Barão Geraldo, Campinas SP | DRD2 Engenharia";
const _pageDesc = "Regularização de AVCB e CLCB em Barão Geraldo, Campinas SP. Foco em segurança contra incêndio, aprovação técnica e renovação no Corpo de Bombeiros com projeto especializado.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function ExpansionLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    { question: "Laboratório precisa de projeto especial de incêndio?", answer: "Sim, é necessário prever bacias de contenção, chuveiros de emergência e detecção sensível para reagentes químicos." },
    { question: "Pensionatos e repúblicas precisam de CLCB?", answer: "Sim, toda moradia coletiva comercial deve ter a licença dos bombeiros para garantir a segurança dos moradores." },
    { question: "O que o Bombeiro de Campinas olha em Barão Geraldo?", answer: "Principalmente a conformidade de gases e as rotas de fuga em locais de grande aglomeração de jovens." },
    { question: "Como renovar AVCB de centro de pesquisa?", answer: "Fazemos uma auditoria técnica de todos os sistemas de combate especiais (gás FM200, etc) e renovamos junto ao Via Fácil." },
    { question: "Qual o prazo para obter o AVCB em Barão Geraldo?", answer: "Em média de 30 a 90 dias, dependendo da complexidade técnica. A DRD2 acelera o processo com protocolos prioritários." }
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Barão Geraldo",
    serviceName: "AVCB e Regularização em Barão Geraldo",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Expansão", item: "#" },
      { name: "Barão Geraldo", item: _slug }
    ]
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/blog_hero_avcb_galpao.webp"
          alt="Regularização de AVCB em Barão Geraldo"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Segurança para Educação e Tecnologia
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Barão Geraldo: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Segurança e Regularização Técnica</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sem AVCB válido em Barão Geraldo, sua empresa pode ser <strong className="text-white bg-red-600/30 px-2">interditada</strong> e seu <strong className="text-white bg-red-600/30 px-2">responsável pode ser autuado</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com engenheiro especialista em Barão Geraldo
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Atendimento com Engenheiro Especialista (CREA-SP)",
                "Projetos Técnicos e Renovação Ministerial",
                "Acompanhamento total até a aprovação final",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-slate-700">
               <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Excelência em Segurança em <br />
                <span className="text-red-600">Barão Geraldo</span>
              </h2>
              <p>
                Regularizar uma edificação em <strong>Barão Geraldo</strong> exige conhecimento das normas técnicas locais e estaduais. A região de Campinas é estratégica e possui rigorosa fiscalização.
              </p>
              <p>
                Barão Geraldo é um ecossistema de conhecimento. De laboratórios de alta tecnologia a grandes centros de moradia estudantil, o AVCB aqui foca na segurança da vida acadêmica e na proteção de equipamentos caros e inflamáveis em centros de pesquisa.
              </p>
              <p>
                A DRD2 Engenharia atua com foco exclusivo em segurança contra incêndio, garantindo que seu condomínio, comércio ou indústria esteja regularizado com documentação técnica consistente.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "+4000", sub: "Empresas Regularizadas" },
                { label: "100%", sub: "Taxa de Aprovação" },
                { label: "+50", sub: "Municípios Atendidos" },
                { label: "15 Anos", sub: "De Experiência Técnica" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-4xl font-black text-red-900 mb-2">{stat.label}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-red-900/20 border-l-8 border-red-600 p-10 rounded-r-[3rem] relative overflow-hidden">
              <MapPin className="absolute top-4 right-4 w-24 h-24 text-white/5" />
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight">Cenário Local: Barão Geraldo</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium mb-6">
                Laboratórios em Barão Geraldo são classificados como Risco Alto devido ao uso de gases e reagentes. Um AVCB vencido aqui pode travar verbas de pesquisa federais e internacionais que exigem padrões globais de segurança contra incêndio.
              </p>
              <p className="text-red-400 font-bold uppercase italic tracking-tighter">
                ⚠️ Atendimento prioritário para a região: Av. Santa Isabel, Av. Albino J. B. de Oliveira
              </p>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Riscos Identificados em Barão Geraldo</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Gases medicinais e industriais sem laudo", d: "Cilindros e tubulações que não possuem o teste de estanqueidade anual obrigatório." },
                { t: "Alta carga de incêndio em bibliotecas", d: "Grandes volumes de papel estocados sem sistemas de sprinklers ou detecção fumaça." },
                { t: "Falta de treinamento de pânico em repúblicas", d: "Moradias coletivas que não possuem sinalização básica de saída e extintores suficientes." },
              ].map((prob, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 text-left hover:shadow-2xl transition-all group">
                   <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 font-black group-hover:scale-110 transition-transform">{i+1}</div>
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-slate-900 group-hover:text-red-600 transition-colors">{prob.t}</h3>
                   <p className="text-slate-600 text-sm font-medium leading-relaxed">{prob.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <div className="py-12 bg-slate-950 border-y border-slate-800 text-center">
         <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Precisa de AVCB em Barão Geraldo? Fale agora conosco.</p>
         <CtaWhatsApp label="Agendar Vistoria Técnica" occupationType="imóvel em Barão Geraldo" variant="primary" centered />
      </div>

      <SocialProof
        testimonial={{
          text: "Nossa startup de biotecnologia em Barão Geraldo precisava de AVCB para receber investimento. A DRD2 resolveu a planta técnica em tempo recorde.",
          author: "Cláudia Werneck",
          role: "CEO Tech — Barão Geraldo",
        }}
      />

      <ExpansionAuthorityBlock slug={_slug} />
      <LeadForm />
      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={8} titulo="Serviços em Barão Geraldo" />

      <ServiceClusterLinks currentSlug="/avcb-campinas-barao-geraldo" />
      <ServiceBlogLinks currentSlug="/avcb-campinas-barao-geraldo" />

      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-white text-center relative overflow-hidden">
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">Segurança e conformidade tecnológica em Barão Geraldo</h2>
            <p className="text-xl text-red-100 mb-12 font-medium italic">Investimento em sistemas de detecção inteligente e testes de estanqueidade de gases.</p>
            <a href={whatsappLink} target="_blank" className="bg-white text-red-900 font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
               Falar com Especialista em Barão Geraldo
            </a>
         </div>
      </section>
    </>
  );
}
