
import "server-only";

import type { Catalog, OrderConfig, Product } from "../types";
import { normalize, parsePrice } from "./format";

const PRODUCTS_CSV_URL = process.env.GOOGLE_SHEETS_PRODUCTOS_CSV_URL;
const CONFIG_CSV_URL = process.env.GOOGLE_SHEETS_CONFIGURACION_CSV_URL;

const DEFAULT_CONFIG: OrderConfig = {
  negocio: "Haz tu pedido",
  eslogan: "",
  whatsapp: "",
  moneda: "COP",
  mensaje: "Hola, quiero hacer el siguiente pedido:",
  costoDomicilio: 0,
  pedidoMinimo: 0,
};

type Row = string[];

/**
 * Convierte texto CSV en filas y columnas.
 * Admite comas, saltos de línea y comillas escapadas
 * dentro de los campos.
 */
function parseCSV(csv: string): Row[] {
  const rows: Row[] = [];
  let row: string[] = [];
  let field = "";
  let insideQuotes = false;

  const input = csv.replace(/^\uFEFF/, "");

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const next = input[i + 1];

    if (char === '"') {
      if (insideQuotes && next === '"') {
        field += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      row.push(field);
      field = "";
    } else if (
      (char === "\n" || char === "\r") &&
      !insideQuotes
    ) {
      if (char === "\r" && next === "\n") i++;

      row.push(field);

      if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
      }

      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field !== "" || row.length > 0) {
    row.push(field);

    if (row.some((value) => value.trim() !== "")) {
      rows.push(row);
    }
  }

  if (insideQuotes) {
    throw new Error("El CSV contiene un campo con comillas sin cerrar.");
  }

  return rows;
}

function toText(value: unknown): string {
  return value === null || value === undefined
    ? ""
    : String(value).trim();
}

async function fetchCSV(url: string | undefined, name: string): Promise<Row[]> {
  if (!url) {
    throw new Error(
      `Falta configurar la variable de entorno para la hoja "${name}".`,
    );
  }

  let response: Response;

  try {
    response = await fetch(url, { cache: "no-store" });
  } catch {
    throw new Error(`No se pudo conectar con la hoja "${name}".`);
  }

  if (!response.ok) {
    throw new Error(
      `No se pudo leer la hoja "${name}" (HTTP ${response.status}).`,
    );
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("text/html")) {
    throw new Error(
      `La URL de "${name}" devolvió HTML en lugar de CSV. Comprueba que la hoja esté publicada como CSV y que copiaste la URL correcta.`,
    );
  }

  const csv = await response.text();

  if (!csv.trim()) {
    throw new Error(`La hoja "${name}" está vacía o no contiene datos.`);
  }

  return parseCSV(csv);
}

function parseConfig(data: Row[]): OrderConfig {
  const config = { ...DEFAULT_CONFIG };

  for (const row of data) {
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

function parseProducts(data: Row[]): Product[] {
  if (data.length < 2) return [];

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
    throw new Error(
      'La hoja "Productos" necesita una columna llamada "Nombre".',
    );
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
        disponible: !["no", "0", "false", "agotado"].includes(
          disponible,
        ),
      };
    });
}

/**
 * Lee los productos y la configuración desde dos hojas
 * publicadas como CSV en Google Sheets.
 */
export async function loadCatalog(): Promise<Catalog> {
  const [productsData, configData] = await Promise.all([
    fetchCSV(PRODUCTS_CSV_URL, "Productos"),
    fetchCSV(CONFIG_CSV_URL, "Configuracion"),
  ]);

  return {
    config: parseConfig(configData),
    products: parseProducts(productsData),
  };
}
