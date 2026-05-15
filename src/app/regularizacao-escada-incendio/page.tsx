import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Regularização de Escada de Incêndio para AVCB | São Paulo";
const description = "Regularização de escada de incêndio para AVCB em São Paulo. Adequação de escada pressurizada, rota de fuga, portas corta-fogo, laudo e exigências dos Bombeiros.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/regularizacao-escada-incendio",
  },
};

export default function RegularizacaoEscadaIncendioPage() {
  return (
    <PressurizedStairsLanding
      slug="/regularizacao-escada-incendio"
      title={title}
      description={description}
      h1="Regularização de Escada de Incêndio para AVCB"
      eyebrow="Adequação e exigência dos Bombeiros"
      intro="Diagnóstico e regularização de escada de emergência, escada enclausurada pressurizada, portas corta-fogo, rotas de fuga e documentação técnica para AVCB."
      intent="regularizacao"
    />
  );
}
