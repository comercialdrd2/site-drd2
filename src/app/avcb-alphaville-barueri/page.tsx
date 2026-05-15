import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  MapPin, Factory, Warehouse, Truck, ShieldOff,
  HardHat, FileWarning, Scale,
  Zap,
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

const _pageTitle = "AVCB em Alphaville e Barueri SP | Engenheiro para Galpão e Indústria";
const _pageDesc = "Regularização de AVCB e laudos técnicos para grandes galpões logísticos, condomínios fechados industriais e parques corporativos em Alphaville e Barueri. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB em Alphaville e Barueri SP | Engenheiro para Galpão e Indústria",
  description: "Regularização de AVCB e laudos técnicos para grandes galpões logísticos, condomínios fechados industriais e parques corporativos em Alphaville e Barueri. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-alphaville-barueri",
  },
};

export default function AlphavilleBarueriMasterPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o maior motivo de reprovação do AVCB em galpões de Barueri?",
      answer: "O subdimensionamento do sistema de hidrantes, a falta de recalibragem da bomba de incêndio para a carga térmica real estocada, e inconsistências no Laudo de SPDA (Para-raios) exigido pelas seguradoras."
    },
    {
      question: "A seguradora industrial exige conformidade das docas. A DRD2 avalia isso?",
      answer: "Sim. Nossos laudos são formatados tanto para o 5º Grupamento de Bombeiros (GB) (Barueri e Região) quanto para os cadernos de encargos técnicos das seguradoras globais e fundos de FII que controlam os parques logísticos de Alphaville."
    },
    {
      question: "Nosso galpão estoca produtos químicos líquidos (Classe J/K). Vocês fazem o projeto?",
      answer: "Sim. Galpões F-3, líquidos inflamáveis, ou risco de explosão dependem de estudos como CMAR, Isolamento de Risco e Bacias de Contenção elaborados com rigor de engenharia processual."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-alphaville-barueri",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Alphaville e Barueri",
        serviceName: "AVCB e Segurança Logística",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Grande SP (Oeste)", item: "/avcb-zona-oeste" }, // Logicamente próximo
          { name: "Alphaville", item: "/avcb-alphaville-barueri" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO — INDUSTRIAL ESTRATÉGICO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-8 border-yellow-500 ">
        <Image src="/images/hero-bar-com-show.webp" alt="Ambiente de bar e restaurante com estrutura de atendimento" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <span className="inline-block bg-yellow-500 text-slate-950 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 shadow-xl border border-yellow-400 tracking-tighter">
                Eixo Logístico: Castello Branco & Rodoanel
              </span>
              <h1 className="text-3xl md:text-[5rem] font-black mb-4 leading-[0.8] tracking-tighter uppercase italic text-white flex flex-col">
                <span className="text-slate-300">AVCB EM</span>
                <span className="text-yellow-500 not-italic uppercase drop-shadow-2xl font-black md:text-[5.5rem] mt-2 block">
                  ALPHAVILLE
                </span>
                <span className="text-white text-3xl md:text-[3rem] mt-2 block">& BARUERI</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed font-bold max-w-2xl text-balance italic border-l-4 border-yellow-500 pl-6">
                Consultoria Técnica para <strong className="text-yellow-500">Multinacionais, Operações Logísticas</strong> e Condomínios Empresariais de Alto Impacto.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={whatsappLink} 
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black px-10 py-5 rounded-xl text-xl transition-all shadow-2xl flex items-center justify-center gap-3 border-b-4 border-yellow-600 uppercase tracking-tighter"
                >
                  <Factory className="w-6 h-6 shrink-0" /> Engenheiro Logístico
                </a>
              </div>
            </div>

            <div className="lg:w-2/5">
                <div className="bg-slate-900 border-2 border-yellow-500 p-8 rounded-[2rem] shadow-2xl shadow-yellow-500/20 relative overflow-hidden">
                  <h3 className="text-xl font-black text-white mb-4 flex items-center gap-3 uppercase text-center justify-center underline decoration-yellow-500 underline-offset-8">
                    Análise Fundo de <span className="text-yellow-500 italic">Investimento FII</span>
                  </h3>
                  <LeadForm variant="compact" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRODUÇÃO E RISCOS DE PARADA LOGÍSTICA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-[3rem] font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase italic">
                Risco Zero de Paralisação: <span className="text-yellow-500 not-italic uppercase font-black block mt-2">Compliance Total</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  O complexo logístico e empresarial de Barueri não perdoa o amadorismo técnico. A ausência de um AVCB válido ou a negligência na calibração do <span className="font-bold text-slate-900">Sistema de Sprinklers ESFR</span> pode desativar uma cadeia de supply chain internacional do dia para a noite via interdição do 5ºGB ou glosa de Seguradoras.
                </p>
                <p>
                  Sempre que um novo inquilino entra em um módulo do Prologis, Goodman ou HGLG, a carga de incêndio (materiais estocados) altera todo o balanço hidráulico e de exaustão de fumaça aprovado.
                </p>
                <p className="text-slate-900 font-bold border-l-8 border-yellow-500 pl-6 bg-slate-50 p-6 shadow-sm rounded-r-3xl italic tracking-tight uppercase">
                  A DRD2 Engenharia executa adequações (Retrofit de Galpão) garantindo conformidade documental sem interromper o turnover de docas das transportadoras.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-yellow-500 p-8 rounded-[3rem] border border-yellow-400 shadow-2xl text-slate-950 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-[5rem] -mr-8 -mt-8" />
              <h4 className="text-slate-950 font-black text-[13px] uppercase tracking-widest mb-6 italic text-center border-b border-slate-950/20 pb-4 relative z-10">Consequências Diretas:</h4>
              <ul className="space-y-6 relative z-10">
                {[
                  { t: "Risco Segurado Nulo", d: "Apólices negam indenização imediata (Bilhões M/B)." },
                  { t: "Cancelamento de Locação", d: "Corporações ESG exigem o certificado antes do SLA." },
                  { t: "Alvará de Barueri Retido", d: "Secretaria de Planejamento da prefeitura veta o habite-se." }
                ].map((item, i) => (
                  <li key={i} className="text-left group">
                    <span className="block text-slate-950 font-black text-xs uppercase tracking-widest flex items-center gap-2"><ShieldOff className="w-4 h-4"/>{item.t}</span>
                    <span className="block text-slate-800 text-[11px] font-bold leading-relaxed italic mt-1">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARQUITETURA DE SISTEMAS INDUSTRIAIS ── */}
      <section className="py-24 bg-slate-900 text-white border-y border-yellow-500">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none text-white">
               Engenharia Pesada para <span className="text-yellow-500 not-italic tracking-tighter">Alto Risco Típico</span>
             </h2>
             <p className="text-base text-slate-400 font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto italic">Processos homologados para operações F-3 (Estoque e Distribuição)</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-black uppercase text-center tracking-tighter">
              {[
                { t: "Bomba & Sprinklers", d: "Cálculo isométrico para proteção em porta-paletes verticais.", i: <Zap className="w-10 h-10 mx-auto mb-4 text-yellow-500" /> },
                { t: "Controle de Fumaça", d: "Sistemas naturais e mecânicos em galpões unificados acima de 10.000m².", i: <Factory className="w-10 h-10 mx-auto mb-4 text-yellow-500" /> },
                { t: "CMAR Perito", d: "Controle de Materiais de Acabamento exigidos pelas auditorias prediais Alphaville.", i: <HardHat className="w-10 h-10 mx-auto mb-4 text-yellow-500" /> },
                { t: "Laudos Adicionais", d: "SPDA (Para-raios) completo sob NBR5419, Medição Óhmica e Estanqueidade de Gás.", i: <FileWarning className="w-10 h-10 mx-auto mb-4 text-yellow-500" /> }
              ].map((item, i) => (
                <div key={i} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-yellow-500 transition-all group shadow-sm hover:shadow-2xl">
                  {item.i}
                  <h3 className="text-lg mb-4 italic underline decoration-yellow-500/20 group-hover:decoration-yellow-500 decoration-3 underline-offset-8">{item.t}</h3>
                  <p className="text-[10px] text-slate-400 group-hover:text-slate-300 not-italic font-bold leading-relaxed tracking-widest">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── ALPHAVILLE: CORPORATIVO E RESIDENCIAL ── */}
      <section className="py-24 bg-slate-50 italic">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter italic leading-none">Gestão Privada <br/>em <span className="text-yellow-500">Alphaville</span></h2>
                <div className="space-y-6 text-sm font-bold text-slate-600 tracking-tight leading-relaxed">
                   <p className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm border-l-4 border-l-slate-800">
                     <strong className="text-slate-900 uppercase italic tracking-tighter block mb-2 text-lg">Parques Empresariais</strong>
                     Avenida Rio Negro e arredores de Alphaville exigem gestão em prédios corporativos (Lajes de TIC e Telecom). Atuamos com a renovação sem interrupção de data centers e TI.
                   </p>
                   <p className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm border-l-4 border-l-yellow-500">
                     <strong className="text-yellow-600 uppercase italic tracking-tighter block mb-2 text-lg">Condomínios Residenciais (Alpha)</strong>
                     Gestão para os "Residenciais 0 ao 12", assegurando a manutenção obrigatória do C.A.S., hidrantes e bombas pressurizadoras. Protegendo patrimônio e famílias de altíssimo padrão.
                   </p>
                </div>
             </div>
             <div className="bg-slate-950 p-12 rounded-[5rem] text-white shadow-2xl text-center border-t-8 border-yellow-500">
                <Truck className="w-16 h-16 mx-auto text-yellow-500 mb-6" />
                <h4 className="text-xl font-black text-yellow-500 uppercase tracking-widest mb-4 italic">Malha Estratégica Rodoanel</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-black uppercase tracking-tight text-left">
                   {[
                     "Tamboré (Polo Prologis)", "Av. Piracema", "Av. Francisco Matarazzo", "Estrada da Aldeinha", "Km 26 ao 30 da Castello", "Centro Empresarial Barueri"
                   ].map((street, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 group hover:border-yellow-500 transition-all text-slate-300">
                        <MapPin className="w-4 h-4 text-yellow-500 shrink-0" /> {street}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter text-center font-black tracking-tighter">Diagnóstico <span className="text-yellow-500 not-italic font-black text-center font-black underline decoration-slate-900">INDUSTRIAL</span></h2>
             <p className="mt-4 text-slate-400 font-black uppercase tracking-[0.25em] text-[10px] font-black">Resolução Normativa para o 5ºGB e Seguradoras</p>
           </div>
           
           <div className="space-y-4">
             {faqItems.map((faq, i) => (
                <details key={i} className="group bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-yellow-500/20 transition-all font-black">
                 <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-[15px] select-none uppercase italic tracking-tighter leading-snug">
                   {faq.question}
                   <span className="text-yellow-500 text-2xl group-open:rotate-45 transition-transform duration-300 font-sans font-light">+</span>
                 </summary>
                 <div className="p-7 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-200 italic font-medium tracking-tight">
                   {faq.answer}
                 </div>
               </details>
             ))}
           </div>
        </div>
      </section>

      {/* ── Final Conversion ── */}
      <section className="py-32 bg-yellow-500 border-t border-yellow-400 text-center relative overflow-hidden italic shadow-inner">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-4xl md:text-[6rem] font-black text-slate-950 leading-[0.85] uppercase tracking-tighter mb-10 italic font-black font-black">
              Gestão de Carga <br/><span className="text-white not-italic tracking-[0.05em] font-black text-5xl md:text-[6.5rem] block mt-2 underline decoration-slate-950 decoration-8 underline-offset-[1.5rem]">LOGÍSTICA</span>
            </h2>
            <p className="text-xl text-slate-900 font-black mb-16 max-w-3xl mx-auto uppercase italic leading-loose tracking-[0.2em] font-black font-black text-balance">
              Operadores Logísticos não tem margem para paralisações 5ºGB. Conclua a legalização sem freios operacionais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
               <a 
                 href={whatsappLink} 
                 className="bg-slate-950 text-white font-black px-16 py-8 rounded-[3rem] shadow-2xl hover:bg-[#1EBE5A] hover:text-white hover:text-slate-950 transition-all flex items-center justify-center gap-6 text-2xl tracking-tighter uppercase select-none italic font-black border-4 border-slate-950"
               >
                 <Scale className="w-8 h-8" /> Auditoria no Galpão
               </a>
            </div>
            
            <div className="mt-24 pt-24 flex flex-wrap justify-center gap-12 text-[10px] font-black text-slate-800 uppercase tracking-[0.4em] italic leading-none border-t border-slate-900/10">
               <Link href="/avcb-galpao-industrial-sao-paulo" className="hover:text-white transition-colors underline decoration-slate-950/20 tracking-[0.5em]">→ GUIA MASTER DE GALPÕES</Link>
               <Link href="/clcb-sao-paulo" className="hover:text-white transition-colors underline decoration-slate-950/20 tracking-[0.5em]">→ GALPÕES PEQUENOS (CLCB)</Link>
               <Link href="/sprinklers" className="hover:text-white transition-colors underline decoration-slate-950/20 tracking-[0.5em]">→ SISTEMAS DE SPRINKLERS</Link>
            </div>
        </div>
      </section>

      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-primary">AVCB em Alphaville Barueri</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Alphaville Barueri precisa dos seguintes documentos:
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
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-primary p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 faz auditoria documental gratuita antes de qualquer protocolo em Alphaville Barueri. Evite exigencias, rejeicoes e atrasos identificando documentos pendentes antes de submeter ao CBPMESP.
          </div>
        </div>
      </section>
    
      <NeighborhoodAuthorityBlock
        neighborhood="Alphaville Barueri"
        zone="Grande SP"
        currentSlug="/avcb-alphaville-barueri"
      />



      <ServiceClusterLinks currentSlug="/avcb-alphaville-barueri" />
      <ServiceBlogLinks currentSlug="/avcb-alphaville-barueri" />


      <OccupationDepthBlock
        occupation="/Avcb Alphaville Barueri"
        currentSlug="/avcb-alphaville-barueri"
      />

      <InternalLinksBlock
        currentSlug="/avcb-barueri-alphaville"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Alphaville/Barueri"
      />
</>
  );
}

