import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/diferenca-avcb-ptotep"];

export const metadata = generatePtotepMetadata(page);

export default function DiferencaAvcbPtotepPage() {
  return <PtotepSeoLanding page={page} />;
}
