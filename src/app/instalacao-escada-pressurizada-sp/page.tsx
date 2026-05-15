import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Instalação de Escada Pressurizada em São Paulo | DRD2 Engenharia";
const description = "Instalação de escada pressurizada em São Paulo. Projeto, fornecimento e instalação de sistema de pressurização de escada enclausurada para AVCB, com ventilador, dutos, grelhas e ART.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/instalacao-escada-pressurizada-sp",
  },
};

export default function InstalacaoEscadaPressurizadaPage() {
  return (
    <PressurizedStairsLanding
      slug="/instalacao-escada-pressurizada-sp"
      title={title}
      description={description}
      h1="Instalação de Escada Pressurizada em São Paulo"
      eyebrow="Instalação completa de sistema de pressurização"
      intro="Instalação de escada pressurizada em São Paulo — projeto, fornecimento e instalação de ventilador, dutos, grelhas, dampers e casa de máquinas com ART e suporte completo para aprovação do AVCB."
      intent="principal"
    />
  );
}
