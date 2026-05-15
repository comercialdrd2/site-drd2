const fs = require('fs');
const path = require('path');

const pageContent = `import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building, FileCheck, ShieldAlert,
  ArrowRight, Scale, AlertTriangle, MapPin, ClipboardCheck,
  Users, ShieldCheck, Flame, FileText, Coffee, Fuel, LayoutGrid,
  Pill, TestTube, Cross, HeartPulse
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import LeadForm from "@/components/LeadForm";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "AVCB para Farmácias e Drogarias em São Paulo | DRD2 Engenharia",
  description: "AVCB para farmácias e drogarias em São Paulo. Regularização CBPMESP, alvará e CMVS para farmácia de manipulação. Diagnóstico gratuito. Fale agora.",
  alternates: {
    canonical: "/avcb-farmacia-drogaria-sao-paulo",
  },
};

export default function AVCBFarmaciaMasterPage() {
  const service = servicesData["avcb-farmacia-drogaria-sao-paulo"];
  const whatsappLink = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}\`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: "/avcb-farmacia-drogaria-sao-paulo",
        title: metadata.title,
        description: metadata.description,
        serviceName: "AVCB para Farmácias e Drogarias SP",
        faqs: service.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Farmácias em SP", item: "/avcb-farmacia-drogaria-sao-paulo" },
        ],
      })} />
      <JsonLD schema={faqSchema} />

      <WhatsAppFloatingButton />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/avcb-para-farmacias-e-drogarias-sao-paulo.webp"
          alt="Interior de farmácia com sistemas de segurança contra incêndio"
          fill
          className="object-cover object-center opacity-45 grayscale-[10%]"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              GRUPO C-2 — DROGARIAS E FARMÁCIAS — REGULARIZAÇÃO 2026
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col drop-shadow-2xl">
              AVCB para Farmácias e Drogarias<br/>em São Paulo
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-3 leading-relaxed font-medium max-w-2xl">
              Farmácias e drogarias operam com produtos inflamáveis e recebem grande fluxo de público. Sem o AVCB em dia, você não consegue renovar o CMVS drogaria São Paulo e fica sujeito a multas, embargo e interdição imediata do seu estabelecimento.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed font-medium max-w-2xl">
              A DRD2 Engenharia faz a regularização CBPMESP farmácia de ponta a ponta: do projeto técnico até a instalação de extintores e sinalizações. Garantimos aprovação com resposta a Comunique-se incluída, sem taxas ocultas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> Falar com Engenheiro Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "AVCB por Ocupação", href: "/servicos" },
          { label: "AVCB para Farmácia em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── ENQUADRAMENTO / QUEM PRECISA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                Enquadramento técnico e{" "}
                <span className="text-red-600 not-italic">quem precisa</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Qualquer estabelecimento comercial do setor farmacêutico, seja uma drogaria de bairro ou uma grande rede, precisa do AVCB ou CLCB para obter o alvará bombeiros farmácia SP.
                </p>
                <p>
                  O processo para <strong className="text-slate-900">AVCB farmácia de manipulação São Paulo</strong> costuma ser mais rigoroso devido à presença de laboratórios e estoque de produtos químicos. Nessas situações, as exigências de compartimentação, ventilação e tipos específicos de extintores são analisadas com lupa pelo fiscal do Bombeiro.
                </p>
                <p>
                  A maioria das farmácias comuns se enquadra como <strong className="text-slate-900">Grupo C-2 (Comércio Varejista)</strong>. Dependendo da área construída (abaixo de 750m²) e da carga de incêndio, o processo pode ser simplificado através do CLCB.
                </p>
                <p className="text-slate-900 font-bold border-l-4 border-red-600 pl-6 italic">
                  O risco real não está no tamanho da sua farmácia, mas sim no cruzamento de dados com a Prefeitura e a VISA. O documento vencido trava toda a operação comercial.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-red-50 p-8 rounded-[2.5rem] border border-red-100 shadow-xl">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-5 italic text-center">
                Tipos de Estabelecimento:
              </h4>
              <ul className="space-y-6">
                {[
                  { t: "Drogarias Comuns", d: "Enquadramento C-2, foco em extintores e saídas." },
                  { t: "Farmácias de Manipulação", d: "Risco ampliado por laboratórios e estoques." },
                  { t: "Redes e Franquias", d: "Padrão de segurança exigido pela franqueadora." },
                ].map((item, i) => (
                  <li key={i} className="text-center">
                    <span className="block text-slate-900 font-black text-sm uppercase tracking-tight">
                      {item.t}
                    </span>
                    <span className="block text-slate-500 text-xs font-bold leading-relaxed italic">
                      {item.d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FISCALIZAÇÃO CRUZADA (VISA) ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-red-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none">
                  Alerta 2026: <br />
                  <span className="text-slate-950">VISA + Bombeiros</span>
                </h2>
                <p className="text-lg mb-6 font-medium">
                  Desde 2026, a Vigilância Sanitária exige o número do AVCB ativo para a emissão ou renovação do CMVS drogaria São Paulo. Sem AVCB, sua drogaria fica impossibilitada de operar legalmente e de renovar contratos com convênios.
                </p>
                <p className="text-lg mb-8 font-medium">
                  A fiscalização sanitária bloqueia imediatamente licenças de estabelecimentos sem o protocolo do Corpo de Bombeiros, aplicando multas e podendo chegar ao lacre do ponto comercial.
                </p>
                <ul className="space-y-3">
                  {[
                    "Renovação do CMVS travada",
                    "Aviso de interdição pela VISA",
                    "Perda de contratos com planos de saúde",
                    "Risco de lacre do estabelecimento",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-base font-black italic uppercase tracking-tight"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-950 p-10 rounded-[2.5rem] shadow-inner text-center">
                <p className="text-xl font-black italic mb-6">
                  Nossa equipe regulariza seu processo no Bombeiro e libera o comprovante para a VISA em tempo recorde.
                </p>
                <a
                  href={whatsappLink}
                  className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366]"
                >
                  Desbloquear Meu CMVS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 1 ── */}
      <div className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-900 text-lg font-black uppercase italic tracking-tight mb-6">
            Não deixe o AVCB da sua drogaria vencer. Fale com nossos engenheiros hoje.
          </p>
          <CtaWhatsApp
            label="Solicitar Orçamento Gratuito"
            occupationType="farmácia ou drogaria"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── 4 RISCOS ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic">
            Riscos que geram{" "}
            <span className="text-red-600 not-italic font-black italic">Embargo na Fiscalização</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                t: "Extintores Inadequados",
                d: "Uso do extintor errado para químicos. Em caso de sinistro, usar o agente extintor inadequado pode agravar o incêndio.",
                i: <ShieldAlert className="w-8 h-8" />,
              },
              {
                t: "Estoque Amontoado",
                d: "Caixas obstruindo o acesso aos equipamentos de proteção ou saídas de emergência gera multa gravíssima na hora.",
                i: <MapPin className="w-8 h-8" />,
              },
              {
                t: "Sinalização Falha",
                d: "Placas fotoluminescentes vencidas, mal posicionadas ou fora da norma da IT-20. Muito comum em lojas antigas.",
                i: <AlertTriangle className="w-8 h-8" />,
              },
              {
                t: "AVCB Vencido",
                d: "O sistema da prefeitura trava a emissão do Alvará e a Vigilância Sanitária bloqueia o CMVS.",
                i: <ClipboardCheck className="w-8 h-8" />,
              },
            ].map((risk, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all group hover:bg-white text-center"
              >
                <div className="text-red-600 mb-5 group-hover:scale-110 transition-transform flex justify-center">
                  {risk.i}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-3 uppercase italic tracking-tight underline decoration-red-600 decoration-4 underline-offset-8">
                  {risk.t}
                </h3>
                <p className="text-slate-600 font-medium text-xs leading-relaxed">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua farmácia de manipulação possui todas as adequações necessárias?
          </p>
          <CtaWhatsApp
            label="Consultar um Engenheiro Especialista"
            occupationType="farmácia de manipulação"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "Estávamos com o CMVS travado por causa do AVCB. A DRD2 assumiu o projeto da nossa farmácia de manipulação e em 30 dias tínhamos o certificado do Bombeiro aprovado. Serviço excelente e sem burocracia para o dono do negócio.",
          author: "Roberto Almeida",
          role: "Farmacêutico Responsável, São Paulo",
        }}
      />

      {/* ── O QUE A DRD2 ENTREGA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">
                Como a DRD2 atua no{" "}
                <span className="text-red-600">AVCB da sua Farmácia</span>
              </h2>
              <p className="text-slate-500 font-bold text-sm italic">
                Cuidamos da regularização CBPMESP farmácia de ponta a ponta. Você foca nos seus clientes, nós garantimos o seu Alvará.
              </p>
              <div className="space-y-6">
                {[
                  {
                    t: "Vistoria Técnica",
                    d: "Avaliamos layout, estoques e rotas de fuga. Identificamos as adequações necessárias antes do protocolo.",
                  },
                  {
                    t: "Projeto (PPCI + ART)",
                    d: "Elaboramos as plantas e memoriais técnicos para farmácias que exigem AVCB.",
                  },
                  {
                    t: "Adequação Prática",
                    d: "Fornecemos e instalamos placas, luzes de emergência e extintores adequados.",
                  },
                  {
                    t: "Protocolo e Aprovação",
                    d: "Acompanhamos do protocolo até a emissão do certificado, resolvendo Comunique-se sem taxas extras.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-10 h-10 bg-slate-950 text-red-600 rounded-full flex items-center justify-center font-black group-hover:bg-red-600 group-hover:text-white transition-all shrink-0 italic text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 uppercase italic tracking-tight text-sm">
                        {step.t}
                      </h5>
                      <p className="text-sm text-slate-500 font-bold leading-relaxed italic">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-[4rem] border border-blue-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl" />
              <h3 className="text-2xl font-black mb-2 italic uppercase tracking-tighter">Prazo de Validade</h3>
              <p className="text-red-600 font-black text-xs uppercase tracking-widest mb-8 italic">
                Farmácias e Drogarias
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-red-600 font-black text-2xl italic">1-3</span>
                </div>
                <div>
                  <span className="block font-black text-slate-900 uppercase italic tracking-tight">
                    Anos de validade
                  </span>
                  <span className="block text-slate-500 text-xs font-bold italic leading-relaxed">
                    Varia conforme carga de incêndio e exigências técnicas locais.
                  </span>
                </div>
              </div>
              <h4 className="font-black text-slate-900 uppercase italic tracking-tight text-sm mb-4">
                Regiões de Atuação:
              </h4>
              <div className="grid grid-cols-2 gap-3 text-[10px] font-black uppercase tracking-widest text-slate-600 italic">
                {["São Paulo Capital", "Guarulhos", "Osasco", "ABC Paulista", "Barueri", "Grande SP"].map(
                  (city) => (
                    <span key={city} className="p-2 bg-slate-50 rounded-xl border border-blue-100">
                      {city}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes:{" "}
              <span className="text-red-600 font-black italic">AVCB para Farmácias</span>
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all"
              >
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
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
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
              Acessos Rápidos por{" "}
              <span className="text-red-600 italic">Especialidade</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "AVCB para Restaurante", u: "/avcb-restaurante-sao-paulo", i: <Coffee className="w-4 h-4" /> },
              { t: "AVCB para Supermercado", u: "/avcb-supermercado-sao-paulo", i: <Building className="w-4 h-4" /> },
              { t: "AVCB para Padaria", u: "/avcb-para-padaria-sao-paulo", i: <Building className="w-4 h-4" /> },
              { t: "Quanto Custa o AVCB?", u: "/avcb-preco", i: <Scale className="w-4 h-4" /> },
              { t: "Renovação de AVCB", u: "/renovacao-avcb", i: <ClipboardCheck className="w-4 h-4" /> },
              { t: "CLCB em São Paulo", u: "/clcb-sao-paulo", i: <FileCheck className="w-4 h-4" /> },
              { t: "Projetos de Incêndio", u: "/projetos-incendio", i: <LayoutGrid className="w-4 h-4" /> },
              { t: "Empresa de AVCB SP", u: "/empresa-avcb-sao-paulo", i: <Building className="w-4 h-4" /> },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.u}
                className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center justify-between group hover:border-red-600 hover:bg-red-50 transition-all font-black text-[10px] uppercase italic"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-600 group-hover:scale-110 transition-transform">{link.i}</span>
                  <span>{link.t}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
      <NeighborhoodSilo currentSlug="/avcb-farmacia-drogaria-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden text-white border-t-8 border-red-600 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Opere sua farmácia com{" "}
            <span className="text-red-600 not-italic font-black italic underline decoration-white">
              Segurança Técnica.
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque o embargo da Vigilância Sanitária ou a paralisação do seu negócio. Regularize o AVCB e renove o CMVS hoje mesmo.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366] inline-block"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico Gratuito
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-600 opacity-80">
            Especialista em Regularização Comercial | Grande São Paulo
          </p>
        </div>
      </section>
    </>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src/app/avcb-farmacia-drogaria-sao-paulo/page.tsx'), pageContent, 'utf8');
console.log('Rewrite Farmacia Done');
