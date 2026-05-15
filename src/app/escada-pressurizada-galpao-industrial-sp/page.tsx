import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada para Galpão Industrial em São Paulo | DRD2";
const description = "Escada pressurizada para galpão industrial em São Paulo. Projeto, laudo e regularização de pressurização de escada em galpões, centros de distribuição e indústrias para AVCB.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-galpao-industrial-sp",
  },
};

export default function EscadaPressurizadaGalpaoIndustrialPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-galpao-industrial-sp"
      title={title}
      description={description}
      h1="Escada Pressurizada para Galpão Industrial em São Paulo"
      eyebrow="Pressurização de escada em galpões e indústrias"
      intro="Projeto, laudo e adequação de escada pressurizada para galpões industriais, centros de distribuição e indústrias em São Paulo — regularização técnica para aprovação do AVCB no Corpo de Bombeiros."
      intent="principal"
    />
  );
}
