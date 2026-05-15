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
const slug = "renovacao-clcb-morumbi-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Morumbi | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Morumbi com agilidade. Clínicas, consultórios e comércios na Av. Giovanni Gronchi e entorno do Shopping Morumbi. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Morumbi | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Morumbi. Atendemos clínicas, consultórios e serviços na Zona Sul de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Morumbi – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para clínicas, consultórios e estabelecimentos comerciais no Morumbi, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "Morumbi", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Morumbi?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Clínicas, consultórios, academias e comércios no Morumbi precisam manter o documento válido para funcionar com o alvará em dia.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Morumbi?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende clínicas e consultórios no Morumbi?",
      answer:
        "Sim. Temos experiência com consultórios médicos e odontológicos, clínicas de estética e reabilitação na região do Morumbi, Jardim Ampliação e Jardim São Luís.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Morumbi?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco. A maioria das clínicas e comércios do Morumbi se enquadra no CLCB.",
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
      <section className="bg-red-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-red-200 mb-2">
            Zona Sul · Morumbi · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Morumbi?<br />Clínicas e Comércios Regularizados
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para clínicas,
            consultórios e estabelecimentos no Morumbi. Aprovação rápida no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Morumbi"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Morumbi: Clínicas, Consultórios e Serviços Especializados
        </h2>
        <p className="text-gray-700 mb-4">
          O Morumbi combina condomínios de alto padrão com um robusto eixo de serviços
          na <strong>Av. Giovanni Gronchi</strong> — a principal via comercial do bairro.
          Clínicas médicas e odontológicas, consultórios especializados, academias,
          restaurantes e prestadores de serviço de alto nível formam um mercado exigente
          onde a regularização documental é parte da credibilidade do negócio.
        </p>
        <p className="text-gray-700 mb-4">
          O <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> é
          obrigatório para todos esses estabelecimentos com até 750 m². A DRD2 Engenharia
          cuida de todo o processo de renovação: vistoria técnica, laudo com ART e
          protocolo no CBPMESP — com atendimento discreto e eficiente para profissionais
          de saúde e empresas da região.
        </p>
        <p className="text-gray-700">
          Nossa equipe conhece as exigências específicas para consultórios e clínicas —
          tipos de uso com requisitos próprios de sinalização e extintores — e garante que
          a documentação seja aprovada sem retrabalho.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            CLCB no Morumbi: Quem Precisa e Quando Renovar
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB é emitido pelo CBPMESP para edificações com <strong>até 750 m²</strong>{" "}
            e classificadas como <strong>baixo risco de incêndio</strong>. A validade varia
            de 1 a 3 anos conforme o tipo de uso. Entre os estabelecimentos obrigados no
            Morumbi:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Consultórios médicos, odontológicos e psicológicos</li>
            <li>Clínicas de estética, fisioterapia e reabilitação</li>
            <li>Academias e estúdios de pilates</li>
            <li>Restaurantes, cafés e comércio de rua</li>
            <li>Escritórios e prestadores de serviço em geral</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido coloca o estabelecimento em risco de interdição
            e invalida o alvará de funcionamento — o que pode comprometer especialmente
            clínicas que passam por auditorias de planos de saúde.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB no Morumbi
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              t: "Consulta Inicial",
              d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Avaliamos o histórico do CLCB anterior e o tipo de ocupação para identificar o que precisa ser atualizado.",
            },
            {
              n: "2",
              t: "Vistoria Técnica",
              d: "Um engenheiro vai até o seu estabelecimento no Morumbi para verificar os equipamentos de segurança contra incêndio e registrar as medidas existentes.",
            },
            {
              n: "3",
              t: "Laudo e Protocolo",
              d: "Elaboramos o laudo técnico assinado com ART e protocolamos no CBPMESP com toda a documentação exigida para aprovação.",
            },
            {
              n: "4",
              t: "Certificado Renovado",
              d: "Em 5 a 10 dias úteis, você recebe o CLCB renovado digitalmente — válido para apresentar ao alvará e a qualquer auditor de plano de saúde.",
            },
          ].map((s) => (
            <li key={s.n} className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                {s.n}
              </span>
              <div>
                <p className="font-semibold text-gray-800">{s.t}</p>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA intermediário */}
      <section className="bg-red-50 border border-red-200 rounded-xl max-w-4xl mx-auto px-6 py-8 mb-10 text-center">
        <p className="text-lg font-semibold text-red-800 mb-3">
          Atendemos clínicas, consultórios e comércios em toda a Av. Giovanni Gronchi
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que a DRD2 Engenharia É a Escolha Certa no Morumbi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Especialistas em Clínicas e Consultórios",
                texto:
                  "Conhecemos as exigências específicas de segurança para ambientes de saúde — tipos de extintor, sinalização de saída de emergência e iluminação conforme a norma do CBPMESP.",
              },
              {
                titulo: "Discrição e Pontualidade",
                texto:
                  "Agendamos a vistoria no horário de menor movimento do seu estabelecimento, sem interferir no atendimento dos pacientes ou clientes.",
              },
              {
                titulo: "Preço Fechado",
                texto:
                  "ART, laudo técnico, protocolo e acompanhamento inclusos no valor acordado. Sem custos adicionais no meio do processo.",
              },
              {
                titulo: "Controle de Vencimento",
                texto:
                  "Monitoramos a validade do seu CLCB e avisamos com antecedência para que você renove sem pressa e sem riscos de auditoria.",
              },
            ].map((d) => (
              <div key={d.titulo} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <p className="font-semibold text-gray-800 mb-1">{d.titulo}</p>
                <p className="text-gray-600 text-sm">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <SocialProof
        testimonial={{
          text: "Tenho uma clínica de fisioterapia na Av. Giovanni Gronchi há seis anos. Sempre tive receio de perder o credenciamento do plano por causa da documentação do Corpo de Bombeiros. A DRD2 resolveu tudo com muita competência e no prazo que prometeram. Altamente recomendável.",
          author: "Dr. André Villela",
          role: "Fisioterapeuta, Morumbi",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Perguntas Frequentes — CLCB Morumbi
        </h2>
        <div className="space-y-5">
          {[
            {
              q: "O que é o CLCB e quem precisa ter no Morumbi?",
              a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Clínicas, consultórios, academias e comércios no Morumbi precisam manter o documento válido.",
            },
            {
              q: "Qual o prazo para renovar o CLCB no Morumbi?",
              a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
            },
            {
              q: "Atende clínicas e consultórios no Morumbi?",
              a: "Sim. Temos experiência com consultórios médicos, odontológicos e clínicas de estética e reabilitação na região do Morumbi e Av. Giovanni Gronchi.",
            },
            {
              q: "Qual a diferença entre CLCB e AVCB no Morumbi?",
              a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria das clínicas e comércios do Morumbi se enquadra no CLCB.",
            },
          ].map((item) => (
            <details key={item.q} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-600 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Solicite uma Proposta para o Morumbi
          </h2>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Resposta em até 1 hora útil
          </p>
          <LeadForm />
        </div>
      </section>

      {/* Bairros próximos */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Também Atendemos Bairros Vizinhos
        </h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Campo Limpo", href: "/renovacao-clcb-campo-limpo-sao-paulo" },
            { nome: "Butantã", href: "/renovacao-clcb-butanta-sao-paulo" },
            { nome: "Santo Amaro", href: "/renovacao-clcb-santo-amaro-sao-paulo" },
            { nome: "Moema", href: "/renovacao-clcb-moema-sao-paulo" },
            { nome: "Zona Sul", href: "/renovacao-clcb-zona-sul-sao-paulo" },
          ].map((b) => (
            <li key={b.href}>
              <Link
                href={b.href}
                className="inline-block bg-white border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:bg-red-50 hover:border-red-400 transition"
              >
                {b.nome}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <NeighborhoodSilo currentSlug={slug} />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />
    </>
  );
}
