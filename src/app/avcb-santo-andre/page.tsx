import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  Scale, Library, FileCheck, Shield, BookOpen,
  Lightbulb, MapPin, Map, Bell, ArrowRight,
  Users, Building2, Building, Activity, Store,
  Zap, Truck, Warehouse, Utensils, GlassWater,
  Music, HelpCircle, HeartPulse, ClipboardCheck, Siren,
  Target, Briefcase, Factory, Hexagon,
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

const _pageTitle = "AVCB em Santo André SP | Engenheiro para Indústrias, Galpões e Condomínios no ABC";
const _pageDesc = "AVCB em Santo André (ABC) com engenheiro especializado. Regularização para indústrias, galpões, condomínios e comércio no ABC Paulista. DRD2 Engenharia atende toda Santo André.";

export const metadata = {
  title: "AVCB em Santo André SP | Engenheiro para Indústrias, Galpões e Condomínios no ABC",
  description: "AVCB em Santo André (ABC) com engenheiro especializado. Regularização para indústrias, galpões, condomínios e comércio no ABC Paulista. DRD2 Engenharia atende toda Santo André.",
  alternates: {
    canonical: "/avcb-santo-andre",
  },
};

export default function SantoAndreLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Indústria química em Capuava sem AVCB há anos — quais os riscos?",
      answer: "Risco máximo. Indústrias químicas têm fiscalização rigorosa — tanto do Corpo de Bombeiros quanto da CETESB. Operar sem AVCB expõe a empresa a embargo imediato, multas elevadas e, em caso de sinistro, responsabilidade civil e criminal com consequências que podem envolver vítimas. Regularize com urgência."
    },
    {
      question: "Galpão em Santo André que vai alugar para operação logística — quem paga o AVCB?",
      answer: "Em geral, o AVCB da estrutura é responsabilidade do proprietário. O AVCB da atividade logística pode ser do locatário, dependendo do contrato. A DRD2 avalia a situação e orienta as partes gratuitamente."
    },
    {
      question: "Condomínio novo em Santo André com AVCB nunca emitido — o síndico pode ser multado?",
      answer: "Sim. O síndico é o responsável legal pelo AVCB após a entrega das chaves. Se a construtora não entregou o certificado, o síndico assume a responsabilidade e pode ser autuado em fiscalização."
    },
    {
      question: "Shopping em Santo André com AVCB vencido — pode funcionar normalmente?",
      answer: "Não. Shopping sem AVCB está irregular e sujeito a embargo — o que afetaria todas as lojas e operações. A responsabilidade é da administração. Regularização urgente."
    },
    {
      question: "A DRD2 atende Santo André com engenheiro local?",
      answer: "Sim. Atendemos toda a cidade com equipe técnica dedicada. O processo tem o mesmo padrão de qualidade e agilidade aplicado em São Paulo capital."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-santo-andre",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Santo André",
        serviceName: "AVCB em Santo André",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Regiões", item: "/avcb-abc-paulista" },
          { name: "Santo André", item: "/avcb-santo-andre" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Regularização de AVCB em Santo André - ABC"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Principal Polo do ABC Paulista
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Santo André: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Regularização para Indústrias, Galpões e Condomínios no ABC Paulista</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Santo André concentra indústrias automotivas, químicas e farmacêuticas. Essa vocação econômica de operações e complexos de alta periculosidade gera demanda constante para engenharia especializada perante o CBPMESP.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com engenheiro especialista no ABC
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Atendemos Indústrias Químicas e Automotivas (Altíssima Complexidade).",
                "Resposta Técnica a Comunique-se ou regularização urgente.",
                "Especialistas Exclusivos em Segurança Contra Incêndio no ABC."
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

      {/* Intro (SEO TEXT) + Numbers Style */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-slate-700">
               <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Engenheiro de AVCB no ABC: <br />
                <span className="text-red-600">Serviço Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico técnico gratuito com classificação de risco industrial.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI de alta complexidade com ART junto ao CREA-SP.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Protocolo e acompanhamento junto ao Corpo de Bombeiros.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Resposta técnica a Comunique-se sem custo adicional.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Renovação de AVCB vencido para indústrias e galpões.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />CLCB para estabelecimentos comerciais de menor porte e baixo risco.</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento especializado em toda a cidade de Santo André.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "ABC", sub: "Cobertura Completa" },
                { label: "Alta", sub: "Capacidade Industrial" },
                { label: "100%", sub: "Enquadramento ITs" },
                { label: "+400", sub: "Projetos Aprovados" }
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

      {/* Demanda Expressiva (Dark Section cards) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <BadgeInfo className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-50" />
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Santo André: Perfil Industrial e <br/><span className="text-red-500">Demandas Críticas de AVCB</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Factory, title: "Herança Industrial", text: "Muitas indústrias operam com AVCB desatualizado ou passaram por ampliação. Necessitam atualização urgente de PPCI." },
                { icon: Hexagon, title: "Indústrias Químicas", text: "Polo químico exige projetos complexos por armazenagem de inflamáveis e alto risco de explosão." },
                { icon: Building2, title: "Verticalização Recente", text: "Expansão intensa de novos condomínios residenciais que necessitam do Certificado para entrega das chaves." },
                { icon: ShieldAlert, title: "Fiscalização Ativa", text: "O CBPMESP em Santo André autua ativamente, tornando a irregularidade com AVCB um risco legal e imediato." }
              ].map((item, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all">
                  <item.icon className="w-10 h-10 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-white">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Regiões Atendidas em Santo André */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Principais Regiões de Santo André</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Centro de Santo André</h3>
              <p className="text-slate-600 font-medium">Comércio intenso, serviços, edifícios corporativos e condomínios que demandam alvará na cidade do ABC paulista.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Altíssima Complexidade</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Capuava e Campestre</h3>
               <p className="text-slate-600 font-medium">Os principais polos industriais de Santo André. Refinarias, indústrias químicas e processos rigorosos de aprovação.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Jardim e Bangu</h3>
              <p className="text-slate-600 font-medium">Regiões residenciais de médio/alto padrão. Condomínios verticais e clínicas buscando renovação ou emissão original.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Santa Maria e Utinga</h3>
              <p className="text-slate-600 font-medium">Regiões de perfil misto. Residenciais que se misturam a áreas comerciais e galpões de logísticas industriais agregadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Tipos de AVCB Comuns em <span className="text-red-600">Santo André</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏭 Indústrias de Grande Porte e Galpões</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Indústrias químicas, automotivas e metalúrgicas no ABC têm processos entre os mais complexos do Estado. Armazenagem de inflamáveis exige sistemas como espuma, sprinkler especializado e detecção de gases específicos com compartimentação extrema.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏬 Shopping Centers, Comércio e Saúde</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Estabelecimentos que abrigam alto volume de público. Hospitais, clínicas e shoppings envolvem documentações rígidas para VISA local e sistemas integrados interligados nas bombas do CBPMESP.</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Condomínios Residenciais Verticais</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Atendimento contínuo à forte expansão de torres e blocos em bairros como Campestre e Jardim. Realizamos AVCB de primeira emissão e sistemas consolidados de hidrantes.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">O Processo Exato <br/><span className="text-red-600 italic">No ABC Paulista</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Com classificação ind. detalhada." },
              { step: "2", title: "Proposta", desc: "Escopo e valores finais reais." },
              { step: "3", title: "Projeto", desc: "Documentação c/ ART CREA." },
              { step: "4", title: "Protocolo", desc: "Submissão Via Fácil CBPMESP." },
              { step: "5", title: "Vistoria", desc: "Emissão oficial do AVCB/CLCB." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
                 <div className="w-12 h-12 bg-red-600 text-white font-black text-xl flex items-center justify-center rounded-full mx-auto mb-6">{item.step}</div>
                 <h3 className="text-white font-black uppercase text-lg mb-2">{item.title}</h3>
                 <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-red-600 text-white rounded-[2rem] p-10 max-w-3xl mx-auto shadow-2xl font-black uppercase flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
             <div>
               <h4 className="text-2xl mb-4">Prazos e Custos Região</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Indústria de grande porte: 120 a 180 dias</li>
                 <li>• Condomínios (manutenções em ordem): 60 a 90 dias</li>
                 <li>• CLCB (lojinhas): 30 a 60 dias</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Risco Químico acarreta projetos de alto detalhamento.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Acionar Engenheiro</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Santo Andre com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Santo Andre, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">FAQ: Segurança Contra Incêndio no <span className="text-red-600">ABC</span></h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <details key={i} className="group bg-white rounded-[2rem] p-8 border border-slate-100 open:shadow-2xl transition-all cursor-pointer">
                <summary className="text-xl font-extrabold text-slate-900 list-none flex justify-between items-center pr-4 leading-tight">
                  {faq.question}
                  <span className="text-red-600 text-3xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-6 text-slate-600 leading-relaxed font-bold border-t border-slate-100 pt-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
           <Map className="w-12 h-12 text-red-900 mx-auto mb-6" />
           <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Todo o ABC Paulista</h3>
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Além de Santo André, a DRD2 atende São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra.</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Precisa de AVCB em Santo André?</h3>
              <p className="text-slate-400 font-medium italic text-sm">Escritório especializado. Análise e Proposta em até 24 horas.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              WhatsApp Agora
            </a>
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA 4 â"€â"€ */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Santo Andre.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Santo Andre"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Santo Andre</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Santo Andre precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Santo Andre. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <InternalLinksBlock
        currentSlug="/avcb-santo-andre"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Santo André"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-santo-andre" />
      <ServiceBlogLinks currentSlug="/avcb-santo-andre" />

      <NeighborhoodSilo currentSlug="/avcb-santo-andre" />
    </>
  );
}

