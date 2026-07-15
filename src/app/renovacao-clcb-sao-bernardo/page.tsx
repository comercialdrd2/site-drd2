import LocalNeighborhoodSeoLanding, { localNeighborhoodMetadata } from "@/components/LocalNeighborhoodSeoLanding";
import { getLocalNeighborhood } from "@/data/localNeighborhoodSeoPages";
const neighborhood = getLocalNeighborhood("sao-bernardo")!;
export const metadata = localNeighborhoodMetadata(neighborhood, "clcb-cidade");
export default function Page() { return <LocalNeighborhoodSeoLanding neighborhood={neighborhood} mode="clcb-cidade" />; }
