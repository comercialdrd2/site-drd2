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
  Settings, Cross, Stethoscope, GraduationCap, Server,
  Trees, Landmark,
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

const _pageTitle = "AVCB em Barueri e Alphaville | Engenheiro para Corporativos, Condomínios e Shopping";
const _pageDesc = "AVCB em Barueri e Alphaville com engenheiro especializado. Regularização para torres corporativas, condomínios fechados de alto padrão, shoppings e galpões. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB em Barueri e Alphaville | Engenheiro para Corporativos, Condomínios e Shopping",
  description: "AVCB em Barueri e Alphaville com engenheiro especializado. Regularização para torres corporativas, condomínios fechados de alto padrão, shoppings e galpões. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-barueri-alphaville",
  },
};

export default function BarueriAlphavilleLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Torre corporativa em Alphaville com AVCB vencido — as empresas inquilinas podem ser impactadas?",
      answer: "Sim, diretamente. AVCB vencido pode resultar em embargo da torre — com impacto em todas as empresas ocupantes. Além disso, muitas multinacionais têm auditorias internas que exigem AVCB válido como condição de ocupação. Regularize com urgência."
    },
    {
      question: "Condomínio fechado horizontal em Alphaville — o AVCB cobre as mansões individuais?",
      answer: "Não. O AVCB do condomínio fechado cobre as áreas comuns — guaritas, clube, ruas internas, centros de convivência e equipamentos coletivos. Residências individuais, em geral, não precisam de AVCB próprio."
    },
    {
      question: "Shopping em Alphaville com AVCB vencido — pode ser embargado?",
      answer: "Sim. Shoppings sem AVCB estão sujeitos a embargo — com impacto em todas as lojas e operações. A responsabilidade é da administração do shopping. Para grandes empreendimentos, o risco financeiro do embargo é altíssimo."
    },
    {
      question: "Data center em Alphaville tem exigências específicas de AVCB?",
      answer: "Sim. Data centers têm exigências específicas das ITs do CBPMESP — incluindo sistemas de supressão por agente limpo (FM-200, Novec, Inergen ou similar) para proteção de equipamentos sem usar água. A DRD2 tem expertise nesse tipo de instalação."
    },
    {
      question: "Empresa inquilina de andar em torre corporativa — preciso de AVCB próprio?",
      answer: "Depende da configuração. Se o seu andar tem uso diferente do previsto no projeto original da torre, pode ser necessário AVCB próprio. Se o uso é o padrão (escritórios), geralmente o AVCB da torre cobre. A DRD2 avalia gratuitamente."
    },
    {
      question: "A DRD2 atende Alphaville com engenheiro dedicado?",
      answer: "Sim. Nossa equipe técnica atende Alphaville com o mesmo padrão aplicado em São Paulo capital. Visitas técnicas, projetos e acompanhamento do processo seguem o padrão profissional que a região exige."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-barueri-alphaville",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Barueri e Alphaville",
        serviceName: "AVCB em Barueri e Alphaville",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Regiões", item: "/avcb-grande-sp" },
          { name: "Barueri e Alphaville", item: "/avcb-barueri-alphaville" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image src="/images/hero-bar-com-show.webp" alt="Ambiente de bar e restaurante com estrutura de atendimento" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Maior Polo Corporativo da América Latina
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Barueri / Alphaville: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Torres Corporativas, Condomínios de Alto Padrão e Shoppings</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              A região é o coração de multinacionais, Data Centers e loteamentos de luxo. Esse perfil de altíssimo valor imobiliário exige engenharia transparente e sem espaço para amadorismo perante o Corpo de Bombeiros e auditorias privadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Engenheiro em Alphaville
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Projetos avançados para Condomínios Fechados Horizontais (Clubes e Guaritas).",
                "Certificação de Torres de Escritórios (Sprinklers, Fumaça e Pressurização).",
                "Comunicação clara com Construtoras, Síndicos e Auditorias de Multinacionais."
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
                Engenheiro de AVCB em Barueri: <br />
                <span className="text-red-600">Serviço Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico técnico gratuito com enquadramento nas rigorosas ITs do CBPMESP.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI de alta complexidade com ART junto ao CREA-SP.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Protocolo e acompanhamento junto ao Corpo de Bombeiros.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Resposta técnica impecável a Comunique-se para torres corporativas.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />AVCB para loteamentos, condomínios fechados horizontais e mistos.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />CLCB para estabelecimentos de menor porte em Barueri.</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento Premium em Barueri, Alphaville e Tamboré.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "AAA", sub: "Alto Padrão Corporativo" },
                { label: "100%", sub: "Padrão Transparência" },
                { label: "ITs", sub: "CBPMESP e Auditorias" },
                { label: "+400", sub: "Aprovações Realizadas" }
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

      {/* Demanda Expressiva (Dark Section cards) - "O que torna o AVCB em Alphaville especial" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <BadgeInfo className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-50" />
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Polo Comercial e a Natureza Única <br/><span className="text-red-500">Das Demandas de Alphaville</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Landmark, title: "Torres Corporativas", text: "Centros empresariais (dezenas de andares) com sistemas mastodônticos: Pressurização, Fumaça, Data Centers e Agentes Limpos." },
                { icon: Trees, title: "Loteamentos Fechados", text: "Mansões em Alphaville e Tamboré com AVCBs específicos cobrindo quilômetros de ruas internas, clubes esportivos e guaritas fortificadas." },
                { icon: Users, title: "Múltiplos Stakeholders", text: "A DRD2 alinha a comunicação crítica entre Construtora, Síndico, Inquilinos Multi-nacionais e Auditorias." },
                { icon: ShieldAlert, title: "Fiscalização Intensa", text: "Alphaville é uma das regiões de lupa máxima do Corpo de Bombeiros. Irregularidades cortam o acesso a grandes inquilinos empresariais." }
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

      {/* Regiões Atendidas em Barueri/Alphaville */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Principais Regiões de Atuação</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Alta Complexidade</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Alphaville Centro Empresarial</h3>
               <p className="text-slate-600 font-medium">O coração corporativo multinacional. Exigência estrita em torres na Alameda Rio Negro, Araguaia, Mamoré e Av. Cauaxi.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Tamboré & Loteamentos</h3>
               <p className="text-slate-600 font-medium">Alphaville é sinônimo de condomínios fechados horizontais. Atendemos a área inteira protegendo áreas de lazer, clubes internos e shopping centers de luxo da região.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Centro de Barueri</h3>
              <p className="text-slate-600 font-medium">Perfil mais tradicional. Condomínios residenciais de médio padrão e intenso comércio local em constante demanda de CLCB simplificado e rápidos alvarás.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Jardim Belval e Aldeia</h3>
              <p className="text-slate-600 font-medium">As artérias marginais da Castello Branco e do Rodoanel. Foco bruto em AVCB para imensos galpões e centros de distribuição da engrenagem metropolitana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Tipos de AVCB de Elite na <span className="text-red-600">Região</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Torres, Shoppings e Data Centers</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Sistemas incrivelmente complexos que interligam bombas e exaustão à rotas de evacuação em massa, cobrindo milhares de vidas. Data Centers locais usufruem atestados focados com Agentes Supressores Limpos para não perder milionárias máquinas.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🌳 Loteamentos Fechados de Alto Padrão</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Diferente de um prédio, as áreas pulverizadas de condomínios luxuosos de Tamboré necessitam de laudos unificados sem engessar as mansões. Processos estendidos a condomínios mistos com torres em formato premium (Academias e áreas gourmets).</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🚚 Galpões Logísticos (Castello e Rodoanel)</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Cargas milionárias necessitam de redes de sprinklers calculadas milimetricamente de acordo com a pilha. Oferecemos segurança operacional irretocável em laudos voltados para o CBPMESP.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">O Processo CBPMESP <br/><span className="text-red-600 italic">Profissional e Pontual</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Com enquadramento das mega-estruturas." },
              { step: "2", title: "Escopo Claro", desc: "Acordo claro sem surpresas." },
              { step: "3", title: "Projeto PPCI", desc: "Precisão com ART no CREA-SP." },
              { step: "4", title: "Protocolo", desc: "Acompanhamento digital intenso." },
              { step: "5", title: "Vistoria Final", desc: "Presença e certificação em Alphaville." },
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
               <h4 className="text-2xl mb-4">Prazos e Custos (Barueri)</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Torres Corporativas Gigantes: 120 a 240 dias</li>
                 <li>• Loteamentos Fechados Horizontais: 120 a 180 dias</li>
                 <li>• Edifícios Residenciais Padrão: 60 a 90 dias</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Custos ancorados em uma análise transparente e prévia sem taxa extra.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Acionar Engenheiro</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Barueri Alphaville com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Barueri Alphaville, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">Alphaville</span></h2>
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
           <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Extremos de São Paulo</h3>
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Além de Alphaville e Barueri, a DRD2 atende Cotia, Santana de Parnaíba, Carapicuíba, Itapevi e a vigorosa Zona Oeste de São Paulo (Vila Leopoldina, Jaguaré, Butantã e Pinheiros).</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Precisa de AVCB em Alphaville?</h3>
              <p className="text-slate-400 font-medium italic text-sm">Escritório especializado em aprovar torres e condomínios que demandam O Padrão Corporativo de Serviços.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              WhatsApp Corporativo
            </a>
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA 4 â"€â"€ */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Barueri Alphaville.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Barueri Alphaville"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Barueri Alphaville</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Barueri Alphaville precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Barueri Alphaville. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Barueri Alphaville"
        zone="Grande SP"
        currentSlug="/avcb-barueri-alphaville"
      />



      <OccupationDepthBlock
        occupation="/Avcb Barueri Alphaville"
        currentSlug="/avcb-barueri-alphaville"
      />

      <InternalLinksBlock
        currentSlug="/avcb-barueri-alphaville"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Barueri/Alphaville"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-barueri-alphaville" />
      <ServiceBlogLinks currentSlug="/avcb-barueri-alphaville" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-barueri-alphaville" />
    </>
  );
}

