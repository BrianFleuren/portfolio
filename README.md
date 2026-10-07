# Portfolio Brian Fleuren

Persoonlijke portfoliowebsite van Brian Fleuren, derdejaarsstudent HBO Bouwkunde aan Avans Hogeschool.

**Live:** https://brianfleuren.com

De site is een statische website (HTML, CSS en JavaScript, geen build-stap) die wordt gehost via **GitHub Pages**. Het domein staat bij **Strato** en verwijst via DNS naar GitHub.

---

## Inhoud

- **Projecten** — drie projecten:
  1. Rijnstate / Berghege — praktijkstage bij een hoofdaannemer (juni–juli 2025)
  2. Kubuswoning — individueel ontwerp van VO naar DO (module 1.3)
  3. Tijdelijk AZC Hoorn-West — realisatieplan in groepsverband (keuzemodule Projectmanagement)
- **Over mij** — profiel, software (uitklapbaar), expertise, opleiding, werkervaring
- **Contact** — contactgegevens, cv en portfolio als download, LinkedIn

De site is **tweetalig (NL / EN)**. Nederlands is de standaard; de bezoeker kan rechtsboven wisselen en die keuze wordt onthouden.

---

## Mappenstructuur

```
index.html              De volledige site (drie tabbladen in één pagina)
CNAME                   Het eigen domein voor GitHub Pages — niet verwijderen
.nojekyll               Zegt GitHub Pages dat het de bestanden ongewijzigd moet tonen
assets/
  css/style.css         Alle opmaak (kleuren en lettertypen afgeleid van het cv)
  js/main.js            Tabbladen, uitklapmenu's, lightbox voor tekeningen
  js/i18n.js            Nederlandse vertaling + de NL/EN-knop
  img/                  Geoptimaliseerde afbeeldingen
  docs/                 Cv (geredigeerd) en portfolio als pdf
```

---

## Iets aanpassen

1. Pas het bestand aan (bijv. `index.html`).
2. Commit en push naar de `main`-branch.
3. GitHub Pages zet de nieuwe versie binnen ongeveer een minuut online.

### Teksten en vertalingen

De HTML is in het **Engels** geschreven. De Nederlandse versie staat in `assets/js/i18n.js`: links de Engelse zin zoals die letterlijk in `index.html` staat, rechts de Nederlandse vertaling.

> **Let op:** pas je een Engelse zin aan in `index.html`, pas dan ook de sleutel in `i18n.js` aan. Anders blijft die zin in het Engels staan in de Nederlandse versie.

Ontbrekende vertalingen opsporen: open de site, open de console van de browser (F12) en voer uit:

```js
localStorage.setItem('bf-lang-debug', '1')
```

Herlaad de pagina; de console toont dan elke zin zonder Nederlandse vertaling. Eigennamen, getallen en woorden die in beide talen gelijk zijn (Contact, Team, Revit) staan daar bewust in.

### Lokaal bekijken

Vanuit deze map:

```bash
python -m http.server 5503
```

Ga daarna naar http://localhost:5503.

---

## Domein koppelen via Strato

GitHub Pages serveert de site; Strato hoeft alleen de DNS naar GitHub te laten wijzen.

### 1. In GitHub

**Settings → Pages**

- *Source:* `Deploy from a branch`, branch `main`, map `/ (root)`
- *Custom domain:* `brianfleuren.com` (staat ook in het bestand `CNAME`)
- Vink **Enforce HTTPS** aan zodra GitHub het certificaat heeft aangemaakt (kan tot 24 uur duren)

### 2. In Strato

Log in bij Strato → **Domeinen** → kies het domein → **DNS-instellingen**.

**Hoofddomein (`brianfleuren.com`) — A-records**

| Type | Waarde |
|------|--------|
| A | `185.199.108.153` |
| A | `185.199.109.153` |
| A | `185.199.110.153` |
| A | `185.199.111.153` |

Staat Strato maar één A-record toe, vul dan alleen `185.199.108.153` in — dat werkt ook, alleen met minder reserve.

Optioneel voor IPv6, als Strato AAAA-records toestaat:

| Type | Waarde |
|------|--------|
| AAAA | `2606:50c0:8000::153` |
| AAAA | `2606:50c0:8001::153` |
| AAAA | `2606:50c0:8002::153` |
| AAAA | `2606:50c0:8003::153` |

**Subdomein `www` — CNAME-record**

| Type | Naam | Waarde |
|------|------|--------|
| CNAME | `www` | `brianfleuren.github.io` |

Verwijder of overschrijf bestaande A-records of doorverwijzingen die Strato standaard instelt (bijvoorbeeld een parkeerpagina), anders botsen ze met GitHub.

### 3. Controleren

DNS-wijzigingen zijn meestal binnen een uur zichtbaar, soms tot 24–48 uur. Controleren kan met:

```bash
nslookup brianfleuren.com
nslookup www.brianfleuren.com
```

Het hoofddomein moet naar een van de `185.199.10x.153`-adressen wijzen, `www` naar `brianfleuren.github.io`.

---

## Wat bewust niet in deze repository staat

Deze repository is **publiek**. Daarom staat het volgende er bewust niet in (zie `.gitignore`):

- **`Bestanden/`** — het ruwe studiemateriaal (3,3 GB): het onbewerkte cv met woonadres en geboortedatum, de getekende stagebeoordeling, de begroting, notulen met namen van collega's, en Revit-/Photoshop-bestanden die te groot zijn voor GitHub.
- **Het onbewerkte cv.** Op de site staat een geredigeerde versie: woonadres vervangen door alleen "Wijchen", geboortedatum verwijderd.
- **Namen van collega's, bedragen en details van incidenten** uit de stage. De stage wordt alleen op methode beschreven.

---

## Openstaande punten

- **LinkedIn-badge** — in `index.html` staat nog de tijdelijke profielnaam `brian-fleuren`. Vervang `data-vanity` en de twee links eronder door het laatste deel van je echte LinkedIn-URL; tot die tijd toont de site een gewone link in plaats van de badge.
- De Illustrator- en InDesign-teksten onder *Over mij → Software* zijn algemeen geformuleerd; maak ze persoonlijker met concreet werk.
