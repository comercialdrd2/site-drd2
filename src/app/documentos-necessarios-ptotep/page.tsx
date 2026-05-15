import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/documentos-necessarios-ptotep"];

export const metadata = generatePtotepMetadata(page);

export default function DocumentosNecessariosPtotepPage() {
  return <PtotepSeoLanding page={page} />;
}
