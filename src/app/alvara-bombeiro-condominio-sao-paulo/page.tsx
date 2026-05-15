import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone, CheckCircle2, ShieldAlert, Clock, FileText, ShieldCheck, ArrowRight, Droplets, Zap
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

// SEO TÉCNICO E MAXIMIZAÇÃO DE CTR B2B (Focado em Síndicos e Administradoras)
export const metadata: Metadata = {
  title: "Alvará do Bombeiro para Condomínio em SP | Renovação AVCB | DRD2",
  description: "Regularização e Renovação de AVCB para Condomínios Residenciais e Comerciais em São Paulo. Adequação de Hidrantes, GLP (Gás) e Brigada (IT-17). Diagnóstico 100% Gratuito.",
  alternates: { canonical: "/alvara-bombeiro-condominio-sao-paulo" },
  openGraph: {
    title: "Alvará do Bombeiro para Condomínio em SP | Renovação AVCB | DRD2",
    description: "Regularização e Renovação de AVCB para Condomínios Residenciais e Comerciais em São Paulo.",
    url: "https://drd2engenharia.com.br/alvara-bombeiro-condominio-sao-paulo",
    type: "website",
    locale: "pt_BR",
  },
};

export default function AlvaraBombeiroCondominioPage() {
  const whatsappLink = "https://wa.me/" + process.env.NEXT_PUBLIC_WHATSAPP;

  const schema = generateMasterSchema({
    slug: "/alvara-bombeiro-condominio-sao-paulo",
    title: "Alvará do Bombeiro para Condomínio em SP",
    description: "Serviço de emissão e renovação de Alvará do Bombeiro (AVCB) para Condomínios em São Paulo.",
    serviceName: "Alvará do Corpo de Bombeiros para Condomínios",
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Alvará Bombeiro Condomínio SP", item: "/alvara-bombeiro-condominio-sao-paulo" },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[40px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/bg-condominios.jpg"
          alt="Alvará do Bombeiro para Condomínio"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/30" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg">
              GRUPOS A-2 E A-3 — CONDOMÍNIOS RESIDENCIAIS — AVCB 2026
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[1.0] tracking-tighter uppercase italic text-white">
              Alvará do Bombeiro<br />
              <span className="text-red-500 not-italic">para Condomínios em SP</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-5">
              O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento mais cobrado por seguradoras e pela fiscalização municipal. Operar um condomínio com o AVCB vencido transfere a <strong>responsabilidade civil e criminal diretamente para o CPF do Síndico</strong> em caso de sinistro.
            </p>
            <p className="text-base text-gray-400 mb-8 max-w-2xl font-medium">
              A DRD2 Engenharia assume 100% da burocracia do seu condomínio. Auditamos centrais de GLP, hidrantes e emitimos todas as ARTs necessárias para aprovação rápida no sistema Via Fácil.
            </p>

            <a href={whatsappLink} className="cta-whatsapp inline-flex items-center gap-3 transition-opacity">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="font-black uppercase tracking-tight">Diagnóstico técnico gratuito Agora</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Alvará do Bombeiro para Condomínios" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── SEÇÃO 1: ENQUADRAMENTO + FORM ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter mb-8 italic">
                O Risco Legal para Síndicos e <span className="text-red-600 not-italic">Administradoras</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  De acordo com o <strong>Decreto Estadual 69.118/2024</strong> e o Código Civil (Art. 1.348), o síndico é o responsável legal pela manutenção da segurança da edificação. Quando o AVCB está vencido, o condomínio entra em situação de irregularidade severa.
                </p>
                <p>
                  O maior risco financeiro para os moradores ocorre em relação às apólices de seguro condominial. <strong>Em caso de princípio de incêndio, vazamento de gás ou sinistro nas áreas comuns, a seguradora anulará sumariamente o pagamento da indenização</strong> caso seja comprovado que os laudos obrigatórios e o AVCB não estavam vigentes na data do ocorrido.
                </p>
                <p>
                  Para condomínios comerciais (lajes corporativas) ou mistos, a falta de AVCB master impede que as empresas locatárias tirem os seus próprios Alvarás de Funcionamento, gerando vacância e processos judiciais contra o condomínio.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl sticky top-32">
                <h3 className="text-xl font-black text-slate-900 mb-2 italic uppercase">Diagnóstico técnico gratuito — Resposta em 2h</h3>
                <p className="text-slate-500 text-sm mb-3 font-medium">Engenheiro especialista em AVCB responde em até 2h.</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-black text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded-full">✓ 98% aprovação na 1ª análise</span>
                  <span className="text-xs font-black text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">✓ Comunique-se sem custo extra</span>
                  <span className="text-xs font-black text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">✓ Sem compromisso</span>
                </div>
                {/* 6. PRE-FILLING E REDUÇÃO DE FRICÇÃO */}
                <LeadForm variant="compact" predefinedPropertyType="Condomínio Residencial" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: EXIGÊNCIAS DO CB (Autoridade e Carga Semântica) ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic leading-none"
            >
              Por que Condomínios Reprovam<br />na Vistoria do <span className="text-red-600 not-italic">Corpo de Bombeiros?</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
              A ausência de manutenção corretiva nas áreas comuns gera emissão de <i>"Comunique-se"</i>. Veja os laudos críticos exigidos:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-red-500/40 transition-all group">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-base mb-2 italic uppercase tracking-tight leading-tight">Central de Gás e Teste de Estanqueidade</p>
                  <p className="text-slate-400 font-medium leading-relaxed text-sm">O Corpo de Bombeiros exige o teste de estanqueidade (IT-28) de toda a tubulação de GLP ou Gás Natural, emitindo a ART que comprova a ausência de vazamentos e a validade das mangueiras.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-red-500/40 transition-all group">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-base mb-2 italic uppercase tracking-tight leading-tight">Bomba de Recalque e Hidrantes (IT-22)</p>
                  <p className="text-slate-400 font-medium leading-relaxed text-sm">As mangueiras de incêndio devem estar aduchadas, nos abrigos corretos, e a bomba de recalque deve pressurizar a rede automaticamente ao acionamento manual ou do alarme.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-red-500/40 transition-all group">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-base mb-2 italic uppercase tracking-tight leading-tight">Laudo de Para-raios SPDA (NBR 5419)</p>
                  <p className="text-slate-400 font-medium leading-relaxed text-sm">É exigida a medição ôhmica anual das malhas de aterramento para proteger o condomínio contra descargas atmosféricas. Anexamos a ART elétrica junto ao processo.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-red-500/40 transition-all group">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-base mb-2 italic uppercase tracking-tight leading-tight">Portas Corta-Fogo e Brigada</p>
                  <p className="text-slate-400 font-medium leading-relaxed text-sm">Portas cortadas com calços reprovam na hora. Além disso, uma porcentagem dos moradores ou funcionários precisa ter o treinamento documentado de Brigada de Incêndio (IT-17).</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA MEIO ── */}
      <div className="py-14 bg-red-900 border-y border-red-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Condomínio sem AVCB válido? Síndico, você responde por isso.
          </p>
          <p className="text-red-200 text-sm font-bold mb-6">
            A DRD2 Engenharia regulariza com 98% de aprovação na 1ª análise.
          </p>
          <CtaWhatsApp
            label="Solicitar vistoria diagnóstica gratuita"
            occupationType="condomínio"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── SEÇÃO 3: INSTRUÇÕES TÉCNICAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter italic text-center"
          >
            Documentação Resolvida Pela <span className="text-red-600">Nossa Engenharia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ART de Formação de Brigada", desc: "Fornecemos atestado válido assinado por engenheiro." },
              { title: "ART do Sistema de Gás", desc: "Laudo de estanqueidade para toda a prumada." },
              { title: "ART de SPDA (Para-raios)", desc: "Medição de aterramento conforme ABNT." },
              { title: "ART de Grupo Gerador", desc: "Laudo técnico garantindo o isolamento da casa de máquinas." },
              { title: "Laudo de Abrangência", desc: "Projeto das Bombas de Recalque e Alarme Visual/Sonoro." },
              { title: "Defesa de Comunique-se", desc: "Recurso protocolado caso o bombeiro exija ajustes." }
            ].map((doc, i) => (
              <div key={i} className="bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:shadow-lg hover:border-red-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-sm mb-1 italic uppercase tracking-tight leading-tight">{doc.title}</p>
                    <p className="text-slate-600 font-medium leading-relaxed text-xs">{doc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS CRUZADOS ── */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-slate-400 mb-8">Complemente a Segurança do Prédio</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/alarme-de-incendio-para-condominio-sao-paulo", label: "Sistemas de Alarme e Detecção" },
              { href: "/sistema-de-hidrantes-para-condominio-sao-paulo", label: "Rede de Hidrantes de Parede" },
              { href: "/sistema-de-sprinkler-para-condominio-sao-paulo", label: "Bicos de Sprinkler" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-2 bg-slate-50 hover:bg-red-600 hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-red-600 transition-all text-sm">
                <ArrowRight className="w-4 h-4" /> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6: RENOVAÇÃO / VALIDADE ── */}
      <section className="py-20 bg-red-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-10 h-10 text-red-400 flex-shrink-0" />
            <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Prazos e Validade do AVCB para Prédios</h2>
          </div>
          <div className="space-y-5">
            <p className="text-red-100 text-lg leading-relaxed font-medium">Condomínios puramente Residenciais possuem prazo de validade do AVCB estendido (normalmente de 3 a 5 anos, a critério do Oficial Vistoriador e complexidade do imóvel).</p>
            <p className="text-red-100 text-lg leading-relaxed font-medium">Condomínios Mistos (Torres com lojas no térreo) e Edifícios Comerciais costumam ter validade reduzida de 1 a 3 anos devido à maior carga de incêndio e fluxo flutuante de ocupantes no térreo.</p>
            <p className="text-red-100 text-lg leading-relaxed font-medium">Inicie a renovação com 60 dias de antecedência para permitir o trâmite da emissão de laudos dos engenheiros e evitar que o condomínio fique descoberto pelo seguro patrimonial.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7: TABELA DE INSTRUÇÕES TÉCNICAS ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">
            Instrucoes Técnicas que mais impactam condomínios
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              O processo de alvará do Bombeiro para condomínios costuma envolver IT-11 para saidas de emergência,
              IT-16 para extintores, IT-17 para hidrantes, IT-18 para iluminação, IT-20 para sinalização,
              IT-28 para gas e IT-41 para inspeção elétrica.
            </p>
            <p>
              Em edificios com garagens, salao de festas, academia, casa de maquinas e áreas técnicas, a aprovação
              depende de coerencia entre planta, área real, laudos com ART e funcionamento fisico dos sistemas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-red-600">Alvará do Bombeiro para Condomínios</span>
          </h2>
          <div className="space-y-4">
            {[
              { question: "Um apartamento pode ser penalizado se o condomínio não tiver AVCB?", answer: "Sim. A falta de AVCB Master impacta todo o conjunto arquitetônico. Moradores encontram problemas na hora de vender o apartamento via financiamento bancário (Caixa Econômica), que exige atestado do imóvel." },
              { question: "Quem deve assinar as ARTs exigidas para o AVCB do condomínio?", answer: "Exclusivamente Engenheiros (Civis ou Mecânicos, dependendo da disciplina) registrados no CREA-SP. O Síndico não deve aceitar laudos de técnicos sem registro no conselho." },
              { question: "A DRD2 acompanha a visita do Bombeiro?", answer: "Sim, a DRD2 agenda o melhor horário para o síndico ou zelador acompanhar a vistoria, e um representante nosso garante que as dúvidas táticas do vistoriador sejam esclarecidas no ato, sem gerar um 'Comunique-se'." }
            ].map((item, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 cursor-pointer open:ring-2 open:ring-red-600/20 transition-all open:bg-white">
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight list-none">
                  {item.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-5 pt-5 border-t border-slate-200 text-slate-600 font-medium leading-relaxed text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center text-white border-t-8 border-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/20" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none">
            Regularize o Alvará<br />
            <span className="text-red-500 not-italic">do Bombeiro Agora</span>
          </h2>
          <p className="text-slate-300 text-xl font-medium mb-10 leading-relaxed">
            Diagnóstico técnico gratuito presencial. Resposta a Comunique-se sem custo adicional. 98% de aprovação na 1ª análise.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366] inline-flex items-center gap-3">
            <Phone className="w-7 h-7" /> Falar com engenheiro especialista Agora
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-500 opacity-60">
            DRD2 Engenharia — Alvará do Bombeiro para Condomínios em São Paulo
          </p>
        </div>
      </section>


      <OccupationAuthorityBlock
        occupation="Condominio"
        currentSlug="/alvara-bombeiro-condominio-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Condominio"
        currentSlug="/alvara-bombeiro-condominio-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/avcb-para-condominio-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="Regularizamos Condomínios em Atendimento em São Paulo"
      />

      <ServiceClusterLinks currentSlug="/alvara-bombeiro-condominio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/alvara-bombeiro-condominio-sao-paulo" />

      <NeighborhoodSilo currentSlug="/alvara-bombeiro-condominio-sao-paulo" />
    </>
  );
}
