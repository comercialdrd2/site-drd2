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
const slug = "renovacao-clcb-capao-redondo-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Capão Redondo | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Capão Redondo com agilidade. Comércios, clínicas e serviços na Av. Carlos Caldeira Filho e entorno do metrô Capão Redondo. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Capão Redondo | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Capão Redondo. Atendemos comércios, clínicas e prestadores de serviço na Zona Sul de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Capão Redondo – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Capão Redondo, Zona Sul de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "Capão Redondo", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Capão Redondo?",
      answer:
        "O CLCB (Certificado de Licença do Corpo de Bombeiros) é obrigatório para edificações com até 750 m² e baixo risco de incêndio, como comércios, clínicas, academias e prestadores de serviço. No Capão Redondo, qualquer estabelecimento nessa categoria precisa manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Capão Redondo?",
      answer:
        "A renovação deve ser feita antes do vencimento. Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP sem burocracia.",
    },
    {
      question: "Atende estabelecimentos perto do metrô Capão Redondo?",
      answer:
        "Sim. Atendemos toda a região do Capão Redondo, incluindo comércios na Av. Carlos Caldeira Filho, Estrada do M'Boi Mirim e adjacências ao terminal do metrô Linha 5-Lilás.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, com processo mais simples e sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco, com vistoria obrigatória. A grande maioria dos pequenos comércios do Capão Redondo se enquadra no CLCB.",
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
            Zona Sul · Capão Redondo · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Capão Redondo?<br />Regularize Sem Complicação
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Capão Redondo. Aprovação rápida no CBPMESP.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Capão Redondo"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Capão Redondo: Comércios e Clínicas em Dia
        </h2>
        <p className="text-gray-700 mb-4">
          O Capão Redondo é um dos bairros mais populosos da Zona Sul, com forte atividade
          comercial ao longo da <strong>Av. Carlos Caldeira Filho</strong> e das vias que
          convergem para o <strong>terminal de ônibus e metrô Capão Redondo (Linha 5-Lilás)</strong>.
          Farmácias, clínicas populares, academias, salões de beleza, mercearias e prestadores
          de serviço convivem com um dos fluxos de passageiros mais intensos da cidade.
        </p>
        <p className="text-gray-700 mb-4">
          Para funcionar legalmente, todos esses estabelecimentos precisam do{" "}
          <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> válido. A DRD2
          Engenharia cuida de todo o processo de renovação: levantamento das medidas de
          segurança existentes, elaboração do laudo técnico e protocolo no CBPMESP — sem
          que o proprietário precise sair do bairro.
        </p>
        <p className="text-gray-700">
          Com atuação consolidada na Zona Sul, conhecemos as características dos imóveis do
          Capão Redondo — muitos deles em casas adaptadas ou galerias de galeria — e sabemos
          como adequar a documentação de forma prática e sem surpresas no valor final.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            O Que É o CLCB e Por Que Renovar
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB é o documento emitido pelo Corpo de Bombeiros da Polícia Militar do Estado
            de São Paulo (CBPMESP) que atesta que um estabelecimento atende às normas de
            segurança contra incêndio. Ele é obrigatório para edificações com{" "}
            <strong>até 750 m²</strong> e classificadas como de{" "}
            <strong>baixo risco de incêndio</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Comércios em geral: lojas, mercados, farmácias, padarias</li>
            <li>Clínicas médicas, odontológicas e de estética</li>
            <li>Academias, escolas de idiomas e cursinhos</li>
            <li>Salões de beleza, barbearias e prestadores de serviço</li>
            <li>Escritórios e consultórios liberais</li>
          </ul>
          <p className="text-gray-700">
            O CLCB tem validade de <strong>1 a 3 anos</strong> conforme o tipo de ocupação.
            Funcionar com o documento vencido sujeita o proprietário a multas, interdição e
            invalidação do alvará de funcionamento pela Prefeitura de São Paulo.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Funciona a Renovação do CLCB no Capão Redondo
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              t: "Contato e Diagnóstico",
              d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Analisamos o histórico do CLCB anterior e identificamos o que precisa ser atualizado.",
            },
            {
              n: "2",
              t: "Vistoria Técnica",
              d: "Um engenheiro vai até o seu estabelecimento no Capão Redondo para verificar os equipamentos de segurança — extintores, sinalização, iluminação de emergência — e registrar as medidas existentes.",
            },
            {
              n: "3",
              t: "Laudo e Protocolo",
              d: "Elaboramos o laudo técnico e protocolamos o processo no CBPMESP com toda a documentação exigida.",
            },
            {
              n: "4",
              t: "Emissão do Certificado",
              d: "Após aprovação dos bombeiros, o CLCB é emitido em nome do responsável técnico. Você recebe o documento em formato digital para uso imediato.",
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
          Atendemos todo o Capão Redondo e região da Av. Carlos Caldeira Filho
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia no Capão Redondo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Experiência na Zona Sul",
                texto:
                  "Atuamos em Campo Limpo, M'Boi Mirim, Jardim Ângela e Capão Redondo há anos. Conhecemos os perfis de imóvel e as exigências locais do CBPMESP.",
              },
              {
                titulo: "Responsabilidade Técnica Incluída",
                texto:
                  "A ART do engenheiro responsável está incluída no serviço. Você não precisa contratar nada separado.",
              },
              {
                titulo: "Prazo Previsível",
                texto:
                  "Em média 5 a 10 dias úteis do primeiro contato até a entrega do CLCB renovado — sem surpresas no cronograma.",
              },
              {
                titulo: "Suporte Pós-Emissão",
                texto:
                  "Guardamos toda a documentação técnica e avisamos quando o próximo vencimento se aproxima, para que você nunca seja pego de surpresa.",
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
          text: "Tenho uma clínica de fisioterapia na Av. Carlos Caldeira Filho e sempre tive dificuldade com papelada do Corpo de Bombeiros. A DRD2 fez tudo em menos de uma semana e ainda me explicou o que cada item significa. Recomendo muito.",
          author: "Beatriz Almeida",
          role: "Fisioterapeuta, Capão Redondo",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Perguntas Frequentes — CLCB Capão Redondo
        </h2>
        <div className="space-y-5">
          {[
            {
              q: "O que é o CLCB e quem precisa ter no Capão Redondo?",
              a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, academias e prestadores de serviço no Capão Redondo precisam manter o documento válido para funcionar legalmente.",
            },
            {
              q: "Qual o prazo para renovar o CLCB no Capão Redondo?",
              a: "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP sem burocracia.",
            },
            {
              q: "Atende estabelecimentos perto do metrô Capão Redondo?",
              a: "Sim. Atendemos toda a região, incluindo comércios na Av. Carlos Caldeira Filho, Estrada do M'Boi Mirim e adjacências ao terminal do metrô Linha 5-Lilás.",
            },
            {
              q: "Qual a diferença entre CLCB e AVCB?",
              a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco. A grande maioria dos pequenos comércios do Capão Redondo se enquadra no CLCB.",
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
            Solicite uma Proposta para o Capão Redondo
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
            { nome: "Campo Limpo", href: "/renovacao-clcb-campo-limpo-sao-paulo" },
            { nome: "M'Boi Mirim", href: "/renovacao-clcb-mboi-mirim-sao-paulo" },
            { nome: "Jardim Ângela", href: "/renovacao-clcb-jardim-angela-sao-paulo" },
            { nome: "Santo Amaro", href: "/renovacao-clcb-santo-amaro-sao-paulo" },
            { nome: "Zona Sul", href: "/renovacao-clcb-zona-sul-sao-paulo" },
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
