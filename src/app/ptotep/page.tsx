import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepPage() {
  return <PtotepSeoLanding page={page} />;
}
