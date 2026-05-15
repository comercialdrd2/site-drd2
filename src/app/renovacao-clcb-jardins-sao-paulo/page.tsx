import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMasterSchema } from "@/components/JsonLD";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import LeadForm from "@/components/LeadForm";
import SocialProof from "@/components/SocialProof";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const BASE_URL = "https://www.drd2engenharia.com.br";
const slug = "renovacao-clcb-jardins-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB nos Jardins | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento nos Jardins (Jardim Paulista, Jardim América, Cerqueira César) com discrição e agilidade. Clínicas premium, boutiques e restaurantes na Rua Oscar Freire e Al. Santos. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB nos Jardins | DRD2 Engenharia",
    description:
      "CLCB vencido nos Jardins? Atendemos clínicas, boutiques e restaurantes de alto padrão com discrição e agilidade. Evite multas e interdição.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${BASE_URL}/images/page-clcb.webp`, width: 1200, height: 630 }],
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB nos Jardins",
  description:
    "Serviço especializado de renovação do Certificado de Licença do Corpo de Bombeiros para estabelecimentos nos Jardins e Cerqueira César, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Jardins", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "Clínicas médicas nos Jardins precisam de CLCB?",
      answer:
        "Sim. Clínicas com até 750 m² e atividades de baixo risco de incêndio se enquadram no CLCB simplificado do CBPMESP. Planos de saúde também exigem o documento para credenciamento.",
    },
    {
      question: "Boutiques e lojas na Rua Oscar Freire precisam de CLCB?",
      answer:
        "Sim. Lojas de varejo com até 750 m² se enquadram no CLCB. Lojas maiores ou em galeria podem ter requisitos distintos — avaliamos cada caso.",
    },
    {
      question: "A DRD2 atende os Jardins com discrição?",
      answer:
        "Sim. Nossos profissionais atendem os Jardins, Cerqueira César, Itaim Bibi e Pinheiros com a discrição e o padrão de serviço exigidos pela região.",
    },
    {
      question: "Qual o impacto de uma interdição nos Jardins?",
      answer:
        "Além das multas, a interdição em um bairro premium causa danos à reputação e pode afetar contratos com redes internacionais de franquia ou acordos corporativos.",
    },
    {
      question: "Como proteger meu negócio nos Jardins contra interdições?",
      answer:
        "Mantenha o CLCB sempre renovado antes do vencimento, faça revisões anuais dos extintores e verifique rotas de saída. Nossa equipe faz diagnóstico preventivo.",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            CLCB Vencido nos Jardins — Regularize com Discrição
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Renovação de CLCB nos Jardins: Clínicas, Boutiques e Restaurantes em Dia
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Os Jardins reúnem o endereço mais valorizado do varejo e da medicina privada em São Paulo.
            A DRD2 Engenharia garante sua conformidade com o CBPMESP com agilidade e sem
            comprometer a imagem do seu estabelecimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaWhatsApp
              label="Solicitar Orçamento Grátis"
              variant="primary"
              size="lg"
              centered
            />
            <Link
              href="#lead-form"
              className="bg-white text-red-700 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition text-lg"
            >
              Falar com Engenheiro
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-red-100">
            <span>✓ Atendimento nos Jardins e Cerqueira César</span>
            <span>✓ Aprovação garantida no CBPMESP</span>
            <span>✓ Serviço discreto e profissional</span>
          </div>
        </div>
      </section>

      {/* Quem Precisa */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Quem Precisa Renovar o CLCB nos Jardins?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Da Rua Oscar Freire à Alameda Santos, os Jardins concentram o mais sofisticado
            ecossistema comercial de São Paulo — e todos os estabelecimentos estão sujeitos
            à exigência do CBPMESP.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Estabelecimentos da região:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Clínicas médicas e consultórios premium na Al. Santos",
                  "Boutiques e lojas de grife na Rua Oscar Freire",
                  "Restaurantes e bistrôs na Rua Haddock Lobo",
                  "Spas, clínicas de estética e dermatologia",
                  "Galeries e espaços culturais no Cerqueira César",
                  "Franquias internacionais e redes de varejo",
                  "Cafeterias e doceiras especiais",
                  "Escritórios de advocacia e consultoria",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Por que o risco é alto aqui?
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Vizinhança da Av. Paulista: fiscalização municipal e estadual intensa",
                  "Franquias internacionais exigem conformidade total de incêndio",
                  "Planos de saúde premium auditam clínicas dos Jardins regularmente",
                  "Alto valor do metro quadrado — interdição gera prejuízo enorme",
                  "Contratos de locação de alto padrão com cláusulas rígidas de conformidade",
                  "Público exigente: notícias de irregularidade afetam reputação diretamente",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">▲</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "28+", label: "anos de exigência CLCB em SP" },
              { num: "≤750m²", label: "área elegível para CLCB" },
              { num: "72h", label: "prazo médio para protocolo" },
              { num: "100%", label: "aprovação garantida" },
            ].map((s) => (
              <div key={s.label} className="bg-red-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-extrabold text-red-600">{s.num}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            O Que Acontece com CLCB Vencido nos Jardins?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: "🚨",
                title: "Interdição com repercussão",
                desc: "Uma interdição nos Jardins tem ampla repercussão — clientes de alto padrão não voltam após notícias de irregularidade.",
              },
              {
                icon: "💸",
                title: "Multas pesadas",
                desc: "Infrações custam entre R$ 500 e R$ 50.000, com risco de reincidência.",
              },
              {
                icon: "🏥",
                title: "Cancelamento de credenciamentos",
                desc: "Planos de saúde premium cancelam contratos de clínicas sem CLCB válido.",
              },
              {
                icon: "📋",
                title: "Rescisão de contrato premium",
                desc: "Locadores e franqueadores cancelam contratos de alto valor por descumprimento legal.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-red-100"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">
            Quando renovar o CLCB nos Jardins?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Certificado com vencimento nos próximos 90 dias",
              "Credenciamento ou auditoria de plano de saúde premium",
              "Renovação de contrato de locação ou contrato de franquia",
              "Abertura de nova unidade ou reforma no espaço",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <span className="text-gray-700 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Como Renovamos o Seu CLCB nos Jardins
          </h2>
          <ol className="space-y-6 mb-10">
            {[
              {
                step: "1",
                title: "Visita técnica discreta",
                desc: "Nosso engenheiro visita seu estabelecimento nos Jardins com discrição e sem impactar a operação.",
              },
              {
                step: "2",
                title: "Projeto e memorial descritivo",
                desc: "Elaboramos toda a documentação técnica conforme as normas do CBPMESP.",
              },
              {
                step: "3",
                title: "Protocolo no Corpo de Bombeiros",
                desc: "Damos entrada no processo e acompanhamos cada etapa da análise técnica.",
              },
              {
                step: "4",
                title: "Emissão do CLCB renovado",
                desc: "Você recebe o certificado válido, pronto para planos de saúde, locadores e franqueadores.",
              },
            ].map((p) => (
              <li key={p.step} className="flex gap-5 items-start">
                <span className="bg-red-600 text-white text-xl font-extrabold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 text-center">
            <p className="font-bold text-amber-800 text-lg mb-1">
              Prazo médio: 15 a 30 dias úteis após protocolo
            </p>
            <p className="text-amber-700 text-sm">
              Não espere o CLCB vencer — processos têm prazos internos e multas por atraso.
              Entre em contato hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-14 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Solicite uma Avaliação Gratuita nos Jardins
          </h2>
          <p className="text-gray-300">
            Preencha o formulário e um engenheiro entra em contato sem compromisso.
          </p>
        </div>
        <LeadForm />
      </section>

      {/* Imagem + SocialProof */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/page-clcb.webp"
              alt="Renovação de CLCB nos Jardins São Paulo"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <SocialProof
              testimonial={{
                text: "Tenho uma clínica de dermatologia na Al. Santos e o CLCB venceu durante uma auditoria do plano de saúde. A DRD2 resolveu em tempo recorde — a equipe foi discreta e eficiente. Mantive meu credenciamento sem interrupção.",
                author: "Dra. Renata Vasconcelos",
                role: "Dermatologista · Alameda Santos, Jardins",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dúvidas Frequentes — CLCB nos Jardins
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Clínicas médicas nos Jardins precisam de CLCB?",
                a: "Sim. Clínicas com até 750 m² e atividades de baixo risco de incêndio se enquadram no CLCB simplificado do CBPMESP. Planos de saúde também exigem o documento para credenciamento.",
              },
              {
                q: "Boutiques e lojas na Rua Oscar Freire precisam de CLCB?",
                a: "Sim. Lojas de varejo com até 750 m² se enquadram no CLCB. Lojas maiores ou em galeria podem ter requisitos distintos — avaliamos cada caso.",
              },
              {
                q: "A DRD2 atende os Jardins com discrição?",
                a: "Sim. Nossos profissionais atendem os Jardins, Cerqueira César, Itaim Bibi e Pinheiros com a discrição e o padrão de serviço exigidos pela região.",
              },
              {
                q: "Qual o impacto de uma interdição nos Jardins?",
                a: "Além das multas, a interdição em um bairro premium causa danos à reputação e pode afetar contratos com redes internacionais de franquia ou acordos corporativos.",
              },
              {
                q: "Como proteger meu negócio nos Jardins contra interdições?",
                a: "Mantenha o CLCB sempre renovado antes do vencimento, faça revisões anuais dos extintores e verifique rotas de saída. Nossa equipe faz diagnóstico preventivo.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 group"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Cobertura na Região dos Jardins
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Atendemos os Jardins e todos os bairros vizinhos do eixo Paulista–Pinheiros.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Jardim Paulista",
              "Jardim América",
              "Cerqueira César",
              "Itaim Bibi",
              "Pinheiros",
              "Vila Nova Conceição",
              "Consolação",
              "Bela Vista",
              "Moema",
            ].map((b) => (
              <span
                key={b}
                className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <NeighborhoodSilo currentSlug={slug} />
      <CtaWhatsApp label="Renovar CLCB nos Jardins Agora" centered />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />

      {/* Breadcrumb */}
      <nav className="py-4 px-4 bg-gray-100 text-sm text-gray-500">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 items-center">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/renovacao-clcb-sao-paulo" className="hover:text-red-600">Renovação CLCB</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Jardins</span>
        </div>
      </nav>
    </>
  );
}
