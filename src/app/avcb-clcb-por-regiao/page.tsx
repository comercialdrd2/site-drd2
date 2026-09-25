import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { regioesAtendidas } from "@/data/hubRegioes";

const titulo = "AVCB e CLCB por região: bairros e cidades atendidos";
const descricao =
  "Encontre a página de AVCB, renovação de AVCB e renovação de CLCB do seu bairro ou cidade: capital, Grande São Paulo, ABC, litoral e interior. Atendimento com engenheiro responsável.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: "/avcb-clcb-por-regiao" },
  openGraph: { url: "/avcb-clcb-por-regiao", title: titulo, description: descricao },
};

export default function AvcbPorRegiaoPage() {
  const totalLocais = regioesAtendidas.reduce((n, g) => n + g.locais.length, 0);

  return (
    <>
      <section className="bg-slate-950 text-white pt-[92px] pb-12 lg:pt-[112px] lg:pb-16 border-b-8 border-red-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" /> Regiões atendidas
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
            AVCB e CLCB por região
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            A DRD2 Engenharia atende {totalLocais} bairros e cidades a partir da capital paulista. Escolha a sua região
            para ver como funciona a emissão ou a renovação do AVCB e do CLCB no seu endereço.
          </p>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "AVCB e CLCB por região" }]} dark />

      <nav aria-label="Regiões" className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl py-3 flex flex-wrap gap-2">
          {regioesAtendidas.map((grupo) => (
            <a
              key={grupo.regiao}
              href={`#${slugDaRegiao(grupo.regiao)}`}
              className="text-xs font-bold uppercase tracking-tight px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-red-500 hover:text-red-700"
            >
              {grupo.regiao}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl py-14 space-y-16">
          {regioesAtendidas.map((grupo) => (
            <section key={grupo.regiao} id={slugDaRegiao(grupo.regiao)} className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-l-4 border-red-600 pl-4 mb-4">
                {grupo.regiao}
              </h2>
              {grupo.paginasDaRegiao.length > 0 && (
                <p className="text-slate-600 mb-6">
                  Visão geral da região:{" "}
                  {grupo.paginasDaRegiao.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && " · "}
                      <Link href={p.href} className="font-bold text-red-700 underline">
                        {p.label}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {grupo.locais.map((local) => (
                  <article key={local.nome} className="bg-white border border-slate-200 rounded-2xl p-5">
                    <h3 className="font-black text-slate-900 mb-3">{local.nome}</h3>
                    <ul className="space-y-1.5 text-sm">
                      {local.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="text-slate-700 hover:text-red-700 hover:underline">
                            {link.label} em {local.nome}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Não encontrou o seu bairro?</h2>
          <p className="text-slate-600 mb-8">
            Atendemos também outros endereços na capital e na Grande São Paulo. Envie o endereço, a atividade e a
            metragem do imóvel que o engenheiro retorna com o caminho certo para o seu caso.
          </p>
          <CtaWhatsApp label="Falar com engenheiro" variant="primary" centered />
        </div>
      </section>
    </>
  );
}

function slugDaRegiao(regiao: string) {
  return regiao
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
