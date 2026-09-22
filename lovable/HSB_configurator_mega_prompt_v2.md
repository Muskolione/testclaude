# LOVABLE MEGA PROMPT — HSB Parametrisch | Grondgebonden PMC Configurator

## 0. DOEL

Bouw een professionele Nederlandse B2B-webapp voor een buitenlandse HSB/prefab leverancier die de Nederlandse woningbouwmarkt wil betreden.

De applicatie vertaalt de **Nederlandse woningvraag** naar een beperkt aantal **parametrische HSB-basismodellen** en vervolgens naar een configureerbaar prefab casco.

De gebruiker begint dus niet bij een paneel, wandopbouw of technisch detail, maar bij de woning die hij nodig heeft.

De hoofdlogica is:

`Woningbehoefte → woningtype → afmetingen & indeling → casco & uitstraling → resultaat`

De eerste versie bevat uitsluitend **grondgebonden woningen** uit tabblad `DATA ALL`.

---

# 1. KERNPROPOSITIE

De leverancier verkoopt niet alleen losse HSB-panelen.

De propositie is:

> **Van Nederlandse woningvraag naar configureerbaar HSB-casco, zonder voor ieder project opnieuw met een leeg SO te beginnen.**

De applicatie moet zichtbaar maken dat meerdere Nederlandse PMC's kunnen worden bediend vanuit een beperkt aantal herhaalbare woningfamilies.

Gebruik hiervoor vier parametrische basismodellen:

1. **Compact**
2. **Compact+**
3. **Family M**
4. **Family L/XL**

Deze modellen vormen de brug tussen:

`Nederlandse marktvraag → gestandaardiseerd woningproduct → parametrische geometrie → fabrieksmatig HSB-casco`

---

# 2. BRONNEN EN DATACERTAINTY

Gebruik twee inhoudelijke bronnen:

## Nederlandse marktdata
Gebruik tabblad `DATA ALL` uit de aangeleverde PMC-dataset.

Filter uitsluitend:

`Categorie = Grondgebonden`

Relevante PMC's voor versie 1:

- PMC 1
- PMC 2
- PMC 3
- PMC 4
- PMC 5
- PMC 15
- PMC 16
- PMC 17
- PMC 18

Gebruik waar aanwezig onder andere:

- PMC
- Categorie
- Doelgroep (WS)
- Doelgroepvraag (label)
- Beleidsdoel gemeente
- Kamers
- Huurniveau
- Sector
- GO min
- GO max
- BVO min
- BVO max
- Woonoppervlak
- Type concept
- Beukmaat
- Diepte
- Kap / Daktype
- Kamers totaal
- Slaapkamers
- Personen max
- Grondoppervlak woning
- HSB productfamilie

## MBS / HSB referentie
Gebruik de aangeleverde MBS-presentatie als referentie voor de productlogica.

Daaruit mogen de volgende principes worden gebruikt:

- 600 x 600 mm modulair grid;
- modulaire en schakelbare woningopbouw;
- 2D-opbouw met wand-, vloer- en raamcomponenten;
- variatie in plattegrond;
- doorzonprincipe;
- relatie binnen-buiten;
- inpandig terras;
- draaien en spiegelen van plattegronden;
- HSB als prefab casco-/wandsysteem;
- verschillende buitenschillen;
- installatieconcepten zoals warmtepomp, vloerverwarming, PV en ventilatie.

De presentatie bevat niet voldoende informatie om definitieve engineering, constructieve berekeningen of productieclaims te doen.

Gebruik daarom drie statussen:

- `BRON_BEVEESTIGD`
- `AFGELEID_PARAMETRISCH`
- `TBC_LEVERANCIER`

Verzin nooit ontbrekende technische waarden.

---

# 3. DE 4 PARAMETRISCHE WONINGFAMILIES

## MODEL A — COMPACT

**Marktpositie**  
Kleinste zelfstandige grondgebonden woning.

**Primaire PMC**  
PMC 1

**Doelgroep**  
1 persoon / starter / compact wonen

**Programma**
- studio of compacte 1-slaapkameroplossing;
- kleinste grondgebonden footprint;
- compacte natte kern;
- open woonruimte.

**GO**  
Gebruik altijd de actuele waarden uit `DATA ALL`.

Indicatieve range uit de huidige dataset:
- circa 24–55 m² GO.

**Status**
- marktdata: `BRON_BEVEESTIGD`
- geometrische vertaling: `AFGELEID_PARAMETRISCH`

---

## MODEL B — COMPACT+

**Marktpositie**  
Compacte 1–2 persoonswoning.

**Primaire PMC's**
- PMC 2
- PMC 15 als nultreden/toegankelijke variant

**Programma**
- 1 slaapkamer;
- 1–2 personen;
- volwaardige woon-/eetruimte;
- badkamer;
- technische zone.

**Indicatieve GO-range**
- PMC 2: circa 55–65 m²;
- PMC 15: vanaf circa 45 m².

**Productlogica**

Niet:

`PMC 2 = uniek casco`

Maar:

`Model B → regulier → PMC 2`

`Model B + toegankelijkheidsmodifier → PMC 15`

---

## MODEL C — FAMILY M

**Marktpositie**  
Reguliere grondgebonden gezinswoning.

**Primaire PMC's**
- PMC 3
- PMC 16
- PMC 17 waar programma en oppervlakte passen

**Programma**
- 2 slaapkamers als basis;
- circa 2–3 personen;
- woonkamer + keuken;
- natte kern;
- techniekruimte;
- optionele extra werk-/slaapruimte wanneer geometrie dit toelaat.

**Indicatieve GO-range**
- PMC 3: circa 65–90 m²;
- PMC 16: vanaf circa 55 m²;
- PMC 17: circa 45–90 m².

**Varianten**
- regulier;
- nultreden / levensloopbestendig;
- spiegelen;
- draaien;
- doorzon;
- inpandig terras.

---

## MODEL D — FAMILY L / XL

**Marktpositie**  
Ruime grondgebonden gezinswoning.

**Primaire PMC's**
- PMC 4
- PMC 18
- PMC 5 als XL-uitbreidingsvariant

**Programma**
- 3 slaapkamers als basis;
- circa 3–5 personen;
- ruimere leefzone;
- optionele 4e slaapkamer / werkkamer bij XL.

**Indicatieve GO-range**
- PMC 4: circa 90–115 m²;
- PMC 18: vanaf circa 90 m²;
- PMC 5: groter dan circa 115 m².

**PMC 5 regel**

PMC 5 is geen standaard bewezen MBS-productvariant.

Daarom:
- gebruik `Model D + XL_EXTENSION`;
- label als `AFGELEID_PARAMETRISCH`;
- validation status minimaal `ENGINEERING_REQUIRED`;
- toon melding: `Definitieve moduleopbouw en engineering door leverancier te bevestigen.`

---

# 4. CONFIGURATOR — MAXIMAAL 5 STAPPEN

De configurator moet snel, commercieel en visueel aanvoelen.

Geen technisch wizard-proces met veel losse schermen.

Gebruik exact deze vijf hoofdstappen:

---

## STAP 1 — WONINGBEHOEFTE

Doel: vanuit de Nederlandse marktvraag starten.

Geef twee ingangen.

### Route A — PMC bekend

Toon kaarten of dropdown:

- PMC 1
- PMC 2
- PMC 3
- PMC 4
- PMC 5
- PMC 15
- PMC 16
- PMC 17
- PMC 18

### Route B — PMC laten matchen

Vraag alleen:

- doelgroep;
- aantal personen;
- aantal slaapkamers;
- gewenste GO of GO-bandbreedte;
- regulier of nultreden/toegankelijk;
- sector/huursegment alleen wanneer relevant.

Output:

`Beste PMC-match: PMC X`

Gebruik het woord **match**, nooit certificering of gegarandeerde geschiktheid.

Toon direct:
- doelgroep;
- GO-range;
- slaapkamers;
- bewoners;
- regulier/nultreden;
- confidence van de match.

---

## STAP 2 — WONINGTYPE

Vertaal de woningbehoefte automatisch naar één van de vier HSB-productfamilies:

- Compact
- Compact+
- Family M
- Family L/XL

Toon per kaart:

- productfamilie;
- passende PMC's;
- doelgroep;
- personen;
- slaapkamers;
- GO-bandbreedte;
- korte schematische woningvisual;
- eventuele modifier zoals `ACCESSIBLE` of `XL_EXTENSION`.

Selecteer automatisch de beste match, maar laat de gebruiker een andere productfamilie bekijken.

Primaire boodschap:

> Eén HSB-woningfamilie kan meerdere Nederlandse marktvragen bedienen.

---

## STAP 3 — AFMETINGEN & INDELING

Combineer hier maatvoering en plattegrondkeuze in één scherm.

### Maatvoering

Configureer:

- beukmaat;
- diepte;
- bouwlagen;
- daktype wanneer uit brondata beschikbaar.

### Gridregel

Gebruik een basisgrid van:

`600 mm`

Wanneer de gebruiker maatvoering wijzigt:

- snap naar veelvouden van 0,60 m;
- toon subtiel `Gebaseerd op 600 mm modulair grid`;
- gebruik bestaande beukmaat/diepte-combinaties uit `DATA ALL` als presets.

### Candidate presets uit MBS-presentatie

Gebruik alleen als indicatieve geometrische presets:

- 5,40 m
- 7,20 m = 3,60 + 3,60
- 9,00 m = 4,20 + 4,80
- 12,00 m = 3,60 + 3,60 + 4,80

Status:

`TBC_LEVERANCIER`

Dit zijn geen harde productielimieten.

### Plattegrondkeuzes

Integreer visueel:

- doorzon;
- sterke relatie binnen-buiten;
- inpandig terras;
- spiegelen;
- draaien.

Gebruik hiervoor eenvoudige interactieve 2D SVG-plattegronden.

Geen fake BIM of niet-gevalideerde technische tekeningen.

### Live controles

Toon continu:

- gekozen maatvoering;
- footprint;
- doel-GO;
- PMC GO-range;
- slaapkamers;
- personen;
- `binnen PMC-range` / `aanpassing nodig`.

Bereken GO alleen wanneer er een gevalideerde rekenregel beschikbaar is.

Anders:

`Indicatieve GO — rekenregel nog te valideren`

---

## STAP 4 — CASCO & UITSTRALING

Combineer casco, gevel en techniek in één commercieel productscherm.

### HSB-casco

Toon als configureerbare onderdelen:

- buitenwand;
- binnenwand;
- vloer;
- dak;
- raam-/deuropeningen.

Doel is niet dat de gebruiker technische laagopbouwen gaat engineeren.

Toon vooral:

`Dit woningtype wordt vertaald naar deze prefab casco-componenten.`

### Gevel / buitenschil

Maak visuele keuzevarianten:

- metselwerk / steenachtige gevel;
- plaat-/paneelafwerking;
- keramische gevelbekleding;
- overige afwerking — `TBC_LEVERANCIER`.

### Kozijnen

- aluminium als bronreferentie;
- andere opties `TBC_LEVERANCIER`.

### Techniekpakket

Toon compacte toggles of pakketkaarten:

**Duurzaam basispakket**
- warmtepomp;
- vloerverwarming;
- zonnepanelen;
- ventilatie.

**Optioneel**
- regenwaterrecuperatie.

Gebruik geen exacte vermogens, aantallen panelen, COP's of installatiedimensionering wanneer hiervoor geen gevalideerde brondata beschikbaar is.

---

## STAP 5 — RESULTAAT

Dit is het belangrijkste commerciële scherm.

De gebruiker moet in één oogopslag zien hoe de Nederlandse vraag is vertaald naar een HSB-product.

### Bovenaan

Toon:

`PMC X → HSB Model X → configureerbaar casco`

### Grote visual

Toon links of centraal:

- schematische plattegrond;
- woningmassa / eenvoudige gevelvisual;
- gekozen maatvoering;
- eventueel 2D componenthighlighting.

### Samenvatting

Toon:

- PMC;
- doelgroep;
- productfamilie;
- modifier;
- personen;
- slaapkamers;
- doel-GO;
- PMC GO-range;
- beukmaat;
- diepte;
- bouwlagen;
- footprint;
- daktype;
- plattegrondvariant;
- toegankelijkheid;
- gevelkeuze;
- techniekpakket;
- casco-componenten.

### Matchstatus

Gebruik exact drie statussen:

- `GOED PASSEND`
- `AANPASSING NODIG`
- `ENGINEERING NODIG`

Nooit tonen:

`voldoet gegarandeerd`

### CTA's

- `Download conceptsamenvatting`
- `Vraag technische check aan`
- `Maak projectvariant`
- `Deel configuratie`

---

# 5. PMC → PRODUCTFAMILIE MAPPING

Houd alle mapping centraal in één databestand.

```ts
const pmcModelMap = {
  "PMC 1": { model: "A", modifier: "REGULAR", confidence: "HIGH" },
  "PMC 2": { model: "B", modifier: "REGULAR", confidence: "HIGH" },
  "PMC 3": { model: "C", modifier: "REGULAR", confidence: "HIGH" },
  "PMC 4": { model: "D", modifier: "REGULAR", confidence: "HIGH" },
  "PMC 5": { model: "D", modifier: "XL_EXTENSION", confidence: "MEDIUM" },
  "PMC 15": { model: "B", modifier: "ACCESSIBLE", confidence: "MEDIUM" },
  "PMC 16": { model: "C", modifier: "ACCESSIBLE", confidence: "MEDIUM" },
  "PMC 17": { model: "C", modifier: "ACCESSIBLE_FLEX", confidence: "MEDIUM" },
  "PMC 18": { model: "D", modifier: "ACCESSIBLE", confidence: "MEDIUM" }
};
```

Deze mapping is commercieel/functioneel en geen officiële PMC-certificatie.

---

# 6. DATAMODEL

## `pmc_profiles`

```ts
interface PmcProfile {
  id: string;
  pmc: string;
  category: "Grondgebonden";
  doelgroep: string;
  doelgroepLabel: string;
  beleidsdoel: string;
  sector: string;
  goMin: number | null;
  goMax: number | null;
  bvoMin: number | null;
  bvoMax: number | null;
  slaapkamers: number | null;
  personenMax: number | null;
  beukmaat: number | null;
  diepte: number | null;
  daktype: string | null;
  bron: string;
}
```

## `hsb_base_models`

```ts
interface HsbBaseModel {
  id: "A" | "B" | "C" | "D";
  name: string;
  subtitle: string;
  pmcIds: string[];
  personsMin: number;
  personsMax: number;
  bedroomsMin: number;
  bedroomsMax: number;
  targetGoMin: number | null;
  targetGoMax: number | null;
  gridMm: 600;
  geometryPresets: number[];
  sourceStatus: "BRON_BEVEESTIGD" | "AFGELEID_PARAMETRISCH" | "TBC_LEVERANCIER";
}
```

## `configuration`

```ts
interface HouseConfiguration {
  id: string;
  pmc: string;
  baseModel: "A" | "B" | "C" | "D";
  modifier: "REGULAR" | "ACCESSIBLE" | "ACCESSIBLE_FLEX" | "XL_EXTENSION";
  persons: number;
  bedrooms: number;
  targetGo: number;
  widthM: number;
  depthM: number;
  storeys: number;
  roofType: string | null;
  layoutVariant: "THROUGH" | "INDOOR_OUTDOOR" | "INTERNAL_TERRACE" | "ROTATED";
  mirrored: boolean;
  facadeOption: string;
  technicalPackage: string[];
  validationStatus: "GOOD_MATCH" | "ADJUSTMENT_REQUIRED" | "ENGINEERING_REQUIRED";
}
```

---

# 7. VALIDATIEREGELS

## Alleen grondgebonden

```ts
Categorie === "Grondgebonden"
```

Gestapelde, galerij-, corridor-, flex- en geclusterde records horen niet in versie 1.

## GO

- doel-GO onder minimum → waarschuwing;
- doel-GO boven maximum → waarschuwing;
- `GO max = null` → open bovengrens, nooit als 0 behandelen.

## Modulair grid

Alle vrije maatvoering moet standaard voldoen aan:

```ts
maat_mm % 600 === 0
```

## Nultreden PMC's

Voor PMC 15–18:

- activeer automatisch toegankelijkheidsmodifier;
- claim nooit automatisch volledige bouwkundige toegankelijkheid;
- toon `Toegankelijkheidsengineering te verifiëren`.

## PMC 5

PMC 5:

- `Model D`;
- `XL_EXTENSION`;
- minimale status `ENGINEERING_REQUIRED`.

## Datacertainty

Iedere technische eigenschap kan metadata krijgen:

```ts
{
  value: null,
  sourceStatus: "TBC_LEVERANCIER",
  sourceLabel: "MBS presentatie / DATA ALL / leverancier"
}
```

---

# 8. LIVE VISUAL

Gebruik voor de MVP een parametrische 2D SVG-visual.

Geen nep-BIM-viewer.

De visual reageert direct op:

- productfamilie;
- breedte;
- diepte;
- slaapkamers;
- plattegrondvariant;
- spiegeling;
- terras.

Gebruik een subtiel 600 mm achtergrondgrid.

Toon maatlijnen aan de buitenzijde.

Gebruik rustige zones voor:

- wonen;
- slapen;
- natte/technische kern;
- terras/buitenruimte.

Doel:

> De klant moet begrijpen dat verschillende woningen uit één modulair productplatform worden opgebouwd.

---

# 9. UX / UI

Ontwerpstijl:

- hoogwaardige Nederlandse architectuur;
- industrieel en technisch;
- B2B;
- veel witruimte;
- rustig kleurgebruik;
- duidelijke typografie;
- geen consumenten-keukenconfigurator;
- geen speelgoedachtige 3D-interface.

## Desktop

Gebruik bij voorkeur:

- links: configuratiekeuzes / 5 stappen;
- midden: grote live woningvisual;
- rechts: sticky samenvatting en matchstatus.

Gebruik bovenaan een compacte progressbar:

`1 Woningbehoefte → 2 Woningtype → 3 Afmetingen & indeling → 4 Casco & uitstraling → 5 Resultaat`

## Mobiel

- stappen als accordion / full-width panels;
- visual boven samenvatting;
- sticky `Volgende` knop.

---

# 10. PRODUCTFAMILIEPAGINA

Maak `/concepten` met vier productkaarten.

### Compact
`1 persoon | PMC 1`

### Compact+
`1–2 personen | 1 slaapkamer | PMC 2 / PMC 15`

### Family M
`2–3 personen | 2 slaapkamers | PMC 3 / PMC 16 / PMC 17`

### Family L/XL
`3–5+ personen | 3+ slaapkamers | PMC 4 / PMC 18 / PMC 5`

Per kaart:

- doelgroep;
- slaapkamers;
- GO-bandbreedte uit DATA ALL;
- PMC-koppelingen;
- modifier;
- geometrie-presets;
- knop `Configureer`.

---

# 11. DATABASE / SUPABASE

Gebruik Supabase wanneer dit al in het project aanwezig is.

Maak minimaal:

- `pmc_profiles`
- `hsb_base_models`
- `geometry_presets`
- `configuration_options`
- `configurations`
- `source_references`

Maak later CSV/XLSX-import mogelijk voor `DATA ALL`.

Importregels:

- uitsluitend `Categorie = Grondgebonden`;
- dedupliceren op combinatie van `PMC + beukmaat + diepte + daktype + concept`.

---

# 12. ADMIN PRODUCTDATA

Maak een verborgen scherm:

`/admin/product-data`

Hier kan leverancier later gevalideerde technische productdata toevoegen:

- paneelhoogte;
- maximale paneellengte;
- wanddiktes;
- vloerdiktes;
- dakopbouw;
- maximale sparingen;
- transportlimieten;
- montagevoorwaarden;
- U-waarden;
- Rc-waarden;
- brandprestatie;
- akoestiek;
- materiaalprijs;
- engineeringkosten;
- transportkosten;
- montagekosten.

Alle onbekende waarden starten leeg of als `TBC_LEVERANCIER`.

De configurator moet later kunnen doorgroeien van commerciële configurator naar engineering-/offertetool zonder de basisarchitectuur opnieuw te bouwen.

---

# 13. PRIJSENGINE — STRUCTUREEL VOORBEREIDEN

Maak de prijslogica alvast technisch mogelijk, maar verzin geen prijzen.

```ts
interface PriceEngineInput {
  wallAreaM2: number | null;
  floorAreaM2: number | null;
  roofAreaM2: number | null;
  openingsM2: number | null;
  facadeOption: string;
  technicalPackage: string[];
}
```

```ts
interface PriceEstimate {
  material: number | null;
  engineering: number | null;
  transport: number | null;
  assembly: number | null;
  total: number | null;
  status: "TBC" | "INDICATIVE" | "VALIDATED";
}
```

Wanneer prijzen ontbreken:

`Prijs op aanvraag — technische leveranciersdata nog niet gekoppeld.`

---

# 14. LANDINGPAGE

## Hero

# Van PMC naar prefab casco.

Vertaal de Nederlandse woningvraag direct naar een configureerbaar HSB-woningconcept.

CTA:

`Start configuratie`

Secundair:

`Bekijk productfamilies`

## Waardepropositie 1 — Marktstandaard als startpunt

Begin niet met een leeg ontwerp. Selecteer de woningvraag en vertaal die direct naar een passende productfamilie.

## Waardepropositie 2 — Vier parametrische woningfamilies

Meerdere PMC's worden vertaald naar een beperkt aantal reproduceerbare HSB-casco's.

## Waardepropositie 3 — Van concept richting fabriek

Maatvoering, indeling en casco-componenten worden voorbereid voor technische engineering en productie.

---

# 15. RESULTAATVERHAAL

Iedere configuratie moet visueel dezelfde keten tonen:

### 1. Nederlandse vraag
`PMC X + doelgroep + programma`

↓

### 2. Gestandaardiseerd woningproduct
`Compact / Compact+ / Family M / Family L/XL`

↓

### 3. Parametrische configuratie
`maatvoering + indeling + modifier + uitstraling`

↓

### 4. Fabrieksvertaling
`HSB wanden + vloer + dak + openingen`

Gebruik als hoofdpropositie:

> **Van Nederlandse woningvraag naar configureerbaar HSB-casco — zonder voor ieder project opnieuw te beginnen.**

Secundaire tekst:

> Eén parametrisch productplatform vertaalt meerdere Nederlandse PMC's naar een beperkt aantal fabrieksgeschikte woningfamilies.

---

# 16. DEVELOPMENT PRINCIPES

1. Houd alle productregels centraal in data/config files.
2. Geen magic numbers verspreid door componentcode.
3. Gebruik TypeScript types.
4. Scheid brondata, afgeleide data en TBC-data.
5. Geen technische waarden verzinnen.
6. Eindgebruiker ziet alleen relevante waarschuwingen.
7. Admin ziet alle datacertainty en TBC-statussen.
8. Bouw componenten modulair zodat later gestapelde PMC's kunnen worden toegevoegd.
9. Geen fake AI-chat als hoofdinterface.
10. Geen fake BIM-viewer.
11. Configurator moet binnen 30 seconden begrijpelijk zijn.
12. De 5-stappenflow is leidend; voeg geen extra wizardstappen toe.

---

# 17. MVP ACCEPTANCE CRITERIA

De eerste werkende versie is geslaagd wanneer:

- alleen grondgebonden PMC's worden gebruikt;
- gebruiker zonder PMC-kennis kan starten;
- app een PMC-match kan voorstellen;
- iedere PMC wordt gekoppeld aan één van de vier productfamilies;
- de configurator exact vijf hoofdstappen heeft;
- maatvoering op 600 mm grid werkt;
- bestaande DATA ALL beuk-/dieptematen als presets gebruikt kunnen worden;
- plattegrond visueel reageert op maatvoering en indelingskeuze;
- nultreden-PMC's als modifier worden behandeld;
- PMC 5 als XL / engineeringvariant wordt behandeld;
- resultaatpagina de keten `PMC → woningfamilie → configuratie → HSB-casco` toont;
- ontbrekende technische data nergens wordt verzonnen;
- leverancier later technische productdata kan invoeren via admin.

---

# 18. BOUWVOLGORDE VOOR LOVABLE

Bouw niet alles tegelijk zonder structuur.

Werk in deze volgorde:

## Fase 1 — Data en basisstructuur
- grondgebonden PMC-data;
- productfamilies A–D;
- PMC mapping;
- TypeScript datamodellen.

## Fase 2 — 5-stappen configurator
- woningbehoefte;
- woningtype;
- afmetingen & indeling;
- casco & uitstraling;
- resultaat.

## Fase 3 — Live visual
- SVG plattegrond;
- 600 mm grid;
- maatlijnen;
- spiegeling/draaien;
- terrasvarianten.

## Fase 4 — Data persistence
- Supabase;
- configuraties opslaan;
- projectvariant dupliceren;
- delen.

## Fase 5 — Admin en toekomstige engineering
- TBC productdata;
- prijsengine interface;
- technische leveranciersdata;
- toekomstige paneel-/offertevertaling.

---

# SLOTINSTRUCTIE AAN LOVABLE

Bouw dit als een **commerciële productconfigurator voor de Nederlandse B2B-woningbouwmarkt**, niet als een generieke woningontwerptool.

De gebruiker moet het gevoel krijgen dat hij vanuit een concrete Nederlandse woningvraag direct een gestandaardiseerd, configureerbaar HSB-product kan selecteren.

De essentie is:

**minder losse ontwerpen, meer productplatform.**

**minder starten vanuit techniek, meer starten vanuit de marktbehoefte.**

**PMC → productfamilie → configuratie → prefab casco.**
