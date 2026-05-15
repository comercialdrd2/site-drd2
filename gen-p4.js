const fs = require('fs'), path = require('path');

const ocups = [
  { key: 'restaurante', nome: 'Restaurante', it_h: 'IT 22/25', it_s: 'IT 23/25', risco_h: 'cozinha industrial com alta carga de incêndio', risco_s: 'alta carga combustível em cozinha e salão' },
  { key: 'escola', nome: 'Escola', it_h: 'IT 22/25', it_s: 'IT 23/25', risco_h: 'público vulnerável e grande circulação de alunos', risco_s: 'alta densidade de ocupantes em área fechada' },
  { key: 'academia', nome: 'Academia', it_h: 'IT 22/25', it_s: 'IT 23/25', risco_h: 'grande público simultâneo e equipamentos elétricos', risco_s: 'alta carga de público e equipamentos de alto consumo' },
  { key: 'pousada', nome: 'Pousada', it_h: 'IT 22/25', it_s: 'IT 23/25', risco_h: 'hóspedes dormindo sem ciência de risco', risco_s: 'perigo de incêndio noturno com hóspedes vulneráveis' },
];

function page(tipo, ocu) {
  const isH = tipo === 'hidrante';
  const sistema = isH ? 'Hidrantes' : 'Sprinkler';
  const sistemaMin = isH ? 'hidrantes' : 'sprinkler';
  const it = isH ? ocu.it_h : ocu.it_s;
  const risco = isH ? ocu.risco_h : ocu.risco_s;
  const slug = `/sistema-de-${sistemaMin}-para-${ocu.key}-sao-paulo`;
  const title = `Sistema de ${sistema} para ${ocu.nome} em SP — ${it} | DRD2 Engenharia`;
  const desc = `A DRD2 projeta, instala e certifica sistemas de ${sistemaMin} para ${ocu.nome.toLowerCase()} em SP conforme ${it}. Projeto com ART, laudo para AVCB e manutenção preventiva. Diagnóstico gratuito.`;

  const faqs = [
    { q: `${ocu.nome} é obrigado a ter sistema de ${sistemaMin} em SP?`, a: `Sim. ${ocu.nome}s com área relevante ou ocupação de risco são obrigados a possuir sistema de ${sistemaMin} conforme ${it} do CBPMESP. A obrigatoriedade depende da área construída, capacidade de público e classificação de risco da ocupação. A DRD2 faz o enquadramento correto gratuitamente.` },
    { q: `Qual a norma que regula ${sistemaMin} para ${ocu.nome.toLowerCase()} em SP?`, a: `A ${it} do CBPMESP regula os sistemas de ${sistemaMin} para ${ocu.nome.toLowerCase()} no Estado de São Paulo, complementada pelas NBRs aplicáveis. A norma define pressão mínima, densidade de descarga, área de cobertura por bico e frequência de manutenção obrigatória.` },
    { q: `Com que frequência o sistema de ${sistemaMin} do ${ocu.nome.toLowerCase()} deve ser revisado?`, a: `A manutenção preventiva deve ser semestral, com teste completo de pressão e vazão anual. O laudo técnico assinado por engenheiro com ART CREA-SP é obrigatório para renovação do AVCB. A DRD2 oferece contrato de manutenção preventiva com visitas programadas.` },
    { q: `O sistema de ${sistemaMin} precisa de projeto aprovado pelo Corpo de Bombeiros?`, a: `Sim. O projeto de ${sistemaMin} deve ser aprovado pelo CBPMESP antes da instalação ou formalizado como as-built quando já instalado. O projeto deve conter cálculo hidráulico, memorial descritivo, planta de localização dos bicos e ART CREA-SP do engenheiro responsável.` },
    { q: `A DRD2 faz projeto e instalação de ${sistemaMin} para ${ocu.nome.toLowerCase()} em toda SP?`, a: `Sim. A DRD2 atende toda a Grande São Paulo com equipe técnica própria para projetos, instalações novas, adequações de sistemas existentes e manutenção preventiva de ${sistemaMin} para ${ocu.nome.toLowerCase()}s de qualquer porte.` },
  ];

  const erros = isH
    ? [`Rede de ${sistemaMin} subdimensionada para a carga de ${risco}`, `Mangueiras sem teste hidrostático anual`, `Bomba de incêndio sem manutenção preventiva`]
    : [`Bicos de sprinkler obstruídos por gordura ou tinta`, `Válvulas de bloqueio fechadas por erro operacional`, `Pressão insuficiente por bomba subdimensionada`];

  return `import { Phone, CheckCircle2, ShieldCheck } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";

const _slug = "${slug}";
const _title = "${title}";
const _desc = "${desc}";

export const metadata = { title: _title, description: _desc, alternates: { canonical: _slug } };

const faqs = ${JSON.stringify(faqs, null, 2)};

export default function ${sistema.replace(' ','')}_${ocu.nome}Page() {
  const wa = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}?text=Olá,%20preciso%20de%20sistema%20de%20${encodeURIComponent(sistemaMin)}%20para%20${encodeURIComponent(ocu.nome.toLowerCase())}\`;
  const schema = generateMasterSchema({ slug: _slug, title: _title, description: _desc, serviceName: "Sistema de ${sistema} para ${ocu.nome} em São Paulo", faqs: faqs.map(f=>({question:f.q,answer:f.a})), breadcrumbs: [{ name:"Home", item:"/" },{ name:"${sistema}", item:"/${sistemaMin === 'hidrantes' ? 'hidrantes' : 'sprinklers'}" },{ name:"${sistema} para ${ocu.nome}", item:_slug }] });
  return (
    <>
      <JsonLD schema={schema} />
      <section className="relative text-white overflow-hidden pt-[85px] pb-[30px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate-950 to-slate-950" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">${it} — ${ocu.nome}s em São Paulo</span>
              <h1 className="text-3xl lg:text-5xl font-black mb-4 leading-tight tracking-tighter uppercase italic">
                Sistema de ${sistema}<br /><span className="text-red-500 not-italic">para ${ocu.nome} em SP</span>
              </h1>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed font-medium border-l-4 border-red-600 pl-5">
                ${ocu.nome}s exigem sistema de ${sistemaMin} por conta de ${risco}. A DRD2 projeta, instala e certifica conforme ${it} com ART e laudo para AVCB.
              </p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
                <Phone className="w-5 h-5 flex-shrink-0" /> Diagnóstico Gratuito para ${ocu.nome}
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#F8F8F8] p-6 rounded-[2rem] border-2 border-slate-200 shadow-2xl">
                <h3 className="text-xl font-black text-slate-900 mb-1 italic">${sistema} para <span className="text-red-600">${ocu.nome}</span></h3>
                <p className="text-sm text-slate-500 mb-5 font-medium">Projeto, instalação e laudo para renovação do AVCB.</p>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbNav items={[{ label:"Home", href:"/" },{ label:"${sistema}", href:"/${sistemaMin === 'hidrantes' ? 'hidrantes' : 'sprinklers'}" },{ label:"${sistema} para ${ocu.nome}" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                ${sistema} para ${ocu.nome}: <span className="text-red-600 not-italic">exigência e riscos</span>
              </h2>
              <div className="space-y-5 text-slate-700 font-medium leading-relaxed text-lg">
                <p>${ocu.nome}s possuem ${risco}, tornando o sistema de ${sistemaMin} uma exigência obrigatória do Corpo de Bombeiros conforme ${it} do CBPMESP. A ausência ou mau funcionamento do sistema pode causar reprovação na vistoria, impossibilidade de renovação do AVCB e, em caso de sinistro, responsabilidade civil e criminal do proprietário ou responsável legal.</p>
                <p>A DRD2 Engenharia realiza o processo completo: levantamento técnico, projeto hidráulico com cálculo de densidade de descarga por setor de risco, instalação, teste de pressão e emissão de laudo com ART CREA-SP para a renovação do AVCB.</p>
              </div>
              <div className="mt-10 space-y-4">
                <h3 className="font-black text-slate-900 uppercase italic tracking-tight text-xl">Erros mais comuns em ${ocu.nome.toLowerCase()}s</h3>
                {${JSON.stringify(erros)}.map((e, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 bg-red-50 border border-red-200 rounded-2xl">
                    <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-red-900 italic">{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-950 text-white rounded-3xl p-8 mb-6">
                <h3 className="font-black uppercase italic tracking-tight text-lg mb-6 text-red-400">O que a DRD2 entrega</h3>
                <div className="space-y-3">
                  {["Projeto ${sistemaMin} conforme ${it} com ART CREA-SP","Cálculo hidráulico e memorial descritivo completo","Instalação por equipe técnica credenciada","Laudo de teste de pressão e vazão","Documentação completa para renovação do AVCB","Contrato de manutenção preventiva semestral"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F8F8F8] p-6 rounded-[2rem] border-2 border-slate-200 shadow-xl">
                <h3 className="text-lg font-black text-slate-900 mb-4 italic">Solicitar <span className="text-red-600">Orçamento</span></h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-14 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">Seu ${ocu.nome.toLowerCase()} tem ${sistemaMin} em conformidade?</p>
          <p className="text-red-200 text-sm font-medium mb-8">Diagnóstico técnico gratuito. Orçamento em 24h.</p>
          <CtaWhatsApp label="Solicitar diagnóstico gratuito para ${ocu.nome.toLowerCase()}" occupationType="${ocu.nome.toLowerCase()}" variant="primary" size="lg" centered />
        </div>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic text-center">
            Dúvidas — <span className="text-red-600 not-italic">${sistema} para ${ocu.nome}</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.q}<span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ServiceClusterLinks currentSlug={_slug} />
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.9]">
            ${sistema.toUpperCase()} PARA ${ocu.nome.toUpperCase()}<br /><span className="text-slate-950 not-italic text-2xl md:text-3xl">PROJETO + INSTALAÇÃO + LAUDO AVCB</span>
          </h2>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 transition-all border-2 border-white inline-flex items-center gap-3">
            <Phone className="w-7 h-7" /> Falar com Engenheiro Agora
          </a>
        </div>
      </section>
    </>
  );
}
`;
}

let n = 0;
['hidrante','sprinkler'].forEach(tipo => {
  ocups.forEach(ocu => {
    const slug = `sistema-de-${tipo === 'hidrante' ? 'hidrantes' : 'sprinkler'}-para-${ocu.key}-sao-paulo`;
    const dir = path.join('src','app',slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir,'page.tsx');
    if (!fs.existsSync(file)) { fs.writeFileSync(file, page(tipo, ocu), 'utf8'); console.log('CREATED: '+slug); n++; }
    else console.log('SKIP: '+slug);
  });
});
console.log('\nTotal: '+n);
