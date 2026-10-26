import type { Product } from "../types";
import { formatPrice } from "../lib/format";
import { ProductImage } from "./ProductImage";
import { QuantityStepper } from "./QuantityStepper";

interface Props {
  product: Product;
  currency: string;
  qty: number;
  onChange: (qty: number) => void;
}

export function ProductRow({ product, currency, qty, onChange }: Props) {
  const orderable = product.disponible && product.precio !== null;

  return (
    <article
      className={`flex gap-4 rounded-xl border bg-surface p-3 ${
        qty > 0 ? "border-primary dark:border-secondary" : "border-border"
      }`}
    >
      <div className="size-20 shrink-0 overflow-hidden rounded-lg sm:size-24">
        <ProductImage foto={product.foto} nombre={product.nombre} muted={!product.disponible} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
        <div>
          <h3 className="text-base! font-semibold! leading-snug! tracking-normal! text-foreground!">
            {product.nombre}
          </h3>
          {product.descripcion && (
            <p className="mt-1 line-clamp-2 text-sm text-text-muted">{product.descripcion}</p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-bold text-text-primary">{formatPrice(product.precio, currency)}</p>
          {orderable ? (
            <QuantityStepper value={qty} onChange={onChange} name={product.nombre} />
          ) : (
            <span className="rounded-full bg-surface-secondary px-3 py-1 text-xs font-semibold text-text-muted">
              {product.disponible ? "Consultar" : "Agotado"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
