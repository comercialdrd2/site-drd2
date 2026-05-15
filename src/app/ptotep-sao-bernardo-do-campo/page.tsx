import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-sao-bernardo-do-campo"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepSaoBernardoDoCampoPage() {
  return <PtotepSeoLanding page={page} />;
}
