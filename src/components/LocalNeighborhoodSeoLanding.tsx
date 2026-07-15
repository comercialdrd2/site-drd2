import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { LocalNeighborhoodSeoPage } from "@/data/localNeighborhoodSeoPages";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import { bairrosCondominio } from "@/data/bairros-renovacao";
import { cidadesExpansao } from "@/data/expansao-cidades";

type Mode = "avcb" | "renovacao" | "clcb" | "clcb-cidade" | "condominio";

type LocalNeighborhoodSeoLandingProps = {
  neighborhood: LocalNeighborhoodSeoPage;
  mode: Mode;
  /** Desativar quando existir página irmã do mesmo bairro usando o mesmo conteúdo rico (evita duplicação). */
  useRichData?: boolean;
};

function pageCopy(neighborhood: LocalNeighborhoodSeoPage, mode: Mode) {
  const n = neighborhood;
  switch (mode) {
    case "renovacao":
      return {
        isRenewal: true,
        docName: "AVCB",
        slug: `/renovacao-avcb-${n.slug}`,
        title: `Renovação AVCB ${n.name} SP`,
        description: `Renovação de AVCB no ${n.name} para imóveis do tipo ${n.profile}. Atendemos a ${n.zone} com projetos, laudos, ARTs e vistoria técnica.`,
        h1: `Renovação AVCB ${n.name}: laudos, vistoria e regularizacao`,
        serviceName: `Renovacao de AVCB em ${n.name}`,
        hero: `Renovacao de AVCB em ${n.name} com revisao de laudos, sistemas de incendio, ARTs, projeto aprovado e preparação para vistoria.`,
        pillarHref: "/renovacao-avcb",
        pillarLabel: "Renovação AVCB",
      };
    case "clcb":
    case "clcb-cidade":
      return {
        isRenewal: true,
        docName: "CLCB",
        slug: mode === "clcb" ? `/renovacao-clcb-${n.slug}-sao-paulo` : `/renovacao-clcb-${n.slug}`,
        title: `Renovação CLCB ${n.name} SP | Licença Corpo de Bombeiros`,
        description: `Renovação de CLCB no ${n.name} (${n.zone}) para comércios e imóveis de menor risco: ${n.buildings.slice(0, 3).join(", ")}. Processo com engenheiro, ART e emissão pelo Via Fácil Bombeiros.`,
        h1: `Renovação CLCB ${n.name}: licenca do Corpo de Bombeiros para seu comercio`,
        serviceName: `Renovacao de CLCB em ${n.name}`,
        hero: `Renovacao de CLCB em ${n.name} para imóveis de menor risco: conferencia de enquadramento, medidas de seguranca, ART e emissao pelo Via Facil Bombeiros, sem travar a operacao do seu negocio.`,
        pillarHref: "/renovacao-clcb-sao-paulo",
        pillarLabel: "Renovação CLCB",
      };
    case "condominio":
      return {
        isRenewal: true,
        docName: "AVCB",
        slug: `/renovacao-avcb-condominio-${n.slug}`,
        title: `Renovação AVCB Condomínio ${n.name} SP`,
        description: `Renovação de AVCB para condomínios no ${n.name} (${n.zone}). Atendimento a síndicos e administradoras: laudos, ARTs, adequações e acompanhamento da vistoria do Corpo de Bombeiros.`,
        h1: `Renovação AVCB de condominio em ${n.name}`,
        serviceName: `Renovacao de AVCB de condominio em ${n.name}`,
        hero: `Renovacao de AVCB de condominios em ${n.name}: revisao de hidrantes, alarme, iluminacao de emergencia e portas corta-fogo, com laudos, ARTs e acompanhamento da vistoria — tudo reportado ao sindico.`,
        pillarHref: "/avcb-para-condominio-sao-paulo",
        pillarLabel: "AVCB para Condomínio",
      };
    default:
      return {
        isRenewal: false,
        docName: "AVCB",
        slug: `/avcb-${n.slug}`,
        title: `AVCB ${n.name} SP | Regularização Bombeiros`,
        description: `Regularização e emissão de AVCB no bairro ${n.name} (${n.zone}). Especialistas em adequação de ${n.profile} com engenharia completa.`,
        h1: `AVCB ${n.name}: regularizacao com engenheiro em Sao Paulo`,
        serviceName: `AVCB em ${n.name}`,
        hero: `Regularizacao de AVCB e CLCB em ${n.name} com diagnostico tecnico, projeto, laudos, ARTs e acompanhamento junto ao Corpo de Bombeiros.`,
        pillarHref: "/avcb-sao-paulo",
        pillarLabel: "AVCB São Paulo",
      };
  }
}

function richDataFor(neighborhood: LocalNeighborhoodSeoPage, mode: Mode) {
  // Conteúdo rico dos data files é focado em AVCB/condomínio — não usar em páginas CLCB
  if (mode === "clcb" || mode === "clcb-cidade") return undefined;
  return (
    bairrosCondominio.find((b) => b.slug === neighborhood.slug) ??
    cidadesExpansao.find((b) => b.slug === neighborhood.slug)
  );
}

function faqsFor(neighborhood: LocalNeighborhoodSeoPage, mode: Mode, useRichData = true) {
  const { isRenewal, docName } = pageCopy(neighborhood, mode);
  const richData = useRichData ? richDataFor(neighborhood, mode) : undefined;

  if (richData && richData.faq1q) {
    return [
      { question: richData.faq1q, answer: richData.faq1a },
      { question: richData.faq2q, answer: richData.faq2a },
      { question: richData.faq3q, answer: richData.faq3a },
      { question: richData.faq4q, answer: richData.faq4a },
    ];
  }

  return [
    {
      question: isRenewal
        ? `Quanto tempo leva para renovar ${docName} em ${neighborhood.name}?`
        : `Quanto tempo leva para tirar ${docName} em ${neighborhood.name}?`,
      answer: `O prazo depende de area, ocupacao, sistemas existentes, pendencias de laudo e necessidade de projeto. Em ${neighborhood.name}, o ideal e iniciar com diagnostico documental e vistoria tecnica para evitar exigencias previsiveis no CBPMESP.`,
    },
    {
      question: `Quais documentos normalmente sao exigidos em ${neighborhood.name}?`,
      answer: "Planta ou croqui, dados do imóvel, CNPJ ou responsavel, laudos de sistemas, ARTs, manutenção de extintores, alarme, hidrantes, SPDA, gas quando houver, brigada e documentos do projeto aprovado quando aplicavel.",
    },
    {
      question: `A DRD2 atende presencialmente em ${neighborhood.name}?`,
      answer: `Sim. A DRD2 atende o bairro ${neighborhood.name} e regioes proximas como ${neighborhood.nearby.join(", ")}, com diagnostico tecnico, orientacao documental, adequacoes e acompanhamento do processo.`,
    },
    {
      question: `${docName} vencido pode gerar multa ou interdição?`,
      answer: `Sim. ${docName} vencido aumenta risco de autuacao, interdição, recusa de seguro, problema com alvará e responsabilidade civil em caso de sinistro. A renovacao deve ser iniciada antes do vencimento.`,
    },
    {
      question: "Como saber se o imóvel precisa de AVCB ou CLCB?",
      answer: "A definicao depende de área, altura, ocupação, risco, lotação e sistemas obrigatórios. A DRD2 avalia o enquadramento para evitar protocolo incorreto, que costuma gerar atraso e retrabalho.",
    },
  ];
}

export default function LocalNeighborhoodSeoLanding({ neighborhood, mode, useRichData = true }: LocalNeighborhoodSeoLandingProps) {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;
  const copy = pageCopy(neighborhood, mode);
  const faqs = faqsFor(neighborhood, mode, useRichData);
  const richData = useRichData ? richDataFor(neighborhood, mode) : undefined;
  
  const schema = generateMasterSchema({
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    serviceName: copy.serviceName,
    neighborhood: neighborhood.name,
    faqs,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: copy.pillarLabel, item: copy.pillarHref },
      { name: neighborhood.name, item: copy.slug },
    ],
  });

  return (
    <React.Fragment>
      <JsonLD schema={schema} />

      <section className="relative text-white overflow-hidden pt-[92px] pb-[34px] lg:pt-[112px] lg:pb-[48px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/banner-avcb.webp"
          alt={copy.h1}
          fill
          className="object-cover object-center opacity-28 grayscale-[25%]"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg shadow-red-900/20">
              <MapPin className="w-4 h-4" /> {neighborhood.zone} - {neighborhood.name}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[0.95] tracking-tighter uppercase italic text-white">
              {copy.h1}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-7 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              {copy.hero}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Falar com engenheiro
              </a>
              <Link
                href={copy.pillarHref}
                className="bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto border border-white/20"
              >
                Ver página pilar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: copy.pillarLabel, href: copy.pillarHref },
          { label: neighborhood.name },
        ]}
        dark
      />
      <TrustBar dark />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-red-600 pl-6 uppercase italic tracking-tight leading-none">
                Diagnóstico local para {neighborhood.name}
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                {richData ? (
                  <>
                    <p className="text-xl leading-relaxed font-bold text-slate-800">{richData.intro}</p>
                    <div className="bg-red-50 p-6 md:p-8 rounded-2xl border-2 border-red-100 my-8 shadow-sm">
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-black text-red-900 uppercase italic mb-3">Ponto de Atenção em {neighborhood.name}</h4>
                          <p className="text-red-800 leading-relaxed">{richData.box}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      {neighborhood.name} e um bairro da {neighborhood.zone} com perfil de {neighborhood.profile}. Esse contexto muda o caminho do AVCB porque o Corpo de Bombeiros avalia uso real, lotação, sistemas instalados, rotas de fuga e documentos técnicos, não apenas o nome do bairro no endereco.
                    </p>
                    <p>
                      As referencias locais mais importantes para o diagnóstico sao {neighborhood.localRefs.join(", ")}. Em imóveis perto desses eixos, e comum encontrar reformas, ampliacoes, mudancas de uso, aumento de público e sistemas de segurança que não acompanharam a operacao atual.
                    </p>
                    <p>{neighborhood.urgency}</p>
                  </>
                )}
                <p>
                  A DRD2 conecta a página local ao silo técnico do site: <Link href="/projetos-incendio" className="text-red-700 font-black underline">projeto de incêndio</Link>, <Link href="/alarme-incendio-sao-paulo" className="text-red-700 font-black underline">alarme</Link>, <Link href="/hidrantes" className="text-red-700 font-black underline">hidrantes</Link>, <Link href="/spda" className="text-red-700 font-black underline">SPDA</Link> e <Link href="/treinamento-brigada" className="text-red-700 font-black underline">brigada</Link>. Isso ajuda o cliente a entender o problema e ajuda o Google a reconhecer autoridade tematica.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-4 italic leading-tight">
                  Análise em {neighborhood.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium mb-6">
                  Informe tipo de imóvel, metragem, uso, bairro, vencimento do AVCB e se existem laudos ou projeto anterior.
                </p>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
              Tipos de imóvel mais comuns no bairro
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto mt-4">
              Cada tipo de ocupação muda o enquadramento, os laudos e o prazo. Por isso a página precisa ser local e técnica ao mesmo tempo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {neighborhood.buildings.map((item) => (
              <article key={item} className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm">
                <Building2 className="w-10 h-10 text-red-600 mb-5" />
                <h3 className="font-black text-slate-950 uppercase tracking-tight leading-tight">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-7 uppercase italic tracking-tight">
                O que pode travar {copy.isRenewal ? "a renovacao" : "a emissão"} do {copy.docName}
              </h2>
              <div className="space-y-5 text-slate-700 text-lg leading-relaxed font-medium">
                <p>
                  O primeiro ponto e confirmar se o imóvel se enquadra em CLCB, AVCB com vistoria, Projeto Técnico ou substituicao de projeto. Um erro de enquadramento faz o processo voltar e consome prazo comercial importante.
                </p>
                <p>
                  O segundo ponto e verificar se a documentação acompanha a realidade: plantas, layout, área, rotas, quantidade de pavimentos, populacao, sistemas instalados, manutencoes e ARTs. Em {neighborhood.name}, isso e especialmente importante para {neighborhood.buildings.join(", ")}.
                </p>
                <p>
                  O terceiro ponto e preparar os sistemas antes de pedir vistoria: extintores, alarme, iluminação, sinalização, hidrantes, SPDA, gas, brigada e laudo elétrico. Quando a vistoria acontece antes da pre-auditoria, o risco de exigencia aumenta.
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-6 uppercase italic">Riscos locais frequentes</h3>
              <div className="space-y-4">
                {richData ? (
                  richData.problemas.map((risk, index) => (
                    <div key={risk} className="flex gap-4 border-b border-white/10 pb-4">
                      <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-black uppercase">{risk}</h4>
                        <p className="text-slate-300 text-sm mt-1">
                          {richData.problemasDesc[index]}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  neighborhood.risks.map((risk) => (
                    <div key={risk} className="flex gap-4 border-b border-white/10 pb-4">
                      <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-black uppercase">{risk}</h4>
                        <p className="text-slate-300 text-sm mt-1">
                          Esse item deve ser verificado antes do protocolo ou da vistoria para reduzir retrabalho, comunique-se e atraso na liberacao.
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {richData && richData.guiaLegislacaoLocal && (
        <section className="py-20 bg-slate-100 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-red-600 pl-6 uppercase italic tracking-tight">
              Guia Técnico: Legislação do CBPMESP para {neighborhood.name}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none text-slate-700 font-medium">
              {richData.guiaLegislacaoLocal.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            {richData.custoDetalhe && (
              <div className="mt-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">Custo da Regularização</h3>
                <p className="text-slate-700 leading-relaxed">{richData.custoDetalhe}</p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-7 border-b border-slate-200">
              <h2 className="text-3xl font-black text-slate-950 uppercase italic">
                Tabela de exigencias por metragem
              </h2>
              <p className="text-slate-600 font-medium mt-3">
                A tabela e uma referencia inicial. O enquadramento final depende do uso, risco e caracteristicas da edificação.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="p-4 font-black uppercase">Faixa comum</th>
                    <th className="p-4 font-black uppercase">Atencao técnica</th>
                    <th className="p-4 font-black uppercase">Prazo medio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Ate 750 m2", "Pode permitir processo simplificado quando não ha risco especial, mas exige documentos corretos e sistemas basicos em ordem.", "15 a 45 dias"],
                    ["751 a 1.500 m2", "Costuma exigir mais verificacoes de lotação, rotas, alarme, extintores, laudos e compatibilidade de planta.", "30 a 75 dias"],
                    ["1.501 a 2.500 m2", "A chance de projeto técnico, hidrantes, alarme, brigada e laudos complementares aumenta conforme ocupação.", "45 a 90 dias"],
                    ["Acima de 2.500 m2", "Normalmente exige planejamento técnico completo, memoriais, ARTs, sistemas integrados e acompanhamento proximo.", "60 a 120 dias"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-4 font-bold text-slate-900">{row[0]}</td>
                      <td className="p-4 text-slate-700">{row[1]}</td>
                      <td className="p-4 text-slate-700 font-bold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-7">
                Processo DRD2 para {neighborhood.name}
              </h2>
              <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-medium">
                <p>
                  Comecamos com diagnóstico do imóvel e documentos existentes. Depois avaliamos se o caminho correto e CLCB, AVCB, renovacao simples, substituicao de projeto, FAT ou adequação fisica antes da vistoria.
                </p>
                <p>
                  Em seguida, organizamos laudos e sistemas: elétrica, SPDA, gas, extintores, hidrantes, alarme, iluminação, sinalização, brigada e manutencoes. O objetivo e chegar ao protocolo com previsibilidade.
                </p>
                <p>
                  Para clientes em {neighborhood.name}, tambem avaliamos impacto de regioes proximas como {neighborhood.nearby.join(", ")}, porque empresas com mais de uma unidade podem ganhar escala em laudos, cronograma e manutenção.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: FileText, title: "Documentos", desc: "Plantas, ARTs, laudos e dados do responsavel." },
                { icon: ClipboardCheck, title: "Sistemas", desc: "Extintores, alarme, hidrante, SPDA, gas e sinalização." },
                { icon: ShieldCheck, title: "Vistoria", desc: "Pre-auditoria antes de solicitar avaliacao final." },
                { icon: MapPin, title: "Local", desc: `Conteudo e diagnostico voltados para ${neighborhood.name}.` },
              ].map((item) => (
                <article key={item.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <item.icon className="w-9 h-9 text-red-500 mb-4" />
                  <h3 className="font-black uppercase mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase italic tracking-tight">
                Como a DRD2 conduz seu caso
              </h2>
              <div className="space-y-4">
                {[
                  `Diagnostico do imovel em ${neighborhood.name}, tipo de ocupacao, area, uso real e vencimento.`,
                  "Conferencia de projeto, plantas, laudos, ARTs e sistemas de segurança contra incêndio.",
                  "Definicao das adequacoes antes do protocolo para evitar exigencias previsiveis.",
                  "Acompanhamento técnico ate emissão ou renovacao do documento, com CTA direto para WhatsApp.",
                ].map((step) => (
                  <div key={step} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CtaWhatsApp label={`Falar sobre ${neighborhood.name}`} occupationType={neighborhood.name} variant="primary" />
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-slate-950 mb-5 uppercase italic">
                Links relacionados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "AVCB São Paulo", href: "/avcb-sao-paulo" },
                  { label: "Renovação AVCB", href: "/renovacao-avcb" },
                  { label: "Projeto de incêndio", href: "/projetos-incendio" },
                  { label: "Laudo Bombeiro", href: "/laudo-bombeiro-escritorio-sao-paulo" },
                  { label: "Alarme de incêndio", href: "/alarme-incendio-sao-paulo" },
                  { label: "SPDA", href: "/spda" },
                  { label: "Hidrantes", href: "/hidrantes" },
                  { label: "Brigada", href: "/treinamento-brigada" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="bg-white border border-slate-200 p-4 rounded-xl font-black text-slate-800 hover:text-red-700 hover:border-red-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl p-7 border border-slate-200 cursor-pointer open:ring-4 open:ring-red-100 transition-all">
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <p className="mt-6 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-6">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-3">
              Solicite análise para {neighborhood.name}
            </h2>
            <p className="text-slate-600 font-medium">
              Informe o endereco, atividade, metragem, vencimento do AVCB e se possui projeto ou laudos anteriores.
            </p>
          </div>
          <LeadForm variant="compact" showWrapper={false} />
        </div>
      </section>

      <ServiceClusterLinks currentSlug={copy.slug} />
      <ServiceBlogLinks currentSlug={copy.slug} />
      <NeighborhoodSilo currentSlug={copy.slug} />

      <section className="py-24 bg-red-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Não espere o {copy.docName} travar em {neighborhood.name}
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-bold opacity-95 max-w-3xl mx-auto">
            {richData && richData.ctaFinal 
              ? richData.ctaFinal 
              : "Documento vencido, projeto antigo ou laudo pendente pode virar multa, seguro negado e atraso na operacao."}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white text-red-900 text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:bg-slate-950 hover:text-white transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-7 h-7" /> Falar com engenheiro
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

export function localNeighborhoodMetadata(neighborhood: LocalNeighborhoodSeoPage, mode: Mode) {
  const copy = pageCopy(neighborhood, mode);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: copy.slug },
  };
}
