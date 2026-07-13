import type { ReactNode } from "react";
import { OptionCard } from "./OptionCard";

interface Option {
  id: string;
  label: string;
  description?: string;
}

interface StepSectionProps {
  stepNumber: number;
  title: string;
  subtitle?: string;
  options: Option[];
  disabledIds?: string[];
  selectedId?: string;
  onSelect: (id: string) => void;
  locked?: boolean;
  lockedHint?: ReactNode;
}

export function StepSection({
  stepNumber,
  title,
  subtitle,
  options,
  disabledIds = [],
  selectedId,
  onSelect,
  locked,
  lockedHint,
}: StepSectionProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-baseline gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
          {stepNumber}
        </span>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}

      {locked ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-400">
          {lockedHint ?? "Maak eerst een keuze bij de vorige stap."}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => (
            <OptionCard
              key={option.id}
              label={option.label}
              description={option.description}
              selected={selectedId === option.id}
              disabled={disabledIds.includes(option.id)}
              onSelect={() => onSelect(option.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
