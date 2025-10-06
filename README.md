# Moment 3 - Angular (DT208G)

Detta projekt är en del av kursen *Programmering i TypeScript*.  
Syftet är att få en grundläggande förståelse för **Angular** och hur man bygger en webbapplikation med routing, komponenter och databindning.

## Uppgiftens innehåll
- **Angular CLI** för att skapa och köra projektet.
- **Angular Router** för navigering mellan sidor.
- **Databindning** för att hantera konvertering mellan olika värden.
- **CSS på komponentnivå** samt global styling.

## Funktioner
- Tre undersidor (Home, Converter, About).
- Navigationsmeny byggd med Angular Router.
- Converter-sida där användaren kan omvandla:
  - Meter till Feet
  - Celsius till Fahrenheit
- Enkel responsiv design med CSS.
- Versionshantering med Git

## Slutsats

När jag arbetade med uppgiften fick jag en bättre förståelse för hur Angular fungerar i praktiken. Till en början var det lite utmanande att förstå routing och hur standalone-komponenter skulle användas, men när jag väl fick igång det blev det tydligare hur allt hänger ihop.

Jag stötte också på problem med databindning via ngModel eftersom jag inte hade importerat FormsModule. När detta löstes märkte jag hur viktigt det är att veta vilka moduler som måste importeras för olika funktioner. Samma sak gällde number-pipe som krävde CommonModule.

En annan sak jag fokuserade på var hur man kan strukturera CSS på ett sätt som undviker upprepning. Jag arbetade både med global CSS i styles.css och lokal CSS i komponenterna, vilket gjorde det lättare att hålla ordning.

Sammantaget gav uppgiften mig en tydligare bild av hur man bygger upp ett Angular-projekt från grunden och hur man löser problem som dyker upp längs vägen.