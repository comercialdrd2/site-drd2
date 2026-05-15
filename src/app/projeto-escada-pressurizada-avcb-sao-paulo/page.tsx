import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldCheck, AlertTriangle, FileCheck,
  Factory, Lightbulb, MapPin, Search, Building2,
  Store, Building, Stethoscope, Activity, Hotel,
  GraduationCap, Briefcase, ClipboardCheck, Fan, Calculator,
  Wind, Ruler, Hammer, FileX, Target,
  BookOpen, CheckSquare, HardHat,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Projeto de Escada Pressurizada para AVCB em São Paulo | DRD2 Engenharia";
const _pageDesc = "Projeto de escada pressurizada em São Paulo com memorial de cálculo, detalhamento técnico e suporte para aprovação no CBPMESP. Fale com a DRD2 Engenharia.";

export const metadata = {
  title: "Projeto de Escada Pressurizada para AVCB em São Paulo | DRD2 Engenharia",
  description: "Projeto de escada pressurizada em São Paulo com memorial de cálculo, detalhamento técnico e suporte para aprovação no CBPMESP. Fale com a DRD2 Engenharia.",
  alternates: {
    canonical: "/projeto-escada-pressurizada-avcb-sao-paulo",
  },
};

export default function ProjetoEscadaPressurizadaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqData = [
    {
      question: "Quanto custa um projeto de escada pressurizada em São Paulo?",
      answer: "O custo varia conforme a complexidade e a altura da edificação, além do volume de detalhes exigidos (como análise de infiltração, portas e rotas de fuga). Sempre realizamos uma análise técnica da arquitetura para enviar uma proposta personalizada."
    },
    {
      question: "Toda escada enclausurada precisa de pressurização?",
      answer: "Não. A necessidade da pressurização (tipo EP) depende do enquadramento da edificação nas Instruções Técnicas (Tabelas do Decreto Estadual), baseando-se principalmente na ocupação e na altura."
    },
    {
      question: "É possível regularizar prédio existente com escada pressurizada?",
      answer: "Sim. Em edificações existentes ou consolidadas, realizamos o diagnóstico, cálculos de adequação e projeto de modernização ou instalação do sistema para atender as normas vigentes, visando a obtenção ou renovação do AVCB."
    },
    {
      question: "O Corpo de Bombeiros pode exigir adequação do sistema?",
      answer: "Certamente. Durante vistorias para o AVCB, caso o sistema apresente falhas nos testes de fluxo, grelhas ou pressão das portas, o CBPMESP emitirá um Comunique-se ou até indeferirá o processo até a plena correção estrutural e mecânica."
    },
    {
      question: "A DRD2 acompanha a aprovação do AVCB?",
      answer: "Sim. Nosso escopo vai do diagnóstico e elaboração do projeto até o protocolo, emissão de ART e suporte ativo durante qualquer exigência ou Comunique-se do Corpo de Bombeiros, com foco total na aprovação final."
    },
    {
      question: "Quais normas são consideradas no projeto?",
      answer: "Nossos projetos são estritamente direcionados pelo Decreto Estadual nº 69.118/2024, a Instrução Técnica IT 13 do CBPMESP, além das normas ABNT aplicáveis no dimensionamento de portas, dutos e insuflamento."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/projeto-escada-pressurizada-avcb-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Projeto de Escada Pressurizada",
        faqs: faqData.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Projeto de Escada Pressurizada", item: "/projeto-escada-pressurizada-avcb-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* 1. Hero Principal */}
      <section className="relative text-white overflow-hidden min-h-[550px] flex items-center bg-gray-900">
        <Image
          src="/images/page-escada-pressurizada.webp"
          alt="Projeto de Escada Pressurizada em São Paulo - DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-5xl py-20 flex flex-col items-center text-center">
          <span className="inline-block bg-red-600/30 text-red-100 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-4 border border-red-500/50 text-xs shadow-lg backdrop-blur-sm">
            Engenharia de Incêndio • Adequação de Rota de Fuga
          </span>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-lg text-white max-w-4xl">
            Projeto de Escada Pressurizada em São Paulo
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            Projeto, dimensionamento e adequação técnica para aprovação ágil do seu AVCB junto ao Corpo de Bombeiros, minimizando retrabalhos.
          </p>
          
          <div className="w-full flex justify-center mb-10">
            <ul className="space-y-4 inline-flex flex-col text-left">
              <li className="flex items-center text-lg text-gray-100 font-medium drop-shadow-md">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                Atendimento técnico especializado em SP
              </li>
              <li className="flex items-center text-lg text-gray-100 font-medium drop-shadow-md">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                Compatibilização integral às normativas do CBPMESP
              </li>
              <li className="flex items-center text-lg text-gray-100 font-medium drop-shadow-md">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                Suporte de ponta a ponta em possíveis "Comunique-se"
              </li>
            </ul>
          </div>

          <div className="flex w-full justify-center">
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center rounded-xl bg-primary px-10 py-4 text-xl font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-[#1EBE5A] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all w-full sm:w-auto"
            >
              Falar com engenheiro especialista no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Bloco explicando o serviço e SEO Local */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Segurança Técnica contra Inalação de Fumaça</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              O **projeto de escada pressurizada em São Paulo** é a espinha dorsal para garantir uma rota de fuga segura em edifícios de grande porte. O sistema cria uma zona de pressão positiva que impede ativamente a entrada de fumaça e gases tóxicos na escada de emergência (escada enclausurada à prova de fumaça tipo EP), preservando vidas e facilitando o acesso das equipes táticas dos bombeiros.
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-gray-700 font-medium shadow-sm">
              <MapPin className="w-5 h-5 text-primary" />
              <span>
                Atendemos projetos de escada pressurizada na **capital, Grande São Paulo, interior e litoral**, com suporte técnico conforme a complexidade da edificação.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bloco Técnico - Quando é exigida */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-secondary mb-6 leading-tight">
                Análise Técnica: Quando a regularização é exigida pelo CBPMESP?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  A exigência da escada pressurizada depende diretamente da análise rigorosa da ocupação, arquitetura, altura da edificação e características construtivas para o enquadramento perfeito nas Instruções Técnicas aplicáveis.
                </p>
                <p>
                  Em muitos casos, edificações de maior altura exigem a adoção contundente da **escada enclausurada à prova de fumaça tipo EP**, munida com um sistema de pressurização devidamente projetado, dimensionado e integralmente compatibilizado para a análise e aprovação do seu AVCB. Nossa estratégia técnica na elaboração visa, sobretudo, o enquadramento leal para **redução de erro de projeto e retrabalho.**
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/images/escada-pressurizada-esquema.jpg" 
                    alt="Esquema de projeto de escada pressurizada AVCB"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
                    DIAGRAMA DE PRESSÃO IT 13
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tipos de edifícios / Edificações atendidas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Para quais tipos de edificações elaboramos o projeto?</h2>
            <p className="text-gray-600 text-lg">Independente do porte da sua obra, compatibilizamos todo o dimensionamento de vazão.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Edifícios Residenciais Verticais", Icon: Building2 },
              { title: "Edifícios Comerciais", Icon: Store },
              { title: "Prédios Mistos", Icon: Building },
              { title: "Clínicas Médicas", Icon: Stethoscope },
              { title: "Complexos Hospitalares", Icon: Activity },
              { title: "Hotéis e Hospedagens", Icon: Hotel },
              { title: "Escolas e Universidades", Icon: GraduationCap },
              { title: "Alojamentos e Internatos", Icon: Briefcase },
              { title: "Edificações Existentes em Regularização", Icon: ClipboardCheck }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[120px]">
                <item.Icon className="w-8 h-8 text-primary mb-3 opacity-80" />
                <span className="font-semibold text-gray-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário injetado no alto/meio da página */}

      <ServiceClusterLinks currentSlug="/projeto-escada-pressurizada-avcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/projeto-escada-pressurizada-avcb-sao-paulo" />

      <LeadForm />

      {/* 5. O que entregamos (Premium) */}
      <section className="py-24 bg-[#090D18] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">O Que Entregamos no Projeto Executivo</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Tratamos o escopo de pressurização de forma profunda. Cada detalhe da ventilação é projetado não apenas para o papel, mas planejado para a compatibilização arquitetônica e sucesso da viabilização da obra e aprovação.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    "Dimensionamento de ventiladores",
                    "Cálculo de vazão, pressão e perdas de carga",
                    "Análise de infiltração e folgas de portas",
                    "Projeto de dutos, grelhas e registros",
                    "Memorial descritivo estruturado",
                    "Memorial de cálculo aprofundado",
                    "Plantas, cortes e detalhamentos",
                    "Compatibilização com arquitetura"
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 bg-secondary/80 border border-white/10 p-6 rounded-xl flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                  <p className="text-gray-200 font-semibold leading-snug">
                    Bônus Técnico: Suporte ativo no momento do protocolo e durante toda tramitação de exigências e "Comunique-se".
                  </p>
                </div>
             </div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                 src="/images/escada-pressurizada-real.jpg" 
                 alt="Casa de máquinas e ventilador de escada pressurizada"
                 width={700}
                 height={700}
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4 text-center">
                 <span className="text-sm font-bold tracking-widest uppercase text-white">Projeto Aplicado & Instalação Mecânica DRD2</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Erros Comuns */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Evite Erros Graves na Aprovação da Escada Pressurizada</h2>
            <p className="text-lg text-gray-600">
              Muitos projetos que chegam até nós reprovados carregam erros cruciais que atrasam todo o AVCB do condomínio. A DRD2 antecipa as falhas para garantir o deferimento sem sobressaltos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Ventilador Subdimensionado", desc: "A compra ou especificação de motoventiladores que falham em entregar as massas de ar exigidas pelo CBPMESP.", Icon: Fan },
              { title: "Memorial de Cálculo Incompleto", desc: "Falta de planilhas matemáticas confiáveis na IT 13 justificando vazamentos por juntas e frestas, gerando exigência imediata de analistas.", Icon: Calculator },
              { title: "Ausência de Análise de Infiltração", desc: "Ignorar o vazamento de pressão decorrente do tipo de vedação de folgas de portas corta-fogo (fator crítico).", Icon: Wind },
              { title: "Detalhamento Insuficiente", desc: "Plantas chapadas (sem cortes transversais) sobre as grelhas, dumpers e ramificações de dutos.", Icon: Ruler },
              { title: "Incompatibilidade com a Arquitetura", desc: "Colidir vigas, pilares e forros falsos com o trajeto enorme dos dutos planejados por projetistas inexperientes.", Icon: Hammer },
              { title: "Peças Gráficas Pobres", desc: "Desenhos sem escalas legíveis atrapalham e muitas vezes revoltam analistas resultando num indeferimento precoce.", Icon: FileX },
            ].map((err, id) => (
               <div key={id} className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col justify-start hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 border border-red-100">
                    <err.Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-secondary mb-2">{err.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{err.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Processo / Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Como funciona nosso processo de projeto</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Linha vertical */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2" />
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="md:w-[45%] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm text-right md:pr-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">1. Diagnóstico da Planta e Arquitetura</h3>
                  <p className="text-gray-600">Revisamos a rota de fuga para compreender alturas e necessidades primárias ditadas pela legislação.</p>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center z-10 my-4 md:my-0 shadow-md">
                   <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="md:w-[45%] bg-transparent p-6 md:pl-8 text-left hidden md:block" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="md:w-[45%] bg-transparent p-6 md:pr-8 text-right hidden md:block" />
                <div className="w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center z-10 my-4 md:my-0 shadow-md">
                   <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="md:w-[45%] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm text-left md:pl-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">2. Cálculos e Dimensionamentos Mecânicos</h3>
                  <p className="text-gray-600">Com o auxílio de softwares e normas, mensuramos perdas em vazamentos, dimensionamos áreas de grelha.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="md:w-[45%] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm text-right md:pr-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">3. Representação Gráfica (O Projeto)</h3>
                  <p className="text-gray-600">Materialização do estudo em plantas, cortes rigorosos de altura de caixas e quadros das folhas do bombeiro.</p>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center z-10 my-4 md:my-0 shadow-md">
                   <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="md:w-[45%] bg-transparent p-6 md:pl-8 text-left hidden md:block" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="md:w-[45%] bg-transparent p-6 md:pr-8 text-right hidden md:block" />
                <div className="w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center z-10 my-4 md:my-0 shadow-md">
                   <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="md:w-[45%] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm text-left md:pl-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">4. Submissão, Acompanhamento e ART</h3>
                  <p className="text-gray-600">Protocolamos via sistema Via Fácil com nossa assinatura por ART até o deferimento e acompanhamento prático.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Diferenciais DRD2 */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Por que escolher a Engenharia DRD2?</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A DRD2 conduziu o projeto e o protocolo com extrema segurança técnica, apoiando a resposta firme de adequações e guiando as edificações à completa regularização perante o Corpo de Bombeiros.
              </p>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold shadow hover:bg-[#1EBE5A] transition"
              >
                Falar com engenheiro especialista Agora
              </a>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Especialização Rígida", desc: "Atuação focada puramente em engenharia de incêndio no Estado de São Paulo.", Icon: Target },
                { title: "Domínio das ITs e NBRs", desc: "Cálculos fiéis ao CBPMESP IT-13 e exigências mecânicas da norma técnica ABNT.", Icon: BookOpen },
                { title: "Orientação à Aprovação", desc: "Estratégia comercial e técnica focada na solução do deferimento com o bombeiro final.", Icon: CheckSquare },
                { title: "Único Responsável Técnico", desc: "Sem repasses a desenhistas amadores. Do diagnóstico primário ao protocolo online.", Icon: HardHat },
              ].map((diff, id) => (
                <div key={id} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <diff.Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{diff.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SEO */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Dúvidas Frequentes sobre Projetos de Pressurização</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-primary/20 transition-all">
                <summary className="flex items-center justify-between p-6 font-bold text-secondary text-lg select-none">
                  {faq.question}
                  <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100 bg-gray-50/50">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Final Forte */}
      <section className="py-24 bg-red-700 bg-gradient-to-br from-red-800 to-red-600 text-center">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
              Solicite uma análise técnica preliminar do seu edifício
            </h2>
            <p className="text-xl text-red-100 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Fale agora com um engenheiro especialista em AVCB e escada pressurizada no WhatsApp. Reduza os riscos regulatórios com um projeto seguro e perfeitamente dimensionado.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-white text-primary font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all w-full sm:w-auto"
            >
              Falar Agora pelo WhatsApp
            </a>
            <p className="mt-6 text-sm text-red-200 font-medium tracking-widest uppercase">Atendimento humanizado • Retorno Ágil</p>
         </div>
      </section>
    </>
  );
}
