import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-urgente"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepUrgentePage() {
  return <PtotepSeoLanding page={page} />;
}
