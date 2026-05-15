import Image from "next/image";
import {
  CheckCircle2, AlertTriangle, Map, Clock, ShieldX, RefreshCw, FileCheck,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "/renovacao-clcb-vila-olimpia-sao-paulo";
const _pageTitle = "Renovação de CLCB na Vila Olímpia SP | Engenheiro Especializado — DRD2";
const _pageDesc = "Renovação de CLCB na Vila Olímpia com engenheiro especializado. CLCB vencido? Regularize antes de interdição ou bloqueio do alvará. Cobertura Rua Olimpíadas, Rua Funchal, Av. Hélio Pellegrino e toda a região. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function RenovacaoClcbVilaOlimpiaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o prazo para renovar o CLCB vencido na Vila Olímpia?",
      answer: "Assim que o CLCB vence, o imóvel já está irregular perante o CBPMESP. Na Vila Olímpia, a renovação para ocupações de baixo risco até 750 m² leva de 15 a 45 dias. A DRD2 inicia o processo em até 48h após o diagnóstico técnico gratuito.",
    },
    {
      question: "A renovação de CLCB na Vila Olímpia exige obras?",
      answer: "Na maioria dos casos, não. Se os extintores estão no prazo, a sinalização está correta e as saídas estão desobstruídas, a renovação não exige obras. A DRD2 faz o diagnóstico gratuito para identificar qualquer pendência antes de protocolar.",
    },
    {
      question: "Tenho um bar ou restaurante na Vila Olímpia com CLCB vencido — quais os riscos?",
      answer: "Interdição imediata pelo CBPMESP, multa e bloqueio do alvará pela Prefeitura de São Paulo. A Vila Olímpia tem um dos maiores polos de vida noturna corporativa de São Paulo — a Rua Funchal e a Rua Olimpíadas são alvo frequente de vistoria noturna do CBPMESP. Interdição em plena sexta-feira à noite é um risco real.",
    },
    {
      question: "CLCB ou AVCB: qual meu imóvel na Vila Olímpia precisa?",
      answer: "CLCB é para edificações até 750 m² com atividades de baixo risco — restaurantes, bares, clínicas, boutiques, cafés, coworkings. AVCB é exigido para imóveis maiores ou de risco elevado. A DRD2 define qual certificado se aplica no diagnóstico gratuito.",
    },
    {
      question: "A DRD2 atende renovações urgentes de CLCB na Vila Olímpia?",
      answer: "Sim. Para CLCB vencido com risco de interdição iminente na Vila Olímpia, a DRD2 aciona protocolo de urgência — diagnóstico prioritário e início do processo em até 48h. Atendemos todo o bairro e a região de Itaim Bibi, Brooklin, Campo Belo, Pinheiros e Cidade Jardim.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Vila Olímpia",
    serviceName: "Renovação de CLCB na Vila Olímpia",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovação CLCB", item: "/renovacao-clcb-sao-paulo" },
      { name: "Zona Sul", item: "/renovacao-clcb-zona-sul-sao-paulo" },
      { name: "Vila Olímpia", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-4 border-red-600">
        <Image src="/images/page-clcb.webp" alt="Renovação de CLCB na Vila Olímpia" fill className="object-cover object-center opacity-20 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg">
              <AlertTriangle className="w-4 h-4" /> CLCB Vencido na Vila Olímpia — Ação Imediata
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Renovação de CLCB na Vila Olímpia:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Regularize Antes da Interdição</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl leading-relaxed">
              A Vila Olímpia concentra o polo de vida noturna corporativa mais movimentado de São Paulo.
              Rua Funchal e Rua Olimpíadas têm fiscalização noturna frequente do CBPMESP.
              CLCB vencido pode fechar seu estabelecimento no momento de maior movimento.
              A DRD2 regulariza em até 45 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-red-500/25 text-lg">
                <RefreshCw className="w-5 h-5" /> Renovar CLCB na Vila Olímpia
              </a>
              <a href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-400 hover:border-white text-slate-200 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-200">
                <FileCheck className="w-5 h-5" /> Diagnóstico Gratuito
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Engenheiro Responsável</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Diagnóstico em 48h</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Sem Obras Desnecessárias</span>
              <span className="flex items-center gap-2"><Map className="w-4 h-4 text-blue-400" /> Vila Olímpia · Itaim Bibi · Brooklin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quem precisa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            Quem Precisa de Renovação de CLCB na Vila Olímpia?
          </h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            A Vila Olímpia é um dos bairros com maior densidade de bares, restaurantes e serviços
            premium da cidade, impulsionados pela vizinhança com os escritórios corporativos da Faria Lima.
            Rua Funchal, Rua Olimpíadas, Rua Gomes de Carvalho e Av. Hélio Pellegrino concentram
            os estabelecimentos com maior demanda por regularização de CLCB.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Estabelecimentos que mais renovam na Vila Olímpia</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />Bares e casas noturnas na Rua Funchal e Rua Olimpíadas</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />Restaurantes e bistrôs na Rua Gomes de Carvalho</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />Clínicas médicas e odontológicas em salas comerciais</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />Studios de pilates, crossfit e academias boutique</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />Cafés e padarias premium no entorno das torres corporativas</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />Coworkings e espaços de escritório compartilhado</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Por que a Vila Olímpia tem fiscalização intensa?</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />Polo de vida noturna corporativa com alto fluxo de pessoas — CBPMESP faz vistorias noturnas regularmente</li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />Alta rotatividade de locatários comerciais mantém demanda constante por CLCB atualizado</li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />Padrão premium dos imóveis exige documentação completa — proprietários não toleram irregularidades</li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />Eventos e festas corporativas aumentam a ocupação e atraem fiscalização pontual</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "15–45 dias", label: "Prazo de renovação" },
              { value: "48h", label: "Início do processo" },
              { value: "750 m²", label: "Limite CLCB" },
              { value: "0", label: "Obras na maioria dos casos" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-900 text-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-red-400 mb-1">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">
            O Que Acontece com CLCB Vencido na Vila Olímpia?
          </h2>
          <p className="text-center text-slate-500 mb-10">Riscos reais para quem opera sem regularização</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: ShieldX, title: "Interdição pelo CBPMESP", desc: "Fiscais podem lacrar o bar ou restaurante durante o funcionamento — em plena noite de pico." },
              { icon: AlertTriangle, title: "Bloqueio do Alvará", desc: "A Prefeitura de São Paulo bloqueia o alvará na renovação anual se o CLCB estiver vencido." },
              { icon: Clock, title: "Multa e Auto de Infração", desc: "O CBPMESP aplica multa por irregularidade, e a reincidência agrava os valores e pode gerar cassação." },
              { icon: FileCheck, title: "Rescisão Contratual", desc: "Imóveis premium na Vila Olímpia têm cláusulas de conformidade — CLCB vencido pode ensejar rescisão." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
                <item.icon className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: RefreshCw, title: "CLCB próximo ao vencimento", desc: "Inicie a renovação com 60 dias de antecedência para não ter lacuna de regularidade." },
              { icon: Map, title: "Abertura de novo ponto", desc: "Bar, restaurante ou clínica na Vila Olímpia precisa de CLCB antes de iniciar atividades." },
              { icon: FileCheck, title: "Renovação de contrato", desc: "Proprietários exigem CLCB válido na assinatura ou renovação do contrato de locação." },
              { icon: CheckCircle2, title: "Evento ou festa corporativa", desc: "Uso do espaço para eventos com público aumentado exige CLCB atualizado." },
            ].map((item) => (
              <div key={item.title} className="bg-green-50 rounded-xl p-5 border border-green-200">
                <item.icon className="w-7 h-7 text-green-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8">
                Como Funciona a Renovação de CLCB na Vila Olímpia
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Diagnóstico Técnico Gratuito (48h)", desc: "Engenheiro DRD2 analisa o imóvel, verifica extintores, sinalização e saídas de emergência. Identifica pendências antes do protocolo — sem surpresas." },
                  { step: "02", title: "Projeto e Protocolo no CBPMESP", desc: "Elaboramos o projeto conforme as Instruções Técnicas do CBPMESP vigentes e protocolamos o processo de renovação." },
                  { step: "03", title: "Acompanhamento do Processo", desc: "Acompanhamos o processo junto ao CBPMESP e respondemos exigências técnicas, se houver, sem custo adicional." },
                  { step: "04", title: "Emissão do CLCB Renovado", desc: "Após aprovação, o CLCB é emitido pelo CBPMESP e entregue ao proprietário. Estabelecimento regularizado, alvará garantido." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="font-black text-slate-900 text-xl mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-amber-500" /> Prazo de Renovação na Vila Olímpia
              </h3>
              <div className="space-y-4 text-slate-700">
                <p>Para edificações até <strong>750 m²</strong> de baixo risco de incêndio, o processo de renovação de CLCB leva tipicamente <strong>15 a 45 dias</strong> após o protocolo no CBPMESP.</p>
                <p>Se extintores, sinalização e saídas de emergência estão em ordem, <strong>não há obras</strong>. A DRD2 identifica e resolve qualquer pendência antes do protocolo.</p>
                <p>Para CLCB vencido com risco de interdição iminente, acionamos <strong>protocolo de urgência</strong> — início em até 48h após o diagnóstico.</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full justify-center">
                <RefreshCw className="w-4 h-4" /> Iniciar Renovação Urgente
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="diagnostico" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-black mb-4">Diagnóstico Gratuito para Renovação de CLCB na Vila Olímpia</h2>
              <p className="text-slate-300 mb-6">Preencha o formulário ou chame no WhatsApp. Um engenheiro DRD2 responde em até 48h com o diagnóstico técnico e o caminho mais rápido para regularizar.</p>
              <ul className="space-y-3 text-slate-300">
                {["Diagnóstico técnico gratuito", "Sem obras desnecessárias", "Engenheiro responsável pelo processo", "Cobertura: Vila Olímpia e toda Zona Sul"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "Tenho um bar na Rua Funchal e o CBPMESP apareceu em uma quinta-feira à noite. Meu CLCB estava vencido há 5 meses. Liguei para a DRD2 no dia seguinte, diagnóstico em 48h, sem obras, e em 27 dias o CLCB estava renovado. Não precisei fechar.",
          author: "Lucas Magalhães",
          role: "Proprietário de bar, Rua Funchal — Vila Olímpia",
        }}
      />

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Perguntas Frequentes — CLCB Vila Olímpia</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-800 hover:bg-slate-100 transition-colors list-none">
                  {item.question}
                  <span className="ml-4 text-red-500 group-open:rotate-180 transition-transform text-xl flex-shrink-0">▾</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Cobertura: Vila Olímpia e Região</h2>
          <p className="text-center text-slate-500 mb-8 max-w-2xl mx-auto">
            Além da Vila Olímpia, a DRD2 atende renovações de CLCB nos bairros vizinhos da Zona Sul e Oeste.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Itaim Bibi", "Brooklin", "Campo Belo", "Pinheiros", "Cidade Jardim", "Vila Nova Conceição", "Moema", "Chácara Santo Antônio"].map((bairro) => (
              <div key={bairro} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-slate-700 border border-slate-200 shadow-sm">
                {bairro}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm">
            Não encontrou seu bairro? A DRD2 atende toda a cidade de São Paulo e Grande São Paulo.{" "}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">Consulte pelo WhatsApp.</a>
          </p>
        </div>
      </section>

      <NeighborhoodSilo currentSlug={_slug} />

      <CtaWhatsApp label="CLCB Vencido na Vila Olímpia? Fale com um Engenheiro Agora" />

      <ServiceClusterLinks currentSlug={_slug} />
      <ServiceBlogLinks currentSlug={_slug} />

      <InternalLinksBlock currentSlug={_slug} mode="bairro" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="py-4 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li><a href="/" className="hover:text-red-600 transition-colors">Home</a></li>
            <li className="text-slate-300">/</li>
            <li><a href="/renovacao-clcb-sao-paulo" className="hover:text-red-600 transition-colors">Renovação CLCB</a></li>
            <li className="text-slate-300">/</li>
            <li><a href="/renovacao-clcb-zona-sul-sao-paulo" className="hover:text-red-600 transition-colors">Zona Sul</a></li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-800 font-medium">Vila Olímpia</li>
          </ol>
        </div>
      </nav>
    </>
  );
}
