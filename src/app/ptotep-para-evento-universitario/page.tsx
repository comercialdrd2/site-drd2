import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-para-evento-universitario"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepParaEventoUniversitarioPage() {
  return <PtotepSeoLanding page={page} />;
}
