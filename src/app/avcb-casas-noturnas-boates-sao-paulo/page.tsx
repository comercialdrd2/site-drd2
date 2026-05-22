import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building, FileCheck, ShieldAlert, ArrowRight,
  Scale, AlertTriangle, MapPin, ClipboardCheck, Users, ShieldCheck,
  Flame, FileText, Siren, Mic, Eye, MoveRight, Droplets, DoorClosed,
  Music, LayoutGrid, Coffee,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

export const metadata = {
  title: servicesData["avcb-casas-noturnas-boates-sao-paulo"].metaTitle,
  description: servicesData["avcb-casas-noturnas-boates-sao-paulo"].metaDescription,
  alternates: {
    canonical: "/avcb-casas-noturnas-boates-sao-paulo",
  },
};

export default function AVCBBoateMasterPage() {
  const service = servicesData["avcb-casas-noturnas-boates-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-casas-noturnas-boates-sao-paulo",
        title: metadata.title,
        description: metadata.description,
        serviceName: "AVCB para Boates SP",
        faqs: service.faqs.map(f => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Boate em SP", item: "/avcb-casas-noturnas-boates-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/hero-boate-v2.jpg"
          alt="Boate em São Paulo com público e iluminação — regularização AVCB pelo Corpo de Bombeiros"
          fill
          className="object-cover object-center opacity-45 grayscale-[10%]"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Grupo F-6 — Locais de Reunião Noturna — Regularização 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                BOATES E CASAS NOTURNAS EM SP
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-3 leading-relaxed font-medium max-w-2xl">
              Sua boate, bar ou casa noturna opera com lotação máxima nos fins de semana? O Corpo de Bombeiros realiza <strong className="text-red-400">operações surpresa</strong> aos sábados e domingos — e uma <strong className="text-red-400">interdição</strong> com público presente fecha tudo na hora, sem negociação.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed font-medium max-w-2xl">
              Desde a tragédia da Boate Kiss em 2013, o CBPMESP aplica o Grupo F-6 com rigor absoluto. A DRD2 Engenharia atua <strong className="text-white">do projeto à instalação</strong>, com resposta a Comunique-se incluída sem custo adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={whatsappLink}
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> Falar com engenheiro especialista Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "AVCB por Ocupação", href: "/servicos" },
          { label: "AVCB para Boate e Casa Noturna em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── INTRODUÇÃO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                O maior rigor técnico{" "}
                <span className="text-red-600 not-italic">do Corpo de Bombeiros</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Boates, bares com pista e casas noturnas são os estabelecimentos com maior nível de exigência do CBPMESP. Lotação máxima, iluminação reduzida, som de alta potência que mascara alarmes e revestimentos acústicos inflamáveis formam uma combinação de risco que o Bombeiro trata com rigor absoluto.
                </p>
                <p>
                  Após a tragédia da Boate Kiss em 2013, o CBPMESP aplica o padrão <strong className="text-slate-900">IT-02 Grupo F-6</strong> sem exceção. Saídas insuficientes ou materiais sem certificação não são apenas erros técnicos — são causas diretas de interdição imediata e responsabilidade civil do proprietário.
                </p>
                <p className="text-slate-900 font-bold border-l-4 border-red-600 pl-6 italic">
                  A DRD2 Engenharia domina cada exigência normativa dessa ocupação — do projeto técnico à instalação física dos sistemas, com acompanhamento até a emissão do AVCB.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-red-50 p-8 rounded-[2.5rem] border border-red-100 shadow-xl">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-5 italic text-center">
                Nível de Risco F-6:
              </h4>
              <ul className="space-y-6">
                {[
                  { t: "Acústica", d: "Revestimentos com certificação IT-10 obrigatória." },
                  { t: "Evacuação", d: "Saídas IT-11 dimensionadas para lotação máxima." },
                  { t: "Alarme Visual", d: "Strobes obrigatórios em ambientes com som alto." },
                ].map((item, i) => (
                  <li key={i} className="text-center">
                    <span className="block text-slate-900 font-black text-sm uppercase tracking-tight">{item.t}</span>
                    <span className="block text-slate-500 text-xs font-bold leading-relaxed italic">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUEM PRECISA ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Estão Obrigados ao{" "}
              <span className="text-red-600 not-italic">AVCB Grupo F-6:</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Conforme a IT-02 do CBPMESP e o Decreto Estadual nº 69.118/2024.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Boates e Nightclubs", i: <Music className="w-5 h-5" /> },
              { t: "Bares com Área de Pista", i: <Coffee className="w-5 h-5" /> },
              { t: "Casas de Show e Eventos", i: <Mic className="w-5 h-5" /> },
              { t: "Pubs com Música ao Vivo", i: <Eye className="w-5 h-5" /> },
              { t: "Baladas e Festas Periódicas", i: <Siren className="w-5 h-5" /> },
              { t: "Complexos de Entretenimento", i: <LayoutGrid className="w-5 h-5" /> },
            ].map((loc, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-4 group hover:bg-red-600/20 transition-all border-l-4 border-l-transparent hover:border-l-red-600"
              >
                <span className="text-red-600 group-hover:scale-125 transition-transform">{loc.i}</span>
                <span className="font-bold text-xs uppercase tracking-tight leading-tight">{loc.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 ERROS FATAIS ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic">
            3 Erros Fatais que{" "}
            <span className="text-red-600 not-italic font-black italic">Interditam Boates</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                t: "Saídas de Emergência",
                d: "Portas que abrem para dentro ou rotas bloqueadas por caixas de som. É a causa número 1 de fatalidades em casas noturnas — e reprovação automática.",
                i: <DoorClosed className="w-8 h-8" />,
              },
              {
                t: "Espuma Acústica Inflamável",
                d: "Revestimento acústico sem certificação IT-10 propaga fogo e fumaça tóxica instantaneamente. Bares e boates com espuma não certificada são interditados na hora.",
                i: <Flame className="w-8 h-8" />,
              },
              {
                t: "Alarme Sem Strobes",
                d: "Alarme sonoro em ambiente com som alto não funciona. O Bombeiro exige sinalização visual por strobes em toda a área de público — obrigatório para AVCB.",
                i: <Siren className="w-8 h-8" />,
              },
            ].map((error, i) => (
              <div
                key={i}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all group hover:bg-white text-center"
              >
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform flex justify-center">{error.i}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight underline decoration-red-600 decoration-4 underline-offset-8">
                  {error.t}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{error.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SISTEMAS OBRIGATÓRIOS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
              Sistemas{" "}
              <span className="text-red-600 not-italic">Obrigatórios em Boates e Bares</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs italic">
              Ocupação de Reunião de Público — Grupo F-6
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Alarme com Strobes", i: <Siren /> },
              { t: "Saídas de Pânico", i: <MoveRight /> },
              { t: "Acústica Certificada IT-10", i: <Mic /> },
              { t: "Sinalização Fotoluminescente", i: <Eye /> },
              { t: "Sistema de Hidrantes", i: <Building /> },
              { t: "Controle de Lotação", i: <Users /> },
              { t: "Chuveiros Sprinklers", i: <Droplets /> },
              { t: "Brigada Treinada", i: <ShieldCheck /> },
            ].map((sys, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-slate-900 transition-all text-center"
              >
                <div className="text-red-600 group-hover:text-white transition-colors">{sys.i}</div>
                <span className="font-black text-slate-900 group-hover:text-white text-xs uppercase tracking-tight italic">
                  {sys.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 1 ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua boate tem todos esses sistemas aprovados pelo CBPMESP?
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista Agora — sem compromisso"
            occupationType="boate ou casa noturna"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── OPERAÇÕES SURPRESA ── */}
      <section className="py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AlertTriangle className="w-16 h-16 mb-6 text-white/70" />
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none">
                Operações Surpresa <br />
                <span className="text-slate-950">nos Fins de Semana</span>
              </h2>
              <p className="text-lg font-medium mb-6 leading-relaxed">
                O Corpo de Bombeiros realiza vistorias surpresa em boates e bares aos sábados e domingos — inclusive com o público presente dentro do estabelecimento.
              </p>
              <ul className="space-y-3">
                {[
                  "Interdição imediata sem aviso prévio",
                  "Prejuízo financeiro e dano à reputação",
                  "Responsabilidade civil do proprietário",
                  "Impossibilidade de reabrir sem adequação",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base font-black italic uppercase tracking-tight">
                    <CheckCircle2 className="w-5 h-5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950 p-10 rounded-[2.5rem] shadow-inner text-center">
              <p className="text-xl font-black italic mb-6">
                Não espere a operação chegar. A DRD2 regulariza sua casa antes do próximo fim de semana.
              </p>
              <a
                href={whatsappLink}
                className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366]"
              >
                Regularizar com Prioridade
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── METODOLOGIA DRD2 ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">
                Como a DRD2 Regulariza sua{" "}
                <span className="text-red-600">Boate ou Bar?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Diagnóstico Técnico Gratuito", d: "Auditoria preventiva de todos os materiais acústicos, saídas e sistemas existentes." },
                  { t: "Projeto PPCI Grupo F-6", d: "Projeto técnico detalhado para grandes lotações, com ART assinada por engenheiro habilitado." },
                  { t: "Instalação dos Sistemas", d: "A DRD2 executa a instalação das saídas de pânico, hidrantes e acústica certificada." },
                  { t: "Protocolo e Resposta a Comunique-se", d: "Acompanhamos a análise no CBPMESP e respondemos exigências sem cobrar adicional." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-10 h-10 bg-slate-950 text-red-600 rounded-full flex items-center justify-center font-black group-hover:bg-red-600 group-hover:text-white transition-all shrink-0 italic text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 uppercase italic tracking-tight text-sm">{step.t}</h5>
                      <p className="text-sm text-slate-500 font-bold leading-relaxed italic">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-[4rem] border border-blue-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl" />
              <h3 className="text-2xl font-black mb-8 italic uppercase tracking-tighter">Regiões Atendidas:</h3>
              <div className="grid grid-cols-2 gap-3 text-[10px] font-black uppercase tracking-widest text-slate-600 italic">
                {["São Paulo Capital", "Guarulhos", "Osasco", "Santo André", "São Bernardo", "Barueri", "São Caetano", "Grande SP"].map(city => (
                  <span key={city} className="p-2 bg-slate-50 rounded-xl border border-blue-100">{city}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-12 bg-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar sua casa noturna antes da próxima operação surpresa?
          </p>
          <CtaWhatsApp
            label="Quero regularizar minha boate em SP"
            occupationType="boate ou casa noturna"
            variant="secondary"
            centered
          />
        </div>
      </div>

      {/* ── RESPONSÁVEL TÉCNICO ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-16 text-white shadow-2xl flex flex-col md:flex-row items-center gap-12 border-8 border-slate-50">
            <div className="shrink-0 relative">
              <Image
                src="/images/eng-samuel-oficial.webp"
                alt="Eng. Samuel Costa — Especialista em AVCB para Boates e Casas Noturnas em São Paulo"
                width={180}
                height={180}
                className="rounded-[3rem] border-4 border-slate-800 shadow-2xl object-cover object-top aspect-square"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 p-3 rounded-2xl shadow-xl">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter leading-none text-white">
                Engenheiro <span className="text-red-500 not-italic">Samuel Costa</span>
              </h3>
              <p className="text-red-500 font-bold text-[10px] uppercase tracking-widest leading-none mb-6">
                Especialista em Segurança de Grandes Públicos — DRD2 Engenharia
              </p>
              <p className="font-bold text-slate-400 uppercase tracking-widest text-xs leading-relaxed mb-8 italic">
                "Regularizar o AVCB de uma boate é, acima de tudo, garantir que cada cliente volte para casa em segurança. Nossa equipe audita cada saída de emergência e cada metro de revestimento acústico para garantir conformidade plena antes de qualquer vistoria."
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest">
                  CREA-SP 5070163570
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nossa boate em tempo récord. No mês seguinte à aprovação passamos por uma operação surpresa do Bombeiro e não tivemos nenhuma pendência. Valeu cada centavo investido.",
          author: "Ricardo Alvares",
          role: "Proprietário — Club Noir, Vila Olímpia",
        }}
      />

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes:{" "}
              <span className="text-red-600 font-black italic">AVCB para Boate em SP</span>
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
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
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
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
              Links internos recomendados para regularização técnica em São Paulo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "AVCB para Restaurante", u: "/avcb-restaurante-sao-paulo", i: <Coffee className="w-4 h-4" /> },
              { t: "AVCB para Bar e Restaurante", u: "/avcb-restaurante-sao-paulo", i: <Music className="w-4 h-4" /> },
              { t: "Quanto Custa o AVCB?", u: "/avcb-preco", i: <Scale className="w-4 h-4" /> },
              { t: "Renovação de AVCB", u: "/renovacao-avcb", i: <ClipboardCheck className="w-4 h-4" /> },
              { t: "CLCB em São Paulo", u: "/clcb-sao-paulo", i: <FileCheck className="w-4 h-4" /> },
              { t: "Sistemas de Hidrantes", u: "/hidrantes", i: <Droplets className="w-4 h-4" /> },
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
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PRÉ-SILO ── */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Boate sem AVCB está sujeita a interdição a qualquer momento.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            O Bombeiro não agenda — aparece no sábado à noite quando a casa está cheia.
          </p>
          <CtaWhatsApp
            label="Falar com a DRD2 e resolver hoje"
            occupationType="boate ou casa noturna"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Boates e Casas Noturnas</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Casas Noturnas Boates"
        currentSlug="/avcb-casas-noturnas-boates-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Casas Noturnas Boates"
        currentSlug="/avcb-casas-noturnas-boates-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-bar-restaurante-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Casas Noturnas e Boates em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-casas-noturnas-boates-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-casas-noturnas-boates-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-casas-noturnas-boates-sao-paulo" />

      {/* ── LEAD FORM ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-2">Diagnóstico <span className="text-primary">Gratuito</span></h2>
          <p className="text-slate-500 font-medium mb-6">Preencha e um engenheiro entra em contato em até 24h.</p>
          <LeadForm variant="compact" />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden text-white border-t-8 border-red-600 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            A Noite de São Paulo{" "}
            <span className="text-red-600 not-italic font-black italic underline decoration-white">
              não pode parar.
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque a interdição da sua pista. Proteja seu patrimônio, sua equipe e seus clientes com segurança jurídica total.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366] inline-block"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico técnico gratuito
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-600 opacity-80">
            Especialista em Boates, Bares e Casas Noturnas | Grande São Paulo
          </p>
        </div>
      </section>
    </>
  );
}
