import Link from "next/link";
import { tiposDeImovel } from "@/data/hubImoveis";

// Liga entre si todas as páginas do mesmo tipo de imóvel (AVCB, renovação,
// laudo, alvará, projeto, sistemas...). Sem isso, páginas como "renovação de
// AVCB para hospital" ficavam sem links vindos das páginas irmãs que o Google
// já mostra, e acabavam fora do índice.

const nomeCurto: Record<string, string> = {
  "Condomínios": "condomínio",
  "Galpões, indústrias e centros de distribuição": "galpão e indústria",
  "Hospitais, clínicas e consultórios": "hospital e clínica",
  "Escolas e creches": "escola e creche",
  "Hotéis, pousadas e hostels": "hotel e pousada",
  "Supermercados": "supermercado",
  "Shoppings": "shopping",
  "Escritórios e edifícios comerciais": "escritório e edifício comercial",
  "Bares, restaurantes e padarias": "bar e restaurante",
  "Igrejas": "igreja",
  "Academias": "academia",
  "Salões de festas": "salão de festas",
  "Casas noturnas e boates": "casa noturna e boate",
  "Farmácias e drogarias": "farmácia e drogaria",
  "Casas de repouso": "casa de repouso",
  "Clínicas veterinárias": "clínica veterinária",
  "Motéis": "motel",
  "Postos de combustível": "posto de combustível",
  "Estacionamentos": "estacionamento",
};

function textoDoLink(label: string, tipo: string) {
  const [servico, detalhe] = label.split(" — ");
  return `${servico} para ${detalhe ?? nomeCurto[tipo] ?? tipo.toLowerCase()}`;
}

export default function OcupacaoServicosLinks({ currentSlug }: { currentSlug: string }) {
  const slug = currentSlug.replace(/\/$/, "");
  const grupo = tiposDeImovel.find((g) => g.links.some((l) => l.href === slug));
  if (!grupo) return null;
  const outros = grupo.links.filter((l) => l.href !== slug);
  if (outros.length === 0) return null;

  return (
    <section aria-labelledby="ocupacao-servicos-titulo" className="py-14 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="ocupacao-servicos-titulo" className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
          Outros serviços para {nomeCurto[grupo.tipo] ?? grupo.tipo.toLowerCase()}
        </h2>
        <p className="text-slate-600 mb-8 max-w-3xl">
          Do projeto à renovação: tudo o que o Corpo de Bombeiros costuma exigir deste tipo de imóvel, com o mesmo
          engenheiro responsável.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {outros.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block h-full border border-slate-200 rounded-xl p-4 font-bold text-slate-800 hover:border-red-500 hover:text-red-700 transition-colors"
              >
                {textoDoLink(link.label, grupo.tipo)}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link href="/avcb-por-tipo-de-imovel" className="text-red-700 font-bold underline">
            Ver todos os tipos de imóvel
          </Link>
        </p>
      </div>
    </section>
  );
}
