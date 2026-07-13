interface OptionCardProps {
  label: string;
  description?: string;
  selected: boolean;
  disabled?: boolean;
  onSelect: () => void;
}

export function OptionCard({ label, description, selected, disabled, onSelect }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={[
        "w-full text-left rounded-xl border p-4 transition",
        disabled
          ? "cursor-not-allowed opacity-40 border-slate-200 bg-slate-50"
          : "cursor-pointer hover:border-slate-400 hover:shadow-sm",
        selected && !disabled
          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div className="font-medium">{label}</div>
      {description && (
        <div className={selected && !disabled ? "text-slate-300 text-sm mt-1" : "text-slate-500 text-sm mt-1"}>
          {description}
        </div>
      )}
    </button>
  );
}
