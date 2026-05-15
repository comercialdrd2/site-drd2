import Link from "next/link";
import { AlertTriangle, CheckCircle2, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";

type LaudoDepthBlockProps = {
  occupation: string;
  currentSlug: string;
};

const profiles: Record<string, {
  risco: string;
  documentos: string[];
  falhas: string[];
  prazo: string;
  custo: string;
}> = {
  restaurante: {
    risco: "cozinha com GLP, exaustao, fritadeiras, carga de incêndio no deposito e alto fluxo de público em horarios de pico",
    documentos: ["laudo de estanqueidade de gas", "laudo de exaustao e limpeza de coifa", "ART de instalacoes elétricas", "atestado de extintores classe K"],
    falhas: ["central de gas sem ventilacao", "coifa engordurada sem comprovante de limpeza", "extintor inadequado para oleo de cozinha"],
    prazo: "20 a 45 dias quando o restaurante ja tem plantas e laudos; 45 a 90 dias quando ha GLP, exaustao ou adequação fisica",
    custo: "o custo depende mais do estado dos sistemas do que do protocolo: laudo simples e barato vira obra quando gas, elétrica ou coifa estao fora de norma",
  },
  condomínio: {
    risco: "garagens, casas de bomba, central de gas, escadas enclausuradas, áreas comuns e sistemas antigos com manutenção irregular",
    documentos: ["ART de bombas e hidrantes", "laudo de SPDA", "laudo elétrico", "laudo de estanqueidade de gas", "teste de mangueiras"],
    falhas: ["bomba de incêndio sem partida automatica", "porta corta-fogo travada aberta", "sinalização antiga sem fotoluminescencia"],
    prazo: "30 a 60 dias em prédios com manutenção em dia; 60 a 120 dias quando envolve bomba, SPDA, gas ou projeto de substituicao",
    custo: "o menor custo ocorre quando o síndico mantem laudos anuais; o maior risco financeiro e descobrir pendencias so depois da vistoria",
  },
  galpao: {
    risco: "armazenamento, docas, porta-paletes, carga de incêndio variavel, empilhadeiras e áreas elétricas de grande potencia",
    documentos: ["memorial de carga de incêndio", "laudo de hidrantes", "ART elétrica", "cálculo hidráulico", "laudo de alarme ou sprinklers"],
    falhas: ["estoque acima da altura prevista em projeto", "hidrante sem pressão no ponto mais desfavoravel", "rota de fuga bloqueada por pallets"],
    prazo: "45 a 90 dias para renovacao documentada; 90 a 180 dias quando ha sprinkler, ampliacao ou mudanca de atividade",
    custo: "o preco varia conforme risco, área, estoque e necessidade de cálculo hidráulico; galpao sem as built costuma exigir levantamento completo",
  },
  default: {
    risco: "divergencia entre uso real, área declarada, sistemas instalados e documentos apresentados ao Corpo de Bombeiros",
    documentos: ["ART do responsavel técnico", "laudo elétrico", "laudo de extintores", "sinalização e iluminação de emergência", "memorial de ocupação"],
    falhas: ["documento vencido", "planta diferente da realidade", "equipamento instalado sem ART ou sem manutenção"],
    prazo: "20 a 45 dias para casos simples; 45 a 120 dias quando ha ajuste fisico, FAT, projeto ou Comunique-se",
    custo: "o investimento depende da quantidade de laudos, área, risco e necessidade de adequação; diagnóstico previo evita proposta artificialmente barata",
  },
};

function getProfile(slug: string) {
  if (slug.includes("restaurante") || slug.includes("bar") || slug.includes("padaria")) return profiles.restaurante;
  if (slug.includes("condomínio")) return profiles.condomínio;
  if (slug.includes("galpao") || slug.includes("industrial")) return profiles.galpao;
  return profiles.default;
}

export default function LaudoDepthBlock({ occupation, currentSlug }: LaudoDepthBlockProps) {
  const profile = getProfile(currentSlug);

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="text-red-600 font-black text-xs uppercase tracking-widest">Laudo com foco em aprovação</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tighter italic">
              O que torna o laudo para {occupation} diferente de um documento generico?
            </h2>
            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                O laudo do Bombeiro não deve ser tratado como uma folha assinada no fim do processo. Para {occupation},
                ele funciona como prova técnica de que os sistemas existentes realmente conversam com o uso do imóvel,
                com a área declarada, com a lotação e com o risco fiscalizado pelo CBPMESP.
              </p>
              <p>
                O ponto critico deste tipo de ocupação e {profile.risco}. Por isso, a DRD2 não emite laudo sem antes
                conferir se a situacao fisica bate com o que sera protocolado. Essa leitura evita que o barato vire
                Comunique-se, retorno de vistoria ou interdição por documento inconsistente.
              </p>
              <p>
                O prazo medio real e {profile.prazo}. Sobre custo, {profile.custo}. Antes de cobrar por pacote fechado,
                nossa equipe separa o que e laudo, o que e manutenção e o que e adequação, para o cliente saber exatamente
                onde esta o risco e qual item impacta a aprovação do AVCB.
              </p>
              <p>
                Quando o diagnóstico identifica falha em sistemas como{" "}
                <Link href="/alarme-incendio-sao-paulo" className="text-red-600 font-black underline">alarme de incêndio</Link>,{" "}
                <Link href="/hidrantes" className="text-red-600 font-black underline">hidrantes</Link>,{" "}
                <Link href="/spda" className="text-red-600 font-black underline">SPDA</Link>{" "}
                ou <Link href="/laudo-estanqueidade-gas-sao-paulo" className="text-red-600 font-black underline">gas</Link>,
                o laudo deixa de ser apenas burocracia e passa a orientar a decisao técnica que libera a regularização.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-950 text-white rounded-[2rem] p-8 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-5 flex items-center gap-3">
                <ClipboardCheck className="w-5 h-5 text-red-500" /> Documentos normalmente verificados
              </h3>
              <div className="space-y-3">
                {profile.documentos.map((item) => (
                  <div key={item} className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4">
                    <FileText className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    <p className="text-sm text-slate-300 font-bold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-[2rem] p-8">
              <h3 className="text-xl font-black uppercase italic mb-5 text-red-900 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600" /> Falhas que travam a aprovação
              </h3>
              <div className="space-y-3">
                {profile.falhas.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <p className="text-sm text-red-950 font-bold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/avcb-sao-paulo"
              className="flex items-center justify-between gap-4 bg-slate-900 hover:bg-red-600 text-white rounded-2xl p-6 transition-all group"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-red-300 mb-1">Proximo passo</p>
                <p className="font-black uppercase italic leading-tight">Entenda como este laudo entra no AVCB</p>
              </div>
              <ShieldCheck className="w-7 h-7 text-red-400 group-hover:text-white shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
