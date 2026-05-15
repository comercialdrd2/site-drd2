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

const _slug = "/renovacao-avcb-restaurante-vila-madalena";
const _pageTitle = "Renovação de AVCB para Restaurante em Vila Madalena | DRD2 Engenharia";
const _pageDesc = "Engenharia especializada em renovação de AVCB e CLCB para restaurantes e bares em Vila Madalena. Laudo de exaustão, gás e adequação rápida. Orçamento técnico sem compromisso.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Qual a diferença entre AVCB e CLCB para restaurantes em Vila Madalena?", a: "Restaurantes pequenos (até 750m² e sem alta lotação) geralmente se enquadram no CLCB (Certificado de Licença), um processo mais rápido. Restaurantes maiores, baladas ou locais com alta carga de incêndio exigem o AVCB completo com projeto técnico." },
  { q: "Meu bar fica em uma casa tombada na Vila Madalena. Consigo CLCB?", a: "Sim, mas requer parecer técnico específico. O CBPMESP avalia edificações históricas caso a caso, adaptando as exigências à estrutura existente. A DRD2 tem experiência com esse tipo de processo e elabora o projeto de adequação respeitando as restrições do imóvel." },
  { q: "Qual é o prazo médio para o Corpo de Bombeiros vistoriar um prédio em Vila Madalena?", a: "O prazo regulamentar do CBPMESP após o protocolo no sistema Via Fácil é de até 30 dias para a realização da vistoria física na Zona Oeste. No entanto, a DRD2 prepara toda a documentação antecipadamente para que, assim que a taxa for compensada, a vistoria seja agendada o mais rápido possível para o seu endereço na região da Rua Aspicuelta, Fradique Coutinho, Mourato Coelho e região." },
  { q: "O meu prédio em Vila Madalena reprovou na vistoria por causa de saída de emergência única. O que fazer?", a: "Neste caso, o vistoriador emitiu um 'Comunique-se'. O condomínio tem um prazo legal para sanar a irregularidade (corrigir saída de emergência única) e solicitar o retorno do vistoriador sem pagar nova taxa. Nossa engenharia assume essa readequação técnica e protocola a resposta oficial aos Bombeiros, garantindo a aprovação no retorno." },
  { q: "Como a fiscalização da Prefeitura atua junto com os Bombeiros em Vila Madalena?", a: "Na Zona Oeste, a fiscalização da Subprefeitura exige o AVCB válido para a emissão e manutenção do Alvará de Funcionamento e do Certificado de Acessibilidade. A ausência do AVCB não só gera multas do Corpo de Bombeiros, mas também pode levar à interdição administrativa do imóvel pela prefeitura municipal." },
  { q: "Quais laudos são obrigatórios para aprovar o restaurante?", a: "O Corpo de Bombeiros exige impreterivelmente o laudo de estanqueidade de gás (com ART), laudo das instalações elétricas e, fundamentalmente, o laudo do sistema de exaustão mecânica (coifa) da cozinha comercial." },
  { q: "A Vigilância Sanitária pode fechar o restaurante se o AVCB estiver vencido?", a: "Sim. A ausência de AVCB ou CLCB válido bloqueia a emissão ou renovação da Licença de Funcionamento (Alvará) e da Licença Sanitária (CMVS), sujeitando o restaurante a interdição imediata." },
  { q: "Quanto tempo demora para tirar o CLCB do meu restaurante em Vila Madalena?", a: "Se a edificação tiver até 750m² e não houver alterações drásticas de layout, a DRD2 Engenharia consegue emitir a documentação e protocolar no Via Fácil em até 72 horas." },
];

export default function RenovacaoRestaurantePage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Renovação de AVCB para Restaurante em Vila Madalena",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovações", item: "/renovacao-avcb" },
      { name: "Restaurante em Vila Madalena", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <HeroSection 
        occupation="restaurante" 
        tag="Bairro Boêmio e Gastronômico de SP"
        title={<><span className="opacity-80 font-bold tracking-widest block mb-2 text-xl md:text-2xl">RENOVAÇÃO DE AVCB E CLCB PARA RESTAURANTE</span><span className="italic text-red-500 block leading-tight">EM VILA MADALENA — AGILIDADE E LEGALIDADE</span></>}
        subtitle="Evite embargo, multa, interdição e bloqueio de licenças da Vigilância Sanitária e bloqueio de alvará. Regularização técnica ágil de coifas, central de gás e saídas de emergência."
        address="Rua Aspicuelta, Fradique Coutinho, Mourato Coelho e região"
        showForm={true}
        formTitle={<>Diagnóstico <span className="text-red-600 not-italic uppercase tracking-tighter font-black">Vila Madalena</span></>}
      />

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Renovações", href: "/renovacao-avcb" }, { label: "Vila Madalena" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Risco de interdição para estabelecimentos em <span className="text-red-600 not-italic font-black italic">Vila Madalena</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O bairro de <strong>Vila Madalena</strong>, localizado na <strong>Zona Oeste</strong>, possui uma característica singular: uma alta concentração de bares, restaurantes informais, food trucks e espaços culturais. A fiscalização sobre a segurança desses espaços é constante e rigorosa.
                </p>
                <p>
                  A Vila Madalena é o bairro mais criativo de São Paulo — e também um dos mais desafiadores para a regularização de AVCB. A mistura de casas convertidas em bares, garagens transformadas em restaurantes e espaços culturais que funcionam como estabelecimentos gastronômicos gera uma complexidade regulatória que exige engenharia com experiência local.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Consequências do AVCB Vencido</h3>
                <p>
                  A ausência do AVCB ou CLCB em dia bloqueia imediatamente a emissão do alvará de funcionamento pela Prefeitura. Além disso, as multas aplicadas pelo CBPMESP são pesadas e, em caso de irregularidades graves envolvendo as coifas ou cilindros de gás (P45/P90), a interdição do restaurante pode ser imediata.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600 relative overflow-hidden">
                  <UtensilsCrossed className="absolute top-4 right-4 w-24 h-24 text-white/5" />
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">O Cenário Gastronômico de Vila Madalena</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">
                    Na Vila Madalena, o maior problema é a informalidade construtiva: casas tombadas ou de interesse histórico que foram convertidas em bares sem projeto aprovado. O Corpo de Bombeiros não aceita a justificativa de 'edificação histórica' para dispensar os sistemas de segurança — apenas adapta as exigências à realidade da estrutura existente.
                  </p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ A DRD2 realiza adequações ágeis para que seu restaurante não precise parar a operação.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <NeighborhoodAuthorityBlock
        neighborhood="Vila Madalena"
        zone="Zona Oeste"
        currentSlug={_slug}
      />



      <OccupationDepthBlock
        occupation="Restaurante Vila Madalena"
        currentSlug="/renovacao-avcb-restaurante-vila-madalena"
      />

      <InternalLinksBlock currentSlug={_slug} mode="renovacao" maxLinks={8} titulo="Renovação Restaurante em SP" />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-restaurante-vila-madalena" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-restaurante-vila-madalena" />

      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Regularize o CLCB do seu bar ou restaurante na Vila Madalena
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
