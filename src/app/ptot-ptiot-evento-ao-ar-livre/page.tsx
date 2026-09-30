import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptot-ptiot-evento-ao-ar-livre"];

export const metadata = generatePtotepMetadata(page);

export default function PtotPtiotEventoAoArLivrePage() {
  return <PtotepSeoLanding page={page} />;
}
