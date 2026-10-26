
import "server-only";

import type { Catalog, OrderConfig, Product } from "../types";
import { normalize, parsePrice } from "./format";

const EXCEL_URL = process.env.GOOGLE_DRIVE_EXCEL_URL;

const DEFAULT_CONFIG: OrderConfig = {
  negocio: "Haz tu pedido",
  eslogan: "",
  whatsapp: "",
  moneda: "COP",
  mensaje: "Hola, quiero hacer el siguiente pedido:",
  costoDomicilio: 0,
  pedidoMinimo: 0,
};

type Row = unknown[];

interface ExcelSheet {
  sheet: string;
  data: Row[];
}

function sheetByName(sheets: ExcelSheet[], name: string) {
  return sheets.find((sheet) => normalize(sheet.sheet) === normalize(name));
}

function toText(value: unknown): string {
  return value === null || value === undefined ? "" : String(value).trim();
}

function parseConfig(data: Row[] | undefined): OrderConfig {
  const config = { ...DEFAULT_CONFIG };

  for (const row of data ?? []) {
    const key = normalize(row[0]);
    const value = toText(row[1]);

    if (!value) continue;

    if (key === "negocio") config.negocio = value;
    else if (key === "eslogan") config.eslogan = value;
    else if (key === "whatsapp") config.whatsapp = value;
    else if (key === "moneda") config.moneda = value.toUpperCase();
    else if (key === "mensaje") config.mensaje = value;
    else if (key === "costo_domicilio") {
      config.costoDomicilio = parsePrice(row[1]) ?? 0;
    } else if (key === "pedido_minimo") {
      config.pedidoMinimo = parsePrice(row[1]) ?? 0;
    }
  }

  return config;
}

function parseProducts(data: Row[] | undefined): Product[] {
  if (!data || data.length < 2) return [];

  const headers = data[0].map(normalize);
  const col = (name: string) => headers.indexOf(name);

  const idx = {
    nombre: col("nombre"),
    categoria: col("categoria"),
    descripcion: col("descripcion"),
    precio: col("precio"),
    foto: col("foto"),
    disponible: col("disponible"),
  };

  if (idx.nombre === -1) {
    throw new Error('La hoja "Productos" necesita una columna llamada "Nombre".');
  }

  const get = (row: Row, index: number) =>
    index === -1 ? undefined : row[index];

  return data
    .slice(1)
    .filter((row) => toText(get(row, idx.nombre)))
    .map((row) => {
      const disponible = normalize(get(row, idx.disponible));

      return {
        id: toText(get(row, idx.nombre)),
        nombre: toText(get(row, idx.nombre)),
        categoria: toText(get(row, idx.categoria)) || "General",
        descripcion: toText(get(row, idx.descripcion)),
        precio: parsePrice(get(row, idx.precio)),
        foto: toText(get(row, idx.foto)),
        disponible: !["no", "0", "false", "agotado"].includes(disponible),
      };
    });
}

/**
 * Lee el Excel alojado en Google Drive.
 * El archivo debe estar disponible para descarga desde el servidor.
 * Hojas esperadas: "Productos" y "Configuracion".
 */
export async function loadCatalog(): Promise<Catalog> {
  if (!EXCEL_URL) {
    throw new Error(
      "Falta configurar GOOGLE_DRIVE_EXCEL_URL en las variables de entorno.",
    );
  }

  let response: Response;

  try {
    response = await fetch(EXCEL_URL, {
      cache: "no-store",
    });
  } catch {
    throw new Error("No se pudo conectar con el archivo de Excel en Google Drive.");
  }

  if (!response.ok) {
    throw new Error(
      `No se pudo descargar el Excel de Google Drive (HTTP ${response.status}).`,
    );
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (
    contentType.includes("text/html") &&
    !EXCEL_URL.includes("export=download")
  ) {
    throw new Error(
      "Google Drive devolvió una página HTML en lugar del Excel. Verifica el enlace de descarga y los permisos del archivo.",
    );
  }

  const { default: readExcelFile } = await import("read-excel-file/node");

  let sheets: ExcelSheet[];

  try {
    const buffer = Buffer.from(await response.arrayBuffer());
    sheets = (await readExcelFile(buffer)) as ExcelSheet[];
  } catch {
    throw new Error(
      "No se pudo interpretar el archivo descargado. Comprueba que sea un Excel válido (.xlsx).",
    );
  }

  const productsSheet = sheetByName(sheets, "Productos") ?? sheets[0];

  if (!productsSheet) {
    throw new Error('El Excel no contiene una hoja llamada "Productos".');
  }

  return {
    config: parseConfig(sheetByName(sheets, "Configuracion")?.data),
    products: parseProducts(productsSheet.data),
  };
}
