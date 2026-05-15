import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada em São Paulo | Projeto, Laudo e AVCB";
const description = "Escada pressurizada em São Paulo para condomínios, prédios comerciais, hotéis e hospitais. Projeto, sistema de pressurização, laudo, ART e regularização para AVCB.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-sao-paulo",
  },
};

export default function EscadaPressurizadaSaoPauloPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-sao-paulo"
      title={title}
      description={description}
      h1="Escada Pressurizada em São Paulo"
      eyebrow="Sistema de pressurização para AVCB"
      intro="Projeto, laudo, adequação e regularização de escada pressurizada para prédios em São Paulo, com foco em segurança da rota de fuga e aprovação no Corpo de Bombeiros."
      intent="principal"
    />
  );
}
