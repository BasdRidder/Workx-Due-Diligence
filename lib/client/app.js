/* Workx Due Diligence: client-app. Wordt eenmalig gestart vanuit components/DDApp.js. */
export function start() {
  if (window.__workxDdStarted) return;
  window.__workxDdStarted = true;

/* ============ Standaarden ============ */
const DEFAULT_SETTINGS = {
  officeName: "Workx Advocaten",
  logo: "", logoW: 0, logoH: 0, logoPlate: false,
  brand: "#f9ff85", side: "",
  rates: { partner: 450, senior: 340, associate: 240 },
  mix: { partner: 15, senior: 40, associate: 45 },
  factors: { concise: 85, descriptive: 120, english: 10, urgent: 20, pm: 10, band: 15, entity: 10 },
  addons: { or: 3, caoMulti: 4, pensionOwn: 3, mgmt: 0.75, dispute: 1, flex: 4, international: 4, qa: 3 },
  rounding: 500,
  texts: {
    nl: {
      reportIntro: "Op verzoek van {kantoor} hebben wij ten behoeve van {client} een arbeidsrechtelijk due diligence onderzoek verricht naar {target}, in verband met {transactie}. Dit rapport bevat onze bevindingen, de daaraan verbonden risico's en onze aanbevelingen. Ons onderzoek is gebaseerd op de documenten die tot en met {peildatum} in de virtuele dataroom beschikbaar zijn gesteld.",
      reportAssumptions: "Wij zijn uitgegaan van de juistheid en volledigheid van de verstrekte documenten en informatie.\nOns onderzoek is beperkt tot Nederlands arbeidsrecht; fiscale, actuariële en financiële aspecten vallen buiten de reikwijdte.\nWij hebben geen gesprekken gevoerd met werknemers of de ondernemingsraad van de doelvennootschap, tenzij anders vermeld.\nBedragen en aantallen zijn ontleend aan de dataroom en niet door ons geverifieerd.",
      reportDisclaimer: "Dit rapport is uitsluitend bestemd voor {client} en {kantoor} in het kader van de beschreven transactie en mag zonder onze voorafgaande schriftelijke toestemming niet aan derden worden verstrekt.",
      noFindings: "Op basis van de verstrekte informatie hebben wij ten aanzien van dit onderwerp geen bijzonderheden geconstateerd.",
      quoteIntro: "Naar aanleiding van uw verzoek bieden wij aan om ten behoeve van {client} een arbeidsrechtelijk due diligence onderzoek uit te voeren naar {target}, in verband met {transactie}. Wij stemmen onze werkzaamheden af met {kantoor}. Het onderzoek omvat de volgende onderwerpen:",
      quoteAssumptions: "De relevante documenten zijn bij aanvang van het onderzoek volledig beschikbaar in de dataroom.\nHet onderzoek ziet op circa {werknemers} werknemers en {entiteiten} werkgeversentiteit(en).\nHet aantal Q&A-rondes is beperkt tot {qa}.\nWij leveren één conceptversie en één definitieve versie van het rapport.",
      quoteExclusions: "Onderhandelingen over en het opstellen van de koopovereenkomst.\nBegeleiding van het adviestraject met de ondernemingsraad.\nActuariële beoordeling van pensioenverplichtingen.\nOnderzoek naar buitenlands arbeidsrecht.",
      vat: "Alle bedragen zijn exclusief btw en kantoorkosten."
    },
    en: {
      reportIntro: "At the request of {kantoor}, we have conducted an employment law due diligence investigation into {target} on behalf of {client}, in connection with {transactie}. This report sets out our findings, the associated risks and our recommendations. Our review is based on the documents made available in the virtual data room up to and including {peildatum}.",
      reportAssumptions: "We have assumed that the documents and information provided are accurate and complete.\nOur review is limited to Dutch employment law; tax, actuarial and financial aspects are outside its scope.\nWe have not interviewed employees or the works council of the target, unless stated otherwise.\nAmounts and numbers are derived from the data room and have not been verified by us.",
      reportDisclaimer: "This report is intended solely for {client} and {kantoor} in connection with the transaction described and may not be disclosed to third parties without our prior written consent.",
      noFindings: "Based on the information provided, we have not identified any issues in respect of this topic.",
      quoteIntro: "Further to your request, we are pleased to offer to conduct an employment law due diligence investigation into {target} on behalf of {client}, in connection with {transactie}. We will coordinate our work with {kantoor}. The investigation covers the following topics:",
      quoteAssumptions: "All relevant documents are available in the data room at the start of the review.\nThe review covers approximately {werknemers} employees and {entiteiten} employing entit(y/ies).\nThe number of Q&A rounds is limited to {qa}.\nWe deliver one draft and one final version of the report.",
      quoteExclusions: "Negotiating and drafting the purchase agreement.\nGuiding the works council consultation process.\nActuarial assessment of pension obligations.\nReview of foreign employment law.",
      vat: "All amounts are exclusive of VAT and office expenses."
    }
  }
};

const DEFAULT_LOGO = { src: "/workx-logo.png", w: 257, h: 135 };
const F = (title, rating, facts, risk, recommendation, protection) => ({ title, rating, facts, risk, recommendation, protection });
const DEFAULT_LIBRARY = [
  { key: "algemeen", title: "Werkgever en personeelsbestand", baseHours: 3,
    introDesc: "In dit hoofdstuk beschrijven wij de werkgeversstructuur van de doelvennootschap en de samenstelling van het personeelsbestand, op basis van de in de dataroom opgenomen personeelsgegevens.",
    introConcise: "Werkgeversstructuur en samenstelling personeelsbestand.",
    requests: ["Geanonimiseerde personeelslijst (functie, datum in dienst, contractvorm, arbeidsduur, bruto salaris, toepasselijke cao)", "Overzicht van werkgeversentiteiten met aantallen werknemers per entiteit", "Organogram"],
    findings: [F("Onvolledige personeelsgegevens", "oranje", "De personeelslijst in de dataroom bevat geen informatie over [contractvorm / salaris / arbeidsduur].", "Zonder volledige gegevens kunnen de loonkosten en de verplichtingen jegens werknemers niet volledig worden vastgesteld.", "Verzoek de verkoper om een volledige personeelslijst.", "qa")] },
  { key: "contracten", title: "Arbeidsovereenkomsten", baseHours: 6,
    introDesc: "Wij hebben de standaardarbeidsovereenkomsten en een steekproef van individuele arbeidsovereenkomsten beoordeeld, waaronder de arbeidsovereenkomsten voor bepaalde tijd.",
    introConcise: "Standaardovereenkomsten, tijdelijke contracten en bijzondere bedingen.",
    requests: ["Modelarbeidsovereenkomsten (bepaalde en onbepaalde tijd)", "Overzicht van arbeidsovereenkomsten voor bepaalde tijd met begin- en einddata en eerdere contracten", "Arbeidsovereenkomsten met afwijkende bepalingen (concurrentie-, relatie- en geheimhoudingsbedingen)"],
    findings: [
      F("Ketenregeling overschreden", "oranje", "[Aantal] werknemers hebben meer dan drie opvolgende arbeidsovereenkomsten voor bepaalde tijd gehad, of een keten van langer dan 36 maanden.", "Op grond van artikel 7:668a BW gelden deze arbeidsovereenkomsten als aangegaan voor onbepaalde tijd. Beëindiging vereist een redelijke grond en in beginsel een transitievergoeding.", "Breng de betreffende werknemers in kaart en neem een garantie op over de juistheid van de contractvorm.", "garantie"),
      F("Concurrentiebeding in tijdelijke arbeidsovereenkomst zonder motivering", "groen", "De tijdelijke arbeidsovereenkomsten bevatten een concurrentiebeding zonder schriftelijke motivering van zwaarwegende bedrijfs- of dienstbelangen.", "Op grond van artikel 7:653 lid 2 BW is een dergelijk beding nietig. De doelvennootschap kan zich hier niet op beroepen.", "Houd bij de waardering geen rekening met deze bedingen en pas het model aan na closing.", "postclosing")] },
  { key: "management", title: "Bestuurders en sleutelfunctionarissen", baseHours: 4,
    introDesc: "Wij hebben de arbeids- en managementovereenkomsten van de statutair bestuurders en sleutelfunctionarissen beoordeeld, met bijzondere aandacht voor opzegtermijnen, ontslagvergoedingen en change-of-controlbepalingen.",
    introConcise: "Overeenkomsten van bestuurders en sleutelfunctionarissen.",
    requests: ["Arbeids- en managementovereenkomsten van statutair bestuurders en het hogere management", "Overzicht van afspraken over ontslagvergoedingen, retentie- en transactiebonussen"],
    findings: [F("Change-of-controlbepaling", "rood", "De managementovereenkomst van [functie] bevat een change-of-controlbepaling op grond waarvan bij een overname een vergoeding van [aantal] maandsalarissen verschuldigd kan worden.", "De transactie kan leiden tot een betalingsverplichting van circa EUR [bedrag], bovenop een eventuele transitievergoeding.", "Kwantificeer de verplichting en verdisconteer deze in de koopprijs of bedingen een specifieke vrijwaring.", "vrijwaring")] },
  { key: "cao", title: "Cao en arbeidsvoorwaardenregelingen", baseHours: 4,
    introDesc: "Wij hebben onderzocht welke cao('s) op de doelvennootschap van toepassing zijn en of de arbeidsvoorwaarden daarmee in overeenstemming zijn. Daarnaast hebben wij het personeelshandboek en overige regelingen beoordeeld.",
    introConcise: "Toepasselijke cao('s) en arbeidsvoorwaardenregelingen.",
    requests: ["Toepasselijke cao('s) en eventuele dispensatiebesluiten", "Personeelshandboek en arbeidsvoorwaardenregelingen", "Overzicht van secundaire arbeidsvoorwaarden (lease, onkosten, opleidingen)"],
    findings: [F("Onduidelijkheid over toepasselijke algemeen verbindend verklaarde cao", "oranje", "De doelvennootschap past geen cao toe, terwijl de bedrijfsactiviteiten mogelijk onder de werkingssfeer van de algemeen verbindend verklaarde cao voor [sector] vallen.", "Werknemers kunnen aanspraak maken op de cao-arbeidsvoorwaarden met terugwerkende kracht (verjaringstermijn vijf jaar). Ook kunnen premies voor een verplicht gesteld bedrijfstakpensioenfonds verschuldigd zijn.", "Laat de werkingssfeer nader onderzoeken en bedingen een specifieke vrijwaring voor naheffingen.", "vrijwaring")] },
  { key: "pensioen", title: "Pensioen", baseHours: 4,
    introDesc: "Wij hebben de pensioenregeling(en) beoordeeld vanuit arbeidsrechtelijk perspectief, waaronder de wijze van uitvoering, een eventuele verplichtstelling en de transitie naar het nieuwe pensioenstelsel.",
    introConcise: "Pensioenregeling, uitvoerder en verplichtstelling.",
    requests: ["Pensioenreglement(en) en uitvoeringsovereenkomst", "Correspondentie met het pensioenfonds of de verzekeraar over aansluiting en premieachterstanden", "Transitieplan en stand van zaken implementatie Wet toekomst pensioenen"],
    findings: [
      F("Geen aansluiting bij verplicht gesteld bedrijfstakpensioenfonds", "rood", "De doelvennootschap is niet aangesloten bij het bedrijfstakpensioenfonds [naam], terwijl de werkzaamheden onder de verplichtstelling lijken te vallen.", "Het fonds kan premies met terugwerkende kracht vorderen. De bestaande pensioenregeling blijft daarnaast doorlopen, met risico op dubbele lasten.", "Bedingen een specifieke vrijwaring en laat de verplichtstelling voorafgaand aan closing toetsen.", "vrijwaring"),
      F("Transitie naar het nieuwe pensioenstelsel", "info", "De pensioenregeling moet uiterlijk per 1 januari 2028 zijn aangepast aan de Wet toekomst pensioenen. Er is [nog geen] transitieplan opgesteld.", "Aanpassing vereist instemming van de ondernemingsraad en kan leiden tot compensatieverplichtingen.", "Vraag naar de planning en het transitieplan.", "qa")] },
  { key: "medezeggenschap", title: "Medezeggenschap", baseHours: 3,
    introDesc: "Wij hebben onderzocht of bij de doelvennootschap een ondernemingsraad of personeelsvertegenwoordiging is ingesteld en of de transactie advies- of instemmingsrechten met zich meebrengt, waaronder de SER-Fusiegedragsregels 2015.",
    introConcise: "Ondernemingsraad, adviesrecht en SER-Fusiegedragsregels.",
    requests: ["Instellingsbesluit en reglement van de ondernemingsraad", "Adviesaanvragen, adviezen en instemmingsverzoeken van de afgelopen drie jaar", "Convenanten met de ondernemingsraad"],
    findings: [F("Adviesrecht ondernemingsraad bij de transactie", "oranje", "De doelvennootschap heeft een ondernemingsraad. De voorgenomen transactie is een adviesplichtig besluit in de zin van artikel 25 WOR.", "Een besluit zonder deugdelijk adviestraject kan door de Ondernemingskamer worden getroffen door een verbod op uitvoering.", "Neem het afronden van het adviestraject op als opschortende voorwaarde.", "cp")] },
  { key: "flex", title: "Flexibele arbeid en inhuur", baseHours: 4,
    introDesc: "Wij hebben de inzet van uitzendkrachten, gedetacheerden en zelfstandigen zonder personeel (zzp'ers) onderzocht, mede in het licht van de handhaving door de Belastingdienst sinds 1 januari 2025.",
    introConcise: "Uitzendkrachten, detachering en zzp'ers.",
    requests: ["Overzicht van ingehuurde zzp'ers met duur, tarief en werkzaamheden", "Overeenkomsten met uitzend- en detacheringsbureaus", "Opdrachtovereenkomsten met zzp'ers"],
    findings: [F("Risico op schijnzelfstandigheid", "rood", "De doelvennootschap maakt structureel gebruik van [aantal] zzp'ers die werkzaamheden verrichten die vergelijkbaar zijn met die van werknemers.", "De rechtsverhouding kan worden aangemerkt als arbeidsovereenkomst, met aanspraken op loon, cao en pensioen. De Belastingdienst kan loonheffingen naheffen.", "Bedingen een specifieke vrijwaring en stel een plan op voor herstructurering na closing.", "vrijwaring")] },
  { key: "beloning", title: "Beloning, bonussen en incentives", baseHours: 3,
    introDesc: "Wij hebben de bonus-, winstdelings- en participatieregelingen beoordeeld, alsmede de mate waarin deze regelingen worden geraakt door de transactie.",
    introConcise: "Bonus-, winstdelings- en participatieregelingen.",
    requests: ["Bonus- en winstdelingsregelingen", "Participatie- en optieregelingen (LTI/STAK)", "Overzicht van toegezegde en uitgekeerde bonussen over de afgelopen twee jaar", "Beloningsbeleid en functiehuis (loontransparantie)"],
    findings: [F("Toegezegde transactiebonussen", "oranje", "Aan [aantal] werknemers zijn transactiebonussen toegezegd van in totaal EUR [bedrag].", "Deze verplichtingen ontstaan door de transactie en drukken op de waarde van de doelvennootschap.", "Laat deze bonussen voor rekening van de verkoper komen.", "prijs")] },
  { key: "ziekte", title: "Ziekte en arbeidsongeschiktheid", baseHours: 3,
    introDesc: "Wij hebben het ziekteverzuim, de re-integratieverplichtingen en de positie van de doelvennootschap als eventueel eigenrisicodrager voor de Ziektewet en WGA onderzocht.",
    introConcise: "Verzuim, re-integratie en eigenrisicodragerschap.",
    requests: ["Geanonimiseerd overzicht van langdurig zieke werknemers (eerste ziektedag, percentage)", "Verzuimbeleid en contract met de arbodienst", "Beschikkingen eigenrisicodragerschap ZW/WGA"],
    findings: [F("Langdurig zieke werknemers", "oranje", "[Aantal] werknemers zijn langer dan zes maanden arbeidsongeschikt.", "De werkgever is gedurende 104 weken tot loondoorbetaling verplicht. Bij onvoldoende re-integratie-inspanningen kan UWV een loonsanctie van maximaal 52 weken opleggen.", "Vraag de re-integratiedossiers op en neem een garantie op over naleving van de re-integratieverplichtingen.", "garantie")] },
  { key: "geschillen", title: "Geschillen en claims", baseHours: 3,
    introDesc: "Wij hebben onderzocht of er lopende of dreigende arbeidsrechtelijke procedures, claims of onderzoeken door toezichthouders zijn.",
    introConcise: "Lopende en dreigende procedures en claims.",
    requests: ["Overzicht van lopende en dreigende arbeidsrechtelijke procedures en claims", "Vaststellingsovereenkomsten van de afgelopen twee jaar"],
    findings: [F("Lopende ontslagprocedure", "oranje", "Er loopt een procedure bij de kantonrechter met [functie] over [onderwerp]. De gevorderde vergoeding bedraagt EUR [bedrag].", "Toewijzing van de vordering leidt tot een betalingsverplichting voor de doelvennootschap.", "Bedingen een specifieke vrijwaring voor de uitkomst van deze procedure.", "vrijwaring")] },
  { key: "reorganisatie", title: "Reorganisaties en ontslag", baseHours: 3,
    introDesc: "Wij hebben onderzocht of in de afgelopen drie jaar reorganisaties of collectieve ontslagen hebben plaatsgevonden en of daarbij de Wet melding collectief ontslag (WMCO) en de medezeggenschapsregels zijn nageleefd.",
    introConcise: "Recente reorganisaties en collectief ontslag.",
    requests: ["Overzicht van ontslagen in de afgelopen drie jaar met ontslaggrond", "Sociaal plan en meldingen collectief ontslag"],
    findings: [F("Collectief ontslag zonder melding", "rood", "In [jaar] zijn binnen drie maanden [aantal] arbeidsovereenkomsten in één werkgebied beëindigd, zonder melding aan UWV en de vakbonden.", "Opzeggingen in strijd met de WMCO zijn vernietigbaar. Daarnaast kunnen de betrokken werknemers aanvullende vergoedingen vorderen.", "Vraag nadere informatie op en bedingen een specifieke vrijwaring.", "vrijwaring")] },
  { key: "compliance", title: "Arbeidsomstandigheden en compliance", baseHours: 3,
    introDesc: "Wij hebben onderzocht of de doelvennootschap de belangrijkste arbeidsrechtelijke compliance-verplichtingen naleeft, waaronder de Arbeidsomstandighedenwet, de Arbeidstijdenwet en de Wet arbeid vreemdelingen.",
    introConcise: "Arbo, arbeidstijden en Wet arbeid vreemdelingen.",
    requests: ["Risico-inventarisatie en -evaluatie (RI&E) met plan van aanpak", "Correspondentie met en boetes van de Nederlandse Arbeidsinspectie", "Overzicht van tewerkstellingsvergunningen en gecombineerde vergunningen"],
    findings: [F("Verouderde RI&E", "groen", "De meest recente RI&E dateert van [jaar] en is niet geactualiseerd.", "De Arbeidsinspectie kan een boete opleggen. Het risico is beperkt.", "Laat de RI&E na closing actualiseren.", "postclosing")] },
  { key: "privacy", title: "Privacy en personeelsgegevens", baseHours: 2,
    introDesc: "Wij hebben beoordeeld of de verwerking van personeelsgegevens voldoet aan de Algemene verordening gegevensbescherming (AVG), voor zover relevant voor de arbeidsrelatie.",
    introConcise: "Verwerking van personeelsgegevens onder de AVG.",
    requests: ["Privacyverklaring voor werknemers", "Regeling cameratoezicht en monitoring", "Verwerkersovereenkomsten met salarisverwerker en arbodienst"],
    findings: [F("Niet-geanonimiseerde personeelsgegevens in dataroom", "oranje", "In de dataroom zijn personeelsgegevens opgenomen die niet zijn geanonimiseerd, waaronder [gezondheidsgegevens / BSN].", "Het delen van deze gegevens met potentiële kopers is in strijd met de AVG en kan leiden tot handhaving door de Autoriteit Persoonsgegevens.", "Verzoek de verkoper deze documenten te anonimiseren of te verwijderen.", "qa")] },
  { key: "ovo", title: "Overgang van onderneming", baseHours: 4, assetOnly: true,
    introDesc: "Omdat de transactie als activa/passiva-transactie is gestructureerd, hebben wij beoordeeld of sprake is van overgang van onderneming in de zin van artikel 7:662 e.v. BW en wat daarvan de gevolgen zijn.",
    introConcise: "Gevolgen van overgang van onderneming (art. 7:662 e.v. BW).",
    requests: ["Overzicht van werknemers die werkzaam zijn in het over te dragen bedrijfsonderdeel", "Pensioenregeling van de over te dragen werknemers"],
    findings: [F("Overgang van onderneming", "oranje", "De transactie kwalificeert waarschijnlijk als overgang van onderneming. De [aantal] werknemers van het bedrijfsonderdeel gaan van rechtswege over met behoud van hun arbeidsvoorwaarden.", "De koper wordt werkgever van alle betrokken werknemers met alle rechten en verplichtingen. Harmonisatie van arbeidsvoorwaarden is beperkt mogelijk.", "Breng de over te nemen arbeidsvoorwaarden en de pensioenpositie (art. 7:664 BW) in kaart vóór signing.", "presigning")] }
];

const PROTECTIONS = [
  { k: "vrijwaring", nl: "Specifieke vrijwaring", en: "Specific indemnity", roles: ["koper"] },
  { k: "garantie", nl: "Garantie", en: "Warranty", roles: ["koper"] },
  { k: "cp", nl: "Opschortende voorwaarde", en: "Condition precedent", roles: ["koper"] },
  { k: "prijs", nl: "Koopprijsaanpassing", en: "Purchase price adjustment", roles: ["koper"] },
  { k: "presigning", nl: "Actie vóór signing", en: "Pre-signing action", roles: ["koper", "verkoper"] },
  { k: "postclosing", nl: "Actie na closing", en: "Post-closing action", roles: ["koper"] },
  { k: "herstel", nl: "Herstel vóór verkoop", en: "Remediate before sale", roles: ["verkoper"] },
  { k: "disclosure", nl: "Opnemen in disclosure letter", en: "Include in disclosure letter", roles: ["verkoper"] },
  { k: "garantiebeperking", nl: "Garanties beperken", en: "Limit warranties", roles: ["verkoper"] },
  { k: "qa", nl: "Nadere vragen (Q&A)", en: "Further questions (Q&A)", roles: ["koper", "verkoper"] },
  { k: "geen", nl: "Geen actie", en: "No action", roles: ["koper", "verkoper"] }
];

const LABELS = {
  nl: { reportTitle: "Arbeidsrechtelijk due diligence rapport", client: "Cliënt", onBehalf: "In opdracht van", target: "Doelvennootschap", transaction: "Transactie", date: "Datum", status: "Status", draft: "Concept – vertrouwelijk", intro: "Inleiding en reikwijdte", assumptions: "Uitgangspunten en beperkingen", summary: "Samenvatting belangrijkste bevindingen", topic: "Onderwerp", finding: "Bevinding", risk: "Risico", recommendation: "Aanbeveling", findingsPerTopic: "Bevindingen per onderwerp", ref: "Referentie dataroom", annex: "Bijlage – Risicoclassificatie", noKey: "Wij hebben geen bevindingen met een hoog of gemiddeld risico geconstateerd.", share: "Aandelentransactie", asset: "Activa/passiva-transactie", ratings: { rood: "Hoog", oranje: "Gemiddeld", groen: "Laag", info: "Info" }, ratingDesc: { rood: "Materieel risico; vereist contractuele bescherming of actie vóór signing.", oranje: "Relevant risico; aandacht in de transactiedocumentatie of nadere vragen aanbevolen.", groen: "Beperkt risico; geen of beperkte actie nodig.", info: "Ter informatie; geen direct risico." }, classification: "Classificatie", meaning: "Betekenis", trxBuyer: "de voorgenomen verwerving van {target}", trxSeller: "de voorgenomen verkoop van {target} (vendor due diligence)", quoteTitle: "Offerte arbeidsrechtelijke due diligence", work: "Werkzaamheden", reporting: "Rapportage", fee: "Fee", feeAssump: "Uitgangspunten", excl: "Niet inbegrepen", rates: "Uurtarieven", partner: "Partner", senior: "Senior advocaat", associate: "Advocaat", style: "Rapportvorm", concise: "Bondig", descriptive: "Beschrijvend", role: "Rol cliënt", buyer: "Koper", seller: "Verkoper", project: "Project", requestTitle: "Informatieverzoeklijst arbeidsrecht", requestIntro: "Wij verzoeken u de onderstaande documenten en informatie beschikbaar te stellen in de dataroom.", doc: "Document / informatie", remarks: "Opmerkingen" },
  en: { reportTitle: "Employment law due diligence report", client: "Client", onBehalf: "Instructed by", target: "Target", transaction: "Transaction", date: "Date", status: "Status", draft: "Draft – confidential", intro: "Introduction and scope", assumptions: "Assumptions and limitations", summary: "Executive summary of key findings", topic: "Topic", finding: "Finding", risk: "Risk", recommendation: "Recommendation", findingsPerTopic: "Findings per topic", ref: "Data room reference", annex: "Annex – Risk classification", noKey: "We have not identified any findings with a high or medium risk.", share: "Share transaction", asset: "Asset transaction", ratings: { rood: "High", oranje: "Medium", groen: "Low", info: "Info" }, ratingDesc: { rood: "Material risk; requires contractual protection or action before signing.", oranje: "Relevant risk; to be addressed in the transaction documents or through further questions.", groen: "Limited risk; no or limited action required.", info: "For information; no direct risk." }, classification: "Classification", meaning: "Meaning", trxBuyer: "the proposed acquisition of {target}", trxSeller: "the proposed sale of {target} (vendor due diligence)", quoteTitle: "Fee proposal employment law due diligence", work: "Scope of work", reporting: "Reporting", fee: "Fee", feeAssump: "Assumptions", excl: "Not included", rates: "Hourly rates", partner: "Partner", senior: "Senior associate", associate: "Associate", style: "Report format", concise: "Concise", descriptive: "Descriptive", role: "Client role", buyer: "Buyer", seller: "Seller", project: "Project", requestTitle: "Employment law information request list", requestIntro: "Please make the documents and information listed below available in the data room.", doc: "Document / information", remarks: "Remarks" }
};
const STATUSES = { offerte: "Offerte", lopend: "Lopend", concept: "Concept verstuurd", definitief: "Definitief", afgewezen: "Niet doorgegaan" };
const RATINGS = ["rood", "oranje", "groen", "info"];
const RATING_NL = { rood: "Rood · hoog", oranje: "Oranje · gemiddeld", groen: "Groen · laag", info: "Info" };

/* ============ Hulpfuncties ============ */
const $ = (s, el = document) => el.querySelector(s);
const h = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const clone = o => JSON.parse(JSON.stringify(o));
const eur = n => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n || 0);
const num1 = n => new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 }).format(n || 0);
const lines = s => (Array.isArray(s) ? s : String(s || "").split("\n")).map(x => x.trim()).filter(Boolean);
const fmtDate = s => { if (!s) return ""; const d = new Date(s + (s.length === 10 ? "T12:00:00" : "")); return isNaN(d) ? s : d.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" }); };
const today = () => new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
function deepMerge(base, over) {
  if (!over || typeof over !== "object" || Array.isArray(over)) return over === undefined ? base : over;
  const out = Array.isArray(base) ? [] : { ...base };
  for (const k of Object.keys(over)) out[k] = (base && typeof base[k] === "object" && !Array.isArray(base[k])) ? deepMerge(base[k], over[k]) : over[k];
  return out;
}
function getIn(o, path) { return path.split(".").reduce((a, k) => a == null ? a : a[k], o); }
function setIn(o, path, v) { const ks = path.split("."); const last = ks.pop(); const t = ks.reduce((a, k) => a[k], o); t[last] = v; }
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 2600); }
const ICON = {
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/></svg>',
  cog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>'
};

/* ============ Toestand ============ */
const S = {
  settings: clone(DEFAULT_SETTINGS), library: clone(DEFAULT_LIBRARY), dossiers: {},
  mode: "loading", loaded: { d: false, s: false, l: false }, stale: false, readOnly: false,
  view: "dossiers", openId: null, tab: "gegevens", topicIdx: 0, openF: null, filter: "actief", libIdx: 0, textLang: "nl",
  confirm: null, ai: null, aiBusy: null, undo: {}, downloads: null, db: null, dirty: new Set(), pendingRender: false
};
const D = () => S.dossiers[S.openId];
const libFor = key => S.library.find(t => t.key === key);

/* ============ Opslag (server-API) ============ */
async function api(method, url, body) {
  const r = await fetch(url, { method, headers: body !== undefined ? { "content-type": "application/json" } : undefined, body: body !== undefined ? JSON.stringify(body) : undefined, cache: "no-store" });
  if (r.status === 401) { location.href = "/login"; throw { code: "auth" }; }
  if (r.status === 403) { location.href = "/account"; throw { code: "auth" }; }
  if (!r.ok) { let j = {}; try { j = await r.json(); } catch {} throw { code: j.code || "http_" + r.status, message: j.error }; }
  return r.status === 204 ? null : r.json();
}
const writers = {};
function scheduleSave(path, getData) {
  const w = writers[path] ||= { timer: null, inflight: false, pending: false, getData };
  w.getData = getData; S.dirty.add(path);
  clearTimeout(w.timer); w.timer = setTimeout(() => { w.timer = null; flush(path); }, 600);
  setSync("Opslaan…", "warn");
}
async function flush(path) {
  const w = writers[path]; if (!w) return;
  if (w.inflight) { w.pending = true; return; }
  w.inflight = true;
  try {
    await api("PUT", "/api/docs/" + path, clone(w.getData()));
    setSync(S.mode === "memory" ? "Ontwikkelmodus · niet blijvend" : "Opgeslagen", "ok");
  } catch (e) {
    if (e && e.code === "quota_exceeded") toast("Dit dossier is te groot om op te slaan.");
    else if (e && e.code !== "auth") toast("Opslaan mislukt. Controleer je verbinding.");
    setSync("Niet opgeslagen", "warn");
  } finally {
    w.inflight = false;
    if (w.pending) { w.pending = false; flush(path); } else if (!w.timer) { S.dirty.delete(path); }
  }
}
async function removeDoc(path) {
  delete writers[path]; S.dirty.delete(path);
  try { await api("DELETE", "/api/docs/" + path); } catch { toast("Verwijderen mislukt."); }
}
function setSync(text, cls) { const el = $("#sync"); if (el) { el.querySelector("span").textContent = text; el.querySelector(".dot").className = "dot " + (cls || ""); } S.syncText = [text, cls]; }
function touched(scope) {
  if (scope === "d") { const d = D(); if (!d) return; d.updatedAt = Date.now(); scheduleSave("dossiers/" + d.id, () => S.dossiers[d.id]); }
  if (scope === "s") { scheduleSave("config/settings", () => S.settings); applyBrand(); }
  if (scope === "l") scheduleSave("config/library", () => ({ topics: S.library }));
}
function editingFocus() { const a = document.activeElement; return a && $("#main").contains(a) && /INPUT|TEXTAREA|SELECT/.test(a.tagName); }
function remoteRender() { if (editingFocus()) S.pendingRender = true; else render(); }

let lastPull = "";
async function pull(first) {
  const j = await api("GET", "/api/data");
  S.me = j.user; S.ai = j.aiEnabled ? true : null; S.mode = j.storage === "memory" ? "memory" : "db";
  const sig = JSON.stringify([j.dossiers, j.settings, j.library]);
  const changed = sig !== lastPull; lastPull = sig;
  if (changed) {
    const next = {};
    (j.dossiers || []).forEach(d => { next[d.id] = S.dirty.has("dossiers/" + d.id) && S.dossiers[d.id] ? S.dossiers[d.id] : d; });
    for (const p of S.dirty) if (p.startsWith("dossiers/")) { const id = p.slice(9); if (!next[id] && S.dossiers[id]) next[id] = S.dossiers[id]; }
    S.dossiers = next;
    if (!S.dirty.has("config/settings")) S.settings = j.settings ? deepMerge(DEFAULT_SETTINGS, j.settings) : clone(DEFAULT_SETTINGS);
    if (!S.dirty.has("config/library")) S.library = Array.isArray(j.library) && j.library.length ? j.library : clone(DEFAULT_LIBRARY);
    if (S.openId && !S.dossiers[S.openId]) { S.openId = null; location.hash = "dossiers"; }
  }
  const wasStale = S.stale;
  S.loaded = { d: true, s: true, l: true }; S.stale = false;
  if (!S.dirty.size) setSync(S.mode === "memory" ? "Ontwikkelmodus · niet blijvend" : "Verbonden · gedeeld met team", "ok");
  applyBrand();
  if (first || changed || wasStale) { if (first) render(); else remoteRender(); }
}
async function initStore() {
  try { await pull(true); }
  catch (e) { if (e && e.code === "auth") return; S.loaded = { d: true, s: true, l: true }; S.stale = true; S.dbMissing = e && e.code === "database_missing"; setSync(S.dbMissing ? "Geen database gekoppeld" : "Geen verbinding met de server", "warn"); render(); }
  setInterval(() => { if (document.visibilityState === "visible") pull().catch(() => { S.stale = true; setSync("Verbinding verbroken", "warn"); }); }, 20000);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") pull().catch(() => {}); });
}

/* ============ Huisstijl ============ */
function lum(hex) { const m = /^#?([\da-f]{6})$/i.exec(hex || ""); if (!m) return 0; const n = parseInt(m[1], 16); const c = [n >> 16, (n >> 8) & 255, n & 255].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; }
function applyBrand() {
  const st = S.settings, r = document.documentElement.style;
  r.setProperty("--brand", st.brand || DEFAULT_SETTINGS.brand);
  r.setProperty("--brand-ink", lum(st.brand) > .4 ? "#414042" : "#ffffff");
  r.setProperty("--brand-edge", st.brand && st.brand.toLowerCase() !== "#f9ff85" ? st.brand : "");
  if (!r.getPropertyValue("--brand-edge")) r.removeProperty("--brand-edge");
  if (/^#[\da-f]{6}$/i.test(st.side || "")) {
    const light = lum(st.side) > .45;
    r.setProperty("--side", st.side);
    r.setProperty("--side-fg", light ? "#414042" : "#ececea");
    r.setProperty("--side-muted", light ? "#6f6e72" : "#a3a2a7");
    r.setProperty("--side-hover", light ? "rgba(0,0,0,.07)" : "rgba(255,255,255,.08)");
  } else ["--side", "--side-fg", "--side-muted", "--side-hover"].forEach(k => r.removeProperty(k));
}
function logoHtml(cls = "") {
  const st = S.settings;
  if (st.logo) return st.logoPlate ? `<span class="plate"><img src="${st.logo}" alt="${h(st.officeName)}"></span>` : `<span class="free"><img src="${st.logo}" alt="${h(st.officeName)}"></span>`;
  return `<span class="tile"><img src="${DEFAULT_LOGO.src}" alt="${h(st.officeName)}"></span>`;
}

/* ============ Fee-berekening ============ */
function calcQuote(d) {
  const st = S.settings, Fc = st.factors, A = st.addons, q = d.quote || {};
  const topics = d.topics.filter(t => t.include);
  const e = +q.employees || 0;
  const size = e <= 25 ? .5 : e <= 100 ? .8 : e <= 250 ? 1 : e <= 500 ? 1.3 : e <= 1000 ? 1.6 : 2;
  const base = topics.reduce((s, t) => s + (+t.baseHours || 0), 0);
  const L = [];
  const core = base * size;
  L.push([`${topics.length} onderwerpen · ${num1(base)} basisuren × omvangsfactor ${num1(size)}`, core]);
  const ent = Math.max(0, (+q.entities || 1) - 1);
  if (ent) L.push([`${ent} extra werkgeversentiteit(en)`, core * Math.min(Fc.entity / 100 * ent, .6)]);
  if (q.hasOR) L.push(["Ondernemingsraad / medezeggenschap", +A.or]);
  if (q.cao === "meer") L.push(["Meerdere cao's", +A.caoMulti]);
  if (q.pension === "eigen") L.push(["Eigen pensioenregeling of verzekeraar", +A.pensionOwn]);
  if (+q.mgmtContracts > 0) L.push([`${q.mgmtContracts} managementovereenkomst(en)`, q.mgmtContracts * A.mgmt]);
  if (+q.disputes > 0) L.push([`${q.disputes} lopende procedure(s)`, q.disputes * A.dispute]);
  if (q.flex) L.push(["Analyse flexibele inhuur en zzp", +A.flex]);
  if (q.international) L.push(["Internationale werknemers", +A.international]);
  if (+q.qaRounds > 0) L.push([`${q.qaRounds} Q&A-ronde(s)`, q.qaRounds * A.qa]);
  const sub = L.reduce((s, l) => s + l[1], 0);
  const sf = (d.reportStyle === "bondig" ? Fc.concise : Fc.descriptive) / 100;
  L.push([`Rapportvorm ${d.reportStyle} (×${num1(sf)})`, sub * (sf - 1)]);
  if (d.lang === "en") L.push([`Engelstalig rapport (+${Fc.english}%)`, sub * Fc.english / 100]);
  if (q.urgent) L.push([`Spoed (+${Fc.urgent}%)`, sub * Fc.urgent / 100]);
  L.push([`Projectmanagement en afstemming (+${Fc.pm}%)`, sub * Fc.pm / 100]);
  const hours = L.reduce((s, l) => s + l[1], 0);
  const m = st.mix, R = st.rates, mt = (+m.partner + +m.senior + +m.associate) || 1;
  const rate = (m.partner * R.partner + m.senior * R.senior + m.associate * R.associate) / mt;
  const fee = hours * rate * (1 - (+q.discount || 0) / 100);
  const rd = n => Math.round(n / (st.rounding || 1)) * (st.rounding || 1);
  const band = Fc.band / 100;
  return { lines: L, hours, rate, fee, mid: rd(fee), low: rd(fee * (1 - band)), high: rd(fee * (1 + band)), hLow: Math.round(hours * (1 - band)), hHigh: Math.round(hours * (1 + band)), topics };
}
function feeLabel(d) { const c = calcQuote(d); const t = d.quote.feeType; return t === "fixed" ? eur(c.mid) + " vast" : t === "cap" ? "cap " + eur(c.high) : eur(c.low) + " – " + eur(c.high); }

/* ============ Dossier-model ============ */
function topicFromLib(t) { return { id: uid(), key: t.key, title: t.title, include: true, baseHours: t.baseHours, intro: "", findings: [] }; }
function newDossier() {
  return { id: "d" + uid(), name: "Nieuw project", client: "", role: "koper", target: "", dealType: "share", firm: "", contact: "", deadline: "", dataroomDate: "",
    reportStyle: "bondig", lang: "nl", status: "offerte", summary: "", createdAt: Date.now(), updatedAt: Date.now(),
    quote: { employees: 120, entities: 1, hasOR: true, cao: "een", pension: "verplicht", mgmtContracts: 2, disputes: 0, flex: false, international: false, urgent: false, qaRounds: 1, feeType: "raming", discount: 0, notes: "" },
    topics: S.library.filter(t => !t.assetOnly).map(topicFromLib) };
}
function counts(d) { const c = { rood: 0, oranje: 0, groen: 0, info: 0 }; d.topics.filter(t => t.include).forEach(t => t.findings.forEach(f => c[f.rating] = (c[f.rating] || 0) + 1)); return c; }
function countsHtml(c) { return `<span class="counts"><i class="c-rood" title="Hoog">${c.rood}</i><i class="c-oranje" title="Gemiddeld">${c.oranje}</i><i class="c-groen" title="Laag">${c.groen}</i></span>`; }
function topicIntro(t, d) { if (t.intro && t.intro.trim()) return t.intro; const l = libFor(t.key); return l ? (d.reportStyle === "bondig" ? l.introConcise : l.introDesc) : ""; }
function vars(d) {
  const T = LABELS[d.lang || "nl"], q = d.quote || {};
  const base = { client: d.client || "[cliënt]", target: d.target || "[doelvennootschap]", kantoor: d.firm || "[kantoor]", project: d.name, peildatum: d.dataroomDate ? fmtDate(d.dataroomDate) : "[datum]", ons_kantoor: S.settings.officeName, werknemers: q.employees, entiteiten: q.entities, qa: q.qaRounds };
  base.transactie = (d.role === "verkoper" ? T.trxSeller : T.trxBuyer).replace("{target}", base.target);
  return base;
}
function fill(s, d) { const v = vars(d); return String(s || "").replace(/\{(\w+)\}/g, (m, k) => v[k] !== undefined ? v[k] : m); }
const protLabel = (k, lang) => { const p = PROTECTIONS.find(x => x.k === k); return p ? p[lang || "nl"] : ""; };

/* ============ Rapport- en offerteblokken ============ */
function buildReport(d) {
  const T = LABELS[d.lang || "nl"], tx = S.settings.texts[d.lang || "nl"], concise = d.reportStyle === "bondig";
  const topics = d.topics.filter(t => t.include);
  const B = [];
  B.push({ type: "logo" });
  B.push({ type: "title", text: T.reportTitle });
  B.push({ type: "subtitle", text: d.name + (d.target ? " – " + d.target : "") });
  B.push({ type: "meta", rows: [[T.client, d.client || "—"], [T.onBehalf, d.firm || "—"], [T.target, d.target || "—"], [T.transaction, d.dealType === "asset" ? T.asset : T.share], [T.role, d.role === "verkoper" ? T.seller : T.buyer], [T.date, today()], [T.status, T.draft]] });
  B.push({ type: "pagebreak" });
  let n = 1;
  B.push({ type: "h1", text: `${n++}. ${T.intro}` });
  B.push({ type: "p", text: fill(tx.reportIntro, d) });
  B.push({ type: "h1", text: `${n++}. ${T.assumptions}` });
  B.push({ type: "bullets", items: lines(tx.reportAssumptions).map(x => fill(x, d)) });
  const sumN = n++;
  B.push({ type: "h1", text: `${sumN}. ${T.summary}` });
  if (d.summary && d.summary.trim()) d.summary.split(/\n{2,}/).forEach(p => B.push({ type: "p", text: p.trim() }));
  const keyR = concise ? ["rood", "oranje"] : ["rood", "oranje", "groen"];
  const firstTopicN = n;
  const key = [];
  topics.forEach((t, i) => t.findings.forEach((f, j) => { if (keyR.includes(f.rating)) key.push({ t, f, ref: concise ? `${firstTopicN}.${i + 1}` : `${firstTopicN + i}.${j + 1}` }); }));
  key.sort((a, b) => RATINGS.indexOf(a.f.rating) - RATINGS.indexOf(b.f.rating));
  if (key.length) B.push({ type: "table", widths: [8, 20, 34, 12, 26], head: ["§", T.topic, T.finding, T.risk, T.recommendation],
    rows: key.map(k => [k.ref, k.t.title, { parts: [{ text: k.f.title, bold: true }] }, { rating: k.f.rating, text: T.ratings[k.f.rating] }, (k.f.recommendation || "") + (k.f.protection && k.f.protection !== "geen" ? ` (${protLabel(k.f.protection, d.lang)})` : "")]) });
  else B.push({ type: "p", text: T.noKey });
  if (concise) {
    B.push({ type: "h1", text: `${n}. ${T.findingsPerTopic}` });
    topics.forEach((t, i) => {
      B.push({ type: "h2", text: `${n}.${i + 1} ${t.title}` });
      const intro = topicIntro(t, d); if (intro) B.push({ type: "p", text: intro });
      if (!t.findings.length) { B.push({ type: "p", text: tx.noFindings, italic: true }); return; }
      B.push({ type: "table", widths: [40, 13, 47], head: [T.finding, T.risk, T.recommendation],
        rows: t.findings.map(f => [{ parts: [{ text: f.title, bold: true }, { text: f.facts }, ...(f.risk ? [{ text: f.risk, italic: true }] : [])] }, { rating: f.rating, text: T.ratings[f.rating] },
          { parts: [{ text: f.recommendation || "" }, ...(f.protection && f.protection !== "geen" ? [{ text: protLabel(f.protection, d.lang), bold: true }] : []), ...(f.ref ? [{ text: T.ref + ": " + f.ref, small: true }] : [])] }]) });
    });
    n++;
  } else {
    topics.forEach((t, i) => {
      const tn = n + i;
      B.push({ type: "h1", text: `${tn}. ${t.title}` });
      const intro = topicIntro(t, d); if (intro) B.push({ type: "p", text: intro });
      if (!t.findings.length) { B.push({ type: "p", text: tx.noFindings, italic: true }); return; }
      t.findings.forEach((f, j) => {
        B.push({ type: "h2", text: `${tn}.${j + 1} ${f.title}`, rating: f.rating, ratingText: T.ratings[f.rating] });
        if (f.facts) B.push({ type: "p", label: T.finding, text: f.facts });
        if (f.risk) B.push({ type: "p", label: T.risk, text: f.risk });
        if (f.recommendation || f.protection) B.push({ type: "p", label: T.recommendation, text: (f.recommendation || "") + (f.protection && f.protection !== "geen" ? ` (${protLabel(f.protection, d.lang)})` : "") });
        if (f.ref) B.push({ type: "p", small: true, text: T.ref + ": " + f.ref });
      });
    });
    n += topics.length;
  }
  B.push({ type: "h1", text: T.annex });
  B.push({ type: "table", widths: [22, 78], head: [T.classification, T.meaning], rows: RATINGS.map(r => [{ rating: r, text: T.ratings[r] }, T.ratingDesc[r]]) });
  B.push({ type: "p", small: true, text: fill(S.settings.texts[d.lang || "nl"].reportDisclaimer, d) });
  return B;
}
function buildQuote(d) {
  const T = LABELS[d.lang || "nl"], tx = S.settings.texts[d.lang || "nl"], c = calcQuote(d), q = d.quote, en = d.lang === "en", R = S.settings.rates;
  const B = [{ type: "logo" }, { type: "title", text: T.quoteTitle }, { type: "subtitle", text: d.name + (d.target ? " – " + d.target : "") },
    { type: "meta", rows: [[T.client, d.client || "—"], [T.onBehalf, d.firm || "—"], [T.target, d.target || "—"], [T.role, d.role === "verkoper" ? T.seller : T.buyer], [T.style, d.reportStyle === "bondig" ? T.concise : T.descriptive], [T.date, today()]] }];
  B.push({ type: "h1", text: "1. " + T.work }, { type: "p", text: fill(tx.quoteIntro, d) }, { type: "bullets", items: c.topics.map(t => t.title) });
  const rep = d.reportStyle === "bondig"
    ? (en ? "We will report in a concise, table-based report (red flag report), setting out for each topic the key findings, the risk classification and our recommendations." : "Wij rapporteren in een bondig rapport in tabelvorm (red flag-rapportage), met per onderwerp de belangrijkste bevindingen, de risicoclassificatie en onze aanbevelingen.")
    : (en ? "We will report in a descriptive report, explaining for each topic the relevant facts and our legal analysis, together with a risk classification and recommendations." : "Wij rapporteren in een beschrijvend rapport, waarin wij per onderwerp de relevante feiten en onze juridische analyse toelichten, met een risicoclassificatie en aanbevelingen.");
  const role = d.role === "verkoper"
    ? (en ? "As the report is prepared for the seller, our recommendations focus on remediation before the sale and on preparing disclosures." : "Omdat het rapport voor de verkoper wordt opgesteld, richten onze aanbevelingen zich op herstel vóór de verkoop en op de voorbereiding van de disclosure.")
    : (en ? "Our recommendations focus on the contractual protection to be included in the purchase agreement." : "Onze aanbevelingen richten zich op de contractuele bescherming die in de koopovereenkomst kan worden opgenomen.");
  B.push({ type: "h1", text: "2. " + T.reporting }, { type: "p", text: rep + " " + role });
  B.push({ type: "h1", text: "3. " + T.fee });
  const ft = q.feeType === "fixed"
    ? (en ? `We offer a fixed fee of ${eur(c.mid)} for the work described above.` : `Voor de hierboven omschreven werkzaamheden bieden wij een vaste fee aan van ${eur(c.mid)}.`)
    : q.feeType === "cap"
      ? (en ? `We will charge on the basis of time spent, with a fee cap of ${eur(c.high)}. We estimate our work at ${c.hLow}–${c.hHigh} hours.` : `Wij declareren op basis van bestede uren, met een maximum (cap) van ${eur(c.high)}. Wij schatten onze werkzaamheden op ${c.hLow} tot ${c.hHigh} uur.`)
      : (en ? `Based on the current information, we estimate our work at ${c.hLow}–${c.hHigh} hours, corresponding to a fee between ${eur(c.low)} and ${eur(c.high)}.` : `Op basis van de huidige informatie schatten wij onze werkzaamheden op ${c.hLow} tot ${c.hHigh} uur. Dit komt overeen met een fee tussen ${eur(c.low)} en ${eur(c.high)}.`);
  B.push({ type: "p", text: ft });
  if (+q.discount > 0) B.push({ type: "p", text: en ? `This includes a discount of ${q.discount}%.` : `Hierin is een korting van ${q.discount}% verwerkt.` });
  B.push({ type: "table", widths: [60, 40], head: [T.rates, ""], rows: [[T.partner, eur(R.partner)], [T.senior, eur(R.senior)], [T.associate, eur(R.associate)]] });
  B.push({ type: "p", small: true, text: tx.vat });
  if (q.notes && q.notes.trim()) B.push({ type: "p", text: q.notes.trim() });
  B.push({ type: "h1", text: "4. " + T.feeAssump }, { type: "bullets", items: lines(tx.quoteAssumptions).map(x => fill(x, d)) });
  B.push({ type: "h1", text: "5. " + T.excl }, { type: "bullets", items: lines(tx.quoteExclusions).map(x => fill(x, d)) });
  return B;
}
function buildRequests(d) {
  const T = LABELS[d.lang || "nl"];
  const B = [{ type: "logo" }, { type: "title", text: T.requestTitle }, { type: "subtitle", text: d.name + (d.target ? " – " + d.target : "") }, { type: "p", text: T.requestIntro }];
  let n = 0;
  d.topics.filter(t => t.include).forEach(t => {
    const l = libFor(t.key); const reqs = l ? lines(l.requests) : [];
    if (!reqs.length) return;
    n++;
    B.push({ type: "h2", text: `${n}. ${t.title}` });
    B.push({ type: "table", widths: [10, 60, 30], head: ["#", T.doc, T.remarks], rows: reqs.map((r, k) => [`${n}.${k + 1}`, r, ""]) });
  });
  return B;
}
function cellText(c) { if (c == null) return ""; if (typeof c === "string") return c; if (c.rating) return c.text; return c.parts.map(p => p.text).filter(Boolean).join(" – "); }
function blocksToText(B) {
  const out = [];
  B.forEach(b => {
    if (b.type === "title" || b.type === "h1") out.push("\n" + b.text.toUpperCase());
    else if (b.type === "h2" || b.type === "subtitle") out.push("\n" + b.text);
    else if (b.type === "p") out.push((b.label ? b.label + ": " : "") + b.text);
    else if (b.type === "bullets") b.items.forEach(i => out.push("• " + i));
    else if (b.type === "meta") b.rows.forEach(r => out.push(r[0] + ": " + r[1]));
    else if (b.type === "table") { if (b.head.some(Boolean)) out.push(b.head.filter(Boolean).join(" | ")); b.rows.forEach(r => out.push(r.map(cellText).join(" | "))); }
  });
  return out.join("\n").trim();
}
function blocksToHtml(B) {
  const st = S.settings;
  const cell = c => { if (c == null) return ""; if (typeof c === "string") return h(c); if (c.rating) return `<span class="rt ${c.rating}">${h(c.text)}</span>`; return c.parts.filter(p => p.text).map(p => `<div${p.small ? ' style="font-size:11px;color:var(--paper-muted)"' : ""}>${p.bold ? "<strong>" + h(p.text) + "</strong>" : p.italic ? "<em>" + h(p.text) + "</em>" : h(p.text)}</div>`).join(""); };
  return B.map(b => {
    switch (b.type) {
      case "logo": return `<img class="r-logo" src="${st.logo || DEFAULT_LOGO.src}" alt="${h(st.officeName)}">`;
      case "title": return `<h1 class="r-title">${h(b.text)}</h1>`;
      case "subtitle": return `<p class="r-sub">${h(b.text)}</p>`;
      case "meta": return `<table class="r-meta">${b.rows.map(r => `<tr><td>${h(r[0])}</td><td>${h(r[1])}</td></tr>`).join("")}</table>`;
      case "pagebreak": return `<hr class="r-break">`;
      case "h1": return `<h2 class="rh1">${h(b.text)}</h2>`;
      case "h2": return `<h3 class="rh2">${h(b.text)}${b.rating ? ` <span class="rt ${b.rating}">${h(b.ratingText)}</span>` : ""}</h3>`;
      case "p": return `<p class="${b.small ? "sm" : ""}">${b.label ? `<strong>${h(b.label)}.</strong> ` : ""}${b.italic ? "<em>" + h(b.text) + "</em>" : h(b.text).replace(/\n/g, "<br>")}</p>`;
      case "bullets": return `<ul>${b.items.map(i => `<li>${h(i)}</li>`).join("")}</ul>`;
      case "table": return `<div class="tbl-wrap"><table>${b.head.some(Boolean) ? `<tr>${b.head.map((x, i) => `<th style="width:${b.widths[i]}%">${h(x)}</th>`).join("")}</tr>` : ""}${b.rows.map(r => `<tr>${r.map(c => `<td>${cell(c)}</td>`).join("")}</tr>`).join("")}</table></div>`;
    }
    return "";
  }).join("");
}

/* ============ Word-export ============ */
let docxLoading = null;
function loadDocx() {
  return docxLoading ||= import("docx").catch(e => { docxLoading = null; throw new Error("load"); });
}
const RATING_FILL = { rood: "C2352B", oranje: "D98A00", groen: "2B7D48", info: "3A689E" };
function b64ToBytes(dataUrl) { const b = atob(dataUrl.split(",")[1]); const u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
async function blocksToDocx(B, title) {
  const X = await loadDocx(), st = S.settings;
  const LOGO = st.logo && st.logoW ? { w: st.logoW, h: st.logoH } : DEFAULT_LOGO;
  const logoBytes = st.logo && st.logoW ? b64ToBytes(st.logo) : new Uint8Array(await (await fetch(DEFAULT_LOGO.src)).arrayBuffer());
  const TOTAL = 9000;
  const run = (text, o = {}) => new X.TextRun({ text, ...o });
  const para = (children, o = {}) => new X.Paragraph({ children, spacing: { after: 120 }, ...o });
  const cellParas = c => {
    if (c == null || c === "") return [para([run("")], { spacing: { after: 0 } })];
    if (typeof c === "string") return c.split("\n").map(t => para([run(t, { size: 18 })], { spacing: { after: 40 } }));
    if (c.rating) return [para([run(c.text, { bold: true, color: "FFFFFF", size: 18 })], { spacing: { after: 0 } })];
    return c.parts.filter(p => p.text).map(p => para([run(p.text, { bold: !!p.bold, italics: !!p.italic, size: p.small ? 15 : 18, color: p.small ? "5D6270" : undefined })], { spacing: { after: 60 } }));
  };
  const table = b => {
    const widths = b.widths.map(w => Math.round(TOTAL * w / 100));
    const mk = (c, i, head) => new X.TableCell({ width: { size: widths[i], type: X.WidthType.DXA }, children: head ? [para([run(c || "", { bold: true, size: 18 })], { spacing: { after: 0 } })] : cellParas(c),
      shading: head ? { fill: "F9FF85", type: X.ShadingType.CLEAR, color: "auto" } : (c && c.rating ? { fill: RATING_FILL[c.rating], type: X.ShadingType.CLEAR, color: "auto" } : undefined),
      margins: { top: 60, bottom: 60, left: 90, right: 90 } });
    const rows = [];
    if (b.head.some(Boolean)) rows.push(new X.TableRow({ tableHeader: true, children: b.head.map((c, i) => mk(c, i, true)) }));
    b.rows.forEach(r => rows.push(new X.TableRow({ children: r.map((c, i) => mk(c, i, false)) })));
    return [new X.Table({ width: { size: TOTAL, type: X.WidthType.DXA }, columnWidths: widths, rows }), para([run("")], { spacing: { after: 120 } })];
  };
  const children = [];
  B.forEach(b => {
    switch (b.type) {
      case "logo":
        { const w = Math.min(150, LOGO.w), hh = Math.round(w * LOGO.h / LOGO.w); children.push(para([new X.ImageRun({ data: logoBytes, transformation: { width: w, height: hh } })], { spacing: { after: 480 } })); }
        break;
      case "title": children.push(para([run(b.text.toUpperCase(), { size: 40 })], { spacing: { after: 120 } })); break;
      case "subtitle": children.push(para([run(b.text, { size: 28, color: "6F6E72" })], { spacing: { after: 360 } })); break;
      case "meta": b.rows.forEach(r => children.push(para([run(r[0] + ": ", { color: "5D6270" }), run(String(r[1]), { bold: true })], { spacing: { after: 60 } }))); break;
      case "pagebreak": children.push(new X.Paragraph({ children: [new X.PageBreak()] })); break;
      case "h1": children.push(new X.Paragraph({ heading: X.HeadingLevel.HEADING_1, children: [run(b.text.toUpperCase())], spacing: { before: 280, after: 120 } })); break;
      case "h2": children.push(new X.Paragraph({ heading: X.HeadingLevel.HEADING_2, children: [run(b.text), ...(b.rating ? [run("  "), run(` ${b.ratingText} `, { bold: true, color: "FFFFFF", shading: { fill: RATING_FILL[b.rating], type: X.ShadingType.CLEAR, color: "auto" } })] : [])], spacing: { before: 200, after: 80 } })); break;
      case "p": String(b.text).split("\n").forEach((t, i) => children.push(para([...(b.label && i === 0 ? [run(b.label + ". ", { bold: true })] : []), run(t, { italics: !!b.italic, size: b.small ? 16 : undefined, color: b.small ? "5D6270" : undefined })]))); break;
      case "bullets": b.items.forEach(i => children.push(new X.Paragraph({ children: [run(i)], bullet: { level: 0 }, spacing: { after: 60 } }))); break;
      case "table": children.push(...table(b)); break;
    }
  });
  const doc = new X.Document({
    creator: st.officeName, title,
    styles: { default: { document: { run: { font: "Arial", size: 20, color: "414042" } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", run: { size: 28, color: "414042" } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", run: { size: 23, bold: true, color: "414042" } }] },
    sections: [{
      properties: { page: { margin: { top: 1300, bottom: 1200, left: 1300, right: 1300 } } },
      headers: { default: new X.Header({ children: [new X.Paragraph({ alignment: X.AlignmentType.RIGHT, children: [run(st.officeName + " · " + title, { size: 15, color: "8A8F9A" })] })] }) },
      footers: { default: new X.Footer({ children: [new X.Paragraph({ alignment: X.AlignmentType.RIGHT, children: [new X.TextRun({ children: [X.PageNumber.CURRENT], size: 16, color: "8A8F9A" })] })] }) },
      children
    }]
  });
  return X.Packer.toBlob(doc);
}
function saveFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
async function exportDocx(B, filename, title, btn) {
  if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Bezig…"; }
  try {
    const blob = await blocksToDocx(B, title);
    saveFile(blob, filename);
    toast("Word-bestand gedownload");
  } catch (e) {
    if (e && e.message === "load") toast("De Word-module kon niet laden. Ververs de pagina.");
    else toast("Exporteren is mislukt.");
  } finally { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label; } }
}
const safeName = s => (s || "dossier").replace(/[^\w\- ]+/g, "").trim().replace(/\s+/g, "-").slice(0, 60) || "dossier";
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); toast("Tekst gekopieerd"); }
  catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast("Tekst gekopieerd"); } catch { toast("Kopiëren lukt hier niet. Selecteer de tekst handmatig."); } ta.remove(); }
}

/* ============ Weergaven ============ */
function render() {
  S.pendingRender = false;
  const hash = location.hash.slice(1);
  if (hash.startsWith("d-") && S.dossiers[hash.slice(2)]) { S.view = "dossier"; if (S.openId !== hash.slice(2)) { S.openId = hash.slice(2); S.topicIdx = 0; S.openF = null; } }
  else if (hash === "bibliotheek") S.view = "bibliotheek";
  else if (hash === "instellingen") S.view = "instellingen";
  else S.view = "dossiers";
  renderSide();
  const main = $("#main"), y = main.scrollTop;
  const openBanner = S.me && S.me.open ? `<div class="notice warn" role="status"><strong>Inloggen staat uit.</strong> Iedereen met de link kan deze tool openen en wijzigen. Gebruik geen echte cliëntgegevens totdat het inloggen aan staat.</div>` : "";
  main.innerHTML = `<div class="wrap">${openBanner}${S.view === "dossier" ? viewDossier() : S.view === "bibliotheek" ? viewLibrary() : S.view === "instellingen" ? viewSettings() : viewList()}</div>`;
  main.scrollTop = y;
}
function go(hash) { if (location.hash.slice(1) === hash) render(); else location.hash = hash; }
function renderSide() {
  const nav = [["dossiers", "Dossiers", ICON.folder], ["bibliotheek", "Bibliotheek", ICON.book], ["instellingen", "Instellingen", ICON.cog]];
  const cur = S.view === "dossier" ? "dossiers" : S.view;
  $("#side").innerHTML = `<div class="brand">${logoHtml()}<span class="brand-sub">Due diligence · arbeidsrecht</span></div>
  <nav class="nav">${nav.map(([k, l, i]) => `<button class="${cur === k ? "on" : ""}" data-act="go" data-to="${k}" aria-label="${l}">${i}<span>${l}</span></button>`).join("")}</nav>
  <div class="side-foot" style="flex-direction:column;align-items:flex-start;gap:8px">
    ${S.me && S.me.open ? `<div class="small" style="color:var(--side-fg)">Inloggen staat uit</div>` : S.me ? `<div class="small" style="color:var(--side-fg)">${h(S.me.name)}<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:2px">${S.me.role === "admin" ? `<a href="/beheer" style="color:var(--side-muted)">Gebruikers</a>` : ""}<a href="/account" style="color:var(--side-muted)">Wachtwoord</a><a href="/logout" style="color:var(--side-muted)">Uitloggen</a></div></div>` : ""}
    <div id="sync" style="display:flex;gap:8px;align-items:center"><i class="dot ${S.syncText ? S.syncText[1] : ""}"></i><span>${h(S.syncText ? S.syncText[0] : "Verbinden…")}</span></div></div>`;
}

function viewList() {
  const all = Object.values(S.dossiers).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  const active = all.filter(d => d.status === "lopend" || d.status === "concept");
  const quotes = all.filter(d => d.status === "offerte");
  const reds = active.reduce((s, d) => s + counts(d).rood, 0);
  const pipeline = quotes.reduce((s, d) => s + calcQuote(d).mid, 0);
  const filters = [["actief", "Openstaand"], ["offerte", "Offerte"], ["lopend", "Lopend"], ["concept", "Concept verstuurd"], ["definitief", "Definitief"], ["alle", "Alle"]];
  const list = all.filter(d => S.filter === "alle" ? true : S.filter === "actief" ? ["offerte", "lopend", "concept"].includes(d.status) : d.status === S.filter);
  const loading = S.mode === "loading" || (S.mode === "db" && !S.loaded.d);
  return `
  <header class="page-head"><div><p class="eyebrow">Arbeidsrechtelijke due diligence</p><h1>Dossiers<span class="arrow" aria-hidden="true">↘</span></h1></div>
    <button class="btn primary" data-act="newDossier">+ Nieuw dossier</button></header>
  ${S.mode === "memory" ? `<div class="notice warn">Ontwikkelmodus: er is geen database gekoppeld. Gegevens verdwijnen als de server herstart.</div>` : ""}
  ${S.dbMissing ? `<div class="notice warn"><strong>Er is nog geen database gekoppeld.</strong> Ga in Vercel naar Storage → Create Database → Neon (regio Frankfurt), koppel de database aan dit project en kies daarna bij Deployments → Redeploy. Tot die tijd wordt niets opgeslagen.</div>` : S.stale ? `<div class="notice warn">De server is niet bereikbaar. Wat je ziet kan verouderd zijn; wijzigingen worden opgeslagen zodra de verbinding terug is.</div>` : ""}
  <div class="stats">
    <div class="stat"><b>${active.length}</b><span>Lopende onderzoeken</span></div>
    <div class="stat"><b>${quotes.length}</b><span>Uitstaande offertes</span></div>
    <div class="stat"><b style="color:var(--red)">${reds}</b><span>Rode vlaggen in lopende dossiers</span></div>
    <div class="stat"><b>${eur(pipeline)}</b><span>Geraamde fee uitstaande offertes</span></div>
  </div>
  <div class="chips">${filters.map(([k, l]) => `<button class="chip ${S.filter === k ? "on" : ""}" data-act="filter" data-k="${k}">${l}</button>`).join("")}</div>
  ${loading ? `<div class="card empty"><p class="muted">Dossiers laden…</p></div>` : !list.length ? `<div class="card empty"><h3>${all.length ? "Geen dossiers in deze selectie" : "Nog geen dossiers"}</h3><p class="muted">Maak een dossier aan om een fee quote te berekenen en een rapport op te bouwen.</p><button class="btn primary" data-act="newDossier">+ Nieuw dossier</button></div>` : `
  <div class="table-wrap"><table class="list"><thead><tr><th>Project</th><th>Cliënt</th><th>Rol</th><th>Rapport</th><th>Status</th><th>Bevindingen</th><th class="num">Fee</th><th>Deadline</th></tr></thead><tbody>
  ${list.map(d => `<tr data-act="open" data-id="${d.id}" tabindex="0"><td><div class="name">${h(d.name)} ${d.isExample ? '<span class="tag example">Voorbeeld</span>' : ""}</div><div class="small muted">${h(d.target || "—")}</div></td>
    <td>${h(d.client || "—")}<div class="small muted">${h(d.firm || "")}</div></td>
    <td><span class="tag">${d.role === "verkoper" ? "Verkoper" : "Koper"}</span></td>
    <td>${d.reportStyle === "bondig" ? "Bondig" : "Beschrijvend"}${d.lang === "en" ? " · EN" : ""}</td>
    <td><span class="pill st-${d.status}">${STATUSES[d.status] || d.status}</span></td>
    <td>${countsHtml(counts(d))}</td>
    <td class="num">${feeLabel(d)}</td>
    <td class="small">${d.deadline ? fmtDate(d.deadline) : "—"}</td></tr>`).join("")}
  </tbody></table></div>`}`;
}

function viewDossier() {
  const d = D(); if (!d) return "";
  const c = counts(d), nF = d.topics.reduce((s, t) => s + (t.include ? t.findings.length : 0), 0);
  const tabs = [["gegevens", "Gegevens"], ["quote", "Fee quote"], ["onderwerpen", "Onderwerpen & bevindingen", nF], ["rapport", "Rapport"]];
  const body = S.tab === "quote" ? tabQuote(d) : S.tab === "onderwerpen" ? tabTopics(d) : S.tab === "rapport" ? tabReport(d) : tabInfo(d);
  return `
  <div><button class="btn ghost sm" data-act="go" data-to="dossiers">← Alle dossiers</button></div>
  <header class="page-head"><div style="min-width:0"><p class="eyebrow">${h(d.target || "Doelvennootschap nog niet ingevuld")}${d.client ? " · " + h(d.client) : ""}</p><h1 id="dHead" class="plain">${h(d.name)}</h1>
    <div class="row" style="margin-top:8px"><span class="pill st-${d.status}">${STATUSES[d.status]}</span><span class="tag">${d.role === "verkoper" ? "Verkoper" : "Koper"}</span><span class="tag">${d.dealType === "asset" ? "Activa/passiva" : "Aandelen"}</span><span class="tag">${d.reportStyle === "bondig" ? "Bondig" : "Beschrijvend"} · ${d.lang.toUpperCase()}</span>${countsHtml(c)}</div></div>
    <div class="row">${S.confirm === "delD" ? `<span class="small muted">Dossier definitief verwijderen?</span><button class="btn danger solid sm" data-act="delDossier">Verwijderen</button><button class="btn sm" data-act="cancel">Annuleren</button>` : `<button class="btn sm" data-act="dupDossier">Dupliceren</button><button class="btn sm danger" data-act="ask" data-k="delD">Verwijderen</button>`}</div>
  </header>
  <nav class="tabs">${tabs.map(([k, l, n]) => `<button class="${S.tab === k ? "on" : ""}" data-act="tab" data-k="${k}"><span class="lb">${l}</span>${n !== undefined ? `<span class="n">${n}</span>` : ""}</button>`).join("")}</nav>
  ${body}`;
}
const seg = (path, opts, cur, extra = "") => `<div class="seg ${extra}">${opts.map(([v, l]) => `<button class="${cur === v ? "on " + v : v}" data-act="setD" data-path="${path}" data-val="${v}">${l}</button>`).join("")}</div>`;
const inp = (scope, path, val, o = {}) => `<input type="${o.type || "text"}" id="${scope}-${path.replace(/\./g, "-")}" data-bind="${scope}:${path}" ${o.type === "number" ? 'data-type="num" inputmode="decimal" step="any"' : ""} value="${h(val)}" ${o.ph ? `placeholder="${h(o.ph)}"` : ""} ${o.live ? `data-live="${o.live}"` : ""}>`;
const txt = (scope, path, val, o = {}) => `<textarea id="${scope}-${path.replace(/\./g, "-")}" data-bind="${scope}:${path}" ${o.lines ? 'data-type="lines"' : ""} rows="${o.rows || 3}" ${o.ph ? `placeholder="${h(o.ph)}"` : ""} ${o.live ? `data-live="${o.live}"` : ""}>${h(Array.isArray(val) ? val.join("\n") : val)}</textarea>`;
const chk = (scope, path, val, label, o = {}) => `<label class="toggle"><input type="checkbox" id="${scope}-${path.replace(/\./g, "-")}" data-bind="${scope}:${path}" ${val ? "checked" : ""} ${o.live ? `data-live="${o.live}"` : ""}><span>${label}</span></label>`;

function tabInfo(d) {
  return `<div class="card"><div class="form">
    <div class="field"><label for="d-name">Projectnaam</label>${inp("d", "name", d.name, { live: "head" })}</div>
    <div class="field"><label for="d-status">Status</label><select id="d-status" data-bind="d:status" data-rerender>${Object.entries(STATUSES).map(([k, l]) => `<option value="${k}" ${d.status === k ? "selected" : ""}>${l}</option>`).join("")}</select></div>
    <div class="field"><label for="d-client">Onze cliënt</label>${inp("d", "client", d.client, { ph: "Bijv. Investeringsmaatschappij B.V." })}</div>
    <div class="field"><span class="lbl">Rol van de cliënt</span>${seg("role", [["koper", "Koper"], ["verkoper", "Verkoper (vendor DD)"]], d.role)}</div>
    <div class="field"><label for="d-target">Doelvennootschap (target)</label>${inp("d", "target", d.target, { ph: "Bijv. Target Holding B.V." })}</div>
    <div class="field"><span class="lbl">Transactiestructuur</span>${seg("dealType", [["share", "Aandelentransactie"], ["asset", "Activa/passiva"]], d.dealType)}<span class="hint">Bij activa/passiva wordt het onderwerp overgang van onderneming toegevoegd.</span></div>
    <div class="field"><label for="d-firm">Ondernemingsrechtkantoor (opdrachtgever)</label>${inp("d", "firm", d.firm, { ph: "Kantoor dat ons inschakelt" })}</div>
    <div class="field"><label for="d-contact">Contactpersoon</label>${inp("d", "contact", d.contact)}</div>
    <div class="field"><label for="d-deadline">Deadline rapport</label>${inp("d", "deadline", d.deadline, { type: "date" })}</div>
    <div class="field"><label for="d-dataroomDate">Peildatum dataroom</label>${inp("d", "dataroomDate", d.dataroomDate, { type: "date" })}</div>
    <div class="field full"><span class="lbl">Rapportvorm</span><div class="style-opt">
      <button class="${d.reportStyle === "bondig" ? "on" : ""}" data-act="setD" data-path="reportStyle" data-val="bondig"><b>Bondig</b><span>Red flag-rapport in tabelvorm: per onderwerp bevinding, risico en aanbeveling.</span></button>
      <button class="${d.reportStyle === "beschrijvend" ? "on" : ""}" data-act="setD" data-path="reportStyle" data-val="beschrijvend"><b>Beschrijvend</b><span>Uitgeschreven rapport met feiten, juridische analyse en aanbevelingen per bevinding.</span></button></div></div>
    <div class="field"><span class="lbl">Taal rapport en offerte</span>${seg("lang", [["nl", "Nederlands"], ["en", "Engels"]], d.lang)}</div>
  </div></div>`;
}

function tabQuote(d) {
  const q = d.quote, inc = d.topics.filter(t => t.include).length;
  return `<div class="split q">
  <div class="card"><div class="card-head"><h2>Parameters</h2><span class="small muted">${inc} onderwerpen in scope · <button class="btn ghost sm" data-act="tab" data-k="onderwerpen">wijzigen</button></span></div>
    <div class="form">
      <div class="field"><label for="d-quote-employees">Aantal werknemers</label>${inp("d", "quote.employees", q.employees, { type: "number", live: "quote" })}</div>
      <div class="field"><label for="d-quote-entities">Werkgeversentiteiten</label>${inp("d", "quote.entities", q.entities, { type: "number", live: "quote" })}</div>
      <div class="field"><label for="d-quote-cao">Cao</label><select id="d-quote-cao" data-bind="d:quote.cao" data-live="quote"><option value="geen" ${q.cao === "geen" ? "selected" : ""}>Geen cao</option><option value="een" ${q.cao === "een" ? "selected" : ""}>Eén cao</option><option value="meer" ${q.cao === "meer" ? "selected" : ""}>Meerdere cao's</option></select></div>
      <div class="field"><label for="d-quote-pension">Pensioen</label><select id="d-quote-pension" data-bind="d:quote.pension" data-live="quote"><option value="geen" ${q.pension === "geen" ? "selected" : ""}>Geen regeling</option><option value="verplicht" ${q.pension === "verplicht" ? "selected" : ""}>Bedrijfstakpensioenfonds</option><option value="eigen" ${q.pension === "eigen" ? "selected" : ""}>Eigen regeling / verzekeraar</option></select></div>
      <div class="field"><label for="d-quote-mgmtContracts">Managementovereenkomsten</label>${inp("d", "quote.mgmtContracts", q.mgmtContracts, { type: "number", live: "quote" })}</div>
      <div class="field"><label for="d-quote-disputes">Lopende procedures</label>${inp("d", "quote.disputes", q.disputes, { type: "number", live: "quote" })}</div>
      <div class="field"><label for="d-quote-qaRounds">Q&amp;A-rondes</label>${inp("d", "quote.qaRounds", q.qaRounds, { type: "number", live: "quote" })}</div>
      <div class="field"><label for="d-quote-discount">Korting (%)</label>${inp("d", "quote.discount", q.discount, { type: "number", live: "quote" })}</div>
      <div class="field full" style="gap:0">
        ${chk("d", "quote.hasOR", q.hasOR, "Ondernemingsraad aanwezig", { live: "quote" })}
        ${chk("d", "quote.flex", q.flex, "Veel flexibele inhuur of zzp'ers", { live: "quote" })}
        ${chk("d", "quote.international", q.international, "Werknemers in het buitenland of expats", { live: "quote" })}
        ${chk("d", "quote.urgent", q.urgent, "Spoed (rapport binnen een week)", { live: "quote" })}
      </div>
      <div class="field full"><span class="lbl">Feevorm</span>${seg("quote.feeType", [["raming", "Raming (bandbreedte)"], ["fixed", "Vaste fee"], ["cap", "Uren met cap"]], q.feeType)}</div>
      <div class="field full"><label for="d-quote-notes">Aanvullende tekst in de offerte</label>${txt("d", "quote.notes", q.notes, { rows: 2, live: "quote", ph: "Bijv. afspraken over facturering of planning" })}</div>
    </div></div>
  <div class="sticky" style="display:flex;flex-direction:column;gap:18px"><div class="card" id="quoteResult">${quoteResult(d)}</div>
    <div class="card"><div class="card-head"><h2>Offertetekst</h2><div class="row"><button class="btn sm" data-act="copyQuote">Kopieer tekst</button><button class="btn primary sm" data-act="exportQuote">Word (.docx)</button></div></div>
    <div class="qtext" id="quoteText">${h(blocksToText(buildQuote(d).filter(b => b.type !== "logo")))}</div></div></div>
  </div>`;
}
function quoteResult(d) {
  const c = calcQuote(d), t = d.quote.feeType;
  const big = t === "fixed" ? eur(c.mid) : t === "cap" ? eur(c.high) : `${eur(c.low)} – ${eur(c.high)}`;
  return `<p class="eyebrow">${t === "fixed" ? "Vaste fee" : t === "cap" ? "Fee cap" : "Indicatie fee"}</p>
  <div class="fee-big">${big}</div><div class="band"></div>
  <div class="fee-sub"><span>Uren <b>${c.hLow}–${c.hHigh}</b></span><span>Gemengd tarief <b>${eur(c.rate)}</b></span><span>Middenwaarde <b>${eur(c.mid)}</b></span></div>
  <table class="breakdown">${c.lines.map(l => `<tr><td>${h(l[0])}</td><td>${num1(l[1])} u</td></tr>`).join("")}<tr class="tot"><td>Totaal geraamde uren</td><td>${num1(c.hours)} u</td></tr></table>
  <p class="small muted" style="margin:10px 0 0">Tarieven, factoren en opslagen pas je aan onder Instellingen.</p>`;
}

function tabTopics(d) {
  if (S.topicIdx >= d.topics.length) S.topicIdx = Math.max(0, d.topics.length - 1);
  const t = d.topics[S.topicIdx];
  const missing = S.library.filter(l => !d.topics.some(x => x.key === l.key));
  return `<div class="split t">
  <div class="card" style="padding:12px"><div class="card-head" style="padding:4px 6px 0"><h2>Onderwerpen</h2><button class="btn sm" data-act="exportRequests" title="Informatieverzoeklijst op basis van de geselecteerde onderwerpen">Verzoeklijst</button></div>
    <div class="tlist" id="topicList">${topicList(d)}</div>
    <div class="field" style="margin-top:12px;padding:0 6px"><label for="addTopic">Onderwerp toevoegen</label>
      <select id="addTopic" data-act-change="addTopic"><option value="">Kies…</option>${missing.map(l => `<option value="${h(l.key)}">${h(l.title)}</option>`).join("")}<option value="__custom">Eigen onderwerp</option></select></div>
  </div>
  <div style="display:flex;flex-direction:column;gap:14px;min-width:0">${t ? topicEditor(d, t, S.topicIdx) : `<div class="card empty"><h3>Geen onderwerpen</h3><p class="muted">Voeg links een onderwerp toe.</p></div>`}</div>
  </div>`;
}
function topicList(d) {
  return d.topics.map((t, i) => {
    const c = { rood: 0, oranje: 0, groen: 0 }; t.findings.forEach(f => c[f.rating] !== undefined && c[f.rating]++);
    return `<div class="titem ${i === S.topicIdx ? "on" : ""} ${t.include ? "" : "off"}">
      <input type="checkbox" aria-label="Opnemen in scope" id="inc-${t.id}" data-bind="d:topics.${i}.include" data-rerender ${t.include ? "checked" : ""}>
      <button class="tname" data-act="selTopic" data-i="${i}" title="${h(t.title)}">${h(t.title)}</button>
      <span class="tmeta">${t.findings.length ? countsHtml(c) : `<span class="small muted">–</span>`}</span></div>`;
  }).join("");
}
function topicEditor(d, t, ti) {
  const lib = libFor(t.key), libDefault = lib ? (d.reportStyle === "bondig" ? lib.introConcise : lib.introDesc) : "";
  const stdF = lib ? lib.findings || [] : [];
  const prots = PROTECTIONS.filter(p => p.roles.includes(d.role));
  return `<div class="card">
    <div class="card-head"><div class="row"><button class="icon-btn" data-act="moveTopic" data-dir="-1" aria-label="Omhoog">↑</button><button class="icon-btn" data-act="moveTopic" data-dir="1" aria-label="Omlaag">↓</button><span class="small muted">Onderwerp ${ti + 1} van ${d.topics.length}</span></div>
      <div class="row">${S.confirm === "delT" ? `<span class="small muted">Onderwerp met ${t.findings.length} bevinding(en) verwijderen?</span><button class="btn danger solid sm" data-act="delTopic">Verwijderen</button><button class="btn sm" data-act="cancel">Annuleren</button>` : `<button class="btn sm danger" data-act="ask" data-k="delT">Onderwerp verwijderen</button>`}</div></div>
    <div class="form">
      <div class="field full"><label for="d-topics-${ti}-title">Titel</label>${inp("d", `topics.${ti}.title`, t.title, { live: "topics" })}</div>
      <div class="field">${chk("d", `topics.${ti}.include`, t.include, "Opnemen in scope en rapport", { live: "all" })}</div>
      <div class="field"><label for="d-topics-${ti}-baseHours">Basisuren (voor fee quote)</label>${inp("d", `topics.${ti}.baseHours`, t.baseHours, { type: "number" })}</div>
      <div class="field full"><label for="d-topics-${ti}-intro">Inleidende tekst</label>${txt("d", `topics.${ti}.intro`, t.intro, { rows: 3, ph: libDefault ? "Standaard (" + (d.reportStyle === "bondig" ? "bondig" : "beschrijvend") + "): " + libDefault : "Optioneel" })}
        <span class="hint">Leeg laten gebruikt de standaardtekst uit de bibliotheek voor de gekozen rapportvorm.${libDefault ? ` <button class="btn ghost sm" data-act="useIntro">Standaardtekst invullen</button>` : ""}</span></div>
    </div></div>
  <div class="card"><div class="card-head"><h2>Bevindingen <span class="muted" style="font-weight:500">(${t.findings.length})</span></h2>
    <div class="row">${stdF.length ? `<select id="stdF" data-act-change="addStdF" style="width:auto;max-width:260px"><option value="">Standaardbevinding invoegen…</option>${stdF.map((f, i) => `<option value="${i}">${h(f.title)}</option>`).join("")}</select>` : ""}<button class="btn primary sm" data-act="addF">+ Nieuwe bevinding</button></div></div>
    <div class="flist">${t.findings.length ? t.findings.map((f, fi) => findingCard(d, f, ti, fi, prots)).join("") : `<p class="muted" style="margin:0">Nog geen bevindingen. Zonder bevindingen vermeldt het rapport: “${h(S.settings.texts[d.lang].noFindings)}”</p>`}</div>
  </div>`;
}
function findingCard(d, f, ti, fi, prots) {
  const open = S.openF === f.id, p = `topics.${ti}.findings.${fi}`;
  return `<article class="finding ${f.rating} ${open ? "open" : ""}">
    <button class="f-head" data-act="toggleF" data-id="${f.id}" aria-expanded="${open}"><span class="pill r-${f.rating}">${{ rood: "Hoog", oranje: "Gemiddeld", groen: "Laag", info: "Info" }[f.rating]}</span><span class="ft" data-fhead="${f.id}">${h(f.title || "Naamloze bevinding")}</span><span class="small muted">${h(protLabel(f.protection))}</span><span class="chev">›</span></button>
    ${open ? `<div class="f-body">
      <div class="field"><label for="d-${p.replace(/\./g, "-")}-title">Titel</label>${inp("d", p + ".title", f.title, { live: "fhead" })}</div>
      <div class="field"><span class="lbl">Risicoclassificatie</span>${seg(p + ".rating", RATINGS.map(r => [r, RATING_NL[r]]), f.rating, "rating")}</div>
      <div class="field"><label for="d-${p.replace(/\./g, "-")}-facts">Bevinding (feiten)</label>${txt("d", p + ".facts", f.facts, { rows: 3 })}</div>
      <div class="field"><label for="d-${p.replace(/\./g, "-")}-risk">Risico</label>${txt("d", p + ".risk", f.risk, { rows: 3 })}</div>
      <div class="field"><label for="d-${p.replace(/\./g, "-")}-recommendation">Aanbeveling</label>${txt("d", p + ".recommendation", f.recommendation, { rows: 2 })}</div>
      <div class="form">
        <div class="field"><label for="d-${p.replace(/\./g, "-")}-protection">Maatregel</label><select id="d-${p.replace(/\./g, "-")}-protection" data-bind="d:${p}.protection" data-live="fhead">${prots.concat(PROTECTIONS.filter(x => x.k === f.protection && !prots.includes(x))).map(x => `<option value="${x.k}" ${f.protection === x.k ? "selected" : ""}>${x.nl}</option>`).join("")}</select></div>
        <div class="field"><label for="d-${p.replace(/\./g, "-")}-ref">Referentie dataroom</label>${inp("d", p + ".ref", f.ref || "", { ph: "Bijv. VDR 4.2.1" })}</div>
      </div>
      <div class="row" style="justify-content:space-between">
        <div class="row">${S.ai ? `<button class="btn sm" data-act="aiF" data-id="${f.id}" ${S.aiBusy ? "disabled" : ""}>${S.aiBusy === f.id ? "Claude formuleert…" : "✦ Formuleer " + (d.reportStyle === "bondig" ? "bondig" : "beschrijvend")}</button>` : ""}${S.undo[f.id] ? `<button class="btn ghost sm" data-act="undoF" data-id="${f.id}">Ongedaan maken</button>` : ""}</div>
        <div class="row"><button class="icon-btn" data-act="moveF" data-id="${f.id}" data-dir="-1" aria-label="Omhoog">↑</button><button class="icon-btn" data-act="moveF" data-id="${f.id}" data-dir="1" aria-label="Omlaag">↓</button>
          <button class="btn ghost sm" data-act="dupF" data-id="${f.id}">Dupliceren</button><button class="btn ghost sm" data-act="saveFLib" data-id="${f.id}">Naar bibliotheek</button>
          ${S.confirm === "delF:" + f.id ? `<button class="btn danger solid sm" data-act="delF" data-id="${f.id}">Bevestig</button><button class="btn sm" data-act="cancel">Annuleren</button>` : `<button class="btn ghost sm danger" data-act="ask" data-k="delF:${f.id}">Verwijderen</button>`}</div>
      </div></div>` : ""}
  </article>`;
}

function tabReport(d) {
  const B = buildReport(d);
  return `<div class="card"><div class="card-head"><h2>Rapportinstellingen</h2><div class="row"><button class="btn sm" data-act="copyReport">Kopieer tekst</button><button class="btn primary sm" data-act="exportReport">Exporteer Word (.docx)</button></div></div>
    <div class="form">
      <div class="field"><span class="lbl">Rapportvorm</span>${seg("reportStyle", [["bondig", "Bondig"], ["beschrijvend", "Beschrijvend"]], d.reportStyle)}</div>
      <div class="field"><span class="lbl">Taal</span>${seg("lang", [["nl", "Nederlands"], ["en", "Engels"]], d.lang)}</div>
      <div class="field full"><label for="d-summary">Samenvatting (management summary)</label>${txt("d", "summary", d.summary, { rows: 4, live: "report", ph: "Korte samenvatting boven de tabel met belangrijkste bevindingen. Lege regel = nieuwe alinea." })}
        <div class="row">${S.ai ? `<button class="btn sm" data-act="aiSummary" ${S.aiBusy ? "disabled" : ""}>${S.aiBusy === "summary" ? "Claude schrijft…" : "✦ Concept-samenvatting op basis van bevindingen"}</button>` : ""}${S.undo.summary !== undefined ? `<button class="btn ghost sm" data-act="undoSummary">Ongedaan maken</button>` : ""}</div></div>
    </div></div>
  <div class="paper-wrap"><article class="paper" id="paper">${blocksToHtml(B)}</article></div>`;
}

function viewLibrary() {
  if (S.libIdx >= S.library.length) S.libIdx = Math.max(0, S.library.length - 1);
  const t = S.library[S.libIdx], i = S.libIdx;
  return `<header class="page-head"><div><p class="eyebrow">Know-how en templates</p><h1>Bibliotheek<span class="arrow" aria-hidden="true">↘</span></h1></div>
    <div class="row">${S.confirm === "resetLib" ? `<span class="small muted">Alle eigen aanpassingen in de bibliotheek vervangen door de standaard?</span><button class="btn danger solid sm" data-act="resetLib">Herstellen</button><button class="btn sm" data-act="cancel">Annuleren</button>` : `<button class="btn sm" data-act="ask" data-k="resetLib">Standaard herstellen</button>`}<button class="btn primary" data-act="addLib">+ Onderwerp</button></div></header>
  <div class="notice">De bibliotheek bevat per onderwerp de standaardteksten, het informatieverzoek en standaardbevindingen. Nieuwe dossiers nemen de onderwerpen hieruit over. Vul hier jullie eigen know-how en templates aan; wijzigingen gelden voor het hele team.</div>
  <div class="split t">
    <div class="card" style="padding:12px"><div class="tlist">${S.library.map((l, k) => `<div class="titem ${k === i ? "on" : ""}" style="grid-template-columns:minmax(0,1fr) auto"><button class="tname" data-act="selLib" data-i="${k}">${h(l.title)}</button><span class="small muted">${(l.findings || []).length} std.</span></div>`).join("")}</div></div>
    ${t ? `<div style="display:flex;flex-direction:column;gap:14px;min-width:0"><div class="card"><div class="card-head"><div class="row"><button class="icon-btn" data-act="moveLib" data-dir="-1" aria-label="Omhoog">↑</button><button class="icon-btn" data-act="moveLib" data-dir="1" aria-label="Omlaag">↓</button></div>
      ${S.confirm === "delLib" ? `<div class="row"><button class="btn danger solid sm" data-act="delLib">Verwijderen</button><button class="btn sm" data-act="cancel">Annuleren</button></div>` : `<button class="btn sm danger" data-act="ask" data-k="delLib">Verwijderen</button>`}</div>
      <div class="form">
        <div class="field"><label for="l-${i}-title">Titel</label>${inp("l", `${i}.title`, t.title)}</div>
        <div class="field"><label for="l-${i}-baseHours">Basisuren</label>${inp("l", `${i}.baseHours`, t.baseHours, { type: "number" })}</div>
        <div class="field full">${chk("l", `${i}.assetOnly`, t.assetOnly, "Alleen bij activa/passiva-transactie")}</div>
        <div class="field full"><label for="l-${i}-introDesc">Inleidende tekst · beschrijvend rapport</label>${txt("l", `${i}.introDesc`, t.introDesc, { rows: 4 })}</div>
        <div class="field full"><label for="l-${i}-introConcise">Inleidende tekst · bondig rapport</label>${txt("l", `${i}.introConcise`, t.introConcise, { rows: 2 })}</div>
        <div class="field full"><label for="l-${i}-requests">Informatieverzoek (één document per regel)</label>${txt("l", `${i}.requests`, t.requests, { rows: 4, lines: true })}</div>
      </div></div>
      <div class="card"><div class="card-head"><h2>Standaardbevindingen</h2><button class="btn sm" data-act="addLibF">+ Standaardbevinding</button></div>
        <div class="flist">${(t.findings || []).map((f, fi) => `<div class="lib-find">
          <div class="row" style="justify-content:space-between"><span class="pill r-${f.rating}">${RATING_NL[f.rating]}</span>${S.confirm === "delLibF:" + fi ? `<div class="row"><button class="btn danger solid sm" data-act="delLibF" data-fi="${fi}">Bevestig</button><button class="btn sm" data-act="cancel">Annuleren</button></div>` : `<button class="btn ghost sm danger" data-act="ask" data-k="delLibF:${fi}">Verwijderen</button>`}</div>
          <div class="field"><label for="l-${i}-findings-${fi}-title">Titel</label>${inp("l", `${i}.findings.${fi}.title`, f.title)}</div>
          <div class="field"><span class="lbl">Classificatie</span><div class="seg rating">${RATINGS.map(r => `<button class="${f.rating === r ? "on " + r : r}" data-act="setLibRating" data-fi="${fi}" data-val="${r}">${RATING_NL[r]}</button>`).join("")}</div></div>
          <div class="field"><label for="l-${i}-findings-${fi}-facts">Bevinding</label>${txt("l", `${i}.findings.${fi}.facts`, f.facts, { rows: 2 })}</div>
          <div class="field"><label for="l-${i}-findings-${fi}-risk">Risico</label>${txt("l", `${i}.findings.${fi}.risk`, f.risk, { rows: 2 })}</div>
          <div class="field"><label for="l-${i}-findings-${fi}-recommendation">Aanbeveling</label>${txt("l", `${i}.findings.${fi}.recommendation`, f.recommendation, { rows: 2 })}</div>
          <div class="field"><label for="l-${i}-findings-${fi}-protection">Standaardmaatregel</label><select id="l-${i}-findings-${fi}-protection" data-bind="l:${i}.findings.${fi}.protection">${PROTECTIONS.map(x => `<option value="${x.k}" ${f.protection === x.k ? "selected" : ""}>${x.nl}</option>`).join("")}</select></div>
        </div>`).join("") || `<p class="muted" style="margin:0">Nog geen standaardbevindingen voor dit onderwerp.</p>`}</div></div></div>` : `<div class="card empty"><h3>Bibliotheek is leeg</h3></div>`}
  </div>`;
}

function viewSettings() {
  const st = S.settings, L = S.textLang, tx = st.texts[L];
  return `<header class="page-head"><div><p class="eyebrow">Voor het hele team</p><h1>Instellingen<span class="arrow" aria-hidden="true">↘</span></h1></div></header>
  <div class="split">
  <div style="display:flex;flex-direction:column;gap:18px;min-width:0">
  <div class="card"><div class="card-head"><h2>Huisstijl</h2></div><div class="form">
    <div class="field full"><label for="s-officeName">Kantoornaam</label>${inp("s", "officeName", st.officeName)}</div>
    <div class="field full"><span class="lbl">Logo</span><div class="logo-prev">${logoHtml()}</div>
      <div class="row"><label class="btn sm" for="logoFile">Logo uploaden</label><input type="file" id="logoFile" accept="image/png,image/jpeg,image/svg+xml,image/webp" hidden>${st.logo ? `<button class="btn ghost sm" data-act="rmLogo">Verwijderen</button>` : ""}</div>
      ${chk("s", "logoPlate", st.logoPlate, "Logo op witte achtergrond tonen (voor donkere logo's)", { live: "side" })}
      <span class="hint">Standaard staat het Workx-logo uit de pitch erin. Upload een PNG of SVG om het te vervangen; het logo verschijnt in de zijbalk, rapporten en offertes.</span></div>
    <div class="field"><label for="s-brand">Accentkleur</label><div class="row"><input type="color" class="swatch" id="s-brand-c" data-bind="s:brand" value="${h(st.brand)}" data-live="side">${inp("s", "brand", st.brand, { live: "side" })}</div></div>
    <div class="field"><label for="s-side">Kleur zijbalk</label><div class="row"><input type="color" class="swatch" id="s-side-c" data-bind="s:side" value="${h(st.side || "#e6e7de")}" data-live="side">${inp("s", "side", st.side, { live: "side", ph: "Standaard (warm grijs)" })}</div></div>
  </div></div>
  <div class="card"><div class="card-head"><h2>Tarieven en fee-model</h2></div><div class="form">
    <div class="field"><label for="s-rates-partner">Uurtarief partner (€)</label>${inp("s", "rates.partner", st.rates.partner, { type: "number" })}</div>
    <div class="field"><label for="s-mix-partner">Inzet partner (%)</label>${inp("s", "mix.partner", st.mix.partner, { type: "number" })}</div>
    <div class="field"><label for="s-rates-senior">Uurtarief senior advocaat (€)</label>${inp("s", "rates.senior", st.rates.senior, { type: "number" })}</div>
    <div class="field"><label for="s-mix-senior">Inzet senior (%)</label>${inp("s", "mix.senior", st.mix.senior, { type: "number" })}</div>
    <div class="field"><label for="s-rates-associate">Uurtarief advocaat (€)</label>${inp("s", "rates.associate", st.rates.associate, { type: "number" })}</div>
    <div class="field"><label for="s-mix-associate">Inzet advocaat (%)</label>${inp("s", "mix.associate", st.mix.associate, { type: "number" })}</div>
    <div class="field"><label for="s-factors-concise">Factor bondig rapport (%)</label>${inp("s", "factors.concise", st.factors.concise, { type: "number" })}</div>
    <div class="field"><label for="s-factors-descriptive">Factor beschrijvend rapport (%)</label>${inp("s", "factors.descriptive", st.factors.descriptive, { type: "number" })}</div>
    <div class="field"><label for="s-factors-english">Opslag Engels (%)</label>${inp("s", "factors.english", st.factors.english, { type: "number" })}</div>
    <div class="field"><label for="s-factors-urgent">Opslag spoed (%)</label>${inp("s", "factors.urgent", st.factors.urgent, { type: "number" })}</div>
    <div class="field"><label for="s-factors-pm">Projectmanagement (%)</label>${inp("s", "factors.pm", st.factors.pm, { type: "number" })}</div>
    <div class="field"><label for="s-factors-band">Bandbreedte raming (± %)</label>${inp("s", "factors.band", st.factors.band, { type: "number" })}</div>
    <div class="field"><label for="s-factors-entity">Opslag per extra entiteit (%)</label>${inp("s", "factors.entity", st.factors.entity, { type: "number" })}</div>
    <div class="field"><label for="s-rounding">Afronden op (€)</label>${inp("s", "rounding", st.rounding, { type: "number" })}</div>
    <div class="field full"><span class="lbl">Extra uren per complexiteitsfactor</span></div>
    <div class="field"><label for="s-addons-or">Ondernemingsraad</label>${inp("s", "addons.or", st.addons.or, { type: "number" })}</div>
    <div class="field"><label for="s-addons-caoMulti">Meerdere cao's</label>${inp("s", "addons.caoMulti", st.addons.caoMulti, { type: "number" })}</div>
    <div class="field"><label for="s-addons-pensionOwn">Eigen pensioenregeling</label>${inp("s", "addons.pensionOwn", st.addons.pensionOwn, { type: "number" })}</div>
    <div class="field"><label for="s-addons-mgmt">Per managementovereenkomst</label>${inp("s", "addons.mgmt", st.addons.mgmt, { type: "number" })}</div>
    <div class="field"><label for="s-addons-dispute">Per lopende procedure</label>${inp("s", "addons.dispute", st.addons.dispute, { type: "number" })}</div>
    <div class="field"><label for="s-addons-flex">Flexibele inhuur / zzp</label>${inp("s", "addons.flex", st.addons.flex, { type: "number" })}</div>
    <div class="field"><label for="s-addons-international">Internationale werknemers</label>${inp("s", "addons.international", st.addons.international, { type: "number" })}</div>
    <div class="field"><label for="s-addons-qa">Per Q&amp;A-ronde</label>${inp("s", "addons.qa", st.addons.qa, { type: "number" })}</div>
    <p class="hint full" style="margin:0">Omvangsfactor op basis van werknemers: t/m 25 = 0,5 · t/m 100 = 0,8 · t/m 250 = 1,0 · t/m 500 = 1,3 · t/m 1.000 = 1,6 · daarboven 2,0. Basisuren per onderwerp stel je in de bibliotheek in.</p>
  </div></div>
  <div class="card"><div class="card-head"><h2>Back-up en import</h2></div>
    <p class="hint" style="margin-top:0">Exporteer alle dossiers, de bibliotheek en de instellingen als JSON-bestand, of importeer een back-up (bijvoorbeeld uit de claude.ai-versie). Dossiers met hetzelfde id worden overschreven.</p>
    <div class="row"><button class="btn sm" data-act="exportBackup">Exporteer back-up</button><label class="btn sm" for="importFile">Importeer back-up</label><input type="file" id="importFile" accept="application/json,.json" hidden></div>
  </div>
  </div>
  <div class="card"><div class="card-head"><h2>Standaardteksten</h2>${`<div class="seg">${[["nl", "Nederlands"], ["en", "Engels"]].map(([k, l]) => `<button class="${L === k ? "on" : ""}" data-act="textLang" data-k="${k}">${l}</button>`).join("")}</div>`}</div>
    <p class="hint" style="margin-top:0">Variabelen: {client}, {target}, {kantoor}, {transactie}, {peildatum}, {project}, {werknemers}, {entiteiten}, {qa}. Lijsten: één punt per regel.</p>
    <div class="form">
      <div class="field full"><label for="s-texts-${L}-reportIntro">Rapport · inleiding</label>${txt("s", `texts.${L}.reportIntro`, tx.reportIntro, { rows: 5 })}</div>
      <div class="field full"><label for="s-texts-${L}-reportAssumptions">Rapport · uitgangspunten</label>${txt("s", `texts.${L}.reportAssumptions`, tx.reportAssumptions, { rows: 5 })}</div>
      <div class="field full"><label for="s-texts-${L}-noFindings">Rapport · geen bijzonderheden</label>${txt("s", `texts.${L}.noFindings`, tx.noFindings, { rows: 2 })}</div>
      <div class="field full"><label for="s-texts-${L}-reportDisclaimer">Rapport · disclaimer</label>${txt("s", `texts.${L}.reportDisclaimer`, tx.reportDisclaimer, { rows: 3 })}</div>
      <div class="field full"><label for="s-texts-${L}-quoteIntro">Offerte · inleiding</label>${txt("s", `texts.${L}.quoteIntro`, tx.quoteIntro, { rows: 4 })}</div>
      <div class="field full"><label for="s-texts-${L}-quoteAssumptions">Offerte · uitgangspunten</label>${txt("s", `texts.${L}.quoteAssumptions`, tx.quoteAssumptions, { rows: 4 })}</div>
      <div class="field full"><label for="s-texts-${L}-quoteExclusions">Offerte · niet inbegrepen</label>${txt("s", `texts.${L}.quoteExclusions`, tx.quoteExclusions, { rows: 4 })}</div>
      <div class="field full"><label for="s-texts-${L}-vat">Offerte · btw-regel</label>${inp("s", `texts.${L}.vat`, tx.vat)}</div>
    </div></div>
  </div>`;
}

/* ============ Interactie ============ */
function softRefresh(live, el) {
  const d = D();
  if (live === "head" && d) { const hd = $("#dHead"); if (hd) hd.textContent = d.name; }
  if (live === "quote" && d) { const r = $("#quoteResult"); if (r) r.innerHTML = quoteResult(d); const qt = $("#quoteText"); if (qt) qt.textContent = blocksToText(buildQuote(d).filter(b => b.type !== "logo")); }
  if (live === "topics" && d) { const tl = $("#topicList"); if (tl) tl.innerHTML = topicList(d); }
  if ((live === "fhead" || live === "all") && d) { render(); }
  if (live === "report" && d) { const p = $("#paper"); if (p) p.innerHTML = blocksToHtml(buildReport(d)); }
  if (live === "side") { renderSide(); const lp = $(".logo-prev"); if (lp) lp.innerHTML = logoHtml(); if (el && el.type === "color") { const t = $("#" + el.id.replace(/-c$/, "")); if (t) t.value = el.value; } else if (el) { const c = $("#" + el.id + "-c"); if (c && /^#[\da-f]{6}$/i.test(el.value)) c.value = el.value; } }
}
document.addEventListener("input", e => {
  const el = e.target.closest("[data-bind]"); if (!el) return;
  const [scope, path] = el.dataset.bind.split(/:(.*)/s);
  const root = scope === "d" ? D() : scope === "s" ? S.settings : S.library;
  if (!root) return;
  let v = el.type === "checkbox" ? el.checked : el.dataset.type === "num" ? (parseFloat(String(el.value).replace(",", ".")) || 0) : el.dataset.type === "lines" ? el.value.split("\n") : el.value;
  if (scope === "s" && (path === "brand" || path === "side") && !/^#[\da-f]{6}$/i.test(v)) return;
  setIn(root, path, v);
  touched(scope);
  if (el.dataset.live === "fhead") { const fh = el.closest(".finding"); if (fh && el.tagName === "INPUT") { const s = fh.querySelector(".ft"); if (s) s.textContent = v || "Naamloze bevinding"; } else render(); }
  else if (el.dataset.live) softRefresh(el.dataset.live, el);
  if (el.hasAttribute("data-rerender")) render();
});
document.addEventListener("focusout", () => setTimeout(() => { if (S.pendingRender && !editingFocus()) render(); }, 150));
document.addEventListener("change", e => {
  const el = e.target;
  if (el.id === "logoFile" && el.files[0]) return readLogo(el.files[0]);
  if (el.id === "importFile" && el.files[0]) return importBackup(el.files[0], el);
  const act = el.dataset.actChange; if (!act || !el.value) return;
  const d = D();
  if (act === "addTopic") {
    if (el.value === "__custom") d.topics.push({ id: uid(), key: "custom-" + uid(), title: "Nieuw onderwerp", include: true, baseHours: 3, intro: "", findings: [] });
    else { const l = libFor(el.value); if (l) d.topics.push(topicFromLib(l)); }
    S.topicIdx = d.topics.length - 1; touched("d"); render();
  }
  if (act === "addStdF") {
    const t = d.topics[S.topicIdx], l = libFor(t.key), f = l && l.findings[+el.value];
    if (f) { const nf = { id: uid(), ref: "", ...clone(f) }; if (!PROTECTIONS.find(p => p.k === nf.protection && p.roles.includes(d.role))) nf.protection = d.role === "verkoper" ? "herstel" : "qa"; t.findings.push(nf); S.openF = nf.id; touched("d"); render(); }
  }
});
function readLogo(file) {
  const fr = new FileReader();
  fr.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 600, sc = Math.min(1, max / img.width, 200 / img.height);
      const w = Math.max(1, Math.round(img.width * sc)), hh = Math.max(1, Math.round(img.height * sc));
      const c = document.createElement("canvas"); c.width = w; c.height = hh; c.getContext("2d").drawImage(img, 0, 0, w, hh);
      const url = c.toDataURL("image/png");
      if (url.length > 180000) { toast("Het logo is te groot. Gebruik een kleiner bestand."); return; }
      Object.assign(S.settings, { logo: url, logoW: w, logoH: hh }); touched("s"); render(); toast("Logo bijgewerkt");
    };
    img.onerror = () => toast("Dit bestand kon niet als afbeelding worden gelezen.");
    img.src = fr.result;
  };
  fr.readAsDataURL(file);
}
function findF(d, id) { for (let ti = 0; ti < d.topics.length; ti++) { const fi = d.topics[ti].findings.findIndex(f => f.id === id); if (fi >= 0) return { t: d.topics[ti], ti, fi, f: d.topics[ti].findings[fi] }; } return null; }
function move(arr, i, dir) { const j = i + dir; if (j < 0 || j >= arr.length) return i; [arr[i], arr[j]] = [arr[j], arr[i]]; return j; }

document.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.matches("tr[data-act]")) e.target.click(); });
document.addEventListener("click", async e => {
  const el = e.target.closest("[data-act]"); if (!el) return;
  const a = el.dataset.act, d = D();
  if (a !== "ask" && a !== "cancel" && !a.startsWith("del") && a !== "resetLib") S.confirm = null;
  switch (a) {
    case "go": S.confirm = null; go(el.dataset.to); break;
    case "filter": S.filter = el.dataset.k; render(); break;
    case "open": S.tab = "gegevens"; go("d-" + el.dataset.id); break;
    case "newDossier": { const nd = newDossier(); S.dossiers[nd.id] = nd; S.openId = nd.id; scheduleSave("dossiers/" + nd.id, () => S.dossiers[nd.id]); S.tab = "gegevens"; go("d-" + nd.id); setTimeout(() => { const n = $("#d-name"); if (n) { n.focus(); n.select(); } }, 30); break; }
    case "dupDossier": { const nd = clone(d); nd.id = "d" + uid(); nd.name = d.name + " (kopie)"; nd.isExample = false; nd.createdAt = nd.updatedAt = Date.now(); nd.topics.forEach(t => { t.id = uid(); t.findings.forEach(f => f.id = uid()); }); S.dossiers[nd.id] = nd; scheduleSave("dossiers/" + nd.id, () => S.dossiers[nd.id]); go("d-" + nd.id); toast("Dossier gedupliceerd"); break; }
    case "delDossier": { const id = d.id; delete S.dossiers[id]; S.confirm = null; await removeDoc("dossiers/" + id); go("dossiers"); toast("Dossier verwijderd"); break; }
    case "ask": S.confirm = el.dataset.k; render(); break;
    case "cancel": S.confirm = null; render(); break;
    case "tab": S.tab = el.dataset.k; S.confirm = null; render(); break;
    case "setD": {
      const path = el.dataset.path, v = el.dataset.val; setIn(d, path, v);
      if (path === "dealType" && v === "asset" && !d.topics.some(t => t.key === "ovo")) { const l = libFor("ovo"); if (l) { d.topics.push(topicFromLib(l)); toast("Onderwerp ‘" + l.title + "’ toegevoegd"); } }
      if (path === "dealType" && v === "share") { const t = d.topics.find(t => t.key === "ovo"); if (t && !t.findings.length) { t.include = false; } }
      touched("d"); render(); break;
    }
    case "selTopic": S.topicIdx = +el.dataset.i; S.openF = null; render(); break;
    case "moveTopic": S.topicIdx = move(d.topics, S.topicIdx, +el.dataset.dir); touched("d"); render(); break;
    case "delTopic": d.topics.splice(S.topicIdx, 1); S.topicIdx = Math.max(0, S.topicIdx - 1); S.confirm = null; touched("d"); render(); break;
    case "useIntro": { const t = d.topics[S.topicIdx], l = libFor(t.key); if (l) { t.intro = d.reportStyle === "bondig" ? l.introConcise : l.introDesc; touched("d"); render(); } break; }
    case "addF": { const t = d.topics[S.topicIdx]; const nf = { id: uid(), title: "", rating: "oranje", facts: "", risk: "", recommendation: "", protection: d.role === "verkoper" ? "herstel" : "garantie", ref: "" }; t.findings.push(nf); S.openF = nf.id; touched("d"); render(); setTimeout(() => { const i = document.querySelector(".finding.open input"); if (i) i.focus(); }, 30); break; }
    case "toggleF": S.openF = S.openF === el.dataset.id ? null : el.dataset.id; render(); break;
    case "moveF": { const r = findF(d, el.dataset.id); move(r.t.findings, r.fi, +el.dataset.dir); touched("d"); render(); break; }
    case "dupF": { const r = findF(d, el.dataset.id); const nf = { ...clone(r.f), id: uid(), title: r.f.title + " (kopie)" }; r.t.findings.splice(r.fi + 1, 0, nf); S.openF = nf.id; touched("d"); render(); break; }
    case "delF": { const r = findF(d, el.dataset.id); r.t.findings.splice(r.fi, 1); S.confirm = null; touched("d"); render(); break; }
    case "saveFLib": {
      const r = findF(d, el.dataset.id); let l = libFor(r.t.key);
      if (!l) { l = { key: r.t.key, title: r.t.title, baseHours: r.t.baseHours || 3, introDesc: r.t.intro || "", introConcise: "", requests: [], findings: [] }; S.library.push(l); }
      l.findings = l.findings || []; l.findings.push({ title: r.f.title, rating: r.f.rating, facts: r.f.facts, risk: r.f.risk, recommendation: r.f.recommendation, protection: r.f.protection });
      touched("l"); toast("Opgeslagen als standaardbevinding bij ‘" + l.title + "’"); render(); break;
    }
    case "aiF": aiFinding(el.dataset.id); break;
    case "undoF": { const r = findF(d, el.dataset.id); Object.assign(r.f, S.undo[r.f.id]); delete S.undo[r.f.id]; touched("d"); render(); break; }
    case "aiSummary": aiSummary(); break;
    case "undoSummary": d.summary = S.undo.summary; delete S.undo.summary; touched("d"); render(); break;
    case "copyQuote": copyText(blocksToText(buildQuote(d).filter(b => b.type !== "logo"))); break;
    case "exportQuote": exportDocx(buildQuote(d), `Offerte-DD-${safeName(d.name)}.docx`, LABELS[d.lang].quoteTitle, el); break;
    case "copyReport": copyText(blocksToText(buildReport(d).filter(b => b.type !== "logo"))); break;
    case "exportReport": exportDocx(buildReport(d), `DD-rapport-${safeName(d.name)}-${d.reportStyle}.docx`, LABELS[d.lang].reportTitle, el); break;
    case "exportRequests": exportDocx(buildRequests(d), `Informatieverzoek-${safeName(d.name)}.docx`, LABELS[d.lang].requestTitle, el); break;
    case "selLib": S.libIdx = +el.dataset.i; render(); break;
    case "moveLib": S.libIdx = move(S.library, S.libIdx, +el.dataset.dir); touched("l"); render(); break;
    case "addLib": S.library.push({ key: "t-" + uid(), title: "Nieuw onderwerp", baseHours: 3, introDesc: "", introConcise: "", requests: [], findings: [] }); S.libIdx = S.library.length - 1; touched("l"); render(); break;
    case "delLib": S.library.splice(S.libIdx, 1); S.confirm = null; touched("l"); render(); break;
    case "resetLib": S.library = clone(DEFAULT_LIBRARY); S.libIdx = 0; S.confirm = null; touched("l"); render(); toast("Standaardbibliotheek hersteld"); break;
    case "addLibF": { const l = S.library[S.libIdx]; (l.findings ||= []).push({ title: "Nieuwe standaardbevinding", rating: "oranje", facts: "", risk: "", recommendation: "", protection: "garantie" }); touched("l"); render(); break; }
    case "delLibF": S.library[S.libIdx].findings.splice(+el.dataset.fi, 1); S.confirm = null; touched("l"); render(); break;
    case "setLibRating": S.library[S.libIdx].findings[+el.dataset.fi].rating = el.dataset.val; touched("l"); render(); break;
    case "textLang": S.textLang = el.dataset.k; render(); break;
    case "exportBackup": saveFile(new Blob([JSON.stringify({ app: "workx-dd", version: 1, exportedAt: new Date().toISOString(), dossiers: Object.values(S.dossiers), settings: S.settings, library: S.library }, null, 2)], { type: "application/json" }), `workx-dd-backup-${new Date().toISOString().slice(0, 10)}.json`); toast("Back-up gedownload"); break;
    case "rmLogo": Object.assign(S.settings, { logo: "", logoW: 0, logoH: 0 }); touched("s"); render(); break;
  }
});
window.addEventListener("hashchange", () => { S.confirm = null; render(); });

/* ============ Claude-ondersteuning (via server) ============ */
function aiErr(e) {
  const c = e && e.code;
  if (c === "ai_disabled") { S.ai = null; return "Claude is niet ingesteld op de server."; }
  if (c === "rate_limited") return "Even te veel verzoeken. Probeer het over een minuut opnieuw.";
  if (c === "invalid_json" || c === "empty_completion") return "Claude gaf een onbruikbaar antwoord. Probeer het nog eens.";
  if (c === "refused") return "Claude heeft dit verzoek afgewezen. Pas de tekst handmatig aan.";
  return "Formuleren is niet gelukt. Probeer het opnieuw.";
}
async function aiFinding(id) {
  const d = D(), r = findF(d, id); if (!r || !S.ai) return;
  const f = r.f;
  S.aiBusy = id; render();
  try {
    const { data: out } = await api("POST", "/api/ai", { task: "finding", lang: d.lang, style: d.reportStyle, role: d.role, topic: r.t.title,
      finding: { title: f.title, rating: f.rating, facts: f.facts, risk: f.risk, recommendation: f.recommendation, protection: protLabel(f.protection, "nl") } });
    const cur = findF(D(), id); if (!cur || !out) return;
    S.undo[id] = { title: cur.f.title, facts: cur.f.facts, risk: cur.f.risk, recommendation: cur.f.recommendation };
    ["title", "facts", "risk", "recommendation"].forEach(k => { if (typeof out[k] === "string" && out[k].trim()) cur.f[k] = out[k].trim(); });
    touched("d"); toast("Bevinding herschreven. Controleer de tekst.");
  } catch (e) { if (e?.code !== "auth") toast(aiErr(e)); }
  finally { S.aiBusy = null; render(); }
}
async function aiSummary() {
  const d = D(); if (!S.ai) return;
  const fs = []; d.topics.filter(t => t.include).forEach(t => t.findings.forEach(f => fs.push({ topic: t.title, rating: f.rating, title: f.title, facts: f.facts, risk: f.risk, recommendation: f.recommendation })));
  if (!fs.length) { toast("Voeg eerst bevindingen toe."); return; }
  S.aiBusy = "summary"; render();
  try {
    const { text } = await api("POST", "/api/ai", { task: "summary", lang: d.lang, style: d.reportStyle, role: d.role, target: d.target, findings: fs });
    const cur = D(); if (!cur) return;
    S.undo.summary = cur.summary || ""; cur.summary = (text || "").trim(); touched("d"); toast("Concept-samenvatting toegevoegd. Controleer de tekst.");
  } catch (e) { if (e?.code !== "auth") toast(aiErr(e)); }
  finally { S.aiBusy = null; render(); }
}
async function importBackup(file, input) {
  try {
    const j = JSON.parse(await file.text());
    const list = Array.isArray(j.dossiers) ? j.dossiers : [];
    if (!list.length && !j.settings && !j.library) throw new Error("leeg");
    let n = 0;
    for (const d of list) {
      if (!d || typeof d !== "object" || !/^[A-Za-z0-9_-]{1,80}$/.test(d.id || "") || !Array.isArray(d.topics)) continue;
      await api("PUT", "/api/docs/dossiers/" + d.id, d); n++;
    }
    if (j.library && Array.isArray(j.library)) await api("PUT", "/api/docs/config/library", { topics: j.library });
    if (j.settings && typeof j.settings === "object") await api("PUT", "/api/docs/config/settings", j.settings);
    lastPull = ""; await pull();
    render(); toast(`${n} dossier(s) geïmporteerd`);
  } catch (e) { toast("Dit bestand kon niet worden geïmporteerd. Gebruik een back-up uit deze tool."); }
  finally { input.value = ""; }
}

/* ============ Start ============ */
applyBrand();
render();
initStore();

}
