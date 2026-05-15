import Image from "next/image";
import {
  AlertTriangle,
  Building2,
  Calculator,
  CheckCircle2,
  Fan,
  FileCheck,
  Gauge,
  Phone,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import EscadaPressurizadaLinks from "@/components/EscadaPressurizadaLinks";

type PressurizedStairsLandingProps = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  intent: "principal" | "projeto" | "regularizacao";
};

const intentContent = {
  principal: {
    serviceName: "Escada Pressurizada em São Paulo",
    cta: "Solicitar orçamento de escada pressurizada",
    problem: "O prédio possui escada enclausurada, mas o sistema de pressurização não existe, está inoperante ou não tem comprovação técnica?",
    solution: "A DRD2 avalia a edificação, identifica a exigência do Corpo de Bombeiros, orienta projeto, dimensionamento, adequação, laudo e regularização para AVCB.",
    bullets: [
      "Sistema de escada pressurizada para edifícios residenciais, comerciais, hotéis, hospitais e prédios mistos.",
      "Avaliação de ventilador, vazão, dutos, grelhas, portas corta-fogo, dampers, casa de máquinas e alimentação elétrica.",
      "Engenharia focada em aprovação no Corpo de Bombeiros e regularização de AVCB.",
    ],
  },
  projeto: {
    serviceName: "Projeto de Escada Pressurizada para AVCB",
    cta: "Pedir projeto de escada pressurizada",
    problem: "O Corpo de Bombeiros exigiu projeto de pressurização de escadas ou o AVCB travou por falta de memorial de cálculo?",
    solution: "Elaboramos projeto de escada pressurizada com dimensionamento, cálculo de vazão, pressão, perdas, detalhamento técnico, ART e suporte ao processo de AVCB.",
    bullets: [
      "Projeto de pressurização de escadas conforme exigências aplicáveis do Corpo de Bombeiros.",
      "Memorial de cálculo, plantas, cortes, especificação de ventilador, dutos, grelhas e dispositivos de controle.",
      "Compatibilização com arquitetura, rotas de fuga, alarme de incêndio e condições reais do edifício.",
    ],
  },
  regularizacao: {
    serviceName: "Regularização de Escada de Incêndio",
    cta: "Regularizar escada para AVCB",
    problem: "A escada de incêndio do prédio está com problema de pressurização, porta corta-fogo, rota de fuga, laudo vencido ou exigência em Comunique-se?",
    solution: "A DRD2 faz o diagnóstico da escada de emergência, aponta as correções necessárias e conduz a regularização para reduzir risco de reprovação, multa ou interdição.",
    bullets: [
      "Regularização de escada de incêndio para AVCB, renovação e resposta a exigências dos Bombeiros.",
      "Análise de escada enclausurada, pressurização, portas, dutos, ventiladores, sinalização e rotas de fuga.",
      "Plano de adequação para prédios existentes, condomínios, torres comerciais, hotéis e hospitais.",
    ],
  },
};

const faqs = [
  {
    question: "Escada pressurizada é obrigatória quando?",
    answer: "A obrigatoriedade depende da altura, ocupação, tipo de escada, características construtivas e exigências do Corpo de Bombeiros. Prédios altos, edifícios com rotas verticais críticas e determinadas ocupações podem precisar de escada enclausurada pressurizada para aprovação do AVCB.",
  },
  {
    question: "O que é projeto de escada pressurizada?",
    answer: "É o projeto técnico que dimensiona o sistema de pressurização da escada de emergência, incluindo vazão, pressão, ventilador, dutos, grelhas, portas, acionamento e memorial de cálculo para impedir a entrada de fumaça na rota de fuga.",
  },
  {
    question: "Quanto custa projeto de escada pressurizada em SP?",
    answer: "O custo depende da altura do prédio, número de pavimentos, tipo de ocupação, condição da escada, existência de dutos, casa de máquinas, ventilador, documentação anterior e necessidade de adequação para AVCB.",
  },
  {
    question: "Escada pressurizada ajuda na aprovação do AVCB?",
    answer: "Sim. Quando exigida, a escada pressurizada precisa estar projetada, instalada, testada e documentada. Falhas de vazão, pressão, portas ou acionamento podem gerar Comunique-se, reprovação de vistoria e atraso no AVCB.",
  },
  {
    question: "Vocês atendem bairros de São Paulo?",
    answer: "Sim. A DRD2 atende São Paulo e Grande SP, incluindo regiões com muitos edifícios verticais como Itaim Bibi, Moema, Vila Olímpia, Pinheiros, Brooklin, Tatuapé, Santana, Perdizes, Morumbi e Santo Amaro.",
  },
];

const occupationCards = [
  "Condomínios residenciais verticais",
  "Torres comerciais e corporativas",
  "Hotéis, flats e hospedagens",
  "Hospitais e clínicas",
  "Prédios mistos com lojas no térreo",
  "Edificações existentes em regularização",
];

export default function PressurizedStairsLanding({
  slug,
  title,
  description,
  h1,
  eyebrow,
  intro,
  intent,
}: PressurizedStairsLandingProps) {
  const content = intentContent[intent];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;
  const schema = generateMasterSchema({
    slug,
    title,
    description,
    serviceName: content.serviceName,
    faqs,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: content.serviceName, item: slug },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      <section className="relative min-h-[580px] bg-slate-950 text-white overflow-hidden flex items-center">
        <Image
          src="/images/page-escada-pressurizada.webp"
          alt={h1}
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-100 border border-red-500/50 px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-black mb-6">
              <Wind className="w-4 h-4" /> {eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
              {h1}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium mb-8">
              {intro}
            </p>
            <ul className="space-y-3 mb-10">
              {content.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-100 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white shadow-xl hover:bg-[#128C4A] transition-colors"
            >
              <Phone className="w-5 h-5" /> {content.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                Dor do cliente
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-6">
                {content.problem}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Escada pressurizada não é detalhe de projeto. Em caso de incêndio, a fumaça é uma das principais causas de óbitos, e a escada de emergência precisa permanecer utilizável para abandono seguro e acesso das equipes de resposta.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Quando o sistema está ausente, subdimensionado, sem laudo, sem teste ou incompatível com o projeto aprovado, o AVCB pode travar e a edificação fica exposta a exigências, multa, interdição e responsabilidade do síndico ou proprietário.
              </p>
            </div>
            <div className="bg-slate-950 text-white rounded-2xl p-8 border border-slate-800">
              <ShieldCheck className="w-12 h-12 text-red-500 mb-5" />
              <h3 className="text-2xl font-black mb-4">Solução técnica DRD2</h3>
              <p className="text-slate-300 leading-relaxed font-medium mb-6">
                {content.solution}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Vazão", "cálculo de ar necessário"],
                  ["Pressão", "controle contra entrada de fumaça"],
                  ["Ventilador", "potência e especificação"],
                  ["AVCB", "documentação para Bombeiros"],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="font-black text-white">{title}</p>
                    <p className="text-sm text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
              Ocupações com alta intenção
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950">
              Escada pressurizada por tipo de edificação
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Essas ocupações costumam gerar leads qualificados porque a exigência aparece em projeto, renovação de AVCB, Comunique-se ou vistoria presencial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {occupationCards.map((item) => (
              <div key={item} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <Building2 className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-black text-slate-950 mb-2">{item}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Avaliação de escada enclausurada pressurizada, rotas de fuga, portas corta-fogo, ventilador, dutos, laudo e aprovação no Corpo de Bombeiros.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calculator,
                title: "Dimensionamento e cálculo",
                text: "Cálculo de pressurização de escada de incêndio, vazão, perda de carga, pressão diferencial, potência de ventilador e área de insuflamento.",
              },
              {
                icon: Fan,
                title: "Sistema mecânico",
                text: "Análise de ventilador de pressurização, dutos, grelhas, dampers, casa de máquinas, alimentação elétrica e acionamento integrado.",
              },
              {
                icon: FileCheck,
                title: "Documentação para AVCB",
                text: "Projeto, laudo, memorial, ART, suporte a Comunique-se e regularização de escada de incêndio para aprovação dos Bombeiros.",
              },
            ].map(({ icon: Icon, title: cardTitle, text }) => (
              <div key={cardTitle} className="rounded-2xl border border-slate-200 p-7 shadow-sm">
                <Icon className="w-10 h-10 text-red-600 mb-5" />
                <h3 className="text-xl font-black text-slate-950 mb-3">{cardTitle}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                Keywords locais
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Projeto escada pressurizada São Paulo e bairros
              </h2>
              <p className="text-slate-300 leading-relaxed font-medium mb-6">
                Atendemos edifícios em São Paulo e Grande SP, com foco em regiões de alta verticalização e fiscalização recorrente: Itaim Bibi, Moema, Vila Olímpia, Pinheiros, Brooklin, Campo Belo, Tatuapé, Santana, Perdizes, Higienópolis, Morumbi, Lapa, Santo Amaro e região central.
              </p>
              <p className="text-slate-300 leading-relaxed font-medium">
                A análise técnica considera ocupação, altura, escada enclausurada, condição do sistema existente, normas aplicáveis, projeto de incêndio e histórico do AVCB.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/escada-pressurizada-esquema.jpg"
                alt="Dimensionamento de escada pressurizada para AVCB"
                width={900}
                height={700}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <EscadaPressurizadaLinks currentSlug={slug} />
      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <LeadForm predefinedPropertyType="Escada pressurizada / AVCB" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950">
              Dúvidas sobre escada pressurizada
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-black text-slate-950 cursor-pointer">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <AlertTriangle className="w-12 h-12 mx-auto mb-5 text-white" />
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Escada pressurizada travando o AVCB?
          </h2>
          <p className="text-xl text-red-50 leading-relaxed mb-8">
            Fale com a DRD2 e receba uma avaliação técnica para projeto, laudo, adequação ou regularização da escada de incêndio.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-red-700 font-black px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <Gauge className="w-5 h-5" /> Falar com engenheiro agora
          </a>
        </div>
      </section>
    </>
  );
}
