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

const _slug = "/avcb-guarulhos-centro";
const _pageTitle = "AVCB e CLCB em Centro de Guarulhos SP | DRD2 Engenharia";
const _pageDesc = "Regularização de AVCB e CLCB em Centro de Guarulhos SP. Foco em segurança contra incêndio, aprovação técnica e renovação no Corpo de Bombeiros com projeto especializado.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function ExpansionLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    { question: "O Corpo de Bombeiros de Guarulhos é mais rigoroso que o de SP?", answer: "As normas (Instruções Técnicas) são as mesmas para todo o estado de SP, mas em Guarulhos a fiscalização atua em conjunto com a Secretaria de Desenvolvimento Urbano, o que torna o processo de renovação crítico para manter o Alvará em dia." },
    { question: "Qual o prazo de vistoria em Guarulhos?", answer: "O prazo médio após o protocolo é de 20 a 30 dias. A DRD2 agiliza a fase documental para garantir que o agendamento ocorra no menor tempo possível." },
    { question: "Prédios com mais de 30 anos no Centro de Guarulhos precisam de obras?", answer: "Muitas vezes não. Através de um Projeto Técnico de Substituição (PTS) e medidas compensatórias (como detecção de fumaça), conseguimos a aprovação sem intervenções drásticas na arquitetura antiga." },
    { question: "Quanto custa o DARE em Guarulhos?", answer: "As taxas estaduais (DARE) são calculadas com base na área construída e altura do imóvel. Nós calculamos o valor exato no seu orçamento." },
    { question: "Qual o prazo para obter o AVCB em Centro de Guarulhos?", answer: "Em média de 30 a 90 dias, dependendo da complexidade técnica. A DRD2 acelera o processo com protocolos prioritários." }
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Centro de Guarulhos",
    serviceName: "AVCB e Regularização em Centro de Guarulhos",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Expansão", item: "#" },
      { name: "Centro de Guarulhos", item: _slug }
    ]
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/blog_hero_avcb_galpao.webp"
          alt="Regularização de AVCB em Centro de Guarulhos"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Líder em Regularização em Guarulhos
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Centro de Guarulhos: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Segurança e Regularização Técnica</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sem AVCB válido em Centro de Guarulhos, sua empresa pode ser <strong className="text-white bg-red-600/30 px-2">interditada</strong> e seu <strong className="text-white bg-red-600/30 px-2">responsável pode ser autuado</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com engenheiro especialista em Centro de Guarulhos
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
                <span className="text-red-600">Centro de Guarulhos</span>
              </h2>
              <p>
                Regularizar uma edificação em <strong>Centro de Guarulhos</strong> exige conhecimento das normas técnicas locais e estaduais. A região de Grande São Paulo é estratégica e possui rigorosa fiscalização.
              </p>
              <p>
                O Centro de Guarulhos é o coração financeiro da cidade, onde edifícios comerciais de grande porte dividem espaço com prédios residenciais de décadas passadas. A renovação do AVCB aqui exige atenção dobrada à IT-11 (Saídas de Emergência), já que muitos prédios antigos possuem escadas que não atendem mais aos requisitos modernos de largura e sinalização.
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
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight">Cenário Local: Centro de Guarulhos</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium mb-6">
                Em Guarulhos, a prefeitura e o Corpo de Bombeiros integram a fiscalização de forma rígida. Um edifício comercial no Centro sem AVCB válido é impedido de renovar o Alvará de Funcionamento anual, o que pode levar ao lacre de dezenas de escritórios e lojas simultaneamente.
              </p>
              <p className="text-red-400 font-bold uppercase italic tracking-tighter">
                ⚠️ Atendimento prioritário para a região: Av. Paulo Faccini, Av. Tiradentes e Rua Felício Marcondes
              </p>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Riscos Identificados em Centro de Guarulhos</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Escadas fora de norma", d: "Degraus e corrimãos que não seguem a IT-11, exigindo projetos de medidas compensatórias." },
                { t: "Centrais de alarme obsoletas", d: "Sistemas de alarme que não possuem autonomia de bateria ou cujas botoeiras estão inacessíveis." },
                { t: "Falta de iluminação de emergência", d: "Lâmpadas queimadas ou sem autonomia mínima de 90 minutos exigida pelo Bombeiro." },
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
         <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Precisa de AVCB em Centro de Guarulhos? Fale agora conosco.</p>
         <CtaWhatsApp label="Agendar Vistoria Técnica" occupationType="imóvel em Centro de Guarulhos" variant="primary" centered />
      </div>

      <SocialProof
        testimonial={{
          text: "Nosso prédio comercial na Paulo Faccini estava com o AVCB vencido há 3 anos. A DRD2 regularizou tudo sem precisar de obras estruturais complexas.",
          author: "Ricardo Mendes",
          role: "Síndico Comercial — Centro Guarulhos",
        }}
      />

      <ExpansionAuthorityBlock slug={_slug} />
      <LeadForm />
      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={8} titulo="Serviços em Centro de Guarulhos" />

      <ServiceClusterLinks currentSlug="/avcb-guarulhos-centro" />
      <ServiceBlogLinks currentSlug="/avcb-guarulhos-centro" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-white text-center relative overflow-hidden">
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">Evite multas e lacres no Centro de Guarulhos</h2>
            <p className="text-xl text-red-100 mb-12 font-medium italic">O investimento foca na responsabilidade técnica e atualização de laudos elétricos e de gás, comuns em prédios de uso misto no Centro.</p>
            <a href={whatsappLink} target="_blank" className="bg-white text-red-900 font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
               Falar com Especialista em Centro de Guarulhos
            </a>
         </div>
      </section>
    </>
  );
}
