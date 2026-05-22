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
const slug = "renovacao-clcb-aclimacao-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB na Aclimação | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento na Aclimação com agilidade. Clínicas, restaurantes e comércios entre Vila Mariana e Paraíso. Aprovação garantida no Corpo de Bombeiros.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB na Aclimação | DRD2 Engenharia",
    description:
      "CLCB vencido na Aclimação? Atendemos clínicas, restaurantes e estabelecimentos comerciais com agilidade. Evite multas e interdição.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${BASE_URL}/images/page-clcb.webp`, width: 1200, height: 630 }],
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB na Aclimação",
  description:
    "Serviço especializado de renovação do Certificado de Licença do Corpo de Bombeiros para estabelecimentos na Aclimação, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "Aclimação", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "Estabelecimentos na Aclimação precisam de CLCB?",
      answer:
        "Sim. Todo estabelecimento com até 750 m² e atividade de baixo risco de incêndio precisa do CLCB emitido pelo CBPMESP, renovado periodicamente.",
    },
    {
      question: "Com que frequência devo renovar o CLCB?",
      answer:
        "A validade varia de 1 a 3 anos conforme a atividade e a classificação de risco. Após vencer, o estabelecimento fica sujeito a interdição.",
    },
    {
      question: "A DRD2 atende a Aclimação?",
      answer:
        "Sim. Atendemos toda a Aclimação, Paraíso, Vila Mariana, Cambuci e região, com visita técnica ágil.",
    },
    {
      question: "O que ocorre se eu ignorar o CLCB vencido?",
      answer:
        "O Corpo de Bombeiros pode interditar o estabelecimento, aplicar multas e cancelar alvarás. Planos de saúde também cancelam credenciamentos.",
    },
    {
      question: "Quanto tempo leva a renovação?",
      answer:
        "Em média 15 a 30 dias úteis após o protocolo no CBPMESP, dependendo da complexidade e da fila do órgão.",
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
            CLCB Vencido na Aclimação — Regularize Agora
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Renovação de CLCB na Aclimação: Regularize Antes da Interdição
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Clínicas, restaurantes e estabelecimentos na Aclimação perdem contratos e enfrentam
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
            <span>✓ Atendimento na Aclimação e arredores</span>
            <span>✓ Aprovação garantida no CBPMESP</span>
            <span>✓ Sem burocracia para o cliente</span>
          </div>
        </div>
      </section>

      {/* Quem Precisa */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Quem Precisa Renovar o CLCB na Aclimação?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            A Aclimação é um bairro residencial com forte presença de clínicas de saúde, restaurantes
            e pequenas empresas — todos obrigados a manter o CLCB válido.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Estabelecimentos da região:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Clínicas médicas e consultórios na Rua Muniz de Souza",
                  "Restaurantes e bares na Rua das Palmeiras da Aclimação",
                  "Laboratórios de análises clínicas",
                  "Academias e estúdios fitness",
                  "Comércios de vizinhança na Rua Abolição",
                  "Escolas infantis e espaços de educação",
                  "Clínicas odontológicas e de estética",
                  "Serviços de saúde próximos ao Parque da Aclimação",
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
                  "Bairro entre Paraíso e Cambuci: rota de fiscalização frequente",
                  "Imóveis residenciais adaptados para uso comercial sem regularização",
                  "Planos de saúde exigem CLCB válido para credenciamento",
                  "Contratos de locação com cláusula de conformidade legal",
                  "Parque da Aclimação atrai fiscalização na vizinhança",
                  "Alta densidade de clínicas e consultórios — alvos prioritários",
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
            O Que Acontece com CLCB Vencido na Aclimação?
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
            Quando renovar o CLCB na Aclimação?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Certificado com vencimento nos próximos 90 dias",
              "Renovação de contrato de locação comercial",
              "Credenciamento ou auditoria de plano de saúde",
              "Adequação de imóvel residencial para uso comercial",
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
            Como Renovamos o Seu CLCB na Aclimação
          </h2>
          <ol className="space-y-6 mb-10">
            {[
              {
                step: "1",
                title: "Visita técnica gratuita",
                desc: "Nosso engenheiro vai ao seu estabelecimento na Aclimação para levantamento completo.",
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
                desc: "Você recebe o certificado válido, pronto para apresentar a planos de saúde, locadores e fiscais.",
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
            Solicite uma Avaliação Gratuita na Aclimação
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
              alt="Renovação de CLCB na Aclimação São Paulo"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <SocialProof
              testimonial={{
                text: "Descobri que meu CLCB estava vencido durante uma auditoria do plano de saúde — quase perdi o credenciamento. A DRD2 veio no mesmo dia, levantou tudo e resolveu em menos de três semanas. Recomendo a qualquer colega médico da região.",
                author: "Dra. Patrícia Almeida",
                role: "Pediatra · Rua Muniz de Souza, Aclimação",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dúvidas Frequentes — CLCB na Aclimação
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Estabelecimentos na Aclimação precisam de CLCB?",
                a: "Sim. Todo estabelecimento com até 750 m² e atividade de baixo risco de incêndio precisa do CLCB emitido pelo CBPMESP, renovado periodicamente.",
              },
              {
                q: "Com que frequência devo renovar o CLCB?",
                a: "A validade varia de 1 a 3 anos conforme a atividade e a classificação de risco. Após vencer, o estabelecimento fica sujeito a interdição.",
              },
              {
                q: "A DRD2 atende a Aclimação?",
                a: "Sim. Atendemos toda a Aclimação, Paraíso, Vila Mariana, Cambuci e região, com visita técnica ágil.",
              },
              {
                q: "O que ocorre se eu ignorar o CLCB vencido?",
                a: "O Corpo de Bombeiros pode interditar o estabelecimento, aplicar multas e cancelar alvarás. Planos de saúde também cancelam credenciamentos.",
              },
              {
                q: "Quanto tempo leva a renovação?",
                a: "Em média 15 a 30 dias úteis após o protocolo no CBPMESP, dependendo da complexidade e da fila do órgão.",
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
            Cobertura na Região da Aclimação
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Atendemos a Aclimação e todos os bairros vizinhos da Zona Sul e Centro de São Paulo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Aclimação",
              "Paraíso",
              "Vila Mariana",
              "Cambuci",
              "Liberdade",
              "Bela Vista",
              "Saúde",
              "Ipiranga",
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

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={slug} />
      <CtaWhatsApp label="Renovar CLCB na Aclimação Agora" centered />
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
          <span className="text-gray-700 font-medium">Aclimação</span>
        </div>
      </nav>
    </>
  );
}
