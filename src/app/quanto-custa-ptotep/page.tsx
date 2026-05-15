import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/quanto-custa-ptotep"];

export const metadata = generatePtotepMetadata(page);

export default function QuantoCustaPtotepPage() {
  return <PtotepSeoLanding page={page} />;
}
