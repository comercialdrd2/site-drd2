import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { CheckCircle, FileText, ShieldCheck, Settings, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Manutenção de Sistemas de Incêndio em SP 2026 | DRD2 Engenharia — ART Inclusa";
const _pageDesc = "A DRD2 Engenharia oferece manutenção preventiva e corretiva de sistemas de incêndio em São Paulo: alarmes, hidrantes, sprinklers e SPDA. ARTs e laudos para renovação do AVCB.";

export const metadata = {
  title: "Manutenção de Sistemas de Incêndio em SP 2026 | DRD2 Engenharia — ART Inclusa",
  description: "A DRD2 Engenharia oferece manutenção preventiva e corretiva de sistemas de incêndio em São Paulo: alarmes, hidrantes, sprinklers e SPDA. ARTs e laudos para renovação do AVCB.",
  alternates: {
    canonical: "/manutencao",
  },
};

const faqs = [
  {
    q: "Por que a manutenção de sistemas de incêndio é obrigatória?",
    a: "A legislação exige que todos os sistemas (extintores, hidrantes, alarmes, etc.) estejam em perfeito estado de funcionamento 24h por dia. Sem manutenção comprovada por ART, o AVCB não é renovado e o seguro pode ser invalidado.",
  },
  {
    q: "Qual a frequência ideal das manutenções?",
    a: "Geralmente as inspeções são mensais ou trimestrais, dependendo da complexidade dos sistemas e da carga de incêndio. O teste hidrostático de mangueiras e a medição de SPDA são anuais.",
  },
  {
    q: "A DRD2 faz manutenção corretiva em sistemas antigos?",
    a: "Sim. Realizamos o saneamento de sistemas que apresentam falhas, vazamentos ou central de alarme em pane, deixando tudo em conformidade com as normas atuais do Corpo de Bombeiros.",
  },
  {
    q: "Vocês emitem ART de manutenção?",
    a: "Sim. Todo contrato ou serviço de manutenção da DRD2 é acompanhado pela respectiva Anotação de Responsabilidade Técnica (ART), assinada por nossos engenheiros habilitados.",
  },
  {
    q: "O que acontece se eu não fizer a manutenção preventiva?",
    a: "Além do risco de falha em um incêndio real, a edificação fica sujeita a multas pesadas da fiscalização, interdição e reprovação imediata na vistoria para o AVCB.",
  },
];

export default function ManutencaoPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/manutencao",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Manutenção de Sistemas de Incêndio em São Paulo",
        faqs: faqs.map(f => ({ question: f.q, answer: f.a })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Manutenção de Sistemas", item: "/manutencao" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-manutencao.jpg"
          alt="Manutenção de Sistemas de Incêndio em São Paulo — DRD2 Engenharia"
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
              Continuidade e Segurança — São Paulo 2026
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                MANUTENÇÃO DE SISTEMAS DE INCÊNDIO
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                EM SÃO PAULO — LAUDOS E ARTs PARA O AVCB
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Gestão técnica completa de alarmes, hidrantes, sprinklers e SPDA em São Paulo. Laudos e ARTs de manutenção para garantir a validade do seu AVCB.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-5 h-5 flex-shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              <span>SOLICITAR ORÇAMENTO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Manutenção de Sistemas" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── POR QUE MANTER ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-primary pl-6 uppercase italic tracking-tight">
            Por que a manutenção preventiva recorrente é indispensável?
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              Instalar os sistemas de incêndio é apenas o primeiro passo. Sem a <strong>manutenção preventiva</strong>, equipamentos como centrais de alarme e bombas de incêndio podem falhar justamente quando mais se precisa deles.
            </p>
            <p>
              Na DRD2 Engenharia, nossa gestão de manutenção foca em antecipar problemas: identificamos oxidações, testamos baterias, verificamos a pressão das redes e garantimos que 100% dos bicos de sprinkler estejam operacionais.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-primary text-red-900 font-medium italic">
              Com contrato de manutenção DRD2, no momento da renovação do <strong>AVCB</strong>, o vistoriador do Corpo de Bombeiros encontrará uma edificação impecável — pronta para aprovação imediata.
            </div>
          </div>
        </div>
      </section>

      {/* ── ESCOPO ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            O que está incluso na nossa Gestão Técnica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings, title: "Alarmes e Detecção", desc: "Testes mensais em centrais, detectores de fumaça e sirenes para evitar alarmes falsos e garantir prontidão." },
              { icon: FileText, title: "Laudos e ARTs", desc: "Emissão de toda a documentação técnica assinada por engenheiro exigida para renovação de licenças do AVCB." },
              { icon: AlertTriangle, title: "Bombas e Hidrantes", desc: "Teste de vazão, pressão e funcionamento automático de conjuntos motobombas e rede de hidrantes." },
              { icon: ShieldCheck, title: "Mangueiras e SPDA", desc: "Gestão do calendário anual de teste hidrostático de mangueiras e laudo de para-raios com medição ôhmica." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como funciona nossa <span className="text-primary not-italic">Gestão de Manutenção</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Vistoria de Diagnóstico", d: "Varredura técnica inicial em todos os seus sistemas para identificar não conformidades críticas e pontos de correção imediata." },
              { id: "02", t: "Plano Periódico", d: "Estabelecemos um cronograma (mensal ou trimestral) de testes em alarmes, bombas, hidrantes e iluminação de emergência." },
              { id: "03", t: "Execução Corretiva", d: "Saneamos vazamentos, trocamos manômetros, revisamos painéis de comando e garantimos a integridade de cada componente." },
              { id: "04", t: "Retesto e Medições Anuais", d: "Gerenciamos o calendário obrigatório de teste hidrostático em mangueiras e a medição ôhmica do SPDA (Para-raios)." },
              { id: "05", t: "Laudo e ART", d: "Emitimos atestados de conformidade e as ARTs mensais/anuais que dão suporte jurídico e técnico para renovação do AVCB." },
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
            Por que contratar a DRD2 para a manutenção?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Gestão Periódica Completa", desc: "Cronograma mensal ou trimestral cobrindo todos os sistemas: alarme, hidrantes, sprinklers, extintores e SPDA." },
              { title: "ART de Manutenção", desc: "Toda intervenção gera Anotação de Responsabilidade Técnica, documentação exigida para renovação do AVCB." },
              { title: "Manutenção Corretiva", desc: "Saneamos sistemas antigos com falhas, garantindo conformidade total com as normas do Corpo de Bombeiros." },
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
            Perguntas Frequentes — <span className="text-primary italic">Manutenção Predial SP</span>
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
            Seu prédio está <span className="text-slate-950 not-italic">realmente protegido?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10 italic leading-relaxed">
            Nossa gestão técnica garante que seu patrimônio nunca fique vulnerável, com ARTs e laudos para renovação do AVCB.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg> Solicitar Plano de Manutenção
          </a>
          <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">Atendemos toda a Grande São Paulo e Interior</p>
        </div>
      </section>


      <ServiceClusterLinks currentSlug="/manutencao" />
      <ServiceBlogLinks currentSlug="/manutencao" />

      <NeighborhoodSilo currentSlug="/manutencao" />
    </>
  );
}
