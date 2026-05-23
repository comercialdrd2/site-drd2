"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/**
 * Calculadora interativa AVCB ou CLCB.
 *
 * Decisao baseada em:
 * - Area construida (m²)
 * - Tipo de ocupação (risco)
 * - Altura (n° de andares)
 * - Lotação aproximada
 *
 * Fonte: IT-01 e IT-02 do CBPMESP — Decreto 69.118/2024 + atualizacoes 2025/2026.
 *
 * Disclaimer: heuristica para orientação inicial — diagnostico definitivo
 * exige engenheiro avaliando o projeto especifico.
 */

type Occupation = {
  id: string;
  label: string;
  group: string; // grupo conforme IT-02
  riskClass: "baixo" | "medio" | "alto";
  examples: string;
};

const OCCUPATIONS: Occupation[] = [
  { id: "comercio", label: "Comércio / Loja", group: "C-1, C-2", riskClass: "baixo", examples: "loja de roupas, papelaria, livraria, óticas" },
  { id: "escritorio", label: "Escritório / Sala comercial", group: "D-1, D-2", riskClass: "baixo", examples: "consultório, escritório de advocacia, contábil, coworking pequeno" },
  { id: "clinica", label: "Clínica médica / Consultório", group: "H-2", riskClass: "baixo", examples: "clínica geral, odontológica, fisioterapia, salão de beleza" },
  { id: "restaurante", label: "Restaurante / Bar / Padaria", group: "F-8", riskClass: "medio", examples: "restaurante, lanchonete, bar, padaria, cafeteria com cozinha" },
  { id: "academia", label: "Academia / Estúdio", group: "F-3", riskClass: "medio", examples: "academia, pilates, crossfit, estúdio de dança" },
  { id: "escola", label: "Escola / Creche", group: "E-1, E-2", riskClass: "medio", examples: "creche, escola infantil, curso livre, faculdade pequena" },
  { id: "salao", label: "Salão de festas / Eventos", group: "F-6", riskClass: "medio", examples: "salão de festas, espaço de eventos pequeno" },
  { id: "igreja", label: "Igreja / Templo", group: "F-4", riskClass: "medio", examples: "igreja, templo religioso de pequeno porte" },
  { id: "comercio_baixo_risco", label: "Farmácia / Mercado pequeno", group: "C-1", riskClass: "baixo", examples: "farmácia, mini-mercado, hortifruti, pet shop" },
  { id: "industrial", label: "Galpão / Indústria", group: "I-1, I-2, I-3", riskClass: "alto", examples: "galpão logístico, indústria leve, oficina" },
  { id: "hotel", label: "Hotel / Hospedagem", group: "B-1, B-2", riskClass: "alto", examples: "hotel, pousada, hostel" },
  { id: "hospital", label: "Hospital", group: "H-3", riskClass: "alto", examples: "hospital, casa de repouso, pronto-socorro" },
];

type Recommendation = {
  type: "CLCB" | "AVCB" | "AVCB_OBRIGATORIO";
  title: string;
  reason: string;
  ctaLabel: string;
  ctaHref: string;
};

function calculate(area: number, occupation: Occupation | null, floors: number, capacity: number): Recommendation | null {
  if (!occupation || area <= 0) return null;

  // Regra 1: alto risco SEMPRE exige AVCB, independente da area
  if (occupation.riskClass === "alto") {
    return {
      type: "AVCB_OBRIGATORIO",
      title: "AVCB obrigatório",
      reason: `Sua ocupação (${occupation.label}, grupo ${occupation.group}) é classificada como alto risco pelo CBPMESP. Independente da área, exige AVCB completo com vistoria física, projeto técnico e ART.`,
      ctaLabel: "Ver páginas de AVCB",
      ctaHref: "/avcb-sao-paulo",
    };
  }

  // Regra 2: area > 750 m² ja exige AVCB
  if (area > 750) {
    return {
      type: "AVCB",
      title: "AVCB recomendado",
      reason: `Edificações acima de 750 m² (sua área: ${area} m²) saem do enquadramento CLCB e exigem AVCB com Projeto Técnico, vistoria física e ART do engenheiro responsável.`,
      ctaLabel: "Ver renovação de AVCB",
      ctaHref: "/renovacao-avcb",
    };
  }

  // Regra 3: mais de 2 andares (subsolo + terreo + 1 andar OK; mais que isso vai pra AVCB)
  if (floors > 2) {
    return {
      type: "AVCB",
      title: "AVCB recomendado",
      reason: `Edificações com mais de 2 pavimentos (você indicou ${floors}) tipicamente saem do CLCB simplificado e migram para AVCB com avaliação de rota vertical de fuga.`,
      ctaLabel: "Ver renovação de AVCB",
      ctaHref: "/renovacao-avcb",
    };
  }

  // Regra 4: lotacao alta puxa pra AVCB mesmo em área pequena
  if (capacity > 100) {
    return {
      type: "AVCB",
      title: "AVCB recomendado",
      reason: `Lotação acima de 100 pessoas (você indicou ${capacity}) tipicamente exige AVCB pelo dimensionamento de saídas de emergência conforme IT-08, mesmo em áreas menores que 750 m².`,
      ctaLabel: "Ver renovação de AVCB",
      ctaHref: "/renovacao-avcb",
    };
  }

  // CLCB elegivel — direciona para a pagina especifica se houver
  const slugMap: Record<string, string> = {
    comercio: "/renovacao-clcb-comercio-sao-paulo",
    escritorio: "/renovacao-clcb-escritorio-sao-paulo",
    clinica: "/renovacao-clcb-clinica-sao-paulo",
    restaurante: "/renovacao-clcb-restaurante-sao-paulo",
    academia: "/renovacao-clcb-academia-sao-paulo",
    escola: "/renovacao-clcb-escola-sao-paulo",
    salao: "/renovacao-clcb-salao-festas-sao-paulo",
    igreja: "/renovacao-clcb-igreja-sao-paulo",
    comercio_baixo_risco: "/renovacao-clcb-farmacia-sao-paulo",
  };

  return {
    type: "CLCB",
    title: "CLCB é a opção mais ágil para você",
    reason: `Com ${area} m², ${floors} pavimento(s) e lotação até ${capacity} pessoas em uma ocupação de baixo/médio risco (${occupation.label}), você se enquadra no CLCB — processo simplificado, sem vistoria física obrigatória, prazo de 15 a 45 dias.`,
    ctaLabel: `Ver renovação CLCB para ${occupation.label.toLowerCase()}`,
    ctaHref: slugMap[occupation.id] || "/renovacao-clcb-sao-paulo",
  };
}

export default function AvcbOuClcbCalculator() {
  const [area, setArea] = useState(200);
  const [occupationId, setOccupationId] = useState<string>("");
  const [floors, setFloors] = useState(1);
  const [capacity, setCapacity] = useState(50);
  const [submitted, setSubmitted] = useState(false);

  const occupation = OCCUPATIONS.find((o) => o.id === occupationId) || null;
  const result = useMemo(() => calculate(area, occupation, floors, capacity), [area, occupation, floors, capacity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!occupation) return;
    setSubmitted(true);
    trackEvent("calculator_avcb_clcb_submit", {
      area,
      occupation: occupation.id,
      floors,
      capacity,
      result: result?.type,
    });
  };

  return (
    <section className="py-16 bg-white border-y border-slate-200" aria-label="Calculadora AVCB ou CLCB">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-1">
              Diagnóstico instantâneo
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight italic leading-tight">
              AVCB ou CLCB? Descubra agora
            </h2>
          </div>
        </div>

        <p className="text-slate-600 mb-8 font-medium leading-relaxed">
          Responda 4 perguntas e veja qual certificado do Corpo de Bombeiros sua edificação precisa.
          Baseado nas IT-01 e IT-02 do CBPMESP (Decreto 69.118).
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
          {/* Ocupação */}
          <div className="md:col-span-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">
              Tipo de estabelecimento
            </label>
            <select
              value={occupationId}
              onChange={(e) => { setOccupationId(e.target.value); setSubmitted(false); }}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-medium focus:border-red-600 focus:outline-none transition-colors"
            >
              <option value="">— Selecione —</option>
              {OCCUPATIONS.map((occ) => (
                <option key={occ.id} value={occ.id}>{occ.label}</option>
              ))}
            </select>
            {occupation && (
              <p className="text-xs text-slate-500 mt-1.5 italic">Exemplos: {occupation.examples}</p>
            )}
          </div>

          {/* Area */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">
              Área construída (m²)
            </label>
            <input
              type="number"
              min={1}
              max={50000}
              value={area}
              onChange={(e) => { setArea(Number(e.target.value) || 0); setSubmitted(false); }}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-bold focus:border-red-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Pavimentos */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">
              N° de pavimentos
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={floors}
              onChange={(e) => { setFloors(Number(e.target.value) || 1); setSubmitted(false); }}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-bold focus:border-red-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Lotacao */}
          <div className="md:col-span-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">
              Lotação máxima esperada (pessoas)
            </label>
            <input
              type="number"
              min={1}
              max={5000}
              value={capacity}
              onChange={(e) => { setCapacity(Number(e.target.value) || 1); setSubmitted(false); }}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-bold focus:border-red-600 focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={!occupation}
            className="md:col-span-2 mt-2 bg-red-600 hover:bg-red-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-black uppercase tracking-tight py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Ver recomendação
          </button>
        </form>

        {/* Resultado */}
        {submitted && result && (
          <div
            className={`mt-8 p-6 md:p-8 rounded-3xl border-2 ${
              result.type === "CLCB"
                ? "bg-green-50 border-green-300"
                : result.type === "AVCB_OBRIGATORIO"
                ? "bg-amber-50 border-amber-300"
                : "bg-blue-50 border-blue-300"
            }`}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-4">
              {result.type === "CLCB" ? (
                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              ) : result.type === "AVCB_OBRIGATORIO" ? (
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              ) : (
                <Info className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              )}
              <div className="flex-1">
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${
                  result.type === "CLCB" ? "text-green-700" : result.type === "AVCB_OBRIGATORIO" ? "text-amber-700" : "text-blue-700"
                }`}>
                  Resultado
                </p>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic mb-3">
                  {result.title}
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium mb-5">
                  {result.reason}
                </p>
                <Link
                  href={result.ctaHref}
                  className="inline-flex items-center gap-2 bg-slate-950 hover:bg-red-600 text-white font-black uppercase tracking-tight px-6 py-3 rounded-xl transition-all text-sm"
                >
                  {result.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 italic leading-relaxed border-t border-slate-200 pt-4">
              ⚠️ Resultado orientativo. O enquadramento definitivo depende de avaliação técnica do projeto pelo
              engenheiro responsável + análise do CBPMESP. Para diagnóstico gratuito sem compromisso,{" "}
              <Link href="/contato" className="text-red-600 font-bold underline">fale com a DRD2</Link>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
