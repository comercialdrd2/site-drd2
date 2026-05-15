import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Building, FileCheck, Zap, BellRing, Factory, HardHat, Siren } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";

export const metadata = {
  title: servicesData["alarme-de-incendio-galpao-industrial-sp"].metaTitle,
  description: servicesData["alarme-de-incendio-galpao-industrial-sp"].metaDescription,
  alternates: {
    canonical: "/alarme-de-incendio-galpao-industrial-sp",
  },
};

export default function AlarmeIndustrialPage() {
  const service = servicesData["alarme-de-incendio-galpao-industrial-sp"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/alarme-de-incendio-galpao-industrial-sp",
        title: metadata.title,
        description: metadata.description,
        serviceName: "Alarme de Incêndio para Galpão Industrial",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Alarme de Incêndio para Galpão Industrial", item: "/alarme-de-incendio-galpao-industrial-sp" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[550px] flex items-center bg-gray-900 border-b-4 border-yellow-500">
        <Image src="/images/bg-galpao.jpg" alt="Estrutura interna de galpão industrial e logístico com pé-direito alto" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-500 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-yellow-500/30 text-xs shadow-lg backdrop-blur-sm">
              <Factory className="w-4 h-4" /> Soluções para Galpões e Indústrias SP
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white">
              {service.h1}: Projeto Aprovado no CBPMESP, do Início ao AVCB
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
              ⚠️ Galpão sem sistema de alarme de incêndio aprovado é infração direta ao Decreto Estadual nº 69.118/2024. Seu AVCB pode ser indeferido — <strong className="text-white bg-red-600/30 px-2">e a operação do seu negócio pode ser interditada no mesmo dia.</strong>
            </p>
            
            <div className="mb-10">
              <ul className="space-y-4 inline-flex flex-col text-left">
                {[
                  "Conformidade técnica integral (IT-19/2025)",
                  "Projetos focados em Indústrias Carga Alta",
                  "Documentação acompanhada até Vistoria Final CBPMESP"
                ].map((item, id) => (
                  <li key={id} className="flex items-center text-lg text-gray-100 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 mr-3 shrink-0" />
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
                className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-8 py-5 text-lg font-bold shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:bg-yellow-400 hover:-translate-y-1 transition-all text-gray-900 border border-yellow-400"
              >
                Solicitar Análise Gratuita da Indústria
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Industrial" }]} dark />
      <TrustBar dark />

      {/* Alerta Legal Massivo - Exclusivo para Galpões */}
      <section className="py-24 bg-gradient-to-b from-gray-100 to-white relative mt-[-20px] rounded-t-3xl z-20">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl relative transition-transform hover:scale-[1.01]">
             
             <div className="bg-white rounded-[1.8rem] p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="shrink-0 bg-yellow-50 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center border-4 border-yellow-100 shadow-inner">
                   <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-yellow-600 animate-pulse" />
                </div>
                <div>
                   <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tighter">
                     A Carga de Incêndio Determina seu Risco
                   </h2>
                   <p className="text-xl text-gray-700 font-bold mb-6 leading-relaxed">
                     Edificações do Grupo I são classificadas pelo CBPMESP sem margem de negociação de riscos técnicos. Para indústrias, os pontos críticos perante os fiscais são:
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold shrink-0">I-1</div>
                       Até 300 MJ/m² - Risco Baixo.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold shrink-0">I-2</div>
                       De 300 a 1.200 MJ/m² - Risco Médio. Exigência moderada na NBR 17240.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold shrink-0">I-3</div>
                       Acima de 1.200 MJ/m² - <strong className="text-red-600 border-b-2 border-red-600">Risco Alto e Inflexível.</strong> O SDAI exigido aqui não abre concessões.
                     </li>
                   </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Industrial" }]} dark />
      <TrustBar dark />

      {/* Solução & Por que Fazer */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight mb-6">
                O que a IT-19/2025 exige para a aprovação do seu Galpão?
             </h2>
             <p className="text-xl text-gray-600">
               Galpões logísticos, armazéns de produtos inflamáveis ou fábricas têm critérios técnicos específicos pesados. Entregamos além da simples instalação: entregamos a sua Liberação.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Central INMETRO com Backup 24h", desc: "Rede elétrica protegida + bateria com total de 24h de supervisão e 15 min de autonomia em alarme de campo.", Icon: Zap },
              { title: "Detecção NBR 17240 Específica", desc: "Instalação dimensionada calculando de ponta a ponta a área de cobertura vs carga de incêndio estática.", Icon: FileCheck },
              { title: "Strobes para Zonas Acima de 105 dBA", desc: "Avisadores VISUAIS vermelhos/brancos imponentes onde a sirene morre no meio dos geradores, obrigatórios na IT-19.", Icon: Siren },
              { title: "Comissionamento Técnico Formal", desc: "Elaboramos todo o relatório atestando funcionamento integral pós-teste com ART, exigido em vistoria presencial.", Icon: HardHat },
            ].map((feat, id) => (
                <div key={id} className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-yellow-300 transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                     <feat.Icon className="w-8 h-8 text-primary group-hover:text-yellow-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl text-secondary mb-4">{feat.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Industrial" }]} dark />
      <TrustBar dark />


      <ServiceClusterLinks currentSlug="/alarme-incendio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/alarme-incendio-sao-paulo" />

      <LeadForm />

      {/* Diferenciais Competitivos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Por que indústrias e galpões confiam o processo inteiro à DRD2?</h2>
            <p className="text-lg text-gray-600 mb-12">Atendemos Centros de Distribuição, Fábricas Têxteis, Alimentícias e Galpões de Armazenamento Rápido em toda São Paulo Capital.</p>
            
            <div className="text-left bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12">
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                    <p className="text-gray-700"><strong>Diagnóstico Frio:</strong> Sabe exatamente o que falta antes de gastar e comprometer caixa.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                    <p className="text-gray-700"><strong>Projeto com ART Blindado:</strong> Processo lido e aprovado no CBPMESP sem retrabalho caro de refazer o tubulamento da empresa.</p>
                  </div>
               </div>
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                    <p className="text-gray-700"><strong>Material Autorizado INMETRO:</strong> Zero risco de reprovação fiscal imposta por equipamento importado não homologado.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                    <p className="text-gray-700"><strong>Escopo Focado:</strong> Acompanhamos a emissão da licença do prédio inteira. Você foca no negócio, a engenharia resolve a burocracia governamental.</p>
                  </div>
               </div>
            </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Industrial" }]} dark />
      <TrustBar dark />

      {/* FAQ Com Schema.org */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Dúvidas Frequentes sobre Galpões Logísticos (Grupo I)</h2>
            <p className="text-lg text-gray-600">A legislação trava a operação da Logística. Entenda para desembaraçar a fiscalização.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-yellow-500/20 transition-all hover:bg-gray-50">
                <summary className="flex items-center justify-between p-6 font-bold text-secondary text-lg select-none">
                  {faq.question}
                  <span className="text-yellow-600 text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Industrial" }]} dark />
      <TrustBar dark />

      {/* Mega CTA Final */}
      <section className="py-24 bg-gray-900 text-center relative overflow-hidden text-white border-t-8 border-yellow-500">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-600/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              A Operação do Seu Galpão Não Pode Parar.
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Solicite nosso Engenheiro e impeça interdições da fiscalização com adequações assertivas na IT-19/2025 de SP. Resolva rapidamente a proteção.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-yellow-500 text-gray-900 font-black px-10 py-5 rounded-2xl text-xl shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:bg-[#1EBE5A] hover:text-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" /> Agendar Vistoria no Meu Galpão
            </a>
            <p className="text-sm mt-6 text-gray-500 font-bold tracking-widest uppercase">
               Diagnóstico In Loco | Engenharia Industrial
            </p>
         </div>
      </section>
    </>
  );
}
