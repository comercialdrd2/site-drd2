import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, Building, FileCheck,
  Store, Briefcase, Landmark, MapPin, Lightbulb, Users,
} from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

export const metadata = {
  title: servicesData["avcb-comercial-escritorio-sao-paulo"].metaTitle,
  description: servicesData["avcb-comercial-escritorio-sao-paulo"].metaDescription,
  alternates: {
    canonical: "/avcb-comercial-escritorio-sao-paulo",
  },
};

export default function AVCBComercialPage() {
  const service = servicesData["avcb-comercial-escritorio-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-comercial-escritorio-sao-paulo",
        title: metadata.title,
        description: metadata.description,
        serviceName: "AVCB Comercial e Escritório",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Comércio e Escritório", item: "/avcb-comercial-escritorio-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image src="/images/hero-escritorio-moderno.webp" alt="Ambiente corporativo de escritório moderno com estações de trabalho" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-red-300 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-primary/50 text-xs shadow-lg backdrop-blur-sm">
              <Briefcase className="w-4 h-4" /> Gestão de Risco Comercial de SP
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white">
              {service.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
              ⚠️ Operando e crescendo, mas sem o selo da Prefeitura? Operar sem AVCB expõe o seu negócio a multas de até R$ 300 Mil e <strong className="text-white bg-primary/50 px-2">interdição total da loja!</strong>
            </p>
            
            <div className="mb-6">
              <ul className="space-y-4 inline-flex flex-col text-left">
                {[
                  "Elaboração de laudos AVCB isolados para Lojas e Franquias",
                  "Vistorias detectando rotas de fuga escondidas em reformas locais",
                  "Mapeamentos baseados nas pranchas do próprio Shopping Matriz"
                ].map((item, id) => (
                  <li key={id} className="flex items-center text-lg text-white font-medium">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
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
                className="animate-alert-pulse inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-5 text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500"
              >
                Solicitar Engenharia B2B
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "AVCB Comercial" }]} dark />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA — VERBATIM RESTORATION ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-secondary leading-none uppercase tracking-tighter mb-8 italic">
                O AVCB para Comércio e o <span className="text-primary not-italic font-black italic">Alvará de Funcionamento</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento que comprova que seu estabelecimento comercial atende aos requisitos mínimos de segurança contra incêndio e pânico exigidos pela legislação estadual (Decreto nº 69.118/2024). Para um comércio em São Paulo, o AVCB é o alicerce de toda a regularização municipal. Sem ele, é impossível obter ou renovar o Alvará de Funcionamento.
                </p>
                
                <h3 className="text-2xl font-black text-secondary mt-12 mb-4 uppercase italic tracking-tighter">Enquadramento: PTS vs Projeto Técnico</h3>
                <p>
                  O que define a complexidade e o custo do seu processo é a área construída e a carga de incêndio da sua loja. O Corpo de Bombeiros divide os processos em duas categorias principais:
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-12 shadow-2xl border-l-8 border-primary">
                  <h4 className="text-xl font-black mb-6 uppercase italic tracking-tight">Regras de Ouro do Enquadramento</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-center text-sm font-bold uppercase italic">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Até 750 m²: Geralmente enquadrado como PTS (Projeto Técnico Simplificado).</span>
                    </li>
                    <li className="flex gap-3 items-center text-sm font-bold uppercase italic">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Acima de 750 m²: Exige Projeto Técnico (PT) Completo com plantas e memoriais.</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed italic">
                    ⚠️ Atenção: Se o seu comércio armazena produtos inflamáveis ou possui carga de incêndio elevada, o Bombeiro pode exigir Projeto Técnico mesmo abaixo de 750 m².
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden sticky top-24">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                <h3 className="text-2xl font-black text-secondary mb-6 italic">Agendar Auditoria B2B</h3>
          
      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Comercial Escritorio São Paulo</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Comercial Escritorio São Paulo precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Comercial Escritorio São Paulo. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Comercial Escritorio"
        currentSlug="/avcb-comercial-escritorio-sao-paulo"
      />



      <ServiceClusterLinks currentSlug="/avcb-comercial-escritorio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-comercial-escritorio-sao-paulo" />


      <OccupationDepthBlock
        occupation="Comercial Escritorio"
        currentSlug="/avcb-comercial-escritorio-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-escritorio-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Escritórios Comerciais em SP"
      />
      <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>


      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "AVCB Comercial" }]} dark />
      <TrustBar dark />

      {/* ── EXIGÊNCIAS TÉCNICAS — COMÉRCIO ── */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-secondary mb-16 tracking-tighter uppercase italic text-center">
            Itens Obrigatórios para <span className="text-primary not-italic font-black italic">Aprovação Comercial</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { t: "Extintores (IT-21)", d: "Dimensionamento correto por classe de fogo (A, B ou C) e área de cobertura.", i: <FileCheck className="w-8 h-8"/> },
              { t: "Sinalização (IT-20)", d: "Placas fotoluminescentes indicando saídas, rotas e equipamentos.", i: <MapPin className="w-8 h-8"/> },
              { t: "Iluminação (IT-18)", d: "Blocos autônomos com autonomia mínima de 1 hora em corredores.", i: <Lightbulb className="w-8 h-8"/> },
              { t: "Treinamento (IT-17)", d: "Equipe treinada para o uso de equipamentos e evacuação segura.", i: <Users className="w-8 h-8"/> }
            ].map((sys, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-200 hover:shadow-xl transition-all group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{sys.i}</div>
                <h3 className="text-xl font-black text-secondary mb-4 uppercase italic tracking-tight">{sys.t}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">{sys.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "AVCB Comercial" }]} dark />
      <TrustBar dark />

      {/* FAQ Com Schema.org — VERBATIM RESTORATION */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 uppercase italic tracking-tighter">Dúvidas B2B: <span className="text-primary not-italic font-black italic">AVCB Comercial</span></h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "Quanto tempo demora para sair o AVCB de um comércio?",
                answer: "Em processos simplificados (PTS), o documento pode sair em até 15 dias após o protocolo. Em projetos técnicos complexos, o prazo varia de 30 a 90 dias dependendo da vistoria."
              },
              {
                question: "O que acontece se eu abrir a loja sem AVCB?",
                answer: "A loja fica sujeita a multas pesadas da Prefeitura e do Corpo de Bombeiros, além da interdição total do estabelecimento por falta de segurança."
              },
              {
                question: "O AVCB do shopping vale para a minha loja?",
                answer: "Não. O shopping possui um AVCB da edificação, mas cada loja precisa ter seu próprio licenciamento (CLCB ou AVCB isolado) dependendo da carga de incêndio e área."
              },
              {
                question: "Posso usar extintor de pó químico em eletrônicos?",
                answer: "Não é recomendado. O pó químico pode danificar circuitos. O ideal para escritórios com muitos computadores é o extintor de CO2 (Gás Carbônico)."
              },
              {
                question: "Qual a validade do AVCB para escritórios?",
                answer: "Geralmente a validade é de 3 anos para ocupações comerciais e de serviços em São Paulo, devendo a renovação ser iniciada 60 dias antes do vencimento."
              },
              {
                question: "A DRD2 faz o projeto de adequação do gesso?",
                answer: "Sim. Se o gesso ocultou sistemas de incêndio, fazemos o projeto de adequação (CMAR) para garantir que a detecção e os bicos de sprinkler funcionem conforme a norma."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-primary/20 transition-all hover:bg-gray-50">
                <summary className="flex items-center justify-between p-6 font-black text-secondary text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>


      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "AVCB Comercial" }]} dark />
      <TrustBar dark />

      {/* Mega CTA Final */}
      <section className="py-24 bg-secondary text-center relative overflow-hidden text-white border-t-8 border-primary">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              Um Extintor Vencido Paralisa Seu Faturamento Hoje.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Delegaremos o terror das renovações com o batalhão e fiscal para focar no que você faz de melhor: vender. Seu negócio pede um documento AVCB em mãos e blindado contra reveses.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="animate-alert-pulse inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl text-xl shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:bg-[#1EBE5A] hover:text-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" /> Destravar Meu Alvará com Especialista
            </a>
            <p className="text-sm mt-6 text-gray-400 font-bold tracking-widest uppercase">
               Diagnóstico Grátis | Projetos Em Todo Estado SP
            </p>
         </div>
      </section>
    </>
  );
}

