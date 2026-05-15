import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-santo-andre"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepSantoAndrePage() {
  return <PtotepSeoLanding page={page} />;
}
