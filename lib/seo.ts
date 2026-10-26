
/** Configuración central de SEO. Define NEXT_PUBLIC_SITE_URL en producción. */

export const SITE = {
  name: "Catálogo Digital",
  brand: "SatCore Solutions",
  description:
    "Catálogo digital para mostrar productos, consultar precios y disponibilidad, y contactar directamente con el negocio por WhatsApp.",
  shortDescription:
    "Consulta productos, precios y disponibilidad desde un catálogo digital.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, ""),
  locale: "es_CO",
  language: "es-CO",
  themeColor: "#132a8e",
  keywords: [
    "catálogo digital",
    "catálogo de productos",
    "productos y precios",
    "catálogo para negocios",
    "catálogo digital para pequeños negocios",
    "productos por WhatsApp",
    "pedidos por WhatsApp",
    "disponibilidad de productos",
    "catálogo online",
    "SatCore Solutions",
    "PWA",
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
