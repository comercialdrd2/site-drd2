import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-sao-caetano-do-sul"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepSaoCaetanoDoSulPage() {
  return <PtotepSeoLanding page={page} />;
}
