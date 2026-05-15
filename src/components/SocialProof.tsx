import React from "react";

interface SocialProofProps {
  className?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

const defaultTestimonial = {
  text: "A DRD2 resolveu a regularização do nosso condomínio em tempo recorde. Profissional, transparente e sem burocracia. O AVCB saiu antes do prazo previsto.",
  author: "Marcos Ferreira",
  role: "Síndico — Condomínio Vila Nova SP",
};

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-amber-400 fill-current"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const stats = [
  { value: "+2.500", label: "Projetos Aprovados" },
  { value: "98%", label: "Aprovação na 1ª Análise" },
  { value: "+15 anos", label: "Experiência Técnica" },
  { value: "5★", label: "Avaliação no Google" },
];

export default function SocialProof({
  className = "",
  testimonial = defaultTestimonial,
}: SocialProofProps) {
  return (
    <section
      className={`py-16 bg-slate-50 border-y border-slate-200 ${className}`}
      aria-label="Prova social e depoimentos"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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

        {/* Testimonial */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-6" aria-label="Avaliação 5 estrelas">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="ml-2 text-xs font-black uppercase tracking-widest text-amber-500">
              Google Reviews
            </span>
          </div>

          <blockquote>
            <p className="text-slate-700 text-lg font-medium leading-relaxed italic mb-6">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <cite className="not-italic font-black text-slate-900 text-sm uppercase tracking-tight">
                  {testimonial.author}
                </cite>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
