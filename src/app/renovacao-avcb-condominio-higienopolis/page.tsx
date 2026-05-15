import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Building2, MapPin, Search, Activity, ClipboardList, Clock } from "lucide-react";
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

const _slug = "/renovacao-avcb-condominio-higienopolis";
const _pageTitle = "Renovação de AVCB para Condomínio em Higienópolis | DRD2 Engenharia";
const _pageDesc = "Especialistas em renovação de AVCB para condomínios em Higienópolis. Adequação de prédios antigos, laudos técnicos, ART e aprovação no Corpo de Bombeiros.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Qual a validade do AVCB para condomínios residenciais em Higienópolis?", a: "Para condomínios residenciais em São Paulo (incluindo Higienópolis), o AVCB tem validade de até 5 anos. Já para edifícios de uso misto ou comerciais, a validade cai para 3 anos." },
  { q: "O Corpo de Bombeiros exige a troca do carpete dos corredores?", a: "Depende. É obrigatório apresentar a CMAR (Controle de Materiais de Acabamento e Revestimento). Se o carpete não tiver tratamento antichamas certificado, deverá ser tratado com líquido retardante (com ART) ou substituído." },
  { q: "Qual é o prazo médio para o Corpo de Bombeiros vistoriar um prédio em Higienópolis?", a: "O prazo regulamentar do CBPMESP após o protocolo no sistema Via Fácil é de até 30 dias para a realização da vistoria física na Região Central. No entanto, a DRD2 prepara toda a documentação antecipadamente para que, assim que a taxa for compensada, a vistoria seja agendada o mais rápido possível para o seu endereço na região da Av. Angélica, Higienópolis, Pacaembu." },
  { q: "O meu prédio em Higienópolis reprovou na vistoria por causa de falta de corrimão normatizado. O que fazer?", a: "Neste caso, o vistoriador emitiu um 'Comunique-se'. O condomínio tem um prazo legal para sanar a irregularidade (corrigir falta de corrimão normatizado) e solicitar o retorno do vistoriador sem pagar nova taxa. Nossa engenharia assume essa readequação técnica e protocola a resposta oficial aos Bombeiros, garantindo a aprovação no retorno." },
  { q: "Como a fiscalização da Prefeitura atua junto com os Bombeiros em Higienópolis?", a: "Na Região Central, a fiscalização da Subprefeitura exige o AVCB válido para a emissão e manutenção do Alvará de Funcionamento e do Certificado de Acessibilidade. A ausência do AVCB não só gera multas do Corpo de Bombeiros, mas também pode levar à interdição administrativa do imóvel pela prefeitura municipal." },
  { q: "Quais laudos são obrigatórios para renovar o AVCB do condomínio?", a: "Para a renovação, o síndico precisa apresentar: Laudo de teste hidrostático de mangueiras, laudo de estanqueidade de gás (se houver GN/GLP), laudo do SPDA (para-raios), laudo das instalações elétricas e laudo do grupo gerador (se aplicável), todos acompanhados das respectivas ARTs." },
  { q: "O Corpo de Bombeiros vistoria o condomínio na renovação?", a: "Sim. Em processos de renovação de Projeto Técnico (PT), o CBPMESP agenda uma vistoria presencial. A DRD2 Engenharia acompanha essa vistoria no seu condomínio em Higienópolis para garantir que não haja 'comunique-se' (exigências extras)." },
  { q: "Posso ser multado se o AVCB do meu prédio em Higienópolis estiver vencido?", a: "Sim. O Decreto Estadual 63.911/18 permite que o CBPMESP aplique multas pesadas. Além disso, a ausência de AVCB válido anula a cobertura do seguro predial e transfere a responsabilidade civil e criminal diretamente para o síndico em caso de sinistro." },
  { q: "Quanto tempo demora a renovação do AVCB na região de Higienópolis?", a: "Se o condomínio estiver com a manutenção em dia, o processo leva entre 15 e 30 dias. Se houver necessidade de adequações físicas (como troca de bombas ou adequação de hidrantes), o cronograma dependerá da execução das obras." },
];

export default function RenovacaoCondominioPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Renovação de AVCB para Condomínio em Higienópolis",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovações", item: "/renovacao-avcb" },
      { name: "Condomínio em Higienópolis", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <HeroSection 
        occupation="condomínio" 
        tag="Arquitetura Histórica e Segurança"
        title={<><span className="opacity-80 font-bold tracking-widest block mb-2 text-xl md:text-2xl">RENOVAÇÃO DE AVCB PARA CONDOMÍNIO</span><span className="italic text-red-500 block leading-tight">EM HIGIENÓPOLIS — SEGURANÇA E LEGALIDADE</span></>}
        subtitle="Síndico, proteja seu patrimônio e evite a perda da cobertura do seguro. Engenharia especializada em adequação de prédios antigos e modernos em Higienópolis."
        address="Av. Angélica, Higienópolis, Pacaembu"
        showForm={true}
        formTitle={<>Diagnóstico <span className="text-red-600 not-italic uppercase tracking-tighter font-black">Higienópolis</span></>}
      />

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Renovações", href: "/renovacao-avcb" }, { label: "Higienópolis" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                A urgência da renovação do AVCB em <span className="text-red-600 not-italic font-black italic">Higienópolis</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O bairro de <strong>Higienópolis</strong>, localizado na <strong>Região Central</strong>, possui uma característica singular: uma alta concentração de prédios de alto padrão de arquitetura brutalista e modernista. Para o Corpo de Bombeiros (CBPMESP), a idade ou o porte da edificação não isentam o rigor técnico.
                </p>
                <p>
                  Higienópolis é famoso pelos seus condomínios de arquitetura icônica. Porém, a preservação estética costuma entrar em conflito direto com as exigências de segurança do Corpo de Bombeiros, exigindo laudos rigorosos de instalações elétricas antigas e adequações que não descaracterizem as fachadas tombadas.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Síndico: O Risco Criminal do AVCB Vencido</h3>
                <p>
                  A responsabilidade pela manutenção do AVCB recai integralmente sobre o síndico. Em condomínios de Higienópolis, a ausência de um AVCB válido ou a negligência na renovação resulta em três consequências severas: a <strong>nulidade imediata da apólice de seguro predial</strong> em caso de sinistro, a aplicação de <strong>multas estaduais (Decreto 63.911/18)</strong> e a responsabilização civil e criminal direta do gestor caso ocorram danos físicos aos moradores.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600 relative overflow-hidden">
                  <MapPin className="absolute top-4 right-4 w-24 h-24 text-white/5" />
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">O Cenário Imobiliário de Higienópolis</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">
                    Sistemas elétricos defasados são a maior causa de incêndios em Higienópolis. O CBPMESP tem reprovado inúmeras renovações por falta do Laudo Elétrico completo, com termografia, atestando que os quadros de força (frequentemente de fusíveis ou disjuntores obsoletos) suportam a carga atual dos apartamentos.
                  </p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ A DRD2 realiza o mapeamento "As-Built" completo para regularizar condomínios na região.</p>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">O que a Vistoria Avalia?</h3>
                <p>
                  A renovação não é apenas um trâmite de "entrega de papéis". O engenheiro responsável (e posteriormente o vistoriador do CBPMESP) avaliará as condições reais de operação dos sistemas: pressurização das escadas (crucial em edifícios altos), capacidade e estanqueidade do reservatório (RTI), alarmes de incêndio operantes, luzes de emergência com autonomia, e as condições do SPDA (para-raios).
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Guia de Legislação e Vistoria Local</h3>
                <p className="whitespace-pre-line">
                  A aprovação de projetos técnicos e a emissão do Auto de Vistoria do Corpo de Bombeiros (AVCB) no bairro de Higienópolis obedecem rigorosamente aos trâmites do Comando do Corpo de Bombeiros da Polícia Militar do Estado de São Paulo (CBPMESP), em conjunto com as diretrizes da Subprefeitura responsável pela Região Central. Devido ao perfil local, marcado por prédios de alto padrão de arquitetura brutalista e modernista, a fiscalização na região da Av. Angélica, Higienópolis, Pacaembu tem se intensificado, especialmente após as recentes atualizações do Decreto Estadual 63.911/18. O decreto exige que edificações existentes se adaptem às novas Instruções Técnicas (ITs), sob pena de interdição.

Muitos gestores e síndicos em Higienópolis desconhecem que a responsabilidade civil e criminal em caso de sinistro recai integralmente sobre eles. Se uma edificação não possui o AVCB válido ou se as medidas de segurança contra incêndio (como extintores, mangueiras e detectores) estiverem inoperantes, a apólice de seguro predial pode ser sumariamente anulada. Em uma região com prédios de alto padrão de arquitetura brutalista e modernista, a ausência de compartimentação adequada ou falhas no sistema elétrico potencializam o risco estrutural. É por isso que a engenharia preventiva se torna não apenas uma exigência legal, mas um escudo jurídico para a administração.

O processo de renovação em Higienópolis começa com a fase de diagnóstico e emissão de laudos técnicos especializados. Nossos engenheiros realizam o levantamento de campo minucioso para avaliar se a infraestrutura existente atende à IT-16 (Sistemas de proteção por extintores), IT-17 (Sistemas de hidrantes), e IT-41 (Inspeção visual em instalações elétricas). Caso haja divergências entre o Projeto Técnico aprovado anteriormente e a realidade física da edificação — como o fechamento irregular de varandas ou alteração de rotas de fuga —, é obrigatório protocolar um Formulário de Atendimento Técnico (FAT) ou um Projeto Técnico de Substituição (PTS) junto ao Via Fácil Bombeiros.

Após a adequação física e documental, todos os laudos (ARTs de elétrica, SPDA, gás e bombas) são consolidados e submetidos eletronicamente. A vistoria do CBPMESP na região de Higienópolis é rigorosa e os tenentes vistoriadores testam na prática o funcionamento das bombas de recalque e o acionamento do alarme geral. Com a DRD2 Engenharia, acompanhamos o vistoriador presencialmente em seu endereço próximo à Av. Angélica, Higienópolis, Pacaembu, garantindo que qualquer questionamento técnico seja sanado imediatamente, resultando na emissão rápida e segura do seu AVCB.
                </p>
              </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase italic">
            Problemas Comuns que <span className="text-red-500 not-italic">Reprovam Condomínios em Higienópolis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { e: "Problema 1", t: "Instalações elétricas obsoletas", d: "Quadros de força sem Laudo Elétrico (com termografia) atestando capacidade para ar-condicionado e novos equipamentos.", c: "bg-slate-900" },
              { e: "Problema 2", t: "Rotas de fuga bloqueadas por obras", d: "Halls e corredores revestidos com madeiras e carpetes que não possuem o laudo de controle de material de acabamento (CMAR).", c: "bg-red-900" },
              { e: "Problema 3", t: "Falta de corrimão normatizado", d: "Escadarias de design antigo sem corrimãos ou com espaçamentos proibidos pela IT 11.", c: "bg-slate-900" },
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
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Seu condomínio se enquadra em algum destes riscos?</p>
          <CtaWhatsApp label="Fale com um engenheiro e agende vistoria" occupationType="condomínio" variant="primary" centered />
        </div>
      </div>

      <LeadForm />
      <NeighborhoodAuthorityBlock
        neighborhood="Higienopolis"
        zone="São Paulo"
        currentSlug={_slug}
      />



      <OccupationDepthBlock
        occupation="Condominio Higienopolis"
        currentSlug="/renovacao-avcb-condominio-higienopolis"
      />

      <InternalLinksBlock currentSlug={_slug} mode="renovacao" maxLinks={8} titulo="Renovação Condomínio em SP" />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-condominio-higienopolis" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-condominio-higienopolis" />

      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Renovação de AVCB para condomínios clássicos em Higienópolis
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Evite notificações do Corpo de Bombeiros. Conte com a engenharia que conhece a realidade arquitetônica e os desafios dos edifícios da região.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Falar com engenheiro especialista Especialista
          </a>
        </div>
      </section>
      
    </>
  );
}
