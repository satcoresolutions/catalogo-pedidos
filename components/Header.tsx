import Image from "next/image";
import type { CatalogConfig } from "../lib/types";

import InstallPWAButton from "./InstallPWAButton";
import ThemeToggle from "./ThemeToggle";
import { WhatsAppButton } from "./WhatsAppButton";
import { whatsappLink } from "../lib/whatsapp";

interface HeaderProps {
  config: CatalogConfig;
}

export default function Header({ config }: HeaderProps) {
  return (
    <header className="sticky top-0 z-1100 border-b border-border bg-background/90 backdrop-blur print:hidden">
      <div className="satcore-container flex flex-wrap items-center justify-between gap-4 py-3 sm:py-4">
        {/* Identidad */}
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo de SatCore Solutions"
            width={200}
            height={65}
            priority
            className="h-auto w-32 shrink-0 object-contain sm:w-40"
          />

          <div className="hidden min-w-0 leading-tight sm:block">
            <h1 className="truncate text-base font-bold text-text-primary">
              {config.negocio}
            </h1>

            <p className="truncate text-xs text-text-muted">
              {config.eslogan || "Consulta nuestro catálogo digital."}
            </p>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex shrink-0 items-center gap-2">
          {config.whatsapp && (
            <WhatsAppButton
              size="sm"
              label="Escríbenos"
              href={whatsappLink(
                config.whatsapp,
                "Hola, quiero más información sobre sus productos."
              )}
            />
          )}

          <InstallPWAButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}