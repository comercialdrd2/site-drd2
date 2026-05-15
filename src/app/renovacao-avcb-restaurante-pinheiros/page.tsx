import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, UtensilsCrossed, MapPin, Search, Activity, ClipboardList, Clock } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import HeroSection from "@/components/HeroSection";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import SocialProof from "@/components/SocialProof";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";
import LeadForm from "@/components/LeadForm";

const _slug = "/renovacao-avcb-restaurante-pinheiros";
const _pageTitle = "Renovação de AVCB para Restaurante em Pinheiros | DRD2 Engenharia";
const _pageDesc = "Engenharia especializada em renovação de AVCB e CLCB para restaurantes e bares em Pinheiros. Laudo de exaustão, gás e adequação rápida. Orçamento técnico sem compromisso.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Qual a diferença entre AVCB e CLCB para restaurantes em Pinheiros?", a: "Restaurantes pequenos (até 750m² e sem alta lotação) geralmente se enquadram no CLCB (Certificado de Licença), um processo mais rápido. Restaurantes maiores, baladas ou locais com alta carga de incêndio exigem o AVCB completo com projeto técnico." },
  { q: "Meu restaurante em Pinheiros fica em espaço que era loja. Preciso de AVCB novo?", a: "Sim. A mudança de uso de comercial para gastronômico exige novo processo junto ao CBPMESP, com projeto específico para a nova atividade. O AVCB ou CLCB anterior (se existir) não cobre a operação de restaurante." },
  { q: "Qual é o prazo médio para o Corpo de Bombeiros vistoriar um prédio em Pinheiros?", a: "O prazo regulamentar do CBPMESP após o protocolo no sistema Via Fácil é de até 30 dias para a realização da vistoria física na Zona Oeste. No entanto, a DRD2 prepara toda a documentação antecipadamente para que, assim que a taxa for compensada, a vistoria seja agendada o mais rápido possível para o seu endereço na região da Rua dos Pinheiros, Harmonia, Cardeal Arcoverde e região." },
  { q: "O meu prédio em Pinheiros reprovou na vistoria por causa de saída de emergência bloqueada. O que fazer?", a: "Neste caso, o vistoriador emitiu um 'Comunique-se'. O condomínio tem um prazo legal para sanar a irregularidade (corrigir saída de emergência bloqueada) e solicitar o retorno do vistoriador sem pagar nova taxa. Nossa engenharia assume essa readequação técnica e protocola a resposta oficial aos Bombeiros, garantindo a aprovação no retorno." },
  { q: "Como a fiscalização da Prefeitura atua junto com os Bombeiros em Pinheiros?", a: "Na Zona Oeste, a fiscalização da Subprefeitura exige o AVCB válido para a emissão e manutenção do Alvará de Funcionamento e do Certificado de Acessibilidade. A ausência do AVCB não só gera multas do Corpo de Bombeiros, mas também pode levar à interdição administrativa do imóvel pela prefeitura municipal." },
  { q: "Quais laudos são obrigatórios para aprovar o restaurante?", a: "O Corpo de Bombeiros exige impreterivelmente o laudo de estanqueidade de gás (com ART), laudo das instalações elétricas e, fundamentalmente, o laudo do sistema de exaustão mecânica (coifa) da cozinha comercial." },
  { q: "A Vigilância Sanitária pode fechar o restaurante se o AVCB estiver vencido?", a: "Sim. A ausência de AVCB ou CLCB válido bloqueia a emissão ou renovação da Licença de Funcionamento (Alvará) e da Licença Sanitária (CMVS), sujeitando o restaurante a interdição imediata." },
  { q: "Quanto tempo demora para tirar o CLCB do meu restaurante em Pinheiros?", a: "Se a edificação tiver até 750m² e não houver alterações drásticas de layout, a DRD2 Engenharia consegue emitir a documentação e protocolar no Via Fácil em até 72 horas." },
];

export default function RenovacaoRestaurantePage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Renovação de AVCB para Restaurante em Pinheiros",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovações", item: "/renovacao-avcb" },
      { name: "Restaurante em Pinheiros", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <HeroSection 
        occupation="restaurante" 
        tag="Polo Gastronômico — Rua dos Pinheiros e Harmonia"
        title={<><span className="opacity-80 font-bold tracking-widest block mb-2 text-xl md:text-2xl">RENOVAÇÃO DE AVCB E CLCB PARA RESTAURANTE</span><span className="italic text-red-500 block leading-tight">EM PINHEIROS — AGILIDADE E LEGALIDADE</span></>}
        subtitle="Evite embargo, multa, interdição e bloqueio de licenças da Vigilância Sanitária e bloqueio de alvará. Regularização técnica ágil de coifas, central de gás e saídas de emergência."
        address="Rua dos Pinheiros, Harmonia, Cardeal Arcoverde e região"
        showForm={true}
        formTitle={<>Diagnóstico <span className="text-red-600 not-italic uppercase tracking-tighter font-black">Pinheiros</span></>}
      />

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Renovações", href: "/renovacao-avcb" }, { label: "Pinheiros" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Risco de interdição para estabelecimentos em <span className="text-red-600 not-italic font-black italic">Pinheiros</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O bairro de <strong>Pinheiros</strong>, localizado na <strong>Zona Oeste</strong>, possui uma característica singular: uma alta concentração de restaurantes de alto padrão, bares e operações de delivery. A fiscalização sobre a segurança desses espaços é constante e rigorosa.
                </p>
                <p>
                  Pinheiros é o epicentro gastronômico de São Paulo — um bairro onde restaurantes de fine dining, bares artesanais e dark kitchens convivem em palmos quadrados. A alta rotatividade de estabelecimentos e a frequente troca de uso das edificações (de comercial para gastronômico) fazem do AVCB um documento crítico que a Vigilância Sanitária e o próprio Corpo de Bombeiros monitoram ativamente.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Consequências do AVCB Vencido</h3>
                <p>
                  A ausência do AVCB ou CLCB em dia bloqueia imediatamente a emissão do alvará de funcionamento pela Prefeitura. Além disso, as multas aplicadas pelo CBPMESP são pesadas e, em caso de irregularidades graves envolvendo as coifas ou cilindros de gás (P45/P90), a interdição do restaurante pode ser imediata.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600 relative overflow-hidden">
                  <UtensilsCrossed className="absolute top-4 right-4 w-24 h-24 text-white/5" />
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">O Cenário Gastronômico de Pinheiros</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">
                    Em Pinheiros, é comum que restaurantes abram em espaços que eram lojas ou escritórios — e a mudança de atividade sem comunicação ao CBPMESP é a principal causa de autuação. Um estabelecimento gastronômico exige sistemas de exaustão aprovados, detecção de incêndio na cozinha e saídas de emergência que um espaço comercial comum não precisa ter.
                  </p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ A DRD2 realiza adequações ágeis para que seu restaurante não precise parar a operação.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <NeighborhoodAuthorityBlock
        neighborhood="Pinheiros"
        zone="Zona Oeste"
        currentSlug={_slug}
      />



      <OccupationDepthBlock
        occupation="Restaurante Pinheiros"
        currentSlug="/renovacao-avcb-restaurante-pinheiros"
      />

      <InternalLinksBlock currentSlug={_slug} mode="renovacao" maxLinks={8} titulo="Renovação Restaurante em SP" />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-restaurante-pinheiros" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-restaurante-pinheiros" />

      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Regularize o AVCB do seu restaurante em Pinheiros
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Não arrisque ser surpreendido pela fiscalização. Regularize sua documentação e opere com segurança total.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Falar com engenheiro especialista Especialista
          </a>
        </div>
      </section>
      
    </>
  );
}
