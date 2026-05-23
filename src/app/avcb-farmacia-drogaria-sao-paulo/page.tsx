import Link from "next/link";
import Image from "next/image";
import {
  Phone, Building, FileCheck,
  ArrowRight, Scale, MapPin, ClipboardCheck,
  Coffee, LayoutGrid, CheckCircle2,
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

const _pageTitle = "AVCB para Farmácias e Drogarias em São Paulo | DRD2 Engenharia";
const _pageDesc = "Farmácia sem AVCB válido trava a renovação do CMVS na Vigilância Sanitária. Grupo C-2, laudo de exaustão e extintores. DRD2 Engenharia regulariza.";

export const metadata = {
  title: "AVCB para Farmácias e Drogarias em São Paulo | DRD2 Engenharia",
  description: "Farmácia sem AVCB válido trava a renovação do CMVS na Vigilância Sanitária. Grupo C-2, laudo de exaustão e extintores. DRD2 Engenharia regulariza.",
  alternates: {
    canonical: "/avcb-farmacia-drogaria-sao-paulo",
  },
};

export default function AVCBFarmaciaMasterPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqs = [
    {
      question: "Minha farmácia é pequena e de bairro. Precisa de AVCB?",
      answer: "Todo comércio precisa de regularização. Para farmácias abaixo de 750m² e sem manipulação de risco, o processo geralmente é simplificado através do CLCB, que é mais rápido e barato, mas igualmente obrigatório."
    },
    {
      question: "Estou com o CMVS travado por falta de AVCB. O protocolo serve?",
      answer: "Sim. Apenas o número do protocolo de entrada no Corpo de Bombeiros costuma ser aceito pela VISA para desbloqueio provisório no CMVS. A DRD2 faz essa emissão em prazo recorde."
    },
    {
      question: "Farmácia de manipulação tem regras diferentes?",
      answer: "Sim. O estoque de álcool, acetona e solventes aumenta a carga de incêndio, exigindo extintores específicos, chuveiros lava-olhos e maior isolamento."
    },
    {
      question: "Vocês fornecem e instalam os equipamentos?",
      answer: "Sim. Entregamos a solução 'chave na mão'. Desde o laudo e planta, até a instalação física de extintores e placas."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const _schema = generateMasterSchema({
        slug: "/avcb-farmacia-drogaria-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB para Farmácias SP",
        faqs: faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Farmácia em SP", item: "/avcb-farmacia-drogaria-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />
      <JsonLD schema={faqSchema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] lg:pt-[95px] pb-6 flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/hero-farmacia.webp"
          alt="Interior de farmácia com sistemas de segurança contra incêndio"
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
              GRUPO C-2 — DROGARIAS E FARMÁCIAS — REGULARIZAÇÃO 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-4 lg:mb-5 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                FARMÁCIA E DROGARIA EM SP
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-2 lg:mb-3 leading-relaxed font-medium max-w-2xl">
              Farmácia sem AVCB válido em São Paulo opera com risco imediato de perder o alvará de funcionamento — e, pior ainda, o sistema da Vigilância Sanitária bloqueia automaticamente a renovação do CMVS. Ausência de extintores para químicos, rotas de fuga obstruídas por estoque e falta de sinalização são os motivos mais frequentes de interdição, embargo e lacre de drogarias e farmácias de manipulação pelo CBPMESP.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-4 lg:mb-5 leading-relaxed font-medium max-w-2xl">
              A DRD2 Engenharia regulariza sua farmácia do projeto à instalação — enquadramento correto no Grupo C-2, adequação rápida dos sistemas e aprovação junto ao Corpo de Bombeiros, liberando o seu documento para a VISA em tempo recorde, com resposta incluída a qualquer Comunique-se.
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
          { label: "AVCB para Farmácia em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── ENQUADRAMENTO TÉCNICO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
            Enquadramento técnico de farmácias no CBPMESP
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              Drogarias, farmácias comerciais e de manipulação são classificadas sob o Grupo C-2 — Comércio Varejista, conforme a Instrução Técnica IT-02/2019 do CBPMESP. O enquadramento determina o conjunto de medidas exigíveis — e o rigor na fiscalização aumenta substancialmente se o local possuir laboratório de manipulação com armazenamento de produtos inflamáveis.
            </p>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic mt-8 mb-3 underline decoration-red-600 decoration-4 underline-offset-4">
              Farmácia de Manipulação: regras específicas do CBPMESP
            </h3>
            <p>
              Farmácias de manipulação possuem uma particularidade: o uso de solventes e compostos químicos exige avaliação minuciosa da carga de incêndio. Um erro nessa classificação no sistema digital Via Fácil Bombeiros gera inconsistência imediata, exigindo projeto técnico completo (PT) em vez de um processo simplificado (PTS).
            </p>
            <p>
              Qualquer alteração de layout — como a ampliação do laboratório ou o bloqueio de uma porta de saída por gôndolas — coloca a edificação em não-conformidade. A DRD2 avalia o risco real da sua operação para garantir que o seu negócio não seja enquadrado em uma categoria mais pesada, evitando custos desnecessários com obras.
            </p>
          </div>
        </div>
      </section>

      {/* ── FISCALIZAÇÃO CRUZADA (VISA) ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Fiscalização Cruzada — VISA e Corpo de Bombeiros
          </h2>
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed font-medium">
            <p>
              Esta é a maior causa de dor de cabeça para proprietários de farmácia em São Paulo. Desde 2026, a Vigilância Sanitária e a Prefeitura operam com sistemas interligados ao do Corpo de Bombeiros.
            </p>
            <p>
              Isso significa que o Cadastro Municipal de Vigilância em Saúde (CMVS) não é emitido ou renovado se a sua farmácia não possuir um protocolo ativo de AVCB ou CLCB. A interdição pela VISA paralisa não só as vendas, mas bloqueia o recebimento de receitas e trava contratos com fornecedores. Regularizar o Bombeiro é o primeiro passo para blindar o seu negócio da fiscalização sanitária.
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
            Instruções Técnicas aplicáveis ao AVCB de Farmácia em São Paulo
          </h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">
            A regularização exige o cumprimento estrito das seguintes normativas:
          </p>
          <div className="space-y-6">
            {[
              {
                t: "IT-02/2019",
                d: "Define o enquadramento C-2 e a carga de incêndio. Para farmácias de manipulação, a carga de produtos inflamáveis pode alterar o risco.",
              },
              {
                t: "IT-08 — Saídas de Emergência",
                d: "corredores entre prateleiras e gôndolas não podem obstruir a rota de fuga. A largura mínima precisa ser respeitada.",
              },
              {
                t: "IT-17 — Brigada de Incêndio",
                d: "para redes com grande área construída ou farmácias atacadistas, o treinamento atualizado da brigada é obrigatório.",
              },
              {
                t: "IT-20 — Sinalização e Iluminação",
                d: "placas fotoluminescentes e blocos autônomos de emergência precisam estar posicionados corretamente.",
              },
              {
                t: "IT-21 — Sistema de Extintores",
                d: "além dos extintores de água e pó, a presença de químicos pode exigir extintores de CO2 ou classes específicas para laboratório.",
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
            Não deixe seu CMVS ser bloqueado pela falta de AVCB.
          </p>
          <CtaWhatsApp
            label="Desbloquear Meu CMVS Agora"
            occupationType="farmácia ou drogaria"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── OS 4 RISCOS ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic text-center">
            Os 4 riscos que mais geram embargo em farmácias e drogarias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "1. Obstrução de rotas de fuga pelo estoque",
                d: "Gôndolas posicionadas de forma irregular ou caixas de mercadorias no corredor de saída são infrações gravíssimas. O fiscal reprova imediatamente a vistoria técnica.",
              },
              {
                t: "2. Extintores inadequados ou vencidos",
                d: "Farmácias que compram extintores errados (focando em economia em vez do projeto) são reprovadas. O laudo de manutenção anual é obrigatório.",
              },
              {
                t: "3. Ausência de isolamento em áreas de manipulação",
                d: "A falta de portas corta-fogo ou compartimentação entre o laboratório inflamável e a área de atendimento exige readequação arquitetônica severa caso seja flagrada.",
              },
              {
                t: "4. AVCB vencido com fiscalização sanitária ativa",
                d: "O AVCB vencido vira alvo simultâneo de infração do CBPMESP e travamento legal na VISA.",
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
          text: "A Vigilância Sanitária travou nosso alvará porque precisávamos renovar o AVCB urgente. A DRD2 assumiu tudo: o laudo, a instalação dos extintores novos e o protocolo. Em poucas semanas estávamos com o CMVS regularizado de novo. Recomendo 100%.",
          author: "Mariana Souza",
          role: "Proprietária de Drogaria, Zona Leste",
        }}
      />

      {/* ── O QUE A DRD2 ENTREGA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter text-center">
            O que a DRD2 Engenharia entrega no AVCB da sua Farmácia
          </h2>
          <div className="space-y-6 mt-12">
            {[
              {
                t: "Vistoria técnica presencial",
                d: "Identificamos gargalos como prateleiras bloqueando saídas e extintores inadequados antes do fiscal aparecer.",
              },
              {
                t: "Definição correta do enquadramento",
                d: "Enquadramos como C-2 ou risco adequado, buscando a viabilidade de emissão ágil (CLCB) quando o tamanho permite.",
              },
              {
                t: "Projeto completo e ART",
                d: "Elaboração de plantas quando exigido e emissão da Anotação de Responsabilidade Técnica.",
              },
              {
                t: "Instalação dos equipamentos",
                d: "Fornecemos placas de rota de fuga, luzes de emergência e extintores.",
              },
              {
                t: "Protocolo, VISA e Aprovação",
                d: "Inserimos no sistema, resolvemos eventuais Comunique-se e emitimos o documento que libera o seu CMVS.",
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
            Prazo de validade do AVCB para Farmácias
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              O AVCB ou CLCB para farmácias comerciais do Grupo C-2 tem validade variando de 1 a 3 anos no estado de São Paulo, dependendo da classificação e carga de incêndio.
            </p>
            <p>
              Aconselhamos o início da renovação com pelo menos 60 dias de antecedência do vencimento para evitar que o CNPJ fique descoberto na hora de renovar a licença sanitária e licitações de medicamentos.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes — AVCB para Farmácias em São Paulo
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

      {/* ── ENGENHEIRO + CTA ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">
                Regularize sua Farmácia <span className="text-red-600">com Quem Entende</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                A DRD2 Engenharia atua exclusivamente em regularização de segurança contra incêndio. Nossos engenheiros dominam o processo Via Fácil Bombeiros e conhecem as exigências específicas do Grupo C-2 — farmácias comerciais e de manipulação.
              </p>
              <p className="text-slate-600 font-medium leading-relaxed">
                Do diagnóstico técnico ao protocolo final no CBPMESP, entregamos o documento que libera o seu CMVS na Vigilância Sanitária.
              </p>
            </div>
            <div className="bg-slate-950 p-12 rounded-[4rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/20 rounded-full blur-3xl" />
              <MapPin className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">Eng. Lucas Rodrigues</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                Responsável pela equipe de comércio varejista e farmácias. Especialista em Grupo C-2, carga de incêndio com produtos químicos e resposta a Comunique-se da VISA.
              </p>
              <div className="border-t border-white/10 pt-6 mb-8">
                <span className="text-red-500 font-black text-xs uppercase tracking-widest">CREA-SP 5070163570</span>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl hover:bg-[#1EBE5A] transition-all w-full text-center uppercase italic tracking-tighter"
              >
                <Phone className="w-5 h-5 inline mr-2" /> Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA PRÉ-SILO ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-3">
            Não Arrisque o Embargo da <span className="text-red-600">Vigilância Sanitária</span>
          </h3>
          <p className="text-slate-500 font-medium mb-8">Regularize o AVCB e renove o CMVS com agilidade. Diagnóstico técnico gratuito em toda SP.</p>
          <CtaWhatsApp
            label="Quero Regularizar Minha Farmácia"
            occupationType="farmácia ou drogaria"
            centered
          />
        </div>
      </section>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Farmacia e Drogaria</span></h2>
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
        occupation="Farmacia Drogaria"
        currentSlug="/avcb-farmacia-drogaria-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Farmacia Drogaria"
        currentSlug="/avcb-farmacia-drogaria-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-farmacia-drogaria-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Farmácias e Drogarias em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-farmacia-drogaria-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-farmacia-drogaria-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-farmacia-drogaria-sao-paulo" />

      {/* ── LEAD FORM ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-2">Diagnóstico <span className="text-primary">Gratuito</span></h2>
          <p className="text-slate-500 font-medium mb-6">Preencha e um engenheiro entra em contato em até 24h.</p>
          <LeadForm variant="compact" />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden text-white border-t-8 border-red-600 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Opere sua farmácia com{" "}
            <span className="text-red-600 not-italic font-black italic underline decoration-white">
              Segurança Técnica.
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque o embargo da Vigilância Sanitária ou a paralisação do seu negócio. Regularize o AVCB e renove o CMVS hoje mesmo.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366] inline-block"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico técnico gratuito
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-600 opacity-80">
            Especialista em Regularização Comercial | Grande São Paulo
          </p>
        </div>
      </section>
    </>
  );
}
