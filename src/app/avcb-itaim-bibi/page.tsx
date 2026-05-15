import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, BadgeInfo, MapPin,
  Building2, Landmark, Factory, GraduationCap, ArrowRight,
  ShieldCheck, Clock, Scale, ClipboardList, Activity,
  HelpCircle, Utensils, Dumbbell, Zap, Briefcase,
  Building, Coffee,
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

const _pageTitle = "AVCB no Itaim Bibi SP | Engenheiro para Lajes Corporativas e Gastronomia";
const _pageDesc = "AVCB no Itaim Bibi, Faria Lima e JK. Especialistas em regularização Triple A para lajes corporativas, prédios comerciais e alta gastronomia. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB no Itaim Bibi SP | Engenheiro para Lajes Corporativas e Gastronomia",
  description: "AVCB no Itaim Bibi, Faria Lima e JK. Especialistas em regularização Triple A para lajes corporativas, prédios comerciais e alta gastronomia. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-itaim-bibi",
  },
};

export default function ItaimBibiMasterPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "No Itaim Bibi, quem assina o AVCB do escritório: o locatário ou o condomínio?",
      answer: "A edificação base (prédio com suas escadas e hidrantes) é de responsabilidade do condomínio. Contudo, mudanças de layout interno (drywall, portas, carga de TI) podem exigir um CLCB ou adequação do projeto técnico da própria laje locada. Elaboramos laudos atestando a conformidade do seu layout."
    },
    {
      question: "Alta gastronomia no Itaim — o que reprova na vistoria do Bombeiro?",
      answer: "Para restaurantes Michelin e bistrôs premiados, o visual não pode mascarar as deficiências técnicas de supressão (classe K) em coifas, falta de detectores de fumaça operantes sobre os forros e saídas de emergência subdimensionadas nas rotas de staff e salão. Isso paralisa imediatamente a licença municipal (Alvará)."
    },
    {
      question: "Reforma em escritório na Faria Lima: preciso revisar as medidas de segurança?",
      answer: "Sim. Prédios corporativos Triple A não permitem entrada de prestadores de obra antes da aprovação do projeto revisado de sprinklers e detecção da laje pela gerenciadora predial e, em seguida, as atualizações perante as Instruções Técnicas do Bombeiro Estadual."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-itaim-bibi",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Itaim Bibi e Faria Lima",
        serviceName: "Engenharia Contra Incêndio Triple A",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Zona Sul", item: "/avcb-zona-sul" },
          { name: "Itaim Bibi", item: "/avcb-itaim-bibi" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO — MASTER C-LEVEL ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-8 border-stone-600 ">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Torres Comerciais Triple A - Itaim Bibi e Faria Lima"
          fill
          className="object-cover opacity-25 grayscale brightness-50 mix-blend-luminosity"
          priority
          sizes="100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <span className="inline-block bg-stone-700 text-stone-100 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 shadow-xl border border-stone-600 tracking-tighter">
                O Centro Financeiro do Brasil: Itaim Bibi & JK
              </span>
              <h1 className="text-3xl md:text-[5rem] font-black mb-4 leading-[0.8] tracking-tighter uppercase italic text-white flex flex-col">
                <span className="text-stone-400">AVCB NO</span>
                <span className="text-stone-100 not-italic uppercase drop-shadow-2xl font-black md:text-[5.5rem] mt-2 block">
                  ITAIM BIBI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-300 mb-6 leading-relaxed font-bold max-w-2xl text-balance italic border-l-4 border-stone-500 pl-6">
                Regulamentação <strong className="text-white">Triple A</strong> para lajes corporativas, torres empresariais e alta gastronomia na Faria Lima.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={whatsappLink} 
                  className="bg-stone-100 hover:bg-[#1EBE5A] hover:text-white text-slate-950 font-black px-10 py-5 rounded-xl text-xl transition-all shadow-2xl flex items-center justify-center gap-3 border-b-4 border-stone-300 uppercase tracking-tighter"
                >
                  <Briefcase className="w-6 h-6 shrink-0" /> Engenheiro Faria Lima
                </a>
              </div>
            </div>

            <div className="lg:w-2/5">
                <div className="bg-stone-900/80 backdrop-blur-md p-8 rounded-3xl shadow-4xl relative overflow-hidden border border-stone-700">
                  <h3 className="text-xl font-black text-white mb-4 flex items-center gap-3 uppercase text-center justify-center underline decoration-stone-600 underline-offset-8">
                    Análise Própria para <span className="text-stone-400 italic">Layouts Triple A</span>
                  </h3>
                  <LeadForm variant="compact" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRODUÇÃO E DESAFIO CORPORATIVO ── */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-[3rem] font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase italic">
                O Padrão de Conformidade <span className="text-stone-500 not-italic underline decoration-stone-300 decoration-8 underline-offset-4 block mt-2">Itaim Bibi</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  O Itaim Bibi congrega o metro quadrado comercial mais valorizado de São Paulo. Ao ocupar lajes na <span className="font-bold text-slate-900">Brigadeiro Faria Lima</span>, <span className="font-bold text-slate-900">Juscelino Kubitschek</span> ou na <span className="font-bold text-slate-900">Berrini</span>, o nível de exigência dos administradores prediais e seguradoras corporativas atinge o grau máximo.
                </p>
                <p>
                  Reformas de escritório sem ART validada, layouts que obstruem hidrantes ou rebaixamentos de teto (plenums) sem recalibragem de sprinklers geram passivos milionários e inviabilizam o seguro do andar.
                </p>
                <p className="text-slate-900 font-bold border-l-4 border-stone-800 pl-6 bg-white p-6 shadow-sm rounded-r-xl italic tracking-tight">
                  A DRD2 Engenharia possui o capital intelectual necessário para debater conformidade técnica com qualquer Asset Manager de São Paulo, provendo os laudos que liberam as chaves da sua operação no Itaim.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-stone-900 p-8 rounded-3xl border border-stone-700 shadow-2xl text-stone-300">
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 italic text-center border-b border-stone-700 pb-4">Demandas Críticas:</h4>
              <ul className="space-y-6">
                {[
                  { t: "Lajes Corporativas", d: "Alterações de piso elevado, divisórias blindadas e dutos AC." },
                  { t: "Salões Gastronômicos", d: "Supressão em cozinhas integradas para prêmios Michelin." },
                  { t: "Centros de Distribuição", d: "Data Centers e salas cofres integradas aos escritórios." }
                ].map((item, i) => (
                  <li key={i} className="text-left group">
                    <span className="block text-white font-black text-xs uppercase tracking-widest group-hover:text-stone-400 transition-colors">{item.t}</span>
                    <span className="block text-stone-500 text-[11px] font-bold leading-relaxed italic">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOCO DE OPERAÇÃO ── */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none text-slate-900">
               Atuação <span className="text-stone-400 not-italic tracking-tighter">Triple A</span> no Itaim
             </h2>
             <p className="text-base text-slate-400 font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto italic">Serviços master de responsabilidade civil e segurança.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-black uppercase text-center tracking-tighter">
              {[
                { t: "Corporativo C-Level", d: "Licenciamento total de pavimentos antes da mudança do CEO. Coordenação de laudos operacionais junto à JLL, CBRE, Cushman.", i: <Building className="w-12 h-12 mx-auto mb-6 text-stone-800" /> },
                { t: "Alta Gastronomia", d: "Soluções de classe mundial (Classe K) exigidas por auditores e seguro de incêndio em restaurantes de renome internacional.", i: <Utensils className="w-12 h-12 mx-auto mb-6 text-stone-800" /> },
                { t: "Bares e Entretenimento", d: "Aprovação de lotação real projetada com sistemas audíveis em alto volume, prevenindo multas e intervenções do DCON.", i: <Coffee className="w-12 h-12 mx-auto mb-6 text-stone-800" /> },
                { t: "Academias de Luxo", d: "Projetos técnicos e licenças operacionais para estúdios boutique e infraestruturas com alta concentração humana simultânea.", i: <Dumbbell className="w-12 h-12 mx-auto mb-6 text-stone-800" /> }
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 p-12 rounded-[2rem] border border-stone-200 hover:bg-stone-900 hover:text-white transition-all group shadow-sm hover:shadow-2xl">
                  <div className="group-hover:text-stone-300 transition-colors drop-shadow-sm">{item.i}</div>
                  <h3 className="text-2xl mb-4 italic underline decoration-stone-300 group-hover:decoration-stone-700 decoration-4 underline-offset-8">{item.t}</h3>
                  <p className="text-[10px] text-stone-500 group-hover:text-stone-400 not-italic font-bold leading-relaxed tracking-widest">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── ARQUITETURA E AVENIDAS ── */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden italic text-left">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-white">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-[5rem] font-black uppercase tracking-tighter mb-10 leading-[0.9] underline decoration-stone-600 decoration-8 underline-offset-[1rem] shadow-black drop-shadow-xl text-left font-black">
                  DOMÍNIO <br /><span className="text-stone-400 not-italic tracking-[0.05em] font-black font-black">FARIA LIMA</span>
                </h2>
                <div className="grid grid-cols-1 gap-4 font-black">
                  {[
                    "Av. Brigadeiro Faria Lima", "Av. Juscelino Kubitschek (JK)", "Rua Joaquim Floriano", "Rua Pedroso Alvarenga", "Rua Amauri e Polo Vila Olímpia"
                  ].map((street, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-black/30 rounded-xl border border-stone-700 group hover:border-stone-400 transition-all hover:bg-stone-800 shadow-xl text-left">
                      <MapPin className="w-5 h-5 text-stone-500 shrink-0" />
                      <span className="font-black text-xs tracking-widest uppercase">{street}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-16 text-slate-900 shadow-3xl text-center border border-stone-200 shadow-stone-900/50">
                 <h3 className="text-2xl font-black mb-12 uppercase italic text-slate-800 tracking-tighter leading-none text-center font-black">
                   <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-stone-800" />
                   Processo <span className="text-stone-400 not-italic uppercase tracking-widest font-black underline decoration-stone-300 underline-offset-4">Diligente</span>
                 </h3>
                 <p className="font-bold text-sm text-slate-500 uppercase tracking-widest leading-relaxed mb-10 text-balance italic">
                   "Em lajes Triple A, o retrabalho tem custo milionário. Nosso compromisso é com a exatidão normativa e liberação célere para que seu faturamento imobiliário ou gastronômico não atrase."
                 </p>
                 <a 
                   href={whatsappLink} 
                   className="inline-block bg-stone-900 text-white font-black px-12 py-5 rounded-lg text-lg uppercase tracking-tighter hover:bg-stone-700 transition-all shadow-xl"
                 >
                   Auditoria Prévia Laje
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter text-center font-black tracking-tighter">Perguntas <span className="text-stone-500 not-italic font-black text-center font-black underline decoration-stone-300">TÉCNICAS</span></h2>
             <p className="mt-4 text-stone-400 font-black uppercase tracking-[0.25em] text-xs font-black">Consultoria para Gestores de Facilities e CEO's</p>
           </div>
           
           <div className="space-y-4">
             {faqItems.map((faq, i) => (
                <details key={i} className="group bg-stone-50 rounded-xl shadow-sm border border-stone-200 overflow-hidden cursor-pointer open:ring-4 open:ring-stone-200 transition-all font-black">
                 <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-[15px] select-none uppercase italic tracking-tighter leading-snug">
                   {faq.question}
                   <span className="text-stone-400 text-2xl group-open:rotate-45 transition-transform duration-300 font-sans font-light">+</span>
                 </summary>
                 <div className="p-7 pt-0 text-stone-600 leading-relaxed text-sm border-t border-stone-200 italic font-medium tracking-tight">
                   {faq.answer}
                 </div>
               </details>
             ))}
           </div>
        </div>
      </section>

      {/* ── Final Conversion ── */}
      <section className="py-32 bg-stone-50 border-t border-stone-200 text-center relative overflow-hidden italic shadow-inner">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-4xl md:text-[7rem] font-black text-slate-900 leading-[0.8] uppercase tracking-tighter mb-10 italic font-black font-black">
              Segurança <span className="text-stone-400 not-italic tracking-[0.05em] font-black text-5xl md:text-[7.5rem] block mt-2 underline decoration-stone-300 decoration-8 underline-offset-[1.5rem]">CORPORATIVA</span>
            </h2>
            <p className="text-xl text-stone-500 font-black mb-16 max-w-3xl mx-auto uppercase italic leading-loose tracking-[0.2em] font-black font-black text-balance">
              Escritórios C-Level e Prêmios Michelin não podem operar vulneráveis. Agende a vistoria prévia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
               <a 
                 href={whatsappLink} 
                 className="bg-slate-950 text-white font-black px-16 py-8 rounded-2xl shadow-2xl hover:bg-stone-500 hover:text-white transition-all flex items-center justify-center gap-6 text-2xl tracking-tighter uppercase select-none italic font-black border-4 border-slate-950 hover:border-stone-500"
               >
                 <Briefcase className="w-8 h-8" /> Acionar DRD2 Engenharia
               </a>
            </div>
            
            
      <NeighborhoodAuthorityBlock
        neighborhood="Itaim Bibi"
        zone="Zona Sul"
        currentSlug="/avcb-itaim-bibi"
      />



      <OccupationDepthBlock
        occupation="/Avcb Itaim Bibi"
        currentSlug="/avcb-itaim-bibi"
      />

      <InternalLinksBlock
        currentSlug="/avcb-itaim-bibi"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Itaim Bibi"
      />

      <ServiceClusterLinks currentSlug="/avcb-itaim-bibi" />
      <ServiceBlogLinks currentSlug="/avcb-itaim-bibi" />

      <NeighborhoodSilo currentSlug="/avcb-itaim-bibi" />
        </div>
      </section>

      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-primary">AVCB em Itaim Bibi</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Itaim Bibi precisa dos seguintes documentos:
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
          <div className="bg-slate-900 border-l-8 border-primary p-6 rounded-r-2xl text-white font-bold text-sm">
            A DRD2 faz auditoria documental gratuita antes de qualquer protocolo em Itaim Bibi. Evite exigencias, rejeicoes e atrasos identificando documentos pendentes antes de submeter ao CBPMESP.
          </div>
        </div>
      </section>

    </>
  );
}

