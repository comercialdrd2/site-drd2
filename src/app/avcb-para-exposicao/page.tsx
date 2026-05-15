import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/avcb-para-exposicao"];

export const metadata = generatePtotepMetadata(page);

export default function AvcbParaExposicaoPage() {
  return <PtotepSeoLanding page={page} />;
}
