const fs = require('fs'), path = require('path');

const laudos = [
  {
    slug: '/laudo-alarme-incendio-sao-paulo',
    dir: 'laudo-alarme-incendio-sao-paulo',
    sistema: 'Alarme de Incêndio',
    sistemaMin: 'alarme de incêndio',
    it: 'IT-18/CBPMESP e NBR 17240',
    fn: 'LaudoAlarmeIncendioPage',
    title: 'Laudo de Alarme de Incêndio em São Paulo — ART | DRD2 Engenharia',
    desc: 'Laudo técnico do sistema de alarme e detecção de incêndio em São Paulo com ART CREA-SP. Para renovação de AVCB, Comunique-se dos Bombeiros e auditoria de seguro. Diagnóstico gratuito.',
    causas: ['Renovação do AVCB com sistema de alarme instalado', 'Comunique-se específico sobre o sistema de detecção', 'Auditoria de seguro patrimonial exigindo documentação', 'Vistoria do Corpo de Bombeiros reprovando o alarme'],
    verifica: [
      'Central de alarme: modelo homologado e sem falhas ativas',
      'Detectores de fumaça e calor: limpeza, posicionamento e sensibilidade',
      'Acionadores manuais: localização, identificação e funcionamento',
      'Sirenes e avisadores: audibilidade em todas as áreas',
      'Bateria de backup: autonomia mínima de 24h sem energia',
      'Cabeamento: continuidade, identificação e proteção física',
      'Teste funcional completo de acionamento real do sistema',
    ],
    faqs: [
      { q: 'Quando o laudo de alarme de incêndio é obrigatório?', a: 'O laudo é obrigatório para renovação do AVCB em edificações com sistema de alarme instalado, quando o Corpo de Bombeiros emite Comunique-se específico sobre o sistema, para auditoria de seguradoras e sempre que o sistema passar por manutenção, substituição de componentes ou reprogramação da central.' },
      { q: 'O laudo de alarme substitui o Comunique-se do Corpo de Bombeiros?', a: 'O laudo técnico com ART é exatamente o documento que responde ao Comunique-se do Corpo de Bombeiros referente ao sistema de alarme. Ao protocolar o laudo junto ao CBPMESP, o Comunique-se é considerado respondido e o processo de AVCB retoma a análise.' },
      { q: 'Quem pode assinar o laudo de alarme de incêndio em SP?', a: 'Engenheiro eletricista ou engenheiro de segurança do trabalho com registro no CREA-SP ativo. O laudo deve ser acompanhado de ART (Anotação de Responsabilidade Técnica) recolhida perante o CREA-SP. A DRD2 tem engenheiros habilitados para laudo e ART em até 48h.' },
      { q: 'Qual a diferença entre manutenção e laudo do sistema de alarme?', a: 'Manutenção é o serviço técnico de verificação e ajuste do sistema. Laudo é o documento técnico formal que certifica o estado e conformidade do sistema conforme a IT-18 do CBPMESP e NBR 17240, assinado por engenheiro com ART. O laudo pode ser emitido após a manutenção ou independentemente dela.' },
      { q: 'Quanto tempo leva para emitir o laudo de alarme de incêndio?', a: 'A DRD2 realiza a vistoria técnica in loco e emite o laudo em até 5 dias úteis após a visita. Em casos urgentes (Comunique-se com prazo vencendo), priorizamos para 48h. O laudo já sai com ART recolhida e pronto para protocolo.' },
    ],
  },
  {
    slug: '/laudo-sistema-hidrantes-sao-paulo',
    dir: 'laudo-sistema-hidrantes-sao-paulo',
    sistema: 'Sistema de Hidrantes',
    sistemaMin: 'sistema de hidrantes',
    it: 'IT-22/CBPMESP e NBR 13714',
    fn: 'LaudoSistemaHidrantesPage',
    title: 'Laudo de Sistema de Hidrantes em São Paulo — ART | DRD2 Engenharia',
    desc: 'Laudo técnico do sistema de hidrantes em São Paulo com ART CREA-SP. Teste de pressão, vazão e mangueiras para AVCB, Comunique-se dos Bombeiros e auditoria de seguro. Diagnóstico gratuito.',
    causas: ['Renovação do AVCB com sistema de hidrantes instalado', 'Mangueiras sem laudo de teste hidrostático anual', 'Comunique-se do Corpo de Bombeiros sobre o sistema', 'Auditoria de seguro predial exigindo laudo técnico'],
    verifica: [
      'Pressão e vazão nos pontos mais desfavoráveis da rede (mín. 40 mca)',
      'Teste hidrostático em 100% das mangueiras de incêndio',
      'Estado dos esguichos reguláveis e chaves de mangueira',
      'Condição dos abrigos: identificação, vidro, dobradiças',
      'Bomba de incêndio: pressostato, acionamento automático e manual',
      'Registro de recalque: localização, sinalização e operação',
      'Reservatório: nível mínimo conforme cálculo da IT-22',
    ],
    faqs: [
      { q: 'Com que frequência o laudo de hidrantes é obrigatório?', a: 'O laudo técnico com ART deve ser emitido anualmente para renovação do AVCB. O teste hidrostático das mangueiras é obrigatório todo ano, independente do estado visual das mangueiras. Mangueiras que reprovam no teste devem ser substituídas antes da emissão do laudo.' },
      { q: 'O que é o teste hidrostático de mangueiras de incêndio?', a: 'O teste hidrostático submete cada mangueira a uma pressão de 150% da pressão de trabalho por no mínimo 5 minutos, verificando rupturas, vazamentos e integridade do revestimento. Mangueiras aprovadas recebem etiqueta com data e número do laudo. É obrigatório anualmente conforme NBR 13714.' },
      { q: 'O laudo de hidrantes responde ao Comunique-se do Corpo de Bombeiros?', a: 'Sim. Quando o Comunique-se é específico sobre o sistema de hidrantes, o laudo técnico com ART e os resultados dos testes de pressão, vazão e mangueiras é exatamente o documento para resposta. A DRD2 prepara o laudo já no formato correto para protocolo junto ao CBPMESP.' },
      { q: 'Quem pode emitir laudo de sistema de hidrantes em SP?', a: 'Engenheiro civil ou mecânico com especialização em sistemas hidráulicos de combate a incêndio, com registro ativo no CREA-SP. O laudo deve ser acompanhado de ART específica para a atividade. A DRD2 tem engenheiros habilitados com experiência em todos os tipos de ocupação.' },
      { q: 'A bomba de incêndio precisa de laudo separado?', a: 'O laudo do sistema de hidrantes já inclui a avaliação da bomba de incêndio (motobomba principal e reserva), pressostato, painel de comando e acionamento automático. Não é necessário laudo separado da bomba — ela é parte integrante do sistema de hidrantes.' },
    ],
  },
  {
    slug: '/laudo-sprinkler-sao-paulo',
    dir: 'laudo-sprinkler-sao-paulo',
    sistema: 'Sistema de Sprinkler',
    sistemaMin: 'sistema de sprinkler',
    it: 'IT-23/CBPMESP e NBR 10897',
    fn: 'LaudoSprinklerPage',
    title: 'Laudo de Sistema de Sprinkler em São Paulo — ART | DRD2 Engenharia',
    desc: 'Laudo técnico do sistema de sprinkler em São Paulo com ART CREA-SP. Teste hidrostático, pressão e bicos para AVCB, Comunique-se dos Bombeiros e auditoria de seguro. Diagnóstico gratuito.',
    causas: ['Renovação do AVCB com sistema de sprinkler instalado', 'Bicos obstruídos ou substituídos sem atualização do projeto', 'Comunique-se do Corpo de Bombeiros sobre o sprinkler', 'Auditoria de seguro industrial ou comercial'],
    verifica: [
      'Pressão estática e dinâmica nos pontos mais desfavoráveis',
      'Inspeção de 100% dos bicos: obstrução, danos e coeficiente k',
      'Válvulas de controle e alarme: posição, operação e sinalização',
      'Teste hidrostático da rede conforme NBR 10897',
      'Bomba de incêndio: acionamento automático, jockey e reserva',
      'Reservatório: nível mínimo calculado por setor de risco',
      'Conformidade entre bicos instalados e projeto aprovado',
    ],
    faqs: [
      { q: 'Quando o laudo de sprinkler é obrigatório em São Paulo?', a: 'O laudo é obrigatório para renovação do AVCB em edificações com sistema de sprinkler instalado, quando o Corpo de Bombeiros emite Comunique-se sobre o sistema, após qualquer intervenção no sistema (substituição de bicos, ampliação da rede) e para auditoria de seguradoras industriais e comerciais.' },
      { q: 'O laudo de sprinkler exige teste com água ou é apenas visual?', a: 'O laudo completo inclui tanto inspeção visual quanto teste funcional. O teste hidrostático da rede verifica a integridade das tubulações sob pressão de teste. A inspeção visual avalia o estado de cada bico, válvula e suporte. Ambos são obrigatórios conforme NBR 10897 para laudo válido perante o CBPMESP.' },
      { q: 'Posso substituir bicos de sprinkler sem atualizar o projeto?', a: 'Não. Cada substituição de bico deve utilizar modelo com o mesmo coeficiente k e temperatura de acionamento especificados no projeto aprovado. Qualquer alteração de modelo ou quantidade exige projeto as-built atualizado com ART. Bicos substituídos incorretamente são causa frequente de Comunique-se.' },
      { q: 'Qual a diferença entre laudo e certificado de manutenção de sprinkler?', a: 'Certificado de manutenção é emitido pela empresa de manutenção e atesta que o serviço foi realizado. Laudo técnico é um documento de responsabilidade de engenheiro com ART CREA-SP que avalia e certifica a conformidade do sistema conforme a norma vigente. O Corpo de Bombeiros aceita apenas o laudo com ART para fins de AVCB.' },
      { q: 'Quanto tempo leva para emitir o laudo de sprinkler?', a: 'A DRD2 realiza vistoria técnica e emite o laudo em até 5 dias úteis após a visita. Em casos urgentes, priorizamos para 48h. O laudo inclui relatório fotográfico, resultados dos testes, ART recolhida e memorial descritivo das conformidades e não-conformidades encontradas.' },
    ],
  },
];

function makePage(l) {
  return `import { Phone, CheckCircle2, AlertTriangle, ArrowRight, FileText } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";

const _slug = "${l.slug}";
const _title = "${l.title}";
const _desc = "${l.desc}";

export const metadata = { title: _title, description: _desc, alternates: { canonical: _slug } };

const faqs = ${JSON.stringify(l.faqs, null, 2)};

export default function ${l.fn}() {
  const wa = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}?text=Olá,%20preciso%20de%20laudo%20técnico%20do%20${encodeURIComponent(l.sistemaMin)}\`;
  const schema = generateMasterSchema({ slug: _slug, title: _title, description: _desc, serviceName: "Laudo Técnico de ${l.sistema} em São Paulo", faqs: faqs.map(f=>({question:f.q,answer:f.a})), breadcrumbs: [{ name:"Home", item:"/" },{ name:"Laudo ${l.sistema}", item:_slug }] });

  return (
    <>
      <JsonLD schema={schema} />
      <section className="relative text-white overflow-hidden pt-[85px] pb-[30px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate-950 to-slate-950" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">${l.it} — Laudo com ART CREA-SP</span>
              <h1 className="text-3xl lg:text-5xl font-black mb-4 leading-tight tracking-tighter uppercase italic">
                Laudo de ${l.sistema}<br /><span className="text-red-500 not-italic">em São Paulo — ART</span>
              </h1>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed font-medium border-l-4 border-red-600 pl-5">
                Laudo técnico do ${l.sistemaMin} com ART CREA-SP conforme ${l.it}. Para renovação de AVCB, resposta a Comunique-se e auditoria de seguro. Emissão em até 5 dias úteis.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {${JSON.stringify(l.causas)}.map((c, i) => (
                  <span key={i} className="bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">{c}</span>
                ))}
              </div>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
                <Phone className="w-5 h-5 flex-shrink-0" /> Solicitar Laudo com ART — Urgente
              </a>
              <p className="mt-3 text-xs text-slate-400 italic">Vistoria + laudo + ART em até 5 dias úteis • Urgências em 48h</p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#F8F8F8] p-6 rounded-[2rem] border-2 border-slate-200 shadow-2xl">
                <h3 className="text-xl font-black text-slate-900 mb-1 italic">Laudo <span className="text-red-600">em 5 Dias Úteis</span></h3>
                <p className="text-sm text-slate-500 mb-5 font-medium">Vistoria técnica + laudo + ART recolhida. Pronto para protocolo no CBPMESP.</p>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbNav items={[{ label:"Home", href:"/" },{ label:"Laudo ${l.sistema} SP" }]} dark />
      <TrustBar dark />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                O que verificamos no <span className="text-red-600 not-italic">laudo do ${l.sistema.toLowerCase()}</span>
              </h2>
              <div className="space-y-3 mb-10">
                {${JSON.stringify(l.verifica)}.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-3xl">
                <p className="text-red-900 font-bold text-sm leading-relaxed">⚠️ O Corpo de Bombeiros só aceita laudo assinado por engenheiro com ART CREA-SP ativa. Certificados de manutenção emitidos por técnicos ou empresas sem ART não são aceitos para renovação de AVCB.</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-950 text-white rounded-3xl p-8 mb-6">
                <h3 className="font-black uppercase italic tracking-tight text-lg mb-6 text-red-400">O laudo inclui</h3>
                <div className="space-y-3">
                  {["Vistoria técnica in loco por engenheiro credenciado","Relatório fotográfico completo de todos os pontos","Resultado dos testes de pressão, vazão e funcionamento","ART CREA-SP recolhida e válida","Memorial de conformidades e não-conformidades","Prazo: até 5 dias úteis (48h para urgências)"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F8F8F8] p-6 rounded-[2rem] border-2 border-slate-200 shadow-xl">
                <h3 className="text-lg font-black text-slate-900 mb-4 italic">Solicitar <span className="text-red-600">Laudo Agora</span></h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-14 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">Precisa do laudo para renovar o AVCB?</p>
          <p className="text-red-200 text-sm font-medium mb-8">Emitimos em até 5 dias úteis com ART CREA-SP. Urgências em 48h.</p>
          <CtaWhatsApp label="Solicitar laudo com ART — resposta em 2h" occupationType="estabelecimento com ${l.sistemaMin}" variant="primary" size="lg" centered />
        </div>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic text-center">
            Dúvidas — <span className="text-red-600 not-italic">Laudo ${l.sistema}</span>
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
            LAUDO DE ${l.sistema.toUpperCase()}<br /><span className="text-slate-950 not-italic text-2xl md:text-3xl">COM ART — EMISSÃO EM 5 DIAS ÚTEIS</span>
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium italic">Vistoria técnica + laudo + ART CREA-SP pronto para protocolo no Corpo de Bombeiros.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 transition-all border-2 border-white inline-flex items-center gap-3">
            <Phone className="w-7 h-7" /> Solicitar Laudo com ART Agora
          </a>
        </div>
      </section>
    </>
  );
}
`;
}

let n = 0;
laudos.forEach(l => {
  const dir = path.join('src','app',l.dir);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir,'page.tsx');
  if (!fs.existsSync(file)) { fs.writeFileSync(file, makePage(l), 'utf8'); console.log('CREATED: '+l.dir); n++; }
  else console.log('SKIP: '+l.dir);
});
console.log('\nTotal: '+n);
