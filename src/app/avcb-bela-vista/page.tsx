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

const _pageTitle = "AVCB na Bela Vista SP | Engenheiro para Restaurantes, Teatros e Condomínios";
const _pageDesc = "AVCB na Bela Vista (Bixiga) com engenheiro especializado. Regularização para restaurantes, teatros, casas de show, condomínios e edifícios históricos. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB na Bela Vista SP | Engenheiro para Restaurantes, Teatros e Condomínios",
  description: "AVCB na Bela Vista (Bixiga) com engenheiro especializado. Regularização para restaurantes, teatros, casas de show, condomínios e edifícios históricos. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-bela-vista",
  },
};

export default function BelaVistaLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Restaurante italiano em casarão histórico no Bixiga — como regularizar o AVCB sem comprometer o imóvel?",
      answer: "Essa é uma das situações mais comuns e mais desafiadoras da Bela Vista. A solução envolve o levantamento técnico do imóvel, a identificação das intervenções possíveis dentro das restrições estruturais e históricas, e a aplicação de medidas compensatórias previstas nas ITs do CBPMESP quando a instalação convencional não é viável. A DRD2 tem experiência específica nesse tipo de processo."
    },
    {
      question: "Teatro no Bixiga com AVCB vencido pode ser fechado pela Prefeitura?",
      answer: "Sim. Teatros e casas de espetáculo estão sujeitos a fiscalização e embargo por parte do Corpo de Bombeiros e da Prefeitura. A ausência de AVCB válido representa risco para o público e responsabilidade civil para os gestores em caso de incêndio ou acidente."
    },
    {
      question: "Casarão tombado na Bela Vista — o Corpo de Bombeiros aceita soluções alternativas para o AVCB?",
      answer: "Sim. As ITs do CBPMESP preveem medidas compensatórias para situações onde a instalação convencional de sistemas não é viável. A aplicação correta dessas alternativas exige engenheiro com profundo conhecimento normativo. A DRD2 tem essa expertise."
    },
    {
      question: "Condomínio em prédio antigo na Bela Vista — qual o prazo para regularizar o AVCB?",
      answer: "Para condomínios com sistemas em ordem, o prazo estimado é de 60 a 90 dias. Se houver necessidade de retrofit dos sistemas, o prazo é definido no diagnóstico gratuito."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-bela-vista",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Bela Vista",
        serviceName: "AVCB na Bela Vista",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Centro de SP", item: "/avcb-centro" },
          { name: "Bela Vista", item: "/avcb-bela-vista" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Regularização de AVCB na Bela Vista e Bixiga"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Bixiga, Teatros e Prédios Históricos
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB na Bela Vista: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Regularização para Restaurantes, Teatros e Tombados</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              O Bixiga combina casarões centenários, teatros gigantes e uma vida noturna fervilhante. O desafio do AVCB é máximo: instalar sistemas que protejam milhares de pessoas sem destruir o patrimônio preservado pela cidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Engenheiro na Bela Vista
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Soluções em Casarões Tombados c/ aprovação CONDEPHAAT.",
                "Especialistas em Alta Concentração de Público (Casas de Show/Teatro).",
                "Alvarás de Restaurantes Italianos (Sistemas Exaustores e Coifas)."
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
                Engenharia Fina na Bela Vista: <br />
                <span className="text-red-600">Alta Especificidade DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico técnico gratuito com avaliação rigorosa do Casarão/Prédio.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI focado em soluções compensatórias p/ estruturas tombadas.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Protocolo e defesa de viabilidade nos órgãos do Corpo de Bombeiros.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Resposta técnica inteligente a Comunique-se para edificações antigas.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Renovação de AVCB de Teatros resguardando o controle sonoro e fuga.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Retrofits e adequações em condomínios construídos no século XX.</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento presencial e dedicado no Bixiga.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Bixiga", sub: "Polo Gastronômico" },
                { label: "Ouro", sub: "Patrimônio Histórico" },
                { label: "Fuga", sub: "Teatros e Casas de Show" },
                { label: "100%", sub: "Legalização CONPRESP" }
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

      {/* Demanda Expressiva (Dark Section cards) - "O perfil único e os desafios do Bixiga" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <BadgeInfo className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-50" />
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Os Desafios Incomparáveis do <br/><span className="text-red-500">AVCB no Bixiga</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Landmark, title: "Edificações Históricas", text: "Sobrados de 1900 não nasceram com prevenção a incêndio. Modificar paredes tombadas demanda pura inteligência em proteção passiva compensatória." },
                { icon: Building, title: "Uso Misto Intenso", text: "Restaurantes ferozes no térreo misturados a apartamentos e repúblicas nos andares de cima embolam severamente as normativas de controle de chama." },
                { icon: Users, title: "Alta Concentração", text: "Teatros lotados e casas de show lidam não com vidas de moradores, mas de público externo flutuante. A rota de catástrofe exige simulação exata." },
                { icon: Map, title: "Ruas Estreitas", text: "A topologia densa da Bela Vista esmaga o acesso de resgate em caso de incêndio, triplicando os cuidados técnicos demandados pelo estado." }
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

      {/* Regiões Atendidas na Bela Vista */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">O Circuito da Bela Vista</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Alta Concentração</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Rua 13 de Maio e Bixiga</h3>
               <p className="text-slate-600 font-medium">O Coração. Ruas abarrotadas de cantinas italianas, espaços de shows e teatros imensos com demandas explosivas nas cozinhas (supressão em coifah).</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Maestro Cardim e Hospitais</h3>
               <p className="text-slate-600 font-medium">Região pesada em Teatros Tradicionais misturadas aos laboratórios e clínicas de alta densidade no corredor da Brigadeiro.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Santo Antônio e Rui Barbosa</h3>
              <p className="text-slate-600 font-medium">O pulmão habitacional do bairro. Condomínios verticalizados tradicionais carentes de modernização (retrofit) ou primeira emissão de laudo estourado.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Conselheiro e Eixo Av. Paulista</h3>
              <p className="text-slate-600 font-medium">Sobe a serra misturando escritórios, comércios massivos e trânsito contínuo de pessoas que obriga lojistas ao recuo imediato por CLCB aprovado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Tipos de AVCB Ouro na <span className="text-red-600">Bela Vista</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🍝 Restaurantes e Casarões Tombados</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Cantinas Italianas clássicas exigem extintores de combate a óleo e sistemas em coifas. Além disto, imóveis tombados possuem restrições colossais de parede, que contornamos com negociação técnica entre Bombeiro e CONDEPHAAT.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🎭 Teatros e Casas de Espetáculo</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Capacidade máxima de tensão. Um alarme em um Teatro não pode ser baixo e as luzes de fuga precisam sobrepor balcões fechados as escuras. O processo demanda acompanhamento rigoroso durante vistorias agendadas da Prefeitura.</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Retrofit de Condomínios e Clínicas</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Os prédios de meio século do bairro exigem readaptações (Retrofit) nas malhas hídricas antes da Vistoria da VISA e do Corpo de Bombeiros para não afundarem laudos e garantirem os seguros em dia dos moradores.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Regulação e Articulação <br/><span className="text-red-600 italic">No Bixiga</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Varredura do Térreo ao Teto." },
              { step: "2", title: "Estratégia", desc: "Avanço Normativo sobre Tombamentos." },
              { step: "3", title: "Projeto PPCI", desc: "Documentado junto à Prefeitura e CREA." },
              { step: "4", title: "Protocolo", desc: "Defesa técnica junto aos tenentes CB." },
              { step: "5", title: "Aprovação", desc: "Fiscalização conduzida presencialmente." },
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
               <h4 className="text-2xl mb-4">Prazos e Adequações</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Teatros e Casas (Alta Conf.): Complexidade Avaliada Imediatamente</li>
                 <li>• Restaurantes operando em Ordem: 60 a 90 dias</li>
                 <li>• Condomínios e Edifícios Históricos: Estratégia dedicada ao Patrimônio</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Edifícios tombados podem ter tempo e valor amarrados a resoluções de conselhos governamentais.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Acionar Engenheiro</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Bela Vista com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Bela Vista, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">Bela Vista (Bixiga)</span></h2>
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
           <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Todo Centro Expandido</h3>
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Além da lendária Bela Vista (Bixiga), nós da DRD2 operamos nos pulmões de São Paulo: Consolação, Liberdade, Paraíso, Vila Mariana e em toda a espinha dorsal da Avenida Paulista.</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Não interdite seu Restaurante</h3>
              <p className="text-slate-400 font-medium italic text-sm">Escritório especializado em Edificações Tombadas e Pólos Gastronômicos.</p>
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
            Não arrisque seu CNPJ em Bela Vista.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Bela Vista"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Bela Vista</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Bela Vista precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Bela Vista. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Bela Vista"
        zone="Centro"
        currentSlug="/avcb-bela-vista"
      />



      <OccupationDepthBlock
        occupation="/Avcb Bela Vista"
        currentSlug="/avcb-bela-vista"
      />

      <InternalLinksBlock
        currentSlug="/avcb-bela-vista"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Bela Vista"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-bela-vista" />
      <ServiceBlogLinks currentSlug="/avcb-bela-vista" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-bela-vista" />
    </>
  );
}

