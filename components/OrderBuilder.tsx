"use client";

import { useEffect, useMemo, useState } from "react";
import type { Cart, Catalog, Customer, OrderLine } from "../types";
import { formatPrice, normalize } from "../lib/format";
import { buildOrderMessage, whatsappLink } from "../lib/whatsapp";
import { CategoryFilter } from "./CategoryFilter";
import { CustomerForm } from "./CustomerForm";
import { MobileOrderBar } from "./MobileOrderBar";
import { OrderSummary } from "./OrderSummary";
import { ProductRow } from "./ProductRow";
import { SearchBar } from "./SearchBar";
import { StateMessage } from "./StateMessage";
import { WhatsAppButton } from "./WhatsAppButton";

const STORAGE_KEY = "pedido";
const EMPTY_CUSTOMER: Customer = { nombre: "", entrega: "domicilio", direccion: "", notas: "" };

export function OrderBuilder({ catalog }: { catalog: Catalog }) {
  const { config, products } = catalog;
  const [cart, setCart] = useState<Cart>({});
  const [customer, setCustomer] = useState<Customer>(EMPTY_CUSTOMER);
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Recupera el pedido en curso si el cliente recarga la página.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
      if (saved?.cart) setCart(saved.cart);
      if (saved?.customer) setCustomer({ ...EMPTY_CUSTOMER, ...saved.customer });
    } catch {
      /* sin datos guardados */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, customer }));
    } catch {
      /* sin almacenamiento: el pedido sigue funcionando en esta sesión */
    }
  }, [cart, customer, loaded]);

  const setQty = (id: string, qty: number) =>
    setCart((current) => {
      const next = { ...current };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(qty, 99);
      return next;
    });

  const categories = useMemo(() => [...new Set(products.map((p) => p.categoria))], [products]);

  const visible = useMemo(() => {
    const q = normalize(query);
    return products.filter(
      (p) =>
        (category === "Todos" || p.categoria === category) &&
        (!q || normalize(`${p.nombre} ${p.descripcion} ${p.categoria}`).includes(q)),
    );
  }, [products, category, query]);

  const lines: OrderLine[] = useMemo(
    () =>
      products
        .filter((p) => (cart[p.id] ?? 0) > 0 && p.disponible && p.precio !== null)
        .map((p) => ({ product: p, qty: cart[p.id], subtotal: cart[p.id] * (p.precio ?? 0) })),
    [products, cart],
  );

  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.subtotal, 0);
  const domicilio = customer.entrega === "domicilio";
  const envio = domicilio ? config.costoDomicilio : 0;
  const total = subtotal + envio;

  const problem = !config.whatsapp
    ? "Falta configurar el WhatsApp del negocio."
    : lines.length === 0
      ? "Agrega al menos un producto."
      : config.pedidoMinimo > 0 && subtotal < config.pedidoMinimo
        ? `El pedido mínimo es ${formatPrice(config.pedidoMinimo, config.moneda)}.`
        : !customer.nombre.trim()
          ? "Escribe tu nombre."
          : domicilio && !customer.direccion.trim()
            ? "Escribe la dirección de entrega."
            : null;

  const href = problem
    ? "#"
    : whatsappLink(config.whatsapp, buildOrderMessage({ config, customer, lines, subtotal, envio, total }));

  const clearOrder = () => {
    setCart({});
    setCustomer((c) => ({ ...c, notas: "" }));
  };

  return (
    <>
      <div className="sticky top-0 z-(--z-sticky) border-b border-border bg-background/90 backdrop-blur">
        <div className="satcore-container flex flex-col gap-3 py-4 md:flex-row md:items-center md:gap-6">
          <div className="md:w-72 md:shrink-0">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <div className="min-w-0 flex-1">
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
          </div>
        </div>
      </div>

      <main className="satcore-container grid gap-8 py-8 pb-28 lg:grid-cols-[minmax(0,1fr)_24rem] lg:pb-8">
        <section aria-label="Productos">
          {products.length === 0 ? (
            <StateMessage
              title="Aún no hay productos"
              detail='Agrega filas en la hoja "Productos" de data/pedidos.xlsx y recarga la página.'
            />
          ) : visible.length === 0 ? (
            <StateMessage title="Sin resultados" detail="Prueba con otra palabra o elige otra categoría." />
          ) : (
            <ul className="flex flex-col gap-3">
              {visible.map((product) => (
                <li key={product.id}>
                  <ProductRow
                    product={product}
                    currency={config.moneda}
                    qty={cart[product.id] ?? 0}
                    onChange={(qty) => setQty(product.id, qty)}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>

        <aside id="pedido" className="scroll-mt-24 self-start lg:sticky lg:top-28">
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-xl! font-bold! tracking-normal!">Tu pedido</h2>
              {count > 0 && (
                <button
                  type="button"
                  onClick={clearOrder}
                  className="text-sm text-text-muted underline underline-offset-2 hover:text-danger"
                >
                  Vaciar
                </button>
              )}
            </div>

            <div className="mt-3">
              <OrderSummary
                lines={lines}
                currency={config.moneda}
                subtotal={subtotal}
                envio={envio}
                showEnvio={domicilio}
                total={total}
                onRemove={(id) => setQty(id, 0)}
              />
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <CustomerForm customer={customer} onChange={setCustomer} />
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <WhatsAppButton href={href} label="Enviar pedido por WhatsApp" disabled={problem !== null} />
              {problem && (
                <p className="text-center text-sm text-text-muted" role="status">
                  {problem}
                </p>
              )}
            </div>
          </div>
        </aside>
      </main>

      <MobileOrderBar count={count} total={total} currency={config.moneda} />
    </>
  );
}
