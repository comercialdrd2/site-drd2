import MergedTopicSection from "@/components/MergedTopicSection";
import { trechosEtapa2 } from "@/data/fusaoEtapa2";

/**
 * Trecho que recebe o texto útil das páginas de alvará, laudo e renovação que
 * entraram nesta página na etapa 2 da fusão (19/10/2026). O id do trecho
 * (#alvara-laudos-renovacao) permite que links internos levem direto a ele.
 */
export default function FusaoEtapa2Trecho({ slug }: { slug: string }) {
  const trecho = trechosEtapa2[slug];
  if (!trecho) return null;
  return <MergedTopicSection {...trecho} tone="slate" />;
}
