import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Gauge,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { HydrantSeoPage } from "@/data/hydrantSeoPages";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";

type HydrantSeoLandingProps = {
  page: HydrantSeoPage;
};

function faqsFor(page: HydrantSeoPage) {
  return [
    {
      question: `Hidrante e obrigatorio para ${page.segment}?`,
      answer: `A obrigatoriedade depende de area, altura, ocupacao, carga de incendio, risco e enquadramento do processo. Em ${page.segment}, a analise precisa confirmar se a edificacao exige rede de hidrantes, qual vazao e pressao sao necessarias e quais documentos devem acompanhar o AVCB.`,
    },
    {
      question: "O que o Corpo de Bombeiros verifica no sistema de hidrantes?",
      answer: "A vistoria pode verificar reserva técnica de incêndio, bomba principal, bomba jockey, pressão, vazão, registros, abrigos, mangueiras, esguichos, sinalização, acesso ao recalque, casa de bombas, laudos, ARTs e compatibilidade com o projeto aprovado.",
    },
    {
      question: `Quanto custa sistema de hidrante para ${page.segment}?`,
      answer: `${page.costDrivers} O orcamento correto deve separar projeto, calculo hidraulico, materiais, bomba, reservatorio, abrigos, instalacao, teste, comissionamento e documentacao tecnica.`,
    },
    {
      question: "Rede de hidrantes precisa de manutenção para renovar AVCB?",
      answer: "Sim. Mangueiras, registros, bombas, pressostatos, válvulas, recalque e abrigos precisam estar em condicao de uso. Sem manutenção documentada, o sistema pode falhar no teste e gerar exigencia no AVCB.",
    },
    {
      question: "A DRD2 entrega projeto, laudo e ART?",
      answer: "Sim. A DRD2 Engenharia pode conduzir diagnóstico, projeto, adequação, teste hidráulico, laudo técnico e ART quando aplicavel, conectando o sistema de hidrantes ao processo de AVCB, CLCB, seguro ou regularização predial.",
    },
  ];
}

export default function HydrantSeoLanding({ page }: HydrantSeoLandingProps) {
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
      { name: "Hidrantes", item: "/hidrantes" },
      { name: page.h1, item: page.slug },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[90px] pb-[30px] lg:pt-[110px] lg:pb-[44px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-hidrantes.jpg"
          alt={page.h1}
          fill
          className="object-cover object-center opacity-30 grayscale-[20%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg shadow-red-900/20">
              <Droplets className="w-4 h-4" /> {page.eyebrow}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[0.95] tracking-tighter uppercase italic text-white">
              {page.h1}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-7 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Projeto, instalação, adequação, teste e documentação técnica para rede de hidrantes, bomba de incêndio, reserva técnica, recalque e AVCB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Solicitar análise técnica
              </a>
              <Link
                href="/hidrantes"
                className="bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto border border-white/20"
              >
                Ver página pilar de hidrantes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Servicos", href: "/servicos" },
          { label: "Hidrantes", href: "/hidrantes" },
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
                Por que hidrantes para {page.segment} exigem projeto técnico?
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>{page.cityContext}</p>
                <p>{page.riskProfile}</p>
                <p>{page.localDemand}</p>
                <p>
                  Uma rede de hidrantes não e apenas tubulação com registro. Ela precisa entregar vazão, pressão e alcance em situacao de emergência, inclusive no ponto mais desfavoravel. Por isso, o sistema deve ser tratado como parte do processo de AVCB, junto com <Link href="/alarme-incendio-sao-paulo" className="text-red-700 font-black underline">alarme de incêndio</Link>, <Link href="/sprinklers" className="text-red-700 font-black underline">sprinklers</Link>, brigada e manutenção preventiva.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-4 italic leading-tight">
                  Diagnóstico de hidrantes
                </h3>
                <p className="text-sm text-slate-600 font-medium mb-6">
                  Envie dados do imóvel e receba orientação sobre projeto, bomba, rede, reserva técnica, laudo e AVCB.
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
              Exigencias técnicas que pesam no AVCB
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto mt-4">
              O sistema precisa ser verificavel na pratica. O projeto deve prever pressão, vazão, reserva e pontos de combate acessiveis.
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
                Como dimensionar a rede de hidrantes
              </h2>
              <div className="space-y-5 text-slate-700 text-lg leading-relaxed font-medium">
                <p>{page.technicalFocus}</p>
                <p>{page.approvalFocus}</p>
                <p>
                  O dimensionamento precisa avaliar o ponto hidraulicamente mais desfavoravel, perda de carga na tubulação, altura manometrica, reserva de agua, acionamento das bombas e condicoes reais de operacao. Quando esse cálculo e ignorado, o sistema pode existir fisicamente e mesmo assim não entregar combate efetivo.
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-6 uppercase italic">Falhas que mais travam</h3>
              <div className="space-y-4">
                {page.failures.map((failure) => (
                  <div key={failure} className="flex gap-4 border-b border-white/10 pb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black uppercase">{failure}</h4>
                      <p className="text-slate-300 text-sm mt-1">
                        Esse item deve ser corrigido antes da vistoria, porque pode gerar exigencia, retrabalho e atraso no AVCB.
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
                Aplicacao por tipo de área
              </h2>
              <p className="text-slate-600 font-medium mt-3">
                Cada setor do imóvel pode exigir leitura hidraulica diferente. A tabela ajuda a organizar o diagnóstico inicial.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="p-4 font-black uppercase">Área ou imóvel</th>
                    <th className="p-4 font-black uppercase">Atencao técnica</th>
                    <th className="p-4 font-black uppercase">Impacto no AVCB</th>
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
                Bomba, casa de bombas e reserva técnica
              </h2>
              <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-medium">
                <p>{page.costDrivers}</p>
                <p>{page.urgency}</p>
                <p>
                  A casa de bombas precisa permitir acesso, ventilacao, drenagem, alimentacao elétrica, partida automatica e manutenção. A reserva técnica deve estar protegida contra uso indevido. O recalque deve estar sinalizado e acessivel para apoio do Corpo de Bombeiros.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Gauge, title: "Pressão", desc: "Garantia de desempenho nos pontos mais desfavoraveis." },
                { icon: Droplets, title: "Vazão", desc: "Agua suficiente para combate conforme risco e projeto." },
                { icon: Zap, title: "Bombas", desc: "Partida, comandos, alimentacao e manutenção." },
                { icon: Wrench, title: "Manutenção", desc: "Mangueiras, registros, recalque, válvulas e abrigos." },
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
                  "Diagnóstico do imóvel, ocupação, área e urgencia do AVCB.",
                  "Levantamento da rede existente, bombas, reservatório, recalque e abrigos.",
                  "Definicao de solucao: projeto, adequação, instalação, teste ou manutenção.",
                  "Execução com teste hidráulico, registro técnico, laudo e ART quando aplicavel.",
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
                {[...page.related, { label: "Hidrantes", href: "/hidrantes" }, { label: "AVCB São Paulo", href: "/avcb-sao-paulo" }, { label: "Manutenção", href: "/manutencao" }].map((item) => (
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
              Solicite uma análise do sistema de hidrantes
            </h2>
            <p className="text-slate-600 font-medium">
              Informe area, tipo de imovel, cidade, se existe bomba/reservatorio e se o AVCB esta vencido.
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
            Não espere o teste de hidrante reprovar
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-bold opacity-95 max-w-3xl mx-auto">
            Rede de hidrantes sem pressão, vazão ou manutenção documentada pode atrasar o AVCB e expor o imóvel a risco real.
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
