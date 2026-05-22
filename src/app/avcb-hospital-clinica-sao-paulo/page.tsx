import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building, FileCheck, ShieldAlert,
  BadgeInfo, ArrowRight, Scale, AlertTriangle, Lightbulb,
  MapPin, ClipboardCheck, Users, ShieldCheck, ZapOff,
  Flame, Activity, Stethoscope, Microscope, HeartPulse,
  Droplets, Thermometer, BriefcaseMedical, DoorClosed,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";
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

const _pageTitle = "AVCB para Hospital e Clínica em SP | DRD2 Engenharia";
const _pageDesc = "AVCB para hospitais, clínicas e consultórios em São Paulo. Regularização conforme ITs do CBPMESP e VISA. Aprovação garantida. Diagnóstico técnico gratuito. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB para Hospital e Clínica em SP | DRD2 Engenharia",
  description: "AVCB para hospitais, clínicas e consultórios em São Paulo. Regularização conforme ITs do CBPMESP e VISA. Aprovação garantida. Diagnóstico técnico gratuito. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-hospital-clinica-sao-paulo",
  },
};

export default function AVCBHospitalMasterPage() {
  const service = servicesData["avcb-hospital-clinica-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-hospital-clinica-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB Hospital e Clínica SP",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB Hospital e Clínica SP", item: "/avcb-hospital-clinica-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* -- HERO — VERSÃO 10/10 MASTER -- */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:flex items-center bg-slate-950 border-b-8 border-red-600 ">
        <Image
          src="/images/bg-hospital.jpg"
          alt="Segurança contra incêndio em ambiente hospitalar de alta tecnologia"
          fill
          className="object-cover object-center opacity-40 grayscale-[40%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Versão 10/10 Master — Lead de Alta Exigência
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                HOSPITAL E CLÍNICA EM SP
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              Regularização Conforme as ITs do CBPMESP e as Exigências da <strong className="text-red-500">Vigilância Sanitária (VISA)</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white hover:text-[#25D366] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> FALAR COM ENGENHEIRO RESPONSÁVEL de Saúde
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -- BREADCRUMB + TRUST BAR -- */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "AVCB por Ocupação", href: "/servicos" },
          { label: "AVCB para Hospital e Clínica em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* -- INTRODUÇÃO — REFERÊNCIA VISA -- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                O AVCB como condição de <span className="text-red-600 not-italic">licenciamento sanitário</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Estabelecimentos de saúde em São Paulo possuem exigências altamente específicas. Diferente de outras ocupações, o AVCB aqui não é apenas uma obrigação do Corpo de Bombeiros — ele é <strong>condição obrigatória para o licenciamento pela Vigilância Sanitária Estadual e Municipal</strong>.
                </p>
                <p>
                  Sem o AVCB válido, sua clínica ou hospital não consegue obter ou renovar a licença de funcionamento junto à VISA, o que impede legalmente a operação e gera riscos contratuais com convênios médicos.
                </p>
                <p className="text-slate-900 font-bold border-l-4 border-red-600 pl-6 italic">
                  A DRD2 Engenharia conduz o processo com expertise nas normas técnicas aplicáveis exclusivamente à área da saúde.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-4">VISA exige o AVCB para:</h4>
              <ul className="space-y-4">
                {[
                  "Novas licenças sanitárias",
                  "Renovação anual da licença",
                  "Alteração de atividade",
                  "Ampliação de área física"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-800 uppercase italic">
                    <CheckCircle2 className="w-4 h-4 text-red-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- INTRODUÇÃO TÉCNICA — VERBATIM RESTORATION -- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                AVCB para Clínicas Médicas e sua <span className="text-red-600 not-italic font-black italic">Importância Regulatória</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Obter o Auto de Vistoria do Corpo de Bombeiros (AVCB) para clínicas médicas em São Paulo é um requisito indispensável para garantir a segurança dos pacientes, funcionários e do patrimônio. Além de ser uma exigência legal, o AVCB é fundamental para a obtenção de licenças de funcionamento junto à Vigilância Sanitária e para a conformidade com as normas de seguros.
                </p>
                <p>
                  No estado de São Paulo, a regularização é regida pelo <strong>Decreto Estadual nº 63.911/2018</strong> (atualizado pelo <strong>Decreto nº 69.118/2024</strong>) e pelas Instruções Técnicas (ITs) do Corpo de Bombeiros. Para a área da saúde, o rigor é redobrado devido à vulnerabilidade dos ocupantes e à presença de equipamentos de alto custo e gases medicinais.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-12 mb-4 uppercase italic tracking-tighter text-sm">Ocupação da Área da Saúde (Grupo H)</h3>
                <p>
                  As clínicas e estabelecimentos de saúde são enquadrados no <strong>Grupo H — Serviço de Saúde e Institucional</strong>, de acordo com a IT-02/CBPMESP. Dentro deste grupo, existem subdivisões específicas:
                </p>
                <ul className="space-y-4 ml-6">
                  <li className="flex gap-2 items-start">
                    <span className="text-red-600 font-black">•</span>
                    <span><strong>H-1:</strong> Hospital veterinário e assemelhados.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-red-600 font-black">•</span>
                    <span><strong>H-2:</strong> Locais onde pessoas recebem cuidados de saúde, podendo ou não estar acamadas (clínicas, prontos-socorros, ambulatórios).</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-red-600 font-black">•</span>
                    <span><strong>H-3:</strong> Hospitais e assemelhados com internação.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-red-600 font-black">•</span>
                    <span><strong>H-4:</strong> Repartições públicas, asilos, orfanatos.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-red-600 font-black">•</span>
                    <span><strong>H-5:</strong> Locais onde a liberdade é restrita (presídios, refeitórios e áreas de saúde em centros de detenção).</span>
                  </li>
                </ul>
                <p className="mt-6">
                  Cada subdivisão possui exigências técnicas distintas, o que torna o enquadramento correto o passo mais importante do processo.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-slate-950 p-8 rounded-[2.5rem] text-white shadow-xl sticky top-24">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-6">Foco na IT-17:</h4>
              <p className="text-xs text-slate-400 mb-6 font-bold uppercase italic tracking-widest leading-relaxed">
                A Brigada de Incêndio em hospitais exige treinamento específico para remoção de pacientes acamados.
              </p>
              <div className="space-y-6">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-black text-red-500 uppercase mb-2">Exigência VISA:</p>
                    <p className="text-xs font-bold leading-tight uppercase italic">Sem AVCB, o licenciamento sanitário é bloqueado imediatamente.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- EXIGÊNCIAS TÉCNICAS — GRUPO H -- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-[0.9]">
              Exigências Técnicas Principais para o <span className="text-red-600 not-italic font-black italic">Grupo H</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">As medidas de proteção para clínicas variam conforme a área construída e a altura da edificação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-2xl font-black text-xl mb-6 shadow-lg shadow-red-600/20">01</div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic">Saídas de Emergência (IT-08)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Corredores e portas devem possuir dimensões que permitam a passagem de macas e cadeiras de rodas. Em hospitais (H-3), as larguras mínimas são ainda maiores.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-2xl font-black text-xl mb-6 shadow-lg">02</div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic">Compartimentação (IT-09)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Evita que o fogo e a fumaça se espalhem entre pavimentos ou setores críticos, como salas de cirurgia e áreas de internação.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-2xl font-black text-xl mb-6 shadow-lg shadow-red-600/20">03</div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic">Sinalização e Iluminação</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Sinalização fotoluminescente (IT-20) e iluminação de emergência (IT-18) com autonomia garantida para setores de atendimento 24h.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-2xl font-black text-xl mb-6 shadow-lg">04</div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic">Gases Medicinais (IT-28)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                A central de gases (oxigênio, vácuo, ar comprimido) deve estar em local ventilado e isolado, seguindo normas de segurança rigorosas.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-2xl font-black text-xl mb-6 shadow-lg shadow-red-600/20">05</div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic">Brigada de Incêndio (IT-17)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Treinamento específico para os funcionários da clínica sobre o uso de extintores e, principalmente, sobre o plano de abandono de pacientes vulneráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- CTA 2 — APÓS SISTEMAS -- */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua clínica tem todos esses sistemas aprovados pelo CBPMESP e VISA?
          </p>
          <CtaWhatsApp
            label="Fale com um engenheiro agora — sem compromisso"
            occupationType="hospital ou clínica"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* -- SDAI (NBR 17240) -- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/bg-hospital.jpg"
                  alt="Sistema de Detecção e Alarme de Incêndio em Hospital"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply" />
             </div>
             <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter italic">Sistemas de Detecção e <span className="text-red-600 not-italic font-black italic">Alarme (NBR 17240)</span></h2>
                <div className="space-y-6 text-slate-700 leading-relaxed font-medium italic">
                  <p>
                    Em hospitais e clínicas com internação, o sistema de detecção e alarme de incêndio (SDAI) é fundamental. A <strong>NBR 17240</strong> estabelece os requisitos para projeto, instalação e manutenção.
                  </p>
                  <p>
                    O sistema deve ser capaz de identificar o foco inicial de fumaça ou calor e alertar a brigada e os ocupantes de forma setorial, permitindo que a evacuação comece pelas áreas de maior risco.
                  </p>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 italic">
                    <p className="text-xs font-black text-slate-400 uppercase mb-2">Nota Técnica:</p>
                    <p className="text-sm font-bold uppercase tracking-tight">O uso de extintores de CO2 ou Agentes Limpos é mandatório em salas com equipamentos sensíveis.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>


      {/* -- CTA 3 — APÓS CUSTO -- */}
      <div className="py-12 bg-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar sua clínica e destravar o licenciamento sanitário?
          </p>
          <CtaWhatsApp
            label="Quero regularizar minha clínica em SP"
            occupationType="hospital ou clínica"
            variant="secondary"
            centered
          />
        </div>
      </div>

      {/* -- CUSTO E PRAZO -- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">Investimento: O que define o valor?</h3>
                <div className="space-y-6">
                  <p className="text-slate-600 font-medium leading-relaxed">O custo depende da complexidade dos procedimentos e da área total. Consultórios menores podem se enquadrar no CLCB, enquanto hospitais exigem projetos de alta precisão.</p>
                  <div className="space-y-4">
                    {[
                      "Diagnóstico técnico gratuito para Saúde.",
                      "Análise da situação com a VISA.",
                      "Proposta técnica completa em 24h.",
                      "Retrofit de sistemas orçados à parte."
                    ].map((p, i) => (
                      <div key={i} className="flex gap-3 items-center text-sm font-bold text-slate-700 uppercase italic">
                        <CheckCircle2 className="w-4 h-4 text-red-600" /> {p}
                      </div>
                    ))}
                  </div>
                </div>
             </div>
             <div className="bg-red-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Prazos Médios Estimados</h3>
                <div className="space-y-8 font-bold italic">
                   <div className="flex justify-between items-center border-b border-red-800 pb-4">
                      <span>Consultório (CLCB)</span>
                      <span className="text-red-400">30 a 60 dias</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-red-800 pb-4">
                      <span>Clínica Médica</span>
                      <span className="text-red-400">60 a 90 dias</span>
                   </div>
                   <div className="flex justify-between items-center pb-4">
                      <span>Hospital (Centro Cirúrgico)</span>
                      <span className="text-red-400">90 a 180 dias</span>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* -- METODOLOGIA DRD2 SAÚDE -- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 block underline decoration-red-600 underline-offset-4">Engenharia de Proteção Médica</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Metodologia <span className="text-red-600 not-italic">DRD2 Saúde</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium italic">Garantimos a documentação comprobatória que a VISA exige para não interromper seu funcionamento.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center uppercase tracking-tight font-black italic">
              {[
                { t: "Diagnóstico Sanitário", d: "Análise prévia dos sistemas e da conformidade com a VISA local.", i: <ClipboardCheck className="w-10 h-10 mx-auto mb-6 text-red-600"/> },
                { t: "Projeto PPCI de Saúde", d: "Dimensionamento técnico focado em evacuação assistida e equipamentos médicos.", i: <Scale className="w-10 h-10 mx-auto mb-6 text-red-600"/> },
                { t: "Protocolo Express", d: "Envio digital imediato para comprovação de andamento junto à vigilância.", i: <FileCheck className="w-10 h-10 mx-auto mb-6 text-red-600"/> },
                { t: "Vistoria & Laudos VISA", d: "Entrega do AVCB final e suporte na documentação para renovação da licença.", i: <ShieldCheck className="w-10 h-10 mx-auto mb-6 text-red-600"/> }
              ].map((step, i) => (
                <div key={i} className="p-8 group">
                   {step.i}
                   <h4 className="text-slate-900 mb-3">{step.t}</h4>
                   <p className="text-[10px] text-slate-400 not-italic font-bold tracking-widest leading-relaxed">{step.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* -- REGIONS -- */}
      <section className="py-24 bg-slate-950 text-white border-t-8 border-red-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
             <div>
                <h2 className="text-4xl font-black mb-8 uppercase italic tracking-tighter">Clínicas e Hospitais em <span className="text-red-600 not-italic">Atendimento em São Paulo</span></h2>
                <div className="grid grid-cols-2 gap-8 text-sm font-bold text-slate-400 uppercase italic tracking-widest leading-loose">
                   <div>
                      <p className="text-white mb-2 underline bg-red-600/20 px-2 inline-block italic">Polos de Saúde</p>
                      <p className="text-[11px]">Bela Vista, Consolação, Vila Mariana, Moema, Itaim Bibi, Pinheiros, Perdizes, Santo Amaro</p>
                   </div>
                   <div>
                      <p className="text-white mb-2 underline bg-red-600/20 px-2 inline-block italic">Bairros Atendidos</p>
                      <p className="text-[11px]">Tatuapé, Santana, Butantã, Morumbi, Ipiranga, Sacomã, Casa Verde, Tucuruvi</p>
                   </div>
                </div>
             </div>
             <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 text-center relative shadow-3xl">
                <p className="text-lg font-black italic mb-6">Equipes de engenharia especializadas em áreas hospitalares em todas as regiões de SP.</p>
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 font-black px-5 py-3 rounded-full text-xs uppercase italic tracking-widest shadow-lg">
                    <MapPin className="w-4 h-4" /> Unidade Móvel Áreas Médicas
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* -- FAQ — VISA X AVCB -- */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes: <span className="text-red-600 not-italic font-black italic">AVCB de Saúde</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Toda clínica médica precisa de AVCB?",
                answer: "Sim. Toda edificação de uso coletivo no Estado de São Paulo está obrigada a obter AVCB ou CLCB. No caso de clínicas, isso é ainda mais crítico para a regularização perante a Vigilância Sanitária."
              },
              {
                question: "Qual a diferença entre AVCB e CLCB para clínicas?",
                answer: "O CLCB é para clínicas de menor porte (geralmente até 750 m²) e baixo risco. O AVCB é para hospitais e clínicas maiores ou com alto risco (presença de internação, centros cirúrgicos, etc.)."
              },
              {
                question: "O que é o enquadramento no Grupo H?",
                answer: "O Grupo H da IT-02 define as regras para serviços de saúde. Ele garante que as exigências sejam proporcionais ao risco, como a necessidade de corredores mais largos para macas em hospitais."
              },
              {
                question: "Quanto tempo leva para tirar o AVCB de uma clínica?",
                answer: "Em média, de 60 a 120 dias para processos novos. Renovação de certificados válidos costuma ser mais rápida, entre 30 e 45 dias, dependendo da agilidade nas adequações físicas."
              },
              {
                question: "O que acontece se eu for fiscalizado sem AVCB?",
                answer: "A clínica pode ser multada e ter o licenciamento sanitário cassado. Além disso, em caso de incêndio, os responsáveis podem responder civil e criminalmente pela falta de segurança."
              },
              {
                question: "A DRD2 auxilia na adequação de equipamentos médicos?",
                answer: "Nossa engenharia foca na proteção contra incêndio. Orientamos sobre os melhores sistemas (como extintores de CO2) para não danificar equipamentos sensíveis como aparelhos de ressonância ou tomografia."
              }
            ].map((faq, i) => (
               <details key={i} className="group bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-white">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* -- LINKS INTERNOS ESTRATÉGICOS -- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">Acessos Rápidos por <span className="text-red-600 italic">Polo de Saúde</span></h2>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Links internos recomendados para estabelecimentos de saúde.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Hospitais na Consolação", u: "/avcb-centro-bela-vista", i: <Building className="w-4 h-4"/> },
              { t: "Clínicas na Vila Mariana", u: "/avcb-vila-mariana", i: <Stethoscope className="w-4 h-4"/> },
              { t: "Clínicas em Moema", u: "/avcb-moema", i: <Stethoscope className="w-4 h-4"/> },
              { t: "Preço para Hospitais", u: "/avcb-preco", i: <Scale className="w-4 h-4"/> },
              { t: "Renovação de Saúde", u: "/renovacao-avcb", i: <ClipboardCheck className="w-4 h-4"/> },
              { t: "Quem é obrigado?", u: "/blog/quem-precisa-de-avcb", i: <FileCheck className="w-4 h-4"/> },
              { t: "AVCB Vencido: O que fazer?", u: "/blog/avcb-vencido-o-que-fazer", i: <ShieldAlert className="w-4 h-4"/> },
              { t: "Guia Geral SP", u: "/avcb-sao-paulo", i: <MapPin className="w-4 h-4"/> }
            ].map((link, i) => (
              <Link 
                key={i} 
                href={link.u}
                className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center justify-between group hover:border-red-600 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-600 group-hover:scale-110 transition-transform">{link.i}</span>
                  <span className="text-slate-900 font-bold text-[10px] uppercase italic">{link.t}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- LEITURA RECOMENDADA — INTERNAL LINKING MASTER -- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-left">
              <span className="text-red-600 font-black uppercase tracking-widest text-[10px] bg-red-600/10 px-4 py-1.5 rounded-full italic">Inteligência Regulatória</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mt-6 tracking-tighter uppercase italic leading-none">
                Leitura <br /><span className="text-red-600 not-italic italic">Recomendada</span>
              </h2>
            </div>
            <Link href="/blog" className="group flex items-center gap-3 text-slate-950 font-black uppercase text-xs tracking-[0.2em] border-b-2 border-red-600 pb-1 hover:text-red-600 transition-all italic">
              Ver todos os artigos <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quem precisa de AVCB e quem está dispensado?",
                slug: "quem-precisa-de-avcb",
                image: "/images/blog/fire_safety_equipment_premium.webp",
                desc: "Descubra se o seu estabelecimento de saúde exige licenciamento técnico completo."
              },
              {
                title: "Quanto Custa o AVCB em São Paulo em 2026?",
                slug: "quanto-custa-avcb-em-sao-paulo",
                image: "/images/blog/blog_hero_avcb_preco.webp",
                desc: "Valores, taxas e honorários para regularização de clínicas e hospitais."
              },
              {
                title: "AVCB Vencido: O que fazer e como regularizar?",
                slug: "avcb-vencido-o-que-fazer",
                image: "/images/blog/blog_hero_avcb_vencido.webp",
                desc: "Evite a interdição imediata pela Vigilância Sanitária em 2026."
              }
            ].map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-red-600/20 transition-all flex flex-col h-full font-black italic">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 hover:grayscale-0 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-slate-950 mb-4 group-hover:text-red-600 transition-colors leading-tight uppercase italic tracking-tighter">{post.title}</h3>
                  <p className="text-slate-500 text-sm font-semibold mb-8 leading-relaxed italic not-italic font-bold">{post.desc}</p>
                  <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-red-600 italic">
                    Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- PROVA SOCIAL -- */}
      <SocialProof
        testimonial={{
          text: "A DRD2 foi fundamental para regularizarmos nossa clínica a tempo da renovação VISA. Processo impecável, primeiro AVCB aprovado sem nenhuma pendência. Profissionalismo acima da média.",
          author: "Dr. Marcelo Teixeira",
          role: "Diretor Clínico — Instituto Médico Bela Vista SP",
        }}
      />

      {/* -- CTA 4 — APÓS ARTIGOS -- */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            A Vigilância Sanitária não espera.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Regularize sua clínica ou hospital com quem já aprovou centenas em SP.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="clínica ou hospital"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Hospital e Clinica</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Hospital Clinica"
        currentSlug="/avcb-hospital-clinica-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Hospital Clinica"
        currentSlug="/avcb-hospital-clinica-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-hospital-clinica-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Hospitais e Clínicas em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-hospital-clinica-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-hospital-clinica-sao-paulo" />

      <NeighborhoodSilo currentSlug="/avcb-hospital-clinica-sao-paulo" />

      {/* -- CTA FINAL — ALERTA VISA -- */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            A Vigilância Sanitária <span className="text-black not-italic font-black italic underline decoration-white">Bloqueou seu Licenciamento?</span>
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium lead-relaxed italic">
            Não interrompa o atendimento aos pacientes. Atuamos com urgência técnica para regularizar seu AVCB e destravar sua licença sanitária.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Regularizar Clínica Agora
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Expertise Técnica em Normas da Vigilância Sanitária | Vigilância Sanitária de São Paulo</p>
        </div>
      </section>
    </>
  );
}


