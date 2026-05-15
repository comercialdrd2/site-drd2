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
const slug = "renovacao-clcb-interlagos-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB em Interlagos | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento em Interlagos com agilidade. Comércios, clínicas e serviços na Av. Interlagos e entorno do autódromo. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB em Interlagos | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio em Interlagos. Atendemos comércios, clínicas e prestadores de serviço na Zona Sul de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB em Interlagos – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos em Interlagos, Zona Sul de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "Interlagos", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter em Interlagos?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, bares e prestadores de serviço em Interlagos precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB em Interlagos?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos na Av. Interlagos e entorno do autódromo?",
      answer:
        "Sim. Atendemos toda a região de Interlagos, incluindo a Av. Interlagos, Av. Sen. Teotônio Vilela e os bairros ao redor do Autódromo José Carlos Pace.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB em Interlagos?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores. Comércios e prestadores de serviço de Interlagos geralmente se enquadram no CLCB.",
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
            Zona Sul · Interlagos · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido em Interlagos?<br />Regularize Sem Sair do Bairro
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços em Interlagos. Aprovação rápida no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB em Interlagos"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB em Interlagos: Comércios e Serviços em Dia
        </h2>
        <p className="text-gray-700 mb-4">
          Interlagos é conhecido mundialmente pelo{" "}
          <strong>Autódromo José Carlos Pace</strong>, mas o bairro tem uma vida
          comercial própria ao longo da <strong>Av. Interlagos</strong> e da{" "}
          <strong>Av. Sen. Teotônio Vilela</strong> — com farmácias, clínicas,
          restaurantes, bares e prestadores de serviço que atendem os moradores dos
          bairros ao redor da represa Guarapiranga.
        </p>
        <p className="text-gray-700 mb-4">
          Estabelecimentos com até 750 m² precisam do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido.
          A DRD2 Engenharia cuida de todo o processo de renovação: vistoria, laudo com
          ART e protocolo no CBPMESP — sem burocracia para o proprietário.
        </p>
        <p className="text-gray-700">
          Com experiência na Zona Sul, atendemos desde pequenos comércios de bairro até
          bares e restaurantes que ficam mais movimentados durante os eventos do autódromo.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB em Interlagos
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Bares, restaurantes e lanchonetes</li>
            <li>Clínicas médicas e odontológicas</li>
            <li>Farmácias, padarias e mercados</li>
            <li>Academias e estúdios esportivos</li>
            <li>Lojas, salões de beleza e prestadores de serviço</li>
          </ul>
          <p className="text-gray-700">
            O CLCB tem validade de 1 a 3 anos. Funcionar com o documento vencido sujeita
            o proprietário a multas e interdição durante fiscalizações.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB em Interlagos
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Avaliamos o CLCB anterior e definimos a documentação necessária." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento em Interlagos para verificar extintores, sinalização e iluminação de emergência." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP com toda a documentação exigida." },
            { n: "4", t: "CLCB Entregue", d: "Em 5 a 10 dias úteis você recebe o certificado digital — pronto para o alvará de funcionamento." },
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
          Atendemos toda a região de Interlagos e Av. Sen. Teotônio Vilela
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia em Interlagos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Experiência na Zona Sul", texto: "Atuamos em Santo Amaro, M'Boi Mirim, Grajaú e Interlagos. Conhecemos as particularidades dos imóveis e exigências locais do CBPMESP." },
              { titulo: "Tudo Incluso", texto: "ART, laudo técnico, protocolo e acompanhamento inclusos no valor fechado. Sem surpresas." },
              { titulo: "Prazo Garantido", texto: "Em média 5 a 10 dias úteis do primeiro contato até a entrega do CLCB renovado." },
              { titulo: "Controle de Vencimento", texto: "Monitoramos seu CLCB e avisamos antes do vencimento para você manter a conformidade sem estresse." },
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
          text: "Tenho um bar em Interlagos que fica lotado nos fins de semana de corrida. Precisei renovar o CLCB com urgência antes de uma fiscalização e a DRD2 resolveu em menos de uma semana. Atendimento rápido e sem enrolação.",
          author: "Marcos Vidal",
          role: "Proprietário de bar, Interlagos",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Interlagos</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter em Interlagos?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço em Interlagos precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB em Interlagos?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos na Av. Interlagos e entorno do autódromo?", a: "Sim. Atendemos toda a região de Interlagos, Av. Interlagos e Av. Sen. Teotônio Vilela." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. Comércios de Interlagos geralmente se enquadram no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para Interlagos</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Santo Amaro", href: "/renovacao-clcb-santo-amaro-sao-paulo" },
            { nome: "Grajaú", href: "/renovacao-clcb-graja-sao-paulo" },
            { nome: "M'Boi Mirim", href: "/renovacao-clcb-mboi-mirim-sao-paulo" },
            { nome: "Jabaquara", href: "/renovacao-clcb-jabaquara-sao-paulo" },
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
