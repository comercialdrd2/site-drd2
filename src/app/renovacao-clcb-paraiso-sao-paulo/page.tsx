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
const slug = "renovacao-clcb-paraiso-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Paraíso | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Paraíso com rapidez e segurança. Clínicas, consultórios e comércios próximos à Av. Paulista e ao metrô Paraíso. Laudos e projetos aprovados no Corpo de Bombeiros.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Paraíso | DRD2 Engenharia",
    description:
      "CLCB vencido no Paraíso? Atendemos clínicas, consultórios e estabelecimentos comerciais com agilidade. Evite multas e interdição.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${BASE_URL}/images/page-clcb.webp`, width: 1200, height: 630 }],
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Paraíso",
  description:
    "Serviço especializado de renovação do Certificado de Licença do Corpo de Bombeiros para estabelecimentos no Paraíso, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "Paraíso", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "Meu consultório no Paraíso precisa de CLCB?",
      answer:
        "Sim. Consultórios, clínicas e estabelecimentos de saúde com até 750 m² e baixo risco de incêndio se enquadram no CLCB simplificado do CBPMESP.",
    },
    {
      question: "Qual é o prazo de validade do CLCB?",
      answer:
        "O CLCB tem validade de 1 a 3 anos conforme a atividade e o risco. Após o vencimento, o estabelecimento fica irregular e sujeito a interdição.",
    },
    {
      question: "O Paraíso fica próximo às equipes da DRD2?",
      answer:
        "Sim. Atendemos todo o Paraíso, Vila Mariana, Aclimação e região, com visita técnica rápida para levantamento de dados.",
    },
    {
      question: "Quais documentos preciso para renovar o CLCB?",
      answer:
        "CLCB anterior, planta baixa do imóvel, CNPJ, documentos do responsável técnico e laudo de extintores. Nossa equipe orienta cada caso.",
    },
    {
      question: "Como funciona o processo de renovação?",
      answer:
        "Visita técnica → projeto e memorial descritivo → protocolo no CBPMESP → acompanhamento até emissão do certificado. Cuidamos de tudo.",
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
            CLCB Vencido no Paraíso — Regularize Agora
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Renovação de CLCB no Paraíso: Regularize Antes da Interdição
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Clínicas, consultórios e comércios no Paraíso e Vila Mariana perdem contratos e sofrem
            interdições por CLCB vencido. A DRD2 Engenharia cuida de tudo — do projeto à aprovação
            no Corpo de Bombeiros.
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
            <span>✓ Atendimento no Paraíso e arredores</span>
            <span>✓ Aprovação garantida no CBPMESP</span>
            <span>✓ Sem burocracia para o cliente</span>
          </div>
        </div>
      </section>

      {/* Quem Precisa */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Quem Precisa Renovar o CLCB no Paraíso?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            O Paraíso concentra clínicas médicas, consultórios e comércios entre a Av. Paulista e
            o metrô — todos sujeitos à exigência do CBPMESP.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Estabelecimentos da região:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Consultórios médicos e odontológicos na Rua Abílio Soares",
                  "Clínicas de saúde próximas ao metrô Paraíso",
                  "Escritórios corporativos na Av. Paulista",
                  "Restaurantes e lanchonetes na Rua Frei Caneca",
                  "Lojas de serviços na Rua 13 de Maio",
                  "Academias e estúdios de pilates",
                  "Imobiliárias e corretoras",
                  "Escolas de idiomas e cursos livres",
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
                  "Proximidade com Av. Paulista: fiscalização frequente",
                  "Planos de saúde exigem CLCB válido para credenciamento",
                  "Contratos corporativos têm cláusula de conformidade",
                  "Edifícios mistos com uso residencial e comercial",
                  "Alta rotatividade de locatários — proprietário cobra regularização",
                  "Metrô Paraíso: fluxo elevado de clientes e fiscais",
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
            O Que Acontece com CLCB Vencido no Paraíso?
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
                title: "Rescisão contratual",
                desc: "Locadores e contratantes exigem regularidade — irregularidade quebra contratos.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">
            Quando renovar o CLCB no Paraíso?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Certificado com vencimento nos próximos 90 dias",
              "Renovação de contrato de locação comercial",
              "Credenciamento ou auditoria de plano de saúde",
              "Abertura de filial ou expansão do estabelecimento",
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
            Como Renovamos o Seu CLCB no Paraíso
          </h2>
          <ol className="space-y-6 mb-10">
            {[
              {
                step: "1",
                title: "Visita técnica gratuita",
                desc: "Nosso engenheiro vai ao seu estabelecimento no Paraíso para levantamento completo.",
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
              Não espere o CLCB vencer para agir — o processo tem prazos internos e multas por
              atraso. Entre em contato hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-14 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Solicite uma Avaliação Gratuita no Paraíso
          </h2>
          <p className="text-gray-300">
            Preencha o formulário e um engenheiro entra em contato para avaliar sua situação sem
            compromisso.
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
              alt="Renovação de CLCB no Paraíso São Paulo"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <SocialProof
              testimonial={{
                text: "Meu consultório ficou irregular sem que eu percebesse — o CLCB havia vencido há dois meses. A DRD2 veio rapidamente, fez o levantamento e resolveu tudo. Consegui renovar meu credenciamento com o plano de saúde sem maiores problemas.",
                author: "Dr. Marcos Tavares",
                role: "Cardiologista · Rua Abílio Soares, Paraíso",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dúvidas Frequentes — CLCB no Paraíso
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Meu consultório no Paraíso precisa de CLCB?",
                a: "Sim. Consultórios, clínicas e estabelecimentos de saúde com até 750 m² e baixo risco de incêndio se enquadram no CLCB simplificado do CBPMESP.",
              },
              {
                q: "Qual é o prazo de validade do CLCB?",
                a: "O CLCB tem validade de 1 a 3 anos conforme a atividade e o risco. Após o vencimento, o estabelecimento fica irregular e sujeito a interdição.",
              },
              {
                q: "O Paraíso fica próximo às equipes da DRD2?",
                a: "Sim. Atendemos todo o Paraíso, Vila Mariana, Aclimação e região, com visita técnica rápida para levantamento de dados.",
              },
              {
                q: "Quais documentos preciso para renovar o CLCB?",
                a: "CLCB anterior, planta baixa do imóvel, CNPJ, documentos do responsável técnico e laudo de extintores. Nossa equipe orienta cada caso.",
              },
              {
                q: "Como funciona o processo de renovação?",
                a: "Visita técnica → projeto e memorial descritivo → protocolo no CBPMESP → acompanhamento até emissão do certificado. Cuidamos de tudo.",
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
            Cobertura na Região do Paraíso
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Atendemos o Paraíso e todos os bairros vizinhos da Zona Sul e Centro de São Paulo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Paraíso",
              "Vila Mariana",
              "Aclimação",
              "Bela Vista",
              "Liberdade",
              "Saúde",
              "Cambuci",
              "Moema",
              "Ibirapuera",
            ].map((b) => (
              <span key={b} className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={slug} />
      <CtaWhatsApp label="Renovar CLCB no Paraíso Agora" centered />
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
          <Link href="/renovacao-clcb-zona-sul-sao-paulo" className="hover:text-red-600">Zona Sul</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Paraíso</span>
        </div>
      </nav>
    </>
  );
}
