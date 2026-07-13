# Woningtype configurator

Stapsgewijze configurator voor een blok van 5 geschakelde rijwoningen
(begane grond -> verdieping -> positie in het blok), gebouwd met
React + TypeScript + Vite + Tailwind. Bedoeld om te pushen naar GitHub en
te importeren/syncen in Lovable.

## Starten

```bash
npm install
npm run dev
```

## Structuur

- `src/data/config.json` - het datamodel: alle bouwstenen (bg, verdieping,
  positie) met kenmerken en de compatibiliteitsmatrix (`compatibleWith`).
  Dit is de enige plek die je aanpast om opties of regels te wijzigen.
- `src/lib/compat.ts` - filterlogica die de matrix uit `config.json` toepast
  (welke opties zijn geldig gegeven de vorige keuzes) en de renderpad-opbouw.
- `src/components/` - stap-selector (`StepSection`, `OptionCard`) en de live
  preview (`PreviewPane`).
- `public/renders/` - hier drop je later de echte renderafbeeldingen, zie
  `public/renders/README.md` voor de exacte bestandsnamen. Zonder die
  bestanden toont de app automatisch een placeholder.

## Compatibiliteitsmatrix (gevalideerd)

| Bouwsteen | Kop-links | Tussenwoning | Kop-rechts (gespiegeld) |
|---|---|---|---|
| BG - standaard | met zij-uitbouw/raam | zonder zij-uitbouw | met zij-uitbouw/raam (gespiegeld) |
| Verdieping - standaard (1 badkamer) | ok | ok | ok |
| Verdieping - met en-suite (2 badkamers) | ok | ok | ok |

- Begane grond is 1 basisplattegrond die bij een kopwoning-positie een
  zij-uitbouw met raam krijgt (positie-afhankelijk), bij een tussenwoning
  niet.
- Verdieping heeft 2 varianten die vrij met elke positie te combineren zijn:
  standaard (bergruimte/linnenkast naast de trap) en een-suite (dezelfde
  plattegrond, maar die bergruimte is vervangen door een en-suite badkamer
  met dubbele wastafel + ligbad bij de hoofdslaapkamer).

## Aannames om te checken bij de architect voordat dit live gaat

1. Het gestippelde kader dat in de brontekeningen bij een aantal
   plattegronden rechtsboven staat, is geïnterpreteerd als CAD-tekenartefact
   (contour van het naastgelegen blok/volume voor uitlijning) en dus niet als
   los te kiezen bouwkundig element.
2. De 3 middelste woningen in het blok van 5 zijn onderling identiek
   ("tussenwoning" als 1 herbruikbaar type); de en-suite-variant is bij elke
   tussenwoning-positie beschikbaar, niet gebonden aan een specifieke plek in
   de rij.
3. Kopwoning-rechts is een spiegeling van kopwoning-links; er is geen aparte
   brontekening voor de spiegeling gebruikt.
4. Meterkast/wasmachine-droger-aansluiting zit voor alle posities op dezelfde
   plek (vooraan bij de entree, doorlopende schacht); dit is niet
   positie-afhankelijk gemodelleerd.

## Renders aan te leveren

Zie `public/renders/README.md` voor de exacte bestandsnamen. Met de huidige
1 bg x 2 verdieping x 3 posities zijn dat 6 jpg's, opgebouwd als
`{bg-id}_{verdieping-id}_{positie-id}.jpg`.
