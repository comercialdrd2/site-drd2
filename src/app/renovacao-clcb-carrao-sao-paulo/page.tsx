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
const slug = "renovacao-clcb-carrao-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Carrão | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Carrão com agilidade. Comércios, clínicas e academias na Av. Conselheiro Carrão e entorno do metrô Carrão. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Carrão | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Carrão. Atendemos comércios, clínicas e prestadores de serviço na Zona Leste de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Carrão – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Carrão, Zona Leste de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Leste", item: `${BASE_URL}/renovacao-clcb-zona-leste-sao-paulo` },
    { name: "Carrão", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Carrão?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, academias e prestadores de serviço no Carrão precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Carrão?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos próximos ao metrô Carrão?",
      answer:
        "Sim. Atendemos toda a região do Carrão, incluindo o eixo da Av. Conselheiro Carrão, metrô Carrão (Linha 3-Vermelha) e adjacências do Tatuapé.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Carrão?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco. A maioria dos comércios do Carrão se enquadra no CLCB.",
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
            Zona Leste · Carrão · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Carrão?<br />Regularize Antes da Próxima Fiscalização
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Carrão. Aprovação ágil no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Carrão"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Carrão: Eixo Tatuapé-Carrão em Conformidade
        </h2>
        <p className="text-gray-700 mb-4">
          O Carrão forma junto ao Tatuapé um dos eixos comerciais mais consolidados da
          Zona Leste. A <strong>Av. Conselheiro Carrão</strong> e as ruas que convergem
          para a estação <strong>metrô Carrão (Linha 3-Vermelha)</strong> concentram
          academias, clínicas, farmácias, restaurantes e comércios de bairro com alto
          fluxo de clientes.
        </p>
        <p className="text-gray-700 mb-4">
          Para funcionar legalmente, esses estabelecimentos com até 750 m² precisam
          manter o <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong>{" "}
          válido. A DRD2 Engenharia realiza todo o processo de renovação: vistoria técnica,
          laudo com ART e protocolo no CBPMESP — de forma rápida e sem complicação.
        </p>
        <p className="text-gray-700">
          Com atuação consolidada na Zona Leste, conhecemos os imóveis do Carrão e
          garantimos aprovação na primeira tentativa.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB no Carrão
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB é obrigatório para edificações com <strong>até 750 m²</strong> e{" "}
            <strong>baixo risco de incêndio</strong>:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Academias, estúdios de pilates e artes marciais</li>
            <li>Clínicas médicas e odontológicas</li>
            <li>Farmácias, padarias e mercados</li>
            <li>Restaurantes, lanchonetes e cafés</li>
            <li>Salões de beleza e prestadores de serviço</li>
          </ul>
          <p className="text-gray-700">
            O CLCB tem validade de 1 a 3 anos. Funcionar com o documento vencido coloca
            o estabelecimento em risco de multa e interdição durante fiscalizações de rotina.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB no Carrão
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Avaliamos o CLCB anterior e o tipo de ocupação." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento no Carrão para verificar extintores, sinalização de saída e iluminação de emergência." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico assinado com ART e protocolamos no CBPMESP com toda a documentação necessária." },
            { n: "4", t: "CLCB Entregue", d: "Em 5 a 10 dias úteis você recebe o certificado digital — válido para o alvará da Prefeitura." },
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
          Atendemos toda a região do Carrão, Av. Conselheiro Carrão e metrô Carrão
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia no Carrão
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Expertise na Zona Leste", texto: "Atuamos em Tatuapé, Vila Formosa, Aricanduva e Carrão. Conhecemos os perfis de imóvel e as exigências do CBPMESP para a região." },
              { titulo: "Tudo Incluso", texto: "ART, laudo técnico, protocolo e acompanhamento no valor fechado — sem surpresas no processo." },
              { titulo: "Prazo Garantido", texto: "Em média 5 a 10 dias úteis do primeiro contato até a entrega do CLCB renovado." },
              { titulo: "Gestão do Vencimento", texto: "Monitoramos seu CLCB e avisamos antes do vencimento para que você nunca seja pego de surpresa." },
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
          text: "Tenho uma academia no Carrão e sempre deixava o CLCB vencer por falta de tempo. A DRD2 assumiu todo o processo — vistoriou, fez o laudo e entregou o certificado em uma semana. Agora eles me avisam antes de vencer. Serviço excelente.",
          author: "Ricardo Amorim",
          role: "Proprietário de academia, Carrão",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Carrão</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter no Carrão?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e academias no Carrão precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB no Carrão?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos próximos ao metrô Carrão?", a: "Sim. Atendemos toda a região do Carrão, Av. Conselheiro Carrão e adjacências do Tatuapé." },
            { q: "Qual a diferença entre CLCB e AVCB no Carrão?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios do Carrão se enquadra no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para o Carrão</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Tatuapé", href: "/renovacao-clcb-tatuape-sao-paulo" },
            { nome: "Vila Formosa", href: "/renovacao-clcb-vila-formosa-sao-paulo" },
            { nome: "Aricanduva", href: "/renovacao-clcb-aricanduva-sao-paulo" },
            { nome: "Penha", href: "/renovacao-clcb-penha-sao-paulo" },
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

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={slug} />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />
    </>
  );
}
