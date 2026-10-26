import type { Customer, Delivery } from "../types";

interface Props {
  customer: Customer;
  onChange: (customer: Customer) => void;
}

const OPTIONS: { value: Delivery; label: string }[] = [
  { value: "domicilio", label: "Domicilio" },
  { value: "recoger", label: "Recoger en el local" },
];

export function CustomerForm({ customer, onChange }: Props) {
  const set = <K extends keyof Customer>(key: K, value: Customer[K]) => onChange({ ...customer, [key]: value });
  const label = "mb-1 block text-sm font-medium text-text-secondary";

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="nombre" className={label}>Tu nombre</label>
        <input
          id="nombre"
          type="text"
          autoComplete="name"
          value={customer.nombre}
          onChange={(e) => set("nombre", e.target.value)}
          className="px-4 py-3"
        />
      </div>

      <div>
        <span id="entrega-label" className={label}>¿Cómo lo recibes?</span>
        <div role="radiogroup" aria-labelledby="entrega-label" className="grid grid-cols-2 gap-2">
          {OPTIONS.map((option) => {
            const selected = customer.entrega === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => set("entrega", option.value)}
                className={`rounded-lg border px-3 py-3 text-sm font-medium transition-colors ${
                  selected
                    ? "border-primary bg-primary text-white dark:border-secondary dark:bg-secondary dark:text-black-soft"
                    : "border-border-strong bg-background text-text-secondary hover:border-primary dark:hover:border-secondary"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {customer.entrega === "domicilio" && (
        <div>
          <label htmlFor="direccion" className={label}>Dirección de entrega</label>
          <input
            id="direccion"
            type="text"
            autoComplete="street-address"
            value={customer.direccion}
            onChange={(e) => set("direccion", e.target.value)}
            placeholder="Calle, número, barrio"
            className="px-4 py-3"
          />
        </div>
      )}

      <div>
        <label htmlFor="notas" className={label}>Notas (opcional)</label>
        <textarea
          id="notas"
          rows={3}
          value={customer.notas}
          onChange={(e) => set("notas", e.target.value)}
          placeholder="Ej. sin azúcar, llamar al llegar"
          className="resize-none px-4 py-3"
        />
      </div>
    </div>
  );
}
