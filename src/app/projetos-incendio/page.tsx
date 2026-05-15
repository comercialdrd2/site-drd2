import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { CheckCircle, FileText, ShieldCheck, Phone, Layout, Zap, Factory, Users, HardHat, ClipboardCheck } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Projeto de Incêndio (PPCI) em São Paulo 2026 | DRD2 Engenharia";
const _pageDesc = "A DRD2 Engenharia elabora Projetos de Incêndio (PPCI) em São Paulo conforme Decreto 69.118/2024. Aprovação ágil no CBPMESP, ART inclusa. Diagnóstico técnico gratuito.";

export const metadata = {
  title: "Projeto de Incêndio (PPCI) em São Paulo 2026 | DRD2 Engenharia",
  description: "A DRD2 Engenharia elabora Projetos de Incêndio (PPCI) em São Paulo conforme Decreto 69.118/2024. Aprovação ágil no CBPMESP, ART inclusa. Diagnóstico técnico gratuito.",
  alternates: {
    canonical: "/projetos-incendio",
  },
};

const faqs = [
  {
    q: "Qual é o prazo para elaboração de um projeto PPCI?",
    a: "O prazo de elaboração do projeto de incêndio varia conforme a complexidade da edificação. Para edificações de uso simples (residencial ou comercial de pequeno porte), o prazo médio é de 10 a 20 dias úteis. Edificações industriais, hospitalares ou de grande porte podem demandar de 30 a 60 dias. A DRD2 apresenta o cronograma estimado na proposta técnica, antes do início dos serviços.",
  },
  {
    q: "Quanto custa um projeto de prevenção e combate a incêndio em SP?",
    a: "O custo do projeto PPCI em São Paulo depende do tipo de ocupação, da área total construída, do número de pavimentos e dos sistemas exigidos pelas ITs do CBPMESP. Projetos residenciais simples possuem valor inferior aos industriais ou hospitalares, que envolvem mais sistemas e maior complexidade técnica. Entre em contato com a DRD2 para receber um orçamento técnico personalizado e sem compromisso.",
  },
  {
    q: "O projeto de incêndio precisa ser elaborado por engenheiro?",
    a: "Sim. Conforme o Decreto Estadual n. 69.118/2024 e as ITs do CBPMESP, o Projeto de Prevenção e Combate a Incêndio deve ser elaborado e assinado por profissional habilitado — engenheiro civil, mecânico, elétrico ou de segurança do trabalho — com registro ativo no CREA-SP e ART emitida no CREA. A DRD2 Engenharia conta com equipe própria de engenheiros especializados em segurança contra incêndio.",
  },
  {
    q: "Minha edificação já tem instalações de incêndio. Preciso de projeto?",
    a: "Sim. Mesmo que a edificação já possua sistemas instalados (hidrantes, extintores, alarmes), o CBPMESP exige que o projeto técnico represente fielmente o que está instalado, com as devidas especificações e memoriais. Nos casos de adequação de edificações existentes, a DRD2 realiza o levantamento das instalações e elabora o projeto de regularização conforme as ITs vigentes.",
  },
  {
    q: "A DRD2 atende fora da cidade de São Paulo?",
    a: "Sim. A DRD2 Engenharia atende projetos de incêndio em toda a Grande São Paulo (ABC Paulista, Guarulhos, Osasco, Barueri, Mauá, Cotia, Diadema, São Caetano do Sul) e interior do Estado, incluindo Campinas, Ribeirão Preto, São José dos Campos, Sorocaba, Santos e demais regiões.",
  },
];

const ocupacoes = [
  { grupo: "Grupo A", nome: "Residencial", exemplos: "Casas, apartamentos, condomínios residenciais" },
  { grupo: "Grupo B", nome: "Hospedagem", exemplos: "Hotéis, pousadas, apart-hotéis" },
  { grupo: "Grupo C", nome: "Comercial", exemplos: "Lojas, supermercados, shoppings" },
  { grupo: "Grupo D", nome: "Profissional", exemplos: "Escritórios, bancos, clínicas, laboratórios" },
  { grupo: "Grupo E", nome: "Educacional", exemplos: "Escolas, universidades, academias" },
  { grupo: "Grupo F", nome: "Reunião Público", exemplos: "Igrejas, teatros, salões de eventos, estádios" },
  { grupo: "Grupo G", nome: "Automotivo", exemplos: "Garagens, postos de combustível, oficinas" },
  { grupo: "Grupo H", nome: "Saúde", exemplos: "Hospitais, UBSs, clínicas médicas" },
  { grupo: "Grupo I", nome: "Industrial", exemplos: "Fábricas, galpões industriais, depósitos" },
  { grupo: "Grupo J", nome: "Depósito", exemplos: "Armazéns, centros de distribuição, depósitos" },
  { grupo: "Grupo M", nome: "Especiais", exemplos: "Túneis, aeroportos, subestações elétricas" },
];

export default function ProjetosPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/projetos-incendio",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Projeto de Incêndio PPCI em São Paulo",
        faqs: faqs.map(f => ({ question: f.q, answer: f.a })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Projeto de Incêndio PPCI", item: "/projetos-incendio" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-projetos.webp"
          alt="Projeto de Incêndio PPCI em São Paulo — DRD2 Engenharia"
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
              Aprovação ágil no CBPMESP — São Paulo 2026
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                PROJETO DE INCÊNDIO (PPCI)
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                EM SÃO PAULO — APROVAÇÃO NO CBPMESP
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Elaboramos projetos PPCI para todas as ocupações conforme as ITs 2025 e o Decreto Estadual nº 69.118/2024. Do diagnóstico ao deferimento, sem retrabalho.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>SOLICITAR ORÇAMENTO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Projeto de Incêndio PPCI" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── O QUE É O PPCI ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-primary pl-6 leading-tight uppercase italic tracking-tight">
                O que é o Projeto PPCI e por que ele é obrigatório?
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O <strong>Projeto de Prevenção e Combate a Incêndio (PPCI)</strong> é o conjunto de plantas técnicas, memoriais descritivos e especificações que definem todos os sistemas de segurança contra incêndio de uma edificação.
                </p>
                <p>
                  Ele é o documento base exigido pelo <strong>Corpo de Bombeiros de SP</strong> para emissão do AVCB ou do CLCB. Toda edificação que necessita dessas licenças precisa, obrigatóriamente, de um projeto aprovado, assinado por engenheiro habilitado e acompanhado de <strong>ART</strong>.
                </p>
                <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-primary text-red-900 font-medium italic">
                  Atuamos com rigor técnico e conformidade com o <strong>Decreto Estadual n. 69.118/2024</strong> e a Lei Complementar 1.257/2015.
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/page-projetos.webp"
                  alt="Planta técnica de projeto de incêndio PPCI"
                  width={600}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <ShieldCheck className="w-12 h-12 text-primary mb-2" />
                <p className="text-sm font-bold uppercase tracking-wider">Aderência Normativa<br />Total em 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUÍDO ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            O que está incluído no Projeto elaborado pela DRD2?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layout, title: "Saídas e Escadas", desc: "Dimensionamento de rotas de fuga conforme IT-11 e IT-08." },
              { icon: Zap, title: "Iluminação de Emergência", desc: "Projetos em conformidade com IT-18 e NBR 10898." },
              { icon: Factory, title: "Sistema Hidráulico", desc: "Hidrantes, mangotinhos e sprinklers (IT-22 e IT-23)." },
              { icon: Zap, title: "SDAI — Detecção e Alarme", desc: "Sistemas inteligentes conforme IT-17 e NBR 17240." },
              { icon: ShieldCheck, title: "Extintores", desc: "Cálculo de carga de incêndio e distribuição (IT-21)." },
              { icon: HardHat, title: "SPDA", desc: "Proteção contra descargas atmosféricas (IT-31)." },
              { icon: FileText, title: "Memorial Descritivo", desc: "Documentação técnica detalhada de todos os sistemas." },
              { icon: ClipboardCheck, title: "ART", desc: "Anotação de Responsabilidade Técnica de engenheiro habilitado." },
              { icon: Users, title: "Brigada e Sinalização", desc: "Dimensionamento conforme IT-16 e IT-20." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE EDIFICAÇÃO ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-6 uppercase italic tracking-tight">
            Tipos de Edificação e Ocupações Atendidas
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto font-medium">
            Elaboramos projetos de incêndio para todas as ocupações previstas nas Instruções Técnicas do CBPMESP.
          </p>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-8 py-5 font-black uppercase tracking-wider text-sm">Grupo de Ocupação</th>
                    <th className="px-8 py-5 font-black uppercase tracking-wider text-sm">Exemplos de Uso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ocupacoes.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-primary font-black text-sm shrink-0">
                            {item.grupo.split(" ")[1]}
                          </span>
                          <div>
                            <div className="font-black text-slate-900 text-sm uppercase">{item.grupo}</div>
                            <div className="text-xs text-slate-500 font-medium">{item.nome}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-slate-600 text-sm leading-relaxed font-medium">
                        {item.exemplos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como funciona a <span className="text-primary not-italic">elaboração e aprovação do PPCI</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Diagnóstico Técnico", d: "Visita ao local ou análise das plantas existentes e enquadramento normativo." },
              { id: "02", t: "Elaboração do PPCI", d: "Dimensionamento de todos os sistemas e desenho das plantas técnicas." },
              { id: "03", t: "Emissão de ART", d: "Assinatura do engenheiro responsável e registro formal no CREA-SP." },
              { id: "04", t: "Protocolo no CBPMESP", d: "Envio digital do processo pelo sistema REGIN (e-Projeto)." },
              { id: "05", t: "Análise Técnica", d: "Acompanhamento ativo e resposta a eventuais Comunique-se." },
              { id: "06", t: "Aprovação Final", d: "Deferimento pelo Corpo de Bombeiros e liberação para execução." },
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

      {/* ── DIFERENCIAIS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            Por que contratar a DRD2 para o seu Projeto de Incêndio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Aderência Normativa Total", desc: "Projeto conforme as Instruções Técnicas 2025. Sem risco de indeferimento por desatualização." },
              { title: "Enquadramento Preciso", desc: "Definição correta do grupo e classe de risco, evitando exigências desnecessárias." },
              { title: "Resposta a Comunique-se", desc: "Atuamos proativamente na resolução de exigências, acelerando o deferimento final." },
            ].map((item, i) => (
              <div key={i} className="text-center p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-primary italic">Projeto de Incêndio SP</span>
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

      {/* ── LEAD FORM ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-2">
              Diagnóstico <span className="text-primary">Gratuito</span>
            </h2>
            <p className="text-slate-500 font-medium">Preencha e um engenheiro entra em contato em até 24h.</p>
          </div>
          <LeadForm variant="compact" showWrapper={false} />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Precisa de Projeto de Incêndio <span className="text-slate-950 not-italic">em São Paulo?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10 italic leading-relaxed">
            Analisamos gratuitamente o enquadramento da sua edificação e elaboramos o PPCI para aprovação no CBPMESP.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-7 h-7" /> Solicitar Orçamento Gratuito
          </a>
          <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">Atendemos toda a Grande São Paulo e Interior</p>
        </div>
      </section>


      <ServiceClusterLinks currentSlug="/projetos-incendio" />
      <ServiceBlogLinks currentSlug="/projetos-incendio" />

      <NeighborhoodSilo currentSlug="/projetos-incendio" />
    </>
  );
}
