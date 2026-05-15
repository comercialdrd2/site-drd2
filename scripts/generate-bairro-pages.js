const fs = require('fs');
const path = require('path');

// Caminhos
const dataFile = path.join(__dirname, '../src/data/bairros-renovacao.ts');
const expansaoFile = path.join(__dirname, '../src/data/expansao-cidades.ts');
const appDir = path.join(__dirname, '../src/app');

// Lê os arquivos TS
const dataContent = fs.readFileSync(dataFile, 'utf-8');
const expansaoContent = fs.existsSync(expansaoFile) ? fs.readFileSync(expansaoFile, 'utf-8') : '';

// Função para extrair os arrays do TS
function extractArray(arrayName, content) {
  try {
    const regex = new RegExp(`export const ${arrayName}: BairroData\\[\\] = (\\[[\\s\\S]*?\\]);`, 'm');
    const match = content.match(regex);
    if (match) {
      const arrayStr = match[1];
      let data;
      eval(`data = ${arrayStr}`);
      return data;
    }
  } catch (error) {
    console.error(`Erro ao extrair ${arrayName}:`, error);
  }
  return [];
}

const bairrosCondominio = extractArray('bairrosCondominio', dataContent);
const bairrosRestaurante = extractArray('bairrosRestaurante', dataContent);
const cidadesExpansao = extractArray('cidadesExpansao', expansaoContent);

function generateCondominioTemplate(bairro) {
  const slug = `/renovacao-avcb-condominio-${bairro.slug}`;
  const pageTitle = `Renovação de AVCB para Condomínio em ${bairro.nome} | DRD2 Engenharia`;
  const pageDesc = `Especialistas em renovação de AVCB para condomínios em ${bairro.nome}. Adequação de prédios antigos, laudos técnicos, ART e aprovação no Corpo de Bombeiros.`;

  return `import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Building2, MapPin, Search, Activity, ClipboardList, Clock } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import HeroSection from "@/components/HeroSection";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import SocialProof from "@/components/SocialProof";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import LeadForm from "@/components/LeadForm";

const _slug = "${slug}";
const _pageTitle = "${pageTitle}";
const _pageDesc = "${pageDesc}";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Qual a validade do AVCB para condomínios residenciais em ${bairro.nome}?", a: "Para condomínios residenciais em São Paulo (incluindo ${bairro.nome}), o AVCB tem validade de até 5 anos. Já para edifícios de uso misto ou comerciais, a validade cai para 3 anos." },
  { q: "${bairro.faq1q}", a: "${bairro.faq1a}" },
  { q: "${bairro.faq2q}", a: "${bairro.faq2a}" },
  { q: "${bairro.faq3q}", a: "${bairro.faq3a}" },
  { q: "${bairro.faq4q}", a: "${bairro.faq4a}" },
  { q: "Quais laudos são obrigatórios para renovar o AVCB do condomínio?", a: "Para a renovação, o síndico precisa apresentar: Laudo de teste hidrostático de mangueiras, laudo de estanqueidade de gás (se houver GN/GLP), laudo do SPDA (para-raios), laudo das instalações elétricas e laudo do grupo gerador (se aplicável), todos acompanhados das respectivas ARTs." },
  { q: "O Corpo de Bombeiros vistoria o condomínio na renovação?", a: "Sim. Em processos de renovação de Projeto Técnico (PT), o CBPMESP agenda uma vistoria presencial. A DRD2 Engenharia acompanha essa vistoria no seu condomínio em ${bairro.nome} para garantir que não haja 'comunique-se' (exigências extras)." },
  { q: "Posso ser multado se o AVCB do meu prédio em ${bairro.nome} estiver vencido?", a: "Sim. O Decreto Estadual 63.911/18 permite que o CBPMESP aplique multas pesadas. Além disso, a ausência de AVCB válido anula a cobertura do seguro predial e transfere a responsabilidade civil e criminal diretamente para o síndico em caso de sinistro." },
  { q: "Quanto tempo demora a renovação do AVCB na região de ${bairro.nome}?", a: "Se o condomínio estiver com a manutenção em dia, o processo leva entre 15 e 30 dias. Se houver necessidade de adequações físicas (como troca de bombas ou adequação de hidrantes), o cronograma dependerá da execução das obras." },
];

export default function RenovacaoCondominioPage() {
  const whatsappLink = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}\`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Renovação de AVCB para Condomínio em ${bairro.nome}",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovações", item: "/renovacao-avcb" },
      { name: "Condomínio em ${bairro.nome}", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <HeroSection 
        occupation="condominio" 
        tag="${bairro.tag}"
        title={<><span className="opacity-80 font-bold tracking-widest block mb-2 text-xl md:text-2xl">RENOVAÇÃO DE AVCB PARA CONDOMÍNIO</span><span className="italic text-red-500 block leading-tight">EM ${bairro.nome.toUpperCase()} — SEGURANÇA E LEGALIDADE</span></>}
        subtitle="Síndico, proteja seu patrimônio e evite a perda da cobertura do seguro. Engenharia especializada em adequação de prédios antigos e modernos em ${bairro.nome}."
        address="${bairro.avenidas}"
        showForm={true}
        formTitle={<>Diagnóstico <span className="text-red-600 not-italic uppercase tracking-tighter font-black">${bairro.nome}</span></>}
      />

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Renovações", href: "/renovacao-avcb" }, { label: "${bairro.nome}" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                A urgência da renovação do AVCB em <span className="text-red-600 not-italic font-black italic">${bairro.nome}</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O bairro de <strong>${bairro.nome}</strong>, localizado na <strong>${bairro.zona}</strong>, possui uma característica singular: uma alta concentração de ${bairro.perfil}. Para o Corpo de Bombeiros (CBPMESP), a idade ou o porte da edificação não isentam o rigor técnico.
                </p>
                <p>
                  ${bairro.intro}
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Síndico: O Risco Criminal do AVCB Vencido</h3>
                <p>
                  A responsabilidade pela manutenção do AVCB recai integralmente sobre o síndico. Em condomínios de ${bairro.nome}, a ausência de um AVCB válido ou a negligência na renovação resulta em três consequências severas: a <strong>nulidade imediata da apólice de seguro predial</strong> em caso de sinistro, a aplicação de <strong>multas estaduais (Decreto 63.911/18)</strong> e a responsabilização civil e criminal direta do gestor caso ocorram danos físicos aos moradores.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600 relative overflow-hidden">
                  <MapPin className="absolute top-4 right-4 w-24 h-24 text-white/5" />
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">O Cenário Imobiliário de ${bairro.nome}</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">
                    ${bairro.box}
                  </p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ A DRD2 realiza o mapeamento "As-Built" completo para regularizar condomínios na região.</p>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">O que a Vistoria Avalia?</h3>
                <p>
                  A renovação não é apenas um trâmite de "entrega de papéis". O engenheiro responsável (e posteriormente o vistoriador do CBPMESP) avaliará as condições reais de operação dos sistemas: pressurização das escadas (crucial em edifícios altos), capacidade e estanqueidade do reservatório (RTI), alarmes de incêndio operantes, luzes de emergência com autonomia, e as condições do SPDA (para-raios).
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Guia de Legislação e Vistoria Local</h3>
                <p className="whitespace-pre-line">
                  ${bairro.guiaLegislacaoLocal}
                </p>
              </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase italic">
            Problemas Comuns que <span className="text-red-500 not-italic">Reprovam Condomínios em ${bairro.nome}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { e: "Problema 1", t: "${bairro.problemas[0]}", d: "${bairro.problemasDesc[0]}", c: "bg-slate-900" },
              { e: "Problema 2", t: "${bairro.problemas[1]}", d: "${bairro.problemasDesc[1]}", c: "bg-red-900" },
              { e: "Problema 3", t: "${bairro.problemas[2]}", d: "${bairro.problemasDesc[2]}", c: "bg-slate-900" },
            ].map((item, i) => (
              <div key={i} className={\`\${item.c} p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-transform\`}>
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
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Seu condomínio se enquadra em algum destes riscos?</p>
          <CtaWhatsApp label="Fale com um engenheiro e agende vistoria" occupationType="condomínio" variant="primary" centered />
        </div>
      </div>

      <LeadForm />
      <InternalLinksBlock currentSlug={_slug} mode="renovacao" maxLinks={8} titulo="Renovação Condomínio em SP" />
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            ${bairro.ctaFinal}
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Evite notificações do Corpo de Bombeiros. Conte com a engenharia que conhece a realidade arquitetônica e os desafios dos edifícios da região.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Falar com Engenheiro Especialista
          </a>
        </div>
      </section>
      
    </>
  );
}
`;
}

function generateRestauranteTemplate(bairro) {
  const slug = `/renovacao-avcb-restaurante-${bairro.slug}`;
  const pageTitle = `Renovação de AVCB para Restaurante em ${bairro.nome} | DRD2 Engenharia`;
  const pageDesc = `Engenharia especializada em renovação de AVCB e CLCB para restaurantes e bares em ${bairro.nome}. Laudo de exaustão, gás e adequação rápida. Orçamento sem compromisso.`;

  return `import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, UtensilsCrossed, MapPin, Search, Activity, ClipboardList, Clock } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import HeroSection from "@/components/HeroSection";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import SocialProof from "@/components/SocialProof";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import LeadForm from "@/components/LeadForm";

const _slug = "${slug}";
const _pageTitle = "${pageTitle}";
const _pageDesc = "${pageDesc}";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Qual a diferença entre AVCB e CLCB para restaurantes em ${bairro.nome}?", a: "Restaurantes pequenos (até 750m² e sem alta lotação) geralmente se enquadram no CLCB (Certificado de Licença), um processo mais rápido. Restaurantes maiores, baladas ou locais com alta carga de incêndio exigem o AVCB completo com projeto técnico." },
  { q: "${bairro.faq1q}", a: "${bairro.faq1a}" },
  { q: "${bairro.faq2q}", a: "${bairro.faq2a}" },
  { q: "${bairro.faq3q}", a: "${bairro.faq3a}" },
  { q: "${bairro.faq4q}", a: "${bairro.faq4a}" },
  { q: "Quais laudos são obrigatórios para aprovar o restaurante?", a: "O Corpo de Bombeiros exige impreterivelmente o laudo de estanqueidade de gás (com ART), laudo das instalações elétricas e, fundamentalmente, o laudo do sistema de exaustão mecânica (coifa) da cozinha comercial." },
  { q: "A Vigilância Sanitária pode fechar o restaurante se o AVCB estiver vencido?", a: "Sim. A ausência de AVCB ou CLCB válido bloqueia a emissão ou renovação da Licença de Funcionamento (Alvará) e da Licença Sanitária (CMVS), sujeitando o restaurante a interdição imediata." },
  { q: "Quanto tempo demora para tirar o CLCB do meu restaurante em ${bairro.nome}?", a: "Se a edificação tiver até 750m² e não houver alterações drásticas de layout, a DRD2 Engenharia consegue emitir a documentação e protocolar no Via Fácil em até 72 horas." },
];

export default function RenovacaoRestaurantePage() {
  const whatsappLink = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}\`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Renovação de AVCB para Restaurante em ${bairro.nome}",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovações", item: "/renovacao-avcb" },
      { name: "Restaurante em ${bairro.nome}", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <HeroSection 
        occupation="restaurante" 
        tag="${bairro.tag}"
        title={<><span className="opacity-80 font-bold tracking-widest block mb-2 text-xl md:text-2xl">RENOVAÇÃO DE AVCB E CLCB PARA RESTAURANTE</span><span className="italic text-red-500 block leading-tight">EM ${bairro.nome.toUpperCase()} — AGILIDADE E LEGALIDADE</span></>}
        subtitle="Evite embargo da Vigilância Sanitária e bloqueio de alvará. Regularização ágil de coifas, central de gás e saídas de emergência."
        address="${bairro.avenidas}"
        showForm={true}
        formTitle={<>Diagnóstico <span className="text-red-600 not-italic uppercase tracking-tighter font-black">${bairro.nome}</span></>}
      />

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Renovações", href: "/renovacao-avcb" }, { label: "${bairro.nome}" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Risco de interdição para estabelecimentos em <span className="text-red-600 not-italic font-black italic">${bairro.nome}</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O bairro de <strong>${bairro.nome}</strong>, localizado na <strong>${bairro.zona}</strong>, possui uma característica singular: uma alta concentração de ${bairro.perfil}. A fiscalização sobre a segurança desses espaços é constante e rigorosa.
                </p>
                <p>
                  ${bairro.intro}
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Consequências do AVCB Vencido</h3>
                <p>
                  A ausência do AVCB ou CLCB em dia bloqueia imediatamente a emissão do alvará de funcionamento pela Prefeitura. Além disso, as multas aplicadas pelo CBPMESP são pesadas e, em caso de irregularidades graves envolvendo as coifas ou cilindros de gás (P45/P90), a interdição do restaurante pode ser imediata.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600 relative overflow-hidden">
                  <UtensilsCrossed className="absolute top-4 right-4 w-24 h-24 text-white/5" />
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">O Cenário Gastronômico de ${bairro.nome}</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">
                    ${bairro.box}
                  </p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ A DRD2 realiza adequações ágeis para que seu restaurante não precise parar a operação.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <InternalLinksBlock currentSlug={_slug} mode="renovacao" maxLinks={8} titulo="Renovação Restaurante em SP" />
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            ${bairro.ctaFinal}
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque ser surpreendido pela fiscalização. Regularize sua documentação e opere com segurança total.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Falar com Engenheiro Especialista
          </a>
        </div>
      </section>
      
    </>
  );
}
`;
}

function generateExpansionTemplate(bairro) {
  const slug = `/avcb-${bairro.slug}`;
  const pageTitle = `AVCB e CLCB em ${bairro.nome} | DRD2 Engenharia`;
  const pageDesc = `Regularização de AVCB e CLCB em ${bairro.nome}. Foco em segurança contra incêndio, aprovação técnica e renovação no Corpo de Bombeiros com projeto especializado.`;

  return `import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  MapPin, Building2, Search, Activity, ClipboardCheck, Clock
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import HeroSection from "@/components/HeroSection";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "${slug}";
const _pageTitle = "${pageTitle}";
const _pageDesc = "${pageDesc}";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function ExpansionLandingPage() {
  const whatsappLink = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}\`;

  const faqItems = [
    { question: "${bairro.faq1q}", answer: "${bairro.faq1a}" },
    { question: "${bairro.faq2q}", answer: "${bairro.faq2a}" },
    { question: "${bairro.faq3q}", answer: "${bairro.faq3a}" },
    { question: "${bairro.faq4q}", answer: "${bairro.faq4a}" },
    { question: "Qual o prazo para obter o AVCB em ${bairro.nome}?", answer: "Em média de 30 a 90 dias, dependendo da complexidade técnica. A DRD2 acelera o processo com protocolos prioritários." }
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "${bairro.nome}",
    serviceName: "AVCB e Regularização em ${bairro.nome}",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Expansão", item: "#" },
      { name: "${bairro.nome}", item: _slug }
    ]
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/banner-avcb.png"
          alt="Regularização de AVCB em ${bairro.nome}"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> ${bairro.tag}
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em ${bairro.nome}: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Segurança e Regularização Técnica</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sem AVCB válido em ${bairro.nome}, sua empresa pode ser <strong className="text-white bg-red-600/30 px-2">interditada</strong> e seu <strong className="text-white bg-red-600/30 px-2">CPF pode responder criminalmente</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com Engenheiro em ${bairro.nome}
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Atendimento com Engenheiro Especialista (CREA-SP)",
                "Projetos Técnicos e Renovação Ministerial",
                "Acompanhamento total até a aprovação final",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-slate-700">
               <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Excelência em Segurança em <br />
                <span className="text-red-600">${bairro.nome}</span>
              </h2>
              <p>
                Regularizar uma edificação em <strong>${bairro.nome}</strong> exige conhecimento das normas técnicas locais e estaduais. A região de ${bairro.zona} é estratégica e possui rigorosa fiscalização.
              </p>
              <p>
                ${bairro.intro}
              </p>
              <p>
                A DRD2 Engenharia atua com foco exclusivo em segurança contra incêndio, garantindo que seu condomínio, comércio ou indústria esteja 100% legalizado.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "+4000", sub: "Empresas Regularizadas" },
                { label: "100%", sub: "Taxa de Aprovação" },
                { label: "+50", sub: "Municípios Atendidos" },
                { label: "15 Anos", sub: "De Experiência Técnica" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-4xl font-black text-red-900 mb-2">{stat.label}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-red-900/20 border-l-8 border-red-600 p-10 rounded-r-[3rem] relative overflow-hidden">
              <MapPin className="absolute top-4 right-4 w-24 h-24 text-white/5" />
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight">Cenário Local: ${bairro.nome}</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium mb-6">
                ${bairro.box}
              </p>
              <p className="text-red-400 font-bold uppercase italic tracking-tighter">
                ⚠️ Atendimento prioritário para a região: ${bairro.avenidas}
              </p>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Riscos Identificados em ${bairro.nome}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "${bairro.problemas[0]}", d: "${bairro.problemasDesc[0]}" },
                { t: "${bairro.problemas[1]}", d: "${bairro.problemasDesc[1]}" },
                { t: "${bairro.problemas[2]}", d: "${bairro.problemasDesc[2]}" },
              ].map((prob, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 text-left hover:shadow-2xl transition-all group">
                   <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 font-black group-hover:scale-110 transition-transform">{i+1}</div>
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-slate-900 group-hover:text-red-600 transition-colors">{prob.t}</h3>
                   <p className="text-slate-600 text-sm font-medium leading-relaxed">{prob.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <div className="py-12 bg-slate-950 border-y border-slate-800 text-center">
         <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Precisa de AVCB em ${bairro.nome}? Fale agora conosco.</p>
         <CtaWhatsApp label="Agendar Vistoria Técnica" occupationType="imóvel em ${bairro.nome}" variant="primary" centered />
      </div>

      <SocialProof
        testimonial={{
          text: "${bairro.testimonial.text}",
          author: "${bairro.testimonial.author}",
          role: "${bairro.testimonial.role}",
        }}
      />

      <LeadForm />
      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={8} titulo="Serviços em ${bairro.nome}" />
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-white text-center relative overflow-hidden">
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">${bairro.ctaFinal}</h2>
            <p className="text-xl text-red-100 mb-12 font-medium italic">${bairro.custoDetalhe}</p>
            <a href={whatsappLink} target="_blank" className="bg-white text-red-900 font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
               Falar com Especialista em ${bairro.nome}
            </a>
         </div>
      </section>
    </>
  );
}
`;
}

// Criar pastas e arquivos para Condomínio
console.log('Gerando páginas para Condomínio...');
bairrosCondominio.forEach(bairro => {
  const folderName = `renovacao-avcb-condominio-${bairro.slug}`;
  const folderPath = path.join(appDir, folderName);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
  const filePath = path.join(folderPath, 'page.tsx');
  const content = generateCondominioTemplate(bairro);
  fs.writeFileSync(filePath, content, 'utf-8');
});

// Criar pastas e arquivos para Restaurante
console.log('Gerando páginas para Restaurante...');
bairrosRestaurante.forEach(bairro => {
  const folderName = `renovacao-avcb-restaurante-${bairro.slug}`;
  const folderPath = path.join(appDir, folderName);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
  const filePath = path.join(folderPath, 'page.tsx');
  const content = generateRestauranteTemplate(bairro);
  fs.writeFileSync(filePath, content, 'utf-8');
});

// Criar pastas e arquivos para Expansão
console.log('Gerando páginas para Expansão (20 cidades)...');
cidadesExpansao.forEach(bairro => {
  const folderName = `avcb-${bairro.slug}`;
  const folderPath = path.join(appDir, folderName);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
  const filePath = path.join(folderPath, 'page.tsx');
  const content = generateExpansionTemplate(bairro);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Gerado: ${folderName}/page.tsx`);
});

console.log('Páginas geradas com sucesso!');
