import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  ShieldAlert,
  Users,
} from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import LeadForm from "@/components/LeadForm";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import TrustBar from "@/components/TrustBar";
import type { PtotepPage } from "@/data/ptotepSeoPages";

type Props = {
  page: PtotepPage;
};

const kindLabel: Record<PtotepPage["kind"], string> = {
  principal: "Guia principal",
  evento: "Pagina por tipo de evento",
  cidade: "Pagina por cidade",
  duvida: "Pagina de duvida",
};

export function generatePtotepMetadata(page: PtotepPage) {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.slug,
    },
  };
}

function getTechnicalDepth(page: PtotepPage) {
  const subject = page.label.toLowerCase();
  const primaryContext = page.context[0] ?? page.focus;
  const primaryRisk = page.risks[0] ?? "layout temporario sem leitura tecnica antes da montagem";
  const primaryDocument = page.documents[0] ?? "documentos tecnicos do evento e da edificacao permanente";

  if (page.kind === "cidade") {
    const city = page.label.replace(/^PTOTEP\s+/i, "");
    return {
      title: `Como a analise muda em ${city}`,
      intro:
        `Em ${city}, a regularizacao de evento temporario precisa considerar o perfil real dos locais usados para feiras, shows, convencoes, igrejas, universidades, clubes, hoteis e shoppings. A mesma montagem pode ser simples em um salao preparado para eventos e complexa em uma area improvisada de shopping, patio, garagem, auditorio ou galpao. Por isso, a DRD2 nao trata PTOTEP como formulario padrao: primeiro identifica a licenca existente, a rota de fuga do imovel, a lotacao prevista e o impacto da ocupacao temporaria sobre as medidas de seguranca ja aprovadas.`,
      details: [
        primaryContext,
        `O ponto de maior atencao costuma ser ${primaryRisk}. Quando essa leitura fica para a vespera, o organizador perde tempo para corrigir layout, pedir ART de fornecedor, reposicionar fila, mudar acesso ou complementar sinalizacao.`,
        `Antes do protocolo, conferimos ${primaryDocument}, layout, publico, montagem, documentos de fornecedores e compatibilidade com o uso permanente do local. Essa etapa reduz risco de Comunique-se e evita que a montagem final fique diferente do que foi analisado tecnicamente.`,
      ],
    };
  }

  if (page.kind === "duvida") {
    return {
      title: `Resposta tecnica para ${subject}`,
      intro:
        `Perguntas sobre PTOTEP normalmente aparecem quando o evento ja tem data, fornecedor e local definidos. O problema e que custo, prazo, documentos, diferenca entre AVCB e PTOTEP e necessidade de ocupacao temporaria dependem de uma mesma base tecnica: o que o evento muda no imovel permanente. Sem essa leitura, a resposta vira chute e o processo pode nascer incompleto.`,
      details: [
        page.focus,
        `Na pratica, avaliamos ${primaryContext}. Depois cruzamos essa informacao com publico estimado, controle de acesso, palco, stands, gerador, GLP, eletrica temporaria, rotas de fuga e regras internas do local.`,
        `O risco mais comum e ${primaryRisk}. Por isso, a orientacao correta nao e apenas dizer se precisa ou nao precisa: e apontar quais documentos devem entrar, quais ajustes precisam ocorrer antes da montagem e qual caminho reduz atraso perto da data do evento.`,
      ],
    };
  }

  if (page.kind === "evento") {
    return {
      title: `Leitura especifica para ${subject}`,
      intro:
        `Cada tipo de evento cria uma ocupacao temporaria diferente. Feira, show, exposicao, evento corporativo, ativacao em shopping, festival, food park, evento esportivo e evento universitario nao devem receber o mesmo checklist. O nome ajuda na busca, mas o que define a regularizacao e o conjunto formado por publico, layout, estrutura, energia, rotas e documentos.`,
      details: [
        page.focus,
        `Nesta pagina, o risco central e ${primaryRisk}. Esse ponto precisa aparecer no projeto porque interfere diretamente na seguranca do publico e na preservacao do AVCB ou da licenca existente da edificacao permanente.`,
        `A DRD2 organiza ${primaryDocument}, memoriais, ARTs/RRTs, plantas e orientacoes de montagem para que o evento nao seja avaliado apenas no papel. O objetivo e fazer o desenho tecnico conversar com o que sera montado no dia, reduzindo divergencia entre projeto, vistoria e operacao.`,
      ],
    };
  }

  return {
    title: "Camada tecnica que sustenta o PTOTEP",
    intro:
      "O PTOTEP precisa demonstrar que a ocupacao temporaria nao compromete a seguranca da edificacao permanente. Isso exige mais do que descrever o evento: e necessario conectar licenca existente, uso aprovado, publico estimado, layout temporario, rotas de fuga, estruturas, fornecedores e responsabilidades tecnicas.",
    details: [
      page.focus,
      `O ponto de atencao inicial e ${primaryContext}. A partir dele, verificamos se palco, stands, filas, areas VIP, credenciamento, cozinha, gerador, GLP ou estruturas provisorias alteram a logica original do imovel.`,
      `O risco mais comum e ${primaryRisk}. Quando o projeto nasce antes da montagem, ainda existe tempo para ajustar layout, solicitar documentos e alinhar fornecedores. Quando nasce depois, qualquer correcao vira urgencia e pode afetar a data do evento.`,
    ],
  };
}

export default function PtotepSeoLanding({ page }: Props) {
  const technicalDepth = getTechnicalDepth(page);
  const schema = generateMasterSchema({
    slug: page.slug,
    title: page.title,
    description: page.description,
    serviceName: page.label,
    faqs: page.faqs,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "PTOTEP", item: "/ptotep" },
      { name: page.label, item: page.slug },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      <section className="relative overflow-hidden bg-slate-950 text-white border-b-8 border-red-600 pt-[88px] pb-12 lg:pt-[104px] lg:pb-16">
        <Image
          src={page.heroImage}
          alt={page.imageAlt}
          fill
          className="object-cover object-center opacity-45 grayscale-[15%]"
          priority
          sizes="100vw"
          quality={68}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-slate-950/84 to-slate-950/38" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest">
              <span className="rounded-full bg-red-600 px-4 py-2 text-white shadow-lg shadow-red-950/20">
                {page.eyebrow}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-100">
                {kindLabel[page.kind]}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-[0.94]">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-slate-200">
              {page.lead}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CtaWhatsApp
                label="Analisar meu evento no WhatsApp"
                occupationType={page.ctaOccupation}
                size="md"
              />
              <Link
                href="#checklist"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border-2 border-white/80 px-7 py-4 text-sm font-black uppercase tracking-tight text-white transition-all hover:bg-white hover:text-slate-950"
              >
                Ver checklist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        dark
        items={[
          { label: "Home", href: "/" },
          { label: "PTOTEP", href: "/ptotep" },
          { label: page.label },
        ]}
      />
      <TrustBar dark />

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
            Leitura tecnica do evento
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none mb-7 max-w-4xl">
            O PTOTEP protege o evento e a licenca do local
          </h2>
          <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-4xl">
            {page.focus}
          </p>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Building2, title: "Edificacao", text: "licenca vigente, uso aprovado e sistemas existentes" },
              { icon: Users, title: "Publico", text: "lotacao, acesso, filas, rotas e areas de concentracao" },
              { icon: CalendarCheck, title: "Evento", text: "montagem temporaria, fornecedores, prazo e vistoria" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <item.icon className="h-7 w-7 text-red-600 mb-4" />
                <h3 className="text-sm font-black uppercase text-slate-950 tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <LeadForm predefinedPropertyType={page.ctaOccupation} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
              Contexto do caso
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none">
              {page.contextTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {page.context.map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-5xl font-black text-red-600/10 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-slate-700 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500 mb-4">
                Risco de reprovacao
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight leading-none">
                {page.riskTitle}
              </h2>
              <p className="mt-6 text-slate-300 font-medium leading-relaxed">
                A maior parte das pendencias aparece quando layout, fornecedores e documentos caminham separados. O projeto precisa transformar a operacao do evento em informacao tecnica verificavel.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {page.risks.map((risk) => (
                  <div key={risk} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <p className="text-sm font-bold leading-relaxed text-slate-200">{risk}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
                Profundidade tecnica
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none">
                {technicalDepth.title}
              </h2>
              <p className="mt-6 text-lg text-slate-700 font-medium leading-relaxed">
                {technicalDepth.intro}
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              {technicalDepth.details.map((detail, index) => (
                <div key={detail} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-sm font-black uppercase italic tracking-tight text-slate-950">
                      Ponto de conferencia
                    </h3>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{detail}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <h3 className="text-lg font-black uppercase italic tracking-tight mb-4">
                  Como isso evita projeto fraco e retrabalho
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed">
                  A analise mostra o que muda na operacao e transforma essa leitura em documento: planta, memoriais,
                  ARTs, checklist de montagem, orientacao de fornecedores e resposta a exigencias. Assim, o organizador
                  antecipa riscos antes de contratar estrutura, congelar layout ou iniciar montagem, e a equipe tecnica
                  consegue definir prazo, custo e caminho de aprovacao com menos incerteza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="checklist" className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
                Processo DRD2
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none mb-8">
                Como regularizamos o evento
              </h2>
              <div className="space-y-4">
                {page.process.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-slate-700 font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
                Checklist documental
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none mb-8">
                Documentos que entram na analise
              </h2>
              <div className="space-y-4">
                {page.documents.map((doc) => (
                  <div key={doc} className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                    <FileText className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    <p className="text-slate-700 font-medium leading-relaxed">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-900 py-16 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ClipboardCheck className="mx-auto mb-5 h-12 w-12 text-red-200" />
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight leading-none">
            Evento temporario nao combina com improviso
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-red-100 font-medium leading-relaxed">
            Antes de fechar fornecedor, mapa final ou data de montagem, valide o enquadramento tecnico. Uma decisao pequena no layout pode evitar exigencia grande no protocolo.
          </p>
          <div className="mt-8">
            <CtaWhatsApp
              label="Falar com engenheiro sobre PTOTEP"
              occupationType={page.ctaOccupation}
              centered
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase italic tracking-tight text-center mb-10">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:ring-4 open:ring-red-600/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black uppercase italic tracking-tight text-slate-950">
                  {faq.question}
                  <span className="text-2xl text-red-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 border-t border-slate-200 pt-5 text-slate-600 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-red-600" />
            <h2 className="text-xl font-black uppercase italic tracking-tight text-slate-950">
              Links relacionados
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {page.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-black text-slate-700 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <CheckCircle2 className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceClusterLinks currentSlug={page.slug} />
      <ServiceBlogLinks currentSlug={page.slug} />
    </>
  );
}
