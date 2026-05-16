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
const slug = "renovacao-clcb-butanta-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Butantã | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Butantã com agilidade. Clínicas, restaurantes, livrarias e serviços próximos à USP e ao metrô Butantã. Aprovação garantida no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Butantã | DRD2 Engenharia",
    description:
      "CLCB vencido no Butantã? Atendemos clínicas, restaurantes e comércios próximos à USP com agilidade. Evite multas e interdição.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${BASE_URL}/images/page-clcb.webp`, width: 1200, height: 630 }],
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Butantã",
  description:
    "Serviço especializado de renovação do Certificado de Licença do Corpo de Bombeiros para estabelecimentos no Butantã, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Oeste", item: `${BASE_URL}/renovacao-clcb-zona-oeste-sao-paulo` },
    { name: "Butantã", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "Estabelecimentos no Butantã próximos à USP precisam de CLCB?",
      answer:
        "Sim. Clínicas, restaurantes, livrarias e comércios com até 750 m² e baixo risco de incêndio precisam do CLCB independentemente da proximidade com a USP.",
    },
    {
      question: "O metrô Butantã (Linha 4) aumenta a fiscalização?",
      answer:
        "Sim. A estação Butantã da Linha 4 intensificou o desenvolvimento comercial da Av. Vital Brasil e entorno, elevando a frequência de operações do CBPMESP na região.",
    },
    {
      question: "A DRD2 atende o Butantã?",
      answer:
        "Sim. Atendemos todo o Butantã, Rio Pequeno, Morumbi, Pinheiros, Raposo Tavares e toda a Zona Oeste.",
    },
    {
      question: "Clínicas universitárias e laboratórios precisam de CLCB?",
      answer:
        "Estabelecimentos privados próximos à USP com até 750 m² precisam de CLCB. Unidades dentro do campus USP têm regime próprio — avaliamos caso a caso.",
    },
    {
      question: "Quanto tempo leva a renovação no Butantã?",
      answer:
        "Em média 15 a 30 dias úteis após o protocolo no CBPMESP. Recomendamos iniciar 90 dias antes do vencimento.",
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
            CLCB Vencido no Butantã — Regularize Agora
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Renovação de CLCB no Butantã: Clínicas, Restaurantes e Comércios em Dia
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            O Butantã concentra um polo de serviços e alimentação ao redor da USP e do metrô
            Butantã. Clínicas, restaurantes e livrarias precisam do CLCB válido. A DRD2
            Engenharia resolve do projeto à aprovação no CBPMESP.
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
            <span>✓ Atendimento no Butantã e arredores</span>
            <span>✓ Aprovação garantida no CBPMESP</span>
            <span>✓ Sem burocracia para o cliente</span>
          </div>
        </div>
      </section>

      {/* Quem Precisa */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Quem Precisa Renovar o CLCB no Butantã?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            A USP e o metrô Butantã geraram um ecossistema de serviços, saúde e alimentação
            na Av. Vital Brasil e Rua Butantã — todos sob obrigação do CBPMESP.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Estabelecimentos da região:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Clínicas médicas e consultórios próximos ao Hospital Universitário",
                  "Restaurantes e lanchonetes na Av. Vital Brasil",
                  "Livrarias e papelarias universitárias",
                  "Farmácias e laboratórios de análises clínicas",
                  "Academias e centros de reabilitação",
                  "Cafeterias e bares estudantis",
                  "Serviços de coworking e escritórios",
                  "Clínicas odontológicas e de reabilitação",
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
                  "Metrô Butantã Linha 4: alto fluxo e visibilidade para fiscais do CBPMESP",
                  "Hospital Universitário: Vigilância Sanitária ativa na vizinhança",
                  "Crescimento acelerado após o metrô: novos estabelecimentos sem regularização",
                  "Clínicas credenciadas: auditoria de planos de saúde frequente",
                  "Imóveis residenciais convertidos para uso comercial sem adequação",
                  "Contratos de locação no entorno da USP com cláusula de conformidade",
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
            O Que Acontece com CLCB Vencido no Butantã?
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
                desc: "Planos de saúde cancelam contratos de clínicas e consultórios irregulares.",
              },
              {
                icon: "📋",
                title: "Rescisão de locação",
                desc: "Locadores cancelam contratos por descumprimento de obrigação legal.",
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
            Quando renovar o CLCB no Butantã?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Certificado com vencimento nos próximos 90 dias",
              "Renovação ou assinatura de contrato de locação",
              "Credenciamento ou auditoria de plano de saúde",
              "Abertura de estabelecimento no entorno da USP",
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
            Como Renovamos o Seu CLCB no Butantã
          </h2>
          <ol className="space-y-6 mb-10">
            {[
              {
                step: "1",
                title: "Visita técnica gratuita",
                desc: "Nosso engenheiro visita seu estabelecimento no Butantã para levantamento completo.",
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
            Solicite uma Avaliação Gratuita no Butantã
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
              alt="Renovação de CLCB no Butantã São Paulo"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <SocialProof
              testimonial={{
                text: "Tenho um restaurante universitário na Av. Vital Brasil há sete anos. Quando o plano de saúde dos funcionários exigiu o CLCB para o credenciamento corporativo, a DRD2 resolveu em menos de três semanas. Processo simples e sem surpresas.",
                author: "Sérgio Mattos",
                role: "Proprietário de restaurante · Av. Vital Brasil, Butantã",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dúvidas Frequentes — CLCB no Butantã
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Estabelecimentos no Butantã próximos à USP precisam de CLCB?",
                a: "Sim. Clínicas, restaurantes, livrarias e comércios com até 750 m² e baixo risco de incêndio precisam do CLCB independentemente da proximidade com a USP.",
              },
              {
                q: "O metrô Butantã (Linha 4) aumenta a fiscalização?",
                a: "Sim. A estação Butantã da Linha 4 intensificou o desenvolvimento comercial da Av. Vital Brasil e entorno, elevando a frequência de operações do CBPMESP na região.",
              },
              {
                q: "A DRD2 atende o Butantã?",
                a: "Sim. Atendemos todo o Butantã, Rio Pequeno, Morumbi, Pinheiros, Raposo Tavares e toda a Zona Oeste.",
              },
              {
                q: "Clínicas universitárias e laboratórios precisam de CLCB?",
                a: "Estabelecimentos privados próximos à USP com até 750 m² precisam de CLCB. Unidades dentro do campus USP têm regime próprio — avaliamos caso a caso.",
              },
              {
                q: "Quanto tempo leva a renovação no Butantã?",
                a: "Em média 15 a 30 dias úteis após o protocolo no CBPMESP. Recomendamos iniciar 90 dias antes do vencimento.",
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
            Cobertura na Região do Butantã
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Atendemos o Butantã e toda a Zona Oeste de São Paulo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Butantã",
              "Rio Pequeno",
              "Morumbi",
              "Pinheiros",
              "Vila Madalena",
              "Raposo Tavares",
              "Vila Sônia",
              "Perdizes",
              "Lapa",
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
      <CtaWhatsApp label="Renovar CLCB no Butantã Agora" centered />
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
          <Link href="/renovacao-clcb-zona-oeste-sao-paulo" className="hover:text-red-600">Zona Oeste</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Butantã</span>
        </div>
      </nav>
    </>
  );
}
