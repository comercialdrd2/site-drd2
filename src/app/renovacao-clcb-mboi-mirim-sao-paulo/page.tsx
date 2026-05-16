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
const slug = "renovacao-clcb-mboi-mirim-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no M'Boi Mirim | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no M'Boi Mirim com agilidade. Comércios, clínicas e serviços na Estrada do M'Boi Mirim e Av. Guarapiranga. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no M'Boi Mirim | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no M'Boi Mirim. Atendemos comércios, clínicas e prestadores de serviço na Zona Sul de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no M'Boi Mirim – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no M'Boi Mirim, Zona Sul de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "M'Boi Mirim", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no M'Boi Mirim?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, farmácias e prestadores de serviço no M'Boi Mirim precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no M'Boi Mirim?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos na Estrada do M'Boi Mirim?",
      answer:
        "Sim. Atendemos toda a subprefeitura do M'Boi Mirim, incluindo Jardim Ângela, Jardim São Luís e os corredores da Estrada do M'Boi Mirim e Av. Guarapiranga.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores ou de maior risco. A maioria dos comércios do M'Boi Mirim se enquadra no CLCB.",
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
            Zona Sul · M'Boi Mirim · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no M'Boi Mirim?<br />Renove com Quem Conhece a Região
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no M'Boi Mirim. Processo rápido e aprovação garantida.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no M'Boi Mirim"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no M'Boi Mirim: Do Jardim Ângela ao Jardim São Luís
        </h2>
        <p className="text-gray-700 mb-4">
          A subprefeitura do <strong>M'Boi Mirim</strong> abrange dois dos maiores bairros
          populacionais da Zona Sul: <strong>Jardim Ângela</strong> e{" "}
          <strong>Jardim São Luís</strong>. O comércio local se concentra ao longo da{" "}
          <strong>Estrada do M'Boi Mirim</strong>, da <strong>Av. Guarapiranga</strong> e
          dos eixos que conectam os terminais de ônibus da região — com forte presença de
          farmácias, padarias, mercados, clínicas populares e prestadores de serviço.
        </p>
        <p className="text-gray-700 mb-4">
          Todo estabelecimento nessa área com até 750 m² e baixo risco de incêndio precisa
          manter o <strong>CLCB</strong> válido. A DRD2 Engenharia cuida de toda a renovação:
          vistoria técnica, laudo e protocolo no CBPMESP — sem que o proprietário precise
          se deslocar para resolver burocracia.
        </p>
        <p className="text-gray-700">
          Com experiência consolidada na Zona Sul, conhecemos as características dos imóveis
          do M'Boi Mirim — muitos em lotes irregulares adaptados ou em galerias populares —
          e sabemos como conduzir a regularização de forma prática e acessível.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            O Que É o CLCB e Por Que Manter Renovado
          </h2>
          <p className="text-gray-700 mb-4">
            O CLCB (Certificado de Licença do Corpo de Bombeiros) é o documento emitido pelo
            CBPMESP que comprova que o estabelecimento cumpre as normas de segurança contra
            incêndio. É obrigatório para edificações com <strong>até 750 m²</strong> e{" "}
            <strong>baixo risco de incêndio</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Mercados, padarias, farmácias e lojas em geral</li>
            <li>Clínicas médicas e odontológicas populares</li>
            <li>Academias, igrejas e centros comunitários de pequeno porte</li>
            <li>Salões de beleza, barbearias e lavanderias</li>
            <li>Prestadores de serviço em geral</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido sujeita o proprietário a multas, interdição e
            cancelamento do alvará de funcionamento. A DRD2 garante que seu negócio esteja
            sempre regularizado.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Funciona a Renovação do CLCB no M'Boi Mirim
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              t: "Contato Inicial",
              d: "Você nos envia os dados do estabelecimento pelo WhatsApp. Analisamos o CLCB anterior e identificamos o que precisa ser atualizado.",
            },
            {
              n: "2",
              t: "Vistoria Técnica",
              d: "Um engenheiro vai até o seu estabelecimento no M'Boi Mirim para verificar extintores, sinalização e iluminação de emergência.",
            },
            {
              n: "3",
              t: "Laudo e Protocolo",
              d: "Elaboramos o laudo técnico assinado por engenheiro credenciado e protocolamos no CBPMESP com toda a documentação necessária.",
            },
            {
              n: "4",
              t: "Entrega do CLCB",
              d: "Após aprovação, você recebe o certificado digital em até 5 a 10 dias úteis — pronto para usar junto ao alvará de funcionamento.",
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
          Atendemos Jardim Ângela, Jardim São Luís e todo o M'Boi Mirim
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que a DRD2 Engenharia É a Escolha Certa no M'Boi Mirim
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Conhecimento da Zona Sul",
                texto:
                  "Atuamos em Campo Limpo, Capão Redondo e M'Boi Mirim há anos. Sabemos lidar com imóveis adaptados, galerias populares e situações de regularização mais complexas.",
              },
              {
                titulo: "Preço Justo e Transparente",
                texto:
                  "Orçamento fechado sem cobranças surpresa. A ART do engenheiro e todos os emolumentos estão incluídos no valor combinado.",
              },
              {
                titulo: "Atendimento Próximo",
                texto:
                  "Respondemos via WhatsApp com agilidade e mantemos o proprietário informado em cada etapa — sem que você precise ligar para descobrir o andamento.",
              },
              {
                titulo: "Arquivo Técnico",
                texto:
                  "Guardamos toda a documentação e avisamos quando o próximo vencimento se aproxima, garantindo que seu CLCB esteja sempre em dia.",
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
          text: "Tenho uma farmácia no Jardim Ângela há doze anos e nunca tinha conseguido renovar o CLCB sem dor de cabeça. A DRD2 resolveu tudo em uma semana, com preço justo e sem enrolação. Só tenho a agradecer.",
          author: "Cleide Santos",
          role: "Proprietária de farmácia, Jardim Ângela – M'Boi Mirim",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Perguntas Frequentes — CLCB M'Boi Mirim
        </h2>
        <div className="space-y-5">
          {[
            {
              q: "O que é o CLCB e quem precisa ter no M'Boi Mirim?",
              a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, farmácias e prestadores de serviço no M'Boi Mirim precisam manter o documento válido.",
            },
            {
              q: "Qual o prazo para renovar o CLCB no M'Boi Mirim?",
              a: "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
            },
            {
              q: "Atende estabelecimentos na Estrada do M'Boi Mirim?",
              a: "Sim. Atendemos toda a subprefeitura, incluindo Jardim Ângela, Jardim São Luís e os corredores da Estrada do M'Boi Mirim e Av. Guarapiranga.",
            },
            {
              q: "Qual a diferença entre CLCB e AVCB?",
              a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores ou de maior risco. A maioria dos comércios do M'Boi Mirim se enquadra no CLCB.",
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
            Solicite uma Proposta para o M'Boi Mirim
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
            { nome: "Capão Redondo", href: "/renovacao-clcb-capao-redondo-sao-paulo" },
            { nome: "Campo Limpo", href: "/renovacao-clcb-campo-limpo-sao-paulo" },
            { nome: "Santo Amaro", href: "/renovacao-clcb-santo-amaro-sao-paulo" },
            { nome: "Interlagos", href: "/renovacao-clcb-interlagos-sao-paulo" },
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

      <NeighborhoodSilo currentSlug={slug} />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />
    </>
  );
}
