export interface Product {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number | null;
  foto: string;
  disponible: boolean;
}

export interface OrderConfig {
  negocio: string;
  eslogan: string;
  whatsapp: string;
  moneda: string;
  /** Primera línea del mensaje de WhatsApp. */
  mensaje: string;
  costoDomicilio: number;
  pedidoMinimo: number;
}

export interface Catalog {
  config: OrderConfig;
  products: Product[];
}

export type Delivery = "domicilio" | "recoger";

export interface Customer {
  nombre: string;
  entrega: Delivery;
  direccion: string;
  notas: string;
}

/** Cantidad por producto: { [product.id]: cantidad } */
export type Cart = Record<string, number>;

export interface OrderLine {
  product: Product;
  qty: number;
  subtotal: number;
}
