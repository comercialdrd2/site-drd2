import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  Scale, Library, FileCheck, Shield, BookOpen,
  Lightbulb, MapPin, Map, Bell, ArrowRight,
  Users, Building2, Building, Activity, Store,
  Zap, Truck, Warehouse, Utensils, GlassWater,
  Music, HelpCircle, HeartPulse, ClipboardCheck, Siren,
  Target, Briefcase, Factory, Hexagon, Car,
  Settings, Cross, Stethoscope, GraduationCap,
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

const _pageTitle = "AVCB em São Caetano do Sul SP | Engenheiro para Condomínios, Galpões e Clínicas";
const _pageDesc = "AVCB em São Caetano do Sul com engenheiro especializado. Regularização para condomínios, galpões, clínicas e comércio no ABC Paulista. DRD2 Engenharia atende toda São Caetano.";

export const metadata = {
  title: "AVCB em São Caetano do Sul SP | Engenheiro para Condomínios, Galpões e Clínicas",
  description: "AVCB em São Caetano do Sul com engenheiro especializado. Regularização para condomínios, galpões, clínicas e comércio no ABC Paulista. DRD2 Engenharia atende toda São Caetano.",
  alternates: {
    canonical: "/avcb-sao-caetano",
  },
};

export default function SaoCaetanoLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Condomínio novo em Santa Paula — a construtora entregou sem AVCB. Quem resolve?",
      answer: "A responsabilidade após a entrega das chaves passa ao síndico — ainda que a construtora tivesse obrigação contratual de entregar o AVCB. A DRD2 conduz o processo do zero com prazo e custo definidos no diagnóstico."
    },
    {
      question: "Clínica médica em São Caetano precisa de AVCB para licença da VISA?",
      answer: "Sim. A Vigilância Sanitária Estadual exige AVCB válido como condição para licenciamento de atividades de saúde em São Caetano — assim como em toda São Paulo."
    },
    {
      question: "AVCB em São Caetano é feito pelo mesmo Corpo de Bombeiros de SP?",
      answer: "Sim. São Caetano do Sul é fiscalizada pelo CBPMESP — o mesmo Corpo de Bombeiros que atua na capital. As Instruções Técnicas aplicadas são idênticas e o processo segue o mesmo fluxo."
    },
    {
      question: "Escola em São Caetano precisa de AVCB próprio?",
      answer: "Sim. Escolas e instituições de ensino são obrigadas a ter AVCB. O processo envolve exigências específicas para rotas de fuga para o público jovem. A DRD2 tem experiência específica nesse tipo de ocupação."
    },
    {
      question: "A DRD2 atende condomínio pequeno em São Caetano?",
      answer: "Sim. Atendemos condomínios de todos os portes. Para condomínios de menor porte e baixo risco, avaliamos o enquadramento em CLCB — processo mais rápido e econômico."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-sao-caetano",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "São Caetano do Sul",
        serviceName: "AVCB em São Caetano do Sul",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Regiões", item: "/avcb-abc-paulista" },
          { name: "São Caetano do Sul", item: "/avcb-sao-caetano" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/blog_hero_avcb_galpao.webp"
          alt="Regularização de AVCB em São Caetano do Sul - ABC"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Qualidade de Vida e Alto Padrão
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em São Caetano: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Regularização para Condomínios, Clínicas, Galpões e Comércio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Com infraestrutura premiada, São Caetano possui forte atuação de clínicas de saúde e um estoque massivo de condomínios verticais de luxo. A cidade lida com o mesmo padrão rígido de exigências da capital (CBPMESP e VISA).
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
                "Projetos de Combate a Incêndio p/ Condomínios de Múltiplas Torres.",
                "Homologação imediata para Licenças Médicas de Clínicas e VISA.",
                "Especialistas DRD2 de dedicação integral ao ABC Paulista."
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
                Engenheiro de AVCB em São Caetano: <br />
                <span className="text-red-600">Serviço Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico técnico gratuito com enquadramento nas ITs do CBPMESP.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI com ART junto ao CREA-SP.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Protocolo e acompanhamento junto ao Corpo de Bombeiros.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Resposta técnica a Comunique-se sem custo adicional.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Renovação de AVCB vencido para residenciais e comerciais.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />CLCB para estabelecimentos de menor porte.</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento em toda a cidade de São Caetano do Sul.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "SCS", sub: "Cobertura Completa" },
                { label: "Ouro", sub: "Padrão Saúde/Habitação" },
                { label: "100%", sub: "Padrão SP Capital" },
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
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">São Caetano: Demanda de AVCB em um <br/><span className="text-red-500">Polo de Alta Qualidade de Vida</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Building, title: "Condomínios Verticais", text: "O estoque combina edifícios tradicionais a modernos residenciais de alto padrão em primeira regularização." },
                { icon: HeartPulse, title: "Polo Médico", text: "Concentração imensa de clínicas, laboratórios e centros hospitalares regidos por exigências máximas da VISA/SP." },
                { icon: Store, title: "Comércio Qualificado", text: "Comércio sofisticado no ABC que necessita de renovação expressa em alvarás e inspeções estruturais." },
                { icon: Factory, title: "Indústrias Consistentes", text: "Mesmo em ambiente urbano fechado, o bairro mantém fortes raízes fabris de médio/grande porte na ativa." }
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

      {/* Regiões Atendidas em São Caetano */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Principais Bairros em SC do Sul</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Centro de São Caetano</h3>
              <p className="text-slate-600 font-medium">Comércio, edifícios corporativos e serviços. Demanda intensa de revalidação de alvarás do lojista e lojista de rua.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Santa Paula e Nova Gerty</h3>
               <p className="text-slate-600 font-medium">Condomínios de luxo e construções modernas. Demanda de projetos focados em áreas de uso coletivo interligado e comércios locais premium.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Olímpico e Cerâmica</h3>
              <p className="text-slate-600 font-medium">Extenso estoque consolidado e de tradição que na enorme maioria carece de renovações iminentes por laudos com prazo expirado.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Alta Complexidade</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Centro Industrial (Prosperidade)</h3>
              <p className="text-slate-600 font-medium">Zonas ricas em galpões e antigas tecelagens que precisam operar dentro das complexidades da fiscalização pesada do ABC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Tipos de AVCB Comuns na <span className="text-red-600">Cidade</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏨 Condomínios Residenciais Premium</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Condomínios com infraestruturas abertas como academias, piscinas e varandas gourmet demandam projetos técnicos que englobam a malha de evacuação do prédio. Resolvemos primeira emissão de modo cirúrgico.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🩺 Clínicas e Saúde Plena</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Estabelecimentos médicos necessitam de rotas de fuga adaptadas a leitos, sistemas de automação de urgência e agentes extintores limpos (destinados a equipamentos de exames). A DRD2 te alinha imediatamente a Vigilância (VISA).</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏫 Educação, Escolas e Logística</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">O ABC tem referência forte em Escolas privadas e Shoppings consolidados. O risco da população estudantil demanda portas de saída específicas. Indústrias na Prosperidade também ganham suporte de classe de Risco adaptada.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Sua Liberação Rápida <br/><span className="text-red-600 italic">No CBPMESP Padrão Capital</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Visita Técnica", desc: "Laudo local e checagem de ITs." },
              { step: "2", title: "Escopo Certo", desc: "Você sabe exatamente o valor." },
              { step: "3", title: "Projeto Oficial", desc: "Engenharia documentada c/ ART." },
              { step: "4", title: "Protocolo", desc: "Portal do Corpo de Bombeiros." },
              { step: "5", title: "Garantia", desc: "Documento (AVCB/CLCB) emitido." },
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
               <h4 className="text-2xl mb-4">Prazos Claros de Envio</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Galpões da Prosperidade/Industriais: 90 a 150 dias</li>
                 <li>• Condomínios (alto padrão e blocos): 60 a 90 dias</li>
                 <li>• CLCB (lojas e clínicas pequenas): 30 a 60 dias</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Orçamentos baseados no tamanho e finalidade de planta.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Converse com Engenheiro</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Sao Caetano com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Sao Caetano, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">São Caetano</span></h2>
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
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Além de São Caetano, nossa sede atende ferozmente Santo André, São Bernardo do Campo, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra.</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Regularização Ágil no ABC</h3>
              <p className="text-slate-400 font-medium italic text-sm">Escritório especializado. Análise técnica sem custos iniciais em até 24 horas.</p>
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
            Não arrisque seu CNPJ em Sao Caetano.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Sao Caetano"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Sao Caetano</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Sao Caetano precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Sao Caetano. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Sao Caetano"
        zone="Grande SP"
        currentSlug="/avcb-sao-caetano"
      />



      <OccupationDepthBlock
        occupation="/Avcb Sao Caetano"
        currentSlug="/avcb-sao-caetano"
      />

      <InternalLinksBlock
        currentSlug="/avcb-sao-caetano"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em São Caetano"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-sao-caetano" />
      <ServiceBlogLinks currentSlug="/avcb-sao-caetano" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-sao-caetano" />
    </>
  );
}

