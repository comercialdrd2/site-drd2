import LocalNeighborhoodSeoLanding, { localNeighborhoodMetadata } from "@/components/LocalNeighborhoodSeoLanding";
import { getLocalNeighborhood } from "@/data/localNeighborhoodSeoPages";
const neighborhood = getLocalNeighborhood("limao")!;
export const metadata = localNeighborhoodMetadata(neighborhood, "renovacao");
export default function Page() { return <LocalNeighborhoodSeoLanding neighborhood={neighborhood} mode="renovacao" />; }
