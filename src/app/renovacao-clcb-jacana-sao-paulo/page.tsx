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
const slug = "renovacao-clcb-jacana-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Jaçanã | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Jaçanã com agilidade. Comércios, clínicas e serviços na Av. Nova Cantareira e CPTM Jaçanã. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Jaçanã | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Jaçanã. Atendemos comércios, clínicas e prestadores de serviço na Zona Norte de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Jaçanã – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Jaçanã, Zona Norte de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Norte", item: `${BASE_URL}/renovacao-clcb-zona-norte-sao-paulo` },
    { name: "Jaçanã", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Jaçanã?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Jaçanã precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Jaçanã?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos próximos à estação CPTM Jaçanã?",
      answer:
        "Sim. Atendemos toda a região do Jaçanã, incluindo o entorno da estação CPTM Jaçanã (Linha 7-Rubi), Av. Nova Cantareira e Tremembé.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Jaçanã?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores. A maioria dos comércios do Jaçanã se enquadra no CLCB.",
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

      <section className="bg-red-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-red-200 mb-2">
            Zona Norte · Jaçanã · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Jaçanã?<br />Regularize Antes da Fiscalização
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Jaçanã. Aprovação ágil no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Jaçanã"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Jaçanã: Comércio de Bairro em Conformidade
        </h2>
        <p className="text-gray-700 mb-4">
          O Jaçanã é um bairro residencial consolidado da Zona Norte, com comércio
          local ao longo da <strong>Av. Nova Cantareira</strong> e nas vias que
          convergem para a <strong>estação CPTM Jaçanã (Linha 7-Rubi)</strong>.
          Farmácias, padarias, clínicas, salões de beleza e prestadores de serviço
          atendem uma população fiel de moradores.
        </p>
        <p className="text-gray-700 mb-4">
          Todo estabelecimento com até 750 m² precisa do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido.
          A DRD2 Engenharia realiza todo o processo: vistoria técnica, laudo com ART
          e protocolo no CBPMESP — sem deslocamento do proprietário.
        </p>
        <p className="text-gray-700">
          Com atuação na Zona Norte, conhecemos as particularidades dos imóveis do
          Jaçanã e garantimos aprovação na primeira tentativa.
        </p>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quem Precisa de CLCB no Jaçanã</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Comércios: farmácias, padarias, mercados e lojas</li>
            <li>Clínicas médicas e odontológicas</li>
            <li>Academias e estúdios</li>
            <li>Salões de beleza e barbearias</li>
            <li>Escritórios e prestadores de serviço</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido sujeita o proprietário a multas e interdição.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Como Renovamos o CLCB no Jaçanã</h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados pelo WhatsApp. Avaliamos o CLCB anterior e definimos a documentação." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento no Jaçanã para verificar extintores, sinalização e iluminação de emergência." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP." },
            { n: "4", t: "CLCB Entregue", d: "Em 5 a 10 dias úteis você recebe o certificado digital." },
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
          Atendemos toda a região do Jaçanã, CPTM e Av. Nova Cantareira
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Por Que Escolher a DRD2 Engenharia no Jaçanã</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Experiência na Zona Norte", texto: "Atuamos em Santana, Tucuruvi, Mandaqui e Jaçanã. Conhecemos as exigências do CBPMESP para a região." },
              { titulo: "Tudo Incluso", texto: "ART, laudo técnico, protocolo e acompanhamento no valor fechado — sem surpresas." },
              { titulo: "Prazo Garantido", texto: "Em média 5 a 10 dias úteis do primeiro contato até a entrega do CLCB." },
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
          text: "Tenho uma padaria no Jaçanã há dez anos e sempre tive dificuldade com o CLCB. A DRD2 foi super atenciosa, resolveu tudo em uma semana e o preço foi honesto. Não preciso mais me preocupar — eles me avisam quando está perto de vencer.",
          author: "Dona Margarida Pires",
          role: "Proprietária de padaria, Jaçanã",
        }}
      />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Jaçanã</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter no Jaçanã?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Jaçanã precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB no Jaçanã?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende próximo à estação CPTM Jaçanã?", a: "Sim. Atendemos toda a região do Jaçanã, CPTM Linha 7-Rubi e Av. Nova Cantareira." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios do Jaçanã se enquadra no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para o Jaçanã</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Tremembé", href: "/renovacao-clcb-tremembe-sao-paulo" },
            { nome: "Tucuruvi", href: "/renovacao-clcb-tucuruvi-sao-paulo" },
            { nome: "Mandaqui", href: "/renovacao-clcb-mandaqui-sao-paulo" },
            { nome: "Santana", href: "/renovacao-clcb-santana-sao-paulo" },
            { nome: "Zona Norte", href: "/renovacao-clcb-zona-norte-sao-paulo" },
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
