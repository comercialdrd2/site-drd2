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
  Trees, Landmark, StethoscopeIcon,
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

const _pageTitle = "AVCB na Consolação SP | Engenheiro para Hospitais, Condomínios e Escritórios";
const _pageDesc = "AVCB na Consolação com engenheiro especializado. Regularização para hospitais, clínicas, condomínios e escritórios na Avenida Paulista, Rua da Consolação e região. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB na Consolação SP | Engenheiro para Hospitais, Condomínios e Escritórios",
  description: "AVCB na Consolação com engenheiro especializado. Regularização para hospitais, clínicas, condomínios e escritórios na Avenida Paulista, Rua da Consolação e região. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-consolacao",
  },
};

export default function ConsolacaoLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Hospital na Consolação precisa de AVCB diferente de um condomínio?",
      answer: "Sim. Hospitais têm as exigências mais complexas das ITs do CBPMESP — especialmente rotas de fuga acessíveis para pacientes, sistemas de alarme automático e sprinkler em toda a edificação. O processo é mais longo e o projeto técnico mais detalhado. A DRD2 tem experiência específica em AVCB para estabelecimentos de saúde."
    },
    {
      question: "Edifício corporativo na Avenida Paulista — o AVCB é de responsabilidade da administradora?",
      answer: "O AVCB das áreas comuns é da administradora ou síndico. Empresas que ocupam andares inteiros podem precisar de AVCB próprio dependendo da configuração e do uso. A DRD2 avalia cada caso gratuitamente."
    },
    {
      question: "Faculdade na Consolação com AVCB vencido pode ser notificada pela secretaria de educação?",
      answer: "Sim. Órgãos de supervisão educacional e a Prefeitura podem notificar e embargar estabelecimentos de ensino com AVCB irregular. Regularize antes de receber a notificação."
    },
    {
      question: "Condomínio antigo na Consolação próximo à Paulista — o processo de AVCB é diferente?",
      answer: "O processo segue as mesmas ITs do CBPMESP. Edifícios mais antigos podem precisar de retrofit nos sistemas — o que aumenta o custo mas não altera o processo. A DRD2 avalia gratuitamente e apresenta o custo real."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-consolacao",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Consolação",
        serviceName: "AVCB na Consolação",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Centro Expandido", item: "/avcb-centro" },
          { name: "Consolação", item: "/avcb-consolacao" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Regularização de AVCB na Consolação e Paulista"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Alta Complexidade & Consolação
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB na Consolação: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Hospitais, Clínicas Médicas, Escritórios e Condomínios</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Eixo central de São Paulo (Avenida Paulista), a Consolação concentra os hospitais e clínicas de mais rica exigência normativa da VISA, misturados a gigantescos centros de ensino e edifícios corporativos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar c/ Especialista Consolação
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Projetos dimensionados para rotas de fuga acessíveis e leitos.",
                "Homologação imediata em faculdades, universidades e escolas.",
                "Especialistas em laudos p/ Edifícios Corporativos da Av. Paulista."
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
                Engenharia de Ponta no Centro: <br />
                <span className="text-red-600">Serviço Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico técnico gratuito com enquadramento restrito de clínicas.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI focado em normativas estritas de mobilidade reduzida e saúde.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Protocolo e defesa de viabilidade nos órgãos do Corpo de Bombeiros.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Resposta técnica inteligente a Comunique-se para edificações mistas na Paulista.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Renovação urgente de AVCB de Faculdades sob risco judicial do MEC.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Retrofits e adequações em condomínios da Consolação.</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento presencial e dedicado no entorno da Av. Paulista.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Visa", sub: "Liberações Vigilância" },
                { label: "Paulista", sub: "Polo Corporativo" },
                { label: "Fuga", sub: "Rotas de Mobilidade" },
                { label: "100%", sub: "Legalização CBPMESP" }
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

      {/* Demanda Expressiva (Dark Section cards) - "O perfil único e as demandas" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <BadgeInfo className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-50" />
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Nível de Complexidade de <br/><span className="text-red-500">Consolação e Ensino no AVCB</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Stethoscope, title: "Exigências de Consolação", text: "Hospitais são testados ao limite. Rotas de fuga acessíveis para pacientes acamados, alarme com ativação automática setorizada e extintores próprios para salas cirúrgicas." },
                { icon: GraduationCap, title: "Multidões em Faculdades", text: "Polos corporativos e de ensino atraem multidões. O dimensionamento de catástrofe deve cobrir áreas enormes simultâneas nos instantes críticos de evasão." },
                { icon: Building2, title: "Gigantes na Paulista", text: "Múltiplos andares em sistemas mastodônticos: Pressurização em escadas que salvam vidas bloqueando a inalação de fumaça ascendente." },
                { icon: Map, title: "Torres Antigas", text: "A topologia densa da Consolação aglomera condomínios do século passado, cujo prazo de adequação ou retrofit da rede hídrica não pode falhar no projeto inicial." }
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

      {/* Regiões Atendidas na Consolação */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Circuito Crítico Atendido</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Máxima Complexidade</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Avenida Paulista / Al. Santos</h3>
               <p className="text-slate-600 font-medium">O Eixo de Negócios. Bancos, consulados e torres corporativas com condomínios administradores exigindo defesas técnicas irretocáveis dos síndicos.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-900 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-900 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Polo Médico</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Dona Veridiana e Cardiológico</h3>
               <p className="text-slate-600 font-medium">Ruas densas carregadas de Clínicas, Consultórios Especializados e complexos de cirurgia que paralisam sem suas licenças sanitárias.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Rua da Consolação / Mackenzie</h3>
              <p className="text-slate-600 font-medium">Universidades colossais interligadas ao intenso comércio local de porta de rua de restaurantes e vida cultural mista da metrópole.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Oscar Freire / Pamplona</h3>
              <p className="text-slate-600 font-medium">Bolsões imobiliários de alto padrão residencial ou comércio de luxo encrostados ao lado do coração da Consolação. Aprovações limpas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Foco Cirúrgico em <span className="text-red-600">Alta Exigência</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏥 Hospitais, Consolação e Clínicas (VISA)</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Uma maca não desce escadas rotatórias no escuro durante fumaça. As ITs do CBPMESP cobram autônomias estendidas, salas estanques (fire-safe) e extintores p/ máquinas de milhões de reais sem uso ou dano d'água.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Edifícios Corporativos Gigabit</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">O síndico ou a administradora na Avenida Paulista sofre ao licenciar a estrutura. Cada andar que é transformado afeta o laudo master. Avaliamos gratuitamente o enquadramento de inquilinos e matrizes sem comprometer todo o sistema.</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🎓 Faculdades e Condomínios de Referência</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Salvar vidas Jovens e Audientes: O risco de turmas gigantes sem rotas iluminadas corretamente barra de imediato vistorias na Consolação. Desenvolvemos adequações antes mesmo da prefeitura embargar salas.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Regulação e Análise <br/><span className="text-red-600 italic">Especializada em Vida</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Laudo com olhar da Vigilância." },
              { step: "2", title: "Escopo Claro", desc: "Análise fina sobre necessidade de retrofits." },
              { step: "3", title: "Projeto PPCI", desc: "Documentado junto ao CB e CREA SP." },
              { step: "4", title: "Protocolo", desc: "Defesa técnica contínua Via Fácil." },
              { step: "5", title: "Certificação", desc: "Seu estabelecimento operacional." },
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
               <h4 className="text-2xl mb-4">Prazos na Consolação</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Hospitais e Grandes Edificações: Prazo mapeado em vistoria prévia.</li>
                 <li>• Condomínios e Prédios sem Retrofit (ordem): 60 a 90 dias</li>
                 <li>• CLCB (comércios e pequenos restaurantes): 30 a 60 dias</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">Orçamentos pautados 100% no impacto real da área e risco das pessoas locadas.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Acionar Engenheiro</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Consolacao com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Consolacao, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">Consolação & Paulista</span></h2>
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
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Da Consolação conectamos todo o serviço em Bela Vista, Jardins, República, Cerqueira César e Higienópolis. Entregando excelência e rigor paulista.</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Precisa de AVCB na Consolação?</h3>
              <p className="text-slate-400 font-medium italic text-sm">A DRD2 entende a burocracia de Edificações de Consolação e Corporativos Massivos da Paulista.</p>
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
            Não arrisque seu CNPJ em Consolacao.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Consolacao"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Consolacao</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Consolacao precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Consolacao. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <NeighborhoodAuthorityBlock
        neighborhood="Consolacao"
        zone="Centro"
        currentSlug="/avcb-consolacao"
      />



      <OccupationDepthBlock
        occupation="/Avcb Consolacao"
        currentSlug="/avcb-consolacao"
      />

      <InternalLinksBlock
        currentSlug="/avcb-consolacao"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Consolação"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-consolacao" />
      <ServiceBlogLinks currentSlug="/avcb-consolacao" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-consolacao" />
    </>
  );
}

