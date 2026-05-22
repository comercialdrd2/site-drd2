import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Droplets, Activity, Search, ArrowRight, Building, FileText } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import SocialProof from "@/components/SocialProof";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "/sistema-de-sprinkler-para-condominio-sao-paulo";
const _pageTitle = "Sistema de Sprinkler para Condomínio em São Paulo | DRD2 Engenharia — IT 23/25";
const _pageDesc = "A DRD2 Engenharia projeta, instala e mantém sistemas de sprinkler para condomínios em SP conforme IT 23/25 e NBR 10897. Manutenção de VGA, ART e laudo para AVCB. Diagnóstico técnico gratuito!";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Condomínio é obrigado a ter sprinklers em São Paulo?", a: "Depende da altura e da área. Edifícios residenciais acima de 80 metros e edificações de uso misto de alto risco são obrigados pela IT 23/25 do CBPMESP. Condomínios com atividades específicas de risco também podem ser enquadrados. Consulte a DRD2 para verificar seu caso." },
  { q: "Qual a manutenção obrigatória do sistema de sprinkler do condomínio?", a: "A norma exige inspeção trimestral da VGA (Válvula de Governo e Alarme), teste semestral do fluxo do sistema, inspeção anual de todos os bicos e teste hidrostático periódico. A DRD2 oferece contrato de manutenção preventiva que cobre todas essas exigências." },
  { q: "O que é a VGA e por que ela é tão importante?", a: "A VGA (Válvula de Governo e Alarme) é o coração do sistema de sprinklers. Ela é responsável por liberar a água quando os bicos acionam e por acionar o alarme sonoro. Uma VGA com manutenção inadequada pode falhar no momento do incêndio, invalidando toda a proteção do sistema." },
  { q: "Os bicos de sprinkler do condomínio precisam ser trocados?", a: "Sim. Bicos oxidados, pintados, danificados ou que já foram acionados devem ser substituídos imediatamente. Bicos corretamente instalados têm vida útil longa, mas devem ser inspecionados anualmente conforme a ABNT NBR 10897." },
  { q: "O sistema de sprinkler aciona em todos os andares ao mesmo tempo?", a: "Não. Isso é um mito. Cada bico é independente e só aciona quando a temperatura no seu bulbo atinge o ponto de fusão (geralmente 68°C ou 79°C). Em um incêndio controlado, normalmente apenas 1 a 4 bicos acionam, limitando os danos por água." },
  { q: "A DRD2 faz manutenção de sistemas de sprinkler de qualquer fabricante?", a: "Sim. Realizamos manutenção e adequação de sistemas de qualquer fabricante — Tyco, Viking, Victaulic, Rapid, entre outros — garantindo conformidade com a IT 23/25 e NBR 10897 independentemente da marca instalada." },
];

export default function SprinklerCondominioPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Sistema de Sprinkler para Condomínio em São Paulo",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Sprinklers", item: "/sprinklers" },
      { name: "Sprinkler para Condomínio", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image src="/images/bg-condominios.jpg" alt="Fachada e estrutura de condomínio residencial vertical" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">IT 23/25 e NBR 10897 — Condomínios Residenciais e Comerciais</span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60">SISTEMA DE SPRINKLER PARA CONDOMÍNIO</span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">EM SÃO PAULO — PROJETO, INSTALAÇÃO E MANUTENÇÃO</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Garanta o AVCB do seu condomínio com sistema de chuveiros automáticos em conformidade. Manutenção de VGA, substituição de bicos e laudo técnico para renovação.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
              <Phone className="w-5 h-5 flex-shrink-0" /><span>SOLICITAR DIAGNÓSTICO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Sprinklers", href: "/sprinklers" }, { label: "Condomínio" }]} dark />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA 2 COLUNAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Sprinklers no Condomínio: <span className="text-red-600 not-italic font-black italic">a VGA que ninguém mantém</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O <strong>sistema de sprinklers para condomínio</strong> em São Paulo é regulamentado pela <strong>IT 23 do CBPMESP</strong> e pela <strong>ABNT NBR 10897</strong>. Edifícios residenciais acima de 80 metros e edificações de uso misto ou com atividades de risco são obrigados a possuir o sistema como condição para emissão e renovação do AVCB.
                </p>
                <p>
                  Na prática, a grande maioria dos condomínios de São Paulo que possuem sprinklers instalados nunca realizou a manutenção adequada do sistema. A VGA (Válvula de Governo e Alarme) — o componente mais crítico — frequentemente está com a membrana ressecada, o alarme inativo e os manômetros sem calibração. Um sistema assim não funciona em uma emergência real e reprovará na vistoria do Corpo de Bombeiros.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Como funciona a VGA e por que ela falha?</h3>
                <p>
                  A <strong>Válvula de Governo e Alarme (VGA)</strong> é o componente que controla todo o sistema. Quando um ou mais bicos acionam, a pressão da rede cai e a VGA abre o fluxo de água para os bicos ativados, simultaneamente acionando o alarme hidráulico (turbina de alarme) que emite o sinal sonoro. Uma VGA com a câmara de atraso (retarding chamber) entupida, o clapper (disco de vedação) preso ou a turbina de alarme oxidada pode não acionar o alarme — ou pior, não liberar água — no momento do incêndio.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600">
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">Síndico: VGA travada é responsabilidade sua</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">O síndico responde pelo estado dos sistemas de proteção contra incêndio do condomínio. Uma VGA com defeito documentado — e sem registro de manutenção — é prova de negligência em caso de sinistro com vítimas.</p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ AVCB vencido por reprovação no sistema de sprinklers invalida o seguro predial do condomínio.</p>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Bicos de sprinkler: quando devem ser substituídos?</h3>
                <p>
                  Bicos de sprinkler devem ser substituídos imediatamente nas seguintes situações: bicos <strong>pintados</strong> (a tinta obstrui o acionamento do bulbo), bicos <strong>amassados ou com danos físicos</strong> (impacto mecânico compromete a vedação), bicos <strong>oxidados</strong> (corrosão interna pode entupir o orifício de descarga), bicos que <strong>já foram acionados</strong> (não podem ser reutilizados) e bicos com <strong>mais de 50 anos de instalação</strong> (devem ser testados por amostragem conforme NFPA 25). A DRD2 realiza a inspeção visual e a substituição de todos os bicos não conformes com fornecimento de laudo técnico.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden sticky top-24">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">Diagnóstico técnico gratuito para o seu Condomínio</h3>
                <LeadForm variant="compact" showWrapper={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OS 3 ERROS QUE REPROVAM CONDOMÍNIOS ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase italic">
            Os 3 Erros que <span className="text-red-500 not-italic">Reprovam Condomínios</span> na Vistoria SPK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { e: "Erro 1", t: "VGA sem Manutenção", d: "Válvula de Governo e Alarme com clapper preso, câmara de atraso entupida ou turbina de alarme inativa — o sistema parece OK mas não funciona.", c: "bg-slate-900" },
              { e: "Erro 2", t: "Bicos Pintados ou Danificados", d: "Bicos pintados pelo zelador ou empreiteiro de reforma — prática comum que anula o acionamento térmico e resulta em reprovação imediata.", c: "bg-red-900" },
              { e: "Erro 3", t: "Bomba sem Teste Mensal", d: "Bomba dedicada ao sistema de sprinklers sem registro de testes mensais de acionamento automático e manual — violação direta da NBR 10897.", c: "bg-slate-900" },
            ].map((item, i) => (
              <div key={i} className={`${item.c} p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-transform`}>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 block text-red-500">{item.e}</span>
                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight">{item.t}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">O sistema SPK do seu condomínio está pronto para a vistoria?</p>
          <CtaWhatsApp label="Fale com um engenheiro agora — diagnóstico gratuito" occupationType="condomínio" variant="primary" centered />
        </div>
      </div>

      {/* ── SOLUÇÕES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tighter">
            Soluções SPK Completas para <span className="text-red-600 not-italic">Condomínios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Building, t: "Projeto e Instalação", d: "Projeto hidráulico conforme IT 23 e NBR 10897 e instalação de sistema de sprinklers em edifícios novos ou existentes." },
              { icon: Search, t: "Diagnóstico do Sistema", d: "Vistoria técnica completa identificando bicos defeituosos, VGA com problemas e inadequações na bomba de incêndio." },
              { icon: Activity, t: "Manutenção Preventiva", d: "Contrato anual com inspeção trimestral de VGA, teste semestral de fluxo e inspeção anual de todos os bicos." },
              { icon: ShieldCheck, t: "ART e Laudo AVCB", d: "Documentação técnica completa com ART CREA-SP para aprovação e renovação do AVCB do condomínio." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 hover:shadow-xl transition-all group">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform"><item.icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{item.t}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como garantimos o <span className="text-red-500 not-italic">SPK em conformidade</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Diagnóstico Técnico", d: "Vistoria de todos os componentes: bicos, VGA, tubulações, bomba dedicada e reservatório." },
              { id: "02", t: "Laudo de Não Conformidades", d: "Relatório técnico detalhando todas as irregularidades e as ações corretivas necessárias para aprovação." },
              { id: "03", t: "Execução das Adequações", d: "Substituição de bicos, retrofit de VGA, ajuste de bomba e regularização conforme IT 23 e NBR 10897." },
              { id: "04", t: "Teste de Estanqueidade", d: "Teste hidrostático em toda a rede e verificação de acionamento da VGA e alarme sonoro." },
              { id: "05", t: "ART e Documentação", d: "Emissão de ART CREA-SP e laudo técnico completo para aprovação do AVCB." },
              { id: "06", t: "Contrato de Manutenção", d: "Programa preventivo trimestral/semestral/anual para manter o sistema sempre em conformidade." },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:bg-red-600 transition-all text-left">
                <div className="text-red-500 font-black text-xs mb-4 group-hover:text-white">{step.id}</div>
                <h4 className="font-black italic uppercase mb-4 leading-tight">{step.t}</h4>
                <p className="text-sm text-slate-400 group-hover:text-white leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "A DRD2 fez a revisão completa do sistema de sprinklers do nosso edifício. Trocaram os bicos pintados, fizeram a manutenção da VGA e entregaram toda a documentação para renovar o AVCB. Aprovado na primeira vistoria.",
          author: "Cláudio Teixeira",
          role: "Síndico — Edifício Comercial, Itaim Bibi SP",
        }}
      />

      {/* ── DOCUMENTAÇÃO ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação para <span className="text-red-600">Renovação do AVCB com SPK</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">Para renovar o AVCB do condomínio com sistema de sprinklers, o Corpo de Bombeiros exige:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Laudo de manutenção da VGA (Válvula de Governo e Alarme) com ART CREA-SP",
              "Relatório de inspeção de 100% dos bicos de sprinkler com laudo técnico",
              "Relatório de teste semestral de fluxo do sistema com resultado de pressão e vazão",
              "Certidão de manutenção da bomba dedicada ao sistema (acionamento automático e manual)",
              "Projeto original do sistema de sprinklers ou projeto as-built atualizado",
              "Laudo de instalações elétricas do painel de alarme com ART",
              "AVCB anterior e documentação da última vistoria aprovada pelo CBPMESP",
              "CNPJ do condomínio e documentação do síndico para protocolo oficial",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria completa do sistema e da documentação antes do protocolo, garantindo que o condomínio seja aprovado na primeira vistoria sem exigências ou retrabalho.
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic text-center">
              Dúvidas: <span className="text-red-600 not-italic font-black italic uppercase">Sprinkler para Condomínio</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.q}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">Não arrisque a segurança dos seus moradores.</p>
          <p className="text-white text-sm font-bold mb-8">Regularize com quem já aprovou centenas de condomínios em SP.</p>
          <CtaWhatsApp label="Fale agora com a DRD2 e resolva hoje" occupationType="condomínio" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="servico" maxLinks={8} titulo="Sprinkler para Condomínio em SP" />

      <ServiceClusterLinks currentSlug="/sprinklers" />
      <ServiceBlogLinks currentSlug="/sprinklers" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            O sprinkler do seu condomínio <span className="text-black not-italic font-black italic underline decoration-white">funcionaria agora?</span>
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque. Solicite o diagnóstico gratuito da DRD2 e garanta o AVCB do condomínio com sistema SPK em plena conformidade.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Manutenção e Laudo SPK Condomínio
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Especialistas em Condomínios | IT 23/25 — São Paulo 2026</p>
        </div>
      </section>
    </>
  );
}
