import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-para-evento-em-igreja"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepParaEventoEmIgrejaPage() {
  return <PtotepSeoLanding page={page} />;
}
