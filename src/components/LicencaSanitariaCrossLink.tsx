import Link from "next/link";

// Liga as páginas de AVCB / alvará / laudo do Corpo de Bombeiros às páginas de
// licença sanitária do mesmo tipo de imóvel (subdomínio licencasanitaria.drd2.com.br).
// O mesmo cliente quase sempre precisa das duas licenças.

type CrossLink = { href: string; label: string };
type Entry = { tipo: string; links: CrossLink[] };

const CLINICA: Entry = {
  tipo: "clínicas e consultórios",
  links: [
    { href: "https://licencasanitaria.drd2.com.br/clinica-medica", label: "Licença sanitária para clínica médica" },
    { href: "https://licencasanitaria.drd2.com.br/clinica-odontologica", label: "Licença sanitária para clínica odontológica" },
    { href: "https://licencasanitaria.drd2.com.br/dcff-declaracao-conformidade-fisico-funcional", label: "DCFF com ART para a vigilância sanitária" },
  ],
};
const HOSPITAL: Entry = {
  tipo: "hospitais-dia e clínicas",
  links: [
    { href: "https://licencasanitaria.drd2.com.br/hospital-dia-ambulatorio", label: "Licença sanitária para hospital-dia e ambulatório cirúrgico" },
    { href: "https://licencasanitaria.drd2.com.br/clinica-medica", label: "Licença sanitária para clínica médica" },
    { href: "https://licencasanitaria.drd2.com.br/cevs-cadastro-estadual-vigilancia-sanitaria", label: "Hospital geral: quando a licença é estadual (CEVS)" },
  ],
};
const FARMACIA: Entry = {
  tipo: "farmácias e drogarias",
  links: [
    { href: "https://licencasanitaria.drd2.com.br/farmacia-drogaria", label: "Licença sanitária para farmácia e drogaria" },
    { href: "https://licencasanitaria.drd2.com.br/afe-farmacia-drogaria", label: "AFE da Anvisa para farmácia" },
  ],
};
const RESTAURANTE: Entry = {
  tipo: "restaurantes e bares",
  links: [
    { href: "https://licencasanitaria.drd2.com.br/restaurante", label: "Licença sanitária para restaurante e lanchonete" },
    { href: "https://licencasanitaria.drd2.com.br/delivery-dark-kitchen", label: "Licença sanitária para delivery e dark kitchen" },
  ],
};
const PADARIA: Entry = {
  tipo: "padarias",
  links: [{ href: "https://licencasanitaria.drd2.com.br/padaria-confeitaria", label: "Licença sanitária para padaria e confeitaria" }],
};
const MERCADO: Entry = {
  tipo: "supermercados",
  links: [{ href: "https://licencasanitaria.drd2.com.br/mercado-acougue", label: "Licença sanitária para mercado, supermercado e açougue" }],
};
const CRECHE: Entry = {
  tipo: "creches",
  links: [{ href: "https://licencasanitaria.drd2.com.br/creche", label: "Licença sanitária para creche e berçário" }],
};
const REPOUSO: Entry = {
  tipo: "casas de repouso",
  links: [{ href: "https://licencasanitaria.drd2.com.br/casa-de-repouso", label: "Licença sanitária para casa de repouso (ILPI)" }],
};
const VETERINARIA: Entry = {
  tipo: "clínicas veterinárias",
  links: [{ href: "https://licencasanitaria.drd2.com.br/clinica-veterinaria", label: "Licença sanitária para clínica e hospital veterinário" }],
};
const ACADEMIA: Entry = {
  tipo: "academias com piscina",
  links: [{ href: "https://licencasanitaria.drd2.com.br/academia-piscina", label: "Licença sanitária para academia, clube e escola com piscina" }],
};
const GALPAO: Entry = {
  tipo: "galpões de indústria e distribuição",
  links: [
    { href: "https://licencasanitaria.drd2.com.br/industria-alimentos", label: "Licença sanitária para indústria de alimentos" },
    { href: "https://licencasanitaria.drd2.com.br/distribuidora-medicamentos", label: "Licença sanitária para distribuidora de medicamentos" },
    { href: "https://licencasanitaria.drd2.com.br/armazem-deposito", label: "Licença sanitária para armazém e depósito de terceiros" },
  ],
};

const MAP: Record<string, Entry> = {
  "/avcb-consultorios-medicos-odontologicos-sao-paulo": CLINICA,
  "/alvara-bombeiro-consultorio-medico-sao-paulo": CLINICA,
  "/laudo-bombeiro-consultorio-medico-sao-paulo": CLINICA,
  "/laudo-sprinkler-clinica-sao-paulo": CLINICA,
  "/avcb-hospital-clinica-sao-paulo": HOSPITAL,
  "/alvara-bombeiro-hospital-clinica-sao-paulo": HOSPITAL,
  "/laudo-bombeiro-hospital-clinica-sao-paulo": HOSPITAL,
  "/avcb-farmacia-drogaria-sao-paulo": FARMACIA,
  "/renovacao-avcb-farmacia-drogaria-sao-paulo": FARMACIA,
  "/avcb-restaurante-sao-paulo": RESTAURANTE,
  "/laudo-bombeiro-bar-restaurante-sao-paulo": RESTAURANTE,
  "/renovacao-avcb-restaurante-sao-paulo": RESTAURANTE,
  "/avcb-para-padaria-sao-paulo": PADARIA,
  "/alvara-bombeiro-padaria-sao-paulo": PADARIA,
  "/laudo-bombeiro-padaria-sao-paulo": PADARIA,
  "/avcb-supermercado-sao-paulo": MERCADO,
  "/alvara-bombeiro-supermercado-sao-paulo": MERCADO,
  "/renovacao-avcb-supermercado-sao-paulo": MERCADO,
  "/avcb-para-creche-sao-paulo": CRECHE,
  "/alvara-bombeiro-creche-sao-paulo": CRECHE,
  "/laudo-bombeiro-creche-sao-paulo": CRECHE,
  "/avcb-para-casa-de-repouso-sao-paulo": REPOUSO,
  "/alvara-bombeiro-casa-de-repouso-sao-paulo": REPOUSO,
  "/laudo-bombeiro-casa-de-repouso-sao-paulo": REPOUSO,
  "/renovacao-avcb-casa-de-repouso-sao-paulo": REPOUSO,
  "/avcb-clinica-hospital-veterinario-sao-paulo": VETERINARIA,
  "/avcb-para-academia-sao-paulo": ACADEMIA,
  "/alvara-bombeiro-academia-sao-paulo": ACADEMIA,
  "/renovacao-avcb-academia-sao-paulo": ACADEMIA,
  "/avcb-galpao-industrial-sao-paulo": GALPAO,
  "/alvara-bombeiro-galpao-industrial-sao-paulo": GALPAO,
  "/laudo-bombeiro-galpao-industrial-sao-paulo": GALPAO,
};

export default function LicencaSanitariaCrossLink({ route }: { route: string }) {
  const entry = MAP[route];
  if (!entry) return null;
  return (
    <section className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700 mb-2">Mesmo imóvel, outra licença</p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            Além do AVCB, {entry.tipo} precisam de licença sanitária
          </h2>
          <p className="text-slate-600 mb-6 max-w-3xl">
            Na cidade de São Paulo, a licença sanitária segue a Portaria SMS 266/2025 e, em muitas atividades, exige a DCFF com ART de
            engenheiro. Fazemos o AVCB e a licença sanitária com a mesma equipe, num plano de adequação único.
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {entry.links.map((l) => (
              <li key={l.href}>
                <Link
                  prefetch={false}
                  href={l.href}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-800 hover:border-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>{l.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
