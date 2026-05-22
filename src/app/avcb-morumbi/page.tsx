import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  Scale, Library, FileCheck, Shield, BookOpen,
  Lightbulb, MapPin, Map, Bell, ArrowRight,
  Users, Building2, Building, Activity, Store,
  Zap, Truck, Warehouse, Utensils, GlassWater,
  Music, HelpCircle, HeartPulse, ClipboardCheck,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB e CLCB em Morumbi | DRD2 Engenharia";
const _pageDesc = "Regularização de AVCB e CLCB em Morumbi. Foco em condomínios clube, colégios e hospitais. Aprovação e renovação no Corpo de Bombeiros com projeto especializado.";

export const metadata = {
  title: "AVCB e CLCB em Morumbi | DRD2 Engenharia",
  description: "Regularização de AVCB e CLCB em Morumbi. Foco em condomínios clube, colégios e hospitais. Aprovação e renovação no Corpo de Bombeiros com projeto especializado.",
  alternates: {
    canonical: "/avcb-morumbi",
  },
};

export default function MorumbiLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Hospitais na região demandam vistorias especiais?",
      answer: "Totalmente. Projetos de setorização (compartimentação) precisam estar rigorosamente aprovados pelo Comando do CBPMESP."
    },
    {
      question: "Qual o prazo para obter o AVCB em Morumbi?",
      answer: "Em média de 60 a 120 dias, dependendo da área, tipo de ocupação e número de exigências do Corpo de Bombeiros. A DRD2 acelera o processo com documentação pré-auditada e protocolo prioritário."
    },
    {
      question: "Meu imóvel em Morumbi precisa de AVCB completo ou CLCB simplificado?",
      answer: "Depende da área e do uso. Imóveis acima de 750m² ou com uso de alto risco geralmente exigem AVCB completo. Abaixo disso, pode ser CLCB. A DRD2 avalia o enquadramento correto gratuitamente."
    },
    {
      question: "O AVCB vencido impede a renovacao do alvará de funcionamento em Morumbi?",
      answer: "Sim. Prefeitura e orgaos fiscalizadores exigem AVCB valido para renovacao do alvará. Alem disso, o estabelecimento fica sujeito a interdição e o responsavel pode responder legalmente em caso de sinistro."
    },
    {
      question: "Qual a documentação basica para iniciar o processo de AVCB em Morumbi?",
      answer: "Planta baixa atualizada, IPTU com área averbada, memorial descritivo da ocupação, laudo de instalacoes elétricas e CNPJ do responsavel. A DRD2 faz a auditoria documental gratuita antes do protocolo."
    }
    ];

  const mainStreets = [
    "Avenida Giovanni Gronchi",
    "Avenida Morumbi",
    "Rua Deputado João Sussumu Hirata",
    "Av. Dr. Alberto Penteado"
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-morumbi",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Morumbi",
        serviceName: "AVCB e Regularização em Morumbi",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Regiões", item: "/avcb-zona-sul" },
          { name: "Morumbi", item: "/avcb-morumbi" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - ESTILO CASA DE REPOUSO (H-3) mas com TEXTOS DO BAIRRO */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Regularização de AVCB em Morumbi"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Complexos Residenciais e Comerciais de Elite
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Morumbi: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Foco em Condomínios Clube, Colégios e Hospitais</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sem AVCB válido em Morumbi, sua empresa pode ser <strong className="text-white bg-red-600/30 px-2">interditada</strong> e seu <strong className="text-white bg-red-600/30 px-2">CPF pode responder criminalmente</strong> em caso de fiscalização ou sinistro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com engenheiro especialista em Morumbi
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Atendimento com Engenheiro Especialista (CREA-SP)",
                "Projeto Técnico conforme Decreto Estadual 69.118/2024",
                "Acompanhamento total até a vistoria e aprovação final",
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

      {/* Introdução + Cards de Números - ESTILO CASA DE REPOUSO */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-slate-700">
               <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Excelência em Segurança em <br />
                <span className="text-red-600">Morumbi</span>
              </h2>
              <p>
                Regularizar uma edificação em Morumbi exige conhecimento profundo das Instruções Técnicas do Corpo de Bombeiros. O polo da  Avenida Giovanni Gronchi é um dos mais dinâmicos de SP, exigindo agilidade e precisão técnica.
              </p>
              <p>
                O AVCB comprova que sua edificação atende a todos os requisitos de segurança contra incêndio. Com ele, você opera com segurança jurídica e protege seu patrimônio.
              </p>
              <p>
                A DRD2 Engenharia tem 15 anos de atuação com foco exclusivo em segurança contra incêndio, reunindo vasta experiência na aprovação de condomínios clube, colégios e hospitais em Morumbi.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "+4000", sub: "Empresas Regularizadas" },
                { label: "+400", sub: "Projetos Aprovados em Morumbi" },
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

      {/* Especialidades do Bairro - RESGATANDO OS TEXTOS ORIGINAIS DO SEO NO NOVO LAYOUT! */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <span className="text-red-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Especialidades</span>
           <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Que Regularizamos em Morumbi</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {[
                { title: "Condomínios Residenciais", text: "Regularização de prédios, torres e condomínios clube com foco em renovação rápida." },
                { title: "Indústrias e Galpões", text: "Projetos de alta complexidade para depósitos, fábricas e centros logísticos." },
                { title: "Hospitais e Clínicas", text: "Segurança máxima para ambientes de saúde e atendimento médico (Grupo H)." },
                { title: "Academias e Fitness", text: "Proteção para centros esportivos, estúdios e ginásios (Grupo E-6)." },
                { title: "Escolas e Faculdades", text: "Segurança para ambiente educacional com foco na vulnerabilidade estudantil." },
                { title: "Igrejas e Templos", text: "Regularização de locais de reunião de público com grande lotação (Grupo F)." },
                { title: "Hotéis Master 10/10", text: "Gestão de risco para ocupações de uso noturno e rotatividade de hóspedes." },
                { title: "Motéis Master 10/10", text: "Regularização com total discrição e foco na segurança para público vulnerável." },
                { title: "Hostels e Albergues", text: "Segurança para hospedagem coletiva, dormitórios compartilhados e público internacional." },
                { title: "Restaurantes e Bares", text: "Segurança para o setor de gastronomia, eventos e entretenimento." },
                { title: "Comércio e Serviços", text: "Regularização de lojas, escritórios e edifícios comerciais." },
                { title: "Shoppings e Centros", text: "Projetos de grande porte com múltiplos riscos e alta carga de incêndio." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all text-left group">
                   <Building2 className="w-12 h-12 text-red-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tighter group-hover:text-red-400 transition-colors">{item.title}</h3>
                   <p className="text-sm text-slate-400 leading-relaxed font-medium group-hover:text-slate-200">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

            {/* â"€â"€ CTA 2 — APÃ"S ESPECIALIDADES â"€â"€ */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisa de AVCB? Fale agora com um engenheiro especialista.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="imóvel em Morumbi"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* PTS vs PT - ESTILO CASA DE REPOUSO */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <BadgeInfo className="w-16 h-16 text-red-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter">
            PTS OU PROJETO TÉCNICO COMPLETO: <br />
            <span className="text-red-600 italic">Qual o seu caso em Morumbi?</span>
          </h2>
          
          <div className="text-lg text-slate-700 space-y-6 text-left mb-10">
            <p className="font-medium">
              A definição do tipo de licenciamento depende da área total construída e do nível de risco. No(a) Morumbi, identificamos muitos locais que acreditavam ser CLCB (simplificado) mas exigiam AVCB completo.
            </p>
            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-2xl font-bold text-red-900 mb-10 text-sm md:text-base">
              ⚠️ Divergência de área entre IPTU e realidade é um grande motivo de bloqueio em processos na região de Morumbi. Nossa equipe audita sua área antes do protocolo.
            </div>

            <div className="flex justify-center mt-10">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-xl font-black shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tight animate-alert-pulse"
              >
                <Phone className="w-6 h-6" /> Falar com engenheiro especialista Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Geolocalização Contexto */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl text-center font-black">
           <MapPin className="w-12 h-12 text-red-600 mx-auto mb-6" />
           <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter underline decoration-red-600 decoration-4 underline-offset-8">Atendimento em Morumbi SP</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {mainStreets.map((street, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center text-red-600 font-bold">{i+1}</div>
                  <span className="text-slate-700 font-bold uppercase text-xs tracking-widest">{street}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Morumbi com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Morumbi, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas <span className="text-red-600">Frequentes</span></h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <details key={i} className="group bg-white rounded-[2rem] p-8 border border-slate-100 open:shadow-2xl transition-all cursor-pointer">
                <summary className="text-xl font-extrabold text-slate-900 list-none flex justify-between items-center pr-4 leading-tight uppercase tracking-tighter">
                  {faq.question}
                  <span className="text-red-600 text-3xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-6 text-slate-600 leading-relaxed font-bold border-t border-slate-100 pt-6 uppercase text-[11px] tracking-tight">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl animate-pulse-subtle text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Regularização em Morumbi</h3>
              <p className="text-slate-400 font-medium italic text-sm">Obtenha seu AVCB sem interdições. Atendimento direto com engenheiro.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Falar com engenheiro especialista
            </a>
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA 4 â"€â"€ */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Morumbi.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Morumbi"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Morumbi</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Morumbi precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Morumbi. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Morumbi"
        zone="Zona Sul"
        currentSlug="/avcb-morumbi"
      />



      <OccupationDepthBlock
        occupation="/Avcb Morumbi"
        currentSlug="/avcb-morumbi"
      />

      <InternalLinksBlock
        currentSlug="/avcb-morumbi"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Morumbi"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-morumbi" />
      <ServiceBlogLinks currentSlug="/avcb-morumbi" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-morumbi" />
    </>
  );
}

