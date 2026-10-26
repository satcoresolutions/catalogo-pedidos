"use client";

import { useState } from "react";
import { photoUrl } from "../lib/photo";

interface Props {
  foto: string;
  nombre: string;
  muted?: boolean;
}

export function ProductImage({ foto, nombre, muted = false }: Props) {
  const [failed, setFailed] = useState(false);
  const src = photoUrl(foto);

  if (!src || failed) {
    return (
      <div className="grid size-full place-items-center bg-surface-secondary" aria-label={`Sin foto de ${nombre}`}>
        <span className="text-5xl font-extrabold text-text-muted/60">
          {nombre.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={nombre}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`size-full object-cover transition-[filter,opacity] ${muted ? "opacity-60 grayscale" : ""}`}
    />
  );
}
