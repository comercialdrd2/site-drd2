import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, BadgeInfo, MapPin,
  Building2, Landmark, Factory, Warehouse, ArrowRight,
  ShieldCheck, Clock, Scale, HelpCircle, Activity,
  Store, Zap, Truck, GraduationCap, Utensils,
  GlassWater, Music,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import HeroSection from "@/components/HeroSection";
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
import LeadForm from "@/components/LeadForm";

const _pageTitle = "AVCB em Pinheiros SP | Engenheiro para Restaurantes, Bares, Condomínios e Escritórios";
const _pageDesc = "AVCB em Pinheiros com engenheiro especializado. Regularização para restaurantes, bares, casas noturnas, condomínios e escritórios na Rua Fradique Coutinho, Rua dos Pinheiros e Largo da Batata. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB em Pinheiros SP | Engenheiro para Restaurantes, Bares, Condomínios e Escritórios",
  description: "AVCB em Pinheiros com engenheiro especializado. Regularização para restaurantes, bares, casas noturnas, condomínios e escritórios na Rua Fradique Coutinho, Rua dos Pinheiros e Largo da Batata. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-pinheiros",
  },
};

export default function PinheirosMasterPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Meu restaurante na Rua Fradique vai abrir em 30 dias. Consigo o AVCB a tempo?",
      answer: "Dificilmente em 30 dias para AVCB completo. Mas existem alternativas: se o imóvel já tem AVCB vigente e a sua atividade não gera risco adicional significativo, pode ser possível operar temporariamente. A DRD2 analisa a situação e orienta a melhor estratégia — inicie o processo o mais rápido possível."
    },
    {
      question: "Bar no subsolo de Pinheiros tem exigências diferentes?",
      answer: "Sim. Estabelecimentos em subsolo têm exigências específicas de saídas de emergência, controle de fumaça e sistemas de alarme. O projeto técnico precisa contemplar essas especificidades desde o início. A DRD2 tem experiência em AVCB para estabelecimentos em subsolo em Pinheiros."
    },
    {
      question: "Casa noturna em Pinheiros — qual é a lotação máxima definida no AVCB?",
      answer: "A lotação máxima é definida no projeto técnico com base na área disponível e na quantidade e largura das saídas de emergência. Operar acima da lotação definida no AVCB é irregular e pode resultar em embargo imediato em fiscalização."
    },
    {
      question: "Condomínio de alto padrão em Pinheiros com AVCB vencido — impacta na venda das unidades?",
      answer: "Sim. Compradores informados e financiamentos imobiliários exigem AVCB válido. AVCB vencido pode travar uma transação imobiliária. A DRD2 conduz a renovação com prioridade para viabilizar vendas ou locações em anamento."
    }
  ];

  const services = [
    { 
      name: "Gastronomia & Restaurantes", 
      desc: "Regularização master para cozinhas industriais e salões de alta circulação no eixo da Fradique Coutinho.",
      icon: Utensils,
      slug: "restaurante"
    },
    { 
      name: "Bares & Nightlife", 
      desc: "Projeto técnico para casas noturnas e bares com foco em lotação máxima, saídas de emergência e alarme.",
      icon: Music,
      slug: "entretenimento"
    },
    { 
      name: "Condomínios Alto Padrão", 
      desc: "Gestão de renovação para edifícios residenciais com infraestrutura completa de lazer e segurança.",
      icon: Building2,
      slug: "condominio"
    },
    { 
      name: "Escritórios & Coworking", 
      desc: "Licenciamento de espaços corporativos e hubs de inovação no eixo da Av. Brigadeiro Faria Lima.",
      icon: Zap,
      slug: "corporativo"
    }
  ];

  const mainStreets = [
    "Rua dos Pinheiros - Hub Gastronômico",
    "Rua Fradique Coutinho - Restaurantes & Serviços",
    "Rua Wisard - Comércio & Residencial Padrão",
    "Avenida Brigadeiro Faria Lima - Eixo Corporativo",
    "Largo da Batata - Centro de Fluxo e Serviços",
    "Rua Mateus Grou - Vida Noturna Ativa"
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-pinheiros",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Pinheiros",
        serviceName: "AVCB e Segurança para Entretenimento e Gastronomia",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Zona Oeste", item: "/avcb-zona-oeste" },
          { name: "Pinheiros", item: "/avcb-pinheiros" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <HeroSection 
        occupation="restaurante" 
        tag="O Eixo da Inovação e Gastronomia: Pinheiros Master"
        title={<><span className="text-white">AVCB EM</span> <span className="text-red-500 not-italic tracking-tighter uppercase font-black">PINHEIROS</span></>}
        subtitle="Engenheiro Especializado para Restaurantes, Bares, Condomínios e Escritórios. Proteção técnica no bairro mais dinâmico de São Paulo."
        showForm={true}
        formTitle={<>Diagnóstico <span className="text-red-600 not-italic uppercase tracking-tighter font-black">Pinheiros</span></>}
      />

            {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Zona Oeste", href: "/avcb-zona-oeste-sao-paulo" },
          { label: "AVCB Pinheiros" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* Authority Section */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest leading-none">
                <BadgeInfo className="w-4 h-4" /> Hub de Entretenimento e Corporativo
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-[1.1] tracking-tighter uppercase mb-6 text-left border-l-8 border-primary pl-6">
                AUTORIDADE <br /> TÉCNICA EM <br /> <span className="text-primary">PINHEIROS</span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed text-balance text-left font-medium">
                Pinheiros combina um dos eixos gastronômicos mais densos do Brasil com um polo corporativo e residencial de alto padrão. A gestão do AVCB para estabelecimentos de entretenimento exige rigor absoluto com lotação e rotas de fuga. Atuamos com normas 2025 para sua tranquilidade total.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 font-black">
                {[
                  "Diagnóstico para Restaurantes",
                  "Projeto PPCI com ART Registrada",
                  "Cálculo de Lotação para Nightlife",
                  "Protocolo e Acompanhamento Ativo",
                  "Renovação de AVCB de Prédios",
                  "CLCB para Pequenos Coworkings",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-400 font-black uppercase tracking-tight italic border-b border-slate-100 pb-2 hover:pl-2 transition-all text-left">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl group transition-all border-b-8 border-primary text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-700" />
                <h3 className="text-2xl lg:text-3xl font-black uppercase mb-6 leading-tight tracking-tighter text-left border-b-2 border-primary/30 pb-4">
                   PROTEÇÃO EM ZONAS <br /> DE ALTA OCUPAÇÃO
                </h3>
                <div className="space-y-6 text-base text-gray-300 leading-relaxed text-left font-medium">
                  <p>Operar bares e casas noturnas em Pinheiros sem o cálculo exato de saídas de emergência e lotação é um risco jurídico imenso. Regularizamos seu estabelecimento focando na segurança dos clientes e na validade do seu alvará.</p>
                  <p>Para condomínios de alto padrão, garantimos que a documentação técnica não seja um entrave para a valorização patrimonial ou transações imobiliárias iminentes.</p>
                </div>
                <div className="mt-10 p-8 bg-white/5 border border-white/10 rounded-[2rem] italic text-[11px] text-gray-400 font-black uppercase tracking-[0.3em] leading-relaxed text-center shadow-inner font-black shadow-primary/10">
                   "A inteligência técnica nos restaurantes e coberturas de Pinheiros."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-4 text-center">Setores <span className="text-primary">Master</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs text-center">Expertise em Gastronomia e Corporativo: Pinheiros SP</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {services.map((s, i) => (
               <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-4xl transition-all group flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary transition-colors shadow-sm">
                    <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="text-xl font-black text-secondary mb-4 uppercase tracking-tighter italic h-12 flex items-center justify-center leading-none text-pretty font-black">
                   {s.name}
                 </h3>
                 <p className="text-gray-400 font-black leading-tight text-[10px] mb-8 uppercase tracking-widest italic h-16 overflow-hidden line-clamp-3 font-black">
                   {s.desc}
                 </p>
                 <Link href="/contato" className="text-primary font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-3 group-hover:text-secondary transition-all font-black">
                    Consultoria →
                 </Link>
               </div>
             ))}
           </div>
        </div>
      </section>

            {/* ── CTA 2 — APÓS SERVIÇOS ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisa de AVCB em Pinheiros? Fale agora com um engenheiro especialista.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="imóvel em Pinheiros"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* Local Footprint */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden italic shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-white text-left font-black">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[1.1]">
                  PRESENÇA <br /><span className="text-primary">PINHEIROS SP</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {mainStreets.map((street, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:border-primary transition-all hover:bg-white/10 shadow-lg text-left shadow-primary/10">
                      <MapPin className="w-6 h-6 text-primary shrink-0" />
                      <span className="font-black text-[10px] tracking-widest uppercase text-left">{street}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-[4rem] p-16 text-slate-900 shadow-2xl border-t-12 border-primary min-h-[500px] flex flex-col justify-center text-center">
                 <h3 className="text-3xl font-black mb-12 uppercase italic text-secondary border-b-4 border-primary/10 pb-6 tracking-tighter leading-none text-center underline italic tracking-tighter shadow-primary/10 font-black">
                   Prazos <span className="text-primary not-italic uppercase tracking-widest font-black">Reais</span>
                 </h3>
                 <div className="space-y-12">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-10 hover:border-primary/20 transition-all text-left font-black">
                       <div className="max-w-[65%] text-left">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2 leading-none italic font-black">Silo Gastronomia & Bares</span>
                          <h4 className="font-black text-xl text-secondary uppercase italic tracking-tighter leading-none font-black">RESTAURANTES</h4>
                       </div>
                       <span className="text-primary font-black italic text-2xl tracking-tighter leading-none">60-90 dias</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-slate-100 pb-10 hover:border-primary/20 transition-all text-left font-black">
                        <div className="max-w-[65%] text-left">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2 leading-none italic font-black">Silo Predial Administrativo</span>
                          <h4 className="font-black text-xl text-secondary uppercase italic tracking-tighter leading-none font-black">CONDOMÍNIOS</h4>
                        </div>
                        <span className="text-primary font-black italic text-2xl tracking-tighter leading-none">60-90 dias</span>
                    </div>
                 </div>
                 <p className="mt-12 text-[9px] text-gray-400 font-black uppercase text-center italic tracking-[0.4em] leading-relaxed font-black transition-all font-black">
                   *Prazos sujeitos à conformidade das coifas e sistemas de exaustão.
                 </p>
              </div>
           </div>
        </div>
      </section>

            {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Pinheiros com agilidade e sem burocracia. AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresários da região.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresário — Pinheiros, São Paulo",
        }}
      />

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16 underline decoration-primary decoration-4 underline-offset-16">
             <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter text-center font-black tracking-tighter">Dúvidas <span className="text-primary not-italic text-sm font-bold tracking-tighter text-center font-black">PINHEIROS</span></h2>
             <p className="mt-2 text-gray-400 font-black uppercase tracking-widest text-xs italic text-center text-pretty font-black">Respondendo às principais questões técnicas da Região</p>
           </div>
           
           <div className="space-y-6 text-left">
             {faqItems.map((item, i) => (
               <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:border-primary/20 transition-all shadow-sm">
                 <h4 className="text-xl font-black text-secondary mb-4 flex items-center gap-4 italic leading-none text-left font-black">
                   <HelpCircle className="w-8 h-8 text-primary shrink-0 opacity-20 group-hover:opacity-100 transition-all" />
                   {item.question}
                 </h4>
                 <p className="text-gray-500 font-bold leading-relaxed pl-12 border-l-4 border-primary/10 text-sm uppercase tracking-tight italic text-left font-black tracking-widest">
                   {item.answer}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

            {/* ── CTA 4 ── */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Pinheiros.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Pinheiros"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {/* Final Conversion */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 text-center relative overflow-hidden italic shadow-inner">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-black text-secondary leading-[1.1] uppercase tracking-tighter mb-12 italic text-center">
              Pinheiros Seguro <br /><span className="text-primary not-italic tracking-[0.1em] font-black tracking-tighter">EFICIÊNCIA MASTER</span>
            </h2>
            <p className="text-2xl text-gray-500 font-black mb-20 max-w-3xl mx-auto uppercase italic leading-none tracking-[0.4em] text-center font-black font-black">Regularize sua operação com a maior autoridade técnica em entretenimento de SP.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
               <a 
                 href={whatsappLink} 
                 className="bg-primary text-white font-black px-20 py-8 rounded-[2rem] shadow-4xl hover:bg-slate-900 transition-all flex items-center justify-center gap-8 text-2xl tracking-tighter uppercase border-b-8 border-white/20 select-none italic shadow-primary/20 font-black"
               >
                 <Phone className="w-10 h-10" /> Falar com engenheiro especialista Master
               </a>
            </div>
            <div className="mt-24 pt-24 border-t border-slate-200 flex flex-wrap justify-center gap-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] italic leading-none">
               <Link href="/avcb-restaurante" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ GUIA DE RESTAURANTES</Link>
               <Link href="/avcb-itaim-bibi" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ ITAIM BIBI</Link>
               <Link href="/avcb-vila-madalena" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ VILA MADALENA</Link>
               <Link href="/avcb-entretenimento" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ CASAS NOTURNAS</Link>
            </div>
        </div>
      </section>

      {/* SEO Technical Context */}
      <section className="py-24 bg-white border-t border-slate-100 text-slate-700 italic border-b-4 border-primary font-bold">
        <div className="container mx-auto px-4 max-w-4xl text-slate-700 leading-relaxed text-left text-base">
          <h2 className="text-3xl md:text-4xl font-black text-secondary uppercase tracking-tighter mb-8 border-l-8 border-primary pl-6 text-left">AVCB em Pinheiros: O Epicentro da Gastronomia e Lazer Regularizado</h2>
          <p className="text-left mb-6 font-medium">Pinheiros consolidou-se como o coração pulsante da gastronomia e do entretenimento noturno em São Paulo, exercendo um papel de vanguarda cultural e econômica. Com a maior densidade de novos estabelecimentos comerciais da Zona Oeste, a regularização do AVCB (Auto de Vistoria do Corpo de Bombeiros) é uma demanda fundamental para garantir a segurança física dos frequentadores e a validade jurídica das licenças de funcionamento.</p>
          <p className="text-left font-medium">A DRD2 Engenharia fornece consultoria técnica master em Pinheiros, assegurando que proprietários de bares, restaurantes premiados e síndicos de condomínios de alto padrão tenham acesso à melhor documentação técnica do mercado, com processos ágeis junto ao CBPMESP e suporte total em todas as etapas de conformidade com o Decreto Estadual nº 63.911/18.</p>
        </div>
      </section>

      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-primary">AVCB em Pinheiros</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Pinheiros precisa dos seguintes documentos:
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
            A DRD2 faz auditoria documental gratuita antes de qualquer protocolo em Pinheiros. Evite exigencias, rejeicoes e atrasos identificando documentos pendentes antes de submeter ao CBPMESP.
          </div>
        </div>
      </section>
    
      <LeadForm />
      <NeighborhoodAuthorityBlock
        neighborhood="Pinheiros"
        zone="Zona Oeste"
        currentSlug="/avcb-pinheiros"
      />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/avcb-pinheiros" />
      <ServiceBlogLinks currentSlug="/avcb-pinheiros" />

      <OccupationDepthBlock
        occupation="/Avcb Pinheiros"
        currentSlug="/avcb-pinheiros"
      />

      <InternalLinksBlock
        currentSlug="/avcb-pinheiros"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Pinheiros"
      />
</>
  );
}
