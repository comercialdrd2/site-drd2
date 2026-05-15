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
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _pageTitle = "AVCB em Zona Oeste SP | Especialistas na Região da Faria | DRD2";
const _pageDesc = "Regularização de AVCB e CLCB no Zona Oeste SP. Engenheiros credenciados no CREA para condomínios de luxo, bares noturnos e clínicas e estabelecimentos com emissão ágil.";

export const metadata = {
  title: "AVCB em Zona Oeste SP | Especialistas na Região da Faria | DRD2",
  description: "Regularização de AVCB e CLCB no Zona Oeste SP. Engenheiros credenciados no CREA para condomínios de luxo, bares noturnos e clínicas e estabelecimentos com emissão ágil.",
  alternates: {
    canonical: "/avcb-zona-oeste-sao-paulo",
  },
};

export default function ZonaOesteSPLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Casas Noturnas (Grupo F-6) dependem de AVCB para a operacao noturna?",
      answer: "Absolutamente. Casas noturnas precisam de AVCB com cálculo especifico de lotação, saidas de emergência dimensionadas e sistema de alarme auditivo. A fiscalizacao e frequente na Zona Oeste e o risco de interdição sem AVCB valido e alto."
    },
    {
      question: "Restaurantes em Pinheiros e Vila Madalena precisam de AVCB ou CLCB?",
      answer: "Restaurantes com mais de 750m2 ou com uso de GLP acima de determinado volume precisam de AVCB completo. Estabelecimentos menores podem se enquadrar no CLCB. A DRD2 avalia o enquadramento correto gratuitamente."
    },
    {
      question: "Condomínios de alto padrao no Itaim Bibi precisam renovar AVCB com frequencia?",
      answer: "Sim. Condomínios residenciais renovam o AVCB a cada 3 anos em media. Para edificios com mais de 20 anos, pode haver exigencias de adequação de sistemas. A DRD2 gerencia o processo completo com antecedencia para evitar vencimentos."
    },
    {
      question: "Escritorios corporativos na Faria Lima precisam de AVCB?",
      answer: "Sim. Edificios comerciais com mais de 750m2 ou acima de 2 pavimentos precisam de AVCB. Grandes lajes corporativas na Faria Lima exigem sistemas completos de detecção, alarme e pressurização de escada de emergência."
    },
    {
      question: "Qual o prazo para regularizar um bar ou restaurante na Zona Oeste?",
      answer: "Em media de 60 a 90 dias, dependendo da complexidade do projeto e do historico de adequacoes do imóvel. Estabelecimentos com pendencias em instalacoes elétricas ou de exaustao podem demandar mais tempo. A DRD2 mapeia tudo na vistoria inicial."
    }
  ];

  const services = [
    { 
      name: "Atendimento Rápido 24hs", 
      desc: "Licenças especiais com vistoria preventiva para emissão rápida de renovação documentada.",
      icon: Building2,
      slug: "service"
    }
  ];

  const mainStreets = [
    "Avenida Faria Lima",
    "Avenida Rebouças",
    "Avenida Doutor Arnaldo",
    "Avenida Francisco Matarazzo"
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-zona-oeste-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "Zona Oeste SP",
        serviceName: "AVCB e Segurança para Entretenimento e Gastronomia",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Zona Oeste", item: "/avcb-zona-oeste" },
          { name: "Zona Oeste SP", item: "/avcb-zona-oeste-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center overflow-hidden border-b-8 border-primary  italic">
        <Image
          src="/images/blog/blog_hero_lapa_avcb.webp"
          alt="Bairro de Pinheiros e Rua dos Pinheiros - Regularização AVCB Master"
          fill
          className="object-cover opacity-20 grayscale brightness-50"
          priority
        sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8 text-left">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <span className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border border-white/10 leading-none shadow-xl tracking-tighter shadow-primary/20">Negócios Premium e Infraestrutura Intelectual</span>
              <h1 className="text-3xl md:text-[5.5rem] font-black mb-4 leading-[0.8] tracking-tighter uppercase italic text-white flex flex-col">
                <span className="text-white">AVCB NO(A) <br/> <span className="text-primary not-italic tracking-tighter uppercase font-black">ZONA OESTE SP</span></span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed font-bold uppercase tracking-tight text-balance font-black">
                Engenheiro Especializado para <strong>Restaurantes, Bares, Condomínios e Escritórios</strong>. Proteção técnica no bairro mais dinâmico de São Paulo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary hover:bg-[#1EBE5A] hover:text-white hover:text-primary text-white font-black px-12 py-6 rounded-2xl text-2xl transition-all shadow-2xl flex items-center justify-center gap-4 border-b-8 border-white/20 uppercase tracking-tighter"
                >
                  <Phone className="w-8 h-8" /> Falar com engenheiro especialista em Zona Oeste
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/5">
                <div className="bg-white p-8 rounded-[4rem] shadow-4xl relative overflow-hidden text-slate-900 border-t-8 border-primary italic">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                  <h3 className="text-2xl font-black text-secondary mb-4 flex items-center gap-3 italic uppercase text-center justify-center underline decoration-primary/10">
                    Diagnóstico <span className="text-primary not-italic uppercase tracking-tighter font-black">Zona Oeste</span>
                  </h3>
                  <LeadForm variant="compact" />
                </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Zona Oeste", href: "/avcb-zona-oeste-sao-paulo" },
          { label: "AVCB Zona Oeste São Paulo" },
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
                <BadgeInfo className="w-4 h-4" /> Negócios Premium e Infraestrutura Intelectual
              </div>
              <h2 className="text-4xl md:text-[5.5rem] font-black text-secondary leading-[0.85] tracking-tighter uppercase italic underline decoration-primary/20 decoration-8 underline-offset-16 text-left font-black">
                AUTORIDADE <br /> TÉCNICA EM <br /> <span className="text-primary not-italic tracking-tighter uppercase font-black tracking-tighter">ZONA OESTE</span>
              </h2>
              <p className="text-xl text-gray-500 font-bold leading-relaxed uppercase tracking-tight text-balance border-l-8 border-primary/20 pl-8 text-left font-black">
                A região da Zona Oeste SP exige engenharia de precisão com foco em condomínios de luxo, bares noturnos e clínicas. A regularização do AVCB no CBPMESP precisa seguir rigorosamente as normas 2025 do Decreto Estadual, cobrindo com assertividade tudo o que prefeituras e órgãos exigem dos empreendimentos no eixo da  Avenida Faria Lima.
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
              <div className="bg-slate-900 rounded-[4rem] p-12 md:p-14 text-white relative overflow-hidden shadow-2xl group hover:shadow-primary/20 transition-all border-b-12 border-primary italic text-left shadow-primary/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-700 font-black" />
                <h3 className="text-2xl font-black uppercase italic mb-8 leading-tight tracking-tighter underline decoration-primary decoration-4 underline-offset-12 lg:text-3xl text-left font-black tracking-tighter">
                   PROTEÇÃO EM ZONAS <br /> DE ALTA OCUPAÇÃO
                </h3>
                <div className="space-y-8 text-xs text-gray-400 font-black leading-relaxed uppercase tracking-widest text-left font-black">
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
           <div className="text-center mb-20 underline decoration-primary decoration-4 underline-offset-16">
              <h2 className="text-4xl md:text-7xl font-black text-secondary uppercase italic tracking-tighter mb-4 leading-none text-center font-black">Setores <span className="text-primary not-italic tracking-tighter font-serif">Master</span></h2>
              <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] italic text-center font-black">Expertise em Gastronomia e Corporativo: Pinheiros SP</p>
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
            Precisa de AVCB em Zona Oeste São Paulo? Fale agora com um engenheiro especialista.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="imóvel em Zona Oeste São Paulo"
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
                <h2 className="text-4xl md:text-[6rem] font-black uppercase italic tracking-tighter mb-10 leading-[0.8] underline decoration-primary decoration-8 underline-offset-16 font-black font-black">
                  PRESENÇA <br /><span className="text-primary not-italic tracking-[0.1em] font-black tracking-tighter font-black">ZONA OESTE SP</span>
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
          text: "A DRD2 regularizou nosso estabelecimento em Zona Oeste São Paulo com agilidade e sem burocracia. AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresários da região.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresário — Zona Oeste São Paulo, São Paulo",
        }}
      />

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16 underline decoration-primary decoration-4 underline-offset-16">
             <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter text-center font-black tracking-tighter">Dúvidas <span className="text-primary not-italic text-sm font-bold tracking-tighter text-center font-black">ZONA OESTE</span></h2>
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
            Não arrisque seu CNPJ em Zona Oeste São Paulo.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Zona Oeste São Paulo"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {/* Final Conversion */}
      <section className="py-32 bg-slate-50 border-t border-slate-200 text-center relative overflow-hidden italic shadow-inner">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-4xl md:text-[8rem] font-black text-secondary leading-[0.75] uppercase tracking-tighter mb-12 italic underline decoration-primary decoration-8 underline-offset-[2rem] text-center font-black font-black">
              Zona Oeste Seguro <br /><span className="text-primary not-italic tracking-[0.1em] font-black tracking-tighter font-black font-black">EFICIÊNCIA MASTER</span>
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

      {/* Bairros da Zona Oeste */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Bairros da Zona Oeste <span className="text-primary">Atendidos pela DRD2</span></h2>
          <p className="text-center text-slate-600 font-medium mb-10 max-w-3xl mx-auto">
            Nossa equipe atua em toda a Zona Oeste de São Paulo, com conhecimento técnico especializado nos perfis de ocupação de cada bairro da regiao.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {[
              { bairro: "Pinheiros", tipo: "Gastronomia e Entretenimento" },
              { bairro: "Vila Madalena", tipo: "Bares e Casas Noturnas" },
              { bairro: "Itaim Bibi", tipo: "Corporativo e Residencial" },
              { bairro: "Lapa", tipo: "Industrial e Residencial" },
              { bairro: "Butanta", tipo: "Residencial e Academico" },
              { bairro: "Vila Leopoldina", tipo: "Industrial e Logistica" },
              { bairro: "Perdizes", tipo: "Residencial e Comercio" },
              { bairro: "Barra Funda", tipo: "Corporativo e Entretenimento" },
              { bairro: "Alto de Pinheiros", tipo: "Residencial Alto Padrao" },
              { bairro: "Consolacao", tipo: "Comercio e Residencial" },
              { bairro: "Cerqueira Cesar", tipo: "Corporativo e Servicos" },
              { bairro: "Morumbi", tipo: "Residencial e Lazer" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">{item.bairro}</p>
                <p className="text-xs text-slate-500 font-medium mt-1">{item.tipo}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl p-8 text-slate-700 space-y-4 text-sm font-medium leading-relaxed">
            <p>
              A Zona Oeste de São Paulo concentra a maior densidade de bares, restaurantes e casas noturnas da cidade. Pinheiros e Vila Madalena recebem centenas de novos estabelecimentos por ano, todos obrigados a obter AVCB antes de iniciar as operacoes. A DRD2 acompanha esses processos desde a planta do imóvel ate a aprovação final no Corpo de Bombeiros.
            </p>
            <p>
              O corredor corporativo de Itaim Bibi e Faria Lima concentra lajes de escritorios que precisam de AVCB atualizado para contratos de locacao comercial. Investidores e gestoras de fundos imobiliarios exigem documentação técnica completa antes de qualquer transacao. Nossa equipe entrega projetos PPCI com rigor e agilidade para esse mercado exigente.
            </p>
            <p>
              Vila Leopoldina e Lapa mantem um polo logistico e industrial relevante, com galpões que demandam projetos especificos para armazenagem de materiais de diferentes cargas de incêndio. A DRD2 tem experiencia comprovada em regularizacoes de depositos e armazens nessa regiao da Zona Oeste.
            </p>
          </div>
        </div>
      </section>

      {/* Documentacao Necessaria Zona Oeste */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-primary">AVCB na Zona Oeste</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB no Corpo de Bombeiros, prepare a documentação abaixo com antecedencia:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa aprovada pela Prefeitura ou levantamento arquitetonico atualizado",
              "IPTU do exercicio atual com área total averbada e destinacao de uso",
              "Memorial descritivo da ocupação, uso e carga de incêndio estimada",
              "Laudo de instalacoes elétricas com ART registrada no CREA-SP",
              "Laudo e projeto do sistema de exaustao (obrigatório para restaurantes)",
              "ART do engenheiro responsavel pelo projeto de prevencao de incêndio",
              "Matricula atualizada do imóvel no Cartorio de Registro de Imóveis",
              "CNPJ ou CPF do responsavel legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 border-l-8 border-primary p-6 rounded-r-2xl text-white font-bold text-sm">
            Restaurantes na Zona Oeste precisam de laudo especifico do sistema de exaustao e coifa antes do protocolo no CBPMESP. A DRD2 coordena esse laudo junto ao PPCI para evitar exigencias e atrasos na aprovação do AVCB.
          </div>
        </div>
      </section>

      {/* SEO Technical Context */}
      <section className="py-24 bg-white border-t border-slate-100 text-slate-700 italic border-b-4 border-primary font-bold">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate font-black uppercase text-[11px] tracking-tight leading-relaxed text-left">
          <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-10 border-l-12 border-primary pl-10 leading-none underline decoration-primary/5 text-left font-black tracking-tighter font-black">Aprovação de AVCB Master na região de Zona Oeste SP</h2>
          <p className="text-left font-black">Pinheiros consolidou-se como o coração pulsante da gastronomia e do entretenimento noturno em São Paulo, exercendo um papel de vanguarda cultural e econômica. Com a maior densidade de novos estabelecimentos comerciais da Zona Oeste, a regularização do AVCB (Auto de Vistoria do Corpo de Bombeiros) é uma demanda fundamental para garantir a segurança física dos frequentadores e a validade jurídica das licenças de funcionamento.</p>
          <p className="text-left font-black">A DRD2 Engenharia fornece consultoria técnica master em Pinheiros, assegurando que proprietários de bares, restaurantes premiados e síndicos de condomínios de alto padrão tenham acesso à melhor documentação técnica do mercado, com processos ágeis junto ao CBPMESP e suporte total em todas as etapas de conformidade com o Decreto Estadual nº 69.118/2024.</p>
        </div>
      </section>
    

      <ServiceClusterLinks currentSlug="/avcb-zona-oeste-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-zona-oeste-sao-paulo" />

      <InternalLinksBlock
        currentSlug="/avcb-pinheiros"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em Zona Oeste"
      />
</>
  );
}

