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

const _pageTitle = "AVCB na Liberdade SP | Engenheiro para Restaurantes, Condomínios e Comércio";
const _pageDesc = "AVCB na Liberdade com engenheiro especializado. Regularização para restaurantes, condomínios e estabelecimentos comerciais na Rua Galvão Bueno e região do bairro oriental. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB na Liberdade SP | Engenheiro para Restaurantes, Condomínios e Comércio",
  description: "AVCB na Liberdade com engenheiro especializado. Regularização para restaurantes, condomínios e estabelecimentos comerciais na Rua Galvão Bueno e região do bairro oriental. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-liberdade",
  },
};

export default function LiberdadeLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Restaurante japonês na Liberdade com cozinha de alto calor — quais as exigências específicas?",
      answer: "Cozinhas com fogões de alto calor — como as usadas para preparações orientais — exigem sistema de supressão automática em coifa (geralmente base de agente limpo ou espuma), detecção de gás específica para o tipo de combustível usado e extintores para classe K (óleo em alta temperatura). A DRD2 dimensiona todos esses sistemas no projeto PPCI."
    },
    {
      question: "Casarão histórico na Liberdade convertido em restaurante — é possível ter AVCB?",
      answer: "Sim. Com levantamento técnico adequado e aplicação das alternativas normativas previstas nas ITs do CBPMESP quando necessário, é possível regularizar qualquer imóvel. A DRD2 tem experiência em edificações históricas no Centro de São Paulo."
    },
    {
      question: "Condomínio na Liberdade com AVCB vencido há 3 anos — o processo é mais caro?",
      answer: "Não necessariamente. O custo depende da situação dos sistemas — não do tempo de vencimento. A DRD2 avalia gratuitamente e apresenta o custo real antes de qualquer compromisso."
    },
    {
      question: "Mercado oriental na Liberdade precisa de AVCB ou CLCB?",
      answer: "Depende da área e da atividade. Mercados com armazenagem de produtos inflamáveis têm classificação específica. A DRD2 faz o enquadramento correto gratuitamente."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-liberdade",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Liberdade",
        serviceName: "AVCB na Liberdade",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Centro Expandido", item: "/avcb-centro" },
          { name: "Liberdade", item: "/avcb-liberdade" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Regularização de AVCB Comercial e de Restaurantes na Liberdade"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Bairro Oriental & Risco Gastronômico
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB na Liberdade: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Restaurantes de Alto Calor, Uso Misto e Comércio Étnico</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Maior pólo oriental de São Paulo, a Liberdade combina casarões da década de 40 transformados em Restaurantes com cozinhas de intenso fluxo (Woks e Fritadeiras). Exigências duras do Corpo de Bombeiros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com engenheiro especialista no Centro
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Projetos de Supressão Automática p/ Coifas e Extintores Classe K.",
                "Homologação imediata em sobrados convertidos (Uso Misto).",
                "Renovação Express de CLCB para mercados, clínicas de acupuntura e lojas."
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
                Engenharia Culinária & Imóveis :<br />
                <span className="text-red-600">Alta Especificidade DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico e readequação "In Loco" de sobrados do bairro sem planta original.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI focado em cozinhas de alto calado térmico e exaustão industrial.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Alinhamento para liberação do alvará de funcionamento de clínicas de acupuntura.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Defesas Técnicas perante autuações de mercados asiáticos e importadoras.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Aprovações híbridas em Casarões (Restaurante em baixo, Estoque/Moradia em cima).</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento presencial na Rua Galvão Bueno e arredores.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Classe K", sub: "Risco Térmico Óleo" },
                { label: "Misto", sub: "Sobrados e Casarões" },
                { label: "CLCB", sub: "Mercados Orientais" },
                { label: "100%", sub: "Sistemas de Coifa" }
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

      {/* Demanda Expressiva (Dark Section cards) - "Desafios de AVCB na Liberdade" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <Flame className="w-16 h-16 text-orange-500 mx-auto mb-8 opacity-70" />
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Risco Quente em Imóveis de 1950:<br/><span className="text-red-500">As Tensões Normativas da Liberdade</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Flame, title: "Fogo Alto (Woks)", text: "Diferente de restaurantes tradicionais, a fritura oriental usa bocas insanas. A ausência de supressores em coifas e extintores de Classe K geram multas colossais e risco de incêndios trágicos." },
                { icon: EyeOff, title: "Uso Misto Oculto", text: "Tradição: o comércio é no térreo e o dono mora ou estoca em cima. Essa divisão não documentada em casarões antigos exige enquadramento técnico fino perante o Corpo de Bombeiros." },
                { icon: MapIcon, title: "Sem Plantas Originais", text: "Você não possui a documentação construtiva de um casarão da década de 40. Nós desenhamos táticas não evasivas de sprinklers em tetos de alvenaria para isentar o fechamento do imóvel." },
                { icon: Store, title: "População Flutuante", text: "Aos finais de semana, milhares se espremem em pontos de eventos culturais contínuos. Comércios locais operam sob uma margem de risco civil que o seu AVCB precisa proteger juridicamente." }
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

      {/* Regiões Atendidas na Liberdade */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <Utensils className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Artérias Gastro-Culturais</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Polo Gastronômico Extremo</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Galvão Bueno & Tomás Gonzaga</h3>
               <p className="text-slate-600 font-medium">As artérias de alimentação. Enorme exigência técnica imposta nas coifas e sistemas exaustores de altíssima temperatura, salvando comércios ativos do embargo imediato.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-900 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-900 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Condomínios E Corredores</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Av. Liberdade e Conselheiro Furtado</h3>
               <p className="text-slate-600 font-medium">Linhas gigantescas do bairro mescladas entre edifícios mistos e condomínios massivos que encontram seus laudos desatualizados ou com plantas arcaicas em desuso.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">São Joaquim e Estudantes</h3>
              <p className="text-slate-600 font-medium">Pontos de mercado imobiliário em franca ascensão repletos de edifícios novos concorrendo e precisando de regularizações urgentes perante mercados locais focados em importações.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Ruas da Glória e Largo da Liberdade</h3>
              <p className="text-slate-600 font-medium">A congregação cultural máxima. Atendendo tanto shoppings temáticos quando os lojistas do miolo, simplificando licenças tipo CLCB.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">O Foco na Sua Licença <span className="text-red-600">Operacional</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🍣 Restaurantes, Izakayas e Mercados Orientais</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Implementação de projeto com detectores de gás autônomos, cálculo de fluxo e dimensionamento perfeito do supressor para sistemas fogões do tipo Wok. As inspeções da Liberdade são impiedosas nesse quesito.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏛️ Casarões de Comércio Especializado</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Seu estabelecimento usa o piso superior para estocar insumos ou mercadorias estrangeiras, e a fiscalização não foi avisada? Desenhamos plantas de risco perfeitamente integradas as normativas de uso misto, antes que a autuação bata na porta.</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Condomínios e Clínicas (Acupuntura)</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Atendimento cirúrgico no CLCB de dezenas de clínicas tradicionais garantindo sua credencial nas vigilâncias sanitárias sem dor de cabeça, em conjunto a emissão Master de AVCBs de médio padrão para edifícios do centro.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Retomando seu Alvará <br/><span className="text-red-600 italic">No Centro Expandido</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico Visual", desc: "Checagem de exaustores e uso de solo." },
              { step: "2", title: "Estratégia Predial", desc: "Sobra Planta? Analisamos na hora." },
              { step: "3", title: "Projeto Oficial", desc: "Inclusão no sistema SP com Engenheiro." },
              { step: "4", title: "Protocolo ITs", desc: "Garantia de exigências em dia." },
              { step: "5", title: "Licença Viva", desc: "Seu Comércio Legalizado." },
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
               <h4 className="text-2xl mb-4">Prazos Expressos e Reais</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Restaurantes de Alto Risco / Condomínios: 60 a 90 dias</li>
                 <li>• Imóveis Críticos / Antigos sem Planta Livre: Mediante Visita Preliminar</li>
                 <li>• Lojas Orientais, Faculdades e Clínicas (CLCB): 30 a 60 dias</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Seu processo tem orçamento honesto validado após aferimento da cozinha ou do estoque de sua Loja.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Acionar Vistoriador</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Liberdade com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Liberdade, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">Restaurantes da Liberdade</span></h2>
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
           <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Eixo Central Profundo</h3>
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Da Liberdade nossos atendimentos espalham-se a Bela Vista, Cambuci, Sé Monumental, Glicério e Aclimação. Agindo com velocidade inigualável em emergências do trânsito comercial de SP.</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Sem Dor de Cabeça com a Autuação!</h3>
              <p className="text-slate-400 font-medium italic text-sm">Cuidamos das burocracias pesadas das cozinhas de alto calado térmico. Foco extremo na Galvão Bueno e pólos gastronômicos.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              WhatsApp Restaurantes
            </a>
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA 4 â"€â"€ */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Liberdade.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Liberdade"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Liberdade</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Liberdade precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Liberdade. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Liberdade"
        zone="Centro"
        currentSlug="/avcb-liberdade"
      />



      <OccupationDepthBlock
        occupation="/Avcb Liberdade"
        currentSlug="/avcb-liberdade"
      />

      <InternalLinksBlock
        currentSlug="/avcb-liberdade"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Liberdade"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-liberdade" />
      <ServiceBlogLinks currentSlug="/avcb-liberdade" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-liberdade" />
    </>
  );
}

