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
const slug = "renovacao-clcb-graja-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Grajaú | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Grajaú com agilidade. Comércios, clínicas e serviços na Estrada de Itapecerica e Av. Belmira Marin. Aprovação no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Grajaú | DRD2 Engenharia",
    description:
      "Regularize o CLCB do seu negócio no Grajaú. Atendemos comércios, clínicas e prestadores de serviço na Zona Sul de São Paulo.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Grajaú – DRD2 Engenharia",
  description:
    "Renovação do Certificado de Licença do Corpo de Bombeiros (CLCB) para estabelecimentos no Grajaú, Zona Sul de São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Sul", item: `${BASE_URL}/renovacao-clcb-zona-sul-sao-paulo` },
    { name: "Grajaú", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    {
      question: "O que é o CLCB e quem precisa ter no Grajaú?",
      answer:
        "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas, farmácias e prestadores de serviço no Grajaú precisam manter o documento válido para funcionar legalmente.",
    },
    {
      question: "Qual o prazo para renovar o CLCB no Grajaú?",
      answer:
        "Com a DRD2 Engenharia, o processo é concluído em média em 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP.",
    },
    {
      question: "Atende estabelecimentos na Estrada de Itapecerica e Av. Belmira Marin?",
      answer:
        "Sim. Atendemos toda a região do Grajaú, incluindo os corredores da Estrada de Itapecerica, Av. Belmira Marin e os terminais de ônibus Grajaú e Parque Dom Pedro II da Zona Sul.",
    },
    {
      question: "Qual a diferença entre CLCB e AVCB no Grajaú?",
      answer:
        "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial do Corpo de Bombeiros. O AVCB é para edificações maiores. A maioria dos comércios do Grajaú se enquadra no CLCB.",
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
            Zona Sul · Grajaú · São Paulo
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CLCB Vencido no Grajaú?<br />Renove com Quem Atende a Zona Sul
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Renovamos o Certificado de Licença do Corpo de Bombeiros para comércios,
            clínicas e serviços no Grajaú. Processo rápido e preço acessível.
          </p>
          <CtaWhatsApp label="Solicitar Orçamento Gratuito" size="lg" centered />
        </div>
      </section>

      {/* Imagem */}
      <section className="flex justify-center py-8 px-4 bg-gray-50">
        <Image
          src="/images/page-clcb.webp"
          alt="Renovação de CLCB no Grajaú"
          width={800}
          height={450}
          className="rounded-xl shadow-md w-full max-w-3xl object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Renovação de CLCB no Grajaú: O Maior Distrito da Zona Sul
        </h2>
        <p className="text-gray-700 mb-4">
          O Grajaú é o maior distrito da Zona Sul em população, com um comércio popular
          intenso ao longo da <strong>Estrada de Itapecerica</strong> e da{" "}
          <strong>Av. Belmira Marin</strong>. Farmácias, mercados, clínicas populares,
          padarias e prestadores de serviço atendem centenas de milhares de moradores —
          com fiscalização crescente por parte da Prefeitura e dos Bombeiros.
        </p>
        <p className="text-gray-700 mb-4">
          Todo estabelecimento com até 750 m² e baixo risco de incêndio precisa do{" "}
          <strong>CLCB</strong> válido. A DRD2 Engenharia realiza todo o processo:
          vistoria, laudo técnico com ART e protocolo no CBPMESP — com preço justo e
          prazo garantido.
        </p>
        <p className="text-gray-700">
          Conhecemos os imóveis do Grajaú — muitos em casas adaptadas ou galerias
          populares — e garantimos aprovação na primeira tentativa.
        </p>
      </section>

      {/* O que é o CLCB */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quem Precisa de CLCB no Grajaú
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Mercados, padarias, farmácias e lojas em geral</li>
            <li>Clínicas médicas e odontológicas populares</li>
            <li>Academias e centros comunitários</li>
            <li>Salões de beleza, barbearias e lavanderias</li>
            <li>Prestadores de serviço em galerias</li>
          </ul>
          <p className="text-gray-700">
            Funcionar com o CLCB vencido sujeita o proprietário a multas, interdição e
            cancelamento do alvará de funcionamento pela Prefeitura.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Como Renovamos o CLCB no Grajaú
        </h2>
        <ol className="space-y-4">
          {[
            { n: "1", t: "Contato Inicial", d: "Você nos envia os dados pelo WhatsApp. Avaliamos o CLCB anterior e identificamos o que precisa ser atualizado." },
            { n: "2", t: "Vistoria Técnica", d: "Um engenheiro vai até o seu estabelecimento no Grajaú para verificar extintores, sinalização e iluminação de emergência." },
            { n: "3", t: "Laudo e Protocolo", d: "Elaboramos o laudo técnico com ART e protocolamos no CBPMESP com toda a documentação necessária." },
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
          Atendemos toda a região do Grajaú, Estrada de Itapecerica e Av. Belmira Marin
        </p>
        <CtaWhatsApp label="Falar com Especialista" centered />
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Por Que Escolher a DRD2 Engenharia no Grajaú
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Preço Acessível", texto: "Orçamento transparente sem cobranças surpresa. ART e emolumentos incluídos no valor fechado." },
              { titulo: "Experiência na Zona Sul", texto: "Atuamos em M'Boi Mirim, Campo Limpo, Capão Redondo e Grajaú. Conhecemos os perfis de imóvel da região." },
              { titulo: "Sem Burocracia", texto: "Você não precisa se deslocar — todo o processo é conduzido por nossa equipe, do primeiro contato até a entrega do certificado." },
              { titulo: "Controle de Vencimento", texto: "Monitoramos seu CLCB e avisamos antes do vencimento para você nunca ser surpreendido por fiscalização." },
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
          text: "Tenho uma farmácia no Grajaú e sempre deixava o CLCB para a última hora. A DRD2 resolveu tudo rapidinho e ainda me explicou o que era cada documento. Preço justo e atendimento excelente. Já renovei duas vezes com eles.",
          author: "Solange Ferreira",
          role: "Proprietária de farmácia, Grajaú",
        }}
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes — CLCB Grajaú</h2>
        <div className="space-y-5">
          {[
            { q: "O que é o CLCB e quem precisa ter no Grajaú?", a: "O CLCB é obrigatório para edificações com até 750 m² e baixo risco de incêndio. Comércios, clínicas e prestadores de serviço no Grajaú precisam manter o documento válido." },
            { q: "Qual o prazo para renovar o CLCB no Grajaú?", a: "Em média 5 a 10 dias úteis — vistoria, documentação e aprovação no CBPMESP." },
            { q: "Atende estabelecimentos na Estrada de Itapecerica?", a: "Sim. Atendemos toda a região do Grajaú, Estrada de Itapecerica e Av. Belmira Marin." },
            { q: "Qual a diferença entre CLCB e AVCB?", a: "O CLCB é para edificações menores (até 750 m²) com baixo risco, sem vistoria presencial. O AVCB é para edificações maiores. A maioria dos comércios do Grajaú se enquadra no CLCB." },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Solicite uma Proposta para o Grajaú</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Resposta em até 1 hora útil</p>
          <LeadForm />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Também Atendemos Bairros Vizinhos</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            { nome: "M'Boi Mirim", href: "/renovacao-clcb-mboi-mirim-sao-paulo" },
            { nome: "Capão Redondo", href: "/renovacao-clcb-capao-redondo-sao-paulo" },
            { nome: "Campo Limpo", href: "/renovacao-clcb-campo-limpo-sao-paulo" },
            { nome: "Interlagos", href: "/renovacao-clcb-interlagos-sao-paulo" },
            { nome: "Zona Sul", href: "/renovacao-clcb-zona-sul-sao-paulo" },
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
