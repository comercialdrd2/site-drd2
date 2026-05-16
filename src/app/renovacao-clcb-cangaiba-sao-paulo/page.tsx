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
const slug = "renovacao-clcb-cangaiba-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB na Cangaíba | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento na Cangaíba com agilidade. Comércios, clínicas e serviços na Av. Cangaíba e entorno. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB na Cangaíba | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio na Cangaíba. Atendemos comércios, clínicas e prestadores de serviço na Zona Leste de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB na Cangaíba – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos na Cangaíba, Zona Leste de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Leste", item: `${BASE_URL}/renovacao-clcb-zona-leste-sao-paulo` },
    { name: "Cangaíba", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter na Cangaíba?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, farmácias e prestadores de serviço na Cangaíba precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB na Cangaíba?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos na Av. Cangaíba e Penha de França?",
      answer:
        "Sim. Atendemos toda a Cangaíba, incluindo o eixo da Av. Cangaíba e as vias de conexão com Penha, Ermelino Matarazzo e Ponte Rasa.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB na Cangaíba?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores. A maioria dos comércios da Cangaíba se enquadra no CLCB.",
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
            Zona Leste · Cangaíba · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido na Cangaíba?<br />Regularize com Rapidez e Segurança
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços na Cangaíba. Aprovação ágil no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB na Cangaíba"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB na Cangaíba: Entre a Penha e Ermelino Matarazzo
        </h2>
        <p className="text-gray-700 mb-4">
          A Cangaíba é um distrito residencial da Zona Leste com comércio de bairro
          concentrado na <strong>Av. Cangaíba</strong> e nas vias que conectam a região
          à <strong>Penha</strong> e ao <strong>Ermelino Matarazzo</strong>. Farmácias,
          mercados, padarias, clínicas populares e prestadores de serviço atendem uma
          população densa com crescente fiscalização municipal.
        </p>
        <p className="text-gray-700 mb-4">
          Todo estabelecimento com até 750 m² precisa do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido.
          A DRD2 Engenharia realiza todo o processo: vistoria, laudo técnico com ART e
          protocolo no CBPMESP — com prazo e preço garantidos.
        </p>
        <p className="text-gray-700">
          Nossa equipe tem experiência com imóveis da Zona Leste e garante que a
          documentação seja aprovada sem retrabalho.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB na Cangaíba
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Mercados, padarias, farmácias e comércio em geral</li>
            <li>Clínicas médicas e odontológicas</li>
            <li>Academias e estúdios</li>
            <li>Salões de beleza e barbearias</li>
            <li>Prestadores de serviço em geral</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido sujeita o proprietário a multas, interdição e
            cancelamento do alvará de funcionamento.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB na Cangaíba
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Avaliamos o CLCB anterior e definimos a documentação necessária." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento na Cangaíba para verificar extintores, sinalização de saída e iluminação de emergência." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP." },
            { n: "4", t: "CLCB Entregue", d: "Em 5 a 10 dias úteis você recebe o certificado digital — válido para o alvará de funcionamento." },
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
          Atendemos toda a Cangaíba, Av. Cangaíba e região da Penha
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia na Cangaíba
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Experiência na Zona Leste", texto: "Atuamos em Penha, São Miguel Paulista, Itaquera e Cangaíba. Conhecemos as exigências do CBPMESP para a região." },
              { titulo: "Preço Transparente", texto: "ART e todos os emolumentos incluídos no valor fechado — sem cobranças adicionais." },
              { titulo: "Prazo Garantido", texto: "Em média 5 a 10 dias úteis do primeiro contato até a entrega do CLCB." },
              { titulo: "Controle de Vencimento", texto: "Monitoramos seu CLCB e avisamos antes do vencimento para você manter sempre a conformidade." },
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
          text: "Tenho um mercado na Cangaíba e não sabia como renovar o CLCB. Um vizinho indicou a DRD2 e foi a melhor coisa. Resolveram tudo em menos de dez dias, explicaram cada passo e o preço foi muito justo. Recomendo para qualquer comerciante do bairro.",
          author: "Antônio Carvalho",
          role: "Proprietário de mercado, Cangaíba",
        }}
      />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Cangaíba</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter na Cangaíba?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço na Cangaíba precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB na Cangaíba?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos na Av. Cangaíba e região da Penha?", a: "Sim. Atendemos toda a Cangaíba e as vias de conexão com Penha e Ermelino Matarazzo." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios da Cangaíba se enquadra no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para a Cangaíba</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Penha", href: "/renovacao-clcb-penha-sao-paulo" },
            { nome: "São Miguel Paulista", href: "/renovacao-clcb-sao-miguel-paulista-sao-paulo" },
            { nome: "Itaquera", href: "/renovacao-clcb-itaquera-sao-paulo" },
            { nome: "Vila Formosa", href: "/renovacao-clcb-vila-formosa-sao-paulo" },
            { nome: "Zona Leste", href: "/renovacao-clcb-zona-leste-sao-paulo" },
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
