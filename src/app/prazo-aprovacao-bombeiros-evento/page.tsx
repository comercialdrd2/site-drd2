import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/prazo-aprovacao-bombeiros-evento"];

export const metadata = generatePtotepMetadata(page);

export default function PrazoAprovacaoBombeirosEventoPage() {
  return <PtotepSeoLanding page={page} />;
}
