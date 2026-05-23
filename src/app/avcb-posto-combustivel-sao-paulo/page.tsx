import { servicesData } from "@/data/services";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ShieldAlert, FileText, Zap, AlertTriangle,
  HardHat, Phone, ArrowRight, ShieldCheck, ZapIcon,
  Flame, LayoutPanelTop, Droplet, Thermometer, Fuel,
} from "lucide-react";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB para Posto de Combustível em São Paulo 2026 | DRD2 Engenharia";
const _pageDesc = "A DRD2 Engenharia é especialista em AVCB para postos de combustível em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa e agilidade. Diagnóstico técnico gratuito.";

export const metadata = {
  title: "AVCB para Posto de Combustível em São Paulo 2026 | DRD2 Engenharia",
  description: "A DRD2 Engenharia é especialista em AVCB para postos de combustível em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa e agilidade. Diagnóstico técnico gratuito.",
  alternates: {
    canonical: "/avcb-posto-combustivel-sao-paulo",
  },
};

export default function AVCBPostoPage() {
  const slug = "avcb-posto-combustivel-sao-paulo";
  const srv = servicesData[slug];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  if (!srv) return <div>Serviço não encontrado</div>;

  const _schema = generateMasterSchema({
        slug: `/${srv.slug}`,
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB para Postos de Combustível SP",
        faqs: srv.faqs.map(f => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: srv.title, item: `/${srv.slug}` }
        ]
      });

  return (
    <main className="bg-white">
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-primary">
        <Image
          src="/images/hero-posto-combustivel.webp"
          alt="AVCB para Posto de Combustível em São Paulo — Regularização Completa com a DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 py-20 max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Fuel className="w-4 h-4" /> Risco de Explosão — Grupo M (Especiais)
            </div>
            <h1 className="text-3xl md:text-6xl font-black mb-4 leading-[1.1] tracking-tighter uppercase italic">
              AVCB para <span className="text-primary not-italic">Posto de Combustível</span> em São Paulo
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 font-medium leading-relaxed border-l-4 border-primary pl-8">
              Estabelecimentos com o mais alto nível de risco de incêndio e explosão. Armazenamento subterrâneo e vapores inflamáveis exigem precisão normativa absoluta — regularize em 2026 com a DRD2 Engenharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-10 py-5 rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-tighter text-lg"
              >
                <Phone className="w-6 h-6" /> Agendar Diagnóstico técnico gratuito
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
          { label: "AVCB para Posto de Combustível em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── O QUE É E POR QUE SEU POSTO PRECISA ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="font-medium">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">
                AVCB para Posto de Combustível em São Paulo: O que é obrigatório em 2026
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento oficial que comprova que o estabelecimento atende a todas as exigências de segurança contra incêndio e pânico do Estado de São Paulo, conforme o Decreto Estadual nº 69.118/2024.
              </p>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 italic shadow-sm mb-6">
                <p className="text-red-900 font-bold">Postos de combustível não se enquadram no CLCB — pelo nível de risco e pelas características específicas da atividade, o <strong>AVCB com Projeto Técnico Completo</strong> é obrigatório para todos os estabelecimentos desse tipo.</p>
              </div>
              <p className="text-slate-600">
                A ausência do AVCB sujeita o estabelecimento a interdição imediata, multas progressivas e responsabilidade civil e criminal do proprietário em caso de sinistro. Em 2026, a ANP passou a cruzar dados com o CBPMESP, tornando a regularização ainda mais urgente.
              </p>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tight italic border-b border-white/10 pb-4">Obrigatoriedade (Grupo M)</h3>
              <ul className="space-y-4">
                {[
                  "Postos de gasolina e etanol",
                  "Postos com GNV (Gás Natural Veicular)",
                  "Postos com loja de conveniência",
                  "Postos com troca de óleo e serviços",
                  "Postos com lavagem de veículos",
                  "Distribuidoras e revendedoras"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center font-bold">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 ERROS ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight italic">
              Os 3 Erros que mais <span className="text-primary not-italic underline decoration-primary decoration-8 underline-offset-8">Reprovam Postos</span> na Vistoria
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Aterramento e Proteção Elétrica Isenta", desc: "Instalações elétricas ATEX e luminárias certificadas (ABNT NBR 17505) são o maior gargalo.", badge: "Reprovação Imediata" },
              { num: "02", title: "Tanques sem Laudo de Estanqueidade", desc: "Vazamentos subterrâneos são risco ambiental e de explosão grave. Laudo vencido é trava no AVCB.", badge: "Padrão ABNT NBR 13786" },
              { num: "03", title: "Extintores Incorretos na Pista", desc: "Exige CO2 ou PQS BC estratégicos. Água ou PQS ABC genéricos não atendem a área de bombas.", badge: "Exigência IT-21" },
            ].map((e, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-primary/20">{e.num}</div>
                <h4 className="text-xl font-black uppercase mb-6 leading-tight italic">{e.title}</h4>
                <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">{e.desc}</p>
                <div className="bg-red-50 p-4 rounded-xl text-[10px] uppercase font-black tracking-widest text-primary italic">{e.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Posto sem AVCB? Fale agora com um engenheiro e receba o diagnóstico gratuito.
          </p>
          <CtaWhatsApp label="Solicitar diagnóstico técnico gratuito pelo WhatsApp" occupationType="posto de combustível" variant="primary" centered />
        </div>
      </div>

      {/* ── SISTEMAS OBRIGATÓRIOS ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic border-l-8 border-primary pl-8">
              Sistemas de Segurança <span className="text-primary not-italic">Obrigatórios em Postos</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Aterramento", desc: "Equipotencialização em toda área de abastecimento.", icon: ZapIcon },
              { title: "Elétrica ATEX", desc: "Luminárias e equipamentos blindados na pista.", icon: Thermometer },
              { title: "Estanqueidade", desc: "Laudo técnico atualizado dos tanques subterrâneos.", icon: Droplet },
              { title: "Extintores CO2/BC", desc: "Proteção específica para líquidos inflamáveis.", icon: Flame },
              { title: "Detecção de Gás", desc: "Alarme específico para vapores na pista e loja.", icon: AlertTriangle },
              { title: "Sistema de Hidrantes", desc: "Rede hidráulica com bomba e reservatório.", icon: LayoutPanelTop },
              { title: "SPDA (Para-raios)", desc: "Dimensionado conforme IT-19 e NBR 5419.", icon: ZapIcon },
              { title: "Brigada Técnica", desc: "Treinamento especializado para frentistas.", icon: HardHat }
            ].map((sys, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-primary/20 transition-all flex flex-col justify-between">
                <sys.icon className="w-8 h-8 text-primary mb-6" />
                <div>
                  <h4 className="font-black uppercase mb-2 tracking-tight italic">{sys.title}</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{sys.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GNV E CONVENIÊNCIA ── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">Posto com GNV tem exigências adicionais?</h3>
              <p className="text-slate-600 font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                Sim. Postos que operam com Gás Natural Veicular têm exigências adicionais para compressão e dispensação — incluindo válvulas de segurança, detecção de gás e distâncias específicas conforme ANP e ABNT.
              </p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">Loja de Conveniência e Cozinha</h3>
              <p className="text-slate-600 font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                A presença de restaurante ou lanchonete integrada exige enquadramento simultâneo. Cozinhas com fritadeiras precisam de sistema de supressão na coifa e extintor Classe K.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO EDITORIAL RICO ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic mb-10">
            Tudo que você precisa saber sobre <span className="text-primary">AVCB para Posto de Combustível</span> em São Paulo
          </h2>

          <div className="prose prose-lg prose-slate max-w-none space-y-8 font-medium">
            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic mb-4">Por que postos de combustível são Grupo M — Especiais?</h3>
              <p className="text-slate-600 leading-relaxed">
                O Corpo de Bombeiros do Estado de São Paulo (CBPMESP) classifica postos de combustível no <strong>Grupo M — Ocupações Especiais</strong>, a categoria de maior nível de risco da IT-02. O motivo é direto: armazenamento subterrâneo de combustíveis líquidos inflamáveis (gasolina, etanol, diesel) combinado com vapores que se acumulam na pista cria um potencial explosivo que não existe em nenhuma outra ocupação comercial urbana.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Diferentemente de um restaurante ou escritório — que podem, dependendo do porte, se enquadrar no CLCB simplificado — <strong>todo posto de combustível em São Paulo precisa de AVCB com Projeto Técnico Completo (PPCI)</strong>, sem exceção. Isso significa plantas baixas, memoriais descritivos, ART do engenheiro responsável e aprovação presencial do CBPMESP.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic mb-4">Quais normas técnicas se aplicam ao AVCB de posto de combustível em SP?</h3>
              <p className="text-slate-600 leading-relaxed">
                O processo de obtenção do AVCB para posto de combustível em São Paulo envolve um conjunto específico de normas:
              </p>
              <ul className="mt-4 space-y-3 text-slate-600">
                {[
                  { norm: "IT-02 / Decreto 69.118/2024", desc: "Classifica o posto como Grupo M e define os sistemas obrigatórios." },
                  { norm: "ABNT NBR 17505", desc: "Regula armazenamento de líquidos inflamáveis e instalações elétricas ATEX na pista." },
                  { norm: "ABNT NBR 13786", desc: "Define o laudo de estanqueidade obrigatório para tanques subterrâneos." },
                  { norm: "IT-21 / NBR 12693", desc: "Determina os tipos corretos de extintores — CO2 e PQS BC — para a área de bombas." },
                  { norm: "IT-19 / NBR 5419", desc: "Regula o SPDA (para-raios) obrigatório em postos pela presença de vapores inflamáveis." },
                  { norm: "Resolução ANP nº 41/2013", desc: "Licenciamento da ANP, que passou a cruzar dados com o CBPMESP em 2026." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>{item.norm}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic mb-4">Quanto custa e quanto tempo leva o AVCB de um posto em São Paulo?</h3>
              <p className="text-slate-600 leading-relaxed">
                O custo do AVCB para posto de combustível em São Paulo varia conforme o porte do estabelecimento, a quantidade de sistemas a adequar e o estágio de regularidade das instalações existentes. Postos que já possuem laudo de estanqueidade atualizado, aterramento ATEX e documentação do SPDA em dia têm processos mais rápidos e econômicos.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Em média, <strong>o processo leva de 90 a 180 dias</strong> a partir do protocolo no CBPMESP. Postos que precisam adequar instalações elétricas ou refazer o laudo de estanqueidade devem prever prazo adicional para as obras. A DRD2 Engenharia realiza o diagnóstico técnico gratuito antes de qualquer investimento, mapeando todas as pendências e estimando custo e prazo reais.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic mb-4">O que muda em 2026 para postos sem AVCB em São Paulo?</h3>
              <p className="text-slate-600 leading-relaxed">
                Em 2026, o Decreto Estadual nº 69.118/2024 entrou em plena vigência com fiscalização intensificada. A ANP passou a cruzar dados com o CBPMESP para verificar a regularidade dos postos antes de renovar a autorização de funcionamento. Isso significa que <strong>postos sem AVCB válido em 2026 correm risco duplo</strong>: interdição pelo Corpo de Bombeiros <em>e</em> cassação da licença pela ANP.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Além disso, seguradoras passaram a exigir o AVCB vigente como condição para cobertura de sinistros relacionados a incêndio e explosão. Operar sem esse documento é assumir uma exposição financeira e criminal que nenhum empresário do setor pode se dar ao luxo de ignorar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase italic tracking-tighter">O Processo DRD2 para <span className="text-primary italic">Postos de Combustível</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { id: "01", t: "Diagnóstico técnico gratuito", d: "Visitamos o posto, verificamos aterramento, tanques e instalações elétricas." },
              { id: "02", t: "Projeto Técnico (PPCI)", d: "Memoriais e plantas contemplando área de pista, tanques e conveniência." },
              { id: "03", t: "Protocolo e Acompanhamento", d: "Gestão completa junto ao Corpo de Bombeiros até a aprovação." },
              { id: "04", t: "Vistoria e Emissão", d: "Preparamos o posto para aprovação imediata sem retrabalho." }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:bg-primary transition-all text-left">
                <div className="text-primary font-black text-xs mb-4 group-hover:text-white">{step.id}</div>
                <h4 className="font-black italic uppercase mb-4 leading-tight">{step.t}</h4>
                <p className="text-sm text-gray-400 group-hover:text-white leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-primary italic">AVCB para Postos</span>
          </h2>
          <div className="space-y-4">
            {srv.faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 cursor-pointer open:bg-white open:ring-4 open:ring-primary/10 transition-all">
                <summary className="flex items-center justify-between font-black text-slate-900 text-xl select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-8 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-8 italic text-lg">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Serviços Relacionados</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Laudo de Estanqueidade de Gás", href: "/laudo-estanqueidade-gas-sao-paulo" },
              { label: "SPDA (Para-raios)", href: "/spda" },
              { label: "AVCB em São Paulo", href: "/avcb" },
              { label: "Renovação de AVCB", href: "/renovacao-avcb" },
              { label: "Projetos de Incêndio", href: "/projetos-incendio" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 bg-slate-50 hover:bg-primary hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-primary transition-all text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                {link.label}
              </Link>
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
    
      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Posto Combustivel São Paulo</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Posto Combustivel São Paulo precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Posto Combustivel São Paulo. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      <LeadForm />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Não Arrisque a <span className="text-slate-950 not-italic">Interdição do seu Posto</span>
          </h2>
          <p className="text-xl md:text-3xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10 italic leading-relaxed">
            Posto sem AVCB é risco de interdição, multa e tragédia. Regularizamos com precisão normativa perante a IT-02 e Decreto 69.118/2024.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-2xl font-black px-12 py-8 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-8 h-8" /> Agendar Diagnóstico técnico gratuito
          </a>
          <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">Regularizamos postos em toda a Grande São Paulo</p>
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Posto Combustivel"
        currentSlug="/avcb-posto-combustivel-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Posto Combustivel"
        currentSlug="/avcb-posto-combustivel-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-galpao-industrial-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Postos de Combustível em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-posto-combustivel-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-posto-combustivel-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={`/${srv.slug}`} />
    </main>
  );
}
