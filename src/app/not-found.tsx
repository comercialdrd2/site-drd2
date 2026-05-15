import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Página não encontrada | DRD2 Engenharia",
  description: "A página que você procura não existe. Navegue pelo site da DRD2 Engenharia para encontrar informações sobre AVCB, CLCB e segurança contra incêndio.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <ShieldCheck className="w-16 h-16 text-primary opacity-30" />
        </div>
        <h1 className="text-6xl font-black text-secondary mb-4">404</h1>
        <p className="text-xl font-bold text-gray-600 mb-2">Página não encontrada</p>
        <p className="text-gray-500 mb-10">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Voltar para o início
          </Link>
          <Link
            href="/avcb-sao-paulo"
            className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold px-6 py-3 rounded-xl hover:bg-secondary hover:text-white transition"
          >
            AVCB em São Paulo
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-600 font-bold px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition"
          >
            Falar com engenheiro
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold text-primary">
          <Link href="/renovacao-avcb" className="hover:underline">Renovação de AVCB</Link>
          <Link href="/clcb-sao-paulo" className="hover:underline">CLCB</Link>
          <Link href="/blog" className="hover:underline">Blog técnico</Link>
          <Link href="/sobre" className="hover:underline">Sobre a DRD2</Link>
        </div>
      </div>
    </div>
  );
}
