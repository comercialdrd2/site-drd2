import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-santos-baixada"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepSantosBaixadaPage() {
  return <PtotepSeoLanding page={page} />;
}
