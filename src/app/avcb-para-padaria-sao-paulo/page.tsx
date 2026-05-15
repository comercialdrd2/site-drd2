import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building, FileCheck, ShieldAlert,
  ArrowRight, Scale, AlertTriangle, MapPin, ClipboardCheck,
  Users, ShieldCheck, Flame, FileText, Coffee, Fuel, LayoutGrid,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB para Padaria em São Paulo | DRD2 Engenharia";
const _pageDesc = "AVCB para padaria em São Paulo: Grupo F-3, IT-11, supressão em coifa, central de GLP e Extintor Classe K. Resposta a Comunique-se incluída. DRD2 — do projeto à instalação.";

export const metadata = {
  title: "AVCB para Padaria em São Paulo | DRD2 Engenharia",
  description: "AVCB para padaria em São Paulo: Grupo F-3, IT-11, supressão em coifa, central de GLP e Extintor Classe K. Resposta a Comunique-se incluída. DRD2 — do projeto à instalação.",
  alternates: {
    canonical: "/avcb-para-padaria-sao-paulo",
  },
};

export default function AVCBPadariaMasterPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqs = [
    {
      question: "Padaria pequena, de bairro, precisa de AVCB?",
      answer: "Sim. A obrigatoriedade independe do porte. Qualquer padaria que opere com forno, GLP, frituras ou área de consumo está sujeita às exigências do CBPMESP. O conjunto de medidas varia conforme a área e o enquadramento, mas a regularização é obrigatória para funcionamento legal em São Paulo."
    },
    {
      question: "Por que padaria é enquadrada como F-3 e não como comércio?",
      answer: "Padarias com área de consumo — mesas, balcão de café ou lanchonete integrada — são classificadas como F-3 (Local de Reunião de Público com Refeição) pela IT-02/2019 do CBPMESP. Esse enquadramento aplica a IT-11 e exige rotas de fuga e saídas de emergência dimensionadas para a capacidade de público — mais rígido do que o comércio varejista comum."
    },
    {
      question: "A supressão na coifa é obrigatória em todas as padarias?",
      answer: "Sim, quando há cocção com geração de fumaça e acúmulo de gordura — o que é padrão em qualquer padaria com forno ou fritadeira. A NBR 14.880 exige sistema de supressão automático certificado instalado na coifa com laudo de manutenção dentro do prazo. Ausência do sistema é causa de indeferimento do AVCB e embargo pela Vigilância Sanitária."
    },
    {
      question: "Quanto tempo leva para tirar o AVCB de uma padaria?",
      answer: "O prazo médio é de 30 a 90 dias, dependendo da situação atual do estabelecimento e da necessidade de adequação dos sistemas antes do protocolo. A DRD2 Engenharia identifica na vistoria inicial o que precisa ser adequado — eliminando retrabalho e reduzindo o tempo total do processo."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Padaria pequena, de bairro, precisa de AVCB?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A obrigatoriedade independe do porte. Qualquer padaria com forno, GLP, frituras ou área de consumo está sujeita às exigências do CBPMESP e precisa de AVCB para funcionar legalmente em São Paulo."
        }
      },
      {
        "@type": "Question",
        "name": "Por que padaria é enquadrada como F-3 e não como comércio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Padarias com área de consumo são classificadas como F-3 (Local de Reunião de Público com Refeição) pela IT-02/2019 do CBPMESP. Esse enquadramento aplica a IT-11 com exigências mais rígidas de saídas de emergência e rotas de fuga do que o comércio varejista comum."
        }
      },
      {
        "@type": "Question",
        "name": "A supressão na coifa é obrigatória em todas as padarias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A NBR 14.880 exige sistema de supressão automático certificado instalado na coifa com laudo de manutenção periódica. A ausência é causa de indeferimento do AVCB e de embargo pela Vigilância Sanitária."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva para tirar o AVCB de uma padaria em São Paulo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo médio é de 30 a 90 dias, dependendo da situação atual e da necessidade de adequação dos sistemas antes do protocolo no CBPMESP."
        }
      }
    ]
  };

  const _schema = generateMasterSchema({
        slug: "/avcb-para-padaria-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB para Padaria SP",
        faqs: faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Padaria em SP", item: "/avcb-para-padaria-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />
      <JsonLD schema={faqSchema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/hero-padaria.webp"
          alt="Interior de padaria com forno industrial e sistemas de segurança contra incêndio em São Paulo"
          fill
          className="object-cover object-center opacity-45 grayscale-[10%]"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              GRUPO F-3 — LOCAIS DE REUNIÃO DE PÚBLICO — REGULARIZAÇÃO 2026
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-black mb-4 lg:mb-5 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col drop-shadow-2xl">
              AVCB para Padaria<br/>em São Paulo
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-2 lg:mb-3 leading-relaxed font-medium max-w-2xl">
              Padaria com área de consumo é enquadrada como Grupo F-3 pelo CBPMESP — classificação mais exigente que o comércio comum. Coifa sem supressão, GLP irregular ou rota de fuga fora da norma são os motivos mais frequentes de embargo, interdição e lacre em padarias em São Paulo.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-3 lg:mb-5 leading-relaxed font-medium max-w-2xl">
              A DRD2 Engenharia executa o processo completo do projeto à instalação: enquadramento correto, adequação dos sistemas, elaboração do memorial e aprovação junto ao Corpo de Bombeiros — com resposta incluída a qualquer Comunique-se, sem custo adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> Falar com engenheiro especialista Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "AVCB por Ocupação", href: "/servicos" },
          { label: "AVCB para Padaria em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── ENQUADRAMENTO TÉCNICO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
            Enquadramento técnico de padarias no CBPMESP — Grupo F-3
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              Padarias com área de consumo — mesas, balcão de café, lanchonete integrada ou espaço de refeição — são classificadas sob o Grupo F-3 — Locais de Reunião de Público com Refeição, conforme a IT-02/2019 do CBPMESP.
            </p>
            <p>
              Esse enquadramento é mais exigente do que o Grupo C (Comércio Varejista) e determina um conjunto maior de medidas de proteção obrigatórias. A IT-11 passa a ser aplicável integralmente, com exigências específicas de largura mínima de rotas de fuga, número de saídas de emergência calculado pela densidade de ocupação e descarga direta no logradouro público.
            </p>
            <p>
              Padarias exclusivamente de venda no balcão, sem nenhuma área de consumo, podem ser enquadradas como C-2. Porém, a esmagadora maioria das padarias em São Paulo possui mesas, banquetas ou balcão de café — o que determina o F-3 como classificação correta e obrigatória.
            </p>
            <p>
              O enquadramento errado é um dos maiores geradores de Comunique-se no CBPMESP: projetos protocolados como C-2 para estabelecimentos que funcionam como F-3 são devolvidos com exigência de revisão completa. A DRD2 Engenharia define o enquadramento correto na vistoria inicial, antes do protocolo.
            </p>
          </div>
        </div>
      </section>

      {/* ── FISCALIZAÇÃO CRUZADA ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Fiscalização cruzada — CBPMESP, Vigilância Sanitária e CMVS
          </h2>
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed font-medium">
            <p>
              Sua padaria está sujeita à fiscalização cruzada entre três órgãos: o Corpo de Bombeiros, a Vigilância Sanitária e a Prefeitura via CMVS (Cadastro Municipal de Vigilância em Saúde). Isso significa que uma operação sanitária pode gerar exigência imediata do AVCB — e o contrário também acontece.
            </p>
            <p>
              O CMVS exige o AVCB válido como condição para renovação do alvará sanitário da sua padaria. Com AVCB vencido, seu estabelecimento fica automaticamente irregular perante a Vigilância Sanitária — com risco real de lacre da área de produção, independentemente das suas condições sanitárias.
            </p>
            <p>
              A Vigilância Sanitária de São Paulo tem chegado antes do Corpo de Bombeiros em padarias com denúncias ou localizadas em regiões com operações programadas. Quando isso acontece, o prazo para regularização é curto e a pressão é imediata. Padaria em operação com AVCB vencido está sempre a uma fiscalização de distância do fechamento.
            </p>
          </div>
          <div className="mt-12 text-center">
            <a
              href={whatsappLink}
              className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366]"
            >
              Falar com engenheiro especialista Agora
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTRUÇÕES TÉCNICAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
            Instruções Técnicas e normas aplicáveis ao AVCB de padaria
          </h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">
            O processo de aprovação do AVCB para padaria em São Paulo — enquadrada como F-3 — envolve o cumprimento de um conjunto mais amplo de Instruções Técnicas do CBPMESP do que o comércio varejista comum:
          </p>
          <div className="space-y-6">
            {[
              {
                t: "IT-02/2019",
                d: "Classifica a ocupação como Grupo F-3, define a carga de incêndio, a densidade de ocupação e a altura da edificação — parâmetros que determinam todo o conjunto de medidas exigíveis.",
              },
              {
                t: "IT-11 — Saídas de Emergência",
                d: "obrigatória para Grupo F. Define a largura mínima das rotas de fuga conforme a capacidade de pessoas, o número mínimo de saídas, as distâncias máximas percorridas e as condições de descarga no logradouro. É a IT mais frequentemente descumprida em padarias que cresceram e nunca adequaram o layout.",
              },
              {
                t: "IT-17 — Brigada de Incêndio",
                d: "padarias com equipe de produção e atendimento precisam de brigada formalmente constituída, com treinamento documentado e certificado válido. Padarias com produção noturna têm exigência de brigadista presente em todos os turnos de trabalho.",
              },
              {
                t: "IT-20 — Sistemas de Detecção e Alarme de Incêndio",
                d: "obrigatório dependendo da área total e da carga de incêndio, com exigência reforçada para F-3 em comparação ao comércio varejista.",
              },
              {
                t: "IT-21 — Sistemas de Hidrantes e Mangotinhos",
                d: "exigível conforme parâmetros de área e ocupação, com laudo de teste de pressão e vazão dentro do prazo para o protocolo.",
              },
              {
                t: "NBR 14.880 — Sistema de Supressão em Coifas",
                d: "norma específica para estabelecimentos com cocção e acúmulo de gordura. Exige sistema de supressão automático certificado instalado diretamente na coifa, com laudo de manutenção periódica. A ausência desse sistema é a principal causa de indeferimento de AVCB em padarias — e de embargo pela Vigilância Sanitária.",
              },
              {
                t: "Extintor Classe K",
                d: "Obrigatório em qualquer área de cocção com gordura. Padarias com apenas extintores Classe ABC na área de produção estão em não-conformidade técnica, o que gera exigência em vistoria.",
              },
            ].map((it, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl border-l-4 border-l-red-600"
              >
                <span className="block font-black text-lg uppercase tracking-tight text-slate-900 mb-2">{it.t}</span>
                <span className="block text-slate-600 text-base font-medium leading-relaxed">{it.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 1 ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua padaria está enquadrada corretamente no CBPMESP? Veja com um engenheiro — sem compromisso.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista Agora"
            occupationType="padaria ou panificadora"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── OS 4 RISCOS ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic text-center">
            Os 4 riscos que mais geram embargo em padarias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "1. Rota de fuga fora da norma IT-11",
                d: "Com o enquadramento F-3, as saídas de emergência da padaria precisam atender a parâmetros mais rígidos do que o comércio comum. Largura insuficiente, porta abrindo para dentro, corredor bloqueado ou ausência de descarga direta no logradouro são não-conformidades que geram embargo imediato em vistoria do CBPMESP.",
              },
              {
                t: "2. Supressão da coifa ausente ou com laudo vencido",
                d: "O acúmulo de gordura na coifa é o maior risco de incêndio de uma padaria. A NBR 14.880 exige sistema de supressão automático certificado. Sem instalação adequada e laudo dentro do prazo, o processo de regularização padaria CBPMESP não avança — e a vistoria resulta em exigência de adequação antes de qualquer aprovação.",
              },
              {
                t: "3. Central de GLP irregular",
                d: "Padarias que utilizam GLP precisam de central de gás instalada conforme norma, com laudo de instalação, válvulas de segurança e distâncias mínimas dos pontos de ignição. Instalações improvisadas ou sem documentação são causa frequente de interdição imediata e paralisação da produção.",
              },
              {
                t: "4. AVCB vencido com Vigilância Sanitária ativa",
                d: "Padarias com CMVS em processo de renovação e AVCB vencido ficam bloqueadas nos dois órgãos simultaneamente. O cruzamento de informações entre CBPMESP e Vigilância Sanitária em São Paulo é crescente — a irregularidade em um órgão contamina diretamente a situação no outro.",
              },
            ].map((risk, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
              >
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight underline decoration-red-600 decoration-4 underline-offset-4">
                  {risk.t}
                </h3>
                <p className="text-slate-600 font-medium text-base leading-relaxed">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE A DRD2 ENTREGA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter text-center">
            O que a DRD2 Engenharia entrega no AVCB da sua padaria
          </h2>
          <p className="text-lg text-slate-600 mb-12 font-medium text-center">
            A DRD2 Engenharia executa o processo completo de obtenção e renovação do AVCB para padaria em São Paulo — do projeto à instalação, sem necessidade de contratar empresa terceira:
          </p>
          <div className="space-y-6">
            {[
              {
                t: "Vistoria técnica presencial",
                d: "Levantamento in loco das instalações, sistemas existentes, central de GLP, coifas, extintores, rotas de fuga e condições gerais da edificação. Identificamos as não-conformidades antes do protocolo — não depois de receber Comunique-se.",
              },
              {
                t: "Definição correta do enquadramento",
                d: "F-3 ou C-2 — a DRD2 define na vistoria inicial qual é o enquadramento correto para a sua padaria, evitando rejeição do protocolo por classificação equivocada.",
              },
              {
                t: "Projeto completo de segurança contra incêndio",
                d: "Elaboração das plantas baixas com indicação de todos os sistemas exigíveis conforme IT-02, IT-11, IT-17, IT-20 e IT-21 — saídas de emergência dimensionadas para F-3, extintores por classe de incêndio, hidrantes, detectores e sinalização.",
              },
              {
                t: "Memorial descritivo técnico",
                d: "Documento que fundamenta o enquadramento F-3, descreve os sistemas instalados, justifica as soluções adotadas conforme as ITs vigentes e elimina os principais motivos de Comunique-se antes do protocolo.",
              },
              {
                t: "Instalação dos sistemas",
                d: "Quando necessário, a DRD2 executa a instalação ou adequação dos sistemas — supressão da coifa conforme NBR 14.880, central de GLP, Extintor Classe K, sinalização e iluminação de emergência. Você não contrata ninguém separado.",
              },
              {
                t: "Protocolo e acompanhamento no CBPMESP",
                d: "Entrada do processo no sistema digital do Corpo de Bombeiros, acompanhamento de todas as etapas e resposta incluída a qualquer Comunique-se, sem custo adicional.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black shrink-0 italic text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase italic tracking-tight text-lg mb-2">
                    {step.t}
                  </h3>
                  <p className="text-base text-slate-600 font-medium leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALIDADE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">
            Prazo de validade do AVCB para padarias
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              O AVCB de padarias no Estado de São Paulo tem validade de 3 anos, conforme o Decreto Estadual nº 69.118/2024.
            </p>
            <p>
              O processo deve ser iniciado com antecedência mínima de 60 a 90 dias antes do vencimento, considerando o prazo médio de análise do CBPMESP e a eventual necessidade de adequação dos sistemas antes do protocolo. Padaria que aguarda o vencimento para iniciar está operando em risco real — o período de análise conta como irregularidade para fins de fiscalização.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes — AVCB para Padaria em São Paulo
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all"
              >
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "AVCB para Restaurante", u: "/avcb-restaurante-sao-paulo", i: <Coffee className="w-4 h-4" /> },
              { t: "AVCB para Supermercado", u: "/avcb-supermercado-sao-paulo", i: <Building className="w-4 h-4" /> },
              { t: "Quanto Custa o AVCB?", u: "/avcb-preco", i: <Scale className="w-4 h-4" /> },
              { t: "Renovação de AVCB", u: "/renovacao-avcb-restaurante-sao-paulo", i: <ClipboardCheck className="w-4 h-4" /> },
              { t: "CLCB em São Paulo", u: "/clcb-sao-paulo", i: <FileCheck className="w-4 h-4" /> },
              { t: "Laudo Estanqueidade Gás", u: "/laudo-estanqueidade-gas-sao-paulo", i: <Fuel className="w-4 h-4" /> },
              { t: "Projetos de Incêndio", u: "/projetos-incendio", i: <LayoutGrid className="w-4 h-4" /> },
              { t: "Empresa de AVCB SP", u: "/empresa-avcb-sao-paulo", i: <Building className="w-4 h-4" /> },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.u}
                className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center justify-between group hover:border-red-600 hover:bg-red-50 transition-all font-black text-[10px] uppercase italic"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-600 group-hover:scale-110 transition-transform">{link.i}</span>
                  <span>{link.t}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Padaria</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel precisa dos seguintes documentos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa aprovada pela Prefeitura ou levantamento arquitetonico atualizado",
              "IPTU do exercicio atual com área total averbada e uso declarado",
              "Memorial descritivo da ocupação e destinacao de uso do imóvel",
              "Laudo de instalacoes elétricas com ART registrada no CREA-SP",
              "Laudo de para-raios (SPDA) para edificios acima de 5 pavimentos",
              "ART do engenheiro responsavel pelo projeto de prevencao de incêndio",
              "Matricula atualizada do imóvel no Cartorio de Registro de Imóveis",
              "CNPJ ou CPF do responsavel legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Padaria"
        currentSlug="/avcb-para-padaria-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Padaria"
        currentSlug="/avcb-para-padaria-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-bar-restaurante-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Padarias em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-para-padaria-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-para-padaria-sao-paulo" />

      <NeighborhoodSilo currentSlug="/avcb-para-padaria-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden text-white border-t-8 border-red-600 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Opere sua padaria com{" "}
            <span className="text-red-600 not-italic font-black italic underline decoration-white">
              Segurança Técnica.
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque o embargo do seu forno nem o fechamento pela Vigilância Sanitária. Proteja seu patrimônio, sua equipe e seus clientes hoje mesmo.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366] inline-block"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico técnico gratuito
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-600 opacity-80">
            Especialista em Regularização de Padarias e Panificadoras | Grande São Paulo
          </p>
        </div>
      </section>
    </>
  );
}
