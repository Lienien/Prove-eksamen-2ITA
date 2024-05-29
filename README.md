# Hent Data App

Dette er en enkel webapplikasjon som viser tilfeldige bilder fra et API hver gang en knapp trykkes.

## Bruk

1. Åpne `index.html` i en nettleser.
2. Klikk på knappen "Hent data" for å hente et nytt bilde fra APIet. 
3. Hvert nytt bilde som hentes vil vises på skjermen og konsollen vil vise navnet på forfatteren av bildet.

## Tilgjengelighet

- Bruk av semantiske HTML-elementer (header, nav, main) for bedre struktur og tilgjengelighet.
- Fokusindikatorer på navigasjonslenker for bedre synlighet når man bruker tastatur.
- Aria-labels på knapper for bedre beskrivelse til skjermlesere.

## Teknologier Brukt

- HTML for struktur.
- CSS for stil og layout.
- JavaScript for funksjonalitet og datahenting.

## Oppsett

1. Klone repoet eller last ned ZIP-filen.
2. Sørg for at `index.html`, `styles.css` og `script.js` ligger i samme mappe.
3. Åpne `index.html` i en nettleser.

## API Informasjon

Applikasjonen bruker APIet fra [https://picsum.photos/v2/list](https://picsum.photos/v2/list) for å hente ut bilder. Hver respons inneholder en liste med bilder.