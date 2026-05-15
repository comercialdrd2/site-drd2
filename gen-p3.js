const fs = require('fs');
const path = require('path');

const pages = [
  { slug: 'avcb-jundiai', nome: 'Jundiaí', tipo: 'cidade', estado: 'SP', zona: 'Grande SP', desc: 'polo industrial com galpões, condomínios logísticos e comércio', ruas: ['Rua Quintino Bocaiúva','Av. Vereador Geraldo Dias','Rua Amazonas','Av. União dos Ferroviários'], ocu: ['Galpão industrial','Condomínio residencial','Restaurante','Escritório'] },
  { slug: 'avcb-carapicuiba', nome: 'Carapicuíba', tipo: 'cidade', estado: 'SP', zona: 'Grande SP', desc: 'município da Grande SP com alto volume de imóveis residenciais e comércio local', ruas: ['Rua Itapuí','Av. Santa Fé','Rua das Orquídeas','Av. Mirim'], ocu: ['Condomínio residencial','Loja de varejo','Academia','Padaria'] },
  { slug: 'avcb-taboao-da-serra', nome: 'Taboão da Serra', tipo: 'cidade', estado: 'SP', zona: 'Grande SP', desc: 'cidade limítrofe à capital com forte crescimento imobiliário e comercial', ruas: ['Estrada Ribeirão Pouso Alegre','Rua Tupis','Av. Carlos Reinaldo Mendes','Rua Padre Anchieta'], ocu: ['Condomínio residencial','Supermercado','Galpão','Escritório'] },
  { slug: 'avcb-pompeia', nome: 'Pompeia', tipo: 'bairro', cidade: 'São Paulo', zona: 'Zona Oeste', desc: 'bairro residencial e comercial com mix de condomínios e estabelecimentos gastronômicos', ruas: ['Rua Turiassu','Rua Prates','Rua Cardoso de Almeida','Rua Dr. Zuquim'], ocu: ['Condomínio residencial','Restaurante','Academia','Clínica'] },
  { slug: 'avcb-jardins', nome: 'Jardins', tipo: 'bairro', cidade: 'São Paulo', zona: 'Zona Sul/Centro', desc: 'bairro nobre com alta concentração de estabelecimentos de luxo, clínicas e escritórios', ruas: ['Av. Paulista','Rua Oscar Freire','Alameda Santos','Rua Augusta'], ocu: ['Escritório corporativo','Clínica médica','Restaurante premium','Hotel boutique'] },
  { slug: 'avcb-campo-grande', nome: 'Campo Grande', tipo: 'bairro', cidade: 'São Paulo', zona: 'Zona Sul', desc: 'bairro de Santo André/SP com perfil residencial e comércio de bairro', ruas: ['Av. Washington Luís','Rua Domingos de Morais','Rua Campo Grande','Av. dos Bandeirantes'], ocu: ['Condomínio residencial','Clínica','Supermercado','Escola'] },
  { slug: 'avcb-bom-retiro', nome: 'Bom Retiro', tipo: 'bairro', cidade: 'São Paulo', zona: 'Centro', desc: 'polo têxtil e comercial do centro de SP com alta concentração de lojas e galpões de estoque', ruas: ['Rua José Paulino','Rua Aimorés','Rua Ribeiro de Lima','Av. Tiradentes'], ocu: ['Loja de confecção','Galpão de estoque','Restaurante','Escritório'] },
  { slug: 'avcb-santa-cecilia', nome: 'Santa Cecília', tipo: 'bairro', cidade: 'São Paulo', zona: 'Centro-Oeste', desc: 'bairro boêmio e residencial próximo ao Centro com mix de bares, restaurantes e edifícios antigos', ruas: ['Rua Martins Fontes','Av. Angélica','Rua Dr. Vila Nova','Largo do Arouche'], ocu: ['Restaurante e bar','Clínica médica','Condomínio residencial','Escritório'] },
  { slug: 'avcb-vila-clementino', nome: 'Vila Clementino', tipo: 'bairro', cidade: 'São Paulo', zona: 'Zona Sul', desc: 'bairro com alta concentração de hospitais, clínicas e imóveis residenciais na Zona Sul', ruas: ['Rua Domingos de Morais','Rua Borges Lagoa','Rua Loefgren','Av. 23 de Maio'], ocu: ['Hospital e clínica','Condomínio residencial','Laboratório','Consultório'] },
];

function makePage(p) {
  const isCidade = p.tipo === 'cidade';
  const local = isCidade ? p.nome : `${p.nome}, ${p.cidade}`;
  const localSEO = isCidade ? `${p.nome} - ${p.estado}` : `${p.nome} - São Paulo`;
  const breadLocal = isCidade ? p.nome : p.nome;
  const zona = isCidade ? p.zona : p.zona;
  const slug = `/${p.slug}`;

  const faqs = [
    { q: `Quais estabelecimentos em ${p.nome} precisam de AVCB?`, a: `Em ${p.nome}, precisam de AVCB: condomínios residenciais acima de 3 pavimentos, estabelecimentos comerciais acima de 750m², hospitais, hotéis, restaurantes com grande capacidade, galpões industriais e qualquer ocupação de risco conforme o Decreto 56.819/2011 do Estado de SP.` },
    { q: `Quanto tempo leva para obter o AVCB em ${p.nome}?`, a: `O prazo médio para AVCB em ${p.nome} varia de 60 a 120 dias após o protocolo no Corpo de Bombeiros, dependendo do tipo de imóvel e dos sistemas exigidos. Com documentação pré-auditada pela DRD2, o processo entra sem pendências e avança mais rápido.` },
    { q: `A DRD2 atende em ${p.nome}?`, a: `Sim. A DRD2 Engenharia atende toda a região de ${p.nome} com equipe técnica própria. Realizamos levantamento técnico in loco, elaboração do projeto de prevenção de incêndio, execução de sistemas e acompanhamento junto ao CBPMESP até a emissão do certificado.` },
    { q: `O AVCB vencido em ${p.nome} pode causar interdição?`, a: `Sim. O Corpo de Bombeiros e a Prefeitura podem interditar qualquer estabelecimento em ${p.nome} com AVCB vencido ou ausente a qualquer momento. Além da interdição, o proprietário pode ser autuado com multa de R$ 500 a R$ 50.000.` },
    { q: `Qual a documentação básica para AVCB em ${p.nome}?`, a: `Planta baixa aprovada ou levantamento arquitetônico com ART, IPTU com área e uso declarados, matrícula do imóvel, laudo elétrico com ART CREA-SP e CNPJ do responsável. A DRD2 faz auditoria documental gratuita antes do protocolo.` },
  ];

  return `import Link from "next/link";
import { Phone, CheckCircle2, MapPin, ArrowRight, Building2, ShieldCheck } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";

const _slug = "${slug}";
const _title = "AVCB em ${localSEO} — Especialistas em Regularização | DRD2 Engenharia";
const _desc = "AVCB e CLCB em ${local}: ${p.desc}. Engenheiros credenciados CREA-SP, diagnóstico gratuito e processo completo até o certificado. Fale agora.";

export const metadata = { title: _title, description: _desc, alternates: { canonical: _slug } };

const faqs = ${JSON.stringify(faqs.map(f => ({ question: f.q, answer: f.a })), null, 2)};

export default function ${p.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^avcb/, 'Avcb')}Page() {
  const whatsappLink = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}?text=Olá,%20preciso%20de%20AVCB%20em%20${encodeURIComponent(p.nome)}\`;
  const _schema = generateMasterSchema({ slug: _slug, title: _title, description: _desc, serviceName: "AVCB em ${local}", neighborhood: "${p.nome}", faqs, breadcrumbs: [{ name: "Home", item: "/" }, { name: "AVCB ${p.nome}", item: _slug }] });

  return (
    <>
      <JsonLD schema={_schema} />
      <section className="relative text-white overflow-hidden pt-[85px] pb-[30px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate-950 to-slate-950" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                <MapPin className="w-3 h-3" /> ${zona} — ${local}
              </span>
              <h1 className="text-3xl lg:text-5xl font-black mb-4 leading-tight tracking-tighter uppercase italic">
                AVCB em ${p.nome}<br /><span className="text-red-500 not-italic">Regularização Completa ${p.tipo === 'cidade' ? p.estado : 'SP'}</span>
              </h1>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed font-medium border-l-4 border-red-600 pl-5">
                Especialistas em AVCB e CLCB em ${local}. ${p.desc.charAt(0).toUpperCase() + p.desc.slice(1)}. Diagnóstico gratuito, protocolo sem pendências e acompanhamento até o certificado.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
                <Phone className="w-5 h-5 flex-shrink-0" /> Diagnóstico Gratuito em ${p.nome}
              </a>
              <p className="mt-3 text-xs text-slate-400 italic">Atendemos em ${local} • CREA-SP 5070163570 • Resposta em 2h</p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#F8F8F8] p-6 rounded-[2rem] border-2 border-slate-200 shadow-2xl">
                <h3 className="text-xl font-black text-slate-900 mb-1 italic">AVCB em ${p.nome} — <span className="text-red-600">Diagnóstico Grátis</span></h3>
                <p className="text-sm text-slate-500 mb-5 font-medium">Informe o tipo do imóvel e receba orientação técnica em até 2 horas.</p>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "AVCB ${p.nome}" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Quem precisa de AVCB <span className="text-red-600 not-italic">em ${p.nome}?</span>
              </h2>
              <div className="space-y-4 mb-10">
                {${JSON.stringify(p.ocu)}.map((ocu, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="font-bold text-slate-800 text-sm uppercase italic tracking-tight">{ocu}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-950 p-8 rounded-3xl text-white border-l-8 border-red-600">
                <h3 className="font-black uppercase italic tracking-tight text-lg mb-4">Principais vias atendidas em ${p.nome}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {${JSON.stringify(p.ruas)}.map((rua, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="text-slate-300 text-sm font-medium">{rua}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#F8F8F8] p-6 rounded-[2rem] border-2 border-slate-200 shadow-2xl sticky top-32">
                <h3 className="text-xl font-black text-slate-900 mb-2 italic">Regularize em <span className="text-red-600">${p.nome}</span></h3>
                <p className="text-sm text-slate-500 mb-5 font-medium">Diagnóstico gratuito — receba orçamento e prazo em até 24h.</p>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter text-center">
            Por que a DRD2 em <span className="text-red-500 not-italic">${p.nome}?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Equipe local credenciada", d: "Engenheiros com CREA-SP ativo que conhecem as especificidades da unidade do CBPMESP responsável por ${local}." },
              { t: "Protocolo sem Comunique-se", d: "Auditoria documental antes do protocolo elimina pendências e garante que o processo avança sem interrupções." },
              { t: "Processo completo", d: "Do levantamento técnico ao certificado: projeto, execução de sistemas, ART e acompanhamento da vistoria." },
              { t: "+2.500 regularizações", d: "Experiência em todos os tipos de ocupação — residencial, comercial, industrial e de saúde — em toda a Grande SP." },
              { t: "Resposta em 2 horas", d: "Diagnóstico inicial em até 2 horas após o contato. Orçamento detalhado em até 24 horas." },
              { t: "Sem surpresas no preço", d: "Orçamento fechado antes do início. Sem cobranças adicionais por etapas não previstas no contrato." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                <ShieldCheck className="w-7 h-7 text-red-500 mb-4" />
                <h3 className="font-black uppercase italic tracking-tight text-base mb-3">{item.t}</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-14 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">Precisa de AVCB em ${p.nome}?</p>
          <p className="text-red-200 text-sm font-medium mb-8">Diagnóstico gratuito. Orçamento em 24h. Processo completo até o certificado.</p>
          <CtaWhatsApp label="Falar com engenheiro em ${p.nome}" occupationType="estabelecimento em ${p.nome}" variant="primary" size="lg" centered />
        </div>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic text-center">
            Dúvidas — <span className="text-red-600 not-italic">AVCB em ${p.nome}</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.question}<span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceClusterLinks currentSlug={_slug} />
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.9]">
            AVCB EM ${p.nome.toUpperCase()}<br /><span className="text-slate-950 not-italic text-2xl md:text-3xl">PROCESSO COMPLETO COM A DRD2</span>
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium italic">Mais de 2.500 regularizações em SP. Diagnóstico gratuito e resposta em até 2 horas.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 transition-all border-2 border-white inline-flex items-center gap-3">
            <Phone className="w-7 h-7" /> Falar com Engenheiro Agora
          </a>
        </div>
      </section>
      <LeadForm />
    </>
  );
}
`;
}

let created = 0;
pages.forEach(p => {
  const dir = path.join('src', 'app', p.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'page.tsx');
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, makePage(p), 'utf8');
    console.log('CREATED: ' + p.slug);
    created++;
  } else {
    console.log('SKIP (exists): ' + p.slug);
  }
});
// also need LeadForm import
console.log('\nTotal criadas: ' + created);
