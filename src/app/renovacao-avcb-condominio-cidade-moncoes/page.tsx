import LocalNeighborhoodSeoLanding, { localNeighborhoodMetadata } from "@/components/LocalNeighborhoodSeoLanding";
import { getLocalNeighborhood } from "@/data/localNeighborhoodSeoPages";
const neighborhood = getLocalNeighborhood("cidade-moncoes")!;
export const metadata = localNeighborhoodMetadata(neighborhood, "condominio");
export default function Page() { return <LocalNeighborhoodSeoLanding neighborhood={neighborhood} mode="condominio" />; }
