import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldCheck, AlertTriangle, Building,
  FileCheck, Stethoscope, HeartPulse, Hospital, Timer,
  BellRing,
} from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";

export const metadata = {
  title: servicesData["alarme-de-incendio-hospital-clinica-sp"].metaTitle,
  description: servicesData["alarme-de-incendio-hospital-clinica-sp"].metaDescription,
  alternates: {
    canonical: "/alarme-de-incendio-hospital-clinica-sp",
  },
};

export default function AlarmeHospitalPage() {
  const service = servicesData["alarme-de-incendio-hospital-clinica-sp"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/alarme-de-incendio-hospital-clinica-sp",
        title: metadata.title,
        description: metadata.description,
        serviceName: "Alarme de Incêndio para Hospital e Clínica",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Alarme de Incêndio para Hospital e Clínica", item: "/alarme-de-incendio-hospital-clinica-sp" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[550px] flex items-center bg-gray-900 border-b-4 border-cyan-600">
        <Image src="/images/bg-hospital.jpg" alt="Infraestrutura de hospital com corredores e instalações clínicas" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C] via-[#003B5C]/90 to-[#001f30]/60" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-cyan-700/30 text-cyan-300 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-cyan-500/50 text-xs shadow-lg backdrop-blur-sm">
              <Hospital className="w-4 h-4" /> Soluções para Grupo H na Capital
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white">
              {service.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-medium">
              ⚠️ Estabelecimento de saúde sem SDAI aprovado pelo CBPMESP está sujeito a interdição da Vigilância. Em uma emergência, pacientes em recuperação <strong className="text-white bg-cyan-800/50 px-2">não conseguem se evacuar sem assistência.</strong>
            </p>
            
            <div className="mb-10">
              <ul className="space-y-4 inline-flex flex-col text-left">
                {[
                  "Conformidade técnica irrestrita para Grupo H (IT-19/2025)",
                  "Projetos com Painel Setorizado e Resposta em 30s",
                  "Documentação de Comissionamento para AVCB Rápido"
                ].map((item, id) => (
                  <li key={id} className="flex items-center text-lg text-cyan-100 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-8 py-5 text-lg font-bold shadow-[0_0_30px_rgba(8,145,178,0.4)] hover:bg-cyan-500 hover:-translate-y-1 transition-all text-white border border-cyan-400"
              >
                Solicitar Análise de Risco em EAS
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Hospital" }]} dark />
      <TrustBar dark />

      {/* Alerta Legal Massivo - Exclusivo para Hospitais (Grupo H) */}
      <section className="py-24 bg-gradient-to-b from-red-50 to-white relative mt-[-20px] rounded-t-3xl z-20">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-[#003B5C] rounded-[2rem] p-1.5 shadow-2xl relative transition-transform hover:scale-[1.01]">
             
             <div className="bg-white rounded-[1.8rem] p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="shrink-0 bg-cyan-50 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center border-4 border-cyan-100 shadow-inner">
                   <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-cyan-700 animate-pulse" />
                </div>
                <div>
                   <h2 className="text-3xl md:text-4xl font-black text-[#003B5C] mb-4 tracking-tighter">
                     Grupo H: Ausência de Prevenção é Risco Iminente
                   </h2>
                   <p className="text-xl text-gray-700 font-bold mb-6 leading-relaxed">
                     O Decreto Estadual nº 69.118/2024 exige que Serviços de Saúde preservem as vidas in loco sem abandono precipitado. Numa vistoria negada de AVCB o EAS enfrenta:
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-800 font-bold shrink-0">1</div>
                       Intervenção imediata das Autoridades Sanitárias, impedindo Novos Internamentos por infração à NBR 17240.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-800 font-bold shrink-0">2</div>
                       Responsabilidade civil gravíssima do Diretor Técnico sobre pacientes de CTI e Cirúrgicos incapazes em caso de fumaça primária.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-800 font-bold shrink-0">3</div>
                       Multas progressivas altíssimas do Corpo de Bombeiros até a imediata regularização ou lacração.
                     </li>
                   </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Hospital" }]} dark />
      <TrustBar dark />

      {/* Solução & Por que Fazer */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight mb-6">
                SDAI para o Grupo H: O que Pede a IT-19/2025?
             </h2>
             <p className="text-xl text-gray-600">
               Os hospitais precisam de um sistema de contenção compartimentado. Erros amadores de instaladores genéricos causam disparo geral e caos.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Painel Repetidor Setorizado", desc: "A enfermagem vai saber antes! Ativação focada com dupla sinalização alertando a equipe técnica sem pânico local na ala de cirurgia.", Icon: HeartPulse },
              { title: "Reconhecimento < 30 Segundos", desc: "Avaliamos e impomos tempo limite estrito à aprovação normativa. Se não abafado na central, toca o abandono total.", Icon: Timer },
              { title: "Detecção por Raio H", desc: "Detectores posicionados focando a ausência de circulação de ar viciada em UTI, laboratórios e leitos semi-intensivos.", Icon: Stethoscope },
              { title: "Certificação de Comissionamento", desc: "A vistoria hospitalar não aprova sem o relatório atestando todos os ensaios funcionais in-site com ART em dia.", Icon: FileCheck },
            ].map((feat, id) => (
                <div key={id} className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                     <feat.Icon className="w-8 h-8 text-[#003B5C] group-hover:text-cyan-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl text-secondary mb-4">{feat.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Hospital" }]} dark />
      <TrustBar dark />


      <ServiceClusterLinks currentSlug="/alarme-incendio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/alarme-incendio-sao-paulo" />

      <LeadForm />

      {/* Diferenciais Competitivos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Por que Clínicas e Hospitais de SP confiam na Engenharia DRD2?</h2>
            <p className="text-lg text-gray-600 mb-12">Atendemos Prontos Socorros, Centros de Mastologia e Laboratórios de Diagnóstico de Imagens complexos.</p>
            
            <div className="text-left bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12">
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                    <p className="text-gray-700"><strong>Diagnóstico Limpo:</strong> Nossa engenharia foca na sala técnica do CBPMESP. Seu projeto em mesa cirúrgica não sofrerá ruído impertinente de reforma mal planejada.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                    <p className="text-gray-700"><strong>Projeto com ART Especializada:</strong> Responsabilidade civil do SDAI validada no modelo do e-Projeto Paulista Grupo H.</p>
                  </div>
               </div>
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                    <p className="text-gray-700"><strong>Equipamento Homologado INMETRO:</strong> Proteção dos leitos sem sobressaltos e surpresas ruins nos dias de bateria da CAI principal.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                    <p className="text-gray-700"><strong>Assunção Integral:</strong> Do laudo ao AVCB, você cuida da saúde do paciente e a DRD2 blinda o hospital.</p>
                  </div>
               </div>
            </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Hospital" }]} dark />
      <TrustBar dark />

      {/* FAQ Com Schema.org */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Dúvidas Frequentes - Clínicas e EAS</h2>
            <p className="text-lg text-gray-600">Esclarecendo as restrições mais severas do Grupo H no Estado de SP.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-cyan-600/20 transition-all hover:bg-gray-50">
                <summary className="flex items-center justify-between p-6 font-bold text-secondary text-lg select-none">
                  {faq.question}
                  <span className="text-cyan-700 text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Hospital" }]} dark />
      <TrustBar dark />

      {/* Mega CTA Final */}
      <section className="py-24 bg-[#003B5C] text-center relative overflow-hidden text-white border-t-8 border-cyan-500">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-400/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              A Validação da sua Clínica é Prioridade.
            </h2>
            <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Solicite nosso Corpo de Engenheiros Especialistas em Hospitais e evite que seu EAS sofra embargos municipais do CBPMESP.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-cyan-500 text-[#003B5C] font-black px-10 py-5 rounded-2xl text-xl shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:bg-[#1EBE5A] hover:text-white hover:text-[#003B5C] transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" /> Falar com Especialista Hospitalar
            </a>
            <p className="text-sm mt-6 text-cyan-200 font-bold tracking-widest uppercase">
               Atendimento Hospitalar SP | 100% Norma NBR 17240
            </p>
         </div>
      </section>
    </>
  );
}
