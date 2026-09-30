// Compartilhado entre a página do post (noindex) e o sitemap (exclusão).
// Posts thin (<300 palavras) marcados como noindex enquanto nao sao expandidos.
// Listagem aqui para fácil revisão — remover slug daqui = volta a indexar.
// Reavaliar a cada expansão de conteúdo.
export const NOINDEX_BLOG_SLUGS = new Set<string>([
  "avcb-para-casa-de-repouso-sao-paulo", // 168 palavras — duplicate de pagina de servico
  "vistoria-bombeiros-porta-corta-fogo", // 270 palavras — expandir antes de indexar
  "avcb-para-pousada-exigencias-e-como-regularizar", // 290 — duplicate de servico
  "embargo-corpo-de-bombeiros-como-resolver", // 295 — expandir
  "seguro-predial-sem-avcb-o-que-acontece-em-sinistro", // 297 — expandir
]);
