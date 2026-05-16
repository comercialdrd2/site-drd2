import Link from "next/link";
import {
  CheckCircle2, BadgeInfo, MapPin,
  HelpCircle, Utensils, Dumbbell, Briefcase, Coffee,
  Phone,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import HeroSection from "@/components/HeroSection";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";
import LeadForm from "@/components/LeadForm";

const _pageTitle = "AVCB no Itaim Bibi SP | Engenheiro para Lajes Corporativas e Gastronomia";
const _pageDesc = "AVCB no Itaim Bibi, Faria Lima e JK. Especialistas em regularização Triple A para lajes corporativas, prédios comerciais e alta gastronomia. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB no Itaim Bibi SP | Engenheiro para Lajes Corporativas e Gastronomia",
  description: "AVCB no Itaim Bibi, Faria Lima e JK. Especialistas em regularização Triple A para lajes corporativas, prédios comerciais e alta gastronomia. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-itaim-bibi",
  },
};

export default function ItaimBibiMasterPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "No Itaim Bibi, quem assina o AVCB do escritório: o locatário ou o condomínio?",
      answer: "A edificação base (prédio com suas escadas e hidrantes) é de responsabilidade do condomínio. Contudo, mudanças de layout interno (drywall, portas, carga de TI) podem exigir um CLCB ou adequação do projeto técnico da própria laje locada. Elaboramos laudos atestando a conformidade do seu layout."
    },
    {
      question: "Alta gastronomia no Itaim — o que reprova na vistoria do Bombeiro?",
      answer: "Para restaurantes Michelin e bistrôs premiados, o visual não pode mascarar as deficiências técnicas de supressão (classe K) em coifas, falta de detectores de fumaça operantes sobre os forros e saídas de emergência subdimensionadas nas rotas de staff e salão. Isso paralisa imediatamente a licença municipal (Alvará)."
    },
    {
      question: "Reforma em escritório na Faria Lima: preciso revisar as medidas de segurança?",
      answer: "Sim. Prédios corporativos Triple A não permitem entrada de prestadores de obra antes da aprovação do projeto revisado de sprinklers e detecção da laje pela gerenciadora predial e, em seguida, as atualizações perante as Instruções Técnicas do Bombeiro Estadual."
    },
    {
      question: "Academia boutique no Itaim — quais sistemas de incêndio são obrigatórios?",
      answer: "Academias com alta concentração simultânea de pessoas exigem alarme de incêndio com sirenes audíveis, iluminação de emergência em toda a rota de fuga e saídas devidamente dimensionadas. A DRD2 elabora o projeto técnico completo com ART para aprovação junto ao CBPMESP."
    }
  ];

  const services = [
    {
      name: "Corporativo C-Level",
      desc: "Licenciamento total de pavimentos antes da mudança do CEO. Coordenação de laudos junto à JLL, CBRE e Cushman.",
      icon: Briefcase,
      slug: "corporativo"
    },
    {
      name: "Alta Gastronomia",
      desc: "Soluções classe K para cozinhas integradas em restaurantes de renome internacional e prêmios Michelin.",
      icon: Utensils,
      slug: "restaurante"
    },
    {
      name: "Bares & Entretenimento",
      desc: "Aprovação de lotação real com sistemas audíveis em alto volume, prevenindo multas e intervenções do DCON.",
      icon: Coffee,
      slug: "entretenimento"
    },
    {
      name: "Academias de Luxo",
      desc: "Projetos técnicos e licenças operacionais para estúdios boutique e infraestruturas de alta concentração humana.",
      icon: Dumbbell,
      slug: "academia"
    }
  ];

  const mainStreets = [
    "Av. Brigadeiro Faria Lima - Eixo Corporativo",
    "Av. Juscelino Kubitschek (JK) - Torres Premium",
    "Rua Joaquim Floriano - Gastronomia & Serviços",
    "Rua Pedroso Alvarenga - Residencial Alto Padrão",
    "Rua Amauri - Boutiques e Consultórios",
    "Polo Vila Olímpia - Tecnologia & Corporativo"
  ];

  const _schema = generateMasterSchema({
    slug: "/avcb-itaim-bibi",
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Itaim Bibi e Faria Lima",
    serviceName: "Engenharia Contra Incêndio Triple A",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Zona Sul", item: "/avcb-zona-sul" },
      { name: "Itaim Bibi", item: "/avcb-itaim-bibi" }
    ]
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <HeroSection
        occupation="comércio"
        tag="O Centro Financeiro do Brasil: Itaim Bibi & Faria Lima"
        title={<><span className="text-white">AVCB NO</span> <span className="text-red-500 not-italic tracking-tighter uppercase font-black">ITAIM BIBI</span></>}
        subtitle="Engenheiro especializado para lajes corporativas Triple A, alta gastronomia e academias de luxo na Faria Lima e JK."
        showForm={true}
        formTitle={<>Diagnóstico <span className="text-red-600 not-italic uppercase tracking-tighter font-black">Itaim Bibi</span></>}
      />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Zona Sul", href: "/avcb-zona-sul" },
          { label: "AVCB Itaim Bibi" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* Authority Section */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest leading-none">
                <BadgeInfo className="w-4 h-4" /> Centro Financeiro & Gastronômico de SP
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-[1.1] tracking-tighter uppercase mb-6 text-left border-l-8 border-primary pl-6">
                AUTORIDADE <br /> TÉCNICA NO <br /> <span className="text-primary">ITAIM BIBI</span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed text-balance text-left font-medium">
                O Itaim Bibi congrega o metro quadrado comercial mais valorizado de São Paulo. Ao ocupar lajes na Faria Lima, JK ou na Berrini, o nível de exigência dos administradores prediais e seguradoras corporativas atinge o grau máximo. Reformas sem ART validada e layouts que obstruem hidrantes geram passivos milionários.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 font-black">
                {[
                  "Diagnóstico para Lajes Corporativas",
                  "Projeto PPCI com ART Registrada",
                  "Supressão Classe K para Gastronomia",
                  "Protocolo e Acompanhamento Ativo",
                  "Renovação de AVCB de Edifícios",
                  "CLCB para Consultórios e Studios",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-400 font-black uppercase tracking-tight italic border-b border-slate-100 pb-2 hover:pl-2 transition-all text-left">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl group transition-all border-b-8 border-primary text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-700" />
                <h3 className="text-2xl lg:text-3xl font-black uppercase mb-6 leading-tight tracking-tighter text-left border-b-2 border-primary/30 pb-4">
                  O PADRÃO DE CONFORMIDADE <br /> TRIPLE A
                </h3>
                <div className="space-y-6 text-base text-gray-300 leading-relaxed text-left font-medium">
                  <p>Em lajes Triple A, o retrabalho tem custo milionário. Nosso compromisso é com a exatidão normativa e liberação célere para que seu faturamento imobiliário ou gastronômico não atrase.</p>
                  <p>A DRD2 possui o capital intelectual necessário para debater conformidade técnica com qualquer Asset Manager de São Paulo, provendo os laudos que liberam as chaves da sua operação no Itaim.</p>
                </div>
                <div className="mt-10 p-8 bg-white/5 border border-white/10 rounded-[2rem] italic text-[11px] text-gray-400 font-black uppercase tracking-[0.3em] leading-relaxed text-center shadow-inner shadow-primary/10">
                  "A inteligência técnica nas lajes corporativas e gastronomia do Itaim Bibi."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-4 text-center">Setores <span className="text-primary">Master</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs text-center">Expertise em Corporativo e Gastronomia: Itaim Bibi SP</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-4xl transition-all group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary transition-colors shadow-sm">
                  <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-4 uppercase tracking-tighter italic h-12 flex items-center justify-center leading-none text-pretty font-black">
                  {s.name}
                </h3>
                <p className="text-gray-400 font-black leading-tight text-[10px] mb-8 uppercase tracking-widest italic h-16 overflow-hidden line-clamp-3 font-black">
                  {s.desc}
                </p>
                <Link href="/contato" className="text-primary font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-3 group-hover:text-secondary transition-all font-black">
                  Consultoria →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Mid */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisa de AVCB no Itaim Bibi? Fale agora com um engenheiro especialista.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="imóvel no Itaim Bibi"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* Local Footprint */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden italic shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-white text-left font-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[1.1]">
                PRESENÇA <br /><span className="text-primary">FARIA LIMA & JK</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {mainStreets.map((street, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:border-primary transition-all hover:bg-white/10 shadow-lg text-left shadow-primary/10">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-black text-[10px] tracking-widest uppercase text-left">{street}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[4rem] p-16 text-slate-900 shadow-2xl border-t-12 border-primary min-h-[500px] flex flex-col justify-center text-center">
              <h3 className="text-3xl font-black mb-12 uppercase italic text-secondary border-b-4 border-primary/10 pb-6 tracking-tighter leading-none text-center font-black">
                Prazos <span className="text-primary not-italic uppercase tracking-widest font-black">Reais</span>
              </h3>
              <div className="space-y-12">
                <div className="flex justify-between items-end border-b border-slate-100 pb-10 hover:border-primary/20 transition-all text-left font-black">
                  <div className="max-w-[65%] text-left">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2 leading-none italic font-black">Lajes Corporativas Triple A</span>
                    <h4 className="font-black text-xl text-secondary uppercase italic tracking-tighter leading-none font-black">ESCRITÓRIOS</h4>
                  </div>
                  <span className="text-primary font-black italic text-2xl tracking-tighter leading-none">45-90 dias</span>
                </div>
                <div className="flex justify-between items-end border-b border-slate-100 pb-10 hover:border-primary/20 transition-all text-left font-black">
                  <div className="max-w-[65%] text-left">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2 leading-none italic font-black">Alta Gastronomia e Bares</span>
                    <h4 className="font-black text-xl text-secondary uppercase italic tracking-tighter leading-none font-black">RESTAURANTES</h4>
                  </div>
                  <span className="text-primary font-black italic text-2xl tracking-tighter leading-none">60-90 dias</span>
                </div>
              </div>
              <p className="mt-12 text-[9px] text-gray-400 font-black uppercase text-center italic tracking-[0.4em] leading-relaxed font-black">
                *Prazos sujeitos à conformidade técnica do imóvel e vistoria do CBPMESP.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nossa laje corporativa no Itaim Bibi com precisão técnica e sem burocracia. AVCB aprovado pelo Corpo de Bombeiros sem nenhuma pendência. Recomendo a todos os gestores da região.",
          author: "Cliente DRD2 Engenharia",
          role: "Gestor de Facilities — Itaim Bibi, São Paulo",
        }}
      />

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 underline decoration-primary decoration-4 underline-offset-16">
            <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter text-center font-black tracking-tighter">Dúvidas <span className="text-primary not-italic text-sm font-bold tracking-tighter text-center font-black">ITAIM BIBI</span></h2>
            <p className="mt-2 text-gray-400 font-black uppercase tracking-widest text-xs italic text-center text-pretty font-black">Respondendo às principais questões técnicas da Região</p>
          </div>

          <div className="space-y-6 text-left">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:border-primary/20 transition-all shadow-sm">
                <h4 className="text-xl font-black text-secondary mb-4 flex items-center gap-4 italic leading-none text-left font-black">
                  <HelpCircle className="w-8 h-8 text-primary shrink-0 opacity-20 group-hover:opacity-100 transition-all" />
                  {item.question}
                </h4>
                <p className="text-gray-500 font-bold leading-relaxed pl-12 border-l-4 border-primary/10 text-sm uppercase tracking-tight italic text-left font-black tracking-widest">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque sua operação no Itaim Bibi.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel no Itaim Bibi"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {/* Final Conversion */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 text-center relative overflow-hidden italic shadow-inner">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-black text-secondary leading-[1.1] uppercase tracking-tighter mb-12 italic text-center">
            Itaim Seguro <br /><span className="text-primary not-italic tracking-[0.1em] font-black tracking-tighter">EFICIÊNCIA MASTER</span>
          </h2>
          <p className="text-2xl text-gray-500 font-black mb-20 max-w-3xl mx-auto uppercase italic leading-none tracking-[0.4em] text-center font-black text-balance">Regularize sua operação com a maior autoridade técnica em corporativo e gastronomia de SP.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <a
              href={whatsappLink}
              className="bg-primary text-white font-black px-20 py-8 rounded-[2rem] shadow-4xl hover:bg-slate-900 transition-all flex items-center justify-center gap-8 text-2xl tracking-tighter uppercase border-b-8 border-white/20 select-none italic shadow-primary/20 font-black"
            >
              <Phone className="w-10 h-10" /> Falar com engenheiro especialista
            </a>
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-24 bg-white border-t border-slate-100 text-slate-700 italic border-b-4 border-primary font-bold">
        <div className="container mx-auto px-4 max-w-4xl text-slate-700 leading-relaxed text-left text-base">
          <h2 className="text-3xl md:text-4xl font-black text-secondary uppercase tracking-tighter mb-8 border-l-8 border-primary pl-6 text-left">AVCB no Itaim Bibi: Conformidade para o Centro Financeiro de São Paulo</h2>
          <p className="text-left mb-6 font-medium">O Itaim Bibi concentra o metro quadrado mais valorizado de São Paulo, reunindo lajes corporativas Triple A, alta gastronomia premiada e academias boutique de luxo. A regularização do AVCB (Auto de Vistoria do Corpo de Bombeiros) nesse contexto exige precisão técnica máxima, pois as gerenciadoras prediais (JLL, CBRE, Cushman) e as seguradoras corporativas não admitem documentação incompleta.</p>
          <p className="text-left font-medium">A DRD2 Engenharia fornece consultoria técnica especializada no Itaim Bibi, assegurando que gestores de facilities, empresários do setor gastronômico e síndicos de edifícios comerciais tenham acesso à melhor documentação técnica do mercado, com processos ágeis junto ao CBPMESP e suporte total em todas as etapas de conformidade com o Decreto Estadual nº 63.911/18.</p>
        </div>
      </section>

      {/* Documentação Necessária */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessária para <span className="text-primary">AVCB no Itaim Bibi</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel no Itaim Bibi precisa dos seguintes documentos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa aprovada pela Prefeitura ou levantamento arquitetônico atualizado",
              "IPTU do exercício atual com área total averbada e uso declarado",
              "Memorial descritivo da ocupação e destinação de uso do imóvel",
              "Laudo de instalações elétricas com ART registrada no CREA-SP",
              "Laudo de para-raios (SPDA) para edifícios acima de 5 pavimentos",
              "ART do engenheiro responsável pelo projeto de prevenção de incêndio",
              "Matrícula atualizada do imóvel no Cartório de Registro de Imóveis",
              "CNPJ ou CPF do responsável legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-primary p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 faz auditoria documental gratuita antes de qualquer protocolo no Itaim Bibi. Evite exigências, rejeições e atrasos identificando documentos pendentes antes de submeter ao CBPMESP.
          </div>
        </div>
      </section>

      <LeadForm />

      <NeighborhoodAuthorityBlock
        neighborhood="Itaim Bibi"
        zone="Zona Sul"
        currentSlug="/avcb-itaim-bibi"
      />

      <OccupationDepthBlock
        occupation="/Avcb Itaim Bibi"
        currentSlug="/avcb-itaim-bibi"
      />

      <InternalLinksBlock
        currentSlug="/avcb-itaim-bibi"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB no Itaim Bibi"
      />

      <ServiceClusterLinks currentSlug="/avcb-itaim-bibi" />
      <ServiceBlogLinks currentSlug="/avcb-itaim-bibi" />

      <NeighborhoodSilo currentSlug="/avcb-itaim-bibi" />
    </>
  );
}
