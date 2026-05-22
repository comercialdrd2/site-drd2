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
const slug = "renovacao-clcb-aricanduva-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Aricanduva | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Aricanduva com agilidade. Comércios, clínicas e serviços na Av. Aricanduva e entorno do Shopping Aricanduva. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Aricanduva | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Aricanduva. Atendemos comércios, clínicas e prestadores de serviço na Zona Leste de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Aricanduva – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Aricanduva, Zona Leste de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Leste", item: `${BASE_URL}/renovacao-clcb-zona-leste-sao-paulo` },
    { name: "Aricanduva", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Aricanduva?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, academias e prestadores de serviço no Aricanduva precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Aricanduva?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos próximos ao Shopping Aricanduva?",
      answer:
        "Sim. Atendemos toda a região do Aricanduva, Vila Matilde, Carrão e adjacências do Shopping Aricanduva e da Av. Aricanduva.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Aricanduva?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores — como o próprio shopping. A maioria dos comércios de rua do Aricanduva se enquadra no CLCB.",
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
            Zona Leste · Aricanduva · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Aricanduva?<br />Regularize Antes da Fiscalização
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Aricanduva. Aprovação ágil no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Aricanduva"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Aricanduva: Comércio Local e Galerias em Dia
        </h2>
        <p className="text-gray-700 mb-4">
          O Aricanduva é um dos eixos comerciais mais dinâmicos da Zona Leste. A{" "}
          <strong>Av. Aricanduva</strong> e o entorno do{" "}
          <strong>Shopping Aricanduva</strong> concentram lojas de rua, clínicas populares,
          academias, farmácias e prestadores de serviço que atendem a bairros como Vila
          Matilde, Carrão e Penha. Com alto fluxo de clientes e fiscalização frequente, a
          regularização do CLCB é especialmente crítica nessa região.
        </p>
        <p className="text-gray-700 mb-4">
          A DRD2 Engenharia cuida de todo o processo de renovação do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong>: vistoria
          técnica, laudo assinado por engenheiro habilitado e protocolo no CBPMESP — sem
          burocracia para o proprietário.
        </p>
        <p className="text-gray-700">
          Conhecemos o perfil dos imóveis da região — muitos em galerias ou reformados de
          uso residencial — e entregamos a documentação correta na primeira tentativa.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            CLCB no Aricanduva: Quem É Obrigado
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB é exigido para qualquer edificação com <strong>até 750 m²</strong> e
            classificada como <strong>baixo risco de incêndio</strong> pelo CBPMESP.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Lojas em galerias e comércio de rua</li>
            <li>Clínicas médicas, odontológicas e de estética</li>
            <li>Academias e estúdios de pilates</li>
            <li>Farmácias, padarias e mercados de bairro</li>
            <li>Oficinas de serviço, salões de beleza e barbearias</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido sujeita o proprietário a multas e risco de
            interdição pela Vigilância Sanitária ou Prefeitura durante vistorias de rotina.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB no Aricanduva
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              t: "Análise Inicial",
              d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Verificamos o CLCB anterior e o tipo de ocupação para definir a documentação necessária.",
            },
            {
              n: "2",
              t: "Vistoria no Local",
              d: "Um engenheiro visita o seu ponto comercial no Aricanduva para checar equipamentos de segurança: extintores, sinalização de saída e iluminação de emergência.",
            },
            {
              n: "3",
              t: "Laudo Técnico e Protocolo",
              d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP com toda a documentação exigida para aprovação.",
            },
            {
              n: "4",
              t: "Certificado Emitido",
              d: "Em média 5 a 10 dias úteis depois, você recebe o CLCB renovado em formato digital — pronto para apresentar ao alvará da Prefeitura.",
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
          Atendemos toda a região da Av. Aricanduva e Shopping Aricanduva
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia no Aricanduva
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Experiência na Zona Leste",
                texto:
                  "Atuamos em Tatuapé, Penha, Itaquera e Aricanduva. Conhecemos as particularidades dos imóveis da região e as exigências do CBPMESP para cada tipo de ocupação.",
              },
              {
                titulo: "Tudo Incluso no Preço",
                texto:
                  "ART, laudo técnico, protocolo e acompanhamento do processo — sem cobranças adicionais surpresa.",
              },
              {
                titulo: "Prazo Garantido",
                texto:
                  "Em média 5 a 10 dias úteis. Você sabe exatamente quando o CLCB será entregue para planejar a apresentação ao alvará.",
              },
              {
                titulo: "Gestão do Vencimento",
                texto:
                  "Monitoramos a validade do seu CLCB e avisamos com antecedência, para que você nunca seja surpreendido por fiscalização com o documento vencido.",
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
          text: "Tenho uma loja de roupas em galeria na Av. Aricanduva. A DRD2 foi recomendação de uma vizinha de ponto e não me arrependo. Resolveram o CLCB em menos de uma semana e ainda orientaram sobre o que precisava ajustar nos extintores. Serviço de qualidade.",
          author: "Rosana Melo",
          role: "Proprietária de loja de confecções, Aricanduva",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Perguntas Frequentes — CLCB Aricanduva
        </h2>
        <div className="space-y-5">
          {[
            {
              q: "O que é o CLCB e quem precisa ter no Aricanduva?",
              a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, academias e prestadores de serviço no Aricanduva precisam manter o documento válido.",
            },
            {
              q: "Qual o prazo para renovar o CLCB no Aricanduva?",
              a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
            },
            {
              q: "Atende estabelecimentos próximos ao Shopping Aricanduva?",
              a: "Sim. Atendemos toda a região do Aricanduva, Vila Matilde, Carrão e adjacências do shopping.",
            },
            {
              q: "Qual a diferença entre CLCB e AVCB no Aricanduva?",
              a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios de rua do Aricanduva se enquadra no CLCB.",
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
            Solicite uma Proposta para o Aricanduva
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
            { nome: "Tatuapé", href: "/renovacao-clcb-tatua pe-sao-paulo" },
            { nome: "Penha", href: "/renovacao-clcb-penha-sao-paulo" },
            { nome: "Itaquera", href: "/renovacao-clcb-itaquera-sao-paulo" },
            { nome: "Vila Matilde", href: "/renovacao-clcb-vila-matilde-sao-paulo" },
            { nome: "Zona Leste", href: "/renovacao-clcb-zona-leste-sao-paulo" },
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

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={slug} />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />
    </>
  );
}
