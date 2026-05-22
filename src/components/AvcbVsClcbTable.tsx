import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

/**
 * Tabela comparativa AVCB x CLCB lado a lado.
 * Server component puro (sem JS no cliente).
 *
 * Cobre 12 dimensoes em que os dois certificados se diferenciam.
 * Util como bloco de conteudo em paginas pillar (/avcb-ou-clcb-qual-preciso,
 * /clcb-sao-paulo, /avcb-sao-paulo, posts de blog do cluster CLCB).
 */

type Cell = { value: string; tone?: "good" | "bad" | "warn" | "neutral" };

const ROWS: Array<{ label: string; clcb: Cell; avcb: Cell }> = [
  {
    label: "Área limite",
    clcb: { value: "Até 750 m²", tone: "good" },
    avcb: { value: "Sem limite", tone: "neutral" },
  },
  {
    label: "Grupos de ocupação",
    clcb: { value: "Apenas baixo risco (C, D, F-8, H-2 pequeno)", tone: "warn" },
    avcb: { value: "Todos os grupos", tone: "neutral" },
  },
  {
    label: "Pavimentos",
    clcb: { value: "Até 2 (térreo + 1)", tone: "good" },
    avcb: { value: "Sem limite", tone: "neutral" },
  },
  {
    label: "Lotação típica",
    clcb: { value: "Até ~100 pessoas", tone: "good" },
    avcb: { value: "Qualquer", tone: "neutral" },
  },
  {
    label: "Vistoria física do Bombeiro",
    clcb: { value: "Não obrigatória no protocolo", tone: "good" },
    avcb: { value: "Obrigatória", tone: "warn" },
  },
  {
    label: "Projeto técnico completo",
    clcb: { value: "Não exigido (planta simples basta)", tone: "good" },
    avcb: { value: "Obrigatório com ART", tone: "warn" },
  },
  {
    label: "Sistemas técnicos exigidos",
    clcb: { value: "Extintor, iluminação, sinalização", tone: "good" },
    avcb: { value: "Pode exigir hidrante, alarme, sprinkler, brigada", tone: "warn" },
  },
  {
    label: "ART do engenheiro",
    clcb: { value: "Recomendada (declaração é responsabilidade legal)", tone: "warn" },
    avcb: { value: "Obrigatória", tone: "warn" },
  },
  {
    label: "Prazo médio do CBPMESP",
    clcb: { value: "15 a 45 dias", tone: "good" },
    avcb: { value: "60 a 180 dias", tone: "warn" },
  },
  {
    label: "Validade típica",
    clcb: { value: "3 a 5 anos", tone: "neutral" },
    avcb: { value: "1 a 3 anos (varia por ocupação)", tone: "neutral" },
  },
  {
    label: "Custo comparativo",
    clcb: { value: "Significativamente menor", tone: "good" },
    avcb: { value: "Maior (taxa + projeto + brigada)", tone: "warn" },
  },
  {
    label: "Quando é obrigatório",
    clcb: { value: "Opção simplificada para baixo risco", tone: "good" },
    avcb: { value: "Demais casos — hotel, hospital, indústria, etc.", tone: "neutral" },
  },
];

function toneClasses(tone: Cell["tone"]) {
  switch (tone) {
    case "good": return "text-green-700";
    case "bad": return "text-red-700";
    case "warn": return "text-amber-700";
    default: return "text-slate-700";
  }
}

function toneIcon(tone: Cell["tone"]) {
  if (tone === "good") return <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" aria-hidden="true" />;
  if (tone === "bad") return <XCircle className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true" />;
  if (tone === "warn") return <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />;
  return null;
}

export default function AvcbVsClcbTable() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200" aria-label="Comparativo AVCB vs CLCB">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-2">
            Comparativo técnico oficial
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight italic mb-3">
            AVCB vs CLCB lado a lado
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed max-w-3xl">
            12 dimensões em que os dois certificados se diferenciam, com base no Decreto 56.819/2011
            e nas Instruções Técnicas do CBPMESP atualizadas em 2025/2026.
          </p>
        </div>

        {/* Tabela responsiva: vira cards no mobile */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="text-left px-6 py-4 font-black uppercase tracking-tight text-xs">Dimensão</th>
                <th scope="col" className="text-left px-6 py-4 font-black uppercase tracking-tight text-xs text-green-300">CLCB</th>
                <th scope="col" className="text-left px-6 py-4 font-black uppercase tracking-tight text-xs text-amber-300">AVCB</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-6 py-4 font-bold text-slate-900 align-top">{row.label}</td>
                  <td className={`px-6 py-4 font-medium align-top ${toneClasses(row.clcb.tone)}`}>
                    <span className="inline-flex items-start gap-2">
                      {toneIcon(row.clcb.tone)}
                      <span>{row.clcb.value}</span>
                    </span>
                  </td>
                  <td className={`px-6 py-4 font-medium align-top ${toneClasses(row.avcb.tone)}`}>
                    <span className="inline-flex items-start gap-2">
                      {toneIcon(row.avcb.tone)}
                      <span>{row.avcb.value}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: cards empilhados */}
        <div className="md:hidden space-y-4">
          {ROWS.map((row) => (
            <div key={row.label} className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="font-black text-xs uppercase tracking-widest text-slate-500 mb-3">{row.label}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-black text-xs uppercase text-green-700 shrink-0 w-12">CLCB</span>
                  <span className={`text-sm font-medium ${toneClasses(row.clcb.tone)} flex items-start gap-1.5`}>
                    {toneIcon(row.clcb.tone)}
                    <span>{row.clcb.value}</span>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-black text-xs uppercase text-amber-700 shrink-0 w-12">AVCB</span>
                  <span className={`text-sm font-medium ${toneClasses(row.avcb.tone)} flex items-start gap-1.5`}>
                    {toneIcon(row.avcb.tone)}
                    <span>{row.avcb.value}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 italic mt-6 leading-relaxed">
          Esta tabela é orientativa. O enquadramento definitivo depende de avaliação técnica de engenheiro responsável e análise do CBPMESP.
        </p>
      </div>
    </section>
  );
}
