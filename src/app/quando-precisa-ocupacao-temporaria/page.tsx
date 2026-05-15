import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/quando-precisa-ocupacao-temporaria"];

export const metadata = generatePtotepMetadata(page);

export default function QuandoPrecisaOcupacaoTemporariaPage() {
  return <PtotepSeoLanding page={page} />;
}
