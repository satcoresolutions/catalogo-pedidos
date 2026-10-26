import { WhatsAppIcon } from "./WhatsAppIcon";

interface Props {
  href: string;
  label: string;
  disabled?: boolean;
  size?: "md" | "sm";
}

export function WhatsAppButton({ href, label, disabled = false, size = "md" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[box-shadow,transform] duration-[var(--transition-normal)]";
  const padding = size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-3 text-base w-full";

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${base} ${padding} cursor-not-allowed bg-surface-secondary text-text-muted`}
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${padding} bg-secondary text-black-soft hover:shadow-neon active:scale-[0.98]`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
