import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Projeto de Escada Pressurizada para AVCB";
const description = "Projeto de escada pressurizada para AVCB com cálculo de vazão, pressão, ventilador, dutos, memorial, ART e suporte ao Corpo de Bombeiros em São Paulo.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/projeto-escada-pressurizada-avcb-sao-paulo",
  },
};

export default function ProjetoEscadaPressurizadaAvcbPage() {
  return (
    <PressurizedStairsLanding
      slug="/projeto-escada-pressurizada-avcb-sao-paulo"
      title={title}
      description={description}
      h1="Projeto de Escada Pressurizada para AVCB"
      eyebrow="Projeto técnico e memorial de cálculo"
      intro="Elaboração de projeto de pressurização de escadas para aprovação do AVCB, com dimensionamento técnico, memorial de cálculo, ART e suporte em exigências do Corpo de Bombeiros."
      intent="projeto"
    />
  );
}
