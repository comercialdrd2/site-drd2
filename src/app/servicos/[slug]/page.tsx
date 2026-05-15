import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { JsonLD, generateBreadcrumbSchema } from "@/components/JsonLD";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];
  if (!service) return { title: "Não encontrado" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/servicos/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];
  if (!service) notFound();

  // Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Serviços", item: "/servicos" },
    { name: service.title, item: `/servicos/${service.slug}` }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "DRD2 Engenharia"
    },
    "areaServed": "São Paulo"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLD schema={breadcrumbSchema} />
      <JsonLD schema={serviceSchema} />
      <JsonLD schema={faqSchema} />

      {/* Hero Section */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-3xl font-bold mb-6">{service.h1}</h1>
          <p className="text-xl text-gray-300 mb-8">{service.shortDescription}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Olá,%20tenho%20interesse%20no%20serviço%20de%20${service.title}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#1EBE5A] transition-colors">
              Falar com engenheiro especialista Especialista
            </a>
            <Link href="/contato" className="inline-flex items-center justify-center rounded-md bg-white border border-transparent px-6 py-3 text-sm font-semibold text-secondary hover:bg-gray-100 transition-colors">
              Solicitar Análise Técnica
            </Link>
          </div>
        </div>
      </section>

      {/* PAS Framework (Problem, Agitation, Solution) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">O Problema</h3>
                  <p className="text-red-800">{service.pas.problem}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-900 mb-2">O Risco Real</h3>
              <p className="text-orange-800">{service.pas.agitation}</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">A Solução Completa</h3>
                  <p className="text-green-800">{service.pas.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-red">
          {service.content.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>
          ))}

          {/* CTA Secundário */}
          <div className="my-12 text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-secondary mb-4">Pronto para resolver isso de forma definitiva?</h3>
            {service.slug === 'manutencao-sistemas-incendio' ? (
              <Link href="/contato" className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-primary/90 transition-colors">Solicitar Plano de Manutenção</Link>
            ) : (
              <Link href="/contato" className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-primary/90 transition-colors">Receber Orçamento Técnico</Link>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Perguntas Frequentes sobre {service.title}</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors border border-gray-100">
                <h3 className="text-lg font-bold text-secondary flex items-center mb-3">
                  <span className="bg-red-100 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0">?</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lead Magnet Modal Placeholder (Condicional) */}
      {service.hasLeadMagnet && (
         <div className="bg-red-900 text-white py-12 text-center">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold mb-4">Garantia de Aprovação?</h3>
              <p className="mb-6">Baixe o nosso Checklist Completo e saiba tudo o que o Corpo de Bombeiros vai analisar na sua edificação.</p>
              <button className="bg-white text-secondary font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors">Baixar Checklist de Documentos para AVCB</button>
            </div>
         </div>
      )}

      <ServiceBlogLinks currentSlug={`/servicos/${service.slug}`} />
    </>
  );
}
