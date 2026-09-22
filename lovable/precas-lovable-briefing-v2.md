# Lovable-briefing v2: Precas – uitbreiding met HSB-configurator

## Context en opdracht

Dit project bevat al de Precas-landingspagina (gebouwd volgens de eerste briefing, `precas-lovable-briefing.md`). Deze v2 **voegt alleen dingen toe**:

1. Homepage: één extra nav-link en één nieuwe sectie.
2. Nieuwe pagina **`/concepten`**: de vier productfamilies (statisch).
3. Nieuwe pagina **`/configurator`**: interactieve 5-stappen configurator.

**Harde regels**
- **Niets weghalen of wijzigen** aan wat er al staat: bestaande secties, teksten, kleuren en maten blijven exact gelijk.
- Zelfde stijl als de bestaande pagina: dezelfde fonts (Bricolage Grotesque, Instrument Sans, JetBrains Mono), kleurtokens, radii en patronen. Alle waarden hieronder letterlijk overnemen (Tailwind arbitrary values of inline styles; niet afronden).
- Voeg een router toe (React Router) als die er nog niet is: `/` (bestaand), `/concepten`, `/configurator`.
- Inhoudelijke achtergrond staat in `HSB_configurator_mega_prompt_v2.md` (bijgevoegd). Bij twijfel geldt: **deze briefing en de HTML hieronder bepalen het ontwerp**; de mega prompt bepaalt de regels (niets verzinnen, statussen, grid 600 mm, alleen grondgebonden).
- Verzin geen technische waarden, prijzen of GO-berekeningen. Placeholders en "TBC leverancier"-labels laten staan.

Bijgevoegde referentiebestanden (openen in de browser op 1440 px breed):
- `precas-referentie-v2.html`: complete homepage mét de nieuwe sectie (totale hoogte ± 7720 px).
- `concepten-referentie.html`: de pagina `/concepten`.

---

## 1. Homepage-aanpassingen (alleen toevoegen)

### 1a. Nav-link
In de header, direct ná de link "Werkwijze", een vierde item vóór "Contact":

```html
<a href="/configurator" style="text-decoration: none;">Configurator</a>
```
(React: `<Link to="/configurator">`.) Zelfde stijl als de andere nav-links.

### 1b. Nieuwe sectie "Configurator"
Plaats deze sectie **tussen de PMC-matrix (`#assortiment`, donkere sectie) en de sectie "Voor wie"** (drie kaarten "Eén assortiment, drie manieren…"). `id="configurator"`. Accentkleur = `#E3A857`. Knoppen linken naar `/configurator` en `/concepten`.

Opbouw: kop (label 3 kolommen + h2/intro 9 kolommen) → rij met links (5 kolommen) een donkere kaart met de 5 stappen en twee knoppen, rechts (7 kolommen) een 2×2 raster van familiekaarten met blokjes-indicator (1 t/m 4 gevulde vakjes) → rij van drie waardeproposities met bovenlijn. Onderpadding 0 (de volgende sectie heeft al 112px bovenpadding).

```html
<!-- CONFIGURATOR -->
<section id="configurator" style="padding: 112px 96px 0; display: flex; flex-direction: column; gap: 56px;">
<div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px;">
<div style="grid-column: span 3; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518; padding-top: 12px;">Configurator</div>
<div style="grid-column: span 9; display: flex; flex-direction: column; gap: 20px;">
<h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 52px; line-height: 1.05; letter-spacing: -0.02em;">Van PMC naar prefab casco, in vijf stappen.</h2>
<p style="margin: 0; font-size: 19px; line-height: 1.55; color: #3E484D; max-width: 760px;">Vertaal de Nederlandse woningvraag direct naar een configureerbaar HSB-woningconcept. Eén parametrisch productplatform vertaalt meerdere PMC’s naar een beperkt aantal fabrieksgeschikte woningfamilies.</p>
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px; align-items: stretch;">
<div style="grid-column: span 5; background: #16242B; color: #F3F0E8; border-radius: 28px; padding: 48px 40px 40px; display: flex; flex-direction: column; gap: 32px;">
<div style="display: flex; flex-direction: column; gap: 0;">
<div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 0; border-top: 1px solid #3A4A52;"><span style="display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 999px; background: #E3A857; color: #16242B; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;">1</span><div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-size: 18px; font-weight: 600;">Woningbehoefte</span><span style="font-size: 14px; line-height: 1.45; color: #C9CFD2;">Kies een PMC of laat de configurator matchen.</span></div></div>
<div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 0; border-top: 1px solid #3A4A52;"><span style="display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 999px; background: #E3A857; color: #16242B; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;">2</span><div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-size: 18px; font-weight: 600;">Woningtype</span><span style="font-size: 14px; line-height: 1.45; color: #C9CFD2;">Compact, Compact+, Family M of Family L/XL.</span></div></div>
<div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 0; border-top: 1px solid #3A4A52;"><span style="display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 999px; background: #E3A857; color: #16242B; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;">3</span><div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-size: 18px; font-weight: 600;">Afmetingen &amp; indeling</span><span style="font-size: 14px; line-height: 1.45; color: #C9CFD2;">600 mm grid, doorzon, inpandig terras, spiegelen.</span></div></div>
<div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 0; border-top: 1px solid #3A4A52;"><span style="display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 999px; background: #E3A857; color: #16242B; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;">4</span><div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-size: 18px; font-weight: 600;">Casco &amp; uitstraling</span><span style="font-size: 14px; line-height: 1.45; color: #C9CFD2;">Casco-componenten, gevel, kozijnen en techniek.</span></div></div>
<div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 0; border-top: 1px solid #3A4A52; border-bottom: 1px solid #3A4A52;"><span style="display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 999px; border: 1.5px solid #F3F0E8; box-sizing: border-box; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;">5</span><div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-size: 18px; font-weight: 600;">Resultaat</span><span style="font-size: 14px; line-height: 1.45; color: #C9CFD2;">PMC → woningfamilie → configureerbaar casco.</span></div></div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 12px;">
<a href="/configurator" style="display: inline-flex; align-items: center; min-height: 52px; padding: 0 28px; background: #E3A857; color: #16242B; font-weight: 600; font-size: 16px; text-decoration: none; border-radius: 999px;">Start configuratie</a>
<a href="/concepten" style="display: inline-flex; align-items: center; min-height: 52px; padding: 0 28px; border: 1.5px solid #F3F0E8; color: #F3F0E8; font-weight: 600; font-size: 16px; text-decoration: none; border-radius: 999px;">Bekijk productfamilies</a>
</div>
</div>
<div style="grid-column: span 7; display: flex; flex-direction: column; gap: 16px;">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; flex-grow: 1;">
<div style="background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 12px;">
<div style="display: flex; justify-content: space-between; align-items: center;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #6A5A45;">Model A</span><svg width="96" height="20" viewBox="0 0 96 20" aria-hidden="true"><rect x="1" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="25" y="1" width="18" height="18" fill="none" stroke="#C9C1AF" stroke-width="1.5"></rect><rect x="49" y="1" width="18" height="18" fill="none" stroke="#C9C1AF" stroke-width="1.5"></rect><rect x="73" y="1" width="18" height="18" fill="none" stroke="#C9C1AF" stroke-width="1.5"></rect></svg></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600; letter-spacing: -0.01em;">Compact</span>
<span style="font-size: 15px; line-height: 1.45; color: #3E484D;">Kleinste zelfstandige grondgebonden woning.</span>
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #16242B; padding-top: 8px; border-top: 1px solid #D9D3C5;">1 persoon · PMC 1</span>
</div>
<div style="background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 12px;">
<div style="display: flex; justify-content: space-between; align-items: center;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #6A5A45;">Model B</span><svg width="96" height="20" viewBox="0 0 96 20" aria-hidden="true"><rect x="1" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="25" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="49" y="1" width="18" height="18" fill="none" stroke="#C9C1AF" stroke-width="1.5"></rect><rect x="73" y="1" width="18" height="18" fill="none" stroke="#C9C1AF" stroke-width="1.5"></rect></svg></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600; letter-spacing: -0.01em;">Compact+</span>
<span style="font-size: 15px; line-height: 1.45; color: #3E484D;">Compacte 1–2 persoonswoning, regulier of nultreden.</span>
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #16242B; padding-top: 8px; border-top: 1px solid #D9D3C5;">1–2 personen · 1 slaapkamer · PMC 2 / 15</span>
</div>
<div style="background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 12px;">
<div style="display: flex; justify-content: space-between; align-items: center;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #6A5A45;">Model C</span><svg width="96" height="20" viewBox="0 0 96 20" aria-hidden="true"><rect x="1" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="25" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="49" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="73" y="1" width="18" height="18" fill="none" stroke="#C9C1AF" stroke-width="1.5"></rect></svg></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600; letter-spacing: -0.01em;">Family M</span>
<span style="font-size: 15px; line-height: 1.45; color: #3E484D;">Reguliere grondgebonden gezinswoning.</span>
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #16242B; padding-top: 8px; border-top: 1px solid #D9D3C5;">2–3 personen · 2 slaapkamers · PMC 3 / 16 / 17</span>
</div>
<div style="background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 12px;">
<div style="display: flex; justify-content: space-between; align-items: center;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #6A5A45;">Model D</span><svg width="96" height="20" viewBox="0 0 96 20" aria-hidden="true"><rect x="1" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="25" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="49" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect><rect x="73" y="1" width="18" height="18" fill="#E3A857" stroke="#16242B" stroke-width="1.5"></rect></svg></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600; letter-spacing: -0.01em;">Family L/XL</span>
<span style="font-size: 15px; line-height: 1.45; color: #3E484D;">Ruime gezinswoning, met XL-uitbreiding.</span>
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #16242B; padding-top: 8px; border-top: 1px solid #D9D3C5;">3–5+ personen · 3+ slaapkamers · PMC 4 / 18 / 5</span>
</div>
</div>
<p style="margin: 0; font-size: 13px; line-height: 1.5; color: #5C6468;">Koppeling PMC → productfamilie is commercieel/functioneel, geen officiële PMC-certificering. GO-bandbreedtes indicatief uit DATA ALL.</p>
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;">
<div style="display: flex; flex-direction: column; gap: 10px; padding-top: 22px; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">01</span><span style="font-size: 20px; font-weight: 500;">Marktstandaard als startpunt</span><span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Begin niet met een leeg ontwerp. Selecteer de woningvraag en vertaal die direct naar een passende productfamilie.</span></div>
<div style="display: flex; flex-direction: column; gap: 10px; padding-top: 22px; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">02</span><span style="font-size: 20px; font-weight: 500;">Vier parametrische woningfamilies</span><span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Meerdere PMC’s worden vertaald naar een beperkt aantal reproduceerbare HSB-casco’s.</span></div>
<div style="display: flex; flex-direction: column; gap: 10px; padding-top: 22px; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">03</span><span style="font-size: 20px; font-weight: 500;">Van concept richting fabriek</span><span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Maatvoering, indeling en casco-componenten worden voorbereid voor technische engineering en productie.</span></div>
</div>
</section>
```

---

## 2. Nieuwe pagina `/concepten` (Productfamilies)

Statische pagina, 1440 px ontwerpbreedte, zelfde header als de homepage maar met nav: **Propositie** (`/`), **Productfamilies** (`/concepten`, actief: onderstreept met `border-bottom: 2px solid #16242B; padding-bottom: 4px`), **Configurator** (`/configurator`). Het logo linkt naar `/`.

Secties: intro (h1 72px "Vier woningfamilies, negen PMC’s." + intro + 2 knoppen) → 2×2 familiekaarten (`#FBF9F4`, radius 24px) met gegevensrijen, PMC-chips en knop "Configureer" (→ `/configurator`) → keten-blok in 4 vakken (2e vak accent) → donkere footer.

De volledige HTML staat in **`concepten-referentie.html`**: neem die 1-op-1 over.

---

## 3. Nieuwe pagina `/configurator` (interactief)

### Layout (1440 px)
- Header zoals `/concepten` (actief item: Configurator).
- Balk eronder: h1 "HSB-configurator" (Bricolage 28px 600) + label "Grondgebonden · versie 1", rechts 5 klikbare stap-pillen (1 Woningbehoefte → 2 Woningtype → 3 Afmetingen & indeling → 4 Casco & uitstraling → 5 Resultaat). Huidige stap = donkere pil; afgeronde en huidige stappen hebben een accent-bolletje.
- Werkruimte: grid `440px | 1fr | 360px`, gap 24px, padding `28px 48px 48px`:
  - **Links**: inhoud van de actieve stap + onderaan "Vorige" / "Volgende" (bij stap 5: "Opnieuw beginnen").
  - **Midden**: lichte kaart (`#FBF9F4`) met de keten-chips `PMC X → HSB <familie> → configureerbaar casco`, de live SVG-plattegrond (viewBox 560×500), legenda en disclaimer.
  - **Rechts**: donkere kaart (`#16242B`) met matchstatus-badge, waarschuwingen, samenvattingstabel (20 rijen) en "Doel-GO t.o.v. PMC-range".
- Mobiel (< 1024 px): kolommen onder elkaar (stappen → visual → samenvatting), sticky knop "Volgende" onderaan. Desktop niet wijzigen.

### Stappen (inhoud linkerkolom)
1. **Woningbehoefte**: schakelaar "PMC bekend" / "PMC laten matchen".
   - PMC bekend: 3×3 raster met PMC 1, 2, 3, 4, 5, 15, 16, 17, 18 (subregel = familienaam, "· nultreden" bij 15–18).
   - Laten matchen: plus/min-knoppen voor personen (1–6), slaapkamers (0=studio … 4), doel-GO (20–200, stap 5 m²) en keuze Regulier/Nultreden.
   - Daaronder een donkere kaart: "Gekozen PMC" of "Beste PMC-match", "Match: hoog/gemiddeld/laag", PMC-nummer groot, doelgroep, GO-range, slaapkamers, bewoners, uitvoering, productfamilie + tekst "Een match is geen certificering of gegarandeerde geschiktheid."
2. **Woningtype**: vier klikbare kaarten (Compact, Compact+, Family M, Family L/XL) met tag "Beste match" (accent) / "Gekozen" / "Alternatief".
3. **Afmetingen & indeling**: beukmaat en diepte met −/+ (stap 600 mm) plus presets (beuk 5,40 / 7,20 / 9,00; diepte 7,20 / 9,00 / 12,00), bouwlagen 1/2/3, daktype Kap/Plat dak, plattegrond Doorzon / Binnen-buiten / Inpandig terras + toggles Spiegelen en Draaien 90°. Tekst: "Gebaseerd op 600 mm modulair grid · presets indicatief (TBC leverancier)".
4. **Casco & uitstraling**: 5 casco-componenten met vinkje, 4 gevelkaarten met materiaalstaal, regel kozijnen ("Aluminium (bronreferentie) · overige TBC leverancier"), techniek-toggles (Warmtepomp, Vloerverwarming, Zonnepanelen, Ventilatie aan; Regenwaterrecuperatie (optie) uit).
5. **Resultaat**: keten in 4 blokken (tweede blok accent), vier knoppen (Download conceptsamenvatting [accent], Vraag technische check aan, Maak projectvariant, Deel configuratie; mogen voorlopig zonder functie) en "Prijs op aanvraag — technische leveranciersdata nog niet gekoppeld."

### Matchstatus (kleuren)
- `GOED PASSEND` → `#9CC5A1`
- `AANPASSING NODIG` → `#E8C547`
- `ENGINEERING NODIG` → `#D98E73` (altijd bij PMC 5)

### Logica en data (TypeScript overnemen)
Hieronder de complete werkende logica uit het ontwerp. Zet de data (`pmcs`, `models`, `mods`, `layouts`, `facades`, `techs`) in een apart bestand `src/data/configurator.ts`, de state in een hook `useConfigurator`, en bereken de afgeleide waarden precies zoals `renderVals()` hieronder doet (plattegrondgeometrie, validatie, status, samenvatting). Rekenregels, drempels en teksten niet aanpassen.

```js
class Component extends DCLogic {
  state = {
    step: 1, route: 'A', pmc: '3', model: null,
    persons: 3, bedrooms: 2, targetGo: 80, accessible: false,
    w: 5400, d: 9000, storeys: 2, roof: 'Kap',
    layout: 'THROUGH', mirrored: false, rotated: false,
    facade: 'metsel', tech: { wp: true, vv: true, pv: true, vent: true, rain: false }
  };

  data() {
    return {
      pmcs: [
        { id: '1', model: 'A', mod: 'REGULAR', conf: 'HIGH', doel: 'Eenpersoonshuishouden, starter', slk: 'Studio / 1', pers: '1', goMin: 24, goMax: 55, acc: false, p: 1, b: 0 },
        { id: '2', model: 'B', mod: 'REGULAR', conf: 'HIGH', doel: 'Eén- of tweepersoonshuishouden', slk: '1', pers: '1–2', goMin: 55, goMax: 65, acc: false, p: 2, b: 1 },
        { id: '3', model: 'C', mod: 'REGULAR', conf: 'HIGH', doel: 'Gezin', slk: '2', pers: '2–3', goMin: 65, goMax: 90, acc: false, p: 3, b: 2 },
        { id: '4', model: 'D', mod: 'REGULAR', conf: 'HIGH', doel: 'Gezin', slk: '3', pers: '3–5', goMin: 90, goMax: 115, acc: false, p: 4, b: 3 },
        { id: '5', model: 'D', mod: 'XL_EXTENSION', conf: 'MEDIUM', doel: 'Gezin, groot (vrije sector)', slk: '3–4', pers: '4–5+', goMin: 115, goMax: null, acc: false, p: 5, b: 4 },
        { id: '15', model: 'B', mod: 'ACCESSIBLE', conf: 'MEDIUM', doel: 'Nultreden, 1–2 personen', slk: '1', pers: '1–2', goMin: 45, goMax: null, acc: true, p: 2, b: 1 },
        { id: '16', model: 'C', mod: 'ACCESSIBLE', conf: 'MEDIUM', doel: 'Nultreden, 2–3 personen', slk: '2', pers: '2–3', goMin: 55, goMax: null, acc: true, p: 3, b: 2 },
        { id: '17', model: 'C', mod: 'ACCESSIBLE_FLEX', conf: 'MEDIUM', doel: 'Senioren, levensloop', slk: '2', pers: '2–3', goMin: 45, goMax: 90, acc: true, p: 2, b: 2 },
        { id: '18', model: 'D', mod: 'ACCESSIBLE', conf: 'MEDIUM', doel: 'Senioren, levensloop', slk: '3', pers: '3–5', goMin: 90, goMax: null, acc: true, p: 4, b: 3 }
      ],
      models: {
        A: { id: 'A', name: 'Compact', pers: '1 persoon', slk: 'studio / 1 slk', go: 'ca. 24–55 m²', pmcs: 'PMC 1', w: 5400, d: 9000, st: 1 },
        B: { id: 'B', name: 'Compact+', pers: '1–2 personen', slk: '1 slk', go: 'ca. 45–65 m²', pmcs: 'PMC 2 · 15', w: 5400, d: 9000, st: 2 },
        C: { id: 'C', name: 'Family M', pers: '2–3 personen', slk: '2 slk', go: 'ca. 45–90 m²', pmcs: 'PMC 3 · 16 · 17', w: 5400, d: 9000, st: 2 },
        D: { id: 'D', name: 'Family L/XL', pers: '3–5+ personen', slk: '3+ slk', go: 'vanaf ca. 90 m²', pmcs: 'PMC 4 · 18 · 5', w: 7200, d: 9000, st: 2 }
      },
      mods: { REGULAR: 'Regulier', ACCESSIBLE: 'Toegankelijk (nultreden)', ACCESSIBLE_FLEX: 'Toegankelijk flex', XL_EXTENSION: 'XL-uitbreiding' },
      layouts: { THROUGH: 'Doorzon', INDOOR_OUTDOOR: 'Binnen-buiten', INTERNAL_TERRACE: 'Inpandig terras' },
      facades: [
        { id: 'metsel', label: 'Metselwerk / steenachtig', swatch: 'repeating-linear-gradient(0deg, #A5613F 0 7px, #E4E0D6 7px 8px)' },
        { id: 'plaat', label: 'Plaat-/paneelafwerking', swatch: 'repeating-linear-gradient(90deg, #5C6468 0 22px, #3E484D 22px 23px)' },
        { id: 'keramisch', label: 'Keramische gevelbekleding', swatch: 'repeating-linear-gradient(90deg, #C9A27A 0 10px, #B48A62 10px 11px)' },
        { id: 'overig', label: 'Overige afwerking (TBC)', swatch: 'repeating-linear-gradient(45deg, #E4E0D6 0 6px, #D9D3C5 6px 12px)' }
      ],
      techs: [
        { id: 'wp', label: 'Warmtepomp' }, { id: 'vv', label: 'Vloerverwarming' }, { id: 'pv', label: 'Zonnepanelen' },
        { id: 'vent', label: 'Ventilatie' }, { id: 'rain', label: 'Regenwaterrecuperatie (optie)' }
      ]
    };
  }

  targetFor(p) { return p.goMax ? Math.round((p.goMin + p.goMax) / 2 / 5) * 5 : p.goMin + 10; }

  geomFor(modelId) {
    const m = this.data().models[modelId];
    return { w: m.w, d: m.d, storeys: m.st };
  }

  pickPmc(id) {
    const p = this.data().pmcs.find((x) => x.id === id);
    this.setState({ pmc: id, model: null, persons: p.p, bedrooms: p.b, targetGo: this.targetFor(p), accessible: p.acc, ...this.geomFor(p.model) });
  }

  match(pers, slk, go, acc) {
    if (acc) return slk <= 1 ? '15' : slk === 2 ? (go <= 90 ? '17' : '16') : '18';
    if (slk === 0 || (pers === 1 && slk <= 1)) return '1';
    if (slk === 1) return '2';
    if (slk === 2) return '3';
    return (go > 115 || slk >= 4) ? '5' : '4';
  }

  updateNeed(patch) {
    const s = { ...this.state, ...patch };
    const id = this.match(s.persons, s.bedrooms, s.targetGo, s.accessible);
    const next = { ...patch, pmc: id };
    if (id !== this.state.pmc) {
      const p = this.data().pmcs.find((x) => x.id === id);
      Object.assign(next, { model: null }, this.geomFor(p.model));
    }
    this.setState(next);
  }

  renderVals() {
    const s = this.state;
    const D = this.data();
    const accent = this.props.accent ?? '#E3A857';
    const INK = '#16242B', PAPER = '#F3F0E8', SAND = '#C9C1AF';
    const pill = (on) => ({ bg: on ? INK : 'transparent', fg: on ? PAPER : INK, bd: on ? INK : SAND });
    const mStr = (mm) => (mm / 1000).toFixed(2).replace('.', ',') + ' m';
    const num = (v) => (Math.round(v * 10) / 10).toString().replace('.', ',');
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const pmc = D.pmcs.find((x) => x.id === s.pmc);
    const modelId = s.model || pmc.model;
    const model = D.models[modelId];
    const pmcRange = pmc.goMax ? pmc.goMin + '–' + pmc.goMax + ' m²' : (pmc.id === '5' ? '> ' : 'vanaf ') + pmc.goMin + ' m²';
    const inRange = s.targetGo >= pmc.goMin && (pmc.goMax == null || s.targetGo <= pmc.goMax);
    const confKey = !inRange ? 'LOW' : pmc.conf;
    const confidence = { HIGH: 'hoog', MEDIUM: 'gemiddeld', LOW: 'laag' }[confKey];
    const footprint = (s.w / 1000) * (s.d / 1000);
    const bruto = footprint * s.storeys;

    // Validatie
    const warnings = [];
    if (s.targetGo < pmc.goMin) warnings.push('Doel-GO onder het PMC-minimum.');
    if (pmc.goMax != null && s.targetGo > pmc.goMax) warnings.push('Doel-GO boven het PMC-maximum.');
    if (modelId !== pmc.model) warnings.push('Productfamilie wijkt af van de PMC-match.');
    if (bruto < s.targetGo) warnings.push('Bruto casco-oppervlak kleiner dan doel-GO: vergroot maatvoering of bouwlagen.');
    if (pmc.acc) warnings.push('Toegankelijkheidsengineering te verifiëren.');
    if (pmc.mod === 'XL_EXTENSION') warnings.push('Definitieve moduleopbouw en engineering door leverancier te bevestigen.');
    const blocking = warnings.filter((w) => !w.startsWith('Toegankelijkheid')).length;
    const status = pmc.mod === 'XL_EXTENSION' ? 'ENGINEERING NODIG' : blocking ? 'AANPASSING NODIG' : 'GOED PASSEND';
    const statusBg = { 'GOED PASSEND': '#9CC5A1', 'AANPASSING NODIG': '#E8C547', 'ENGINEERING NODIG': '#D98E73' }[status];

    // Stappen
    const labels = ['Woningbehoefte', 'Woningtype', 'Afmetingen & indeling', 'Casco & uitstraling', 'Resultaat'];
    const steps = labels.map((label, i) => {
      const n = i + 1, cur = n === s.step, done = n < s.step;
      return {
        n, label, go: () => this.setState({ step: n }),
        bg: cur ? INK : 'transparent', fg: cur ? PAPER : INK, bd: cur ? INK : (done ? INK : SAND),
        dotBg: cur || done ? accent : 'transparent', dotFg: INK
      };
    });

    // Stap 1
    const rA = pill(s.route === 'A'), rB = pill(s.route === 'B');
    const pmcButtons = D.pmcs.map((p) => ({ id: p.id, family: D.models[p.model].name + (p.acc ? ' · nultreden' : ''), pick: () => this.pickPmc(p.id), ...pill(p.id === s.pmc) }));
    const matchSteppers = [
      { label: 'Aantal personen', value: String(s.persons), dec: () => this.updateNeed({ persons: clamp(s.persons - 1, 1, 6) }), inc: () => this.updateNeed({ persons: clamp(s.persons + 1, 1, 6) }), decLabel: 'Minder personen', incLabel: 'Meer personen' },
      { label: 'Slaapkamers', value: s.bedrooms === 0 ? 'studio' : String(s.bedrooms), dec: () => this.updateNeed({ bedrooms: clamp(s.bedrooms - 1, 0, 4) }), inc: () => this.updateNeed({ bedrooms: clamp(s.bedrooms + 1, 0, 4) }), decLabel: 'Minder slaapkamers', incLabel: 'Meer slaapkamers' },
      { label: 'Doel-GO', value: s.targetGo + ' m²', dec: () => this.updateNeed({ targetGo: clamp(s.targetGo - 5, 20, 200) }), inc: () => this.updateNeed({ targetGo: clamp(s.targetGo + 5, 20, 200) }), decLabel: 'Doel-GO omlaag', incLabel: 'Doel-GO omhoog' }
    ];
    const reg = pill(!s.accessible), acc = pill(s.accessible);

    // Stap 2
    const modelCards = Object.values(D.models).map((m) => {
      const best = m.id === pmc.model, sel = m.id === modelId;
      return {
        ...m, pick: () => this.setState({ model: m.id === pmc.model ? null : m.id, ...this.geomFor(m.id) }),
        bd: sel ? INK : SAND, bg: sel ? '#FBF9F4' : 'transparent',
        tag: best ? (pmc.mod === 'REGULAR' ? 'Beste match' : 'Beste match · ' + D.mods[pmc.mod]) : (sel ? 'Gekozen' : 'Alternatief'),
        tagBg: best ? accent : '#E4E0D6'
      };
    });

    // Stap 3
    const dimPresets = (key, list) => list.map((mm) => ({ label: num(mm / 1000), pick: () => this.setState({ [key]: mm }), ...pill(s[key] === mm) }));
    const dims = [
      { label: 'Beukmaat', value: mStr(s.w), dec: () => this.setState({ w: clamp(s.w - 600, 3600, 9000) }), inc: () => this.setState({ w: clamp(s.w + 600, 3600, 9000) }), decLabel: 'Beukmaat 600 mm smaller', incLabel: 'Beukmaat 600 mm breder', presets: dimPresets('w', [5400, 7200, 9000]) },
      { label: 'Diepte', value: mStr(s.d), dec: () => this.setState({ d: clamp(s.d - 600, 5400, 12000) }), inc: () => this.setState({ d: clamp(s.d + 600, 5400, 12000) }), decLabel: 'Diepte 600 mm minder', incLabel: 'Diepte 600 mm meer', presets: dimPresets('d', [7200, 9000, 12000]) }
    ];
    const seg = (label, opts) => ({ label, options: opts });
    const segGroups = [
      seg('Bouwlagen', [1, 2, 3].map((n) => ({ label: String(n), pick: () => this.setState({ storeys: n }), ...pill(s.storeys === n) }))),
      seg('Daktype (uit brondata, per PMC te bevestigen)', ['Kap', 'Plat'].map((r) => ({ label: r === 'Kap' ? 'Kap' : 'Plat dak', pick: () => this.setState({ roof: r }), ...pill(s.roof === r) }))),
      seg('Plattegrond', Object.keys(D.layouts).map((k) => ({ label: D.layouts[k], pick: () => this.setState({ layout: k }), ...pill(s.layout === k) })).concat([
        { label: 'Spiegelen', pick: () => this.setState({ mirrored: !s.mirrored }), ...pill(s.mirrored) },
        { label: 'Draaien 90°', pick: () => this.setState({ rotated: !s.rotated }), ...pill(s.rotated) }
      ]))
    ];

    // Stap 4
    const components = ['Buitenwand', 'Binnenwand', 'Vloer', 'Dak', 'Raam-/deuropeningen'].map((label) => ({ label }));
    const facades = D.facades.map((f) => ({ ...f, pick: () => this.setState({ facade: f.id }), bd: f.id === s.facade ? INK : SAND, bg: f.id === s.facade ? '#FBF9F4' : 'transparent' }));
    const techs = D.techs.map((t) => ({ ...t, pressed: !!s.tech[t.id], toggle: () => this.setState({ tech: { ...s.tech, [t.id]: !s.tech[t.id] } }), ...pill(!!s.tech[t.id]) }));
    const facadeLabel = D.facades.find((f) => f.id === s.facade).label;
    const techLabel = D.techs.filter((t) => s.tech[t.id]).map((t) => t.label.replace(' (optie)', '')).join(', ') || 'Geen';

    // Plattegrond (mm, y = 0 achterzijde/tuin, y = d voorzijde/straat)
    const W = s.w, Dp = s.d;
    const snap = (f, tot) => clamp(Math.round((f * tot) / 600) * 600, 600, tot - 600);
    const X = (f) => snap(f, W), Y = (f) => snap(f, Dp);
    const upper = s.storeys > 1 && !pmc.acc;
    const slaapLabel = upper ? 'Trap / berging' : 'Slapen';
    let zonesMm = [], outMm = [];
    if (s.layout === 'THROUGH') {
      const x1 = X(0.6), y1 = Y(0.4), y2 = Y(0.7);
      zonesMm = [
        { k: 'wonen', x: 0, y: 0, w: x1, h: Dp, label: 'Wonen' },
        { k: 'slapen', x: x1, y: 0, w: W - x1, h: y1, label: slaapLabel },
        { k: 'kern', x: x1, y: y1, w: W - x1, h: y2 - y1, label: 'Kern' },
        { k: 'hal', x: x1, y: y2, w: W - x1, h: Dp - y2, label: 'Hal' }
      ];
    } else if (s.layout === 'INDOOR_OUTDOOR') {
      const y1 = Y(0.6), x1 = X(0.35), x2 = Math.max(X(0.6), x1 + 600);
      zonesMm = [
        { k: 'wonen', x: 0, y: 0, w: W, h: y1, label: 'Wonen' },
        { k: 'kern', x: 0, y: y1, w: x1, h: Dp - y1, label: 'Kern' },
        { k: 'hal', x: x1, y: y1, w: x2 - x1, h: Dp - y1, label: 'Hal' },
        { k: 'slapen', x: x2, y: y1, w: W - x2, h: Dp - y1, label: slaapLabel }
      ];
      outMm = [{ x: 0, y: -1800, w: W, h: 1800, label: 'Terras' }];
    } else {
      const x1 = X(0.6), y1 = Y(0.35), y2 = Math.max(Y(0.6), y1 + 600), x2 = X(0.4);
      zonesMm = [
        { k: 'wonen', x: 0, y: 0, w: x1, h: y2, label: 'Wonen' },
        { k: 'terras', x: x1, y: 0, w: W - x1, h: y1, label: 'Terras' },
        { k: 'slapen', x: x1, y: y1, w: W - x1, h: y2 - y1, label: slaapLabel },
        { k: 'hal', x: 0, y: y2, w: x2, h: Dp - y2, label: 'Hal' },
        { k: 'kern', x: x2, y: y2, w: W - x2, h: Dp - y2, label: 'Kern' }
      ];
    }
    const off = outMm.length ? 1800 : 0;
    const H = Dp + off;
    const tf = (r) => {
      let x = s.mirrored ? W - r.x - r.w : r.x, y = r.y + off, w = r.w, h = r.h;
      if (s.rotated) return { x: H - y - h, y: x, w: h, h: w };
      return { x, y, w, h };
    };
    const TW = s.rotated ? H : W, TH = s.rotated ? W : H;
    const sc = Math.min(400 / TW, 360 / TH);
    const ox = 70 + (400 - TW * sc) / 2, oy = 60 + (360 - TH * sc) / 2;
    const px = (r) => {
      const t = tf(r);
      const o = { x: ox + t.x * sc, y: oy + t.y * sc, w: t.w * sc, h: t.h * sc };
      o.cx = o.x + o.w / 2; o.cy = o.y + o.h / 2 + 4;
      return o;
    };
    const style = {
      wonen: { fill: accent, op: 0.55, text: INK }, slapen: { fill: '#C9CFD2', op: 1, text: INK },
      kern: { fill: INK, op: 1, text: PAPER }, hal: { fill: '#FFFFFF', op: 1, text: INK },
      terras: { fill: 'url(#hatch)', op: 1, text: '#8A5518' }
    };
    const zones = zonesMm.map((z) => ({ ...px(z), ...style[z.k], label: z.label }));
    const outside = outMm.map((o) => ({ ...px(o), label: o.label }));
    const house = px({ x: 0, y: 0, w: W, h: Dp });
    const grid = [];
    for (let g = 600; g < W; g += 600) { const a = px({ x: g, y: 0, w: 0, h: Dp }); grid.push({ x1: a.x, y1: a.y, x2: a.x + a.w, y2: a.y + a.h }); }
    for (let g = 600; g < Dp; g += 600) { const a = px({ x: 0, y: g, w: W, h: 0 }); grid.push({ x1: a.x, y1: a.y, x2: a.x + a.w, y2: a.y + a.h }); }
    const hMm = s.rotated ? Dp : W, vMm = s.rotated ? W : Dp;
    const dimTop = { x1: house.x, x2: house.x + house.w, y: house.y - 22, t1: house.y - 28, t2: house.y - 16, cx: house.x + house.w / 2, ty: house.y - 30, label: mStr(hMm) };
    const sx = house.x + house.w + 22, scy = house.y + house.h / 2;
    const dimSide = { x: sx, y1: house.y, y2: house.y + house.h, t1: sx - 6, t2: sx + 6, tx: sx + 16, cy: scy, rot: 'rotate(90 ' + (sx + 16) + ' ' + scy + ')', label: mStr(vMm) };
    const street = s.rotated
      ? { x: house.x - 20, y: house.y + house.h / 2, rot: 'rotate(-90 ' + (house.x - 20) + ' ' + (house.y + house.h / 2) + ')' }
      : { x: house.x + house.w / 2, y: house.y + house.h + 28, rot: 'rotate(0)' };
    const floorNote = upper ? 'Slaapkamers op de verdieping.' : (pmc.acc ? 'Nultreden: primaire functies op de begane grond.' : '');

    // Stap 5
    const chain = [
      { n: '01 — Nederlandse vraag', title: 'PMC ' + pmc.id, text: pmc.doel + ' · ' + pmc.slk + ' slk · ' + pmc.pers + ' pers.', bg: 'transparent' },
      { n: '02 — Woningproduct', title: model.name, text: 'Model ' + model.id + ' · ' + D.mods[pmc.mod], bg: accent },
      { n: '03 — Parametrische configuratie', title: mStr(s.w) + ' × ' + mStr(s.d), text: s.storeys + ' bouwlaag/lagen · ' + D.layouts[s.layout] + (s.mirrored ? ' · gespiegeld' : '') + ' · ' + facadeLabel, bg: 'transparent' },
      { n: '04 — Fabrieksvertaling', title: 'HSB-casco', text: 'Wanden + vloer + dak + openingen', bg: 'transparent' }
    ].map((c, i) => ({ ...c, bt: i === 0 ? 'none' : '1px solid ' + INK }));

    const summary = [
      ['PMC', 'PMC ' + pmc.id], ['Doelgroep', pmc.doel], ['Productfamilie', model.name + ' (' + model.id + ')'], ['Modifier', D.mods[pmc.mod]],
      ['Personen', String(s.persons)], ['Slaapkamers', s.bedrooms === 0 ? 'studio' : String(s.bedrooms)], ['Doel-GO', s.targetGo + ' m²'], ['PMC GO-range', pmcRange],
      ['Beukmaat', mStr(s.w)], ['Diepte', mStr(s.d)], ['Bouwlagen', String(s.storeys)], ['Footprint', num(footprint) + ' m²'],
      ['Bruto casco-opp.', num(bruto) + ' m²'], ['Daktype', s.roof === 'Kap' ? 'Kap' : 'Plat dak'],
      ['Plattegrond', D.layouts[s.layout] + (s.mirrored ? ', gespiegeld' : '') + (s.rotated ? ', gedraaid' : '')],
      ['Toegankelijkheid', pmc.acc ? 'Nultreden (te verifiëren)' : 'Regulier'], ['Gevel', facadeLabel], ['Kozijnen', 'Aluminium'], ['Techniek', techLabel],
      ['Casco', 'Wanden, vloer, dak, openingen']
    ].map(([k, v]) => ({ k, v }));

    return {
      accent, steps, pmc, model, pmcRange, confidence, status, statusBg, warnings, summary,
      is1: s.step === 1, is2: s.step === 2, is3: s.step === 3, is4: s.step === 4, is5: s.step === 5,
      isRouteA: s.route === 'A', isRouteB: s.route === 'B',
      routeA: () => this.setState({ route: 'A' }),
      routeB: () => this.updateNeed({ route: 'B' }),
      routeABg: rA.bg, routeAFg: rA.fg, routeBBg: rB.bg, routeBFg: rB.fg,
      pmcButtons, matchSteppers,
      setRegular: () => this.updateNeed({ accessible: false }), setAccessible: () => this.updateNeed({ accessible: true }),
      regBg: reg.bg, regFg: reg.fg, regBd: reg.bd, accBg: acc.bg, accFg: acc.fg, accBd: acc.bd,
      matchTitle: s.route === 'B' ? 'Beste PMC-match' : 'Gekozen PMC',
      accessLabel: pmc.acc ? 'Nultreden / toegankelijk' : 'Regulier',
      modelCards, dims, segGroups, components, facades, techs, chain,
      zones, outside, house, grid, dimTop, dimSide, street, floorNote,
      planLabel: 'Schematische plattegrond ' + model.name + ', ' + mStr(s.w) + ' bij ' + mStr(s.d) + ', ' + D.layouts[s.layout],
      rangeLabel: inRange ? 'binnen PMC-range' : 'aanpassing nodig', rangeColor: inRange ? '#9CC5A1' : '#E8C547',
      prev: () => this.setState({ step: Math.max(1, s.step - 1) }), prevOpacity: s.step === 1 ? 0.4 : 1,
      next: () => this.setState({ step: s.step === 5 ? 1 : s.step + 1 }), nextLabel: s.step === 5 ? 'Opnieuw beginnen' : 'Volgende'
    };
  }
}
```

### Markup-referentie
Dit is de exacte markup van het ontwerp. Notatie: `{{naam}}` = waarde uit `renderVals()` hierboven; `<sc-for list="{{items}}" as="x">…</sc-for>` = `items.map(x => …)`; `<sc-if value="{{cond}}">…</sc-if>` = `{cond && …}`; `onClick="{{fn}}"` = click-handler. Zet dit om naar JSX, met dezelfde inline styles en waarden (`{{accent}}` = `#E3A857`).

```html
<div style="width: 1440px; height: 1320px; box-sizing: border-box; display: flex; flex-direction: column; background: #F3F0E8; color: #16242B; font-family: 'Instrument Sans', 'Helvetica Neue', Helvetica, sans-serif;">

<!-- NAV -->
<header style="display: flex; align-items: center; justify-content: space-between; padding: 28px 96px; border-bottom: 1px solid #D9D3C5;">
<a href="/" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
<svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#16242B" stroke-width="2" aria-hidden="true"><path d="M3 16 17 4l14 12v15H3z"></path><path d="M3 23h28M12 16v15M22 16v15"></path></svg>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 700; font-size: 22px; letter-spacing: -0.01em; color: #16242B;">Precas</span>
<span style="font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #5C6468; padding-left: 12px; border-left: 1px solid #C9C1AF;">Prefab casco</span>
</a>
<nav style="display: flex; gap: 36px; font-size: 15px; font-weight: 500;">
<a href="/" style="text-decoration: none;">Propositie</a>
<a href="/concepten" style="text-decoration: none;">Productfamilies</a>
<a href="/configurator" style="text-decoration: none; border-bottom: 2px solid #16242B; padding-bottom: 4px;">Configurator</a>
</nav>
</header>

<!-- PROGRESS -->
<div style="display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 24px 48px; border-bottom: 1px solid #D9D3C5;">
<div style="display: flex; align-items: baseline; gap: 16px;">
<h1 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 28px; letter-spacing: -0.015em;">HSB-configurator</h1>
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8A5518;">Grondgebonden · versie 1</span>
</div>
<nav aria-label="Stappen" style="display: flex; align-items: center; gap: 8px;">
<sc-for list="{{steps}}" as="st" hint-placeholder-count="5">
<button type="button" onClick="{{st.go}}" style="display: inline-flex; align-items: center; gap: 10px; min-height: 44px; padding: 0 16px 0 6px; border-radius: 999px; border: 1.5px solid {{st.bd}}; background: {{st.bg}}; color: {{st.fg}}; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 999px; background: {{st.dotBg}}; color: {{st.dotFg}}; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500;">{{st.n}}</span>{{st.label}}</button>
</sc-for>
</nav>
</div>

<!-- WORKSPACE -->
<div style="display: grid; grid-template-columns: 440px minmax(0, 1fr) 360px; gap: 24px; padding: 28px 48px 48px; align-items: start;">

<!-- LINKS: STAPPEN -->
<div style="display: flex; flex-direction: column; gap: 20px;">

<sc-if value="{{is1}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; flex-direction: column; gap: 20px;">
<div style="display: flex; flex-direction: column; gap: 6px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8A5518;">Stap 1</span><h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; font-weight: 600; letter-spacing: -0.015em;">Woningbehoefte</h2><p style="margin: 0; font-size: 15px; line-height: 1.5; color: #3E484D;">Start vanuit de Nederlandse marktvraag: kies een PMC of laat de configurator matchen.</p></div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0; border: 1.5px solid #16242B; border-radius: 999px; overflow: hidden;">
<button type="button" onClick="{{routeA}}" style="min-height: 44px; border: none; background: {{routeABg}}; color: {{routeAFg}}; font-family: 'Instrument Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer;">PMC bekend</button>
<button type="button" onClick="{{routeB}}" style="min-height: 44px; border: none; background: {{routeBBg}}; color: {{routeBFg}}; font-family: 'Instrument Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer;">PMC laten matchen</button>
</div>
<sc-if value="{{isRouteA}}" hint-placeholder-val="{{ true }}">
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;">
<sc-for list="{{pmcButtons}}" as="p" hint-placeholder-count="9">
<button type="button" onClick="{{p.pick}}" style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px; min-height: 64px; padding: 10px 12px; border-radius: 12px; border: 1.5px solid {{p.bd}}; background: {{p.bg}}; color: {{p.fg}}; text-align: left; cursor: pointer;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 500;">PMC {{p.id}}</span><span style="font-family: 'Instrument Sans', sans-serif; font-size: 12px; opacity: 0.8;">{{p.family}}</span></button>
</sc-for>
</div>
</sc-if>
<sc-if value="{{isRouteB}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 0; border-top: 1px solid #C9C1AF;">
<sc-for list="{{matchSteppers}}" as="m" hint-placeholder-count="3">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 0; border-bottom: 1px solid #C9C1AF;">
<span style="font-size: 16px; font-weight: 500;">{{m.label}}</span>
<div style="display: flex; align-items: center; gap: 8px;">
<button type="button" onClick="{{m.dec}}" aria-label="{{m.decLabel}}" style="width: 44px; height: 44px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-size: 20px; cursor: pointer;">−</button>
<span style="min-width: 76px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">{{m.value}}</span>
<button type="button" onClick="{{m.inc}}" aria-label="{{m.incLabel}}" style="width: 44px; height: 44px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-size: 20px; cursor: pointer;">+</button>
</div>
</div>
</sc-for>
<div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 0; border-bottom: 1px solid #C9C1AF;">
<span style="font-size: 16px; font-weight: 500;">Toegankelijkheid</span>
<div style="display: flex; gap: 8px;">
<button type="button" onClick="{{setRegular}}" style="min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1.5px solid {{regBd}}; background: {{regBg}}; color: {{regFg}}; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">Regulier</button>
<button type="button" onClick="{{setAccessible}}" style="min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1.5px solid {{accBd}}; background: {{accBg}}; color: {{accFg}}; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">Nultreden</button>
</div>
</div>
</div>
</sc-if>
<div style="background: #16242B; color: #F3F0E8; border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 14px;">
<div style="display: flex; justify-content: space-between; align-items: baseline; gap: 12px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: {{accent}};">{{matchTitle}}</span><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #C9CFD2;">Match: {{confidence}}</span></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 36px; font-weight: 600; letter-spacing: -0.02em;">PMC {{pmc.id}}</span>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 16px; font-size: 14px; line-height: 1.4;">
<div style="display: flex; flex-direction: column; gap: 2px;"><span style="color: #9AA5AA;">Doelgroep</span><span>{{pmc.doel}}</span></div>
<div style="display: flex; flex-direction: column; gap: 2px;"><span style="color: #9AA5AA;">GO-range</span><span>{{pmcRange}}</span></div>
<div style="display: flex; flex-direction: column; gap: 2px;"><span style="color: #9AA5AA;">Slaapkamers</span><span>{{pmc.slk}}</span></div>
<div style="display: flex; flex-direction: column; gap: 2px;"><span style="color: #9AA5AA;">Bewoners</span><span>{{pmc.pers}}</span></div>
<div style="display: flex; flex-direction: column; gap: 2px;"><span style="color: #9AA5AA;">Uitvoering</span><span>{{accessLabel}}</span></div>
<div style="display: flex; flex-direction: column; gap: 2px;"><span style="color: #9AA5AA;">Productfamilie</span><span>{{model.name}}</span></div>
</div>
<span style="font-size: 12px; line-height: 1.45; color: #9AA5AA;">Een match is geen certificering of gegarandeerde geschiktheid.</span>
</div>
</div>
</sc-if>

<sc-if value="{{is2}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; flex-direction: column; gap: 6px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8A5518;">Stap 2</span><h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; font-weight: 600; letter-spacing: -0.015em;">Woningtype</h2><p style="margin: 0; font-size: 15px; line-height: 1.5; color: #3E484D;">Eén HSB-woningfamilie kan meerdere Nederlandse marktvragen bedienen.</p></div>
<sc-for list="{{modelCards}}" as="c" hint-placeholder-count="4">
<button type="button" onClick="{{c.pick}}" style="display: flex; flex-direction: column; gap: 8px; padding: 16px 18px; border-radius: 16px; border: 1.5px solid {{c.bd}}; background: {{c.bg}}; color: #16242B; text-align: left; cursor: pointer; font-family: 'Instrument Sans', sans-serif;">
<span style="display: flex; justify-content: space-between; align-items: center; width: 100%;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #6A5A45;">Model {{c.id}} · {{c.pmcs}}</span><span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; padding: 3px 8px; border-radius: 6px; background: {{c.tagBg}}; color: #16242B;">{{c.tag}}</span></span>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 22px; font-weight: 600;">{{c.name}}</span>
<span style="font-size: 13px; line-height: 1.4; color: #3E484D;">{{c.pers}} · {{c.slk}} · GO {{c.go}}</span>
</button>
</sc-for>
</div>
</sc-if>

<sc-if value="{{is3}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; flex-direction: column; gap: 6px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8A5518;">Stap 3</span><h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; font-weight: 600; letter-spacing: -0.015em;">Afmetingen &amp; indeling</h2><p style="margin: 0; font-size: 13px; line-height: 1.5; color: #5C6468;">Gebaseerd op 600 mm modulair grid · presets indicatief (TBC leverancier)</p></div>
<sc-for list="{{dims}}" as="d" hint-placeholder-count="2">
<div style="display: flex; flex-direction: column; gap: 10px; padding: 14px 0; border-top: 1px solid #C9C1AF;">
<div style="display: flex; align-items: center; justify-content: space-between;">
<span style="font-size: 16px; font-weight: 500;">{{d.label}}</span>
<div style="display: flex; align-items: center; gap: 8px;">
<button type="button" onClick="{{d.dec}}" aria-label="{{d.decLabel}}" style="width: 44px; height: 44px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-size: 20px; cursor: pointer;">−</button>
<span style="min-width: 76px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">{{d.value}}</span>
<button type="button" onClick="{{d.inc}}" aria-label="{{d.incLabel}}" style="width: 44px; height: 44px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-size: 20px; cursor: pointer;">+</button>
</div>
</div>
<div style="display: flex; gap: 8px;">
<sc-for list="{{d.presets}}" as="pr" hint-placeholder-count="3">
<button type="button" onClick="{{pr.pick}}" style="min-height: 36px; padding: 0 12px; border-radius: 8px; border: 1.5px solid {{pr.bd}}; background: {{pr.bg}}; color: {{pr.fg}}; font-family: 'JetBrains Mono', monospace; font-size: 13px; cursor: pointer;">{{pr.label}}</button>
</sc-for>
</div>
</div>
</sc-for>
<sc-for list="{{segGroups}}" as="g" hint-placeholder-count="3">
<div style="display: flex; flex-direction: column; gap: 10px; padding: 14px 0 0; border-top: 1px solid #C9C1AF;">
<span style="font-size: 16px; font-weight: 500;">{{g.label}}</span>
<div style="display: flex; flex-wrap: wrap; gap: 8px;">
<sc-for list="{{g.options}}" as="o" hint-placeholder-count="3">
<button type="button" onClick="{{o.pick}}" style="min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1.5px solid {{o.bd}}; background: {{o.bg}}; color: {{o.fg}}; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">{{o.label}}</button>
</sc-for>
</div>
</div>
</sc-for>
</div>
</sc-if>

<sc-if value="{{is4}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; flex-direction: column; gap: 6px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8A5518;">Stap 4</span><h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; font-weight: 600; letter-spacing: -0.015em;">Casco &amp; uitstraling</h2><p style="margin: 0; font-size: 15px; line-height: 1.5; color: #3E484D;">Dit woningtype wordt vertaald naar deze prefab casco-componenten.</p></div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px;">
<sc-for list="{{components}}" as="k" hint-placeholder-count="5">
<div style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid #C9C1AF; border-radius: 12px; font-size: 14px; font-weight: 500;"><svg width="22" height="22" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="14" fill="{{accent}}"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>{{k.label}}</div>
</sc-for>
</div>
<div style="display: flex; flex-direction: column; gap: 10px; padding-top: 14px; border-top: 1px solid #C9C1AF;">
<span style="font-size: 16px; font-weight: 500;">Gevel / buitenschil</span>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px;">
<sc-for list="{{facades}}" as="f" hint-placeholder-count="4">
<button type="button" onClick="{{f.pick}}" style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px; padding: 10px; border-radius: 12px; border: 1.5px solid {{f.bd}}; background: {{f.bg}}; color: #16242B; text-align: left; cursor: pointer; font-family: 'Instrument Sans', sans-serif;"><span style="display: block; width: 100%; height: 34px; border-radius: 6px; background: {{f.swatch}};"></span><span style="font-size: 13px; font-weight: 600; line-height: 1.3;">{{f.label}}</span></button>
</sc-for>
</div>
</div>
<div style="display: flex; justify-content: space-between; gap: 12px; padding: 12px 0; border-top: 1px solid #C9C1AF; font-size: 14px;"><span style="font-weight: 500;">Kozijnen</span><span style="color: #3E484D;">Aluminium (bronreferentie) · overige TBC leverancier</span></div>
<div style="display: flex; flex-direction: column; gap: 10px; padding-top: 12px; border-top: 1px solid #C9C1AF;">
<span style="font-size: 16px; font-weight: 500;">Techniekpakket</span>
<div style="display: flex; flex-wrap: wrap; gap: 8px;">
<sc-for list="{{techs}}" as="t" hint-placeholder-count="5">
<button type="button" onClick="{{t.toggle}}" aria-pressed="{{t.pressed}}" style="min-height: 44px; padding: 0 14px; border-radius: 999px; border: 1.5px solid {{t.bd}}; background: {{t.bg}}; color: {{t.fg}}; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">{{t.label}}</button>
</sc-for>
</div>
<span style="font-size: 12px; line-height: 1.45; color: #5C6468;">Geen vermogens, aantallen panelen of dimensionering: volgt na validatie met leveranciersdata.</span>
</div>
</div>
</sc-if>

<sc-if value="{{is5}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; flex-direction: column; gap: 6px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8A5518;">Stap 5</span><h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; font-weight: 600; letter-spacing: -0.015em;">Resultaat</h2></div>
<div style="display: flex; flex-direction: column; border: 1px solid #16242B; border-radius: 20px; overflow: hidden;">
<sc-for list="{{chain}}" as="ch" hint-placeholder-count="4">
<div style="display: flex; flex-direction: column; gap: 4px; padding: 16px 20px; border-top: {{ch.bt}}; background: {{ch.bg}};"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #6A5A45;">{{ch.n}}</span><span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 20px; font-weight: 600;">{{ch.title}}</span><span style="font-size: 14px; line-height: 1.4; color: #3E484D;">{{ch.text}}</span></div>
</sc-for>
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px;">
<button type="button" style="min-height: 48px; padding: 0 14px; border-radius: 999px; border: none; background: {{accent}}; color: #16242B; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">Download conceptsamenvatting</button>
<button type="button" style="min-height: 48px; padding: 0 14px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">Vraag technische check aan</button>
<button type="button" style="min-height: 48px; padding: 0 14px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">Maak projectvariant</button>
<button type="button" style="min-height: 48px; padding: 0 14px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-family: 'Instrument Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer;">Deel configuratie</button>
</div>
<p style="margin: 0; padding: 14px 16px; background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 12px; font-size: 14px; line-height: 1.45; color: #3E484D;">Prijs op aanvraag — technische leveranciersdata nog niet gekoppeld.</p>
</div>
</sc-if>

<div style="display: flex; justify-content: space-between; gap: 12px; padding-top: 16px; border-top: 1px solid #D9D3C5;">
<button type="button" onClick="{{prev}}" style="min-height: 48px; padding: 0 22px; border-radius: 999px; border: 1.5px solid #16242B; background: transparent; color: #16242B; font-family: 'Instrument Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; opacity: {{prevOpacity}};">Vorige</button>
<button type="button" onClick="{{next}}" style="min-height: 48px; padding: 0 26px; border-radius: 999px; border: none; background: #16242B; color: #F3F0E8; font-family: 'Instrument Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer;">{{nextLabel}}</button>
</div>
</div>

<!-- MIDDEN: LIVE VISUAL -->
<div style="display: flex; flex-direction: column; gap: 16px; background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 24px; padding: 24px;">
<div style="display: flex; align-items: center; flex-wrap: wrap; gap: 10px; font-family: 'JetBrains Mono', monospace; font-size: 13px;">
<span style="padding: 6px 10px; border-radius: 8px; border: 1.5px solid #16242B;">PMC {{pmc.id}}</span><span style="color: #8A5518;">→</span>
<span style="padding: 6px 10px; border-radius: 8px; background: {{accent}};">HSB {{model.name}}</span><span style="color: #8A5518;">→</span>
<span style="padding: 6px 10px; border-radius: 8px; background: #16242B; color: #F3F0E8;">configureerbaar casco</span>
</div>
<svg viewBox="0 0 560 500" width="100%" aria-label="{{planLabel}}" style="display: block;">
<defs><pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#F3F0E8"></rect><line x1="0" y1="0" x2="0" y2="8" stroke="#8A5518" stroke-width="1.5"></line></pattern></defs>
<sc-for list="{{outside}}" as="o" hint-placeholder-count="1">
<rect x="{{o.x}}" y="{{o.y}}" width="{{o.w}}" height="{{o.h}}" fill="url(#hatch)" stroke="#8A5518" stroke-width="1.2" stroke-dasharray="5 4"></rect>
</sc-for>
<sc-for list="{{zones}}" as="z" hint-placeholder-count="4">
<rect x="{{z.x}}" y="{{z.y}}" width="{{z.w}}" height="{{z.h}}" fill="{{z.fill}}" fill-opacity="{{z.op}}"></rect>
</sc-for>
<g stroke="#16242B" stroke-opacity="0.14" stroke-width="1">
<sc-for list="{{grid}}" as="l" hint-placeholder-count="12">
<line x1="{{l.x1}}" y1="{{l.y1}}" x2="{{l.x2}}" y2="{{l.y2}}"></line>
</sc-for>
</g>
<sc-for list="{{zones}}" as="z" hint-placeholder-count="4">
<rect x="{{z.x}}" y="{{z.y}}" width="{{z.w}}" height="{{z.h}}" fill="none" stroke="#16242B" stroke-width="1.2"></rect>
</sc-for>
<rect x="{{house.x}}" y="{{house.y}}" width="{{house.w}}" height="{{house.h}}" fill="none" stroke="#16242B" stroke-width="3"></rect>
<sc-for list="{{zones}}" as="z" hint-placeholder-count="4">
<text x="{{z.cx}}" y="{{z.cy}}" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="12" font-weight="600" fill="{{z.text}}">{{z.label}}</text>
</sc-for>
<sc-for list="{{outside}}" as="o" hint-placeholder-count="1">
<text x="{{o.cx}}" y="{{o.cy}}" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="12" font-weight="600" fill="#8A5518">{{o.label}}</text>
</sc-for>
<g stroke="#16242B" stroke-width="1">
<line x1="{{dimTop.x1}}" y1="{{dimTop.y}}" x2="{{dimTop.x2}}" y2="{{dimTop.y}}"></line>
<line x1="{{dimTop.x1}}" y1="{{dimTop.t1}}" x2="{{dimTop.x1}}" y2="{{dimTop.t2}}"></line>
<line x1="{{dimTop.x2}}" y1="{{dimTop.t1}}" x2="{{dimTop.x2}}" y2="{{dimTop.t2}}"></line>
<line x1="{{dimSide.x}}" y1="{{dimSide.y1}}" x2="{{dimSide.x}}" y2="{{dimSide.y2}}"></line>
<line x1="{{dimSide.t1}}" y1="{{dimSide.y1}}" x2="{{dimSide.t2}}" y2="{{dimSide.y1}}"></line>
<line x1="{{dimSide.t1}}" y1="{{dimSide.y2}}" x2="{{dimSide.t2}}" y2="{{dimSide.y2}}"></line>
</g>
<text x="{{dimTop.cx}}" y="{{dimTop.ty}}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12" fill="#16242B">{{dimTop.label}}</text>
<text x="{{dimSide.tx}}" y="{{dimSide.cy}}" text-anchor="middle" transform="{{dimSide.rot}}" font-family="JetBrains Mono, monospace" font-size="12" fill="#16242B">{{dimSide.label}}</text>
<text x="{{street.x}}" y="{{street.y}}" text-anchor="middle" transform="{{street.rot}}" font-family="JetBrains Mono, monospace" font-size="11" letter-spacing="1.5" fill="#6A5A45">STRAAT · VOORGEVEL</text>
</svg>
<div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px; color: #3E484D;">
<span style="display: inline-flex; align-items: center; gap: 6px;"><span style="width: 14px; height: 14px; background: {{accent}}; opacity: 0.55;"></span>Wonen</span>
<span style="display: inline-flex; align-items: center; gap: 6px;"><span style="width: 14px; height: 14px; background: #C9CFD2;"></span>Slapen</span>
<span style="display: inline-flex; align-items: center; gap: 6px;"><span style="width: 14px; height: 14px; background: #16242B;"></span>Natte/techn. kern</span>
<span style="display: inline-flex; align-items: center; gap: 6px;"><span style="width: 14px; height: 14px; background: #FFFFFF; border: 1px solid #C9C1AF; box-sizing: border-box;"></span>Hal / entree</span>
<span style="display: inline-flex; align-items: center; gap: 6px;"><span style="width: 14px; height: 14px; border: 1px dashed #8A5518; box-sizing: border-box;"></span>Terras / buiten</span>
</div>
<span style="font-size: 12px; line-height: 1.45; color: #5C6468;">Schematische 2D-weergave van de begane grond — geen technische tekening of BIM. Achtergrondgrid 600 mm. {{floorNote}}</span>
</div>

<!-- RECHTS: SAMENVATTING -->
<aside style="display: flex; flex-direction: column; gap: 16px; background: #16242B; color: #F3F0E8; border-radius: 24px; padding: 24px;">
<div style="display: flex; flex-direction: column; gap: 8px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #C9CFD2;">Matchstatus</span>
<span style="display: inline-flex; align-self: flex-start; align-items: center; min-height: 40px; padding: 0 16px; border-radius: 10px; background: {{statusBg}}; color: #16242B; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500; letter-spacing: 0.04em;">{{status}}</span>
<sc-for list="{{warnings}}" as="w" hint-placeholder-count="1">
<span style="font-size: 13px; line-height: 1.4; color: #E4E0D6;">— {{w}}</span>
</sc-for>
</div>
<div style="display: flex; flex-direction: column;">
<sc-for list="{{summary}}" as="r" hint-placeholder-count="12">
<div style="display: flex; justify-content: space-between; gap: 12px; padding: 7px 0; border-top: 1px solid #3A4A52; font-size: 13px; line-height: 1.35;"><span style="color: #9AA5AA; flex-shrink: 0;">{{r.k}}</span><span style="text-align: right;">{{r.v}}</span></div>
</sc-for>
</div>
<div style="display: flex; justify-content: space-between; gap: 12px; padding: 12px 14px; border-radius: 12px; background: #22363F; font-size: 13px;"><span style="color: #C9CFD2;">Doel-GO t.o.v. PMC-range</span><span style="font-weight: 600; color: {{rangeColor}};">{{rangeLabel}}</span></div>
<span style="font-size: 12px; line-height: 1.45; color: #9AA5AA;">Indicatieve GO — rekenregel nog te valideren. Bruto casco-oppervlak = beukmaat × diepte × bouwlagen.</span>
</aside>

</div>
</div>
```

---

## Controle voor oplevering
- Homepage op 1440 px: alles van v1 staat er nog, identiek. Nieuwe nav-link en de sectie "Configurator" staan tussen PMC-matrix en "Voor wie"; totale hoogte ± 7720 px.
- `/concepten` identiek aan `concepten-referentie.html`.
- `/configurator`: alle 5 stappen werken; PMC 1–4 geven standaard `GOED PASSEND`, PMC 5 `ENGINEERING NODIG`, PMC 15–18 tonen "Toegankelijkheidsengineering te verifiëren"; plattegrond reageert op maat, variant, spiegelen en draaien, met 600 mm-grid en maatlijnen.
- Nergens verzonnen technische waarden, prijzen of GO-berekeningen.
