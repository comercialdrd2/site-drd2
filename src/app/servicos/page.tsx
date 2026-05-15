import { servicesData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileCheck, ShieldAlert, Wrench, Shield } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import OccupancyAccordion from "@/components/OccupancyAccordion";

const _pageTitle = "Serviços de Segurança Contra Incêndio em SP | DRD2 Engenharia";
const _pageDesc = "Aprovação de AVCB e CLCB, Treinamento de Brigada de Incêndio, projetos, alarme, sprinkler, hidrante, SPDA e manutenção em São Paulo. Conheça todos os serviços da DRD2 Engenharia.";

export const metadata = {
  title: "Serviços de Segurança Contra Incêndio em SP | DRD2 Engenharia",
  description: "Aprovação de AVCB e CLCB, Treinamento de Brigada de Incêndio, projetos, alarme, sprinkler, hidrante, SPDA e manutenção em São Paulo. Conheça todos os serviços da DRD2 Engenharia.",
  alternates: {
    canonical: "/servicos",
  },
};

export default function ServicesHubPage() {
  const blocks = [
    {
      title: "Treinamentos e Regularização",
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      services: [
        servicesData["treinamento-brigada-incendio"],
        servicesData["avcb-sao-paulo"],
        servicesData["clcb-sao-paulo"],
        servicesData["renovacao-avcb-condominio-sao-paulo"]
      ]
    },
    {
      title: "Projetos Técnicos",
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      services: [
        servicesData["projetos-seguranca-incendio"],
        servicesData["projeto-escada-pressurizada-avcb-sao-paulo"],
        servicesData["projeto-pet-sp"]
      ]
    },
    {
      title: "Instalação e Manutenção Preventiva",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      services: [
        servicesData["alarme-de-incendio-para-condominio-sao-paulo"],
        servicesData["chuveiro-automatico-sprinkler-sao-paulo"],
        servicesData["instalacao-hidrante-sao-paulo"],
        servicesData["spda-para-raios-sao-paulo"],
        servicesData["laudo-estanqueidade-gas-sao-paulo"],
        servicesData["manutencao-sistemas-incendio"]
      ]
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/servicos",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Serviços de Engenharia de Incêndio em São Paulo",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/page-servicos.webp"
          alt="Serviços de Engenharia de Incêndio - DRD2 Engenharia"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D121F]/85" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Especialistas em SP
          </span>
          <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">Soluções em Engenharia de Incêndio</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Proteção técnica completa para sua edificação, do projeto à emissão do certificado.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          {blocks.map((block, i) => (
            <div key={i} className="mb-24 last:mb-0">
              <div className="flex items-center space-x-4 mb-12 border-b border-gray-200 pb-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                  {block.icon}
                </div>
                <h2 className="text-3xl font-extrabold text-secondary">{block.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {block.services.map((srv) => (
                  <Link 
                    key={srv.slug} 
                    href={srv.slug === "avcb-sao-paulo" ? "/avcb" : srv.slug === "clcb-sao-paulo" ? "/clcb-sao-paulo" : srv.slug === "renovacao-avcb-condominio-sao-paulo" ? "/renovacao-avcb-condominio-sao-paulo" : srv.slug === "projetos-seguranca-incendio" ? "/projetos-incendio" : srv.slug === "projeto-escada-pressurizada-avcb-sao-paulo" ? "/projeto-escada-pressurizada-avcb-sao-paulo" : srv.slug === "projeto-pet-sp" ? "/projeto-pet" : srv.slug === "laudo-estanqueidade-gas-sao-paulo" ? "/laudo-estanqueidade-gas-sao-paulo" : srv.slug === "avcb-condominio-sao-paulo" ? "/avcb-condominio-sao-paulo" : srv.slug === "avcb-galpao-industrial-sao-paulo" ? "/avcb-galpao-industrial-sao-paulo" : srv.slug === "avcb-hospital-clinica-sao-paulo" ? "/avcb-hospital-clinica-sao-paulo" : srv.slug === "avcb-comercial-escritorio-sao-paulo" ? "/avcb-comercial-escritorio-sao-paulo" : srv.slug === "avcb-escola-faculdade-sao-paulo" ? "/avcb-para-escola-sao-paulo" : srv.slug === "alarme-de-incendio-para-condominio-sao-paulo" ? "/alarme-de-incendio-para-condominio-sao-paulo" : srv.slug === "alarme-de-incendio-galpao-industrial-sp" ? "/alarme-de-incendio-galpao-industrial-sp" : srv.slug === "alarme-de-incendio-hospital-clinica-sp" ? "/alarme-de-incendio-hospital-clinica-sp" : srv.slug === "alarme-de-incendio-comercial-escritorio-sp" ? "/alarme-de-incendio-comercial-escritorio-sp" : srv.slug === "alarme-de-incendio-escola-faculdade-sp" ? "/alarme-de-incendio-escola-faculdade-sp" : srv.slug === "chuveiro-automatico-sprinkler-sao-paulo" ? "/sprinklers" : srv.slug === "instalacao-hidrante-sao-paulo" ? "/hidrantes" : srv.slug === "spda-para-raios-sao-paulo" ? "/spda" : srv.slug === "manutencao-sistemas-incendio" ? "/manutencao" : srv.slug === "treinamento-brigada-incendio" ? "/treinamento-brigada" : `/servicos/${srv.slug}`}  
                    className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500 overflow-hidden p-2">
                      <Image 
                        src={srv.icon} 
                        alt={srv.title} 
                        width={80} 
                        height={80} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{srv.title}</h3>
                    <p className="text-gray-600 mb-8 flex-grow text-lg leading-relaxed">{srv.shortDescription}</p>
                    <div className="flex items-center text-primary font-bold text-lg">
                      Saiba mais <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <OccupancyAccordion />

      {/* CTA Final */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8 leading-tight">Dúvidas sobre qual serviço sua edificação precisa?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">Nossos engenheiros estão prontos para realizar um diagnóstico técnico gratuito e orientar sua regularização.</p>
          <div className="flex flex-col items-center justify-center">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-12 py-5 text-lg font-bold shadow-xl shadow-red-500/20 hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all duration-300"
            >
              Falar com engenheiro especialista no WhatsApp
            </a>
            <p className="mt-4 text-sm text-gray-400 italic font-medium tracking-wide">
              Atendimento rápido pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      <ServiceClusterLinks currentSlug="/servicos" />
      <ServiceBlogLinks currentSlug="/servicos" />

    </>
  );
}
