import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  Scale, Library, FileCheck, Shield, BookOpen,
  Lightbulb, MapPin, Map, Bell, ArrowRight,
  Users, Building2, Building, Activity, Store,
  Zap, Truck, Warehouse, Utensils, GlassWater,
  Music, HelpCircle, HeartPulse, ClipboardCheck, Siren,
  HardHat, Target, FileText,
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

const _pageTitle = "AVCB em Guarulhos SP | Engenheiro para Galpões, Indústrias e Condomínios";
const _pageDesc = "AVCB em Guarulhos com engenheiro especializado. Regularização para galpões industriais, centros de distribuição, condomínios e comércio. Cobertura Cumbica, Bonsucesso e região. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB em Guarulhos SP | Engenheiro para Galpões, Indústrias e Condomínios",
  description: "AVCB em Guarulhos com engenheiro especializado. Regularização para galpões industriais, centros de distribuição, condomínios e comércio. Cobertura Cumbica, Bonsucesso e região. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-guarulhos",
  },
};

export default function GuarulhosLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Galpão logístico em Cumbica sem AVCB — risco de perder contrato com o aeroporto?",
      answer: "Sim. Operações logísticas vinculadas ao aeroporto têm exigências contratuais rigorosas — incluindo AVCB válido. Muitas empresas rescindem contratos de operadores sem regularização. Iniciar o processo imediatamente é fundamental."
    },
    {
      question: "AVCB em Guarulhos é feito pelo mesmo Corpo de Bombeiros de São Paulo?",
      answer: "Sim. Guarulhos é fiscalizada pelo mesmo CBPMESP que atua na capital. As Instruções Técnicas são idênticas e o processo segue o mesmo fluxo. A DRD2 tem experiência consolidada nesse órgão."
    },
    {
      question: "Condomínio novo em Guarulhos — a construtora precisa entregar com AVCB?",
      answer: "A obrigação de entrega do AVCB pela construtora depende do contrato firmado. Se o condomínio foi entregue sem o certificado, a responsabilidade passa ao síndico. A DRD2 conduz o processo do zero com prazo e custo definidos."
    },
    {
      question: "Indústria em Guarulhos com produtos químicos — o AVCB é mais caro?",
      answer: "Sim. Produtos químicos têm classificação de risco específica — com exigências de detecção, supressão e compartimentação proporcionais. O custo é maior pela complexidade, mas a DRD2 apresenta o custo real no diagnóstico gratuito."
    },
    {
      question: "A DRD2 atende Guarulhos com a mesma agilidade que São Paulo?",
      answer: "Sim. Nossa equipe técnica atende Guarulhos com o mesmo padrão de qualidade e velocidade aplicado em toda a Grande SP. Visitas técnicas, projetos e acompanhamento do processo seguem o mesmo padrão."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-guarulhos",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Guarulhos",
        serviceName: "AVCB em Guarulhos",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Regiões", item: "/avcb-grande-sp" },
          { name: "Guarulhos", item: "/avcb-guarulhos" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/blog_hero_avcb_galpao.webp"
          alt="Regularização de AVCB em Guarulhos"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Maior Cidade da Grande SP
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Guarulhos: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Regularização para Galpões, Indústrias e Condomínios</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Guarulhos é a segunda maior cidade de SP e o maior polo logístico. Com o Aeroporto (GRU), a fiscalização do CBPMESP é implacável. Sem o AVCB, sua empresa corre risco diário de interdição e multas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com engenheiro especialista (Guarulhos)
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Atendimento com Expertise de Capital em Guarulhos",
                "As Instruções Técnicas (ITs) são rigorosamente idênticas",
                "Soluções para demandas complexas logísticas e aeroportuárias",
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
                Engenheiro de AVCB em Guarulhos: <br />
                <span className="text-red-600">Serviço Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico técnico gratuito com classificação de risco.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI completo com ART junto ao CREA-SP.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Protocolo e acompanhamento junto ao Corpo de Bombeiros.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Resposta técnica a Comunique-se sem custo adicional.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Renovação de AVCB vencido com urgência e CLCB para baixo risco.</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "GRU", sub: "Polo Logístico Base" },
                { label: "+100", sub: "Galpões Aprovados" },
                { label: "24h", sub: "Resposta Técnica" },
                { label: "100%", sub: "Padrão de Exigência CBPMESP" }
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
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Por que Guarulhos tem <br/><span className="text-red-500">Demanda Expressiva de AVCB?</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Truck, title: "Polo Logístico", text: "Empresas ligadas ao Aeroporto demandam galpões com AVCB válido como exigência contratual vital." },
                { icon: Activity, title: "Parque Industrial", text: "Farmacêuticas, automotivas e alimentícias – cada uma com exigências complexas do CBPMESP." },
                { icon: Building, title: "Expansão Residencial", text: "Novos empreendimentos que precisam do certificado aprovado desde a entrega das chaves." },
                { icon: ShieldAlert, title: "Fiscalização Ativa", text: "A corporação em Guarulhos é uma das mais ativas, tornando o risco de atuação constante." }
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

      {/* Regiões Atendidas em Guarulhos */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Principais Regiões Atendidas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Centro de Guarulhos</h3>
              <p className="text-slate-600 font-medium">Comércio popular intenso, serviços corporativos e condomínios que precisam renovar o alvará rapidamente ou realizar licenciamento pela VISA.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Alta Complexidade</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Cumbica e Aeroporto</h3>
               <p className="text-slate-600 font-medium">Concentração de mega galpões e operadoras de carga. O AVCB exige classificação de risco rigorosa para diferentes tipos de materiais armazenados.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Bonsucesso e V. Galvão</h3>
              <p className="text-slate-600 font-medium">Perfil misto com demanda agressiva de AVCB para novos comércios e primeira regularização de blocos residenciais.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Indústrias (Cocaia, Pimentas)</h3>
              <p className="text-slate-600 font-medium">Atendimento a indústrias de médio e grande porte com processos de alta complexidade em incêndio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Tipos de AVCB Comuns em <span className="text-red-600">Guarulhos</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🚀 AVCB para Galpões Logísticos</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Galpões logísticos são o perfil de maior complexidade e ticket em Guarulhos. A proximidade com a Dutra atrai operações de até 50.000 m². O dimensionamento de sprinklers e detecção exige controle preciso.</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏭 AVCB para Indústrias</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Processos com inflamáveis ou produtos químicos demandam sistemas de proteção completamente personalizados e proporcionais ao risco (Farmacêuticas e Automotivas).</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Condomínios e Comércios</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Novos prédios necessitam de emissão imediata e antigas edificações requerem renovação. Lojas, restaurantes e academias utilizam o formato CLCB econômico para liberação comercial do município.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">O Processo Exato <br/><span className="text-red-600 italic">Sem Comunique-se</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Visita e Análise de Risco." },
              { step: "2", title: "Proposta", desc: "Escopo e valores finais." },
              { step: "3", title: "Projeto", desc: "Desenho Técnico com ART." },
              { step: "4", title: "Protocolo", desc: "Submissão no CBPMESP." },
              { step: "5", title: "Vistoria", desc: "Acompanhamento c/ Bombeiro." },
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
               <h4 className="text-2xl mb-4">Prazos e Custos Claros</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Galpões industriais/logísticos: 90 a 180 dias</li>
                 <li>• Condomínios com sistemas vigentes: 60 a 90 dias</li>
                 <li>• CLCB simplificado para comércio: 30 a 60 dias</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Orçamento real após vista gratuita e engenharia garantida.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Solicitar Visita</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Guarulhos com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Guarulhos, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">Guarulhos</span></h2>
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
           <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Cidades Vizinhas</h3>
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Além de Guarulhos, a DRD2 atende Arujá, Itaquaquecetuba, Poá e a região leste da capital (Itaquera, São Miguel e Penha). </p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Regularização em Guarulhos</h3>
              <p className="text-slate-400 font-medium italic text-sm">Escritório especializado. Análise e Proposta em até 24h.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Diagnóstico Grátis Agora
            </a>
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA 4 â"€â"€ */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Guarulhos.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Guarulhos"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Guarulhos</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Guarulhos precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Guarulhos. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Guarulhos"
        zone="Grande SP"
        currentSlug="/avcb-guarulhos"
      />



      <OccupationDepthBlock
        occupation="/Avcb Guarulhos"
        currentSlug="/avcb-guarulhos"
      />

      <InternalLinksBlock
        currentSlug="/avcb-guarulhos"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Guarulhos"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-guarulhos" />
      <ServiceBlogLinks currentSlug="/avcb-guarulhos" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-guarulhos" />
    </>
  );
}

