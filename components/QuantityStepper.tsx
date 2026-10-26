interface Props {
  value: number;
  onChange: (value: number) => void;
  name: string;
  max?: number;
}

const btn =
  "grid size-9 place-items-center rounded-full border border-border-strong bg-background text-lg font-semibold leading-none transition-colors hover:border-primary disabled:opacity-40 dark:hover:border-secondary";

export function QuantityStepper({ value, onChange, name, max = 99 }: Props) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label={`Cantidad de ${name}`}>
      <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= 0} aria-label={`Quitar uno de ${name}`}>
        −
      </button>
      <span className="w-6 text-center font-semibold tabular-nums" aria-live="polite">
        {value}
      </span>
      <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`Agregar uno de ${name}`}>
        +
      </button>
    </div>
  );
}
