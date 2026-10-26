interface Props {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: Props) {
  const all = ["Todos", ...categories];

  return (
    <div role="tablist" aria-label="Categorías" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
      {all.map((category) => {
        const selected = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              selected
                ? "border-primary bg-primary text-white dark:border-secondary dark:bg-secondary dark:text-black-soft"
                : "border-border-strong bg-background text-text-secondary hover:border-primary dark:hover:border-secondary"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
