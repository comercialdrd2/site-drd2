import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { BrigadeSeoPage } from "@/data/brigadeSeoPages";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";

type BrigadeSeoLandingProps = {
  page: BrigadeSeoPage;
};

function faqsFor(page: BrigadeSeoPage) {
  return [
    {
      question: `Brigada de incendio e obrigatoria para ${page.segment}?`,
      answer: `A obrigatoriedade e o dimensionamento dependem de ocupacao, populacao fixa, area, risco, turnos e processo de AVCB. Em ${page.segment}, a analise precisa confirmar quantos brigadistas sao necessarios, qual treinamento aplicar e quais documentos precisam ser apresentados.`,
    },
    {
      question: "Qual a validade do treinamento de brigada?",
      answer: "A validade deve ser controlada pela empresa conforme exigencias aplicaveis ao processo e ao plano de segurança. Em renovacao de AVCB, certificados vencidos ou equipe alterada costumam gerar pendencia documental.",
    },
    {
      question: `Quanto custa brigada de incendio para ${page.segment}?`,
      answer: `${page.costDrivers} O orcamento correto deve separar numero de participantes, carga horaria, treinamento in company, pratica, deslocamento, emissao de certificado, ART quando aplicavel e prazo de execucao.`,
    },
    {
      question: "O treinamento serve para AVCB?",
      answer: "Sim, desde que seja dimensionado para a ocupação, tenha participantes identificados, conteudo compativel, validade controlada e documentação adequada para o processo.",
    },
    {
      question: "A DRD2 pode treinar no local da empresa?",
      answer: "Sim. A DRD2 pode organizar treinamento in company, reciclagem e orientação pratica considerando os sistemas existentes no imóvel, como extintores, hidrantes, alarme, rotas de fuga e ponto de encontro.",
    },
  ];
}

export default function BrigadeSeoLanding({ page }: BrigadeSeoLandingProps) {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;
  const faqs = faqsFor(page);
  const schema = generateMasterSchema({
    slug: page.slug,
    title: page.title,
    description: page.description,
    serviceName: page.h1,
    faqs,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Servicos", item: "/servicos" },
      { name: "Treinamento de Brigada", item: "/treinamento-brigada" },
      { name: page.h1, item: page.slug },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      <section className="relative text-white overflow-hidden pt-[90px] pb-[30px] lg:pt-[110px] lg:pb-[44px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-treinamento-brigada-v3.webp"
          alt={page.h1}
          fill
          className="object-cover object-center opacity-30 grayscale-[15%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg shadow-red-900/20">
              <Users className="w-4 h-4" /> {page.eyebrow}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[0.95] tracking-tighter uppercase italic text-white">
              {page.h1}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-7 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Formacao, reciclagem e documentação de brigada de incêndio para AVCB, com treinamento teorico, pratica operacional, certificado e orientação técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Solicitar orçamento da brigada
              </a>
              <Link
                href="/treinamento-brigada"
                className="bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto border border-white/20"
              >
                Ver página pilar de brigada
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Servicos", href: "/servicos" },
          { label: "Treinamento de Brigada", href: "/treinamento-brigada" },
          { label: page.h1 },
        ]}
        dark
      />
      <TrustBar dark />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-red-600 pl-6 uppercase italic tracking-tight leading-none">
                Por que brigada de incêndio para {page.segment} precisa ser dimensionada?
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>{page.cityContext}</p>
                <p>{page.riskProfile}</p>
                <p>{page.localDemand}</p>
                <p>
                  Brigada não e so certificado. A equipe precisa entender o plano de emergência, rotas, ponto de encontro, acionamento de <Link href="/alarme-incendio-sao-paulo" className="text-red-700 font-black underline">alarme de incêndio</Link>, uso de extintores e apoio aos sistemas do imóvel, como <Link href="/hidrantes" className="text-red-700 font-black underline">hidrantes</Link> e <Link href="/sprinklers" className="text-red-700 font-black underline">sprinklers</Link>. Isso melhora a segurança real e reduz risco de exigencia no AVCB.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-4 italic leading-tight">
                  Diagnóstico da brigada
                </h3>
                <p className="text-sm text-slate-600 font-medium mb-6">
                  Envie tipo de imóvel, quantidade de pessoas, turnos e urgencia do AVCB para estimar treinamento e documentos.
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
              Itens que pesam na formacao da brigada
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto mt-4">
              A página precisa responder o que o contratante quer saber: quem treinar, quanto custa, quando vence, o que apresentar e como evitar pendencia no AVCB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.requirements.map((item) => (
              <article key={item} className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm">
                <ClipboardCheck className="w-10 h-10 text-red-600 mb-5" />
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
                Como o treinamento e estruturado
              </h2>
              <div className="space-y-5 text-slate-700 text-lg leading-relaxed font-medium">
                <p>{page.technicalFocus}</p>
                <p>{page.approvalFocus}</p>
                <p>
                  Antes do treinamento, e importante identificar turnos, setores, populacao fixa, pessoas com mobilidade reduzida, equipamentos disponiveis e rotas de fuga. Assim, a brigada não aprende apenas teoria: ela entende como agir no proprio imóvel.
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-6 uppercase italic">Falhas que mais geram pendencia</h3>
              <div className="space-y-4">
                {page.failures.map((failure) => (
                  <div key={failure} className="flex gap-4 border-b border-white/10 pb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black uppercase">{failure}</h4>
                      <p className="text-slate-300 text-sm mt-1">
                        Esse ponto reduz confianca documental e pode gerar problema em auditoria, renovacao de AVCB ou emergência real.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-7 border-b border-slate-200">
              <h2 className="text-3xl font-black text-slate-950 uppercase italic">
                Tabela de planejamento da brigada
              </h2>
              <p className="text-slate-600 font-medium mt-3">
                Use como checklist inicial para entender onde o treinamento precisa ser mais especifico.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="p-4 font-black uppercase">Área ou equipe</th>
                    <th className="p-4 font-black uppercase">Risco de falha</th>
                    <th className="p-4 font-black uppercase">Evidencia esperada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {page.buildingTypes.map((type, index) => (
                    <tr key={type}>
                      <td className="p-4 font-bold text-slate-900">{type}</td>
                      <td className="p-4 text-slate-700">{page.failures[index % page.failures.length]}</td>
                      <td className="p-4 text-slate-700">{page.requirements[index % page.requirements.length]}</td>
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
                Preco, validade e documentação
              </h2>
              <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-medium">
                <p>{page.costDrivers}</p>
                <p>{page.urgency}</p>
                <p>
                  Para gerar lead bom, a página precisa deixar claro que o valor depende da operacao real. Uma empresa com varios turnos, setores de risco e prazo curto exige organizacao diferente de uma turma simples em escritorio.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Users, title: "Equipe", desc: "Quantidade de participantes e turnos cobertos." },
                { icon: GraduationCap, title: "Treinamento", desc: "Modulo teorico, pratica e orientação do imóvel." },
                { icon: FileText, title: "Documento", desc: "Certificado, lista, validade e ART quando aplicavel." },
                { icon: ShieldCheck, title: "AVCB", desc: "Comprovacao preparada para processo e auditoria." },
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
                Como a DRD2 conduz o processo
              </h2>
              <div className="space-y-4">
                {[
                  "Diagnóstico do tipo de imóvel, populacao, turnos, risco e urgencia do AVCB.",
                  "Definicao de carga horaria, turma, conteudo, pratica e documentação necessaria.",
                  "Treinamento teorico e pratico com foco na realidade operacional da edificação.",
                  "Emissão de comprovantes e orientação para anexar a documentação ao processo.",
                ].map((step) => (
                  <div key={step} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CtaWhatsApp
                  label={`Falar sobre ${page.segment}`}
                  occupationType={page.segment}
                  variant="primary"
                />
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-slate-950 mb-5 uppercase italic">
                Links relacionados do silo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...page.related, { label: "Brigada de incêndio", href: "/treinamento-brigada" }, { label: "Projeto de incêndio", href: "/projetos-incendio" }, { label: "Manutenção", href: "/manutencao" }].map((item) => (
                  <Link
                    key={`${item.href}-${item.label}`}
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
              <details
                key={faq.question}
                className="group bg-white rounded-2xl p-7 border border-slate-200 cursor-pointer open:ring-4 open:ring-red-100 transition-all"
              >
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <p className="mt-6 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-3">
              Solicite orçamento da brigada de incêndio
            </h2>
            <p className="text-slate-600 font-medium">
              Informe cidade, tipo de imóvel, numero de pessoas, turnos e se o AVCB esta vencido.
            </p>
          </div>
          <LeadForm variant="compact" showWrapper={false} />
        </div>
      </section>

      <ServiceClusterLinks currentSlug={page.slug} />
      <ServiceBlogLinks currentSlug={page.slug} />
      <NeighborhoodSilo currentSlug={page.slug} />

      <section className="py-24 bg-red-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Não espere o AVCB travar por falta de brigada
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-bold opacity-95 max-w-3xl mx-auto">
            Certificado vencido, equipe insuficiente ou treinamento sem documento pode virar pendencia na renovacao.
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
    </>
  );
}
