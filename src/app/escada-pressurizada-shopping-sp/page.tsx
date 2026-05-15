import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada para Shopping em São Paulo | DRD2 Engenharia";
const description = "Escada pressurizada para shopping center em São Paulo. Projeto, laudo e regularização de escada enclausurada pressurizada em shoppings e centros comerciais para AVCB e Corpo de Bombeiros.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-shopping-sp",
  },
};

export default function EscadaPressurizadaShoppingPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-shopping-sp"
      title={title}
      description={description}
      h1="Escada Pressurizada para Shopping em São Paulo"
      eyebrow="Pressurização de escada em shoppings e centros comerciais"
      intro="Projeto, laudo e regularização de escada enclausurada pressurizada para shopping centers e centros comerciais em São Paulo — adequação técnica e aprovação do AVCB no Corpo de Bombeiros."
      intent="principal"
    />
  );
}
