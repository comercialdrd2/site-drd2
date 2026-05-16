import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Solicitação Recebida | DRD2 Engenharia",
  description: "Sua solicitação foi recebida com sucesso. Nossa equipe retornará em até 2 horas.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/obrigado" },
};

export default function ObrigadoPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5511942232969";
  const waText = encodeURIComponent(
    "Olá! Acabei de enviar uma solicitação pelo site e quero confirmar o recebimento."
  );

  return (
    <main className="min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg: bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full mx-auto text-center py-24">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-green-500/10 border-2 border-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.9]">
          Solicitação{" "}
          <span className="text-green-400 not-italic">Recebida!</span>
        </h1>

        <p className="text-xl text-slate-300 mb-4 font-medium leading-relaxed">
          Nossa equipe de engenharia analisará o seu caso e{" "}
          <strong className="text-white">retornará em até 2 horas úteis</strong> com
          um diagnóstico técnico detalhado.
        </p>

        <p className="text-slate-400 text-sm mb-12 font-medium">
          Prefere agilizar? Fale diretamente pelo WhatsApp:
        </p>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${waNumber}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-black px-10 py-5 rounded-2xl text-xl transition-all shadow-2xl shadow-green-500/25 hover:scale-105 mb-12"
        >
          <Phone className="w-6 h-6" />
          Falar no WhatsApp Agora
        </a>

        {/* Differentials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "🏆", text: "98% de aprovação na 1ª análise" },
            { icon: "📋", text: "Proposta técnica detalhada" },
            { icon: "🔒", text: "Seus dados estão protegidos" },
          ].map((item) => (
            <div
              key={item.text}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <p className="text-slate-300 text-xs font-bold uppercase tracking-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Back home */}
        <Link
          href="/"
          className="text-slate-500 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors border-b border-slate-600 hover:border-white pb-0.5"
        >
          ← Voltar para o site
        </Link>
      </div>
    </main>
  );
}
