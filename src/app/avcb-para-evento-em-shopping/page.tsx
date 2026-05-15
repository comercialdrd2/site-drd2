import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/avcb-para-evento-em-shopping"];

export const metadata = generatePtotepMetadata(page);

export default function AvcbParaEventoEmShoppingPage() {
  return <PtotepSeoLanding page={page} />;
}
