import type { CatalogConfig, Product, Theme } from "./types";

export const DEFAULT_CATALOG_CONFIG: CatalogConfig = {
  negocio: "Mi catálogo",
  eslogan: "",
  whatsapp: "",
  moneda: "COP",
  mensaje: "Hola, me interesa {producto} ({precio}). ¿Está disponible?",
};

/** Moneda predeterminada del catálogo */
export const DEFAULT_CURRENCY = "COP";

/** Temas disponibles en la aplicación */
export const THEMES: Theme[] = ["light", "dark"];

/** Clave para guardar la preferencia de tema */
export const THEME_KEY = "satcore-catalogo-theme";

/** Claves de almacenamiento local propias del catálogo */
export const STORAGE_KEYS = {
  theme: THEME_KEY,
  catalog: "satcore:catalogo",
  settings: "satcore:configuracion-catalogo",
} as const;

/** Categoría utilizada cuando un producto no tiene categoría */
export const DEFAULT_CATEGORY = "General";

/** Formato de moneda para mostrar precios */
export function formatPrice(
  precio: number,
  moneda: string = DEFAULT_CURRENCY
): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: moneda,
    maximumFractionDigits: 2,
  }).format(precio);
}

/** Validación básica de disponibilidad */
export function isProductAvailable(product: Product): boolean {
  return product.disponible;
}

/** Clases reutilizables de la interfaz */
export { ui } from "./ui";