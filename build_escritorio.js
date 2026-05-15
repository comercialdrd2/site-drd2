const fs = require('fs');
const path = require('path');

const pageContent = `import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building, FileCheck, ShieldAlert,
  ArrowRight, Scale, AlertTriangle, MapPin, ClipboardCheck,
  Users, ShieldCheck, Flame, FileText, Coffee, Fuel, LayoutGrid, Building2
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import LeadForm from "@/components/LeadForm";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata = {
  title: "AVCB para Escritório em São Paulo | DRD2 Engenharia",
  description: "Escritório em São Paulo sem AVCB válido perde o alvará de funcionamento. Grupo D, brigada, detecção e saídas de emergência. DRD2 Engenharia regulariza.",
  alternates: {
    canonical: "/avcb-para-escritorio-sao-paulo",
  },
};

export default function AVCBEscritorioMasterPage() {
  const whatsappLink = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}\`;

  const faqs = [
    {
      question: "Escritório pequeno, com menos de 100 m², precisa de AVCB próprio?",
      answer: "Depende da edificação. Em muitos edifícios comerciais, o AVCB do condomínio cobre as unidades menores. Em outros casos, a unidade precisa de processo próprio. A verificação é feita na vistoria técnica — a DRD2 identifica exatamente o que se aplica ao seu escritório sem cobrar pela análise inicial."
    },
    {
      question: "Reformei o layout do escritório. Preciso atualizar o AVCB?",
      answer: "Sim, se a reforma alterou rotas de fuga, posição de extintores, detectores ou qualquer elemento do projeto aprovado. Protocolar a renovação sem atualizar o projeto gera Comunique-se por inconsistência documental e paralisa o processo até a correção."
    },
    {
      question: "Quem paga pelo AVCB — o inquilino ou o dono do imóvel?",
      answer: "As adequações internas da unidade são responsabilidade do ocupante — inquilino ou empresa. O AVCB do edifício e dos sistemas coletivos é responsabilidade do proprietário ou condomínio. A DRD2 define na vistoria inicial o que é de responsabilidade de cada parte."
    },
    {
      question: "Quanto tempo leva o AVCB de um escritório em São Paulo?",
      answer: "O prazo médio é de 30 a 90 dias, dependendo da situação atual da unidade e da necessidade de adequações antes do protocolo. Escritórios com sistemas em conformidade e projeto atualizado têm aprovação mais rápida."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Escritório pequeno, com menos de 100 m², precisa de AVCB próprio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da edificação. Em muitos edifícios comerciais, o AVCB do condomínio cobre as unidades menores. Em outros casos, a unidade precisa de processo próprio. A verificação é feita na vistoria técnica."
        }
      },
      {
        "@type": "Question",
        "name": "Reformei o layout do escritório. Preciso atualizar o AVCB?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, se a reforma alterou rotas de fuga, posição de extintores, detectores ou qualquer elemento do projeto aprovado. Protocolar sem atualizar gera Comunique-se por inconsistência documental."
        }
      },
      {
        "@type": "Question",
        "name": "Quem paga pelo AVCB — o inquilino ou o dono do imóvel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As adequações internas da unidade são responsabilidade do ocupante. O AVCB do edifício e dos sistemas coletivos é responsabilidade do proprietário ou condomínio."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva o AVCB de um escritório em São Paulo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo médio é de 30 a 90 dias, dependendo da situação atual da unidade e da necessidade de adequações antes do protocolo no CBPMESP."
        }
      }
    ]
  };

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: "/avcb-para-escritorio-sao-paulo",
        title: metadata.title,
        description: metadata.description,
        serviceName: "AVCB para Escritório SP",
        faqs: faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Escritório em SP", item: "/avcb-para-escritorio-sao-paulo" },
        ],
      })} />
      <JsonLD schema={faqSchema} />

      <WhatsAppFloatingButton />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/avcb-para-escritorio-sao-paulo.webp"
          alt="Laje corporativa e escritório com sistemas de prevenção de incêndio"
          fill
          className="object-cover object-center opacity-45 grayscale-[10%]"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              GRUPO D — SERVIÇOS PROFISSIONAIS — REGULARIZAÇÃO 2026
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-black mb-4 lg:mb-5 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col drop-shadow-2xl">
              AVCB para Escritório<br/>em São Paulo
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-2 lg:mb-3 leading-relaxed font-medium max-w-2xl">
              Escritório sem AVCB válido em São Paulo opera com risco direto de perder o alvará de funcionamento — e uma reforma de layout sem atualização do projeto aprovado é suficiente para gerar Comunique-se, embargo e interdição imediata pelo CBPMESP. Brigada sem treinamento atualizado, sistema de detecção não integrado ao edifício ou extintores com manutenção vencida são os motivos mais frequentes de indeferimento em escritórios e lajes corporativas na capital.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-4 lg:mb-5 leading-relaxed font-medium max-w-2xl">
              A DRD2 Engenharia regulariza seu escritório do projeto à instalação — enquadramento correto no Grupo D, adequação dos sistemas e aprovação junto ao Corpo de Bombeiros, com resposta incluída a qualquer Comunique-se, sem custo adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> Falar com Engenheiro Agora
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
          { label: "AVCB para Escritório em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── ENQUADRAMENTO TÉCNICO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
            Enquadramento técnico de escritórios no CBPMESP
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              Escritórios, consultórios e lajes corporativas são classificados sob o Grupo D — Serviços Profissionais, Pessoais e Técnicos, conforme a IT-02/2019 do CBPMESP. O enquadramento correto define o conjunto exato de medidas de proteção exigíveis — e erros de classificação são a principal causa de rejeição de protocolo no sistema digital do Corpo de Bombeiros.
            </p>
            <p>
              Escritórios em edifícios comerciais de múltiplos andares têm uma particularidade técnica importante: o AVCB do edifício e o AVCB da unidade são processos distintos. A responsabilidade do empresário inquilino recai sobre as adequações internas da sua unidade. A ausência de conformidade na unidade pode comprometer o AVCB do edifício inteiro — gerando conflito com o condomínio e risco para todos os ocupantes.
            </p>
            <p>
              Qualquer reforma de layout — remoção de divisórias, criação de salas, instalação de novos postos de trabalho — que altere rotas de fuga, posição de extintores ou distribuição de detectores exige atualização do projeto aprovado. Escritórios reformados sem esse cuidado entram em não-conformidade imediata com o projeto registrado no CBPMESP e recebem Comunique-se por inconsistência documental.
            </p>
          </div>
        </div>
      </section>

      {/* ── AVCB DE ESCRITÓRIO - RESPONSABILIDADE ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            AVCB de escritório em edifício comercial — quem é responsável
          </h2>
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed font-medium">
            <p>
              Esta é a dúvida mais frequente entre empresários que alugam lajes corporativas em São Paulo: a responsabilidade pelo AVCB é do inquilino ou do proprietário do imóvel?
            </p>
            <p>
              A resposta é: as duas partes têm responsabilidades distintas.
            </p>
            <p>
              O AVCB do edifício — que cobre os sistemas coletivos como escadas pressurizadas, hidrantes de uso comum e alarme central — é responsabilidade do proprietário ou do condomínio. As adequações internas da unidade locada — layout, extintores da sala, detecção da unidade, brigada da empresa — são responsabilidade do ocupante.
            </p>
            <p>
              Reformas que impactem os sistemas coletivos do edifício exigem coordenação com o síndico ou administradora, além da aprovação do CBPMESP. A DRD2 Engenharia atua com experiência nessa interface — garantindo que as adequações da sua empresa não entrem em conflito com o projeto aprovado do condomínio e que o processo de regularização da unidade avance sem impasse com o edifício.
            </p>
          </div>
          <div className="mt-12 text-center">
            <a
              href={whatsappLink}
              className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366]"
            >
              Falar com Engenheiro Agora
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTRUÇÕES TÉCNICAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
            Instruções Técnicas aplicáveis ao AVCB de escritório em São Paulo
          </h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">
            O processo de regularização do alvará bombeiros para escritório em São Paulo envolve o cumprimento das seguintes Instruções Técnicas do CBPMESP:
          </p>
          <div className="space-y-6">
            {[
              {
                t: "IT-02/2019",
                d: "Define o enquadramento Grupo D, a carga de incêndio, a altura da edificação e a área total — parâmetros que determinam todo o conjunto de medidas de proteção obrigatórias para a unidade.",
              },
              {
                t: "IT-11 — Saídas de Emergência",
                d: "define a largura mínima de corredores e rotas de fuga, o número de saídas exigíveis calculado pela densidade de ocupação e as condições de descarga no logradouro. Escritórios com open space e alta densidade têm exigências específicas de dimensionamento que diferem de layouts tradicionais com salas fechadas.",
              },
              {
                t: "IT-17 — Brigada de Incêndio",
                d: "obrigatória para escritórios com número de ocupantes acima do limite estabelecido pela IT-02. Empresas com 10 ou mais colaboradores tipicamente precisam de brigada formalmente constituída, com treinamento documentado e certificado com validade vigente.",
              },
              {
                t: "IT-20 — Sistemas de Detecção e Alarme de Incêndio",
                d: "obrigatório conforme área total e altura da edificação. Em lajes corporativas, o sistema de detecção da unidade deve ser integrado ao painel central do edifício — exigência frequentemente ignorada em reformas e causa comum de indeferimento em vistoria técnica.",
              },
              {
                t: "IT-21 — Sistemas de Hidrantes e Mangotinhos",
                d: "exigível conforme parâmetros de área e ocupação, com laudo de teste de pressão e vazão obrigatório para o protocolo.",
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
            O layout do seu escritório sofreu alterações recentemente?
          </p>
          <CtaWhatsApp
            label="Consultar um Especialista"
            occupationType="escritório corporativo"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── OS 4 RISCOS ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic text-center">
            Os 4 riscos que mais geram embargo em escritórios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "1. Reforma de layout sem atualização do projeto",
                d: "É o erro mais comum e mais caro. Qualquer alteração na planta que modifique rotas de fuga, posição de extintores ou distribuição dos detectores exige atualização do projeto registrado no CBPMESP. Escritórios reformados sem esse cuidado recebem Comunique-se por inconsistência entre o projeto aprovado e a situação real — e o processo fica parado até a atualização completa.",
              },
              {
                t: "2. Brigada sem treinamento com validade vigente",
                d: "O certificado de formação da brigada de incêndio tem validade definida pela IT-17. Empresas com equipe sem treinamento atualizado não conseguem protocolar a renovação do AVCB até regularizar a situação da brigada. Esse é um dos motivos mais recorrentes de atraso em escritórios que deixam a renovação para cima da hora.",
              },
              {
                t: "3. Sistema de detecção não integrado ao edifício",
                d: "Em lajes corporativas, o sistema de alarme da unidade precisa estar integrado ao painel central do edifício. Escritórios que instalaram sistema próprio sem verificar essa integração têm o processo indeferido em vistoria — e a adequação posterior gera custo extra e atraso no cronograma.",
              },
              {
                t: "4. Extintores com manutenção vencida",
                d: "O laudo de manutenção dos extintores tem validade anual. Escritórios com extintores fora do prazo ou recarregados sem certificação técnica recebem exigência imediata que paralisa o processo até a regularização.",
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

      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "Assumimos uma laje corporativa de 800m² e o AVCB da nossa unidade bloqueou a renovação do alvará. A DRD2 atualizou o projeto do nosso layout open space, integrou a detecção de fumaça ao prédio e aprovou o AVCB sem conflito com o síndico. Equipe muito técnica e transparente.",
          author: "Rodrigo Farias",
          role: "Diretor de Operações — Escritório de Advocacia, Av. Paulista",
        }}
      />

      {/* ── O QUE A DRD2 ENTREGA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter text-center">
            O que a DRD2 Engenharia entrega no AVCB do seu escritório
          </h2>
          <div className="space-y-6 mt-12">
            {[
              {
                t: "Vistoria técnica presencial",
                d: "Levantamento in loco do layout atual, sistemas instalados, rotas de fuga, extintores, detectores e conformidade com o projeto originalmente aprovado. Identificamos não-conformidades antes do protocolo — não após receber Comunique-se.",
              },
              {
                t: "Definição correta da responsabilidade",
                d: "A DRD2 identifica na vistoria o que é obrigação da sua empresa e o que é responsabilidade do edifício — evitando conflitos com o condomínio e definindo o escopo exato do processo de regularização.",
              },
              {
                t: "Projeto atualizado de segurança contra incêndio",
                d: "Elaboração ou atualização das plantas com todos os sistemas exigíveis conforme IT-02, IT-11, IT-17, IT-20 e IT-21 — dimensionamento correto para o layout atual do escritório.",
              },
              {
                t: "Memorial descritivo técnico",
                d: "Documento que fundamenta o enquadramento Grupo D, descreve os sistemas instalados e justifica as soluções adotadas conforme as ITs vigentes — eliminando os principais motivos de Comunique-se antes do protocolo.",
              },
              {
                t: "Instalação e adequação dos sistemas",
                d: "Quando necessário, a DRD2 executa a instalação dos sistemas deficientes — extintores, detectores, sinalização e iluminação de emergência — sem necessidade de contratar empresa terceira.",
              },
              {
                t: "Protocolo e aprovação no CBPMESP",
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
            Prazo de validade do AVCB para escritórios
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              O AVCB de escritórios e lajes corporativas em São Paulo tem validade de 3 anos, conforme o Decreto Estadual nº 69.118/2024.
            </p>
            <p>
              O processo de renovação deve ser iniciado com antecedência mínima de 60 a 90 dias antes do vencimento. Empresas que aguardam o vencimento para iniciar ficam em situação irregular durante o período de análise — o que pode comprometer contratos, auditorias internas e certificações que exigem AVCB válido como requisito documental.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes — AVCB para Escritório em São Paulo
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
              { t: "AVCB para Padaria", u: "/avcb-para-padaria-sao-paulo", i: <Building className="w-4 h-4" /> },
              { t: "Quanto Custa o AVCB?", u: "/avcb-preco", i: <Scale className="w-4 h-4" /> },
              { t: "Renovação de AVCB", u: "/renovacao-avcb", i: <ClipboardCheck className="w-4 h-4" /> },
              { t: "CLCB em São Paulo", u: "/clcb-sao-paulo", i: <FileCheck className="w-4 h-4" /> },
              { t: "Projetos de Incêndio", u: "/projetos-incendio", i: <LayoutGrid className="w-4 h-4" /> },
              { t: "Empresa de AVCB SP", u: "/empresa-avcb-sao-paulo", i: <Building2 className="w-4 h-4" /> },
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
      <NeighborhoodSilo currentSlug="/avcb-para-escritorio-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden text-white border-t-8 border-red-600 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Opere seu escritório com{" "}
            <span className="text-red-600 not-italic font-black italic underline decoration-white">
              Segurança Técnica.
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque a interdição da sua laje corporativa nem a cassação do seu alvará. Regularize o AVCB e evite o embargo imediato em vistoria.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366] inline-block"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico Gratuito
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-600 opacity-80">
            Especialista em Regularização Comercial | Grande São Paulo
          </p>
        </div>
      </section>
    </>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src/app/avcb-para-escritorio-sao-paulo/page.tsx'), pageContent, 'utf8');
console.log('Escritorio page created');
