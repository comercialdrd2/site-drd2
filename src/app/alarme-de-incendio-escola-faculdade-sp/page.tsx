import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, AlertTriangle, BookOpen, GraduationCap, ShieldCheck, Microscope, Users, BookMarked } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";

export const metadata = {
  title: servicesData["alarme-de-incendio-escola-faculdade-sp"].metaTitle,
  description: servicesData["alarme-de-incendio-escola-faculdade-sp"].metaDescription,
  alternates: {
    canonical: "/alarme-de-incendio-escola-faculdade-sp",
  },
};

export default function AlarmeEscolaPage() {
  const service = servicesData["alarme-de-incendio-escola-faculdade-sp"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/alarme-de-incendio-escola-faculdade-sp",
        title: metadata.title,
        description: metadata.description,
        serviceName: "Alarme de Incêndio para Escolas e Faculdades",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Alarme de Incêndio para Escolas e Faculdades", item: "/alarme-de-incendio-escola-faculdade-sp" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[550px] flex items-center bg-slate-900 border-b-4 border-orange-500">
        <Image src="/images/hero-escola.webp" alt="Ambiente educacional com salas de aula e circulação de alunos" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-orange-500/30 text-xs shadow-lg backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" /> Soluções para Instituições de Ensino
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white">
              {service.h1}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-medium">
              ⚠️ Instituição de ensino sem AVCB é caso de interdição. Com o Grupo E, a aprovação do Diretor exige <strong className="text-white bg-orange-600/60 px-2">proteção anti-vandalismo e detecção especializada para laboratórios.</strong>
            </p>
            
            <div className="mb-10">
              <ul className="space-y-4 inline-flex flex-col text-left">
                {[
                  "Projetos dimensionados para evacuação segura do Grupo E",
                  "Detectores imunes a vapores (Laboratórios de Química)",
                  "Sistemas protegidos contra acionamento recreativo infantil"
                ].map((item, id) => (
                  <li key={id} className="flex items-center text-lg text-slate-100 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0" />
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
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-5 text-lg font-bold shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:bg-orange-400 hover:-translate-y-1 transition-all text-slate-900 border border-orange-400"
              >
                Solicitar Engenharia Educacional
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Escola" }]} dark />
      <TrustBar dark />

      {/* Alerta Legal Massivo - Exclusivo para Escolas */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white relative mt-[-20px] rounded-t-3xl z-20">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-slate-900 rounded-[2rem] p-1.5 shadow-2xl relative transition-transform hover:scale-[1.01]">
             
             <div className="bg-white rounded-[1.8rem] p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="shrink-0 bg-orange-100 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center border-4 border-orange-200 shadow-inner">
                   <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-orange-600 animate-pulse" />
                </div>
                <div>
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter">
                     Grupo E: Mais de 100 Vidas Exigem SDAI Aprovado
                   </h2>
                   <p className="text-xl text-slate-700 font-bold mb-6 leading-relaxed">
                     O Decreto Estadual nº 69.118/2024 cruza os colégios com a Lei Federal. Seu mantenedor ou diretor assume responsabilidades diretas:
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-4 text-lg text-slate-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold shrink-0">1</div>
                       Lei Federal 13.425/2017 determina medidas rígidas em acúmulos acima de 100 pessoas. Isso embarga rapidamente os Campi de faculdades.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-slate-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold shrink-0">2</div>
                       Em caso de sinistro por pânico gerado de alarme falho, a culpa é individual (CPF do Diretor / Mantenedor) pela falta da assinatura do CREA.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-slate-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold shrink-0">3</div>
                       A Secretaria da Educação e as vistorias prefeitarias paralisam alvarás de funcionamento da próxima matrícula.
                     </li>
                   </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Escola" }]} dark />
      <TrustBar dark />

      {/* Solução & Por que Fazer */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight mb-6">
                Por que a IT-19 é Diferente nas Escolas?
             </h2>
             <p className="text-xl text-gray-600">
               Crianças em recreação e jovens correndo entre blocos desvirtuam as leituras acústicas. O projeto educacional foca na precisão anti-pânico.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Detecção em Laboratórios", desc: "Afastamos o erro amador trocando fotossensíveis por detectores de calor que não gritam e não paralisam aulas curtas sem motivo.", Icon: Microscope },
              { title: "Proteção Acústica Forte", desc: "Quadra coberta fechada abafa sirene minúscula. O auditor valida a pressão sonora contra o barulho infantil real antes de aprovar.", Icon: Users },
              { title: "Anti-Vandalismo", desc: "Estudo de altura das botoeiras em colégios fundamentais para evitar pânico recreativo provocado pelos alunos curiosos.", Icon: ShieldCheck },
              { title: "Zoneamento por Blocos", desc: "Centrais que identificam unicamente o Bloco B da faculdade, barrando evacuação em massa inútil dos outros campi distantes.", Icon: BookOpen },
            ].map((feat, id) => (
                <div key={id} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-orange-300 transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                     <feat.Icon className="w-8 h-8 text-secondary group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl text-secondary mb-4">{feat.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Escola" }]} dark />
      <TrustBar dark />


      <ServiceClusterLinks currentSlug="/alarme-incendio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/alarme-incendio-sao-paulo" />

      <LeadForm />

      {/* Diferenciais Competitivos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Educação Pede Engenharia Responsável</h2>
            <p className="text-lg text-gray-600 mb-12">Atendemos Cursinhos Militares, Redes de Colégios de Franquia, Faculdades da Capital e Polos Educacionais.</p>
            
            <div className="text-left bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-12">
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <p className="text-slate-700"><strong>Execução na Férias:</strong> Dimensionamos cronogramas agressivos em recesão paralela (Jan/Julho) para liberar corredores da reforma sem afetar letivos.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <p className="text-slate-700"><strong>Material 100% INMETRO:</strong> Extintores e Alarmes não rateiam porque possuem selos homologados das leis federais, durando anos letivos contínuos.</p>
                  </div>
               </div>
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <p className="text-slate-700"><strong>Isso Salva Vidas:</strong> Uma sirene bem calculada em projeto ART é a garantia civil da vida dos discentes perante as seguradoras prediais.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <p className="text-slate-700"><strong>Integração com Bomba:</strong> Colégios velhos sem caixa acoplada ganham reestruturação que amarra hidrantes de incêndio no sistema da CPU do alarme.</p>
                  </div>
               </div>
            </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Escola" }]} dark />
      <TrustBar dark />

      {/* FAQ Com Schema.org */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Dúvidas da Coordenação Pedagógica e Diretoria</h2>
            <p className="text-lg text-gray-600">A burocracia desmistificada para escolas paulistanas (Grupo E).</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-2 open:ring-orange-500/20 transition-all hover:bg-slate-50">
                <summary className="flex items-center justify-between p-6 font-bold text-secondary text-lg select-none">
                  {faq.question}
                  <span className="text-orange-500 text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Escola" }]} dark />
      <TrustBar dark />

      {/* Mega CTA Final */}
      <section className="py-24 bg-slate-900 text-center relative overflow-hidden text-white border-t-8 border-orange-500">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              A Inscrição da sua Escola Depende da Aprovação Legal.
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Evite paralisações na Secretaria da Educação e vistorias lacrando seus portões. Avalie a escola com os responsáveis diretos pela execução CBPMESP.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-orange-500 text-slate-900 font-black px-10 py-5 rounded-2xl text-xl shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:bg-[#1EBE5A] hover:text-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" /> Chamar Engenharia para a Instituição
            </a>
            <p className="text-sm mt-6 text-slate-400 font-bold tracking-widest uppercase">
               Diagnóstico Prévio Grupo E | Segurança dos Discentes
            </p>
         </div>
      </section>
    </>
  );
}
