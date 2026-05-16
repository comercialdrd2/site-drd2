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
const slug = "renovacao-clcb-vila-andrade-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB na Vila Andrade | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento na Vila Andrade com agilidade. Clínicas, academias e comércios na Av. Giovanni Gronchi e entorno. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB na Vila Andrade | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio na Vila Andrade. Atendemos clínicas, academias e comércios na Zona Sul de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB na Vila Andrade – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para clínicas, academias e estabelecimentos comerciais na Vila Andrade, Zona Sul de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "Vila Andrade", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter na Vila Andrade?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Clínicas, academias, comércios e prestadores de serviço na Vila Andrade precisam manter o documento válido para funcionar com o alvará em dia.",
    },
    {
      question: "Qual o prazo para renovar o CLCB na Vila Andrade?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos próximos ao Real Parque e Panamby?",
      answer:
        "Sim. Atendemos toda a Vila Andrade, incluindo as regiões do Real Parque, Panamby e eixo da Av. Giovanni Gronchi.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB na Vila Andrade?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco. Clínicas e comércios de pequeno porte da Vila Andrade geralmente se enquadram no CLCB.",
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
            Zona Sul · Vila Andrade · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido na Vila Andrade?<br />Clínicas e Comércios Regularizados
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para clínicas,
            academias e serviços na Vila Andrade. Aprovação rápida no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB na Vila Andrade"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB na Vila Andrade: Serviços de Alto Padrão em Conformidade
        </h2>
        <p className="text-gray-700 mb-4">
          A Vila Andrade é um dos distritos de maior crescimento da Zona Sul, impulsionado
          pelos condomínios de alto padrão dos conjuntos <strong>Real Parque</strong> e
          {" "}<strong>Panamby</strong> e pelo intenso desenvolvimento ao longo da{" "}
          <strong>Av. Giovanni Gronchi</strong>. A região concentra clínicas médicas,
          academias, restaurantes, serviços especializados e comércios de conveniência que
          atendem uma das populações de maior renda da cidade.
        </p>
        <p className="text-gray-700 mb-4">
          Estabelecimentos com até 750 m² precisam do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido. A
          DRD2 Engenharia conduz todo o processo: vistoria técnica, laudo com ART e
          protocolo no CBPMESP — com atendimento pontual e eficiente.
        </p>
        <p className="text-gray-700">
          Nossa experiência com clínicas e serviços da região garante que a documentação
          seja preparada corretamente e aprovada sem retrabalho.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB na Vila Andrade
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB é obrigatório para edificações com <strong>até 750 m²</strong> e{" "}
            <strong>baixo risco de incêndio</strong>:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Clínicas médicas, odontológicas e de estética</li>
            <li>Academias e estúdios de pilates e yoga</li>
            <li>Restaurantes, cafés e lojas de conveniência</li>
            <li>Escritórios e consultórios liberais</li>
            <li>Prestadores de serviço em geral</li>
          </ul>
          <p className="text-gray-700">
            Planos de saúde e auditorias de credenciamento exigem o CLCB válido. Manter
            o documento em dia é parte da credibilidade do serviço prestado.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB na Vila Andrade
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Consulta Inicial", d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Avaliamos o histórico do CLCB e o tipo de ocupação." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro visita o seu estabelecimento na Vila Andrade para verificar os equipamentos de segurança contra incêndio." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP com toda a documentação exigida." },
            { n: "4", t: "CLCB Emitido", d: "Em 5 a 10 dias úteis você recebe o certificado digital — válido para alvará e credenciamento de planos de saúde." },
          ].map((s) => (
            <li key={s.n} className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">{s.n}</span>
              <div>
                <p className="font-semibold text-gray-800">{s.t}</p>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-red-50 border border-red-200 rounded-xl max-w-4xl mx-auto px-6 py-8 mb-10 text-center">
        <p className="text-lg font-semibold text-red-800 mb-3">
          Atendemos Real Parque, Panamby e toda a Av. Giovanni Gronchi
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia na Vila Andrade
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Especialistas em Clínicas", texto: "Conhecemos os requisitos específicos de segurança para ambientes de saúde — extintores, sinalização e iluminação conforme norma CBPMESP." },
              { titulo: "Atendimento Discreto", texto: "Agendamos a vistoria no horário de menor movimento, sem interferir no atendimento dos seus pacientes ou clientes." },
              { titulo: "Preço Fechado", texto: "ART, laudo técnico, protocolo e acompanhamento inclusos. Sem cobranças adicionais." },
              { titulo: "Controle de Vencimento", texto: "Monitoramos seu CLCB e avisamos antes do vencimento, mantendo você sempre em conformidade." },
            ].map((d) => (
              <div key={d.titulo} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <p className="font-semibold text-gray-800 mb-1">{d.titulo}</p>
                <p className="text-gray-600 text-sm">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "Tenho uma clínica de dermatologia no Panamby e precisei renovar o CLCB para manter o credenciamento do plano de saúde. A DRD2 foi extremamente profissional, resolveu em uma semana e me entregou toda a documentação organizada. Recomendo.",
          author: "Dra. Carla Mendonça",
          role: "Dermatologista, Vila Andrade – Panamby",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Vila Andrade</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter na Vila Andrade?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Clínicas, academias e comércios na Vila Andrade precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB na Vila Andrade?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos no Real Parque e Panamby?", a: "Sim. Atendemos toda a Vila Andrade, incluindo Real Parque, Panamby e o eixo da Av. Giovanni Gronchi." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. Clínicas e comércios de pequeno porte da Vila Andrade geralmente se enquadram no CLCB." },
          ].map((item) => (
            <details key={item.q} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-800 cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-gray-600 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para a Vila Andrade</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Morumbi", href: "/renovacao-clcb-morumbi-sao-paulo" },
            { nome: "Campo Limpo", href: "/renovacao-clcb-campo-limpo-sao-paulo" },
            { nome: "Santo Amaro", href: "/renovacao-clcb-santo-amaro-sao-paulo" },
            { nome: "Moema", href: "/renovacao-clcb-moema-sao-paulo" },
            { nome: "Zona Sul", href: "/renovacao-clcb-zona-sul-sao-paulo" },
          ].map((b) => (
            <li key={b.href}>
              <Link href={b.href} className="inline-block bg-white border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:bg-red-50 hover:border-red-400 transition">
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
