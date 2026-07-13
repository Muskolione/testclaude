import { useMemo, useState } from "react";
import config from "./data/config.json";
import type { WoningConfig, Selection } from "./types";
import { getAvailableBg, getAvailablePosities, getAvailableVerdiepingen, toOption } from "./lib/compat";
import { StepSection } from "./components/StepSection";
import { PreviewPane } from "./components/PreviewPane";

const typedConfig = config as WoningConfig;

export default function App() {
  const [selection, setSelection] = useState<Selection>({});

  const bgOptions = useMemo(() => getAvailableBg(typedConfig), []);
  const verdiepingOptions = useMemo(
    () => getAvailableVerdiepingen(typedConfig, selection),
    [selection.bg],
  );
  const positieOptions = useMemo(
    () => getAvailablePosities(typedConfig, selection),
    [selection.verdieping],
  );

  function selectBg(id: string) {
    setSelection({ bg: id });
  }

  function selectVerdieping(id: string) {
    setSelection((prev) => {
      const stillValid = getAvailablePosities(typedConfig, { ...prev, verdieping: id }).some(
        (p) => p.id === prev.positie,
      );
      return { ...prev, verdieping: id, positie: stillValid ? prev.positie : undefined };
    });
  }

  function selectPositie(id: string) {
    setSelection((prev) => ({ ...prev, positie: id }));
  }

  const bgLabel = bgOptions.find((o) => o.id === selection.bg)?.label;
  const verdiepingLabel = verdiepingOptions.find((o) => o.id === selection.verdieping)?.label;
  const positieLabel = positieOptions.find((o) => o.id === selection.positie)?.label;

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <h1 className="text-xl font-semibold text-slate-900">Woningtype configurator</h1>
          <p className="text-sm text-slate-500">
            Blok van 5 geschakelde rijwoningen - stel een woning samen uit bouwlaag, verdieping en positie.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-10 px-6 py-8 lg:grid-cols-[1fr,320px]">
        <div className="space-y-10">
          <StepSection
            stepNumber={1}
            title="Begane grond"
            options={bgOptions.map(toOption)}
            selectedId={selection.bg}
            onSelect={selectBg}
          />

          <StepSection
            stepNumber={2}
            title="Verdieping"
            subtitle="Alle verdieping-varianten zijn te combineren met elke positie."
            options={verdiepingOptions.map(toOption)}
            selectedId={selection.verdieping}
            onSelect={selectVerdieping}
            locked={!selection.bg}
            lockedHint="Kies eerst een begane grond."
          />

          <StepSection
            stepNumber={3}
            title="Positie in het blok"
            options={positieOptions.map(toOption)}
            selectedId={selection.positie}
            onSelect={selectPositie}
            locked={!selection.verdieping}
            lockedHint="Kies eerst een verdieping."
          />
        </div>

        <PreviewPane
          renders={typedConfig.renders}
          selection={selection}
          bgLabel={bgLabel}
          verdiepingLabel={verdiepingLabel}
          positieLabel={positieLabel}
        />
      </main>
    </div>
  );
}
