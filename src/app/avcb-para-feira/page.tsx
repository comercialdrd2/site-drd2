import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/avcb-para-feira"];

export const metadata = generatePtotepMetadata(page);

export default function AvcbParaFeiraPage() {
  return <PtotepSeoLanding page={page} />;
}
