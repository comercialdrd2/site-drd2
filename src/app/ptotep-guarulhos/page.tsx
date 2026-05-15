import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-guarulhos"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepGuarulhosPage() {
  return <PtotepSeoLanding page={page} />;
}
