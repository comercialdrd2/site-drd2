import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada Obrigatória para AVCB em São Paulo | DRD2";
const description = "Quando a escada pressurizada é obrigatória para o AVCB em São Paulo? Entenda a exigência do Corpo de Bombeiros, as normas aplicáveis e como regularizar a escada enclausurada pressurizada.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-obrigatoria-avcb-sp",
  },
};

export default function EscadaPressurizadaObrigatoriaPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-obrigatoria-avcb-sp"
      title={title}
      description={description}
      h1="Escada Pressurizada Obrigatória para AVCB em São Paulo"
      eyebrow="Obrigatoriedade e exigência do Corpo de Bombeiros"
      intro="A escada pressurizada é obrigatória para determinadas edificações conforme as Instruções Técnicas do CBPMESP. Saiba quando é exigida, como regularizar e o que acontece se não tiver para o AVCB."
      intent="regularizacao"
    />
  );
}
