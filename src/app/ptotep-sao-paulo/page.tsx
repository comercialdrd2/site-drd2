import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-sao-paulo"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepSaoPauloPage() {
  return <PtotepSeoLanding page={page} />;
}
