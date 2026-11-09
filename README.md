# Workx Due Diligence

Interne tool van Workx advocaten voor arbeidsrechtelijke due diligence:

- **Dossiers**: overzicht per transactie, met status, rol (koper of verkoper), bevindingen en fee.
- **Fee quote**: berekent een fee op basis van omvang en complexiteit, met offertetekst en Word-export.
- **Rapportbouwer**: onderwerpen en bevindingen per dossier, bondig of beschrijvend, in het Nederlands of Engels, met Word-export.
- **Bibliotheek**: gedeelde know-how. Per onderwerp de standaardteksten, het informatieverzoek en standaardbevindingen.
- **Claude-hulp** (optioneel): bevindingen herschrijven en een concept-samenvatting maken.

Techniek: Next.js op Vercel, Neon Postgres voor de gegevens, Microsoft-login via Auth.js, Anthropic API voor de Claude-hulp.

---

## Online zetten op Vercel

Reken op ongeveer 30 minuten. Voor stap 4 heb je iemand nodig met beheerrechten in Microsoft 365 / Entra ID.

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

### 4. Inloggen met Microsoft

1. Ga in de Azure-portal naar **Microsoft Entra ID → App registrations → New registration**.
   - Naam: `Workx Due Diligence`
   - Accounttype: **Accounts in this organizational directory only** (alleen jullie eigen tenant)
   - Redirect URI (type *Web*): `https://<jullie-domein>/api/auth/callback/microsoft-entra-id`
     (bijvoorbeeld `https://workx-dd.vercel.app/api/auth/callback/microsoft-entra-id`)
2. Noteer op de overzichtspagina de **Application (client) ID** en de **Directory (tenant) ID**.
3. Maak onder **Certificates & secrets → New client secret** een secret aan en noteer de *Value*.
4. Zet in Vercel onder **Settings → Environment Variables**:

| Naam | Waarde |
|---|---|
| `AUTH_SECRET` | Een willekeurige lange tekst, bijvoorbeeld de uitkomst van `openssl rand -base64 32` |
| `AUTH_MICROSOFT_ENTRA_ID_ID` | Application (client) ID |
| `AUTH_MICROSOFT_ENTRA_ID_SECRET` | De client secret (*Value*) |
| `AUTH_MICROSOFT_ENTRA_ID_ISSUER` | `https://login.microsoftonline.com/<TENANT-ID>/v2.0` |
| `ALLOWED_EMAIL_DOMAINS` | `workxadvocaten.nl` |

Alleen collega's met een account in jullie tenant **en** een e-mailadres op het toegestane domein kunnen inloggen. Wil je de toegang tot een groep beperken, zet dan in Entra ID bij de app (Enterprise applications) **Assignment required** aan en wijs de juiste gebruikers of groep toe.

### 5. Claude-hulp (optioneel)

1. Maak op [console.anthropic.com](https://console.anthropic.com) een API-sleutel aan, liefst in een aparte workspace voor deze tool.
2. Zet die in Vercel als `ANTHROPIC_API_KEY`.

Zonder sleutel werkt alles, behalve de knoppen om bevindingen te herschrijven en de concept-samenvatting. Standaard gebruikt de app `claude-opus-5-5` met effort `medium`. Je kunt dat aanpassen met `ANTHROPIC_MODEL` en `ANTHROPIC_EFFORT`.

De app zet de server-side fallback van Anthropic aan. Als het model een verzoek weigert, probeert Anthropic het automatisch opnieuw met een ander model.

Teksten die je naar Claude stuurt, gaan naar de Anthropic API. Controleer de afspraken over gegevensverwerking voordat je vertrouwelijke dossiergegevens laat herschrijven.

### 6. Opnieuw deployen

Kies in Vercel **Deployments → … → Redeploy**, zodat de nieuwe instellingen actief worden. Open daarna de URL en log in.

### 7. Eigen domein (optioneel)

Voeg onder **Settings → Domains** bijvoorbeeld `dd.workxadvocaten.nl` toe en zet bij jullie domeinbeheerder het CNAME-record dat Vercel noemt. Pas daarna de redirect URI in Entra ID aan naar het nieuwe domein.

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

Zet in `.env.local` voor een snelle start alleen `AUTH_DISABLED=true` en `AUTH_SECRET=lokaal`. Zonder `DATABASE_URL` bewaart de app gegevens in het geheugen, tot de server herstart.

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
| `auth.js`, `middleware.js` | Microsoft-login; elke pagina en API-route vereist een ingelogde gebruiker |
| `lib/db.js` | Database (één tabel `dd_docs` met JSON-documenten) |

Elke wijziging die je naar de hoofdbranch van de repository pusht, zet Vercel automatisch online. Een pull request krijgt een eigen preview-URL.
