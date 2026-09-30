import React from "react";

interface SocialProofProps {
  className?: string;
}

const stats = [
  { value: "+2.500", label: "Projetos Aprovados" },
  { value: "98%", label: "Aprovação na 1ª Análise" },
  { value: "+15 anos", label: "Experiência Técnica" },
  { value: "5★", label: "Avaliação no Google" },
];

export default function SocialProof({ className = "" }: SocialProofProps) {
  return (
    <section
      className={`py-16 bg-slate-50 border-y border-slate-200 ${className}`}
      aria-label="Números da DRD2 Engenharia"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-slate-900 leading-none">
                {stat.value}
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
