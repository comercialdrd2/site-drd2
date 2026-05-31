import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  Scale, Library, FileCheck, Shield, BookOpen,
  Lightbulb, MapPin, Map, Bell, ArrowRight,
  Users,
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
  title: servicesData["avcb-para-creche-sao-paulo"].metaTitle,
  description: servicesData["avcb-para-creche-sao-paulo"].metaDescription,
  alternates: {
    canonical: "/avcb-para-creche-sao-paulo",
  },
};

export default function AVCBCrechePage() {
  const service = servicesData["avcb-para-creche-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-para-creche-sao-paulo",
        title: metadata.title,
        description: metadata.description,
        serviceName: "AVCB para Creche",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Creche", item: "/avcb-para-creche-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/hero-creche.webp"
          alt="Crianças brincando em creche segura com hidrante"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <BookOpen className="w-4 h-4" /> Gestão de Riscos para Escolas Infantis (E-5)
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB para Creche em São Paulo: <br className="hidden md:block" />
              Regularize com Engenheiro e Evite Interdição
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sem AVCB válido, sua creche pode ser <strong className="text-white bg-red-600/30 px-2">interditada</strong> e seu <strong className="text-white bg-red-600/30 px-2">CPF pode responder criminalmente</strong> em caso de fiscalização ou sinistro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-5 text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500"
              >
                Regularizar AVCB da Creche (Falar Direto com Engenheiro)
              </a>
            </div>

            {/* Prova + Segurança */}
            <ul className="mt-4 space-y-3">
              {[
                "Atendimento direto com engenheiro (CREA-SP)",
                "Projeto técnico conforme ITs do Corpo de Bombeiros",
                "Acompanhamento até a vistoria e aprovação final",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm md:text-base text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4">
               <p className="text-sm md:text-base text-slate-100 font-bold bg-black/30 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-white/10">
                ⚠️ Creches sem AVCB podem ser notificadas e interditadas imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* Introdução + Cards de Números */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg text-slate-700">
              <p>
                Imagine o Corpo de Bombeiros chegando à sua creche em uma manhã de segunda-feira. Não para uma vistoria agendada. Para uma interdição.
              </p>
              <p>
                As crianças precisam ser retiradas. Os pais são avisados. A escola fecha. <strong className="text-red-700">E você, como responsável, responde civil e criminalmente por manter a edificação em funcionamento sem o Auto de Vistoria do Corpo de Bombeiros (AVCB) válido.</strong>
              </p>
              <p>
                Esse cenário acontece em São Paulo, na Grande SP e no interior com creches que parecem estar em dia — mas não estão. O AVCB comprova que sua edificação atende aos requisitos de segurança contra incêndio do Decreto Estadual nº 69.118/2024 e das ITs do CBPMESP. Com ele, você opera com segurança jurídica e protege seu negócio e as crianças.
              </p>
              <p>
                No Estado de SP, creches são classificadas como <strong>Ocupação E-5 (Educacional e Cultura Física)</strong>. Isso determina as exigências técnicas e o nível de documentação necessário.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-black text-red-900 mb-2">+500</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Creches Regularizadas (E-5)</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-black text-red-900 mb-2">+400</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Projetos Aprovados no CBPMESP</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-black text-red-900 mb-2">+50</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Municípios Atendidos no Estado</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-black text-red-900 mb-2">15 Anos</div>
                <div className="text-sm font-bold text-slate-500 uppercase">de atuação exclusiva em segurança</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* AVCB OU CLCB */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">AVCB OU CLCB: O Que Sua Creche Precisa?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Muitos proprietários de creche chegam até nós acreditando que vão fazer um CLCB (Certificado de Licença) porque a escola é "pequena". A grande maioria sai com um processo de AVCB, que é mais robusto e exigente. A definição depende do tipo de processo: PTS ou Projeto Técnico Completo. E é aqui que mora o erro mais comum.
          </p>
          <Link href="/clcb-sao-paulo" className="text-blue-700 font-bold hover:underline">Entenda a diferença técnica entre AVCB e CLCB &rarr;</Link>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* PTS VS PT (Tabela Comparativa) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">PTS OU PROJETO TÉCNICO COMPLETO: Qual é o seu caso?</h2>
          
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-5 bg-slate-100 font-bold text-slate-900 border-b border-slate-200">Critério</th>
                  <th className="p-5 bg-green-50 text-green-900 font-bold border-b border-green-200 border-l border-green-200 w-2/5">Projeto Técnico Simplificado (PTS)</th>
                  <th className="p-5 bg-red-900 text-white font-bold border-b border-blue-800 border-l border-blue-800 w-2/5">Projeto Técnico Completo (PT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-medium text-slate-700 bg-white">Documentação exigida</td>
                  <td className="p-4 text-green-800 bg-green-50/30 border-l border-green-100">Formulário técnico, declaração e layout simplificado</td>
                  <td className="p-4 text-slate-700 bg-white border-l border-blue-100">Planta baixa cotada, memorial técnico, ART</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700 bg-white">Cortes e fachadas</td>
                  <td className="p-4 text-green-800 bg-green-50/30 border-l border-green-100">Não exigido</td>
                  <td className="p-4 text-slate-700 bg-white border-l border-blue-100">Obrigatório</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700 bg-white">Área de aplicação</td>
                  <td className="p-4 text-green-800 bg-green-50/30 border-l border-green-100">Geralmente até 750 m² de área construída</td>
                  <td className="p-4 text-slate-700 bg-white border-l border-blue-100">Mais de 750 m² ou com fatores agravantes</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700 bg-white">Complexidade / Custo</td>
                  <td className="p-4 text-green-800 bg-green-50/30 border-l border-green-100">Mais ágil, menos oneroso</td>
                  <td className="p-4 text-slate-700 bg-white border-l border-blue-100">Alta complexidade, requer maior investimento técnico</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center text-slate-700 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">O Critério de 750 m²: O que muda para sua creche</h3>
            <p className="mb-4">
              A área construída <strong>real</strong> da edificação é um dos critérios determinantes no enquadramento. Creches com até 750 m² reais, sem agravantes, podem usar o PTS. Acima de 750 m², o Projeto Técnico é inegociável.
            </p>
            <p className="font-bold text-slate-900 italic">
              "O detalhe que muda tudo: a área que o Bombeiro considera é a área real da edificação — não a área que consta no carnê do IPTU."
            </p>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* ALERTA DE DIVERGÊNCIA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-2xl shadow-sm relative overflow-hidden">
            <AlertTriangle className="absolute -right-4 -bottom-4 w-40 h-40 text-red-100 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-red-900 mb-4">
                Divergência de área entre IPTU e realidade é o principal motivo de Comunique-se em processos de creche. Identifique antes de protocolar.
              </h3>
              <p className="text-red-800 font-medium leading-relaxed mb-4">
                É muito comum a área no IPTU ser menor que a real (devido a ampliações não comunicadas à prefeitura ou puxadinhos em imóveis adaptados). Quando essa divergência não é tratada e a área real ultrapassa 750 m², o processo PTS protocolado é travado com um Comunique-se formal.
              </p>
              <p className="text-red-800 font-medium leading-relaxed">
                A inconsistência pode exigir levantamento arquitetônico de impacto. Quem não identifica isso antes do protocolo, paga duas vezes pelo processo. <strong>Nossa equipe mapeia isso no diagnóstico inicial gratuito.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* MEDIDAS DE SEGURANÇA EXIGIDAS (ITs) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Medidas de Segurança Exigidas para Creches (E-5)</h2>
            <p className="text-lg text-slate-400">Independentemente de PTS ou PT, as Instruções Técnicas do CBPMESP cobram itens específicos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Detecção e Alarme (IT 19)", desc: "Atenção especial à cobertura de dormitórios e berçários, onde crianças pequenas podem estar dormindo durante emergências.", icon: Bell },
              { title: "Sinalização (IT 20)", desc: "Placas fotoluminescentes padronizadas em rotas de fuga, saídas de emergência e hidrantes.", icon: MapPin },
              { title: "Iluminação de Emerg.(IT 18)", desc: "Obrigatória em corredores, escadas e rotas de saída para facilitar a evacuação com visibilidade.", icon: Lightbulb },
              { title: "Plano de Emergência (IT 16)", desc: "Procedimentos e registro de treinamentos da equipe (Brigada) para evacuação segura e rápida das turmas.", icon: BookOpen },
              { title: "Saídas de Emergência (IT 11)", desc: "Dimensionamento com extrema atenção à evacuação assistida de crianças sem autonomia de locomoção.", icon: ArrowRight },
              { title: "Materiais (IT 10)", desc: "Restrições rigorosas ao uso de materiais combustíveis (plásticos, forros inflamáveis) em rotas de fuga.", icon: Shield },
            ].map((item, idx) => (
               <div key={idx} className="bg-slate-800 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-700 transition-colors group">
                 <item.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* Metodologia DRD2 — O Caminho Sem Comunique-se para Escolas e Creches */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-slate-800/50 rounded-full blur-3xl -translate-x-1/2"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Especialização Grupo E-5</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">Caminho <span className="text-red-600 italic">Sem Comunique-se</span></h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium lead-relaxed">
              Desenhamos o fluxo para que mantenedores tenham paz e a escola obtenha o AVCB sem retrabalho ou interrupção das aulas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { 
                step: "01", 
                title: "DIAGNÓSTICO TÉCNICO", 
                desc: "Análise da área real vs IPTU e mapeamento de sistemas vitais (alarmes, sinalização e rotas).", 
                icon: <Library className="w-8 h-8" />
              },
              { 
                step: "02", 
                title: "PROJETO SPCI", 
                desc: "Elaboração do projeto de segurança com ART, focado na IT-08 (Saídas) e IT-17 (Alarme).", 
                icon: <FileCheck className="w-8 h-8" />
              },
              { 
                step: "03", 
                title: "FILTRO DE ESCOLA", 
                desc: "Revisão pré-protocolo para garantir 0% de chances de exigência documental no Via Fácil.", 
                icon: <ShieldAlert className="w-8 h-8" />
              },
              { 
                step: "04", 
                title: "TREINAMENTO BRIGADA", 
                desc: "Capacitação real da equipe docente e administrativa para evacuação assistida de crianças.", 
                icon: <Users className="w-8 h-8" />
              },
              { 
                step: "05", 
                title: "ADEQUAÇÕES FÍSICAS", 
                desc: "Orientação prática para ajustes em extintores, sinalização fotoluminescente e iluminação.", 
                icon: <Lightbulb className="w-8 h-8" />
              },
              { 
                step: "06", 
                title: "PROTOCOLO DIGITAL", 
                desc: "Submissão via sistema eletrônico com monitoramento diário até a liberação da vistoria.", 
                icon: <FileCheck className="w-8 h-8" />
              },
              { 
                step: "07", 
                title: "VISTORIA & AVCB", 
                desc: "Acompanhamento presencial no dia da vistoria para garantir a pronta emissão do documento.", 
                icon: <BadgeInfo className="w-8 h-8" />
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-xl group-hover:scale-110 transition-transform">{item.step}</div>
                  <div className="text-red-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-red-400 transition-colors uppercase">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-200">{item.desc}</p>
              </div>
            ))}
            
            {/* Final Card - Call to Action */}
            <div className="bg-red-600 p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center items-center text-center text-white group hover:bg-red-700 transition-all border-4 border-white/20">
               <ShieldAlert className="w-10 h-10 mb-4 opacity-50" />
               <h3 className="text-xl font-black mb-2 tracking-tighter uppercase">Proteja sua Escola</h3>
               <p className="text-xs font-bold text-red-100 mb-6">Diagnóstico técnico gratuito para Escolas.</p>
               <a href={whatsappLink} className="bg-white text-red-600 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-transform">FALAR COM ENGENHEIRO</a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* COBERTURA & REFERÊNCIA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">A DRD2 Atende em Todo o Estado de SP</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Atendemos creches e escolas infantis em toda a RMSP e interior. Nossa engenharia monitora remotamente fluxos no <em>Via Fácil</em> e realiza as vistorias in loco necessárias de São Paulo a Campinas.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["São Paulo Capital", "Santo André", "S. Bernardo", "São Caetano", "Guarulhos", "Osasco", "Campinas", "Sorocaba", "Santos"].map(city => (
                  <span key={city} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">{city}</span>
                ))}
              </div>
            </div>
            <div className="bg-red-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
               <Map className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" />
               <h3 className="text-2xl font-black mb-4 relative z-10">Referência em Creches</h3>
               <p className="text-blue-100 mb-4 relative z-10 leading-relaxed font-medium">
                 Como empresa de engenharia exclusiva, somos uma das poucas com <strong>mais de 500 escolas infantis</strong> regularizadas.
               </p>
               <p className="text-blue-200 text-sm relative z-10 leading-relaxed">
                 Independente da complexidade: sobrado adaptado em E-5, múltiplos pavimentos, berçário isolado. A nossa gestão documental identifica os bloqueios antes do seu projeto ser indeferido pelo Oficial do CBPMESP.
               </p>
               <p className="text-white font-bold mt-6">Creches regularizadas. Proprietários blindados. Crianças seguras.</p>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

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
                title: "AVCB para Creche em São Paulo: O Guia Técnico Completo",
                slug: "avcb-para-creche-sao-paulo",
                image: "/images/blog/blog_hero_avcb_creche.webp",
                desc: "Entenda a Ocupação E-5, o critério de 750 m² e como garantir a segurança das crianças."
              },
              {
                title: "Quem precisa de AVCB e quem está dispensado?",
                slug: "quem-precisa-de-avcb",
                image: "/images/blog/fire_safety_equipment_premium.webp",
                desc: "Descubra se sua escola infantil exige licenciamento técnico completo."
              },
              {
                title: "Quanto Custa o AVCB em São Paulo em 2026?",
                slug: "quanto-custa-avcb-em-sao-paulo",
                image: "/images/blog/blog_hero_avcb_preco.webp",
                desc: "Valores, taxas e honorários para regularização de estabelecimentos educacionais."
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

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* Creche Pulse CTA - Full Width Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-50 border-2 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl animate-pulse-subtle">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">Creche Segura e Regularizada</h3>
              <p className="text-slate-600 font-medium italic text-sm">Evite multas e interdições. Garanta a segurança das crianças hoje.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Falar com engenheiro especialista Agora
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

      {/* Lead Component Standalone */}
{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Creche</span></h2>
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
        occupation="Creche"
        currentSlug="/avcb-para-creche-sao-paulo"
      />



      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/avcb-para-creche-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-para-creche-sao-paulo" />


      <OccupationDepthBlock
        occupation="Creche"
        currentSlug="/avcb-para-creche-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/avcb-para-escola-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Creches em SP"
      />
      <LeadForm />

      {/* FAQ Com Schema.org */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Perguntas Frequentes (FAQ)</h2>
            <p className="text-lg text-slate-600">Dúvidas comuns sobre emissão de AVCB e processos do Corpo de Bombeiros para creches.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-2 open:ring-orange-500/20 transition-all hover:bg-slate-50">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-800 text-lg select-none">
                  {faq.question}
                  <span className="text-orange-500 text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">
               Assim como nos projetos para condomínios e galpões, cada ocupação tem suas próprias exigências — e para creches, a precisão no enquadramento é ainda mais crítica.{' '}
               <Link href="/avcb-para-condominio-sao-paulo" className="text-red-600 font-bold hover:underline">Veja sobre condomínios</Link> ou{' '}
               <Link href="/avcb-galpao-industrial-sao-paulo" className="text-red-600 font-bold hover:underline">indústrias</Link>.
            </p>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "AVCB Creche" }]} dark />
      <TrustBar dark />

    </>
  );
}


