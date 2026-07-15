import LocalNeighborhoodSeoLanding, { localNeighborhoodMetadata } from "@/components/LocalNeighborhoodSeoLanding";
import { getLocalNeighborhood } from "@/data/localNeighborhoodSeoPages";
const neighborhood = getLocalNeighborhood("vila-mariana")!;
export const metadata = localNeighborhoodMetadata(neighborhood, "clcb");
export default function Page() { return <LocalNeighborhoodSeoLanding neighborhood={neighborhood} mode="clcb" />; }
