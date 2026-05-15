import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Manutenção de Escada Pressurizada em São Paulo | DRD2 Engenharia";
const description = "Manutenção de escada pressurizada em São Paulo. Inspeção, teste de vazão e pressão, laudo técnico, ART e regularização de sistema de pressurização de escada para renovação do AVCB.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/manutencao-escada-pressurizada-sp",
  },
};

export default function ManutencaoEscadaPressurizadaPage() {
  return (
    <PressurizedStairsLanding
      slug="/manutencao-escada-pressurizada-sp"
      title={title}
      description={description}
      h1="Manutenção de Escada Pressurizada em São Paulo"
      eyebrow="Inspeção, teste e laudo de escada pressurizada"
      intro="Manutenção preventiva e corretiva de escada pressurizada em São Paulo — inspeção do ventilador, dutos, grelhas, portas corta-fogo, teste de vazão e pressão, laudo técnico e ART para renovação do AVCB."
      intent="regularizacao"
    />
  );
}
