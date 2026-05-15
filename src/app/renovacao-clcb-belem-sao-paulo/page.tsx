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

const BASE_URL = "https://www.drd2engenharia.com.br";
const slug = "renovacao-clcb-belem-sao-paulo";

export const metadata: Metadata = {
  title: "Renovação de CLCB no Belém | DRD2 Engenharia – São Paulo",
  description:
    "Renove o CLCB do seu estabelecimento no Belém com agilidade. Comércios, clínicas e indústrias na Av. Celso Garcia e Rua do Gasômetro. Aprovação garantida no CBPMESP.",
  alternates: { canonical: `${BASE_URL}/${slug}` },
  openGraph: {
    title: "Renovação de CLCB no Belém | DRD2 Engenharia",
    description: "CLCB vencido no Belém? Atendemos comércios, clínicas e estabelecimentos com agilidade. Evite multas e interdição.",
    url: `${BASE_URL}/${slug}`,
    siteName: "DRD2 Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${BASE_URL}/images/page-clcb.webp`, width: 1200, height: 630 }],
  },
};

const schema = generateMasterSchema({
  slug,
  title: "Renovação de CLCB no Belém",
  description: "Serviço especializado de renovação do Certificado de Licença do Corpo de Bombeiros para estabelecimentos no Belém, São Paulo.",
  breadcrumbs: [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Renovação CLCB", item: `${BASE_URL}/renovacao-clcb-sao-paulo` },
    { name: "Zona Leste", item: `${BASE_URL}/renovacao-clcb-zona-leste-sao-paulo` },
    { name: "Belém", item: `${BASE_URL}/${slug}` },
  ],
  faqs: [
    { question: "Estabelecimentos no Belém precisam de CLCB?", answer: "Sim. Comércios, clínicas e indústrias leves com até 750 m² e baixo risco de incêndio no Belém precisam do CLCB emitido pelo CBPMESP." },
    { question: "O Belém tem muitos galpões e indústrias. Precisam de CLCB?", answer: "Depende da atividade e do risco. Indústrias leves e depósitos de baixo risco com até 750 m² se enquadram no CLCB. Atividades de risco médio ou alto requerem AVCB. Nossa equipe avalia sua situação." },
    { question: "A DRD2 atende o Belém?", answer: "Sim. Atendemos todo o Belém, Mooca, Brás, Tatuapé e toda a Zona Leste central." },
    { question: "Qual o prazo para renovar o CLCB no Belém?", answer: "Em média 15 a 30 dias úteis após o protocolo no CBPMESP. Recomendamos iniciar 90 dias antes do vencimento." },
    { question: "A proximidade com o Brás afeta a fiscalização no Belém?", answer: "Sim. O Belém e o Brás formam um corredor industrial e comercial com operações conjuntas do CBPMESP, especialmente em depósitos e galpões adaptados." },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">CLCB Vencido no Belém — Regularize Agora</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">Renovação de CLCB no Belém: Comércios, Clínicas e Galpões em Dia</h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">O Belém mistura comércio de bairro, pequenas indústrias e serviços na Av. Celso Garcia — todos sujeitos à exigência do CBPMESP. A DRD2 Engenharia resolve com agilidade e sem burocracia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaWhatsApp label="Solicitar Orçamento Grátis" variant="primary" size="lg" centered />
            <Link href="#lead-form" className="bg-white text-red-700 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition text-lg">Falar com Engenheiro</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-red-100">
            <span>✓ Atendimento no Belém e arredores</span>
            <span>✓ Aprovação garantida no CBPMESP</span>
            <span>✓ Sem burocracia para o cliente</span>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Quem Precisa Renovar o CLCB no Belém?</h2>
          <p className="text-center text-gray-500 mb-10">O Belém é vizinho do Brás e da Mooca — bairro de transição industrial com comércio, depósitos e clínicas sob obrigação do CBPMESP.</p>
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">Estabelecimentos da região:</h3>
              <ul className="space-y-2 text-gray-700">
                {["Comércios atacadistas na Av. Celso Garcia", "Depósitos e armazéns de baixo risco", "Clínicas médicas e consultórios", "Restaurantes e padarias de bairro", "Academias e serviços de saúde", "Oficinas mecânicas e serviços automotivos", "Pequenas indústrias de alimentos", "Galpões logísticos com até 750 m²"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-4">Por que o risco é alto aqui?</h3>
              <ul className="space-y-2 text-gray-700">
                {["Corredor Brás–Belém: fiscalização em toda a extensão da Av. Celso Garcia", "Galpões e depósitos: risco de incêndio maior que varejo", "Contratos de locação de imóveis industriais exigem CLCB", "Imóveis antigos adaptados sem adequação das saídas de emergência", "Industriais de alimentos: Vigilância Sanitária ativa na região", "Metrô Belém (Linha 3): fiscalização no entorno comercial"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">▲</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ num: "28+", label: "anos de exigência CLCB em SP" }, { num: "≤750m²", label: "área elegível para CLCB" }, { num: "72h", label: "prazo médio para protocolo" }, { num: "100%", label: "aprovação garantida" }].map((s) => (
              <div key={s.label} className="bg-red-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-extrabold text-red-600">{s.num}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">O Que Acontece com CLCB Vencido no Belém?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[{ icon: "🚨", title: "Interdição imediata", desc: "O Corpo de Bombeiros pode lacrar o estabelecimento, encerrando todas as atividades." }, { icon: "💸", title: "Multas pesadas", desc: "Infrações custam entre R$ 500 e R$ 50.000, com risco de reincidência." }, { icon: "📦", title: "Perda do contrato de galpão", desc: "Proprietários de galpões e depósitos cancelam contratos de inquilinos irregulares." }, { icon: "📋", title: "Alvará bloqueado", desc: "Sem CLCB, a Prefeitura não renova o alvará de funcionamento." }].map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">Quando renovar o CLCB no Belém?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {["Certificado com vencimento nos próximos 90 dias", "Renovação ou assinatura de contrato de locação de galpão", "Credenciamento ou auditoria de plano de saúde", "Mudança de atividade ou reforma no imóvel"].map((t) => (
              <div key={t} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <span className="text-gray-700 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Como Renovamos o Seu CLCB no Belém</h2>
          <ol className="space-y-6 mb-10">
            {[{ step: "1", title: "Visita técnica gratuita", desc: "Nosso engenheiro visita seu estabelecimento no Belém para levantamento completo." }, { step: "2", title: "Projeto e memorial descritivo", desc: "Elaboramos toda a documentação técnica conforme as normas do CBPMESP." }, { step: "3", title: "Protocolo no Corpo de Bombeiros", desc: "Damos entrada no processo e acompanhamos cada etapa da análise técnica." }, { step: "4", title: "Emissão do CLCB renovado", desc: "Você recebe o certificado válido, pronto para locadores, fiscais e contratos." }].map((p) => (
              <li key={p.step} className="flex gap-5 items-start">
                <span className="bg-red-600 text-white text-xl font-extrabold rounded-full w-12 h-12 flex items-center justify-center shrink-0">{p.step}</span>
                <div><h3 className="font-bold text-gray-900 text-lg">{p.title}</h3><p className="text-gray-600 text-sm mt-1">{p.desc}</p></div>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 text-center">
            <p className="font-bold text-amber-800 text-lg mb-1">Prazo médio: 15 a 30 dias úteis após protocolo</p>
            <p className="text-amber-700 text-sm">Não espere o CLCB vencer — processos têm prazos internos e multas por atraso. Entre em contato hoje.</p>
          </div>
        </div>
      </section>

      <section id="lead-form" className="py-14 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Solicite uma Avaliação Gratuita no Belém</h2>
          <p className="text-gray-300">Preencha o formulário e um engenheiro entra em contato sem compromisso.</p>
        </div>
        <LeadForm />
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div><Image src="/images/page-clcb.webp" alt="Renovação de CLCB no Belém São Paulo" width={600} height={400} className="rounded-2xl shadow-lg w-full h-auto" /></div>
          <div>
            <SocialProof testimonial={{ text: "Alugo um galpão no Belém para minha distribuidora e o proprietário exigiu o CLCB na hora de renovar. A DRD2 avaliou o espaço, confirmou que se enquadrava no CLCB e não no AVCB, e resolveu tudo em três semanas.", author: "Oswaldo Pinheiro", role: "Proprietário de distribuidora · Av. Celso Garcia, Belém" }} />
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dúvidas Frequentes — CLCB no Belém</h2>
          <div className="space-y-4">
            {[{ q: "Estabelecimentos no Belém precisam de CLCB?", a: "Sim. Comércios, clínicas e indústrias leves com até 750 m² e baixo risco de incêndio no Belém precisam do CLCB emitido pelo CBPMESP." }, { q: "O Belém tem muitos galpões e indústrias. Precisam de CLCB?", a: "Depende da atividade e do risco. Indústrias leves e depósitos de baixo risco com até 750 m² se enquadram no CLCB. Atividades de risco médio ou alto requerem AVCB. Nossa equipe avalia sua situação." }, { q: "A DRD2 atende o Belém?", a: "Sim. Atendemos todo o Belém, Mooca, Brás, Tatuapé e toda a Zona Leste central." }, { q: "Qual o prazo para renovar o CLCB no Belém?", a: "Em média 15 a 30 dias úteis após o protocolo no CBPMESP. Recomendamos iniciar 90 dias antes do vencimento." }, { q: "A proximidade com o Brás afeta a fiscalização no Belém?", a: "Sim. O Belém e o Brás formam um corredor industrial e comercial com operações conjuntas do CBPMESP, especialmente em depósitos e galpões adaptados." }].map((item) => (
              <details key={item.q} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 group">
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">{item.q}<span className="text-red-500 group-open:rotate-180 transition-transform">▼</span></summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cobertura na Região do Belém</h2>
          <p className="text-gray-600 mb-6 text-sm">Atendemos o Belém e toda a Zona Leste de São Paulo.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Belém", "Brás", "Mooca", "Tatuapé", "Penha", "Vila Matilde", "Água Rasa", "Carrão", "São Miguel Paulista"].map((b) => (
              <span key={b} className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <NeighborhoodSilo currentSlug={slug} />
      <CtaWhatsApp label="Renovar CLCB no Belém Agora" centered />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <InternalLinksBlock currentSlug={slug} mode="bairro" />

      <nav className="py-4 px-4 bg-gray-100 text-sm text-gray-500">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 items-center">
          <Link href="/" className="hover:text-red-600">Home</Link><span>/</span>
          <Link href="/renovacao-clcb-sao-paulo" className="hover:text-red-600">Renovação CLCB</Link><span>/</span>
          <Link href="/renovacao-clcb-zona-leste-sao-paulo" className="hover:text-red-600">Zona Leste</Link><span>/</span>
          <span className="text-gray-700 font-medium">Belém</span>
        </div>
      </nav>
    </>
  );
}
