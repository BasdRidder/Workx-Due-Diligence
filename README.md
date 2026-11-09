# Workx Due Diligence

Interne tool van Workx advocaten voor arbeidsrechtelijke due diligence:

- **Dossiers**: overzicht per transactie, met status, rol (koper of verkoper), bevindingen en fee.
- **Fee quote**: berekent een fee op basis van omvang en complexiteit, met offertetekst en Word-export.
- **Rapportbouwer**: onderwerpen en bevindingen per dossier, bondig of beschrijvend, in het Nederlands of Engels, met Word-export.
- **Bibliotheek**: gedeelde know-how. Per onderwerp de standaardteksten, het informatieverzoek en standaardbevindingen.
- **Claude-hulp** (optioneel): bevindingen herschrijven en een concept-samenvatting maken.

Techniek: Next.js op Vercel, Neon Postgres voor de gegevens, eigen accounts (e-mail en wachtwoord) via Auth.js, Anthropic API voor de Claude-hulp.

---

## Online zetten op Vercel

Reken op ongeveer 20 minuten.

### 1. Code in GitHub

Zet deze map in een **privé** GitHub-repository, bijvoorbeeld `workx-dd`.

### 2. Project aanmaken in Vercel

1. Kies in Vercel **Add New → Project** en importeer de repository.
2. Framework: Next.js (wordt automatisch herkend). Laat de overige instellingen staan.
3. Klik op **Deploy**. De eerste deploy mag mislukken of op de inlogpagina blijven hangen: de instellingen hieronder ontbreken nog.

De functies draaien in Frankfurt (`fra1`). Dat staat vast in `vercel.json`, zodat cliëntgegevens in de EU worden verwerkt.

### 3. Database koppelen

1. Open in het project het tabblad **Storage → Create Database → Neon (Serverless Postgres)**.
2. Kies regio **Frankfurt (eu-central-1)** en koppel de database aan het project, voor alle omgevingen.
3. Vercel zet `DATABASE_URL` dan automatisch. De tabel maakt de app bij het eerste gebruik zelf aan.

### 4. Inloggen instellen

De tool heeft eigen accounts: e-mailadres en wachtwoord, beheerd in de app.

1. Zet in Vercel onder **Settings → Environment Variables** (Environment: *Production*):

| Naam | Waarde |
|---|---|
| `AUTH_SECRET` | Een lange willekeurige tekst, bijvoorbeeld van generate-secret.vercel.app/32 |
| `ADMIN_EMAIL` | Jouw e-mailadres. Dit wordt het eerste beheerdersaccount |
| `ADMIN_PASSWORD` | Een startwachtwoord van minstens 12 tekens |

2. Redeploy (zie stap 6) en log in met `ADMIN_EMAIL` en `ADMIN_PASSWORD`. De app maakt dan het beheerdersaccount aan en vraagt je direct een eigen wachtwoord te kiezen.
3. Daarna kun je `ADMIN_PASSWORD` in Vercel verwijderen. Het werkt alleen zolang er nog geen accounts bestaan.
4. Via **Gebruikers** (links onderin de tool) voeg je collega's toe. De app toont dan een tijdelijk wachtwoord; geef dat persoonlijk of via een apart kanaal door. Bij de eerste keer inloggen kiest de collega een eigen wachtwoord.

Beveiliging:
- Wachtwoorden worden alleen versleuteld opgeslagen (scrypt).
- Na 5 mislukte pogingen wordt een account 15 minuten geblokkeerd.
- Een sessie verloopt na 12 uur.
- Een gedeactiveerd of verwijderd account heeft direct geen toegang meer.

Wachtwoord vergeten? Een beheerder geeft via **Gebruikers → Nieuw wachtwoord** een nieuw tijdelijk wachtwoord.

### 5. Claude-hulp (optioneel)

1. Maak op [console.anthropic.com](https://console.anthropic.com) een API-sleutel aan, liefst in een aparte workspace voor deze tool.
2. Zet die in Vercel als `ANTHROPIC_API_KEY`.

Zonder sleutel werkt alles, behalve de knoppen om bevindingen te herschrijven en de concept-samenvatting. Standaard gebruikt de app `claude-opus-5-5` met effort `medium`. Je kunt dat aanpassen met `ANTHROPIC_MODEL` en `ANTHROPIC_EFFORT`.

De app zet de server-side fallback van Anthropic aan. Als het model een verzoek weigert, probeert Anthropic het automatisch opnieuw met een ander model.

Teksten die je naar Claude stuurt, gaan naar de Anthropic API. Controleer de afspraken over gegevensverwerking voordat je vertrouwelijke dossiergegevens laat herschrijven.

### 6. Opnieuw deployen

Kies in Vercel **Deployments → … → Redeploy**, zodat de nieuwe instellingen actief worden. Open daarna de URL en log in.

### 7. Eigen domein (optioneel)

Voeg onder **Settings → Domains** bijvoorbeeld `dd.workxadvocaten.nl` toe en zet bij jullie domeinbeheerder het CNAME-record dat Vercel noemt.

---

## Gegevens overzetten uit de claude.ai-versie

1. Open de claude.ai-versie en klik onder **Instellingen → Back-up** op **Exporteer back-up**.
2. Open de Vercel-versie en kies onder **Instellingen → Back-up en import** de knop **Importeer back-up**.

Dossiers met hetzelfde id worden overschreven. De bibliotheek en de instellingen worden ook meegenomen.

---

## Lokaal ontwikkelen

```bash
npm install
```

```bash
cp .env.example .env.local
```

Zet in `.env.local` voor een snelle start alleen `AUTH_DISABLED=true` en `AUTH_SECRET=lokaal`, of `ADMIN_EMAIL` en `ADMIN_PASSWORD` om het inloggen te testen. Zonder `DATABASE_URL` bewaart de app gegevens in het geheugen, tot de server herstart.

```bash
npm run dev
```

`AUTH_DISABLED` werkt alleen in ontwikkelmodus. In productie, en dus ook op Vercel, is inloggen altijd verplicht.

---

## Opbouw

| Pad | Inhoud |
|---|---|
| `lib/client/app.js` | De tool zelf: schermen, fee-berekening, rapportopbouw en Word-export |
| `app/globals.css` | Huisstijl (kleuren uit de Workx-pitch) |
| `app/api/data` | Alle dossiers, instellingen en bibliotheek ophalen |
| `app/api/docs/[collection]/[id]` | Eén dossier of de instellingen/bibliotheek opslaan of verwijderen |
| `app/api/ai` | Claude-hulp. De prompts worden op de server opgebouwd |
| `auth.js`, `auth.config.js`, `middleware.js` | Inloggen; elke pagina en API-route vereist een ingelogde gebruiker |
| `lib/users.js`, `app/beheer`, `app/account` | Accounts, wachtwoorden en gebruikersbeheer |
| `lib/db.js` | Database: `dd_docs` (dossiers, instellingen, bibliotheek) en `dd_users` (accounts) |

Elke wijziging die je naar de hoofdbranch van de repository pusht, zet Vercel automatisch online. Een pull request krijgt een eigen preview-URL.
