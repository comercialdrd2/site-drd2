import { servicesData } from "@/data/services";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ShieldAlert, FileText, Zap,
  Stethoscope, AlertTriangle, Phone, ArrowRight,
  ShieldCheck, FileCheck, Wind, AlertCircle,
  Flame, Thermometer, ShieldX, MapPin,
} from "lucide-react";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadForm from "@/components/LeadForm";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB para Clínica Odontológica em São Paulo 2026 | DRD2 Engenharia";
const _pageDesc = "Clínica odontológica sem AVCB em SP arrisca bloqueio do CMVS e interdição pela Vigilância Sanitária. Grupo I, gases medicinais, autoclaves e CLCB ou AVCB completo. DRD2 Engenharia regulariza.";

export const metadata = {
  title: "AVCB para Clínica Odontológica em São Paulo 2026 | DRD2 Engenharia",
  description:
    "Clínica odontológica sem AVCB em SP arrisca bloqueio do CMVS e interdição pela Vigilância Sanitária. Grupo I, gases medicinais, autoclaves e CLCB ou AVCB completo. DRD2 Engenharia regulariza.",
  alternates: {
    canonical: "/avcb-consultorios-medicos-odontologicos-sao-paulo",
  },
};

export default function AVCBClinicaOdontologicaPage() {
  const slug = "avcb-consultorios-medicos-odontologicos-sao-paulo";
  const srv = servicesData[slug];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  if (!srv) return <div>Serviço não encontrado</div>;

  const _schema = generateMasterSchema({
        slug: `/${srv.slug}`,
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB para Clínica Odontológica em São Paulo",
        faqs: srv.faqs.map(f => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Clínica Odontológica em São Paulo", item: "/avcb-consultorios-medicos-odontologicos-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[20px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/hero-clinica-odontologica.webp"
          alt="AVCB para Clínica Odontológica em São Paulo — DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-20 grayscale"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 25% 55%, rgba(220,38,38,0.4) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Grupo I — Serviços de Saúde — Regularização 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                CLÍNICA ODONTOLÓGICA EM SP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              Clínica odontológica sem AVCB arrisca o <strong>bloqueio do CMVS</strong> pela Vigilância Sanitária e interdição imediata pelo Corpo de Bombeiros.<br /><br />
              Em 2026, o cruzamento de dados entre Bombeiros e VISA está impedindo renovações de alvará sanitário em clínicas sem certificado ativo.
            </p>
            <p className="text-lg text-gray-300 mb-0 leading-relaxed font-medium max-w-2xl">
              A DRD2 Engenharia é especializada em regularização de clínicas odontológicas em São Paulo, com domínio das exigências do CBPMESP para Grupo I e experiência específica em gases medicinais, autoclaves e CMVS.
            </p>
            <div className="mt-4 block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="sm:whitespace-nowrap">FALAR COM ENGENHEIRO AGORA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "AVCB para Clínica Odontológica em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── H2 #1: PRECISA DE AVCB? ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Clínica Odontológica Precisa de AVCB em{" "}
                <span className="text-red-600 not-italic">São Paulo?</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  Sim — e com exigências específicas para o Grupo I — Serviços de Saúde. Clínicas odontológicas são enquadradas pela IT-02 do CBPMESP no mesmo grupo que hospitais e clínicas médicas, pelo perfil de risco elevado: gases medicinais pressurizados, autoclaves, equipamentos de alta tecnologia e pacientes em posição vulnerável durante atendimento.
                </p>
                <p>
                  O Decreto Estadual nº 69.118/2024 reforça a obrigatoriedade e o cruzamento de dados com a Vigilância Sanitária tornou o AVCB condição direta para renovação do <strong>CMVS (Cadastro Municipal de Vigilância Sanitária)</strong>. Operar sem certificado vigente expõe o responsável a:
                </p>
                <ul className="space-y-3">
                  {[
                    "Bloqueio da renovação do CMVS junto à Vigilância Sanitária",
                    "Interdição imediata pelo Corpo de Bombeiros ou pela VISA",
                    "Cassação da inscrição no CRO-SP em caso de sinistro",
                    "Responsabilidade civil e criminal em caso de acidente",
                    "Invalidação do seguro do estabelecimento",
                    "Impedimento de credenciamento junto a planos odontológicos",
                  ].map((risco, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>{risco}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-10 text-white">
              <h3 className="text-xl font-black uppercase italic mb-6 border-b border-white/10 pb-4">
                Quem está obrigado a regularizar
              </h3>
              <ul className="space-y-4">
                {[
                  "Consultórios odontológicos individuais",
                  "Clínicas com múltiplas cadeiras de atendimento",
                  "Centros de radiologia odontológica",
                  "Clínicas de implantes e cirurgias ambulatoriais",
                  "Clínicas integradas com exames médicos",
                  "Consultórios em edifícios comerciais (AVCB individual)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-200 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-white/5 rounded-2xl border border-white/10 text-xs italic text-gray-400">
                <span className="text-red-500 font-black uppercase block mb-2 tracking-widest not-italic">Enquadramento normativo:</span>
                Grupo I — Serviços de Saúde (IT-02). Atenção especial à IT-21 (armazenamento de gases medicinais) e IT-08 (rotas de fuga para pacientes em atendimento).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #2: RISCOS ESPECÍFICOS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Os 3 Riscos que mais{" "}
              <span className="text-red-600 not-italic">Reprovam Clínicas Odontológicas</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Clínicas odontológicas têm riscos que passam despercebidos pelos proprietários — e são exatamente os pontos onde o Corpo de Bombeiros é mais rigoroso.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                titulo: "Gases Medicinais Irregulares",
                desc: "Cilindros de oxigênio e óxido nitroso armazenados dentro das salas de atendimento, sem ventilação adequada e sem afastamento mínimo de fontes de calor. O Corpo de Bombeiros exige armazenamento técnico externo conforme IT-21.",
                tag: "Risco de explosão — IT-21",
              },
              {
                num: "02",
                titulo: "Instalações Elétricas Sem Laudo",
                desc: "Clínicas em prédios antigos com fiação que não suporta a carga de equipamentos modernos — tomógrafos, autoclave, aparelhos de raios-X, compressores. O laudo de instalações elétricas com ART é obrigatório para aprovação.",
                tag: "ART de Elétrica obrigatória",
              },
              {
                num: "03",
                titulo: "Saídas de Emergência Subdimensionadas",
                desc: "Portas e corredores que não permitem a saída rápida de pacientes reclinados na cadeira ou com mobilidade reduzida. As rotas de fuga para Grupo I têm dimensionamento específico na IT-08.",
                tag: "Erro frequente na IT-08",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-red-600/20">
                  {item.num}
                </div>
                <h3 className="text-xl font-black uppercase mb-4 leading-tight italic text-slate-900">{item.titulo}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="bg-red-50 p-4 rounded-xl text-[10px] uppercase font-black tracking-widest text-red-600 italic text-center">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #3: SISTEMAS OBRIGATÓRIOS ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Sistemas de Segurança Exigidos em{" "}
              <span className="text-red-600 not-italic">Clínicas Odontológicas pelo CBPMESP</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { nome: "Extintores de incêndio", desc: "CO₂ obrigatório junto a equipamentos eletrônicos e quadros elétricos. Distribuição em todos os ambientes conforme IT-21.", icon: Flame },
              { nome: "Gases medicinais — IT-21", desc: "Armazenamento externo ventilado para cilindros de O₂ e N₂O, com afastamento mínimo de fontes de calor e sinalização de risco.", icon: Wind },
              { nome: "Iluminação de emergência", desc: "Cobertura total incluindo salas de atendimento, corredor e saída. Autonomia mínima de 1 hora conforme IT-18.", icon: Zap },
              { nome: "Sinalização de emergência", desc: "Placas fotoluminescentes indicando rotas de fuga, saídas e extintores. Posicionamento conforme IT-20.", icon: FileCheck },
              { nome: "Autoclaves — laudo de pressão", desc: "Vasos de pressão exigem laudo de inspeção periódica e ART de responsabilidade técnica conforme NR-13.", icon: Thermometer },
              { nome: "ART de instalações elétricas", desc: "Laudo técnico com ART do engenheiro elétrico comprovando que a instalação suporta a carga dos equipamentos da clínica.", icon: ZapIcon },
              { nome: "Saídas de emergência", desc: "Dimensionamento conforme IT-08 para evacuação de pacientes em atendimento, incluindo largura adequada de portas e corredores.", icon: ArrowRight },
              { nome: "Alarme de incêndio", desc: "Acionadores manuais e detectores automáticos com central monitorada conforme IT-17.", icon: AlertCircle },
              { nome: "Brigada de incêndio", desc: "Equipe treinada conforme IT-17, com protocolo específico para evacuação de pacientes sedados ou com mobilidade reduzida.", icon: ShieldAlert },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <div className="text-red-600 mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-black mb-3 uppercase italic tracking-tight text-white">{s.nome}</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 1 ── */}
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua clínica tem todos esses itens aprovados pelo CBPMESP?
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito"
            occupationType="clínica odontológica"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #4: PROCESSO DRD2 ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-red-600 font-black uppercase tracking-widest text-xs">Grupo I — Processo Especializado</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-none uppercase italic mt-4">
              Como a DRD2 Conduz o{" "}
              <span className="text-red-600 not-italic">AVCB para Clínica Odontológica em SP</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { n: "Etapa 1", t: "Diagnóstico técnico gratuito", d: "Engenheiro visita a clínica, avalia o armazenamento de gases, autoclaves, instalações elétricas, rotas de fuga e enquadramento normativo — AVCB ou CLCB." },
              { n: "Etapa 2", t: "Relatório de pendências", d: "Documento completo com todas as adequações necessárias, custo estimado e cronograma. Você decide com informação real antes de qualquer compromisso." },
              { n: "Etapa 3", t: "Execução das adequações", d: "DRD2 executa ou coordena as intervenções necessárias, priorizando o que não compromete o funcionamento da clínica durante as adequações." },
              { n: "Etapa 4", t: "Elaboração do projeto técnico", d: "Projeto completo com memorial descritivo, plantas, ART e documentação conforme as ITs vigentes em 2026." },
              { n: "Etapa 5", t: "Protocolo e acompanhamento", d: "Processo protocolado no Corpo de Bombeiros com acompanhamento completo e resposta a qualquer Comunique-se sem custo adicional." },
              { n: "Etapa 6", t: "Retirada do AVCB ou CLCB", d: "Certificado entregue com orientação sobre prazo de validade, renovação e documentação para a Vigilância Sanitária." },
            ].map((e, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all relative overflow-hidden">
                <span className="text-7xl font-black text-red-600/5 absolute bottom-[-10px] right-[-10px] group-hover:text-red-600/10 transition-colors leading-none select-none pointer-events-none z-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-600 mb-3">{e.n}</p>
                <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic tracking-tight text-slate-900">{e.t}</h3>
                <p className="relative z-10 text-slate-600 leading-relaxed font-medium text-sm">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar sua clínica?
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro — sem compromisso"
            occupationType="clínica odontológica"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #5: COBERTURA ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic">
                Atendemos Clínicas Odontológicas em{" "}
                <span className="text-red-600 not-italic">São Paulo e Grande SP</span>
              </h2>
              <div className="space-y-5 text-lg text-gray-300 leading-relaxed font-medium">
                <p>A DRD2 Engenharia regulariza consultórios e clínicas odontológicas em São Paulo capital e toda a Grande SP.</p>
                <p>Por zona em São Paulo: Zona Sul (Moema, Saúde, Jabaquara, Santo Amaro), Zona Norte (Santana, Tucuruvi, Tremembé), Zona Leste (Penha, Tatuapé, Mooca), Zona Oeste (Pinheiros, Perdizes, Lapa, Butantã) e Centro Expandido (Higienópolis, Consolação, Santa Cecília).</p>
                <p>Grande SP: Guarulhos, Osasco, Santo André, São Bernardo do Campo, São Caetano do Sul, Barueri e Diadema.</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-[3rem] p-10 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <MapPin className="w-10 h-10 text-red-600 flex-shrink-0" />
                <p className="font-black text-xl uppercase italic">Regiões Atendidas</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Moema / Saúde",
                  "Santana / Tucuruvi",
                  "Penha / Tatuapé",
                  "Pinheiros / Perdizes",
                  "Higienópolis / Santa Cecília",
                  "Jabaquara / Santo Amaro",
                  "Guarulhos / Osasco",
                  "Santo André / São Bernardo",
                  "Barueri / São Caetano",
                  "Diadema",
                ].map((reg, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm">{reg}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-500 text-sm font-medium italic">+ toda a Grande São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes —{" "}
              <span className="text-red-600 not-italic font-black italic uppercase">AVCB para Clínica Odontológica SP</span>
            </h2>
          </div>
          <div className="space-y-4">
            {srv.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50"
              >
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-slate-400 mb-8">
            Saiba mais sobre nossos serviços
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "AVCB para Hospital e Clínica em São Paulo", href: "/avcb-hospital-clinica-sao-paulo" },
              { label: "AVCB para Farmácia e Drogaria em São Paulo", href: "/avcb-farmacia-drogaria-sao-paulo" },
              { label: "AVCB ou CLCB: Qual Certificado Preciso?", href: "/clcb-sao-paulo" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 bg-slate-50 hover:bg-red-600 hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-red-600 transition-all text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section className="py-24 bg-slate-900 text-center border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <p className="text-2xl md:text-4xl font-black uppercase italic tracking-tight mb-6">
            Regularizamos mais de 2.500 estabelecimentos em São Paulo.
          </p>
          <p className="text-xl text-slate-300 font-medium mb-10 italic">
            Fale com um engenheiro e receba seu diagnóstico gratuito.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista no WhatsApp"
            occupationType="clínica odontológica"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Consultorios Medicos Odontologicos"
        currentSlug="/avcb-consultorios-medicos-odontologicos-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Consultorios Medicos Odontologicos"
        currentSlug="/avcb-consultorios-medicos-odontologicos-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-hospital-clinica-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Consultórios Médicos e Odontológicos"
      />

      <ServiceClusterLinks currentSlug="/avcb-consultorios-medicos-odontologicos-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-consultorios-medicos-odontologicos-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={`/${srv.slug}`} />


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Consultorios Medicos Odontologicos São Paulo</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Consultorios Medicos Odontologicos São Paulo precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Consultorios Medicos Odontologicos São Paulo. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      <LeadForm />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Sua clínica está regularizada junto ao Corpo de Bombeiros?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            O bloqueio do CMVS pela Vigilância Sanitária pode fechar sua clínica sem aviso prévio. Fale agora com um engenheiro da DRD2 e receba o diagnóstico gratuito.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline" /> Solicitar diagnóstico técnico gratuito pelo WhatsApp
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">
            DRD2 Engenharia — AVCB para Clínicas Odontológicas em São Paulo — Decreto 69.118/2024
          </p>
        </div>
      </section>
    </>
  );
}

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
);
