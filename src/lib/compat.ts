import type {
  BgModule,
  PositieModule,
  RendersConfig,
  Selection,
  VerdiepingModule,
  WoningConfig,
} from "../types";

/**
 * Een module is compatibel met een gekozen id zodra er geen compatibleWith-lijst
 * is opgegeven (= compatibel met alles), of zodra de lijst het id bevat.
 * Dit is de enige plek waar de compatibiliteitsregels worden toegepast, zodat
 * het bijwerken van data/config.json voldoende is om de matrix te wijzigen.
 */
function isCompatible(entry: { compatibleWith?: string[] }, id: string | undefined): boolean {
  if (!id) return true;
  if (!entry.compatibleWith) return true;
  return entry.compatibleWith.includes(id);
}

export function getAvailableBg(config: WoningConfig): BgModule[] {
  return config.modules.bg;
}

export function getAvailableVerdiepingen(
  config: WoningConfig,
  _selection: Selection,
): VerdiepingModule[] {
  // BG beperkt de verdiepingkeuze niet (zie compatibiliteitsmatrix): alle
  // verdieping-varianten zijn met elke begane grond te combineren.
  return config.modules.verdieping;
}

export function getAvailablePosities(
  config: WoningConfig,
  selection: Selection,
): PositieModule[] {
  return config.modules.positie.filter((positie) =>
    isCompatible(positie, selection.verdieping),
  );
}

export function buildRenderCode(selection: Required<Selection>): string {
  return `${selection.bg}_${selection.verdieping}_${selection.positie}`;
}

export function buildRenderPath(renders: RendersConfig, selection: Selection): string | null {
  if (!selection.bg || !selection.verdieping || !selection.positie) return null;
  return renders.pathTemplate
    .replace("{bg}", selection.bg)
    .replace("{verdieping}", selection.verdieping)
    .replace("{positie}", selection.positie);
}

/** Leidt een korte kaart-omschrijving af uit de kenmerken, voor in de UI. */
export function toOption(module: {
  id: string;
  label: string;
  kenmerken: Record<string, unknown>;
}): { id: string; label: string; description?: string } {
  const description = module.kenmerken.omschrijving ?? module.kenmerken.indeling;
  return {
    id: module.id,
    label: module.label,
    description: typeof description === "string" ? description : undefined,
  };
}
