import Image from "next/image";

type BlogAuthorEvidenceProps = {
  published?: string;
  updated?: string;
  variant?: "byline" | "full";
};

export default function BlogAuthorEvidence({
  published,
  updated = "2026-05-04",
  variant = "full",
}: BlogAuthorEvidenceProps) {
  const dateText = [
    published ? `Publicado em ${published}` : "",
    updated ? `Atualizado em ${updated}` : "",
  ].filter(Boolean).join(" | ");

  if (variant === "byline") {
    return (
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
          <Image
            src="/images/eng-samuel-oficial.webp"
            alt="Eng. Samuel Costa, responsavel técnico da DRD2 Engenharia, CREA-SP 5070163570"
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-tight text-slate-900">
            Por Samuel Costa, Engenheiro Civil e Engenheiro de Segurança do Trabalho
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-red-700">
            <a
              href="https://www.creasp.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:underline"
              title="Verificar registro CREA-SP 5070163570 no site oficial do conselho"
            >
              CREA-SP 5070163570
            </a>
            {" | Responsavel técnico da DRD2 Engenharia"}
          </p>
          {dateText && <p className="mt-1 text-xs font-semibold text-slate-500">{dateText}</p>}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col sm:flex-row gap-6 rounded-3xl bg-slate-50 border border-slate-200 p-6 shadow-sm">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-md">
            <Image
              src="/images/eng-samuel-oficial.webp"
              alt="Eng. Samuel Costa, responsavel técnico da DRD2 Engenharia, CREA-SP 5070163570"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div>
            <p className="text-red-700 text-[10px] font-black uppercase tracking-[0.25em] mb-2">
              Autoria técnica e responsabilidade profissional
            </p>
            <h2 className="text-2xl font-black text-slate-950 uppercase italic tracking-tight leading-none">
              Por Samuel Costa, Engenheiro Civil e Engenheiro de Segurança do Trabalho
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-widest text-slate-700">
              <a
                href="https://www.creasp.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 hover:underline focus:underline"
                title="Verificar registro CREA-SP 5070163570 no site oficial do conselho"
              >
                CREA-SP 5070163570
              </a>
              {" | Responsavel técnico da DRD2 Engenharia"}
            </p>
            {dateText && <p className="mt-2 text-sm font-semibold text-slate-500">{dateText}</p>}
            <p className="mt-4 text-slate-600 font-medium leading-relaxed">
              Conteudo revisado com foco em AVCB, CLCB, laudos, projetos de incêndio e regularização junto ao Corpo de Bombeiros em São Paulo. A orientação considera pratica de engenharia, exigencias do CBPMESP e rotina de aprovação de edificações comerciais, residenciais coletivas e industriais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
