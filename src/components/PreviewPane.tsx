import { useState } from "react";
import type { RendersConfig, Selection } from "../types";
import { buildRenderCode, buildRenderPath } from "../lib/compat";

interface PreviewPaneProps {
  renders: RendersConfig;
  selection: Selection;
  bgLabel?: string;
  verdiepingLabel?: string;
  positieLabel?: string;
}

/**
 * Toont de render voor de samengestelde code. Ontbreekt het echte bestand nog
 * (404 op /renders/<code>.jpg), dan valt de img terug op de placeholder via
 * onError - er is dus geen enkele codewijziging nodig zodra de echte
 * afbeeldingen in public/renders/ worden gezet, ze moeten alleen exact deze
 * bestandsnaam-conventie volgen.
 */
export function PreviewPane({ renders, selection, bgLabel, verdiepingLabel, positieLabel }: PreviewPaneProps) {
  const path = buildRenderPath(renders, selection);
  const complete = Boolean(selection.bg && selection.verdieping && selection.positie);
  const code = complete ? buildRenderCode(selection as Required<Selection>) : null;

  return (
    <div className="sticky top-6 space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">Live preview</h2>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        {complete && path ? (
          <ImageWithFallback key={path} src={path} placeholder={renders.placeholder} code={code!} />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-sm text-slate-400">
            Kies bouwlaag, verdieping en positie om de render te bekijken.
          </div>
        )}
      </div>
      <dl className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-sm">
        <dt className="text-slate-400">Begane grond</dt>
        <dd className="text-slate-700">{bgLabel ?? "-"}</dd>
        <dt className="text-slate-400">Verdieping</dt>
        <dd className="text-slate-700">{verdiepingLabel ?? "-"}</dd>
        <dt className="text-slate-400">Positie</dt>
        <dd className="text-slate-700">{positieLabel ?? "-"}</dd>
      </dl>
      {code && <p className="break-all font-mono text-xs text-slate-400">code: {code}</p>}
    </div>
  );
}

function ImageWithFallback({ src, placeholder, code }: { src: string; placeholder: string; code: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative h-full w-full">
        <img src={placeholder} alt="Placeholder render" className="h-full w-full object-cover" />
        <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-3 py-1 font-mono text-[11px] text-white">
          {code}.jpg ontbreekt nog
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Render voor ${code}`}
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
