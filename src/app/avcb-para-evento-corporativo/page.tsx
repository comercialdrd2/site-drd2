import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/avcb-para-evento-corporativo"];

export const metadata = generatePtotepMetadata(page);

export default function AvcbParaEventoCorporativoPage() {
  return <PtotepSeoLanding page={page} />;
}
