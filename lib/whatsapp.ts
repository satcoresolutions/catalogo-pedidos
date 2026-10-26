import type { Customer, OrderConfig, OrderLine } from "../types";
import { formatPrice } from "./format";

/** Arma el enlace de WhatsApp. El número va con indicativo, solo dígitos (ej. 573001234567). */
export function whatsappLink(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

interface MessageInput {
  config: OrderConfig;
  customer: Customer;
  lines: OrderLine[];
  subtotal: number;
  envio: number;
  total: number;
}

/** Texto del pedido tal como le llega al negocio por WhatsApp. */
export function buildOrderMessage({ config, customer, lines, subtotal, envio, total }: MessageInput): string {
  const money = (n: number) => formatPrice(n, config.moneda);
  const out: string[] = [config.mensaje, "", `*Cliente:* ${customer.nombre.trim()}`];

  if (customer.entrega === "domicilio") {
    out.push(`*Entrega:* Domicilio a ${customer.direccion.trim()}`);
  } else {
    out.push("*Entrega:* Recoger en el local");
  }

  out.push("", "*Pedido*");
  for (const { product, qty, subtotal: lineTotal } of lines) {
    out.push(`• ${qty} x ${product.nombre} — ${money(lineTotal)}`);
  }

  out.push("", `Subtotal: ${money(subtotal)}`);
  if (customer.entrega === "domicilio") {
    out.push(`Domicilio: ${envio > 0 ? money(envio) : "Sin costo"}`);
  }
  out.push(`*Total: ${money(total)}*`);

  if (customer.notas.trim()) out.push("", `*Notas:* ${customer.notas.trim()}`);
  return out.join("\n");
}
