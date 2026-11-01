import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Páginas que entram no sitemap. Ao criar uma página nova (serviço ou artigo), inclua aqui.
const PAGINAS = [
  "/",
  "/servicos/",
  "/projetos/",
  "/orcamento/",
  "/politica-de-privacidade/",
  "/areas-atendidas/",
  "/blog/",
  "/blog/teste-de-percussao-em-fachada/",
  "/blog/pastilhas-caindo-da-fachada-o-que-fazer/",
  "/blog/infiltracao-volta-depois-da-pintura/",
  "/blog/reboco-da-fachada-soltando/",
  "/blog/como-aprovar-obra-de-fachada-em-assembleia/",
  "/blog/como-comparar-orcamentos-de-fachada/",
  "/blog/trinca-na-fachada-quando-se-preocupar/",
  "/servicos/pintura-predial/",
  "/servicos/pintura-de-fachada-de-condominio/",
  "/servicos/pintura-de-fachada-comercial/",
  "/servicos/aplicacao-de-textura-em-fachada/",
  "/servicos/recuperacao-de-fachada/",
  "/servicos/recuperacao-de-fachada-com-pastilhas/",
  "/servicos/lavagem-de-fachada/",
  "/servicos/impermeabilizacao-de-fachada/",
  "/servicos/tratamento-de-trincas-e-fissuras/",
  "/servicos/teste-de-percussao-e-arrancamento/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGINAS.map((p) => ({ url: SITE.url + p }));
}
