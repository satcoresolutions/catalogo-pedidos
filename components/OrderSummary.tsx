import type { OrderLine } from "../types";
import { formatPrice } from "../lib/format";

interface Props {
  lines: OrderLine[];
  currency: string;
  subtotal: number;
  envio: number;
  showEnvio: boolean;
  total: number;
  onRemove: (id: string) => void;
}

export function OrderSummary({ lines, currency, subtotal, envio, showEnvio, total, onRemove }: Props) {
  const money = (n: number) => formatPrice(n, currency);

  if (lines.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border-strong p-4 text-sm text-text-muted">
        Tu pedido está vacío. Usa el botón + en los productos para agregarlos.
      </p>
    );
  }

  return (
    <div>
      <ul className="divide-y divide-border">
        {lines.map(({ product, qty, subtotal: lineTotal }) => (
          <li key={product.id} className="flex items-start justify-between gap-3 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">
                {qty} × {product.nombre}
              </p>
              <button
                type="button"
                onClick={() => onRemove(product.id)}
                className="text-xs text-text-muted underline underline-offset-2 hover:text-danger"
              >
                Quitar
              </button>
            </div>
            <p className="shrink-0 text-sm font-semibold tabular-nums">{money(lineTotal)}</p>
          </li>
        ))}
      </ul>

      <dl className="mt-3 space-y-1 border-t border-border pt-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-text-muted">Subtotal</dt>
          <dd className="tabular-nums">{money(subtotal)}</dd>
        </div>
        {showEnvio && (
          <div className="flex justify-between">
            <dt className="text-text-muted">Domicilio</dt>
            <dd className="tabular-nums">{envio > 0 ? money(envio) : "Sin costo"}</dd>
          </div>
        )}
        <div className="flex justify-between pt-2 text-lg font-bold text-text-primary">
          <dt>Total</dt>
          <dd className="tabular-nums">{money(total)}</dd>
        </div>
      </dl>
    </div>
  );
}
