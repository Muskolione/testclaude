# Lovable-briefing: Precas – Propositie grondgebonden (1-op-1 namaak)

## Opdracht

Bouw deze landingspagina **pixel-exact** na. Onderaan dit document staat de volledige HTML-bron van het ontwerp. **Dat is de enige bron van waarheid**: neem elke tekst, kleur, maat, afstand, lettergrootte, regelhoogte, letter-spacing, border en radius letterlijk over. Niets herontwerpen, geen teksten herschrijven, geen elementen toevoegen of weglaten, geen iconen/emoji/afbeeldingen toevoegen, geen schaduwen, gradients of animaties toevoegen.

- Stack: React + Tailwind (Lovable-standaard). Gebruik Tailwind arbitrary values (bijv. `text-[52px]`, `leading-[1.05]`, `tracking-[-0.02em]`, `bg-[#16242B]`) of inline styles, zodat de waarden exact gelijk blijven aan de bron. Niet afronden naar de Tailwind-schaal.
- Eén pagina (`/`), opgesplitst in componenten per sectie (zie lijst hieronder).
- Het ontwerp is gemaakt op **1440 px breed**. Bij een viewport van 1440 px moet het resultaat identiek zijn aan de bron (totale paginahoogte ± 6480 px). Contentbreedte = 1440 px met 96 px zijmarge (inhoud 1248 px); centreer die op bredere schermen.
- Onder 1024 px mag de layout netjes stapelen (grids naar 1 kolom, tabel horizontaal scrollbaar), maar **wijzig niets aan de desktopweergave**.
- Taal: Nederlands (`<html lang="nl">`). Paginatitel: `Precas – Grondgebonden prefab casco`.

## Lettertypen (Google Fonts)

Laad precies deze drie families in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```

| Rol | Font | Gewichten | Gebruik |
|---|---|---|---|
| Display | `'Bricolage Grotesque', Georgia, serif` | 400 / 600 / 700 | h1, h2, h3, kernbelofte, quote, logo |
| Body (standaard) | `'Instrument Sans', 'Helvetica Neue', Helvetica, sans-serif` | 400 / 500 / 600 | alle lopende tekst, knoppen, nav |
| Mono | `'JetBrains Mono', ui-monospace, monospace` | 400 / 500 | eyebrows/labels (uppercase), nummers, PMC-codes |

## Kleuren (design tokens)

| Token | Hex | Gebruik |
|---|---|---|
| `paper` | `#F3F0E8` | paginaachtergrond, lichte tekst op donker |
| `ink` | `#16242B` | hoofdtekst, donkere secties, borders, knopranden |
| `accent` | `#E3A857` | primaire knoppen, accentvlakken, vinkjes, stap-bolletjes, quote-blok |
| `eyebrow` | `#8A5518` | mono-labels op lichte achtergrond, link-hover |
| `body-muted` | `#3E484D` | lopende tekst op licht |
| `label-muted` | `#6A5A45` | mono-nummers/labels in kaarten op licht |
| `grey-600` | `#5C6468` | "Prefab casco"-tag, "(optioneel)" |
| `grey-550` | `#4A5358` | subtekst in "Ook op hetzelfde systeem"-kaarten |
| `line-light` | `#D9D3C5` | dunne lijnen op licht, kaartranden |
| `line-sand` | `#C9C1AF` | lijstlijnen, kaartranden, tag-scheiding |
| `card` | `#FBF9F4` | "Voor wie"-kaarten |
| `dark-2` | `#1D2F37` | tabelheader |
| `dark-3` | `#22363F` | groepsrijen in tabel |
| `line-dark` | `#3A4A52` | lijnen/randen op donker |
| `on-dark-muted` | `#C9CFD2` | secundaire tekst op donker |
| `on-dark-body` | `#E4E0D6` | kaarttekst op donker |
| `on-dark-faint` | `#9AA5AA` | voetnoot en footer op donker |
| `dash` | `#4F5F66` | "niet van toepassing"-streepje in tabel |

Globale linkstijl: `a { color: #16242B } a:hover { color: #8A5518 }`. `body { margin: 0; background: #F3F0E8 }`.

## Terugkerende patronen

- **Eyebrow-label**: JetBrains Mono, 13px, `letter-spacing: 0.08em`, uppercase, kleur `#8A5518` (op donker: accent).
- **Sectiekop (h2)**: Bricolage Grotesque 600, 52px, `line-height: 1.05`, `letter-spacing: -0.02em`.
- **12-koloms raster**: `grid-template-columns: repeat(12, minmax(0,1fr)); gap: 24px`. Label links = 3 kolommen, inhoud rechts = 9 kolommen.
- **Pill-knoppen**: `min-height: 52px; padding: 0 28px; border-radius: 999px; font-weight: 600; font-size: 16px`. Primair = accent-vlak met ink-tekst; secundair = `1.5px solid #16242B` rand.
- **Sectiepadding**: horizontaal steeds 96px; verticaal 96–112px (zie bron per sectie).

## Secties (in volgorde, component per sectie)

1. **Header / Nav**: huis-logo (inline SVG 34×34) + "Precas" + mono-tag "Prefab casco" met linkerrand; rechts nav-links naar `#propositie`, `#assortiment`, `#werkwijze`, `#contact`. Onderrand `1px #D9D3C5`.
2. **Hero**: 2 kolommen (gap 64px). Links eyebrow, h1 72px (`line-height 1.02`, `letter-spacing -0.025em`), intro 20px, twee pill-knoppen. Rechts donkere kaart (`#16242B`, radius 28px) met de **inline SVG-illustratie** van vier woningen (exact overnemen uit de bron, inclusief labels DAK / VLOER / WAND) en een 3-koloms legenda 01/02/03.
3. **Kernbelofte**: bovenrand 2px ink, onderrand 1px `#D9D3C5`, citaat 40px Bricolage 400.
4. **De essentie** (`id="propositie"`): kop + intro, daarna een 4-koloms keten-blok met 1px ink-rand en radius 20px; het tweede vak ("Precas") heeft accent-achtergrond.
5. **Wat u krijgt**: lijst van 8 items in 2 kolommen (column-gap 48px), volgorde in de DOM: 01, 05, 02, 06, 03, 07, 04, 08 (zodat links 01–04 en rechts 05–08 staan). Bovenranden `1px #C9C1AF`, laatste rij ook onderrand.
6. **PMC-matrix** (`id="assortiment"`, donkere sectie): kop + intro; tabel met kolommen `110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px` (PMC, Doelgroep, Huursegment, Indeling, Rij, Hoek, 2-kap, Nultreden). Drie groepen met groepsrij (`#22363F`, Bricolage 18px 600, accentkleur). Beschikbaar = accent-cirkel 30px met ink-vinkje (SVG); niet beschikbaar = streepje 14×2px `#4F5F66`. Data:

   | Groep | PMC | Doelgroep | Huursegment | Indeling | Rij | Hoek | 2-kap | Nultreden |
   |---|---|---|---|---|---|---|---|---|
   | Starters en kleine huishoudens | 1 | Eenpersoonshuishouden | Tot kwaliteitskortingsgrens | Studio of 2-kamer | ✓ | ✓ | – | – |
   | | 2 | Eén- of tweepersoonshuishouden | Tot eerste aftoppingsgrens | Max. 2 slaapkamers | ✓ | ✓ | – | – |
   | Gezinnen | 3 | Gezin | Tot tweede aftoppingsgrens | Max. 3 slaapkamers | ✓ | ✓ | ✓ | – |
   | | 4 | Gezin | Tot liberalisatiegrens | Max. 3 slaapkamers | ✓ | ✓ | ✓ | – |
   | | 5 | Gezin | Vrije sector (niet-DAEB) | 3+ slaapkamers | ✓ | ✓ | ✓ | – |
   | Levensloopbestendig (nultreden) | 17 | Senioren, levensloop | Eerste aftoppingsgrens tot sociale huurgrens | Alle primaire functies op de begane grond | ✓ | ✓ | ✓ | ✓ |
   | | 18 | Senioren, levensloop | Sociale huurgrens t/m vrije sector | Alle primaire functies op de begane grond | ✓ | ✓ | ✓ | ✓ |

   Zet deze data in een array en map erover. Onder de tabel: 3 kaarten (Eén systeem / Mengbaar in één rij / Toetsbaar aan De Woonstandaard) en een voetnoot 13px `#9AA5AA`.
7. **Voor wie**: kop + 3 kaarten (`#FBF9F4`, rand `#D9D3C5`, radius 24px, padding 40px 36px).
8. **Werkwijze** (`id="werkwijze"`): bovenrand 2px ink; 4 stappen met genummerd rondje 44px (1–3 accent, 4 ink met lichte tekst) en een 1px lijn erachter (bij stap 4 transparant).
9. **Quote**: accent-blok, radius 28px, padding 72px 80px, tekst 48px Bricolage 600 (max-width 1080px), mono-label "PRECAS".
10. **Ook op hetzelfde systeem**: label links (3 kol.), rechts 4 kaarten (rand `#C9C1AF`, radius 16px).
11. **Contact/CTA + footer** (`id="contact"`, donker): h2 64px, intro, pill-knop "Plan een verkenning" (min-height 56px, 17px) als `mailto:`-link, contactregel; footer met bovenrand `#3A4A52`: "Precas" + "Het casco als product." links, bronvermelding rechts.

## Placeholders (laten staan zoals ze zijn)

`[BEUKMATEN INVULLEN]`, `[E-MAILADRES]`, `[TELEFOONNUMMER]`: niet invullen of verzinnen.

## Gedrag

- Nav-links en knoppen scrollen soepel naar de ankers (`scroll-behavior: smooth`).
- Geen andere interactie, animaties of extra pagina's.
- Toegankelijkheid zoals in de bron: `aria-label` op de hero-SVG en op de vink-/streepje-iconen, `aria-hidden` op het logo.

## Controle voor oplevering

Leg de gebouwde pagina bij 1440 px breed naast de bron hieronder: alle teksten woordelijk gelijk, dezelfde kleuren (hex), dezelfde font-families en -gewichten, dezelfde afstanden. Totale hoogte ± 6480 px.

---

## Volledige HTML-bron (referentie, 1-op-1 overnemen)

```html
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1440">
<title>Precas – Grondgebonden prefab casco</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
<style>
body{margin:0;background:#F3F0E8}
a{color:#16242B}a:hover{color:#8A5518}
</style>
</head>
<body>
<div style="width: 1440px; height: 6480px; box-sizing: border-box; display: flex; flex-direction: column; background: #F3F0E8; color: #16242B; font-family: 'Instrument Sans', 'Helvetica Neue', Helvetica, sans-serif;">

<!-- NAV -->
<header style="display: flex; align-items: center; justify-content: space-between; padding: 28px 96px; border-bottom: 1px solid #D9D3C5;">
<div style="display: flex; align-items: center; gap: 12px;">
<svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#16242B" stroke-width="2" aria-hidden="true"><path d="M3 16 17 4l14 12v15H3z"></path><path d="M3 23h28M12 16v15M22 16v15"></path></svg>
<div style="font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 700; font-size: 22px; letter-spacing: -0.01em;">Precas</div>
<span style="font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #5C6468; padding-left: 12px; border-left: 1px solid #C9C1AF;">Prefab casco</span>
</div>
<nav style="display: flex; gap: 36px; font-size: 15px; font-weight: 500;">
<a href="#propositie" style="text-decoration: none;">Propositie</a>
<a href="#assortiment" style="text-decoration: none;">Grondgebonden PMC’s</a>
<a href="#werkwijze" style="text-decoration: none;">Werkwijze</a>
<a href="#contact" style="text-decoration: none;">Contact</a>
</nav>
</header>

<!-- HERO -->
<section style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 64px; padding: 96px 96px 88px; align-items: center;">
<div style="display: flex; flex-direction: column; gap: 32px;">
<div style="font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518;">Grondgebonden assortiment · PMC 1–5 · 17 · 18</div>
<h1 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 72px; line-height: 1.02; letter-spacing: -0.025em;">Van Nederlandse woonvraag naar produceerbaar prefab casco.</h1>
<p style="margin: 0; font-size: 20px; line-height: 1.55; color: #3E484D; max-width: 560px;">Precas vertaalt elke grondgebonden PMC uit De Woonstandaard naar een configureerbaar prefab casco dat direct aansluit op het productiesysteem van de fabriek. Geen catalogus met losse panelen, maar herkenbare bouwoplossingen.</p>
<div style="display: flex; gap: 16px; padding-top: 8px;">
<a href="#contact" style="display: inline-flex; align-items: center; min-height: 52px; padding: 0 28px; background: #E3A857; color: #16242B; font-weight: 600; font-size: 16px; text-decoration: none; border-radius: 999px;">Bespreek uw project</a>
<a href="#assortiment" style="display: inline-flex; align-items: center; min-height: 52px; padding: 0 28px; border: 1.5px solid #16242B; color: #16242B; font-weight: 600; font-size: 16px; text-decoration: none; border-radius: 999px;">Bekijk de PMC-matrix</a>
</div>
</div>
<div style="background: #16242B; border-radius: 28px; padding: 48px 40px 36px; display: flex; flex-direction: column; gap: 24px;">
<svg viewBox="0 0 560 330" width="100%" fill="none" stroke-linejoin="round" aria-label="Rij grondgebonden woningen, opgebouwd uit prefab wand-, vloer- en dakelementen">
<g stroke="#F3F0E8" stroke-width="2">
<path d="M20 300V150l65-62 65 62v150"></path>
<path d="M150 300V150l65-62 65 62v150"></path>
<path d="M280 300V150l65-62 65 62v150"></path>
<path d="M410 300V150l65-62 65 62v150"></path>
<path d="M10 300h540"></path>
</g>
<g stroke="#F3F0E8" stroke-opacity="0.35" stroke-width="1.2">
<path d="M20 225h130M150 225h130M280 225h130M410 225h130"></path>
<path d="M85 150v150M215 150v150M345 150v150M475 150v150"></path>
<path d="M20 150h130M150 150h130M280 150h130M410 150h130"></path>
<path d="M52 119l33 31 33-31M182 119l33 31 33-31M312 119l33 31 33-31M442 119l33 31 33-31"></path>
</g>
<g stroke="#E3A857" stroke-width="2.5">
<path d="M410 150l65-62 65 62" transform="translate(0 -26)"></path>
<rect x="418" y="164" width="50" height="54" transform="translate(-6 -2)"></rect>
<path d="M280 225h130" transform="translate(0 -6)"></path>
</g>
<g fill="#E3A857"><circle cx="475" cy="62" r="4"></circle><circle cx="437" cy="189" r="4"></circle><circle cx="345" cy="219" r="4"></circle></g>
<g font-family="JetBrains Mono, monospace" font-size="11" fill="#F3F0E8" fill-opacity="0.75" stroke="none">
<text x="484" y="44">DAK</text>
<text x="300" y="206">VLOER</text>
<text x="420" y="248">WAND</text>
</g>
</svg>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; border-top: 1px solid #3A4A52; padding-top: 20px; color: #F3F0E8;">
<div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #C9CFD2;">01</span><span style="font-size: 15px; font-weight: 500;">Wandelementen</span></div>
<div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #C9CFD2;">02</span><span style="font-size: 15px; font-weight: 500;">Vloerelementen</span></div>
<div style="display: flex; flex-direction: column; gap: 4px;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #C9CFD2;">03</span><span style="font-size: 15px; font-weight: 500;">Dakelementen</span></div>
</div>
</div>
</section>

<!-- KERNBELOFTE -->
<section style="margin: 0 96px; padding: 56px 0; border-top: 2px solid #16242B; border-bottom: 1px solid #D9D3C5; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px; align-items: start;">
<div style="grid-column: span 3; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518; padding-top: 10px;">Kernbelofte</div>
<p style="grid-column: span 9; margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 40px; line-height: 1.2; letter-spacing: -0.015em; font-weight: 400;">Een produceerbaar prefab casco, afgestemd op de Nederlandse markt en direct gekoppeld aan industriële productie.</p>
</section>

<!-- DE KETEN -->
<section id="propositie" style="padding: 112px 96px 96px; display: flex; flex-direction: column; gap: 56px;">
<div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px;">
<div style="grid-column: span 3; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518; padding-top: 12px;">De essentie</div>
<div style="grid-column: span 9; display: flex; flex-direction: column; gap: 20px;">
<h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 52px; line-height: 1.05; letter-spacing: -0.02em;">Prefab casco’s, zonder dat u zelf het industriële systeem hoeft te organiseren.</h2>
<p style="margin: 0; font-size: 19px; line-height: 1.55; color: #3E484D; max-width: 760px;">U kiest de passende PMC. Wij maken daar een produceerbaar casco van. De fabriek levert, u bouwt. Vier rollen, één heldere keten.</p>
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; border: 1px solid #16242B; border-radius: 20px; overflow: hidden;">
<div style="padding: 36px 32px; display: flex; flex-direction: column; gap: 14px; border-right: 1px solid #16242B;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">01 — Vraag</span>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600;">PMC</span>
<span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Bepaalt voor welke doelgroep en welk huursegment de woning geschikt is.</span>
</div>
<div style="padding: 36px 32px; display: flex; flex-direction: column; gap: 14px; border-right: 1px solid #16242B; background: #E3A857;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #16242B;">02 — Vertaling</span>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600;">Precas</span>
<span style="font-size: 16px; line-height: 1.5; color: #16242B;">Maakt van panelen een configureerbare, verkoopbare casco-oplossing.</span>
</div>
<div style="padding: 36px 32px; display: flex; flex-direction: column; gap: 14px; border-right: 1px solid #16242B;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">03 — Productie</span>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600;">Fabriek</span>
<span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Produceert de wand-, vloer- en dakelementen op basis van onze productiedata.</span>
</div>
<div style="padding: 36px 32px; display: flex; flex-direction: column; gap: 14px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">04 — Realisatie</span>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 28px; font-weight: 600;">Aannemer</span>
<span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Bouwt er zijn eigen project mee en houdt de regie over het totaal.</span>
</div>
</div>
</section>

<!-- WAT U KRIJGT -->
<section style="padding: 0 96px 112px; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px;">
<div style="grid-column: span 3; display: flex; flex-direction: column; gap: 16px;">
<div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518; padding-top: 8px;">Wat u krijgt</div>
<p style="margin: 0; font-size: 17px; line-height: 1.5; color: #3E484D;">Per gekozen PMC één uitgewerkt pakket, van woningopzet tot montage.</p>
</div>
<div style="grid-column: span 9; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 48px;">
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">01</span><span style="font-size: 20px; font-weight: 500;">Parametrische woningopzet</span></div>
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">05</span><span style="font-size: 20px; font-weight: 500;">Aansluitdetails</span></div>
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">02</span><span style="font-size: 20px; font-weight: 500;">Passend prefab casco</span></div>
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">06</span><span style="font-size: 20px; font-weight: 500;">Productiedata</span></div>
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">03</span><span style="font-size: 20px; font-weight: 500;">Engineering</span></div>
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">07</span><span style="font-size: 20px; font-weight: 500;">Montage-uitgangspunten</span></div>
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF; border-bottom: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">04</span><span style="font-size: 20px; font-weight: 500;">Wand-, vloer- en dakelementen</span></div>
<div style="display: flex; gap: 20px; align-items: baseline; padding: 22px 0; border-top: 1px solid #C9C1AF; border-bottom: 1px solid #C9C1AF;"><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">08</span><span style="font-size: 20px; font-weight: 500;">Montageondersteuning <span style="font-size: 15px; font-weight: 400; color: #5C6468;">(optioneel)</span></span></div>
</div>
</section>

<!-- PMC MATRIX -->
<section id="assortiment" style="background: #16242B; color: #F3F0E8; padding: 112px 96px; display: flex; flex-direction: column; gap: 48px;">
<div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px; align-items: end;">
<div style="grid-column: span 7; display: flex; flex-direction: column; gap: 20px;">
<div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #E3A857;">Grondgebonden assortiment</div>
<h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 52px; line-height: 1.05; letter-spacing: -0.02em;">Elke grondgebonden PMC, één configureerbaar casco.</h2>
</div>
<p style="grid-column: span 5; margin: 0; font-size: 17px; line-height: 1.55; color: #C9CFD2;">Alle grondgebonden product-markt-combinaties uit De Woonstandaard (NCB), vertaald naar casco-varianten die op hetzelfde productiesysteem draaien. Kies de PMC, wij leveren het passende casco.</p>
</div>

<div style="border: 1px solid #3A4A52; border-radius: 20px; overflow: hidden;">
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: end; gap: 0; padding: 20px 28px; background: #1D2F37; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #C9CFD2;">
<span>PMC</span><span>Doelgroep</span><span>Huursegment</span><span>Indeling</span>
<span style="text-align: center;">Rij</span><span style="text-align: center;">Hoek</span><span style="text-align: center;">2-kap</span><span style="text-align: center;">Nultreden</span>
</div>
<div style="padding: 14px 28px; background: #22363F; border-top: 1px solid #3A4A52; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 18px; font-weight: 600; color: #E3A857;">Starters en kleine huishoudens</div>
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: center; gap: 0; padding: 22px 28px; border-top: 1px solid #3A4A52;">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 40px; border-radius: 10px; border: 1.5px solid #F3F0E8; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">1</span>
<span style="font-size: 17px; font-weight: 500; padding-right: 20px;">Eenpersoonshuishouden</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 20px;">Tot kwaliteitskortingsgrens</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 12px;">Studio of 2-kamer</span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><span style="display: block; width: 14px; height: 2px; margin-top: 14px; background: #4F5F66;" aria-label="Niet van toepassing"></span></span>
<span style="display: flex; justify-content: center;"><span style="display: block; width: 14px; height: 2px; margin-top: 14px; background: #4F5F66;" aria-label="Niet van toepassing"></span></span>
</div>
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: center; gap: 0; padding: 22px 28px; border-top: 1px solid #3A4A52;">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 40px; border-radius: 10px; border: 1.5px solid #F3F0E8; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">2</span>
<span style="font-size: 17px; font-weight: 500; padding-right: 20px;">Eén- of tweepersoonshuishouden</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 20px;">Tot eerste aftoppingsgrens</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 12px;">Max. 2 slaapkamers</span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><span style="display: block; width: 14px; height: 2px; margin-top: 14px; background: #4F5F66;" aria-label="Niet van toepassing"></span></span>
<span style="display: flex; justify-content: center;"><span style="display: block; width: 14px; height: 2px; margin-top: 14px; background: #4F5F66;" aria-label="Niet van toepassing"></span></span>
</div>
<div style="padding: 14px 28px; background: #22363F; border-top: 1px solid #3A4A52; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 18px; font-weight: 600; color: #E3A857;">Gezinnen</div>
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: center; gap: 0; padding: 22px 28px; border-top: 1px solid #3A4A52;">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 40px; border-radius: 10px; border: 1.5px solid #F3F0E8; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">3</span>
<span style="font-size: 17px; font-weight: 500; padding-right: 20px;">Gezin</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 20px;">Tot tweede aftoppingsgrens</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 12px;">Max. 3 slaapkamers</span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><span style="display: block; width: 14px; height: 2px; margin-top: 14px; background: #4F5F66;" aria-label="Niet van toepassing"></span></span>
</div>
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: center; gap: 0; padding: 22px 28px; border-top: 1px solid #3A4A52;">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 40px; border-radius: 10px; border: 1.5px solid #F3F0E8; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">4</span>
<span style="font-size: 17px; font-weight: 500; padding-right: 20px;">Gezin</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 20px;">Tot liberalisatiegrens</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 12px;">Max. 3 slaapkamers</span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><span style="display: block; width: 14px; height: 2px; margin-top: 14px; background: #4F5F66;" aria-label="Niet van toepassing"></span></span>
</div>
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: center; gap: 0; padding: 22px 28px; border-top: 1px solid #3A4A52;">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 40px; border-radius: 10px; border: 1.5px solid #F3F0E8; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">5</span>
<span style="font-size: 17px; font-weight: 500; padding-right: 20px;">Gezin</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 20px;">Vrije sector (niet-DAEB)</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 12px;">3+ slaapkamers</span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><span style="display: block; width: 14px; height: 2px; margin-top: 14px; background: #4F5F66;" aria-label="Niet van toepassing"></span></span>
</div>
<div style="padding: 14px 28px; background: #22363F; border-top: 1px solid #3A4A52; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 18px; font-weight: 600; color: #E3A857;">Levensloopbestendig (nultreden)</div>
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: center; gap: 0; padding: 22px 28px; border-top: 1px solid #3A4A52;">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 40px; border-radius: 10px; border: 1.5px solid #F3F0E8; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">17</span>
<span style="font-size: 17px; font-weight: 500; padding-right: 20px;">Senioren, levensloop</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 20px;">Eerste aftoppingsgrens tot sociale huurgrens</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 12px;">Alle primaire functies op de begane grond</span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
</div>
<div style="display: grid; grid-template-columns: 110px 1.5fr 1.35fr 1.1fr 92px 92px 92px 92px; align-items: center; gap: 0; padding: 22px 28px; border-top: 1px solid #3A4A52;">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 40px; border-radius: 10px; border: 1.5px solid #F3F0E8; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500;">18</span>
<span style="font-size: 17px; font-weight: 500; padding-right: 20px;">Senioren, levensloop</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 20px;">Sociale huurgrens t/m vrije sector</span>
<span style="font-size: 15px; color: #C9CFD2; padding-right: 12px;">Alle primaire functies op de begane grond</span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
<span style="display: flex; justify-content: center;"><svg width="30" height="30" viewBox="0 0 30 30" aria-label="Beschikbaar"><circle cx="15" cy="15" r="14" fill="#E3A857"></circle><path d="M9 15.5l4 4 8-9" fill="none" stroke="#16242B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
</div>
</div>

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;">
<div style="padding: 28px; border: 1px solid #3A4A52; border-radius: 16px; display: flex; flex-direction: column; gap: 10px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #E3A857;">Eén systeem</span>
<span style="font-size: 16px; line-height: 1.5; color: #E4E0D6;">Alle PMC’s delen dezelfde wand-, vloer- en dakelementen en aansluitdetails. Variatie zit in de configuratie, niet in het systeem.</span>
</div>
<div style="padding: 28px; border: 1px solid #3A4A52; border-radius: 16px; display: flex; flex-direction: column; gap: 10px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #E3A857;">Mengbaar in één rij</span>
<span style="font-size: 16px; line-height: 1.5; color: #E4E0D6;">Starters, gezinnen en levensloopbestendige woningen combineren in één blok, met één engineeringstandaard.</span>
</div>
<div style="padding: 28px; border: 1px solid #3A4A52; border-radius: 16px; display: flex; flex-direction: column; gap: 10px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #E3A857;">Toetsbaar aan De Woonstandaard</span>
<span style="font-size: 16px; line-height: 1.5; color: #E4E0D6;">Per PMC afgestemd op de basisprestatie-eisen, aan te vullen met projectspecifieke eisen.</span>
</div>
</div>
<p style="margin: 0; font-size: 13px; line-height: 1.5; color: #9AA5AA;">Casco-varianten zijn indicatief en worden per project bevestigd. Beukmaten en gebruiksoppervlakten per PMC: [BEUKMATEN INVULLEN]. Zorggeschikte PMC’s (19/20) op aanvraag in grondgebonden uitvoering.</p>
</section>

<!-- PROPOSITIES PER KLANT -->
<section style="padding: 112px 96px; display: flex; flex-direction: column; gap: 56px;">
<div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px;">
<div style="grid-column: span 3; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518; padding-top: 12px;">Voor wie</div>
<h2 style="grid-column: span 9; margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 52px; line-height: 1.05; letter-spacing: -0.02em;">Eén assortiment, drie manieren om het in te zetten.</h2>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;">
<article style="background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 24px; padding: 40px 36px; display: flex; flex-direction: column; gap: 20px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">Aannemers die nog niet prefab bouwen</span>
<h3 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; line-height: 1.12; font-weight: 600; letter-spacing: -0.01em;">Prefab bouwen zonder zelf prefab producent te worden.</h3>
<p style="margin: 0; font-size: 16px; line-height: 1.55; color: #3E484D;">Een complete casco-oplossing, zonder eerst een prefab-organisatie, engineeringstandaard of productiesysteem op te zetten. U blijft verantwoordelijk voor het project; het casco krijgt u uitgewerkt en produceerbaar aangeleverd.</p>
</article>
<article style="background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 24px; padding: 40px 36px; display: flex; flex-direction: column; gap: 20px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">Bouwers die al prefab bouwen</span>
<h3 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; line-height: 1.12; font-weight: 600; letter-spacing: -0.01em;">Extra prefab capaciteit zonder uitbreiding van de eigen fabriek.</h3>
<p style="margin: 0; font-size: 16px; line-height: 1.55; color: #3E484D;">Een flexibel productie- en conceptplatform: koop losse onderdelen, complete casco’s of aanvullende productiecapaciteit in, binnen de technische kaders van de fabriek.</p>
</article>
<article style="background: #FBF9F4; border: 1px solid #D9D3C5; border-radius: 24px; padding: 40px 36px; display: flex; flex-direction: column; gap: 20px;">
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #6A5A45;">Ontwikkelaars en ontwikkelende aannemers</span>
<h3 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 32px; line-height: 1.12; font-weight: 600; letter-spacing: -0.01em;">Ontwerpen vanuit een maakbaar systeem.</h3>
<p style="margin: 0; font-size: 16px; line-height: 1.55; color: #3E484D;">Selecteer en configureer al vóór het SO een passende casco-oplossing per PMC. Niet eerst ontwerpen en daarna toetsen of het maakbaar is.</p>
</article>
</div>
</section>

<!-- WERKWIJZE -->
<section id="werkwijze" style="margin: 0 96px; padding: 96px 0 112px; border-top: 2px solid #16242B; display: flex; flex-direction: column; gap: 48px;">
<div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px;">
<div style="grid-column: span 3; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518; padding-top: 12px;">Werkwijze</div>
<h2 style="grid-column: span 9; margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 52px; line-height: 1.05; letter-spacing: -0.02em;">Van PMC naar montage in vier stappen.</h2>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px;">
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; align-items: center; gap: 12px;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 999px; background: #E3A857; font-family: 'JetBrains Mono', monospace; font-weight: 500;">1</span><span style="flex-grow: 1; height: 1px; background: #16242B;"></span></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 24px; font-weight: 600;">Kies de PMC</span>
<span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Doelgroep en huursegment bepalen het vertrekpunt: PMC 1–5, 17 of 18.</span>
</div>
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; align-items: center; gap: 12px;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 999px; background: #E3A857; font-family: 'JetBrains Mono', monospace; font-weight: 500;">2</span><span style="flex-grow: 1; height: 1px; background: #16242B;"></span></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 24px; font-weight: 600;">Configureer het casco</span>
<span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Parametrisch: beukmaat, diepte, kapvorm, positie in de rij en gevelopeningen.</span>
</div>
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; align-items: center; gap: 12px;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 999px; background: #E3A857; font-family: 'JetBrains Mono', monospace; font-weight: 500;">3</span><span style="flex-grow: 1; height: 1px; background: #16242B;"></span></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 24px; font-weight: 600;">Engineering &amp; data</span>
<span style="font-size: 16px; line-height: 1.5; color: #3E484D;">Elementen, aansluitdetails en productiedata, direct leesbaar voor de fabriek.</span>
</div>
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="display: flex; align-items: center; gap: 12px;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 999px; background: #16242B; color: #F3F0E8; font-family: 'JetBrains Mono', monospace; font-weight: 500;">4</span><span style="flex-grow: 1; height: 1px; background: transparent;"></span></div>
<span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 24px; font-weight: 600;">Productie &amp; montage</span>
<span style="font-size: 16px; line-height: 1.5; color: #3E484D;">De fabriek produceert, de aannemer monteert. Montageondersteuning optioneel.</span>
</div>
</div>
</section>

<!-- QUOTE -->
<section style="padding: 0 96px 112px;">
<div style="background: #E3A857; border-radius: 28px; padding: 72px 80px; display: flex; flex-direction: column; gap: 24px;">
<p style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-size: 48px; line-height: 1.12; letter-spacing: -0.02em; font-weight: 600; max-width: 1080px;">Niet eerst ontwerpen en daarna kijken of het maakbaar is — maar ontwerpen vanuit een maakbaar prefab systeem.</p>
<span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;">Precas</span>
</div>
</section>

<!-- OOK BESCHIKBAAR -->
<section style="padding: 0 96px 112px; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px;">
<div style="grid-column: span 3; display: flex; flex-direction: column; gap: 12px;">
<div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5518; padding-top: 6px;">Ook op hetzelfde systeem</div>
<p style="margin: 0; font-size: 16px; line-height: 1.5; color: #3E484D;">Naast grondgebonden woningen.</p>
</div>
<div style="grid-column: span 9; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px;">
<div style="padding: 24px; border: 1px solid #C9C1AF; border-radius: 16px; display: flex; flex-direction: column; gap: 8px;"><span style="font-size: 18px; font-weight: 600;">Appartementen</span><span style="font-size: 14px; line-height: 1.45; color: #4A5358;">Galerij, portiek, kleinschalig gestapeld</span></div>
<div style="padding: 24px; border: 1px solid #C9C1AF; border-radius: 16px; display: flex; flex-direction: column; gap: 8px;"><span style="font-size: 18px; font-weight: 600;">Flexwonen</span><span style="font-size: 14px; line-height: 1.45; color: #4A5358;">Studenten, short-stay, arbeidsmigranten</span></div>
<div style="padding: 24px; border: 1px solid #C9C1AF; border-radius: 16px; display: flex; flex-direction: column; gap: 8px;"><span style="font-size: 18px; font-weight: 600;">Optoppen</span><span style="font-size: 14px; line-height: 1.45; color: #4A5358;">Lichtgewicht HSB casco voor bestaand vastgoed</span></div>
<div style="padding: 24px; border: 1px solid #C9C1AF; border-radius: 16px; display: flex; flex-direction: column; gap: 8px;"><span style="font-size: 18px; font-weight: 600;">Maatwerk</span><span style="font-size: 14px; line-height: 1.45; color: #4A5358;">Eigen ontwerp, binnen de kaders van de fabriek</span></div>
</div>
</section>

<!-- CTA -->
<section id="contact" style="flex-grow: 1; background: #16242B; color: #F3F0E8; padding: 104px 96px 56px; display: flex; flex-direction: column; justify-content: space-between; gap: 64px;">
<div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px; align-items: end;">
<div style="grid-column: span 8; display: flex; flex-direction: column; gap: 24px;">
<h2 style="margin: 0; font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 600; font-size: 64px; line-height: 1.02; letter-spacing: -0.025em;">Welke PMC past bij uw project?</h2>
<p style="margin: 0; font-size: 19px; line-height: 1.55; color: #C9CFD2; max-width: 640px;">Vertel ons de doelgroep, het aantal woningen en de locatie. Wij laten zien welk casco past en wat de fabriek kan leveren.</p>
</div>
<div style="grid-column: span 4; display: flex; flex-direction: column; gap: 14px; align-items: flex-start;">
<a href="mailto:[E-MAILADRES]" style="display: inline-flex; align-items: center; min-height: 56px; padding: 0 32px; background: #E3A857; color: #16242B; font-weight: 600; font-size: 17px; text-decoration: none; border-radius: 999px;">Plan een verkenning</a>
<span style="font-size: 15px; color: #C9CFD2;">[E-MAILADRES] · [TELEFOONNUMMER]</span>
</div>
</div>
<div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #3A4A52; padding-top: 28px; font-size: 14px; color: #9AA5AA;">
<div style="display: flex; align-items: baseline; gap: 14px;"><span style="font-family: 'Bricolage Grotesque', Georgia, serif; font-weight: 700; font-size: 18px; color: #F3F0E8;">Precas</span><span style="font-size: 15px; color: #C9CFD2;">Het casco als product.</span></div>
<span>PMC-indeling conform De Woonstandaard, Netwerk Conceptueel Bouwen</span>
</div>
</section>

</div>
</body>
</html>
```
