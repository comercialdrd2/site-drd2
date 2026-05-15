import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-campinas"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepCampinasPage() {
  return <PtotepSeoLanding page={page} />;
}
