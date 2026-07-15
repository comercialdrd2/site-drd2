import LocalNeighborhoodSeoLanding, { localNeighborhoodMetadata } from "@/components/LocalNeighborhoodSeoLanding";
import { getLocalNeighborhood } from "@/data/localNeighborhoodSeoPages";
const neighborhood = getLocalNeighborhood("zona-oeste-sao-paulo")!;
export const metadata = localNeighborhoodMetadata(neighborhood, "avcb");
export default function Page() { return <LocalNeighborhoodSeoLanding neighborhood={neighborhood} mode="avcb" useRichData={false} />; }
