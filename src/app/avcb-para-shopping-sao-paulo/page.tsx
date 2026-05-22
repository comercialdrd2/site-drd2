import { servicesData } from "@/data/services";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ShieldAlert, FileText, Zap, Microscope,
  Stethoscope, AlertTriangle, Syringe, HardHat, Phone,
  ArrowRight, ShieldCheck, FileCheck, Building2, ShoppingCart,
  ShoppingBag, LayoutGrid, Users, Flame, LayoutPanelTop,
  Fan,
} from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB para Shopping em São Paulo | DRD2 Engenharia";
const _pageDesc = "A DRD2 Engenharia é especialista em AVCB para shoppings e centros comerciais em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa. Diagnóstico técnico gratuito.";

export const metadata = {
  title: "AVCB para Shopping em São Paulo | DRD2 Engenharia",
  description: "A DRD2 Engenharia é especialista em AVCB para shoppings e centros comerciais em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa. Diagnóstico técnico gratuito.",
  alternates: {
    canonical: "/avcb-para-shopping-sao-paulo",
  },
};

export default function AVCBShoppingPage() {
  const slug = "avcb-para-shopping-sao-paulo";
  const srv = servicesData[slug];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  if (!srv) return <div>Serviço não encontrado</div>;

  const _schema = generateMasterSchema({
        slug: `/${srv.slug}`,
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB para Shoppings e Centros Comerciais SP",
        faqs: srv.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: srv.title, item: `/${srv.slug}` }
        ]
      });

  return (
    <main className="bg-white">
            <JsonLD schema={_schema} />

      {/* ── HERO — VERSÃO 10/10 MASTER ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:flex items-center bg-slate-950 border-b-8 border-primary ">
        <Image
          src="/images/hero-shopping-sao-paulo.webp"
          alt="AVCB para Shopping em São Paulo — Regularização Completa com a DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 text-white">
              <ShoppingBag className="w-4 h-4" /> Alta Complexidade Normativa
            </div>
            <h1 className="text-3xl md:text-6xl font-black mb-4 leading-[1.1] tracking-tighter uppercase italic">
              AVCB para <span className="text-primary not-italic">Shopping</span> em São Paulo — Regularização Completa
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 font-medium leading-relaxed border-l-4 border-primary pl-8">
              Shoppings centers, galerias comerciais e centros de compras estão entre as edificações de maior complexidade técnica para regularização junto ao Corpo de Bombeiros. Alta lotação, múltiplas ocupações simultâneas e sistemas interligados exigem especialização real.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href={whatsappLink}
                className="bg-primary text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter"
              >
                <Phone className="w-6 h-6" /> Solicitar Diagnóstico técnico gratuito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 1: O QUE É E POR QUE PRECISA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic border-b-4 border-primary inline-block">
                O que é o AVCB e por que seu shopping precisa dele
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-6 font-medium">
                O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento oficial que comprova que a edificação atende a todas as exigências de segurança contra incêndio e pânico do Estado de São Paulo. Para shoppings e centros comerciais, o AVCB é requisito indispensável para funcionamento legal, renovação do alvará e operação das lojas âncora e satélites.
              </p>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-12 shadow-sm">
                <p className="text-slate-800 font-bold mb-0">
                  <ShieldAlert className="w-6 h-6 text-primary inline-block mr-2 mb-1" />
                  A ausência ou irregularidade do AVCB em um shopping pode gerar interdição de toda a edificação — impactando dezenas ou centenas de lojistas simultaneamente — além de responsabilidade civil e criminal do administrador em caso de sinistro com público.
                </p>
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
               <h3 className="text-2xl font-black mb-8 uppercase tracking-tight italic">Edificações Obrigadas (IT-02)</h3>
               <p className="text-gray-400 mb-8 font-medium">Conforme o Decreto Estadual nº 69.118/2024, estão obrigadas a obter AVCB:</p>
               <ul className="grid grid-cols-1 gap-4 font-bold text-sm">
                  {[
                    "Shoppings centers e outlets",
                    "Galerias comerciais cobertas",
                    "Centros comerciais e de serviços",
                    "Mercados e supermercados de grande porte",
                    "Edifícios mistos com galeria comercial",
                    "Centros de compras com praça de alimentação"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center group">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-120" /> {item}
                    </li>
                  ))}
               </ul>
               <div className="mt-10 pt-6 border-t border-white/10 text-xs text-gray-500 font-medium">
                  Classificação: Grupo C (Varejista) ou Grupo F (Reunião de Público) conforme IT-02.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: SISTEMAS TÉCNICOS (DETALHAMENTO IT) ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-6">Sistemas de <span className="text-primary not-italic">Segurança Exigidos</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Detalhamento técnico rigoroso conforme as Instruções Técnicas (ITs) do CBPMESP para Shoppings Centers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { it: "IT-11/20", title: "Saídas de Emergência", desc: "Dimensionamento rigoroso de corredores, escadas de emergência e portas corta-fogo." },
              { it: "IT-18", title: "Iluminação de Emergência", desc: "Sistema de alta capacidade cobrindo todas as áreas com autonomia mínima de 1 hora." },
              { it: "IT-20", title: "Sinalização de Emergência", desc: "Placas fotoluminescentes em toda a extensão do shopping." },
              { it: "IT-21", title: "Extintores de Incêndio", desc: "Distribuição por classe de fogo em todas as áreas do complexo." },
              { it: "IT-22", title: "Sistema de Hidrantes", desc: "Projeto hidráulico complexo com múltiplos reservatórios e bombas." },
              { it: "IT-23", title: "Chuveiros Automáticos", desc: "Sprinklers obrigatórios em shoppings conforme área e carga de incêndio." },
              { it: "IT-19", title: "Alarme e Detecção", desc: "Sistema centralizado com detectores automáticos em todas as áreas." },
              { it: "IT-15", title: "Controle de Fumaça", desc: "Sistemas de exaustão e pressurização para garantir rotas de fuga livres." },
              { it: "IT-09", title: "Compartimentação", desc: "Separação corta-fogo entre lojas, praça de alimentação e estacionamento." },
              { it: "IT-10", title: "Acabamento de Lojas", desc: "Controle de materiais inflamáveis em vitrines e decorações comuns." },
              { it: "IT-16/17", title: "Brigada de Incêndio", desc: "Equipe treinada com simulados periódicos obrigatórios." },
              { it: "NBR 5419", title: "SPDA (Para-raios)", desc: "Proteção contra descargas atmosféricas dimensionada por altura e área." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="text-primary text-xs font-black mb-2 tracking-widest">{item.it}</div>
                <h4 className="text-xl font-bold mb-3 uppercase italic tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3: CONDOMÍNIO VS LOJISTA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-8">
                  AVCB do Condomínio e <span className="text-primary italic">AVCB Individual do Lojista</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed italic">
                  <p>
                    O AVCB do condomínio cobre as áreas comuns — corredores, praça de alimentação, estacionamento e sistemas centrais. Mas cada loja precisa do seu próprio AVCB ou CLCB individual, contemplando os sistemas internos da unidade.
                  </p>
                  <p>
                    A DRD2 atende tanto a administração do shopping quanto lojistas individuais que precisam regularizar sua unidade para abertura ou renovação de alvará.
                  </p>
                </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex gap-6 items-center group hover:border-primary transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Building2 className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-slate-900 leading-tight">Gestão Geral (Condomínio)</h4>
                  <p className="text-sm text-slate-500 font-medium">Regularização de sistemas centrais e áreas comuns do shopping.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex gap-6 items-center group hover:border-primary transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <ShoppingCart className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-slate-900 leading-tight">Unidade Individual (Lojista)</h4>
                  <p className="text-sm text-slate-500 font-medium">AVCB/CLCB específico para abertura de loja ou renovação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4: PROCESSO DRD2 ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">Como a DRD2 Conduz o <span className="text-primary not-italic underline decoration-primary decoration-8 underline-offset-[12px]">Processo de AVCB</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Diagnóstico técnico gratuito", desc: "Analisamos a edificação, identificamos o enquadramento, mapeamos pendências e apresentamos o plano de adequação." },
              { id: "02", title: "Projeto técnico (PPCI)", desc: "Desenvolvemos todos os projetos com ART, memoriais descritivos e plantas no padrão exigido pelo CBPMESP." },
              { id: "03", title: "Protocolo e Acompanhamento", desc: "Protocolamos e acompanhamos a análise técnica, respondendo exigências via Comunique-se com agilidade." },
              { id: "04", title: "Vistoria e Emissão", desc: "Coordenamos a vistoria final e preparamos a edificação para aprovação com o mínimo de exigências possível." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-slate-100 absolute -top-8 left-0 z-0 group-hover:text-primary/10 transition-colors">{step.id}</div>
                <div className="relative z-10 pt-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase italic leading-tight">{step.title}</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5: POR QUE MÁXIMA ATENÇÃO ── */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-8">Por que Shoppings São Edificações de <span className="text-primary italic">Máxima Atenção</span> do CBPMESP</h2>
           <p className="text-xl text-gray-300 font-medium leading-relaxed italic border-y border-white/10 py-10">
              Shoppings reúnem o maior volume de variáveis de risco em uma única edificação: lotação de milhares de pessoas, múltiplas ocupações com riscos distintos e responsabilidades divididas. O Corpo de Bombeiros aplica o mais alto nível de rigor técnico — e a DRD2 está preparada para esse nível de exigência.
           </p>
           <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary italic">
                <HardHat className="w-6 h-6 shrink-0" /> Engenharia de Elite
              </div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary italic">
                <Users className="w-6 h-6 shrink-0" /> Gestão de Fluxo de Pânico
              </div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary italic">
                <Zap className="w-6 h-6 shrink-0" /> Resposta Ágil a Exigências
              </div>
           </div>
        </div>
      </section>

      {/* ── FAQ COMPLETO (FIDELIZAÇÃO) ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-primary italic">AVCB para Shopping</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Shopping precisa de AVCB em São Paulo?", a: "Sim. Todo shopping center, galeria comercial e centro de compras no Estado de São Paulo está obrigado a obter AVCB conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
              { q: "O AVCB do shopping cobre as lojas individuais?", a: "Não. O AVCB do condomínio cobre as áreas comuns. Cada lojista precisa obter seu próprio AVCB ou CLCB individual. A DRD2 atende tanto a administração quanto lojistas individuais." },
              { q: "Loja em galeria comercial precisa de AVCB próprio?", a: "Sim. Lojas em galerias precisam de certificado individual para abertura e renovação do alvará, independentemente do AVCB da galeria." },
              { q: "Quais sistemas são mais exigidos em shoppings?", a: "Sprinklers, alarme e detecção, controle de fumaça, compartimentação, saídas de emergência e brigada treinada são os pontos de maior atenção nas vistorias." },
              { q: "A DRD2 atende lojistas individuais dentro do shopping?", a: "Sim. Atendemos tanto a administração do shopping para o AVCB geral quanto lojistas que precisam regularizar sua unidade específica para abertura ou renovação de alvará." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 cursor-pointer open:bg-white open:ring-4 open:ring-primary/10 transition-all">
                <summary className="flex items-center justify-between font-black text-slate-900 text-xl md:text-2xl select-none uppercase italic tracking-tight leading-tight">
                  {faq.q}
                  <span className="text-primary text-3xl group-open:rotate-45 transition-transform duration-300 ml-4">+</span>
                </summary>
                <p className="mt-8 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-8 italic text-lg">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
              Excelência <span className="text-slate-950 not-italic">Técnica</span> em Grandes Centros
            </h2>
            <p className="text-xl md:text-3xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10">
              Shoppings e galerias comerciais exigem o mais alto nível de especialização técnica. Regularize seu empreendimento com quem domina a IT-02 e o Decreto 69.118/2024.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link 
                href={whatsappLink}
                className="bg-slate-950 text-white text-2xl font-black px-12 py-8 rounded-2xl shadow-3xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter flex items-center gap-4"
              >
                <Phone className="w-8 h-8" /> Solicitar Diagnóstico técnico gratuito
              </Link>
            </div>
            <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-50 italic">Atendemos Shoppings em Toda a Grande São Paulo</p>
        </div>
      </section>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Shopping</span></h2>
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
        occupation="Shopping"
        currentSlug="/avcb-para-shopping-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Shopping"
        currentSlug="/avcb-para-shopping-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-supermercado-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Shoppings em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-para-shopping-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-para-shopping-sao-paulo" />

      <NeighborhoodSilo currentSlug={`/${srv.slug}`} />
    </main>
  );
}

