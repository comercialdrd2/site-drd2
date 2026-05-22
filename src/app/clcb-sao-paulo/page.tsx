import Link from "next/link";
import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { CheckCircle, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import AvcbOuClcbCalculator from "@/components/AvcbOuClcbCalculator";

const _pageTitle = "CLCB em São Paulo 2026 | DRD2 Engenharia — Diagnóstico técnico gratuito";
const _pageDesc = "A DRD2 Engenharia obtém o CLCB em São Paulo com agilidade e conformidade com o Decreto 69.118/2024. Enquadramento gratuito: descubra se seu imóvel precisa de CLCB ou AVCB.";

export const metadata = {
  title: "CLCB em São Paulo 2026 | DRD2 Engenharia — Diagnóstico técnico gratuito",
  description: "A DRD2 Engenharia obtém o CLCB em São Paulo com agilidade e conformidade com o Decreto 69.118/2024. Enquadramento gratuito: descubra se seu imóvel precisa de CLCB ou AVCB.",
  alternates: {
    canonical: "/clcb-sao-paulo",
  },
};

const faqs = [
  {
    q: "Quanto tempo demora para tirar o CLCB em São Paulo?",
    a: "O CLCB em São Paulo costuma ser emitido em prazo mais curto que o AVCB, pois o processo é simplificado. Com documentação correta desde o início, a DRD2 Engenharia minimiza ao máximo esse prazo junto ao CBPMESP.",
  },
  {
    q: "Qual o custo do CLCB em São Paulo?",
    a: "O valor do CLCB São Paulo varia conforme a ocupação, área e adequações necessárias. Solicite uma avaliação gratuita e receba um orçamento personalizado para a sua edificação.",
  },
  {
    q: "O CLCB substitui o Alvará de Funcionamento?",
    a: "Não. O CLCB é exigido para a obtenção do Alvará de Funcionamento municipal, mas não o substitui. São documentos complementares e obrigatórios para o funcionamento regular do seu negócio em São Paulo.",
  },
  {
    q: "Imóvel alugado precisa de CLCB em São Paulo?",
    a: "Sim. A responsabilidade pela regularização pode recair sobre o proprietário ou o locatário, dependendo do contrato. A DRD2 Engenharia orienta sobre responsabilidades e conduz o processo de CLCB em São Paulo independentemente da situação contratual.",
  },
];

export default function CLCBSaoPaulo() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/clcb-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "CLCB em São Paulo",
        faqs: faqs.map(f => ({ question: f.q, answer: f.a })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "CLCB São Paulo", item: "/clcb-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-clcb.webp"
          alt="CLCB em São Paulo — DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-30 grayscale-[30%]"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Certificado do Corpo de Bombeiros — São Paulo 2026
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                CLCB — CERTIFICADO DO CORPO DE BOMBEIROS
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                EM SÃO PAULO 2026 — PROCESSO SIMPLIFICADO
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              A DRD2 Engenharia conduz todo o processo do CLCB em São Paulo com agilidade e conformidade total com o Decreto Estadual nº 69.118/2024. Diagnóstico técnico gratuito em até 2 horas.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>QUERO MEU CLCB AGORA</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "CLCB São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── O QUE É O CLCB ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              Se você precisa de <strong>CLCB em São Paulo</strong>, a DRD2 Engenharia conduz todo o processo de obtenção do Certificado de Licença do Corpo de Bombeiros junto ao CBPMESP com agilidade, segurança técnica e conformidade total com as Instruções Técnicas vigentes e o <strong>Decreto Estadual nº 69.118/2024</strong>. Atendemos comércios, escritórios, clínicas, salões de beleza, microempresas e demais estabelecimentos em toda a Grande São Paulo, incluindo a Zona Sul (<Link href="/renovacao-clcb-moema-sao-paulo" className="text-primary hover:underline">Moema</Link>, <Link href="/renovacao-clcb-santo-amaro-sao-paulo" className="text-primary hover:underline">Santo Amaro</Link>), Zona Norte (<Link href="/renovacao-clcb-santana-sao-paulo" className="text-primary hover:underline">Santana</Link>), Centro Expandido e cidades estratégicas como <Link href="/renovacao-clcb-guarulhos" className="text-primary hover:underline">Guarulhos</Link> e <Link href="/renovacao-clcb-osasco" className="text-primary hover:underline">Osasco</Link>.
            </p>

            <h2 className="text-3xl font-black text-slate-900 border-l-4 border-primary pl-6 leading-tight uppercase italic tracking-tight">
              O que é o CLCB e quando é obrigatório?
            </h2>
            <p>
              O Certificado de Licença do Corpo de Bombeiros — <strong>CLCB</strong> — é o documento oficial que atesta que uma edificação de menor porte ou risco reduzido atende às exigências de segurança contra incêndio estabelecidas pelo CBPMESP.
            </p>
            <p>
              O <strong>CLCB São Paulo</strong> é exigido para a obtenção e renovação do Alvará de Funcionamento municipal, licenciamentos sanitários e contratos comerciais que exigem regularidade predial. Sem o certificado, seu imóvel está irregular e sujeito a notificação, multa e embargo.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUEM PRECISA ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">
              Quem precisa de CLCB em São Paulo?
            </h2>
            <p className="text-lg text-slate-600 font-medium">O CLCB é indicado para edificações com área inferior a 750 m² e baixo risco de incêndio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              "Lojas e comércios em geral",
              "Escritórios e consultórios",
              "Salões de beleza e estética",
              "Clínicas médicas e odontológicas",
              "Restaurantes e lanchonetes",
              "Academias de pequeno porte",
              "Escolas e espaços educacionais",
              "Microempresas e pequeno porte",
              "Igrejas e templos religiosos",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-primary/30 transition-all">
                <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tight">Dúvida: CLCB ou AVCB?</h3>
              <p className="text-slate-300 font-medium leading-relaxed">
                O enquadramento errado gera retrabalho e atraso. A DRD2 realiza esse diagnóstico gratuitamente — já na primeira conversa.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary text-white font-black px-8 py-4 rounded-2xl hover:bg-red-700 transition-all uppercase tracking-tighter text-sm shrink-0"
            >
              Diagnóstico técnico gratuito <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CLCB vs AVCB ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">
              Qual a diferença entre CLCB e AVCB em São Paulo?
            </h2>
            <p className="text-slate-600 font-medium">A principal diferença está no porte da edificação e no nível de risco da atividade.</p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white">
                  <th className="p-5 font-black uppercase tracking-wider text-sm">Critério</th>
                  <th className="p-5 font-black uppercase tracking-wider text-sm text-center">CLCB</th>
                  <th className="p-5 font-black uppercase tracking-wider text-sm text-center">AVCB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { c: "Área", cl: "Até 750 m² (regra geral)", av: "Acima de 750 m² ou risco elevado" },
                  { c: "Projeto técnico", cl: "Não exigido", av: "Obrigatório" },
                  { c: "Processo", cl: "Simplificado", av: "Completo" },
                  { c: "Prazo médio", cl: "Mais ágil", av: "Maior" },
                  { c: "Custo", cl: "Menor", av: "Maior" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition">
                    <td className="p-5 font-black text-slate-900 text-sm uppercase">{row.c}</td>
                    <td className="p-5 text-center text-slate-600 font-medium text-sm">{row.cl}</td>
                    <td className="p-5 text-center text-slate-600 font-medium text-sm">{row.av}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como tirar o <span className="text-primary not-italic">CLCB em São Paulo</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Diagnóstico técnico gratuito", d: "Avaliamos sua edificação, confirmamos o enquadramento e orientamos adequações necessárias." },
              { id: "02", t: "Verificação dos Sistemas", d: "Checamos se extintores, sinalização e iluminação estão em conformidade com as ITs do CBPMESP." },
              { id: "03", t: "Adequação Prática", d: "Indicamos apenas o necessário para aprovação — sem exigências desnecessárias." },
              { id: "04", t: "Protocolo Digital", d: "Realizamos o protocolo no sistema e acompanhamos integralmente o status." },
              { id: "05", t: "Emissão do CLCB", d: "Com o processo aprovado, seu certificado é emitido e o imóvel fica 100% regularizado." },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:bg-primary transition-all text-left">
                <div className="text-primary font-black text-xs mb-4 group-hover:text-white">{step.id}</div>
                <h4 className="font-black italic uppercase mb-4 leading-tight">{step.t}</h4>
                <p className="text-sm text-slate-400 group-hover:text-white leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE ESCOLHER ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic tracking-tight">
                Por que escolher a DRD2 para o seu CLCB?
              </h2>
              <div className="space-y-5">
                {[
                  "Especialistas com domínio total do Decreto 69.118/2024",
                  "Diagnóstico técnico gratuito sem enquadramentos errados",
                  "Atendimento especializado para pequenas empresas",
                  "Renovação de CLCB vencido com agilidade total",
                  "Resposta técnica imediata a exigências dos Bombeiros",
                  "Cobertura em toda a Grande SP, ABC e Interior",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tight">
                Diagnóstico <span className="text-primary">Gratuito</span>
              </h3>
              <p className="text-slate-500 font-medium mb-8">Preencha e um engenheiro entra em contato em até 2 horas.</p>
              <LeadForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-primary italic">CLCB em São Paulo</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 cursor-pointer open:bg-white open:ring-4 open:ring-primary/10 transition-all">
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.q}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <p className="mt-6 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-6 italic">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Seu Imóvel Precisa de <span className="text-slate-950 not-italic">CLCB em São Paulo?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10 italic leading-relaxed">
            A DRD2 conduz o processo do diagnóstico à emissão do certificado, sem burocracia para você.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-7 h-7" /> Agendar Diagnóstico técnico gratuito
          </a>
          <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">Atendemos toda a Grande São Paulo e Interior</p>
        </div>
      </section>


      <AvcbOuClcbCalculator />

      <ServiceClusterLinks currentSlug="/clcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/clcb-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/clcb-sao-paulo" />
    </>
  );
}
