import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada para Condomínio em São Paulo | DRD2 Engenharia";
const description = "Escada pressurizada para condomínio em São Paulo. Projeto, laudo, adequação e regularização de escada enclausurada pressurizada para AVCB de condomínios residenciais.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-condominio-sp",
  },
};

export default function EscadaPressurizadaCondominioPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-condominio-sp"
      title={title}
      description={description}
      h1="Escada Pressurizada para Condomínio em São Paulo"
      eyebrow="Pressurização de escada em condomínios residenciais"
      intro="Projeto, laudo e regularização de escada enclausurada pressurizada para condomínios verticais em São Paulo — do dimensionamento técnico à aprovação no Corpo de Bombeiros para o AVCB."
      intent="principal"
    />
  );
}
