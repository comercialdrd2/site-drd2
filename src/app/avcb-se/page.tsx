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
  Trees, Landmark, StethoscopeIcon, Bed, Moon,
  Map as MapIcon, Key, FileWarning, EyeOff, Flame,
  ScrollText,
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

const _pageTitle = "AVCB na Sé SP | Engenheiro para Edifícios Históricos, Condomínios e Comércio";
const _pageDesc = "AVCB na Sé com engenheiro especializado. Regularização para edifícios históricos, patrimônio tombado, condomínios e comércio na Praça da Sé e região central. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB na Sé SP | Engenheiro para Edifícios Históricos, Condomínios e Comércio",
  description: "AVCB na Sé com engenheiro especializado. Regularização para edifícios históricos, patrimônio tombado, condomínios e comércio na Praça da Sé e região central. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-se",
  },
};

export default function SeLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Edifício tombado na Sé — o Corpo de Bombeiros vai exigir a demolição de paredes históricas para instalar o AVCB?",
      answer: "Não. As ITs do CBPMESP reconhecem a existência de restrições em edificações históricas e preveem medidas compensatórias. A DRD2 identifica as alternativas técnicas viáveis — o objetivo é sempre encontrar a solução que atenda às normas sem comprometer o patrimônio."
    },
    {
      question: "Edifício comercial antigo na Sé sem projeto original — é possível regularizar?",
      answer: "Sim. O processo começa com um levantamento técnico completo do imóvel. A DRD2 produz toda a documentação necessária para o projeto PPCI a partir do estado atual da edificação."
    },
    {
      question: "Condomínio na Sé com AVCB nunca emitido — o síndico pode ser responsabilizado?",
      answer: "Sim. O síndico é o responsável legal pelo AVCB do condomínio. Em caso de fiscalização ou sinistro, responde pela irregularidade. A regularização protege o síndico e os moradores."
    },
    {
      question: "AVCB de imóvel histórico na Sé precisa de aprovação do CONDEPHAAT antes do Corpo de Bombeiros?",
      answer: "Em alguns casos, sim — especialmente quando a instalação dos sistemas exige intervenções físicas no imóvel tombado. A DRD2 coordena todo o processo, incluindo a aprovação nos órgãos de patrimônio quando necessário."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-se",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Sé",
        serviceName: "AVCB na Sé",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Centro Histórico", item: "/avcb-centro" },
          { name: "Sé", item: "/avcb-se" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Regularização de AVCB para Edifícios Históricos e Patrimônio Tombado na Sé"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Centro Histórico & Patrimônio Tombado
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB na Sé: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Legalização de Edifícios Históricos, Uso Misto e Comércio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Dos Prédios do Século XIX aos comércios de uso misto enraizados, o Centro é um labirinto normativo. Nós conectamos a engenharia pericial às aprovações especiais do Corpo de Bombeiros e órgãos do Trombamento (CONPRESP).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Auditoria de Legalização no Marco Zero
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Soluções em Imóveis Históricos com aprovação no CONDEPHAAT / CONPRESP.",
                "Estratégia Compensatória que Não agride paredes e estruturações proibidas.",
                "Renovação de Condomínios e Lojistas do Varejo Popular no Triângulo."
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
                Puro Domínio Documental:<br />
                <span className="text-red-600">Alta Especificidade DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico presencial de plantas "In Loco" perdidas pelo tempo na região.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto focado nas Medidas Compensatórias para Imóveis Históricos sem viabilidade agressiva.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Articulação irretocável entre as esferas Governistas: Bombeiro x CONPRESP.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Alinhamento misto que difere responsabilidades do andar logista para o síndico aéreo.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />CLCB rápido para estabilizar lojistas que estão sofrendo notificação de interdição na porta.</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento presencial na Praça da Sé e Corredores Financeiros Históricos.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Ouro", sub: "Tombamentos Sec. XX" },
                { label: "Misto", sub: "Aprovações Segmentadas" },
                { label: "Planta", sub: "Recriação Especializada" },
                { label: "100%", sub: "Processo Integrado" }
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

      {/* Demanda Expressiva (Dark Section cards) - "Desafios de AVCB na Sé" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <ScrollText className="w-16 h-16 text-yellow-500 mx-auto mb-8 opacity-70" />
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Impasse entre a Prevenção <br/><span className="text-red-500">E a Lei de Tombamentos Históricos</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Landmark, title: "Choque de Órgãos", text: "Você não pode furar uma parede de Século XIX. Para intervir e colocar canos anti-chamas o engenheiro da DRD2 precisa primeiro provar tese ao estadual e municipal." },
                { icon: Scale, title: "Uso Misto Acumulativo", text: "Os projetos antigos fundiam escritórios à moradias populares e Lojas. O laudo mal feito gera um efeito cascata que inviabiliza as renovações separadas em andares mistos." },
                { icon: MapIcon, title: "Plantas Desaparecidas", text: "Como legalizar um prédio erguido em 1910 cujo os donos não possuem registro do encanamento de prevenção? Apenas com vistoria pericial intensiva e planta refeita." },
                { icon: Store, title: "Comércio Popular", text: "Corredores como a Rangel Pestana recebem massiva carga de estoque inflamável em pequenos balcões, onde a interdição bate na porta de forma implacável antes que percebam." }
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

      {/* Regiões Atendidas na Sé */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Artérias do Marco Zero</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Coração do Patrimônio</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Praça da Sé & Viaduto do Chá</h3>
               <p className="text-slate-600 font-medium">Os cartões postais de São Paulo. Concentração absurda de grandes edifícios tombados e museus que abrigam segredos de estruturas complexas onde o CBPMESP tem pulso firme.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-900 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-900 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">História Comercial</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Direita, XV de Novemb. & Patriarca</h3>
               <p className="text-slate-600 font-medium">Os corredores financeiros originais. Alto valor atrelado a construções blindadas, onde aprovações dependem de soluções de proteção compensatória invisíveis às fachadas.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">João Brícola e Ben. Constant</h3>
              <p className="text-slate-600 font-medium">Andares de uso estritamente mistos (Comércio Ativo debaixo, CondomÍNios Históricos Residencias acima). Tratativas que requerem separação inteligente da licença do negócio.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Avenida Rangel Pestana</h3>
              <p className="text-slate-600 font-medium">A via aorta de ligação à Zona Leste. Fluxo varejista altíssimo onde centenas de lojistas locais garantem e escoram seu fluxo contínuo mantendo laudos CLCB ativos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Especialidade em Patrimônio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Sistemas Intocáveis do <span className="text-red-600">Séc. XX</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-yellow-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏛️ Edifícios Tombados e Equipamentos Culturais</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Desenhamos soluções híbridas para fachadas bloqueadas. As ITs preveem táticas ocultas, aumento de saídas de rotação ou compartimentações isoladas que impedem que o CONDEPHAAT indefira as instalações obrigatórias para sua segurança.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Prédios Mistos (Lojas Térreas vs Síndicos Aéreos)</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">O Ponto fraco do Centro: uma obra embargada pelo uso do pavimento inferior contamina os moradores do superior. Mapeamos com precisão exigências independentes, permitindo fluxo de licenças em paz mútua.</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">📦 Lojas Populares e Estoques Densos</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Estabelecimentos densos em insumos e materiais espalhados precisam agir ágeis perante os despachos renovatórios da praça antes que fiscais embarguem operações que sustentam centenas de pessoas. Acesso CLCB Premium DRD2.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2 e Patrimonio Integrado) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">O Método Tático para <br/><span className="text-red-600 italic">Prédios Tombados (CONPRESP)</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Expedição Histórica", desc: "Produção 'in-loco' das plantas da edificação original vazia." },
              { step: "2", title: "Viabilidade", desc: "Identificação do que PODE ser quebrado sem ferir as leis da Sé." },
              { step: "3", title: "Compensatória", desc: "Desenho da Extinção Alternativa não invasiva via ITs." },
              { step: "4", title: "Corpo Histórico", desc: "Aprovação em Conselhos Oficiais Patrimoniais e CREA." },
              { step: "5", title: "Segurança Ativa", desc: "Projeto Master e Vistoria com Tenência Bombeiro Físico." },
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
               <h4 className="text-2xl mb-4">Investimentos de Alto Alcance Político</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Imóveis Históricos & Órgãos Ativos: Prazo de acordo com o ritmo Institucional (Tombado)</li>
                 <li>• Condomínios Sem Tombamentos e Obras Finais: 60 a 90 dias</li>
                 <li>• Comércio Terrestre (Lojas e Serviços de Rua) CLCB: Rápido Escopo</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Você não navega a guerra de múltiplos órgãos (Prefeitura vs Bombeiros) solitariamente. Nós assumimos.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Acionar Engenheiro Focado</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Se com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Se, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">Patrimônio Histórico Sé</span></h2>
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
           <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendimentos Limitrofes a Sé</h3>
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Da raiz do Estado a DRD2 se projeta para apaziguar tensões contratuais na República, Liberdade, Consolação, e atua nos comércios frenéticos do Brás e Cambuci. O Centro Histórico é todo nosso.</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Seu Imóvel Histórico em Risco?</h3>
              <p className="text-slate-400 font-medium italic text-sm">Não espere uma penalização dupla do Governo em Prédios Antigos. Regularizamos 100% integrados às barreiras estruturais.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Orçamento de Patrimônio Escalonado
            </a>
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA 4 â"€â"€ */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Se.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Se"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Se</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Se precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Se. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Se"
        zone="Centro"
        currentSlug="/avcb-se"
      />



      <OccupationDepthBlock
        occupation="/Avcb Se"
        currentSlug="/avcb-se"
      />

      <InternalLinksBlock
        currentSlug="/avcb-se"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Sé"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-se" />
      <ServiceBlogLinks currentSlug="/avcb-se" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-se" />
    </>
  );
}

