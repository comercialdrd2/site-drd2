import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Laudo de Escada Pressurizada em São Paulo | DRD2 Engenharia";
const description = "Laudo técnico de escada pressurizada em São Paulo com ART. Avaliação de sistema de pressurização, ventilador, vazão, pressão, dutos e regularização para AVCB e Corpo de Bombeiros.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/laudo-escada-pressurizada-sp",
  },
};

export default function LaudoEscadaPressurizadaPage() {
  return (
    <PressurizedStairsLanding
      slug="/laudo-escada-pressurizada-sp"
      title={title}
      description={description}
      h1="Laudo de Escada Pressurizada em São Paulo"
      eyebrow="Laudo técnico com ART para escada pressurizada"
      intro="Laudo técnico de escada pressurizada com ART em São Paulo — avaliação completa do sistema de pressurização, ventilador, dutos, grelhas, testes de vazão e pressão para regularização e AVCB."
      intent="projeto"
    />
  );
}
