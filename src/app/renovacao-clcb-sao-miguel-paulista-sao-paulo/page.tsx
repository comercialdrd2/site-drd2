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
const slug = "renovacao-clcb-sao-miguel-paulista-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB em São Miguel Paulista | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento em São Miguel Paulista com agilidade. Farmácias, clínicas, comércios e restaurantes na Av. São Miguel e arredores. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB em São Miguel Paulista | DRD2 Engenharia",
    description:
      "CLCB vencido em São Miguel Paulista? Atendemos comércios, clínicas e serviços com agilidade. Evite multas e interdição.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${BASE_URL}/images/page-clcb.webp`, width: 1200, height: 630 }],
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB em São Miguel Paulista",
  description:
    "Serviço especializado de renovação do Certificado de Licença do Corpo de Bombeiros para estabelecimentos em São Miguel Paulista, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Leste", item: `${BASE_URL}/renovacao-clcb-zona-leste-sao-paulo` },
    { name: "São Miguel Paulista", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "Estabelecimentos em São Miguel Paulista precisam de CLCB?",
      answer:
        "Sim. Todo comércio, farmácia, clínica ou serviço com até 750 m² e baixo risco de incêndio em São Miguel Paulista precisa do CLCB emitido pelo CBPMESP.",
    },
    {
      question: "O metrô São Miguel Paulista aumenta a fiscalização?",
      answer:
        "Sim. O polo comercial em torno do metrô São Miguel Paulista é alvo de fiscalizações periódicas do CBPMESP, especialmente em períodos de alta movimentação.",
    },
    {
      question: "A DRD2 atende São Miguel Paulista?",
      answer:
        "Sim. Atendemos São Miguel Paulista, Ermelino Matarazzo, Itaim Paulista, Penha e toda a Zona Leste norte.",
    },
    {
      question: "Quanto custa a renovação do CLCB?",
      answer:
        "O custo varia conforme o tamanho do estabelecimento, a atividade e as adequações necessárias. Fazemos orçamento gratuito após visita técnica.",
    },
    {
      question: "Posso continuar operando com o CLCB em processo de renovação?",
      answer:
        "Sim, desde que o processo esteja devidamente protocolado. O protocolo de entrada no CBPMESP serve como comprovante temporário durante a análise.",
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
            CLCB Vencido em São Miguel Paulista — Regularize Agora
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Renovação de CLCB em São Miguel Paulista: Proteja Seu Negócio
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            São Miguel Paulista tem um polo comercial dinâmico ao redor do metrô — farmácias,
            clínicas, supermercados e serviços que precisam do CLCB em dia. A DRD2 resolve do
            projeto à aprovação no CBPMESP.
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
            <span>✓ Atendimento em São Miguel Paulista</span>
            <span>✓ Aprovação garantida no CBPMESP</span>
            <span>✓ Sem burocracia para o cliente</span>
          </div>
        </div>
      </section>

      {/* Quem Precisa */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Quem Precisa Renovar o CLCB em São Miguel Paulista?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            O eixo da Av. São Miguel e o entorno do metrô formam um dos maiores polos comerciais
            da Zona Leste norte — todos os estabelecimentos são obrigados a manter o CLCB válido.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Estabelecimentos da região:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Farmácias e drogarias na Av. São Miguel",
                  "Clínicas médicas e odontológicas",
                  "Supermercados e mercearias de bairro",
                  "Restaurantes e lanchonetes populares",
                  "Lojas de roupa e calçados em galerias",
                  "Salões de beleza e barbearias",
                  "Academias e centros de dança",
                  "Serviços de saúde próximos ao Hospital São Miguel",
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
                  "Metrô São Miguel Paulista: alto fluxo e fiscalização periódica",
                  "Hospital São Miguel na região: Vigilância Sanitária ativa",
                  "Galerias comerciais: fiscalização coletiva que exige CLCB individual",
                  "Contratos de locação em galerias renovados anualmente",
                  "Planos de saúde auditam credenciados da Zona Leste norte",
                  "Av. São Miguel: operações surpresa do Corpo de Bombeiros",
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
            O Que Acontece com CLCB Vencido em São Miguel Paulista?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: "🚨",
                title: "Interdição imediata",
                desc: "O Corpo de Bombeiros pode lacrar o estabelecimento, encerrando todas as atividades.",
              },
              {
                icon: "💸",
                title: "Multas pesadas",
                desc: "Infrações custam entre R$ 500 e R$ 50.000, com risco de reincidência.",
              },
              {
                icon: "🏥",
                title: "Perda de credenciamento",
                desc: "Planos de saúde cancelam contratos de clínicas sem CLCB válido.",
              },
              {
                icon: "📋",
                title: "Rescisão de locação",
                desc: "Proprietários de galerias podem rescindir o contrato por descumprimento contratual.",
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
            Quando renovar o CLCB em São Miguel Paulista?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Certificado com vencimento nos próximos 90 dias",
              "Renovação ou assinatura de contrato de locação em galeria",
              "Credenciamento ou auditoria de plano de saúde",
              "Abertura de novo estabelecimento ou filial",
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
            Como Renovamos o Seu CLCB em São Miguel Paulista
          </h2>
          <ol className="space-y-6 mb-10">
            {[
              {
                step: "1",
                title: "Visita técnica gratuita",
                desc: "Nosso engenheiro visita seu estabelecimento em São Miguel Paulista para levantamento completo.",
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
                desc: "Você recebe o certificado válido, pronto para planos de saúde, locadores e fiscais.",
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
            Solicite uma Avaliação Gratuita em São Miguel Paulista
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
              alt="Renovação de CLCB em São Miguel Paulista São Paulo"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <SocialProof
              testimonial={{
                text: "Tenho uma farmácia na Av. São Miguel há 12 anos e nunca tinha ouvido falar de CLCB até receber uma notificação do Corpo de Bombeiros. A DRD2 veio no mesmo dia, explicou tudo e resolveu. Agora renovo antes de vencer.",
                author: "Edson Pereira",
                role: "Proprietário de farmácia · Av. São Miguel, São Miguel Paulista",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dúvidas Frequentes — CLCB em São Miguel Paulista
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Estabelecimentos em São Miguel Paulista precisam de CLCB?",
                a: "Sim. Todo comércio, farmácia, clínica ou serviço com até 750 m² e baixo risco de incêndio em São Miguel Paulista precisa do CLCB emitido pelo CBPMESP.",
              },
              {
                q: "O metrô São Miguel Paulista aumenta a fiscalização?",
                a: "Sim. O polo comercial em torno do metrô São Miguel Paulista é alvo de fiscalizações periódicas do CBPMESP, especialmente em períodos de alta movimentação.",
              },
              {
                q: "A DRD2 atende São Miguel Paulista?",
                a: "Sim. Atendemos São Miguel Paulista, Ermelino Matarazzo, Itaim Paulista, Penha e toda a Zona Leste norte.",
              },
              {
                q: "Quanto custa a renovação do CLCB?",
                a: "O custo varia conforme o tamanho do estabelecimento, a atividade e as adequações necessárias. Fazemos orçamento gratuito após visita técnica.",
              },
              {
                q: "Posso continuar operando com o CLCB em processo de renovação?",
                a: "Sim, desde que o processo esteja devidamente protocolado. O protocolo de entrada no CBPMESP serve como comprovante temporário durante a análise.",
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
            Cobertura na Região de São Miguel Paulista
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Atendemos São Miguel Paulista e toda a Zona Leste norte de São Paulo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "São Miguel Paulista",
              "Ermelino Matarazzo",
              "Itaim Paulista",
              "Penha",
              "Vila Matilde",
              "Artur Alvim",
              "Guaianases",
              "Itaquera",
              "Cidade Tiradentes",
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
      <CtaWhatsApp label="Renovar CLCB em São Miguel Paulista Agora" centered />
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
          <Link href="/renovacao-clcb-zona-leste-sao-paulo" className="hover:text-red-600">Zona Leste</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">São Miguel Paulista</span>
        </div>
      </nav>
    </>
  );
}
