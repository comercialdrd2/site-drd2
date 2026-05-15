import Link from "next/link";
import { FC } from "react";

interface NeighborhoodSiloProps {
  currentSlug: string;
}

// ── Bairros / regiões ────────────────────────────────────────────────────────

const REGIONS = {
  "zona-sul": [
    { name: "Avcb Zona Sul", slug: "/avcb-zona-sul" },
    { name: "Brooklin", slug: "/avcb-brooklin" },
    { name: "Campo Belo", slug: "/avcb-campo-belo" },
    { name: "Itaim Bibi", slug: "/avcb-itaim-bibi" },
    { name: "Jabaquara", slug: "/avcb-jabaquara" },
    { name: "Moema", slug: "/avcb-moema" },
    { name: "Morumbi", slug: "/avcb-morumbi" },
    { name: "Sacomã", slug: "/avcb-sacoma" },
    { name: "Santo Amaro", slug: "/avcb-santo-amaro" },
    { name: "Saúde", slug: "/avcb-saude" },
    { name: "Vila Mariana", slug: "/avcb-vila-mariana" },
    { name: "Vila Olímpia", slug: "/avcb-vila-olimpia" },
  ],
  "zona-leste": [
    { name: "Avcb Zona Leste", slug: "/avcb-zona-leste-sao-paulo" },
    { name: "Anália Franco", slug: "/avcb-analia-franco" },
    { name: "Aricanduva", slug: "/avcb-aricanduva" },
    { name: "Itaquera", slug: "/avcb-itaquera" },
    { name: "Mooca", slug: "/avcb-mooca" },
    { name: "Penha", slug: "/avcb-penha" },
    { name: "Tatuapé", slug: "/avcb-tatuape" },
    { name: "Vila Prudente", slug: "/avcb-vila-prudente" },
  ],
  "zona-norte": [
    { name: "Avcb Zona Norte", slug: "/avcb-zona-norte-sao-paulo" },
    { name: "Casa Verde", slug: "/avcb-casa-verde" },
    { name: "Jaçanã", slug: "/avcb-jacana" },
    { name: "Limão", slug: "/avcb-limao" },
    { name: "Santana", slug: "/avcb-santana" },
    { name: "Tucuruvi", slug: "/avcb-tucuruvi" },
  ],
  "zona-oeste": [
    { name: "Avcb Zona Oeste", slug: "/avcb-zona-oeste-sao-paulo" },
    { name: "Butantã", slug: "/avcb-butanta" },
    { name: "Lapa", slug: "/avcb-lapa" },
    { name: "Perdizes", slug: "/avcb-perdizes" },
    { name: "Pinheiros", slug: "/avcb-pinheiros" },
    { name: "Vila Leopoldina", slug: "/avcb-vila-leopoldina" },
    { name: "Vila Madalena", slug: "/avcb-vila-madalena" },
  ],
  "centro": [
    { name: "Centro SP", slug: "/avcb-centro-sao-paulo" },
    { name: "Bela Vista", slug: "/avcb-centro-bela-vista" },
    { name: "Ipiranga", slug: "/avcb-ipiranga" },
  ],
  "grande-sp": [
    { name: "Guarulhos", slug: "/avcb-guarulhos" },
    { name: "Osasco", slug: "/avcb-osasco" },
    { name: "Barueri (Alphaville)", slug: "/avcb-barueri-alphaville" },
  ],
  "abc-paulista": [
    { name: "Santo André", slug: "/avcb-santo-andre" },
    { name: "São Bernardo do Campo", slug: "/avcb-sao-bernardo" },
    { name: "São Caetano do Sul", slug: "/avcb-sao-caetano" },
  ],
};

// ── Páginas Álvará Bombeiro por segmento ─────────────────────────────────────

const ALVARA_PAGES = [
  { name: "Academia", slug: "/alvara-bombeiro-academia-sao-paulo" },
  { name: "Bar e Restaurante", slug: "/alvara-bombeiro-bar-restaurante-sao-paulo" },
  { name: "Casa de Repouso", slug: "/alvara-bombeiro-casa-de-repouso-sao-paulo" },
  { name: "Casa Noturna / Boate", slug: "/alvara-bombeiro-casa-noturna-boate-sao-paulo" },
  { name: "Condomínio", slug: "/alvara-bombeiro-condominio-sao-paulo" },
  { name: "Consultório Médico", slug: "/alvara-bombeiro-consultorio-medico-sao-paulo" },
  { name: "Creche", slug: "/alvara-bombeiro-creche-sao-paulo" },
  { name: "Escola e Faculdade", slug: "/alvara-bombeiro-escola-faculdade-sao-paulo" },
  { name: "Escritório", slug: "/alvara-bombeiro-escritorio-sao-paulo" },
  { name: "Farmácia e Drogaria", slug: "/alvara-bombeiro-farmacia-drogaria-sao-paulo" },
  { name: "Galpão Industrial", slug: "/alvara-bombeiro-galpao-industrial-sao-paulo" },
  { name: "Hospital e Clínica", slug: "/alvara-bombeiro-hospital-clinica-sao-paulo" },
  { name: "Hostel", slug: "/alvara-bombeiro-hostel-sao-paulo" },
  { name: "Hotel e Pousada", slug: "/alvara-bombeiro-hotel-pousada-sao-paulo" },
  { name: "Igreja", slug: "/alvara-bombeiro-igreja-sao-paulo" },
  { name: "Motel", slug: "/alvara-bombeiro-motel-sao-paulo" },
  { name: "Padaria", slug: "/alvara-bombeiro-padaria-sao-paulo" },
  { name: "Posto de Combustível", slug: "/alvara-bombeiro-posto-combustivel-sao-paulo" },
  { name: "Salão de Festas", slug: "/alvara-bombeiro-salao-de-festas-sao-paulo" },
  { name: "Shopping", slug: "/alvara-bombeiro-shopping-sao-paulo" },
  { name: "Supermercado", slug: "/alvara-bombeiro-supermercado-sao-paulo" },
];

// ── Páginas Renovação AVCB por segmento ──────────────────────────────────────

const RENOVACAO_PAGES = [
  { name: "Academia", slug: "/renovacao-avcb-academia-sao-paulo" },
  { name: "Bares e Restaurantes", slug: "/renovacao-avcb-bares-restaurantes-sao-paulo" },
  { name: "Casa de Repouso", slug: "/renovacao-avcb-casa-de-repouso-sao-paulo" },
  { name: "Casa Noturna / Boate", slug: "/renovacao-avcb-casa-noturna-boate-sao-paulo" },
  { name: "Condomínio", slug: "/renovacao-avcb-condominio-sao-paulo" },
  { name: "Consultório Médico", slug: "/renovacao-avcb-consultorio-medico-sao-paulo" },
  { name: "Creche", slug: "/renovacao-avcb-creche-sao-paulo" },
  { name: "Escola", slug: "/renovacao-avcb-escola-sao-paulo" },
  { name: "Escritório", slug: "/renovacao-avcb-escritorio-sao-paulo" },
  { name: "Farmácia e Drogaria", slug: "/renovacao-avcb-farmacia-drogaria-sao-paulo" },
  { name: "Galpão Industrial", slug: "/renovacao-avcb-galpao-industrial-sao-paulo" },
  { name: "Hospital e Clínica", slug: "/renovacao-avcb-hospital-clinica-sao-paulo" },
  { name: "Hostel", slug: "/renovacao-avcb-hostel-sao-paulo" },
  { name: "Hotel", slug: "/renovacao-avcb-hotel-sao-paulo" },
  { name: "Igreja", slug: "/renovacao-avcb-igreja-sao-paulo" },
  { name: "Motel", slug: "/renovacao-avcb-motel-sao-paulo" },
  { name: "Padaria", slug: "/renovacao-avcb-padaria-sao-paulo" },
  { name: "Posto de Combustível", slug: "/renovacao-avcb-posto-combustivel-sao-paulo" },
  { name: "Pousada", slug: "/renovacao-avcb-pousada-sao-paulo" },
  { name: "Restaurante", slug: "/renovacao-avcb-restaurante-sao-paulo" },
  { name: "Salão de Festas", slug: "/renovacao-avcb-salao-de-festas-sao-paulo" },
  { name: "Shopping", slug: "/renovacao-avcb-shopping-sao-paulo" },
  { name: "Supermercado", slug: "/renovacao-avcb-supermercado-sao-paulo" },
];

// ── Mapeamento cruzado álvará ↔ renovação ────────────────────────────────────

const CROSS_LINK: Record<string, { name: string; slug: string; label: string }> = {
  "/alvara-bombeiro-academia-sao-paulo": { name: "Renovação AVCB Academia SP", slug: "/renovacao-avcb-academia-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-bar-restaurante-sao-paulo": { name: "Renovação AVCB Bares e Rest. SP", slug: "/renovacao-avcb-bares-restaurantes-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-casa-de-repouso-sao-paulo": { name: "Renovação AVCB Casa de Repouso SP", slug: "/renovacao-avcb-casa-de-repouso-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-casa-noturna-boate-sao-paulo": { name: "Renovação AVCB Casa Noturna SP", slug: "/renovacao-avcb-casa-noturna-boate-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-condominio-sao-paulo": { name: "Renovação AVCB Condomínio SP", slug: "/renovacao-avcb-condominio-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-consultorio-medico-sao-paulo": { name: "Renovação AVCB Consultório SP", slug: "/renovacao-avcb-consultorio-medico-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-creche-sao-paulo": { name: "Renovação AVCB Creche SP", slug: "/renovacao-avcb-creche-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-escola-faculdade-sao-paulo": { name: "Renovação AVCB Escola SP", slug: "/renovacao-avcb-escola-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-escritorio-sao-paulo": { name: "Renovação AVCB Escritório SP", slug: "/renovacao-avcb-escritorio-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-farmacia-drogaria-sao-paulo": { name: "Renovação AVCB Farmácia SP", slug: "/renovacao-avcb-farmacia-drogaria-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-galpao-industrial-sao-paulo": { name: "Renovação AVCB Galpão SP", slug: "/renovacao-avcb-galpao-industrial-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-hospital-clinica-sao-paulo": { name: "Renovação AVCB Hospital SP", slug: "/renovacao-avcb-hospital-clinica-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-hostel-sao-paulo": { name: "Renovação AVCB Hostel SP", slug: "/renovacao-avcb-hostel-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-hotel-pousada-sao-paulo": { name: "Renovação AVCB Hotel SP", slug: "/renovacao-avcb-hotel-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-igreja-sao-paulo": { name: "Renovação AVCB Igreja SP", slug: "/renovacao-avcb-igreja-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-motel-sao-paulo": { name: "Renovação AVCB Motel SP", slug: "/renovacao-avcb-motel-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-padaria-sao-paulo": { name: "Renovação AVCB Padaria SP", slug: "/renovacao-avcb-padaria-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-posto-combustivel-sao-paulo": { name: "Renovação AVCB Posto SP", slug: "/renovacao-avcb-posto-combustivel-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-salao-de-festas-sao-paulo": { name: "Renovação AVCB Salão de Festas SP", slug: "/renovacao-avcb-salao-de-festas-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-shopping-sao-paulo": { name: "Renovação AVCB Shopping SP", slug: "/renovacao-avcb-shopping-sao-paulo", label: "Renovar AVCB" },
  "/alvara-bombeiro-supermercado-sao-paulo": { name: "Renovação AVCB Supermercado SP", slug: "/renovacao-avcb-supermercado-sao-paulo", label: "Renovar AVCB" },
  // Renovação → Álvará
  "/renovacao-avcb-academia-sao-paulo": { name: "Alvará Bombeiro Academia SP", slug: "/alvara-bombeiro-academia-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-bares-restaurantes-sao-paulo": { name: "Alvará Bombeiro Bar e Rest. SP", slug: "/alvara-bombeiro-bar-restaurante-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-casa-de-repouso-sao-paulo": { name: "Alvará Bombeiro Casa de Repouso SP", slug: "/alvara-bombeiro-casa-de-repouso-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-casa-noturna-boate-sao-paulo": { name: "Alvará Bombeiro Casa Noturna SP", slug: "/alvara-bombeiro-casa-noturna-boate-sao-paulo", label: "Obter Álvará" },
  "/renovacao-avcb-condominio-sao-paulo": { name: "Alvará Bombeiro Condomínio SP", slug: "/alvara-bombeiro-condominio-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-consultorio-medico-sao-paulo": { name: "Alvará Bombeiro Consultório SP", slug: "/alvara-bombeiro-consultorio-medico-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-creche-sao-paulo": { name: "Alvará Bombeiro Creche SP", slug: "/alvara-bombeiro-creche-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-escola-sao-paulo": { name: "Álvará Bombeiro Escola/Faculdade SP", slug: "/alvara-bombeiro-escola-faculdade-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-escritorio-sao-paulo": { name: "Alvará Bombeiro Escritório SP", slug: "/alvara-bombeiro-escritorio-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-farmacia-drogaria-sao-paulo": { name: "Alvará Bombeiro Farmácia SP", slug: "/alvara-bombeiro-farmacia-drogaria-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-galpao-industrial-sao-paulo": { name: "Álvará Bombeiro Galpão SP", slug: "/alvara-bombeiro-galpao-industrial-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-hospital-clinica-sao-paulo": { name: "Alvará Bombeiro Hospital SP", slug: "/alvara-bombeiro-hospital-clinica-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-hostel-sao-paulo": { name: "Alvará Bombeiro Hostel SP", slug: "/alvara-bombeiro-hostel-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-hotel-sao-paulo": { name: "Álvará Bombeiro Hotel e Pousada SP", slug: "/alvara-bombeiro-hotel-pousada-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-igreja-sao-paulo": { name: "Alvará Bombeiro Igreja SP", slug: "/alvara-bombeiro-igreja-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-motel-sao-paulo": { name: "Álvará Bombeiro Motel SP", slug: "/alvara-bombeiro-motel-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-padaria-sao-paulo": { name: "Alvará Bombeiro Padaria SP", slug: "/alvara-bombeiro-padaria-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-posto-combustivel-sao-paulo": { name: "Álvará Bombeiro Posto SP", slug: "/alvara-bombeiro-posto-combustivel-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-pousada-sao-paulo": { name: "Álvará Bombeiro Hotel e Pousada SP", slug: "/alvara-bombeiro-hotel-pousada-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-restaurante-sao-paulo": { name: "Álvará Bombeiro Bar/Rest. SP", slug: "/alvara-bombeiro-bar-restaurante-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-salao-de-festas-sao-paulo": { name: "Álvará Bombeiro Salão de Festas SP", slug: "/alvara-bombeiro-salao-de-festas-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-shopping-sao-paulo": { name: "Álvará Bombeiro Shopping SP", slug: "/alvara-bombeiro-shopping-sao-paulo", label: "Obter Alvará" },
  "/renovacao-avcb-supermercado-sao-paulo": { name: "Álvará Bombeiro Supermercado SP", slug: "/alvara-bombeiro-supermercado-sao-paulo", label: "Obter Alvará" },
};

// ── Seleção estável (sem Math.random) ────────────────────────────────────────

function pickRelated(
  list: { name: string; slug: string }[],
  currentSlug: string,
  count = 12
): { name: string; slug: string }[] {
  const filtered = list.filter((p) => p.slug !== currentSlug);
  const idx = list.findIndex((p) => p.slug === currentSlug);
  // rotate list so current page's neighbors come first — deterministic, SSR-safe
  const start = idx >= 0 ? idx % filtered.length : 0;
  const rotated = [...filtered.slice(start), ...filtered.slice(0, start)];
  return rotated.slice(0, count);
}

// ── Componente ────────────────────────────────────────────────────────────────

const NeighborhoodSilo: FC<NeighborhoodSiloProps> = ({ currentSlug }) => {
  const isAlvara = currentSlug.startsWith("/alvara-bombeiro-");
  const isRenovacao = currentSlug.startsWith("/renovacao-avcb-");

  // ── Service pages: álvará ou renovação ──────────────────────────────────────
  if (isAlvara || isRenovacao) {
    const sourceList = isAlvara ? ALVARA_PAGES : RENOVACAO_PAGES;
    const related = pickRelated(sourceList, currentSlug, 12);
    const crossLink = CROSS_LINK[currentSlug] ?? null;
    const sectionLabel = isAlvara
      ? "Álvará do Bombeiro para Outros Segmentos:"
      : "Renovação de AVCB para Outros Segmentos:";

    return (
      <div className="mt-12 pt-12 border-t border-slate-200 flex flex-col items-center gap-6">
        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
          {sectionLabel}
        </span>
        <div className="flex flex-wrap justify-center gap-8">
          {related.map((link) => (
            <Link
              key={link.slug}
              href={link.slug}
              className="text-[11px] font-black uppercase text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-3">➔</span>
              {link.name}
            </Link>
          ))}
        </div>
        {crossLink && (
          <div className="mt-2">
            <Link
              href={crossLink.slug}
              className="text-[11px] font-black uppercase text-red-500 hover:text-red-700 transition-colors border border-red-200 px-3 py-1 rounded-full hover:border-red-400"
            >
              {crossLink.label}: {crossLink.name}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // ── Regional pages: bairros ──────────────────────────────────────────────────
  let activeRegion: keyof typeof REGIONS | null = null;
  for (const [region, locations] of Object.entries(REGIONS)) {
    if (locations.some((loc) => loc.slug === currentSlug || currentSlug.startsWith(loc.slug))) {
      activeRegion = region as keyof typeof REGIONS;
      break;
    }
  }

  if (!activeRegion) return null;

  const filteredLinks = REGIONS[activeRegion].filter((loc) => loc.slug !== currentSlug);
  const displayLinks = filteredLinks.slice(0, 12);

  if (displayLinks.length === 0) return null;

  return (
    <div className="mt-12 pt-12 border-t border-slate-200 flex flex-col items-center">
      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">
        Veja também na Região:
      </span>
      <div className="flex flex-wrap justify-center gap-8">
        {displayLinks.map((link) => (
          <Link
            key={link.slug}
            href={link.slug}
            className="text-[11px] font-black uppercase text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-3">➔</span>
            {link.name}
          </Link>
        ))}
      </div>
      {/* Botão para concentrar Link Juice na página Hub e incentivar o clique */}
      <div className="mt-8">
        <Link
          href="/avcb-sao-paulo"
          className="text-[12px] font-black uppercase text-red-600 hover:text-white transition-colors border-2 border-red-200 hover:bg-red-600 px-6 py-3 rounded-full hover:border-red-600 shadow-sm inline-flex items-center gap-2"
        >
          Ver Todos os Bairros da Grande SP ➔
        </Link>
      </div>
    </div>
  );
};

export default NeighborhoodSilo;
