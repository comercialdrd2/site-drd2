import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-para-evento-esportivo"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepParaEventoEsportivoPage() {
  return <PtotepSeoLanding page={page} />;
}
