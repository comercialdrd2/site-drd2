import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Bell,
  Building2,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  Gauge,
  Phone,
  ShieldCheck,
  Siren,
  Wrench,
  Zap,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";

const slug = "/manutencao-alarme-de-incendio-sao-paulo";

const pageTitle =
  "Manutenção de Alarme de Incêndio em São Paulo | Preventiva e Corretiva";
const pageDesc =
  "Manutenção preventiva e corretiva de alarme de incêndio em São Paulo. Teste de central, detectores, sirenes, botoeiras, laudo técnico, ART e checklist NBR 17240 para AVCB.";

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  alternates: {
    canonical: slug,
  },
};

const faqs = [
  {
    q: "Qual a periodicidade da manutenção de alarme de incêndio?",
    a: "A periodicidade deve seguir o projeto, o risco da ocupação e o plano de manutenção da edificação. Na pratica, sistemas prediais devem ter inspecoes recorrentes, testes funcionais programados e registro técnico para renovacao do AVCB. A DRD2 monta o cronograma conforme NBR 17240, exigencias do Corpo de Bombeiros e criticidade do imóvel.",
  },
  {
    q: "O que entra no checklist de manutenção de alarme de incêndio NBR 17240?",
    a: "O checklist inclui central, fonte, baterias, laços ou zonas, detectores de fumaca e calor, botoeiras manuais, sirenes, avisadores audiovisuais, supervisao de falhas, identificacao de pontos, cabeamento, autonomia e teste de acionamento. Tambem avaliamos se a distribuicao dos dispositivos esta coerente com o uso real da edificação.",
  },
  {
    q: "Manutenção corretiva de sistema de alarme resolve AVCB reprovado?",
    a: "Sim, quando a reprova decorre de falhas do sistema de detecção e alarme. A manutenção corretiva corrige central em pane, sirenes inoperantes, detectores sem comunicacao, botoeiras quebradas, baterias vencidas e falhas de cabeamento. Depois da correcao, emitimos documentação técnica aplicavel ao processo.",
  },
  {
    q: "Quanto custa manutenção de alarme de incêndio predial?",
    a: "O valor depende da quantidade de pontos, tipo de central, numero de pavimentos, estado do cabeamento, necessidade de troca de detectores e urgencia do atendimento. Prédios com manutenção preventiva em dia tendem a ter custo menor do que sistemas abandonados ou com falhas generalizadas.",
  },
  {
    q: "A empresa emite laudo e ART para manutenção de alarme?",
    a: "Sim. A DRD2 Engenharia emite laudo técnico e ART quando aplicavel, com registro das verificacoes realizadas, falhas encontradas, medidas corretivas e condicao operacional do sistema. Isso ajuda na renovacao do AVCB e na comprovação de diligencia técnica do responsavel pelo imóvel.",
  },
];

const checklist = [
  "Teste da central de alarme, fonte e baterias",
  "Verificacao de detectores de fumaca e calor",
  "Teste de sirenes, avisadores e botoeiras manuais",
  "Análise de zonas, lacos, enderecamento e supervisao de falhas",
  "Conferencia de cabeamento, identificacao e autonomia",
  "Registro técnico, laudo, recomendacoes e ART quando aplicavel",
];

const tableRows = [
  {
    tipo: "Condomínios residenciais",
    falhas: "Baterias vencidas, sirenes desligadas, detectores sujos, botoeiras quebradas e central sem registro de manutenção.",
    acao: "Teste por pavimento, limpeza técnica, substituicao de pontos criticos e laudo para renovacao do AVCB.",
  },
  {
    tipo: "Galpões e indústrias",
    falhas: "Poeira, calor, vibracao, alteracao de layout, cabeamento exposto e detectores mal posicionados para a carga de incêndio.",
    acao: "Revisao por zonas, teste de acionamento, compatibilizacao com hidrantes e sprinklers e plano corretivo.",
  },
  {
    tipo: "Escolas, clínicas e escritorios",
    falhas: "Sinal sonoro insuficiente, falha em rotas de fuga, botoeiras inacessiveis e ausencia de procedimento de abandono.",
    acao: "Teste audivel, revisao de pontos, orientação de brigada e integracao com o plano de emergência.",
  },
  {
    tipo: "Restaurantes e comércios",
    falhas: "Gordura, umidade, reformas sem atualizacao do sistema e central escondida ou sem facil acesso.",
    acao: "Inspeção de área técnica, coifas, cozinha, salao, estoque e rota de saida antes da vistoria.",
  },
];

export default function ManutencaoAlarmeIncendioPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const schema = generateMasterSchema({
    slug,
    title: pageTitle,
    description: pageDesc,
    serviceName: "Manutenção preventiva e corretiva de alarme de incêndio em São Paulo",
    faqs: faqs.map((faq) => ({ question: faq.q, answer: faq.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Servicos", item: "/servicos" },
      { name: "Manutenção", item: "/manutencao" },
      { name: "Manutenção de Alarme de Incêndio", item: slug },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[90px] pb-[28px] lg:pt-[105px] lg:pb-[42px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-alarme.webp"
          alt="Manutenção de alarme de incêndio em São Paulo"
          fill
          className="object-cover object-center opacity-30 grayscale-[20%]"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg shadow-red-900/20">
              <Bell className="w-4 h-4" /> NBR 17240 - AVCB - São Paulo
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[0.95] tracking-tighter uppercase italic text-white">
              Manutenção preventiva e corretiva de alarme de incêndio em São Paulo
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-7 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Teste de central, detectores de fumaca e calor, sirenes, botoeiras, cabeamento, autonomia e laudo tecnico com ART para manter o sistema aceito no AVCB/CLCB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Solicitar vistoria técnica
              </a>
              <Link
                href="/alarme-incendio-sao-paulo"
                className="bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto border border-white/20"
              >
                Ver projeto de alarme
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Servicos", href: "/servicos" },
          { label: "Manutenção", href: "/manutencao" },
          { label: "Manutenção de Alarme de Incêndio" },
        ]}
        dark
      />
      <TrustBar dark />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-red-600 pl-6 uppercase italic tracking-tight leading-none">
                O que e a manutenção do sistema de alarme de incêndio?
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  A manutenção de alarme de incêndio e o conjunto de testes, ajustes, limpezas, substituicoes e registros técnicos que comprovam que o sistema de detecção e alarme esta pronto para funcionar em uma emergência real. O objetivo não e apenas fazer a sirene tocar; e garantir que a central receba o sinal correto, identifique a falha ou o ponto acionado, alimente os dispositivos em falta de energia e alerte a edificação com tempo suficiente para abandono seguro.
                </p>
                <p>
                  Em São Paulo, esse cuidado tem impacto direto no AVCB e no CLCB. O Corpo de Bombeiros pode exigir comprovacao de funcionamento, laudo técnico, ART e evidencias de que detectores, botoeiras, sirenes e central estao operacionais. Quando o sistema falha na vistoria, o processo recebe exigencia e o imóvel continua irregular ate a correcao.
                </p>
                <p>
                  A DRD2 Engenharia atende condomínios, indústrias, galpões, escolas, clínicas, escritorios, restaurantes e comércios com manutenção preventiva e corretiva. O trabalho considera NBR 17240, projeto aprovado, ocupação real, rotas de fuga e integracao com outros sistemas, como <Link href="/hidrantes" className="text-red-700 font-black underline">hidrantes</Link>, <Link href="/sprinklers" className="text-red-700 font-black underline">sprinklers</Link> e plano de abandono.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-4 italic leading-tight">
                  Diagnóstico de falhas no alarme
                </h3>
                <p className="text-sm text-slate-600 font-medium mb-6">
                  Envie dados do imóvel e um especialista avalia o melhor caminho: manutenção preventiva, corretiva, laudo para AVCB ou substituicao de sistema.
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
              Manutenção preventiva conforme NBR 17240
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto mt-4">
              A preventiva reduz panes, evita alarmes falsos, identifica dispositivos inoperantes e cria historico técnico para renovacao do AVCB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist.map((item, index) => (
              <div key={item} className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center font-black mb-5">
                  {index + 1}
                </div>
                <p className="font-black text-slate-900 uppercase tracking-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-7 uppercase italic tracking-tight">
                Manutenção corretiva de sistemas de alarme
              </h2>
              <div className="space-y-5 text-slate-700 text-lg leading-relaxed font-medium">
                <p>
                  A corretiva entra quando o sistema ja apresenta falha: central apitando, bateria ruim, zona em curto, detector sem resposta, sirene que não toca, botoeira quebrada ou cabeamento comprometido. Nesses casos, a prioridade e restabelecer a funcao de emergência e registrar tecnicamente o que foi corrigido.
                </p>
                <p>
                  Em sistemas convencionais, a falha costuma aparecer por zona. Em sistemas enderecaveis, o diagnóstico pode apontar o ponto exato, mas exige técnico qualificado para interpretar eventos, lacos, isoladores e comunicacao entre dispositivos. A DRD2 separa o que e manutenção simples, o que exige troca de componente e o que indica necessidade de revisao de projeto.
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-6 uppercase italic">Falhas que mais reprovam</h3>
              <div className="space-y-4">
                {[
                  ["Central de alarme em pane", "Sem supervisao confiavel, o sistema não comprova prontidao."],
                  ["Detectores sujos ou desativados", "Poeira, pintura e reforma reduzem sensibilidade e comunicacao."],
                  ["Sirenes sem alcance audivel", "O aviso precisa chegar a rotas de fuga, áreas comuns e pavimentos."],
                  ["Bateria sem autonomia", "Na falta de energia, o alarme deve continuar operacional."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4 border-b border-white/10 pb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black uppercase">{title}</h4>
                      <p className="text-slate-300 text-sm mt-1">{desc}</p>
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
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-12 uppercase italic tracking-tighter">
            Quando realizar inspeção do sistema?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { icon: Clock, title: "Antes do AVCB vencer", desc: "Evita correria, exigencias e custo emergencial." },
              { icon: Wrench, title: "Apos reforma", desc: "Mudancas de layout podem deixar detectores e sirenes mal posicionados." },
              { icon: Gauge, title: "Apos falha ou alarme falso", desc: "Alarme falso recorrente indica sensor, central ou instalação em problema." },
              { icon: ShieldCheck, title: "Como rotina preventiva", desc: "Mantem historico técnico e reduz risco de parada total do sistema." },
            ].map((item) => (
              <article key={item.title} className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm">
                <item.icon className="w-10 h-10 text-red-600 mb-5" />
                <h3 className="text-lg font-black text-slate-950 uppercase mb-3">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-7 border-b border-slate-200">
              <h2 className="text-3xl font-black text-slate-950 uppercase italic">
                Exigencias por tipo de edificação
              </h2>
              <p className="text-slate-600 font-medium mt-3">
                A manutenção deve ser proporcional ao risco e ao uso. A tabela orienta os cenarios mais comuns em São Paulo.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="p-4 font-black uppercase">Imóvel</th>
                    <th className="p-4 font-black uppercase">Falhas comuns</th>
                    <th className="p-4 font-black uppercase">Acao técnica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {tableRows.map((row) => (
                    <tr key={row.tipo}>
                      <td className="p-4 font-bold text-slate-900">{row.tipo}</td>
                      <td className="p-4 text-slate-700">{row.falhas}</td>
                      <td className="p-4 text-slate-700">{row.acao}</td>
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
                Exigencias do Corpo de Bombeiros para AVCB/CLCB
              </h2>
              <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-medium">
                <p>
                  O Corpo de Bombeiros não avalia apenas se existe uma central instalada. A vistoria observa se o sistema esta coerente com o projeto, se os acionadores estao acessiveis, se o aviso sonoro e visual funciona, se ha falhas indicadas na central e se a documentação técnica comprova manutenção.
                </p>
                <p>
                  Em renovacao de AVCB, a falta de manutenção do alarme pode travar o processo mesmo quando extintores, hidrantes e sinalização estao corretos. Por isso, a manutenção do sistema de detecção e alarme deve ser tratada como parte do plano de regularização, junto com <Link href="/manutencao" className="text-red-400 font-black underline">manutenção de sistemas de incêndio</Link> e documentação de engenharia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Bell, title: "Detectores", desc: "Fumaca, calor, poeira, limpeza e resposta ao teste." },
                { icon: Siren, title: "Sirenes", desc: "Acionamento, alcance audivel e avisadores visuais." },
                { icon: Bell, title: "Central", desc: "Eventos, falhas, bateria, fonte e comunicacao." },
                { icon: FileText, title: "Laudo", desc: "Registro técnico, ART e recomendacoes de correcao." },
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
                Atendimento técnico em São Paulo e regiao
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
                Atendemos condomínios, empresas e administradoras em São Paulo capital, Zona Sul, Zona Leste, Zona Oeste, Zona Norte, Centro, ABC, Guarulhos, Osasco, Barueri e demais regioes. O atendimento pode comecar por fotos da central, relatorio de falhas, AVCB vencido ou visita técnica.
              </p>
              <CtaWhatsApp
                label="Falar com especialista em alarme"
                occupationType="manutenção de alarme de incêndio"
                variant="primary"
              />
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-slate-950 mb-5 uppercase italic">
                Links técnicos relacionados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Projeto e instalação de alarme", "/alarme-incendio-sao-paulo"],
                  ["Manutenção de sistemas de incêndio", "/manutencao"],
                  ["Renovacao de AVCB", "/renovacao-avcb"],
                  ["AVCB em São Paulo", "/avcb-sao-paulo"],
                  ["Sistema de hidrantes", "/hidrantes"],
                  ["Sistema de sprinklers", "/sprinklers"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="bg-white border border-slate-200 p-4 rounded-xl font-black text-slate-800 hover:text-red-700 hover:border-red-500 transition-colors"
                  >
                    {label}
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
            Perguntas frequentes sobre manutenção de alarme
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl p-7 border border-slate-200 cursor-pointer open:ring-4 open:ring-red-100 transition-all"
              >
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.q}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">
                    +
                  </span>
                </summary>
                <p className="mt-6 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-6">
                  {faq.a}
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
              Solicite um plano de manutenção do alarme
            </h2>
            <p className="text-slate-600 font-medium">
              Informe o tipo de imóvel, quantidade aproximada de pavimentos e se o AVCB esta vencido.
            </p>
          </div>
          <LeadForm variant="compact" showWrapper={false} />
        </div>
      </section>

      <ServiceClusterLinks currentSlug={slug} />
      <ServiceBlogLinks currentSlug={slug} />
      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={slug} />

      <section className="py-24 bg-red-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Não espere a central falhar na vistoria
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-bold opacity-95 max-w-3xl mx-auto">
            A manutenção correta do alarme reduz risco operacional, ajuda na renovacao do AVCB e protege moradores, clientes, funcionarios e patrimonio.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white text-red-900 text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:bg-slate-950 hover:text-white transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-7 h-7" /> Solicitar manutenção agora
          </a>
        </div>
      </section>
    </>
  );
}
