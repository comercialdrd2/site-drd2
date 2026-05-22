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
const slug = "renovacao-clcb-mandaqui-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Mandaqui | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Mandaqui com agilidade. Comércios, clínicas e serviços na Av. Engenheiro Caetano Álvares e entorno. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Mandaqui | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Mandaqui. Atendemos comércios, clínicas e prestadores de serviço na Zona Norte de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Mandaqui – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Mandaqui, Zona Norte de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Norte", item: `${BASE_URL}/renovacao-clcb-zona-norte-sao-paulo` },
    { name: "Mandaqui", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Mandaqui?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, farmácias e prestadores de serviço no Mandaqui precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Mandaqui?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos na Av. Engenheiro Caetano Álvares?",
      answer:
        "Sim. Atendemos toda a região do Mandaqui, incluindo o eixo da Av. Engenheiro Caetano Álvares, Tucuruvi e adjacências.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Mandaqui?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco. A maioria dos comércios do Mandaqui se enquadra no CLCB.",
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
            Zona Norte · Mandaqui · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Mandaqui?<br />Regularize Rápido e Sem Burocracia
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Mandaqui. Aprovação ágil no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Mandaqui"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Mandaqui: Comércio de Bairro em Conformidade
        </h2>
        <p className="text-gray-700 mb-4">
          O Mandaqui é um bairro residencial consolidado da Zona Norte, com comércio
          local concentrado ao longo da <strong>Av. Engenheiro Caetano Álvares</strong> —
          principal corredor que conecta a região ao Tucuruvi e ao centro. Farmácias,
          padarias, mercados, clínicas e prestadores de serviço formam a espinha dorsal
          do comércio local.
        </p>
        <p className="text-gray-700 mb-4">
          Para funcionar legalmente, todos esses estabelecimentos com até 750 m² precisam
          do <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido.
          A DRD2 Engenharia cuida de todo o processo: vistoria técnica, laudo e protocolo
          no CBPMESP — sem que o proprietário precise se deslocar.
        </p>
        <p className="text-gray-700">
          Com experiência na Zona Norte, conhecemos as características dos imóveis do
          Mandaqui e entregamos a documentação correta na primeira tentativa.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB no Mandaqui
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB é obrigatório para edificações com <strong>até 750 m²</strong> e
            classificadas como <strong>baixo risco de incêndio</strong> pelo CBPMESP:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Comércios em geral: farmácias, padarias, mercados, lojas</li>
            <li>Clínicas médicas e odontológicas</li>
            <li>Academias e prestadores de serviço</li>
            <li>Salões de beleza e barbearias</li>
            <li>Escritórios e consultórios</li>
          </ul>
          <p className="text-gray-700">
            O CLCB tem validade de 1 a 3 anos. Funcionar com o documento vencido sujeita
            o proprietário a multas e risco de interdição durante fiscalizações.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB no Mandaqui
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Avaliamos o CLCB anterior e definimos a documentação necessária." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento no Mandaqui para verificar extintores, sinalização de saída e iluminação de emergência." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP com toda a documentação exigida." },
            { n: "4", t: "Entrega do CLCB", d: "Em 5 a 10 dias úteis você recebe o certificado digital — válido para o alvará da Prefeitura." },
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
          Atendemos toda a região do Mandaqui e Av. Eng. Caetano Álvares
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia no Mandaqui
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Experiência na Zona Norte", texto: "Atuamos em Santana, Tucuruvi, Casa Verde e Mandaqui. Conhecemos as exigências do CBPMESP para os perfis de imóvel da região." },
              { titulo: "Tudo Incluso", texto: "ART, laudo técnico, protocolo e acompanhamento inclusos. Sem cobranças adicionais surpresa." },
              { titulo: "Prazo Definido", texto: "Em média 5 a 10 dias úteis. Você sabe quando o CLCB será entregue." },
              { titulo: "Controle de Vencimento", texto: "Avisamos quando o próximo vencimento se aproxima para que você nunca seja surpreendido por fiscalização." },
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
          text: "Tenho uma clínica odontológica no Mandaqui há oito anos. A DRD2 renovou o CLCB em menos de uma semana — rápido, sem enrolação e com preço justo. Já indiquei para outros colegas do bairro.",
          author: "Dr. Fábio Nascimento",
          role: "Cirurgião-dentista, Mandaqui",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Mandaqui</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter no Mandaqui?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Mandaqui precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB no Mandaqui?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos na Av. Engenheiro Caetano Álvares?", a: "Sim. Atendemos toda a região do Mandaqui, Tucuruvi e adjacências." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores ou de maior risco." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para o Mandaqui</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Tucuruvi", href: "/renovacao-clcb-tucuruvi-sao-paulo" },
            { nome: "Santana", href: "/renovacao-clcb-santana-sao-paulo" },
            { nome: "Casa Verde", href: "/renovacao-clcb-casa-verde-sao-paulo" },
            { nome: "Pirituba", href: "/renovacao-clcb-pirituba-sao-paulo" },
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
