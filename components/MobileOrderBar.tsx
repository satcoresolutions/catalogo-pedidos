import { formatPrice } from "../lib/format";

interface Props {
  count: number;
  total: number;
  currency: string;
}

/** Barra fija en móvil: lleva al resumen del pedido. */
export function MobileOrderBar({ count, total, currency }: Props) {
  if (count === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-(--z-fixed) border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
      <a
        href="#pedido"
        className="flex items-center justify-between rounded-full bg-primary px-5 py-3 font-semibold text-white dark:bg-secondary dark:text-black-soft"
      >
        <span>Ver pedido ({count})</span>
        <span className="tabular-nums">{formatPrice(total, currency)}</span>
      </a>
    </div>
  );
}
