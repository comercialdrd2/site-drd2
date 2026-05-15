import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/avcb-para-show"];

export const metadata = generatePtotepMetadata(page);

export default function AvcbParaShowPage() {
  return <PtotepSeoLanding page={page} />;
}
