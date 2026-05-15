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
const slug = "renovacao-clcb-rio-pequeno-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Rio Pequeno | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Rio Pequeno com agilidade. Comércios, clínicas e serviços na Av. Rio Pequeno e entorno. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Rio Pequeno | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Rio Pequeno. Atendemos comércios, clínicas e prestadores de serviço na Zona Oeste de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Rio Pequeno – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Rio Pequeno, Zona Oeste de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Oeste", item: `${BASE_URL}/renovacao-clcb-zona-oeste-sao-paulo` },
    { name: "Rio Pequeno", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Rio Pequeno?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Rio Pequeno precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Rio Pequeno?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos na Av. Rio Pequeno e Raposo Tavares?",
      answer:
        "Sim. Atendemos toda a região do Rio Pequeno, incluindo os eixos da Av. Rio Pequeno, Raposo Tavares e adjacências do Butantã.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Rio Pequeno?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores. A maioria dos comércios do Rio Pequeno se enquadra no CLCB.",
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
            Zona Oeste · Rio Pequeno · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Rio Pequeno?<br />Renove com Agilidade e Segurança
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Rio Pequeno. Aprovação garantida no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Rio Pequeno"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Rio Pequeno: Zona Oeste em Conformidade
        </h2>
        <p className="text-gray-700 mb-4">
          O Rio Pequeno é um bairro residencial e comercial da Zona Oeste, com comércio
          local ao longo da <strong>Av. Rio Pequeno</strong> e do corredor da{" "}
          <strong>Rodovia Raposo Tavares</strong>. Padarias, farmácias, clínicas,
          academias e prestadores de serviço atendem uma população crescente,
          especialmente com a expansão imobiliária da região.
        </p>
        <p className="text-gray-700 mb-4">
          Todo estabelecimento com até 750 m² precisa do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido.
          A DRD2 Engenharia cuida de todo o processo: vistoria técnica, laudo com ART e
          protocolo no CBPMESP.
        </p>
        <p className="text-gray-700">
          Com atuação consolidada na Zona Oeste, conhecemos as características dos imóveis
          do Rio Pequeno e garantimos aprovação na primeira tentativa.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB no Rio Pequeno
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Comércios em geral: padarias, farmácias, mercados</li>
            <li>Clínicas médicas e odontológicas</li>
            <li>Academias e estúdios de fitness</li>
            <li>Salões de beleza e barbearias</li>
            <li>Escritórios e prestadores de serviço</li>
          </ul>
          <p className="text-gray-700">
            O CLCB tem validade de 1 a 3 anos. Funcionar com o documento vencido sujeita
            o proprietário a multas e interdição.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB no Rio Pequeno
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados pelo WhatsApp. Avaliamos o CLCB anterior e o tipo de ocupação." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento no Rio Pequeno para verificar os equipamentos de segurança." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP com toda a documentação necessária." },
            { n: "4", t: "CLCB Entregue", d: "Em 5 a 10 dias úteis você recebe o certificado digital — pronto para o alvará da Prefeitura." },
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
          Atendemos toda a região do Rio Pequeno, Av. Rio Pequeno e Raposo Tavares
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia no Rio Pequeno
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Expertise na Zona Oeste", texto: "Atuamos em Butantã, Lapa, Pompéia e Rio Pequeno. Conhecemos as exigências do CBPMESP para os perfis de imóvel da região." },
              { titulo: "Tudo Incluso", texto: "ART, laudo técnico, protocolo e acompanhamento no valor fechado — sem surpresas." },
              { titulo: "Prazo Definido", texto: "Em média 5 a 10 dias úteis. Você sabe quando o CLCB será entregue." },
              { titulo: "Controle de Vencimento", texto: "Avisamos antes do vencimento para você nunca ser surpreendido por fiscalização." },
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
          text: "Abri uma clínica de estética no Rio Pequeno e precisava do CLCB para conseguir o alvará. A DRD2 foi super eficiente — fizeram a vistoria no dia seguinte e entregaram o certificado em uma semana. Indico com confiança.",
          author: "Juliana Costa",
          role: "Esteticista, Rio Pequeno",
        }}
      />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Rio Pequeno</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter no Rio Pequeno?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Rio Pequeno precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB no Rio Pequeno?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos na Av. Rio Pequeno e Raposo Tavares?", a: "Sim. Atendemos toda a região do Rio Pequeno e adjacências do Butantã." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios do Rio Pequeno se enquadra no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para o Rio Pequeno</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Butantã", href: "/renovacao-clcb-butanta-sao-paulo" },
            { nome: "Lapa", href: "/renovacao-clcb-lapa-sao-paulo" },
            { nome: "Pompéia", href: "/renovacao-clcb-pompeia-sao-paulo" },
            { nome: "Vila Leopoldina", href: "/renovacao-clcb-zona-oeste-sao-paulo" },
            { nome: "Zona Oeste", href: "/renovacao-clcb-zona-oeste-sao-paulo" },
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
