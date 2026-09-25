import Link from "next/link";
import { Building2 } from "lucide-react";
import type { Metadata } from "next";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { tiposDeImovel } from "@/data/hubImoveis";

const titulo = "AVCB por tipo de imóvel: exigências para cada ocupação";
const descricao =
  "Condomínio, galpão, hospital, escola, hotel, restaurante, igreja e outros: veja o que o Corpo de Bombeiros exige para cada tipo de imóvel em São Paulo e fale com um engenheiro.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: "/avcb-por-tipo-de-imovel" },
  openGraph: { url: "/avcb-por-tipo-de-imovel", title: titulo, description: descricao },
};

export default function AvcbPorTipoDeImovelPage() {
  return (
    <>
      <section className="bg-slate-950 text-white pt-[92px] pb-12 lg:pt-[112px] lg:pb-16 border-b-8 border-red-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4" /> Tipos de imóvel
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
            AVCB por tipo de imóvel
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            O Corpo de Bombeiros enquadra cada imóvel pela ocupação, pela área e pelo risco. Por isso um galpão, uma
            escola e um restaurante seguem caminhos diferentes para tirar ou renovar o AVCB. Escolha o tipo do seu
            imóvel para ver as exigências e os serviços que se aplicam a ele.
          </p>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "AVCB por tipo de imóvel" }]} dark />

      <nav aria-label="Tipos de imóvel" className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl py-3 flex flex-wrap gap-2">
          {tiposDeImovel.map((grupo) => (
            <a
              key={grupo.tipo}
              href={`#${ancora(grupo.tipo)}`}
              className="text-xs font-bold uppercase tracking-tight px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-red-500 hover:text-red-700"
            >
              {grupo.tipo}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl py-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiposDeImovel.map((grupo) => (
            <section
              key={grupo.tipo}
              id={ancora(grupo.tipo)}
              className="scroll-mt-20 bg-white border border-slate-200 rounded-2xl p-6"
            >
              <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-red-600 pl-4 mb-4">
                {grupo.tipo}
              </h2>
              <ul className="space-y-1.5 text-sm">
                {grupo.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-700 hover:text-red-700 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Não sabe em qual caso o seu imóvel se encaixa?</h2>
          <p className="text-slate-600 mb-8">
            Envie a atividade, a metragem e o endereço. O engenheiro confirma se o caminho é CLCB, AVCB ou projeto
            técnico antes de qualquer protocolo.
          </p>
          <CtaWhatsApp label="Falar com engenheiro" variant="primary" centered />
        </div>
      </section>
    </>
  );
}

function ancora(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
