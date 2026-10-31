// Subdomínio da seção DRD2 Licença Sanitária.
// As páginas ficam em src/app/licenca-sanitaria e são servidas no subdomínio pelo middleware.
export const LS_HOST = "licencasanitaria.drd2.com.br";
export const LS_ORIGIN = `https://${LS_HOST}`;
export const LS_PREFIX = "/licenca-sanitaria";

/** "/licenca-sanitaria/clinica-medica" -> "/clinica-medica"; "/licenca-sanitaria" -> "/" */
export function lsPublicPath(internalPath: string): string {
  if (internalPath === LS_PREFIX) return "/";
  if (internalPath.startsWith(LS_PREFIX + "/")) return internalPath.slice(LS_PREFIX.length);
  return internalPath;
}

/** No navegador, diz se estamos no subdomínio da licença sanitária. */
export function isLsHostClient(): boolean {
  return typeof window !== "undefined" && window.location.hostname === LS_HOST;
}
