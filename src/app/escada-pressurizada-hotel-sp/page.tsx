import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada para Hotel em São Paulo | DRD2 Engenharia";
const description = "Escada pressurizada para hotel em São Paulo. Projeto, laudo e regularização de escada enclausurada pressurizada para hotéis, flats e pousadas — aprovação no Corpo de Bombeiros para AVCB.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-hotel-sp",
  },
};

export default function EscadaPressurizadaHotelPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-hotel-sp"
      title={title}
      description={description}
      h1="Escada Pressurizada para Hotel em São Paulo"
      eyebrow="Pressurização de escada em hotéis e flats"
      intro="Projeto, laudo e adequação de escada pressurizada para hotéis, flats e pousadas em São Paulo — dimensionamento técnico, ART e regularização para aprovação do AVCB no Corpo de Bombeiros."
      intent="principal"
    />
  );
}
