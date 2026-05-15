import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Quanto Custa Escada Pressurizada em São Paulo | DRD2 Engenharia";
const description = "Quanto custa projeto de escada pressurizada em São Paulo? Saiba os fatores que influenciam o preço: altura do prédio, pavimentos, tipo de ocupação, ventilador e regularização para AVCB.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/quanto-custa-escada-pressurizada-sp",
  },
};

export default function QuantoCustaEscadaPressurizadaPage() {
  return (
    <PressurizedStairsLanding
      slug="/quanto-custa-escada-pressurizada-sp"
      title={title}
      description={description}
      h1="Quanto Custa Escada Pressurizada em São Paulo?"
      eyebrow="Custo de projeto e instalação de escada pressurizada"
      intro="O preço do projeto de escada pressurizada em São Paulo depende da altura da edificação, número de pavimentos, tipo de ocupação e condição do sistema existente. Solicite avaliação técnica gratuita."
      intent="projeto"
    />
  );
}
