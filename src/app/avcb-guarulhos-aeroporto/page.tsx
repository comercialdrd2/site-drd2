import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  MapPin, Building2, Search, Activity, ClipboardCheck, Clock
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import HeroSection from "@/components/HeroSection";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import ExpansionAuthorityBlock from "@/components/ExpansionAuthorityBlock";

const _slug = "/avcb-guarulhos-aeroporto";
const _pageTitle = "AVCB e CLCB em Região do Aeroporto, Guarulhos SP | DRD2 Engenharia";
const _pageDesc = "Regularização de AVCB e CLCB em Região do Aeroporto, Guarulhos SP. Foco em segurança contra incêndio, aprovação técnica e renovação no Corpo de Bombeiros com projeto especializado.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function ExpansionLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    { question: "Armazenar produtos químicos exige AVCB especial?", answer: "Sim, exige o cálculo específico de carga de incêndio e, dependendo do produto, bacias de contenção e sistemas de espuma." },
    { question: "Hotel de trânsito perto do aeroporto precisa de AVCB?", answer: "Sim, hotéis são classificados como ocupação B e têm normas rígidas de detecção de fumaça e sinalização em várias línguas." },
    { question: "O que é o laudo de carga de incêndio?", answer: "É um cálculo feito por engenheiro que define quanta energia de fogo o prédio suporta com base no que é guardado dentro dele." },
    { question: "Sprinklers são obrigatórios em galpões?", answer: "Na maioria dos casos acima de 2.500m² ou com carga de incêndio elevada, sim." },
    { question: "Qual o prazo para obter o AVCB em Região do Aeroporto?", answer: "Em média de 30 a 90 dias, dependendo da complexidade técnica. A DRD2 acelera o processo com protocolos prioritários." }
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Região do Aeroporto",
    serviceName: "AVCB e Regularização em Região do Aeroporto",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Expansão", item: "#" },
      { name: "Região do Aeroporto", item: _slug }
    ]
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/blog_hero_avcb_galpao.webp"
          alt="Regularização de AVCB em Região do Aeroporto"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Segurança de Logística e Cargas
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Região do Aeroporto: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Segurança e Regularização Técnica</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sem AVCB válido em Região do Aeroporto, sua empresa pode ser <strong className="text-white bg-red-600/30 px-2">interditada</strong> e seu <strong className="text-white bg-red-600/30 px-2">responsável pode ser autuado</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com engenheiro especialista em Região do Aeroporto
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Atendimento com Engenheiro Especialista (CREA-SP)",
                "Projetos Técnicos e Renovação Ministerial",
                "Acompanhamento total até a aprovação final",
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

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-slate-700">
               <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Excelência em Segurança em <br />
                <span className="text-red-600">Região do Aeroporto</span>
              </h2>
              <p>
                Regularizar uma edificação em <strong>Região do Aeroporto</strong> exige conhecimento das normas técnicas locais e estaduais. A região de Grande São Paulo é estratégica e possui rigorosa fiscalização.
              </p>
              <p>
                A região do Aeroporto Internacional de Guarulhos é o maior hub logístico da América Latina. Galpões de armazenamento de cargas exigem AVCB com foco em Carga de Incêndio (IT-14). Um erro no cálculo da mercadoria armazenada pode fazer com que os hidrantes sejam inúteis no momento do sinistro.
              </p>
              <p>
                A DRD2 Engenharia atua com foco exclusivo em segurança contra incêndio, garantindo que seu condomínio, comércio ou indústria esteja regularizado com documentação técnica consistente.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "+4000", sub: "Empresas Regularizadas" },
                { label: "100%", sub: "Taxa de Aprovação" },
                { label: "+50", sub: "Municípios Atendidos" },
                { label: "15 Anos", sub: "De Experiência Técnica" }
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

      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-red-900/20 border-l-8 border-red-600 p-10 rounded-r-[3rem] relative overflow-hidden">
              <MapPin className="absolute top-4 right-4 w-24 h-24 text-white/5" />
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight">Cenário Local: Região do Aeroporto</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium mb-6">
                Em galpões logísticos próximos ao aeroporto, o Corpo de Bombeiros fiscaliza severamente a altura de empilhamento. Mercadorias próximas demais aos bicos de sprinklers anulam a eficácia do sistema, levando à reprovação sumária do AVCB.
              </p>
              <p className="text-red-400 font-bold uppercase italic tracking-tighter">
                ⚠️ Atendimento prioritário para a região: Rodovia Hélio Smidt, Av. Jamil João Zarif
              </p>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Riscos Identificados em Região do Aeroporto</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Estocagem acima da altura permitida", d: "Cargas bloqueando a dispersão de água do sistema automático de combate." },
                { t: "Bicos de sprinklers obstruídos", d: "Prateleiras que impedem o funcionamento dos sensores e chuveiros automáticos." },
                { t: "Falta de laudo de estanqueidade de hidrantes", d: "Redes de incêndio que perdem pressão devido a vazamentos nas juntas de galpões gigantes." },
              ].map((prob, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 text-left hover:shadow-2xl transition-all group">
                   <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 font-black group-hover:scale-110 transition-transform">{i+1}</div>
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-slate-900 group-hover:text-red-600 transition-colors">{prob.t}</h3>
                   <p className="text-slate-600 text-sm font-medium leading-relaxed">{prob.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <div className="py-12 bg-slate-950 border-y border-slate-800 text-center">
         <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Precisa de AVCB em Região do Aeroporto? Fale agora conosco.</p>
         <CtaWhatsApp label="Agendar Vistoria Técnica" occupationType="imóvel em Região do Aeroporto" variant="primary" centered />
      </div>

      <SocialProof
        testimonial={{
          text: "Nosso centro logístico foi aprovado sem restrições. A consultoria técnica da DRD2 sobre o tipo de carga foi fundamental para o projeto.",
          author: "Sérgio Tanaka",
          role: "Gerente de Operações — Logística Aeroporto",
        }}
      />

      <ExpansionAuthorityBlock slug={_slug} />
      <LeadForm />
      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={8} titulo="Serviços em Região do Aeroporto" />

      <ServiceClusterLinks currentSlug="/avcb-guarulhos-aeroporto" />
      <ServiceBlogLinks currentSlug="/avcb-guarulhos-aeroporto" />

      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-white text-center relative overflow-hidden">
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">Proteja sua operação logística em Guarulhos</h2>
            <p className="text-xl text-red-100 mb-12 font-medium italic">Investimento em manutenção de bombas de recalque e sistemas de sprinklers de grande porte.</p>
            <a href={whatsappLink} target="_blank" className="bg-white text-red-900 font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
               Falar com Especialista em Região do Aeroporto
            </a>
         </div>
      </section>
    </>
  );
}
