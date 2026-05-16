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
const slug = "renovacao-clcb-tremembe-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Tremembé | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Tremembé com agilidade. Comércios, clínicas e serviços na Av. Coronel Sezefredo Fagundes e CPTM Tremembé. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Tremembé | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Tremembé. Atendemos comércios, clínicas e prestadores de serviço na Zona Norte de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Tremembé – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Tremembé, Zona Norte de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Norte", item: `${BASE_URL}/renovacao-clcb-zona-norte-sao-paulo` },
    { name: "Tremembé", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Tremembé?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Tremembé precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Tremembé?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos próximos à CPTM Tremembé?",
      answer:
        "Sim. Atendemos toda a região do Tremembé, incluindo o entorno da estação CPTM Tremembé (Linha 7-Rubi), Av. Coronel Sezefredo Fagundes e Jaçanã.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Tremembé?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios do Tremembé se enquadra no CLCB.",
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
            Zona Norte · Tremembé · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Tremembé?<br />Renove Rápido e Sem Complicação
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Tremembé. Aprovação garantida no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Tremembé"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Tremembé: Norte da Cidade em Regularidade
        </h2>
        <p className="text-gray-700 mb-4">
          O Tremembé é um dos bairros mais ao norte de São Paulo, com comércio local
          concentrado na <strong>Av. Coronel Sezefredo Fagundes</strong> e nas vias que
          conectam a região à <strong>estação CPTM Tremembé (Linha 7-Rubi)</strong>.
          Mercados, farmácias, clínicas, padarias e prestadores de serviço formam a base
          do comércio de um bairro em constante crescimento residencial.
        </p>
        <p className="text-gray-700 mb-4">
          Todo estabelecimento com até 750 m² precisa do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido.
          A DRD2 Engenharia cuida de todo o processo: vistoria, laudo com ART e protocolo
          no CBPMESP — com preço justo e prazo definido.
        </p>
        <p className="text-gray-700">
          Nossa equipe tem experiência com os imóveis do extremo norte da cidade e garante
          aprovação na primeira tentativa.
        </p>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quem Precisa de CLCB no Tremembé</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Mercados, padarias, farmácias e lojas em geral</li>
            <li>Clínicas médicas e odontológicas</li>
            <li>Academias e centros esportivos</li>
            <li>Salões de beleza e barbearias</li>
            <li>Prestadores de serviço em geral</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido sujeita o proprietário a multas e interdição
            durante fiscalizações da Prefeitura e dos Bombeiros.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Como Renovamos o CLCB no Tremembé</h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados pelo WhatsApp. Avaliamos o CLCB anterior e identificamos o que precisa ser atualizado." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento no Tremembé para verificar extintores, sinalização e iluminação de emergência." },
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
          Atendemos toda a região do Tremembé, CPTM e Av. Cel. Sezefredo Fagundes
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Por Que Escolher a DRD2 Engenharia no Tremembé</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Atende o Extremo Norte", texto: "Cobrimos desde o Centro até o Tremembé. Nenhum endereço da Zona Norte fica fora do nosso raio de atendimento." },
              { titulo: "Tudo Incluso", texto: "ART, laudo técnico, protocolo e acompanhamento no valor fechado — sem surpresas." },
              { titulo: "Prazo Definido", texto: "Em média 5 a 10 dias úteis. Você sabe exatamente quando o CLCB será entregue." },
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
          text: "Minha clínica odontológica fica no Tremembé e eu não sabia nem por onde começar para renovar o CLCB. A DRD2 me orientou em tudo, fez a vistoria rapidinho e entregou o certificado em uma semana. Serviço impecável.",
          author: "Dra. Fernanda Lopes",
          role: "Cirurgiã-dentista, Tremembé",
        }}
      />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Tremembé</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter no Tremembé?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Tremembé precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB no Tremembé?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende próximo à estação CPTM Tremembé?", a: "Sim. Atendemos toda a região do Tremembé, CPTM Linha 7-Rubi e Av. Cel. Sezefredo Fagundes." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios do Tremembé se enquadra no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para o Tremembé</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Jaçanã", href: "/renovacao-clcb-jacana-sao-paulo" },
            { nome: "Tucuruvi", href: "/renovacao-clcb-tucuruvi-sao-paulo" },
            { nome: "Mandaqui", href: "/renovacao-clcb-mandaqui-sao-paulo" },
            { nome: "Brasilândia", href: "/renovacao-clcb-brasilandia-sao-paulo" },
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

      <NeighborhoodSilo currentSlug={slug} />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />
    </>
  );
}
