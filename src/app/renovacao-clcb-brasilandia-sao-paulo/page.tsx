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
const slug = "renovacao-clcb-brasilandia-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB na Brasilândia | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento na Brasilândia com agilidade. Comércios, clínicas e serviços na Av. Deputado Emílio Carlos e região. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB na Brasilândia | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio na Brasilândia. Atendemos comércios, clínicas e prestadores de serviço na Zona Norte de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB na Brasilândia – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos na Brasilândia, Zona Norte de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Norte", item: `${BASE_URL}/renovacao-clcb-zona-norte-sao-paulo` },
    { name: "Brasilândia", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter na Brasilândia?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, farmácias e prestadores de serviço na Brasilândia precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB na Brasilândia?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos na Av. Deputado Emílio Carlos?",
      answer:
        "Sim. Atendemos toda a Brasilândia, incluindo o eixo da Av. Deputado Emílio Carlos e as vias que conectam ao terminal de ônibus da região.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB na Brasilândia?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco. A maioria dos comércios da Brasilândia se enquadra no CLCB.",
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
            Zona Norte · Brasilândia · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido na Brasilândia?<br />Renove com Quem Atende a Zona Norte
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços na Brasilândia. Processo rápido e sem burocracia.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB na Brasilândia"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB na Brasilândia: Comércio Popular em Regularidade
        </h2>
        <p className="text-gray-700 mb-4">
          A Brasilândia é um dos distritos mais populosos da Zona Norte, com um comércio
          popular vibrante concentrado na <strong>Av. Deputado Emílio Carlos</strong> e
          nas vias que convergem para os terminais de ônibus da região. Farmácias,
          mercados, clínicas populares, academias e prestadores de serviço atendem uma das
          maiores populações da cidade.
        </p>
        <p className="text-gray-700 mb-4">
          Para funcionar legalmente, esses estabelecimentos precisam manter o{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido.
          A DRD2 Engenharia realiza todo o processo: vistoria, laudo técnico e protocolo
          no CBPMESP — com preço justo e prazo garantido.
        </p>
        <p className="text-gray-700">
          Nossa equipe tem experiência com imóveis adaptados e galerias populares da
          Brasilândia, garantindo que a documentação seja aprovada sem retrabalho.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB na Brasilândia
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB é exigido para edificações com <strong>até 750 m²</strong> e baixo
            risco de incêndio:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Mercados, padarias, farmácias e lojas em geral</li>
            <li>Clínicas médicas e odontológicas populares</li>
            <li>Academias e estúdios de dança</li>
            <li>Salões de beleza e barbearias</li>
            <li>Prestadores de serviço em galerias</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido sujeita o proprietário a multas e interdição.
            A DRD2 garante que seu negócio esteja sempre regularizado.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB na Brasilândia
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Avaliamos o CLCB anterior e definimos o que precisa ser atualizado." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai ao seu estabelecimento na Brasilândia para verificar os equipamentos de segurança contra incêndio." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP com toda a documentação necessária." },
            { n: "4", t: "CLCB Renovado", d: "Em 5 a 10 dias úteis você recebe o certificado digital — pronto para apresentar ao alvará de funcionamento." },
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
          Atendemos toda a Brasilândia e Av. Deputado Emílio Carlos
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que a DRD2 Engenharia É a Escolha Certa na Brasilândia
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Preço Acessível", texto: "Orçamento transparente, sem cobranças surpresa. ART e todos os emolumentos incluídos no valor fechado." },
              { titulo: "Experiência na Zona Norte", texto: "Atuamos em Pirituba, Casa Verde, Mandaqui e Brasilândia. Conhecemos as exigências do CBPMESP para a região." },
              { titulo: "Atendimento via WhatsApp", texto: "Processo 100% facilitado — sem que você precise se deslocar para resolver burocracia." },
              { titulo: "Controle de Vencimento", texto: "Monitoramos a validade do seu CLCB e avisamos antes do vencimento, garantindo conformidade contínua." },
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
          text: "Tenho um mercadinho na Brasilândia há quinze anos e sempre tive dificuldade em renovar o CLCB por conta própria. A DRD2 resolveu tudo em menos de dez dias, com preço honesto. Indico sem hesitar.",
          author: "José Raimundo",
          role: "Proprietário de mercado, Brasilândia",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Brasilândia</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter na Brasilândia?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço na Brasilândia precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB na Brasilândia?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos na Av. Deputado Emílio Carlos?", a: "Sim. Atendemos toda a Brasilândia, incluindo o eixo da Av. Deputado Emílio Carlos e os terminais de ônibus da região." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios da Brasilândia se enquadra no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para a Brasilândia</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "Casa Verde", href: "/renovacao-clcb-casa-verde-sao-paulo" },
            { nome: "Pirituba", href: "/renovacao-clcb-pirituba-sao-paulo" },
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

      <NeighborhoodSilo currentSlug={slug} />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />
    </>
  );
}
