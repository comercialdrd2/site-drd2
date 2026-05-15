import PressurizedStairsLanding from "@/components/PressurizedStairsLanding";

const title = "Escada Pressurizada para Hospital em São Paulo | DRD2 Engenharia";
const description = "Escada pressurizada para hospital e clínica em São Paulo. Projeto, laudo, adequação e regularização de escada enclausurada pressurizada para unidades de saúde — AVCB e Corpo de Bombeiros.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/escada-pressurizada-hospital-sp",
  },
};

export default function EscadaPressurizadaHospitalPage() {
  return (
    <PressurizedStairsLanding
      slug="/escada-pressurizada-hospital-sp"
      title={title}
      description={description}
      h1="Escada Pressurizada para Hospital em São Paulo"
      eyebrow="Pressurização de escada em hospitais e clínicas"
      intro="Projeto e regularização de escada enclausurada pressurizada para hospitais, clínicas e unidades de saúde em São Paulo — atendendo às exigências do Corpo de Bombeiros para AVCB em edificações de saúde."
      intent="principal"
    />
  );
}
