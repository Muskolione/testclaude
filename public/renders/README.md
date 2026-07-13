# Renders droppen - geen codewijziging nodig

Zet hier de echte renderafbeeldingen neer, exact met deze bestandsnaam:

```
/renders/{bg}_{verdieping}_{positie}.jpg
```

De configurator zoekt automatisch naar dit pad zodra alle 3 stappen zijn
gekozen. Ontbreekt het bestand nog, dan toont de app `placeholder.svg` met de
verwachte bestandsnaam erop - zo zie je meteen welke render nog mist.

## Huidige combinaties (1 bg x 2 verdieping x 3 posities = 6 bestanden)

- `bg-standaard_verdieping-standaard_positie-kop-links.jpg`
- `bg-standaard_verdieping-standaard_positie-tussen.jpg`
- `bg-standaard_verdieping-standaard_positie-kop-rechts.jpg`
- `bg-standaard_verdieping-ensuite_positie-kop-links.jpg`
- `bg-standaard_verdieping-ensuite_positie-tussen.jpg`
- `bg-standaard_verdieping-ensuite_positie-kop-rechts.jpg`

## Als er nieuwe modules bijkomen

De bestandsnaam-conventie is altijd `{bg-id}_{verdieping-id}_{positie-id}.jpg`,
waarbij de ids exact overeenkomen met de `id`-velden in
`src/data/config.json`. Voeg je daar een nieuwe bouwsteen toe, dan volgt de
verwachte bestandsnaam vanzelf dezelfde opbouw - er hoeft niets in de
React-code aangepast te worden.
