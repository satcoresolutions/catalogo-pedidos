/** Si la foto es solo un nombre de archivo, se busca en public/fotos/. */
export function photoUrl(foto: string): string {
  if (!foto) return "";
  if (/^(https?:)?\/\//i.test(foto) || foto.startsWith("data:")) return foto;
  return `/fotos/${encodeURIComponent(foto)}`;
}
