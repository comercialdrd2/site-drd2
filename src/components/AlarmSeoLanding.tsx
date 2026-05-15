import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { AlarmSeoPage } from "@/data/alarmSeoPages";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";

type AlarmSeoLandingProps = {
  page: AlarmSeoPage;
};

function faqsFor(page: AlarmSeoPage) {
  return [
    {
      question: `O sistema de alarme de incendio e obrigatorio para ${page.segment}?`,
      answer: `A obrigatoriedade depende de area, altura, ocupacao, lotacao e risco da edificacao. Em ${page.segment}, a analise tecnica deve considerar o projeto aprovado, a necessidade de AVCB ou CLCB, a NBR 17240 e as exigencias do Corpo de Bombeiros. A DRD2 faz o enquadramento antes de indicar compra ou instalacao de equipamentos.`,
    },
    {
      question: `Qual sistema e melhor para ${page.segment}: convencional ou enderecavel?`,
      answer: `Depende do porte e da criticidade. Sistemas convencionais podem atender áreas menores e mais simples. Sistemas enderecaveis sao indicados quando e necessario identificar o ponto exato, reduzir tempo de resposta, setorizacao mais precisa e melhor controle de falhas. A escolha errada pode gerar retrabalho e exigencia no AVCB.`,
    },
    {
      question: `Quanto custa o sistema de alarme para ${page.segment}?`,
      answer: `${page.costDrivers} O orcamento correto precisa incluir projeto, materiais, instalacao, testes, comissionamento, laudo e ART quando aplicavel.`,
    },
    {
      question: "O alarme precisa ter manutenção para renovar o AVCB?",
      answer: "Sim. Sistema instalado sem manutenção comprovada pode falhar na vistoria e gerar exigencia. A manutenção avalia central, baterias, detectores, sirenes, botoeiras, cabeamento, supervisao de falhas e autonomia.",
    },
    {
      question: "A DRD2 entrega laudo técnico e ART?",
      answer: "Sim. Quando aplicavel, a DRD2 emite laudo técnico e ART, registra as verificacoes realizadas e orienta as adequacoes necessarias para o processo de AVCB, CLCB, seguro ou regularização predial.",
    },
  ];
}

export default function AlarmSeoLanding({ page }: AlarmSeoLandingProps) {
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
      { name: "Alarme de Incêndio", item: "/alarme-incendio-sao-paulo" },
      { name: page.h1, item: page.slug },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[90px] pb-[30px] lg:pt-[110px] lg:pb-[44px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-alarme.webp"
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
              <Bell className="w-4 h-4" /> {page.eyebrow}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[0.95] tracking-tighter uppercase italic text-white">
              {page.h1}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-7 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Projeto, instalação, manutenção, teste e documentação técnica para sistema de detecção e alarme de incêndio, com foco em AVCB, CLCB, seguradora e regularização junto ao Corpo de Bombeiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Solicitar orçamento técnico
              </a>
              <Link
                href="/alarme-incendio-sao-paulo"
                className="bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto border border-white/20"
              >
                Ver página pilar de alarme
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Servicos", href: "/servicos" },
          { label: "Alarme de Incêndio", href: "/alarme-incendio-sao-paulo" },
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
                Por que esta página existe para {page.segment}?
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>{page.cityContext}</p>
                <p>{page.riskProfile}</p>
                <p>{page.localDemand}</p>
                <p>
                  O objetivo e criar uma página comercial e técnica ao mesmo tempo: ela atende quem esta pesquisando sistema de alarme de incêndio, mas tambem ajuda o gestor que precisa resolver AVCB, laudo, projeto, manutenção ou exigencia recebida em vistoria. O conteudo foi estruturado para não depender apenas da repeticao de palavra-chave; ele cobre decisao de compra, risco real, processo técnico e links para sistemas complementares.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-4 italic leading-tight">
                  Diagnóstico para {page.segment}
                </h3>
                <p className="text-sm text-slate-600 font-medium mb-6">
                  Envie dados do imóvel e receba orientação sobre projeto, instalação, manutenção, laudo e prioridade para o AVCB.
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
              O sistema de alarme precisa ser pensado como medida de proteção ativa. Ele deve detectar, avisar, orientar abandono e gerar evidencia técnica para regularização.
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
                Como dimensionar o sistema de alarme para {page.segment}
              </h2>
              <div className="space-y-5 text-slate-700 text-lg leading-relaxed font-medium">
                <p>{page.technicalFocus}</p>
                <p>{page.approvalFocus}</p>
                <p>
                  O dimensionamento tambem deve considerar se a edificação usa sistema convencional ou enderecavel, se existem áreas com poeira, vapor, calor ou umidade, se a central esta em local de facil acesso e se o aviso sonoro chega a todos os ocupantes. Quando ha <Link href="/hidrantes" className="text-red-700 font-black underline">hidrantes</Link>, <Link href="/sprinklers" className="text-red-700 font-black underline">sprinklers</Link> ou brigada, o alarme precisa fazer parte do mesmo raciocinio de emergência.
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
                        Esse item precisa ser identificado antes da vistoria, porque uma falha simples pode gerar exigencia e atrasar a aprovação.
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
                O mesmo imóvel pode ter áreas com riscos diferentes. O projeto precisa separar ambientes e evitar solucao unica para tudo.
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
                Preco, prazo e prioridade de execução
              </h2>
              <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-medium">
                <p>{page.costDrivers}</p>
                <p>{page.urgency}</p>
                <p>
                  Em geral, a sequencia mais segura e: vistoria técnica, levantamento de pontos, definicao do tipo de central, conferencia de infraestrutura, instalação ou correcao, teste funcional, registro fotografico, laudo e ART quando aplicavel. Essa ordem reduz retrabalho e evita comprar equipamento que não resolve a exigencia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Bell, title: "Central", desc: "Convencional ou enderecavel, com supervisao e historico de eventos." },
                { icon: Zap, title: "Detectores", desc: "Escolha por ambiente, altura, interferencia e risco." },
                { icon: Wrench, title: "Manutenção", desc: "Testes recorrentes para evitar pane na vistoria." },
                { icon: FileText, title: "Laudo", desc: "Documentação técnica para AVCB, seguro e gestao predial." },
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
                  "Diagnóstico do imóvel, uso real e urgencia do AVCB.",
                  "Levantamento técnico de pontos, central, rotas e sistemas existentes.",
                  "Definicao de solucao: projeto, instalação, manutenção ou correcao.",
                  "Execução com teste final, orientação operacional e documentação.",
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
                {[...page.related, { label: "Alarme de incêndio SP", href: "/alarme-incendio-sao-paulo" }, { label: "Manutenção de alarme", href: "/manutencao-alarme-de-incendio-sao-paulo" }, { label: "AVCB São Paulo", href: "/avcb-sao-paulo" }].map((item) => (
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
              Solicite uma análise técnica
            </h2>
            <p className="text-slate-600 font-medium">
              Informe o tipo de imóvel, área aproximada, cidade e se o AVCB esta vencido ou em processo.
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
          <Building2 className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Resolva o alarme antes da exigencia virar atraso
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-bold opacity-95 max-w-3xl mx-auto">
            Um sistema de alarme bem projetado, testado e documentado reduz risco, melhora a aprovação do AVCB e da mais segurança para operacao, clientes e ocupantes.
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
