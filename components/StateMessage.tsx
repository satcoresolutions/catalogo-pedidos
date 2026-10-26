interface Props {
  title: string;
  detail?: string;
  tone?: "neutral" | "error";
}

export function StateMessage({ title, detail, tone = "neutral" }: Props) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`mx-auto max-w-lg rounded-xl border p-8 text-center ${
        tone === "error" ? "border-danger" : "border-border"
      } bg-surface`}
    >
      <p className="text-lg font-semibold text-foreground">{title}</p>
      {detail && <p className="mt-2 text-text-muted">{detail}</p>}
    </div>
  );
}
