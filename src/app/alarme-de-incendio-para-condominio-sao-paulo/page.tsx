import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Building, FileCheck, Zap, BellRing, Siren } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";

export const metadata = {
  title: servicesData["alarme-de-incendio-para-condominio-sao-paulo"].metaTitle,
  description: servicesData["alarme-de-incendio-para-condominio-sao-paulo"].metaDescription,
  alternates: {
    canonical: "/alarme-de-incendio-para-condominio-sao-paulo",
  },
};

export default function AlarmeCondominioPage() {
  const service = servicesData["alarme-de-incendio-para-condominio-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/alarme-de-incendio-para-condominio-sao-paulo",
        title: metadata.title,
        description: metadata.description,
        serviceName: "Alarme de Incêndio para Condomínios",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Alarme de Incêndio para Condomínios", item: "/alarme-de-incendio-para-condominio-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[550px] flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image src="/images/bg-condominios.jpg" alt="Fachada e estrutura de condomínio residencial vertical" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4" /> Multa Síndico Sem AVCB São Paulo
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white">
              {service.h1}: Regularize Antes que o CBPMESP Chegue Primeiro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
              A ausência ou irregularidade no sistema de alarme de incêndio bloqueia seu AVCB e pode resultar em <strong className="text-white bg-red-600/30 px-2">multa de até R$ 310 mil</strong>, além de responsabilidade civil pessoal (síndico).
            </p>
            
            <div className="mb-10">
              <ul className="space-y-4 inline-flex flex-col text-left">
                {[
                  "Projetos adequados à exigência da IT-17/2025",
                  "Material INMETRO e Atestado de Comissionamento",
                  "Aprovação ágil para Condomínios Residenciais"
                ].map((item, id) => (
                  <li key={id} className="flex items-center text-lg text-gray-100 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-red-500 mr-3 shrink-0" />
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
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-5 text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500"
              >
                Solicitar Análise de Risco Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Condomï¿½nio" }]} dark />
      <TrustBar dark />

      {/* Alerta Legal Massivo - Exclusivo para Síndicos */}
      <section className="py-24 bg-gradient-to-b from-[#FFF5F5] to-white relative mt-[-20px] rounded-t-3xl z-20">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-red-600 rounded-[2rem] p-1.5 shadow-2xl relative transition-transform hover:scale-[1.01]">
             
             <div className="bg-white rounded-[1.8rem] p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="shrink-0 bg-red-50 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center border-4 border-red-100 shadow-inner">
                   <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-red-600 animate-pulse" />
                </div>
                <div>
                   <h2 className="text-3xl md:text-4xl font-black text-red-600 mb-4 uppercase tracking-tighter">
                     Atenção Síndico: Risco Jurídico Iminente
                   </h2>
                   <p className="text-xl text-gray-800 font-bold mb-6 leading-relaxed">
                     Manter o condomínio com o sistema de Alarme de Incêndio irregular ou desatualizado frente à IT-17/2025 acarreta penalidades severas:
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">1</div>
                       Multa do CBPMESP que pode chegar a <strong>R$ 310.000,00</strong>.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">2</div>
                       <strong>Recusa sumária</strong> de pagamento de apólices pela Seguradora em caso de fogo.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">3</div>
                       Responsabilidade <strong className="text-red-600 border-b-2 border-red-600">Civil e Criminal Pessoal</strong> do Síndico (Art. 1.348 do Código Civil).
                     </li>
                   </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Condomï¿½nio" }]} dark />
      <TrustBar dark />

      {/* Solução & Por que Fazer */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight mb-6">
                O que a IT-17/2025 exige para a aprovação do seu AVCB?
             </h2>
             <p className="text-xl text-gray-600">
               O Corpo de Bombeiros não aprova mais sistemas obsoletos. Veja a matriz normativa que implementamos para garantir sua regularização.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Central CAI Aprovada", desc: "Fornecimento de Central de Alarme (CAI) certificada pelo INMETRO com alimentação dupla (Rede + Bateria Nobreak).", Icon: Zap },
              { title: "Detecção Normatizada", desc: "Instalação de detectores de fumaça respeitando milimetricamente o raio de cobertura da NBR 17240.", Icon: FileCheck },
              { title: "Sinalização de Rota", desc: "Sirenes e strobes (alertas visuais e sonoros) rigorosamente posicionados nas escadas e rotas de fuga.", Icon: BellRing },
              { title: "Laudo & Comissionamento", desc: "Elaboramos todo o relatório funcional com ART de engenheiro para ateste e aprovação imediata do Bombeiro.", Icon: Building },
            ].map((feat, id) => (
                <div key={id} className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-red-200 transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                     <feat.Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-secondary mb-4">{feat.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Condomï¿½nio" }]} dark />
      <TrustBar dark />


      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/alarme-incendio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/alarme-incendio-sao-paulo" />

      <LeadForm />

      {/* Diferenciais Competitivos Síndico */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Por que síndicos em São Paulo escolhem a DRD2 Engenharia?</h2>
            <p className="text-lg text-gray-600 mb-12">Porque entregamos mais do que instalação. Entregamos aprovação e blindagem jurídica.</p>
            
            <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-gray-700"><strong>Diagnóstico técnico gratuito:</strong> verificamos se o seu sistema atual está em conformidade com a IT-17/2025.</p>
               </div>
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-gray-700"><strong>Projeto com ART:</strong> memorial descritivo e plantas executivas no padrão exigido pelo CBPMESP.</p>
               </div>
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-gray-700"><strong>Materiais Certificados:</strong> central, detectores e acionadores com rastreabilidade de lote.</p>
               </div>
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-gray-700"><strong>Laudo de Comissionamento:</strong> documentação completa protocolada na vistoria dos Bombeiros.</p>
               </div>
            </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Condomï¿½nio" }]} dark />
      <TrustBar dark />

      {/* FAQ Com Schema.org */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Principais Dúvidas - Condomínios e Síndicos</h2>
            <p className="text-lg text-gray-600">Entenda a norma IT-19 e proteja a legalidade do seu condomínio.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-primary/20 transition-all hover:bg-gray-50">
                <summary className="flex items-center justify-between p-6 font-bold text-secondary text-lg select-none">
                  {faq.question}
                  <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Condomï¿½nio" }]} dark />
      <TrustBar dark />

      {/* Mega CTA Final */}
      <section className="py-24 bg-secondary text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-1/3 h-full bg-red-600/20 skew-x-12 transform -translate-x-1/4 blur-2xl"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              O AVCB do seu condomínio vence em breve?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Não deixe para a última semana. O processo de aprovação de SDAI pode levar semanas e o prazo corre contra sua responsabilidade. Inicie a análise técnica gratuita agora.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl text-xl shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:bg-[#1EBE5A] hover:text-white hover:text-primary transition-all duration-300"
            >
              <Phone className="w-6 h-6" /> Quero Minha Análise Gratuita
            </a>
            <p className="text-sm mt-6 text-gray-500 font-bold tracking-widest uppercase">
               Atendimento em toda a São Paulo Capital
            </p>
         </div>
      </section>
    </>
  );
}
