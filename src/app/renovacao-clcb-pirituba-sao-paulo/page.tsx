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

const BASE_URL = "https://www.drd2.com.br";
const slug = "renovacao-clcb-pirituba-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB em Pirituba | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento em Pirituba com agilidade. Comércios, clínicas e serviços na Av. Pirituba e Rua Comendador Martinelli. Aprovação garantida no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB em Pirituba | DRD2 Engenharia",
    description:
      "CLCB vencido em Pirituba? Atendemos comércios, clínicas e serviços na Zona Noroeste com agilidade. Evite multas e interdição.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${BASE_URL}/images/page-clcb.webp`, width: 1200, height: 630 }],
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB em Pirituba",
  description:
    "Serviço especializado de renovação do Certificado de Licença do Corpo de Bombeiros para estabelecimentos em Pirituba, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Norte", item: `${BASE_URL}/renovacao-clcb-zona-norte-sao-paulo` },
    { name: "Pirituba", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "Estabelecimentos em Pirituba precisam de CLCB?",
      answer:
        "Sim. Todo comércio, clínica ou serviço com até 750 m² e baixo risco de incêndio em Pirituba precisa do CLCB emitido pelo CBPMESP.",
    },
    {
      question: "A linha 7-Rubi do metrô em Pirituba afeta a fiscalização?",
      answer:
        "Sim. A estação Pirituba da CPTM intensifica o fluxo comercial e aumenta as operações de fiscalização do CBPMESP na região.",
    },
    {
      question: "A DRD2 atende Pirituba?",
      answer:
        "Sim. Atendemos Pirituba, Jaraguá, Perus, Freguesia do Ó, Brasilândia e toda a Zona Norte e Noroeste de São Paulo.",
    },
    {
      question: "Meu bar em Pirituba precisa de CLCB?",
      answer:
        "Sim. Bares, restaurantes e qualquer estabelecimento que receba público com até 750 m² precisam de CLCB válido para operar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB em Pirituba?",
      answer:
        "Em média 15 a 30 dias úteis após o protocolo no CBPMESP. Recomendamos iniciar o processo 90 dias antes do vencimento.",
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
            CLCB Vencido em Pirituba — Regularize Agora
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Renovação de CLCB em Pirituba: Regularize e Evite Interdição
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Pirituba cresceu como polo comercial da Zona Noroeste ao redor da CPTM. Farmácias,
            clínicas, mercados e restaurantes da Av. Pirituba precisam do CLCB válido. A DRD2
            Engenharia cuida de tudo — do projeto à aprovação.
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
            <span>✓ Atendimento em Pirituba e arredores</span>
            <span>✓ Aprovação garantida no CBPMESP</span>
            <span>✓ Sem burocracia para o cliente</span>
          </div>
        </div>
      </section>

      {/* Quem Precisa */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Quem Precisa Renovar o CLCB em Pirituba?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            A estação CPTM de Pirituba catalisou o desenvolvimento comercial da Av. Pirituba
            e da Rua Comendador Martinelli — todos os estabelecimentos precisam do CLCB válido.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Estabelecimentos da região:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Farmácias e drogarias na Av. Pirituba",
                  "Clínicas médicas e odontológicas",
                  "Supermercados e atacarejos de bairro",
                  "Bares e restaurantes populares",
                  "Lojas de roupa e calçados em galerias",
                  "Academias e centros esportivos",
                  "Escolas e cursos preparatórios",
                  "Serviços automotivos e oficinas",
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
                  "CPTM Pirituba: alto fluxo e visibilidade para fiscais",
                  "Rua Comendador Martinelli: corredor comercial com fiscalização periódica",
                  "Galerias populares com muitos locatários — cada um é individualmente responsável",
                  "Contratos de locação renovados anualmente: proprietários cobram CLCB",
                  "Crescimento de clínicas populares na região: auditoria de planos de saúde",
                  "Bares próximos à estação: risco de fiscalização em eventos",
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
            O Que Acontece com CLCB Vencido em Pirituba?
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
                desc: "Proprietários podem rescindir o contrato de galeria por descumprimento legal.",
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
            Quando renovar o CLCB em Pirituba?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Certificado com vencimento nos próximos 90 dias",
              "Renovação ou assinatura de contrato de locação",
              "Credenciamento ou auditoria de plano de saúde",
              "Abertura de nova unidade ou expansão do negócio",
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
            Como Renovamos o Seu CLCB em Pirituba
          </h2>
          <ol className="space-y-6 mb-10">
            {[
              {
                step: "1",
                title: "Visita técnica gratuita",
                desc: "Nosso engenheiro visita seu estabelecimento em Pirituba para levantamento completo.",
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
            Solicite uma Avaliação Gratuita em Pirituba
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
              alt="Renovação de CLCB em Pirituba São Paulo"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <SocialProof
              testimonial={{
                text: "Tenho uma clínica odontológica perto da estação de Pirituba. O plano de saúde pediu o CLCB para credenciamento e eu nem sabia que precisava. A DRD2 foi super rápida — resolveu em menos de três semanas e consegui o credenciamento.",
                author: "Dra. Michele Souza",
                role: "Cirurgiã-dentista · Rua Comendador Martinelli, Pirituba",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dúvidas Frequentes — CLCB em Pirituba
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Estabelecimentos em Pirituba precisam de CLCB?",
                a: "Sim. Todo comércio, clínica ou serviço com até 750 m² e baixo risco de incêndio em Pirituba precisa do CLCB emitido pelo CBPMESP.",
              },
              {
                q: "A linha 7-Rubi do metrô em Pirituba afeta a fiscalização?",
                a: "Sim. A estação Pirituba da CPTM intensifica o fluxo comercial e aumenta as operações de fiscalização do CBPMESP na região.",
              },
              {
                q: "A DRD2 atende Pirituba?",
                a: "Sim. Atendemos Pirituba, Jaraguá, Perus, Freguesia do Ó, Brasilândia e toda a Zona Norte e Noroeste de São Paulo.",
              },
              {
                q: "Meu bar em Pirituba precisa de CLCB?",
                a: "Sim. Bares, restaurantes e qualquer estabelecimento que receba público com até 750 m² precisam de CLCB válido para operar legalmente.",
              },
              {
                q: "Qual o prazo para renovar o CLCB em Pirituba?",
                a: "Em média 15 a 30 dias úteis após o protocolo no CBPMESP. Recomendamos iniciar o processo 90 dias antes do vencimento.",
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
            Cobertura na Região de Pirituba
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Atendemos Pirituba e toda a Zona Norte e Noroeste de São Paulo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Pirituba",
              "Jaraguá",
              "Perus",
              "Freguesia do Ó",
              "Brasilândia",
              "Casa Verde",
              "Limão",
              "Cachoeirinha",
              "Lauzane Paulista",
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
      <CtaWhatsApp label="Renovar CLCB em Pirituba Agora" centered />
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
          <Link href="/renovacao-clcb-zona-norte-sao-paulo" className="hover:text-red-600">Zona Norte</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Pirituba</span>
        </div>
      </nav>
    </>
  );
}
