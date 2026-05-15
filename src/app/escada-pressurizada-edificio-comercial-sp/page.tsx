import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada para Edifício Comercial em São Paulo | DRD2";
const description = "Escada pressurizada para edifício comercial em São Paulo. Projeto, laudo e regularização de pressurização de escada em torres corporativas, escritórios e prédios comerciais para AVCB.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-edificio-comercial-sp",
  },
};

export default function EscadaPressurizadaEdificioComercialPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-edificio-comercial-sp"
      title={title}
      description={description}
      h1="Escada Pressurizada para Edifício Comercial em São Paulo"
      eyebrow="Pressurização de escada em torres corporativas e comerciais"
      intro="Projeto, laudo e adequação de escada pressurizada para edifícios comerciais e torres corporativas em São Paulo — dimensionamento técnico completo para aprovação do AVCB junto ao Corpo de Bombeiros."
      intent="principal"
    />
  );
}
