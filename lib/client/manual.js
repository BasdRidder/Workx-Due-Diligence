/* Gegenereerd uit de Workx Due Diligence Handleiding (Word-versie, work in progress, november 2026).
 * Bevat per onderwerp: doel, scope, standaardvragen (masterlijst IRL/Q&A), voorbeeldtekst rapport en voorbeeldissues.
 * Aanpassingen voor het team gebeuren in de tool (Bibliotheek); dit bestand is het vertrekpunt. */
const MANUAL = {
 "version": 2,
 "source": "Workx Due Diligence Handleiding (work in progress, november 2026)",
 "intro": [
  "Stap 1: Bekijk bij de start van een due diligence eerst de scope. De scope staat bij het begin van het project apart (als memo) opgeslagen in het BN dossier.",
  "Stap 2: Indien de scope na een eerste blik op de documenten in de data room niet volledig en/of realistisch lijkt, neem contact op met het corporate kantoor voor het controleren van de scope (en eventueel aanpassen waarbij ook de fee quote zal worden aangepast).",
  "Stap 3: Daarna begin je altijd met kijken of een (ingevulde) IRL is geüpload in de data room. Indien dit niet het geval is, kan je deze opvragen bij het corporate kantoor. Op basis van een ingevulde IRL kan vaak al voor verschillende onderwerpen worden bepaald of er documenten beschikbaar zijn bij de target. Dit scheelt (onnodige) vragen stellen in de Q&A.",
  "Deze handleiding bevat de standaard volgorde van de issues in een due diligence rapport. Indien een issue belangrijk (‘red flag’) is, dan moet het issue eerder in het rapport worden opgenomen.",
  "Dit document bevat issues die wij vaak tegenkomen bij een due diligence. Indien er meer specifieke issues voorkomen in de transactie, dan kan je kijken in de verzameldocumenten van voorgaande rapporten voor inspiratie.",
  "Schrijf altijd duidelijk in de uren als werkzaamheden ‘out of scope’ zijn. In BN kan je een subdossier maken voor ‘out of scope’ werkzaamheden."
 ],
 "masterIntro": "Alle standaardvragen genummerd op één plek. Vaste termijnen: 5 jaar voor alles waar loonvorderingen of premies op terug kunnen gaan (cao, inlenersbeloning, premies, oproepkrachten, all-in loon, ongevallen), 3 jaar voor de rest. Nieuwe of aangepaste vragen zijn gemarkeerd; haal de markering weg bij vaststelling. Na vaststelling kunnen de vragen in de hoofdstukken worden vervangen door een verwijzing naar de nummers.",
 "topics": [
  {
   "key": "algemeen",
   "title": "Algemeen",
   "reportTitle": "General",
   "baseHours": 2,
   "doel": [
    "Overzicht aantal werknemers binnen de groep.",
    "Overzicht welke entiteiten werknemers in dienst hebben.",
    "Overzicht verhouding hoeveel werknemers overeenkomst voor bepaalde of onbepaalde tijd contract hebben.",
    "Opnemen overzicht van bevestigingen die zijn gegeven door management (bijv. geen reorganisaties in de afgelopen 5 jaar, geen cao van toepassing, geen arbeidsongevallen etc). Dit hoeft dan niet als apart issue te worden opgenomen in het rapport."
   ],
   "scope": [
    "HR policies (bijvoorbeeld lease car regeling, code of conduct etc.) zijn standaard out of scope. Personnel handbook is wel in scope."
   ],
   "notes": [
    "De organisatiestructuur (structure chart) staat in de data room vaak bij de corporate documenten; controleer dat voordat je hem opvraagt."
   ],
   "requests": [
    "Could you provide the structure chart?",
    "Could you provide the employee handbook or personnel regulations?",
    "Could you provide information on (a) pending and potential conflicts with employees (collectively or individually), (b) court judgments over the past three years, and (c) can you confirm that there are no outstanding or foreseen claims from employees?",
    "Can you confirm that all employees receive at least the statutory minimum wage per hour, including holiday allowance?",
    "Are any employees working outside the Netherlands or under a foreign employment agreement?",
    "Can you confirm that each Group Company complies with the applicable legislation (including legislation with regard to working conditions and working hours)?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "algemeen-s1",
     "kind": "std",
     "title": "General",
     "rating": "info",
     "facts": "We understand that the Companies employ [..] employees in the Netherlands. The Group employs […] employees on a fixed term contract and […] employees on an indefinite term contract.\nManagement confirmed the following in the Q&A and IRL:\n• [..]",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    }
   ]
  },
  {
   "key": "or",
   "title": "Ondernemingsraad",
   "reportTitle": "Works council",
   "baseHours": 3,
   "doel": [
    "Is er een verplichting een OR in te stellen? Zo ja maar niet ingesteld, waarom niet? Is er om gevraagd door werknemers?",
    "Is de voorgenomen transactie adviesplichtig? Overdracht van zeggenschap/deel van de onderneming. Let ook op wisseling bestuurders of aantrekken financiering/stellen zekerheden, daarvoor aparte adviesplicht.",
    "Is de OR al geïnformeerd, zo ja wat is de voorgestelde timing voor advies.",
    "Geen OR maar wel personele gevolgen voor minstens 25%, alsnog advies werknemers.",
    "Heeft koper ook OR? Daar mogelijk ook adviesrecht van toepassing."
   ],
   "scope": [
    "Begeleiding OR traject (bijvoorbeeld adviesprocedure over transactie) is standaard out of scope."
   ],
   "notes": [],
   "requests": [
    "Has the group established one or more works councils within its group?",
    "If no works council has been established: Can you confirm that to date no employees have requested the establishment of a works council or PVT?",
    "Could you provide: (a) the minutes of the consultation meetings for the last year; (b) outstanding and past requests for advice and consent for the last three years; and (c) the regulations of the works council(s)?",
    "Are there any pending or threatened proceedings with the works council (subdistrict court or Enterprise Chamber)?",
    "What is the current relationship with the works council or PVT?",
    "Has the works council been informed of the proposed transaction, and will it be requested to render advice on it?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "or-s1",
     "kind": "std",
     "title": "Right of advice",
     "rating": "oranje",
     "facts": "A works council is installed within […] (the Works Council). Management has confirmed that (i) the cooperation with the Works Council has been transparent, constructive and respectful and (ii) during the last three (3) years there have not been any conflicts with the Works Council.\nThe intended Transaction is subject to a right of advice of the Works Council. A works council’s advice should be requested in writing at such a time that it can have substantial influence on the decision to be taken regarding the intended Transaction.",
     "risk": "",
     "recommendation": "The Works Council’s advice related to the Intended Transaction must likely be obtained. Such should be arranged for prior to signing of the SPA.",
     "protection": "signing"
    },
    {
     "id": "or-i1",
     "kind": "issue",
     "title": "No Works Council (threshold met)",
     "rating": "oranje",
     "facts": "We understand that […] employs 50 or more employees in the Netherlands. Pursuant to the Dutch Works Council Act (Wet op de ondernemingsraden), a company has the obligation to establish a works council if such company employs 50 or more persons and qualifies as one “undertaking” within the meaning of the Works Council Act.\nA works council would (if established) need to be consulted about the intended Transaction and possibly also the financing of the intended Transaction.\nIn the Q&A it was confirmed that no works council has been installed at any of the Group Companies and that to date none of the employees has asked for a works council to be installed.",
     "risk": "",
     "recommendation": "We recommend considering the establishment of a works council after Completion.",
     "protection": "postclosing"
    },
    {
     "id": "or-i2",
     "kind": "issue",
     "title": "No Works Council (threshold not met)",
     "rating": "oranje",
     "facts": "The Group has no works council. Even though no Group Company individually employs 50 or more persons, we note that the Group employs 50 or more persons in total. Under the Dutch Works Council Act, the Group may be taken as a whole in this respect, pursuant to which there may be an obligation to establish a works council.",
     "risk": "",
     "recommendation": "We recommend for the Purchaser to monitor its obligations to install a works council under the Dutch Works Council Act post-Completion.",
     "protection": "geen"
    },
    {
     "id": "or-i3",
     "kind": "issue",
     "title": "Co-entrepreneurship",
     "rating": "oranje",
     "facts": "A works council is installed within […] (the Works Council). Management has confirmed that (i) the cooperation with the Works Council has been transparent, constructive and respectful and (ii) during the last three (3) years there have not been any conflicts with the Works Council.\nThe envisaged Transaction is likely subject to a right of advice from the Works Council given that […] must be considered co-entrepreneur (mede-ondernemer) of […]. As a result of their mutual interconnectedness, structural cooperation and mutual business policy. Such works council’s advice should be requested in writing at such a time that it can have substantial influence on the decision to be taken regarding the Intended Transaction.",
     "risk": "",
     "recommendation": "The Works Council’s advice related to the Intended Transaction must likely be obtained. Such should be arranged for prior to signing of the SPA.",
     "protection": "signing"
    },
    {
     "id": "or-i4",
     "kind": "issue",
     "title": "Alternative employee representative body",
     "rating": "info",
     "facts": "A personnel representative body (personeelsvertegenwoordiging, PVT) is established at the Company. The proposed transaction does not, in itself, require the PVT’s prior advice. However, the PVT must be given the opportunity to advise on any proposed decision that may lead to loss of employment, or to a material change in the work, terms of employment or working conditions, of at least one quarter of the employees.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "or-i5",
     "kind": "issue",
     "title": "Works council purchaser",
     "rating": "oranje",
     "facts": "If the Purchaser has a (central/joint) works council in place, that works council may have consultation rights on the Intended Transaction. The works council’s advice should be requested in writing at such a time that it can have substantial influence on the decision to be taken regarding the Transaction. Consultation with the works council may have an impact on the timing of the intended Transaction.",
     "risk": "",
     "recommendation": "As we understand the Purchaser has a works council installed, it will have a right of advice in relation to the intended Transaction and possibly the financing thereof. The works council must be able to render its advice prior to signing of the SPA.",
     "protection": "presigning"
    }
   ]
  },
  {
   "key": "ser",
   "title": "SER en vakbonden",
   "reportTitle": "SER Merger Code and trade unions",
   "baseHours": 1.5,
   "doel": [
    "Opvragen of er betrokken vakbonden zijn in verband met mogelijke melding op basis van SER Fusiegedragsregels. Bij cao van toepassing kwalificeren de vakbonden als betrokken vakbonden onder de SER Fusiegedragsregels (artikel 1 (f)).",
    "Controleer eventuele aanvullende regels of meldingsverplichtingen op basis van cao.",
    "Als er minder dan 50 werknemers in NL bij de target werkzaam zijn: check aantal werknemers groep koper of groep verkoper bij corporate kantoor waar we mee werken.",
    "Controleer of uitzondering op meldingsverplichting van toepassing is (bijvoorbeeld grote internationale transacties)."
   ],
   "scope": [
    "Opstellen of controleren brieven voor vakbonden of de SER is standaard out of scope."
   ],
   "notes": [],
   "requests": [
    "Are there any trade unions involved within the group? If so, which trade unions?"
   ],
   "requestNotes": [
    "Vraag 15: vraag naar werkgeversvereniging: zie cao"
   ],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "ser-s1",
     "kind": "std",
     "title": "Notification",
     "rating": "oranje",
     "facts": "Under the SER Merger Code 2015 (SER Fusiegedragsregels 2015), if a party involved in a transaction is based in the Netherlands and it employs (alone or together with any of its group companies) 50 or more employees, the parties involved in the transaction will have to notify the Social and Economic Council (Sociaal Economische Raad) and the involved trade unions and consult with the involved trade unions in relation to the transaction prior to reaching an agreement.\nThe Group employs 50 or more employees in the Netherlands. We understand that there are no involved trade unions within the Group.",
     "risk": "",
     "recommendation": "A notification must be done to the SER prior to reaching an agreement on the intended Transaction. To be determined whether there are any involved trade unions at the Purchaser or Seller.",
     "protection": "geen"
    },
    {
     "id": "ser-i1",
     "kind": "issue",
     "title": "No notification",
     "rating": "info",
     "facts": "Under the SER Merger Code 2015 (SER Fusiegedragsregels 2015), if a party involved in a transaction is based in the Netherlands and it employs (alone or together with any of its group companies) 50 or more employees, the parties involved in the transaction will have to notify the Social and Economic Council (Sociaal Economische Raad) and the involved trade unions and consult with the involved trade unions in relation to the transaction prior to reaching an agreement. The Group employs fewer than 50 employees.\nWe understand that the Purchaser’s group and Seller’s group have no employees in the Netherlands. Hence, the SER Merger Code would not apply.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    }
   ]
  },
  {
   "key": "arbeidsovereenkomsten",
   "title": "Arbeidsovereenkomsten en arbeidsvoorwaarden",
   "reportTitle": "Employment agreements and terms of employment",
   "baseHours": 6,
   "doel": [
    "Inzicht aantal werknemers/omvang bedrijf",
    "Inzicht overeenkomsten bepaalde tijd/onbepaalde tijd",
    "Waar zijn de werknemers in dienst (bij de target en welke groepsvennootschappen). Eventueel contractovername bij secondment.",
    "Zijn de templates in lijn met Nederlands recht (bijvoorbeeld wet transparante en voorspelbare arbeidsvoorwaarden en WAB)?",
    "Beschermende bepalingen (non-compete, non-solicitation, relationship clause, confidentiality clause, IP clause, ancillary activities clause en penalty clause) in kaart brengen.",
    "Handboek: check de in scope bepalingen op rechtsgeldigheid, regelingen hoeven niet beschreven te worden. Alleen punten van non-compliance moeten worden opgenomen (bijv. studiekostenbeding zonder afbouwregeling, ongeldige opzegtermijn etc.) Out of scope zijn niet-materiële regelingen zoals leasecar regeling en code of conduct etc."
   ],
   "scope": [
    "Bekijk 1 set standaardarbeidsovereenkomst in scope (bepaalde en onbepaalde tijd). Bij meer templates (bijvoorbeeld meerdere entiteiten met standaardarbeidsovereenkomsten), afstemmen met corporate kantoor."
   ],
   "notes": [],
   "requests": [
    "Could you provide an overview of all employees, including: (i) date of commencement of employment; (ii) date of birth; (iii) position; (iv) FTE percentage; (v) gross annual salary and CLA scale (if applicable); (vi) work location; (vii) type of contract (fixed or indefinite period); and (viii) termination date for fixed-period agreements?",
    "Which entities employ the employees, and can you confirm that no employees are employed by other group companies?",
    "Could you provide the standard employment agreement templates for indefinite and fixed-period contracts?",
    "Can you confirm that all employees are employed on the basis of (i) a duly signed employment agreement and (ii) the written template agreements included in the data room, and could you provide an overview of any deviations from these templates?",
    "What existing arrangements with, or promises to, employees relating to promotions, salary increases, retention or other matters are in place?",
    "Are all employment agreements for an indefinite term duly signed by both parties and, if not, can you confirm that the correct (higher) social security premiums are paid in respect of such employment relationships?",
    "Can you confirm that all employment terms and conditions due to employees have been duly paid and/or are adequately provided for in the accounts?",
    "Do employees structurally work overtime and, if so, how is overtime compensated?",
    "Are there any automatic salary indexation arrangements?",
    "Do any employees of the Group require a work permit? If so, please provide details, including the type of permit and its expiry date."
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "arbeidsovereenkomsten-s1",
     "kind": "std",
     "title": "Template employment agreements",
     "rating": "oranje",
     "facts": "The Data Room contains template employment agreements for (i) an indefinite term and (ii) for a fixed term. The templates are governed by Dutch law.\n[Include description of template agreement, including notice period and restrictive covenants].\nAn employee handbook is applicable to the employees. The employee handbook contains additional employment conditions, such as clauses on […]. The handbook is materially in line with Dutch law.",
     "risk": "",
     "recommendation": "",
     "protection": "geen"
    },
    {
     "id": "arbeidsovereenkomsten-i1",
     "kind": "issue",
     "title": "Ancillary activities",
     "rating": "oranje",
     "facts": "The template employment agreements contain an ancillary activities clause. Since 1 August 2022, ancillary activities are in principle permitted. The ancillary activities clauses are not enforceable in all circumstances. Only if the company has an objective justification to withhold permission, the employee may not perform ancillary activities.",
     "risk": "",
     "recommendation": "We recommend for the template employment agreements to be updated post-Completion, in line with the clean-ups included in this paragraph.",
     "protection": "geen",
     "group": "Restrictive covenants"
    },
    {
     "id": "arbeidsovereenkomsten-i2",
     "kind": "issue",
     "title": "No motivation fixed term",
     "rating": "oranje",
     "facts": "The template employment agreements contain a business relations clause. In the employment agreement of [..] no motivation is included. In the agreements for [..] a short generic motivation is included.\nA business relations clause in an employment agreement for a fixed term is only valid if a motivation why such clause is deemed necessary for a specific employee is included. As such, the business relations clause in the employment agreement of [..] is not valid. Further, the substantiation in the business relations clause in the employment agreements of [..] may not be sufficient and as such the clauses may not be enforceable should the employee initiate legal proceedings.",
     "risk": "",
     "recommendation": "We recommend that new employment agreements be entered into with (key) employees in order to ensure that enforceable restrictive covenants are in place. Please note that this requires consent from the employees.",
     "protection": "geen",
     "group": "Restrictive covenants"
    },
    {
     "id": "arbeidsovereenkomsten-i3",
     "kind": "issue",
     "title": "Addendum",
     "rating": "oranje",
     "facts": "We have been informed via the Data Room that an addendum is used to convert the employment agreement for a fixed term into an employment agreement to an indefinite term. Please note that this addendum does not convert the invalid non-compete clause into a valid non-compete clause.\nAs a result thereof, the non-compete clauses included in employment agreements for a fixed term entered into with employees who are now employed for an indefinite term via an addendum, are not valid.",
     "risk": "",
     "recommendation": "We recommend that new employment agreements be entered into with (key) employees in order to ensure that enforceable restrictive covenants are in place. Please note that this requires consent from the employees.",
     "protection": "geen",
     "group": "Restrictive covenants"
    },
    {
     "id": "arbeidsovereenkomsten-i4",
     "kind": "issue",
     "title": "Notice period",
     "rating": "oranje",
     "facts": "The template employment agreement of [..] contains a mutual notice period of two or three months respectively. This conflicts with the statutory notice period (which is one month for the employee, and one to four months for the employer depending on the employee’s service years).\nIf parties wish to deviate from the statutory notice period, the notice period for the employer should be at least twice as long as the notice period for the employee. As a result, the employee can invoke the statutory notice period.",
     "risk": "",
     "recommendation": "We recommend for the template employment agreements to be updated post-Completion, in line with the clean-ups included in this paragraph.",
     "protection": "geen",
     "group": "Other"
    },
    {
     "id": "arbeidsovereenkomsten-i5",
     "kind": "issue",
     "title": "Probation period",
     "rating": "oranje",
     "facts": "The template agreements contain a 1-month probation period. Under Dutch law, no probation period may be agreed in a fixed term contract of six months or less. For longer fixed term contracts the maximum is one month, and for indefinite term contracts two months.\nThe template for [..] has a term of [..]. As a result, the probation period is [not] valid.",
     "risk": "",
     "recommendation": "[For information purposes][We recommend for the template employment agreements to be updated post-Completion, in line with the clean-ups included in this paragraph.]",
     "protection": "geen",
     "group": "Other"
    },
    {
     "id": "arbeidsovereenkomsten-i6",
     "kind": "issue",
     "title": "Holidays",
     "rating": "oranje",
     "facts": "It is included in the template agreements that XX holidays may transfer to the following year. Under Dutch law, the statutory holidays (20 days on a full-time basis) lapses on 30 June of the following year. Any additional leave days (five days in this case) lapse after a period of five years.\nAs such, the provision included in the template agreements is not in line with Dutch law. [Alleen opnemen als het beding de wettelijke vervaltermijn verkort; een langere vervaltermijn mag schriftelijk worden afgesproken (art. 7:640a BW).]",
     "risk": "",
     "recommendation": "We recommend for the template employment agreements to be updated post-Completion, in line with the clean-ups included in this paragraph.",
     "protection": "geen",
     "group": "Other"
    },
    {
     "id": "arbeidsovereenkomsten-i7",
     "kind": "issue",
     "title": "No interim termination (fixed term)",
     "rating": "oranje",
     "facts": "Please note that no (interim) termination clause is included in the template employment agreement, as a result of which employment agreements for a fixed term cannot be terminated premature.",
     "risk": "",
     "recommendation": "We recommend updating the fixed term employment agreement",
     "protection": "geen",
     "group": "Other"
    },
    {
     "id": "arbeidsovereenkomsten-i8",
     "kind": "issue",
     "title": "No written agreements",
     "rating": "oranje",
     "facts": "Management further informed us that there is no documentation in relation to extension of the employment agreements, but that this is confirmed verbally to the employee.\nIf the written employment agreements for an indefinite term are absent, a higher unemployment social premium is due. It is therefore recommended to provide for written documentation as soon as possible.",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA for all claims relating to incorrect social premiums for unemployment benefits related to the absence of written employment agreements for an indefinite period of time.\nAdditionally, we recommend confirming any extension of an employment agreement in writing to the employee(s) (including the duration of the extension) as soon as possible.",
     "protection": "vrijwaring",
     "group": "Other"
    }
   ]
  },
  {
   "key": "management",
   "title": "Key werknemers en managementovereenkomsten",
   "reportTitle": "Key employees and management agreements",
   "baseHours": 4,
   "doel": [
    "Controleer omvang management en wie de key werknemers zijn binnen de groep",
    "Check beschermende bepalingen tegen concurrentie, inzicht arbeidsvoorwaarden (bonus/participatie/lange opzegtermijn)",
    "Controleer wie er statutair bestuurder en aandeelhouder is",
    "In geval van management agreements: check het herkwalificatierisico. Kijk ook of manager aandelen houdt (ook na de transactie), hetgeen herkwalificatie risico kan afzwakken."
   ],
   "scope": [
    "Bekijk contract van maximaal 5 key werknemers of managers. Indien er meer contracten zijn in de data room, afstemmen met het corporate kantoor (bijvoorbeeld vragen aan target welke 5 contracten het belangrijkst zijn)."
   ],
   "notes": [
    "Zie ook de voorbeeldissues bij arbeidsovereenkomsten en arbeidsvoorwaarden."
   ],
   "requests": [
    "Could you provide all management and/or employment contracts with managing directors and other key employees, together with the most recent fee/salary details?",
    "Do any agreements contain change of control provisions, severance arrangements exceeding the statutory transition payment or notice periods longer than the statutory periods?",
    "Could you provide all documents relating to retention arrangements in connection with the proposed transaction (if any), or any other retention arrangements?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "management-s1",
     "kind": "std",
     "title": "Key employees",
     "rating": "oranje",
     "facts": "We understand that the Group has […] key employees: […].\n[Include description of the restrictive clauses, a longer notice period if any, entitlement to additional bonus or incentive program and any non-compliant terms in the management or employment agreements. If the agreements are based on the template agreements, reference can be made to the template agreements]",
     "risk": "",
     "recommendation": "",
     "protection": "geen"
    },
    {
     "id": "management-i1",
     "kind": "issue",
     "title": "Requalification",
     "rating": "oranje",
     "facts": "Mr. X has entered into an agreement with [..] with [his/her] personal holding company (the Management Agreement). This agreements contains the following provisions: […]. The template agreement [does not include][includes] a (tax) indemnity in favour of [..] in case of a requalification of the agreement as an employment agreement.\nWe understand that Mr. X was employed by the Group before entering into the Management Agreement. We understand that it is intended that Mr. X will no longer be a shareholder after the intended Transaction. As such, there is a risk that the Management Agreement qualifies as an employment agreement (civil law related) and/or employment relationship (tax related) and that as a result the Dutch protective employment laws apply and/or wage taxes and social security contributions are due by the Company.",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA for all claims relating to the requalification of the Management Agreement as employment agreement (from both tax and civil perspective).\nCompletion action\nAs the Management Agreement is entered into with the Seller, such agreement must be transferred or terminated due to the Envisaged Transaction.\nIf it is intended that Mr. X will continue to perform services after Completion, we recommend to consider to enter into employment agreements in view of the requalification risk.",
     "protection": "vrijwaring"
    }
   ]
  },
  {
   "key": "bonus",
   "title": "Bonusregeling",
   "reportTitle": "Bonus and incentive schemes",
   "baseHours": 3,
   "doel": [
    "Korte beschrijving bonusregeling binnen de groep en inzicht in financiële verplichtingen (en evt. compliance)",
    "Inzicht in eventuele transactiegerelateerde bonus",
    "Controleer of er equity-incentive regelingen zijn binnen de groep",
    "Controleer op welk niveau de bonusregeling is afgesproken (i.e. binnen target). Indien niet binnen target, controleer hoe de regeling wordt afgewikkeld en of er een nieuwe mogelijkheid komt voor participatie na de transactie."
   ],
   "scope": [],
   "notes": [],
   "requests": [
    "Could you provide an overview of bonuses paid out over the past three years?",
    "Which bonuses relating to the current financial year have accrued or will become payable before or upon Completion?",
    "Have any individual (transaction) bonus arrangements been made with employees and, if so, could you share the relevant documentation?",
    "Is there any option, SAR or other (equity) incentive scheme under which employees can become entitled to benefits and, if so, could you provide an overview of the eligible employees and relevant documentation?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "bonus-s1",
     "kind": "std",
     "title": "General",
     "rating": "oranje",
     "facts": "The employees of […] can receive a bonus at the discretion of the managing directors. This amount equals to […].\nIt follows from the personnel handbook that the employees of [..] are entitled to a thirteenth month gross payment in December.\nIt follows from a bonus overview in the Data Room, that the bonuses paid out in the last three years range from [EUR X to EUR X gross per employee year]. [include total amount of bonuses paid per year for the last three years]",
     "risk": "",
     "recommendation": "We recommend to consider the financial obligations of the bonuses in relation to valuation of the Group.",
     "protection": "valuation"
    },
    {
     "id": "bonus-i1",
     "kind": "issue",
     "title": "No written bonus agreement",
     "rating": "oranje",
     "facts": "In the last three years, the Group has granted every employee an annual Christmas bonus. Management confirmed that there are no written agreements in relation to this bonus. As the bonuses have been awarded for three consecutive years, the bonuses could be interpreted as an acquired right.\nFurther, we understand that XXemployees have received a discretionary bonus in [year], in the amount of EUR [..] and EUR [..] respectively, due to exceptional results in that year.",
     "risk": "",
     "recommendation": "We recommend including appropriate warranties in the SPA regarding bonus payments (including that there are no written bonus arrangements).\nWe further recommend implementing a written bonus plan that explicitly outlines the bonus conditions and the discretion of the employer post-Completion.",
     "protection": "garantie"
    },
    {
     "id": "bonus-i2",
     "kind": "issue",
     "title": "STIP",
     "rating": "info",
     "facts": "The Group applies a short term incentive plan (STIP). Management confirmed that all employees are eligible for the STIP. Most employees can receive a bonus up to [..]% of their annual salary. Payment of the bonus is dependent on […]. The total bonus paid out in the last three years was […].",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "bonus-i3",
     "kind": "issue",
     "title": "Transaction bonus",
     "rating": "oranje",
     "facts": "[…] has entered into a transaction bonus agreement with two employees. Pursuant to the agreement, the employees are entitled to a bonus in case of a sale of the company. The bonus amount is linked to the enterprise value at the time of the exit. The amount varies between one monthly salary and EUR […] gross, depending on the value of the shares of the Group. The arrangement is subject to several conditions, such as that the employees must be employed at the closing of the transaction and the exit must take place before [date].",
     "risk": "",
     "recommendation": "The transaction bonuses to be further assessed in the context of the financial due diligence workstream and to be taken into account when valuing the Group.\nThe SPA should in any event provide that there are no costs for the Purchaser regarding the transaction bonuses and that the Seller will indemnify the Purchaser for all costs related to the transaction bonuses (including but not limited to income taxes/premiums).",
     "protection": "geen"
    },
    {
     "id": "bonus-i4",
     "kind": "issue",
     "title": "SAR plan",
     "rating": "oranje",
     "facts": "We have been provided with a SAR Plan for [..]. Pursuant to the SAR Plan selected managers receive a cash payment upon an exit based on the value increase of the Company. As set out in the plan, each designated manager receives one SAR. A SAR pays out only if, at exit, the manager is still employed and the money multiple exceeds […]. The payout consists of a fixed amount of EUR […] plus a variable component (which correlates with the money multiple).\nWe have been informed via the Q&A that the settlement of the SAR Plan will be included in the leakage overview of the envisaged Transaction and that it is the intention to discuss timing of the payment of the SAR plan between parties.",
     "risk": "",
     "recommendation": "We recommend for the settlement of the SAR Plan to be discussed between parties and to be included in the leakage overview.\nThe SPA should in any event provide that there are no costs for the Purchaser regarding the settlement of the SAR Plan and that the Seller will indemnify the Purchaser for all costs related to the SAR Plan (including but not limited to income taxes/premiums).",
     "protection": "geen"
    }
   ]
  },
  {
   "key": "uitzend",
   "title": "Uitzendkrachten",
   "reportTitle": "Temporary agency workers",
   "baseHours": 3,
   "doel": [
    "Inzicht flexibele schil (hoeveel werknemers, welke bureaus etc).",
    "ABU/NBBU cao van toepassing?",
    "Check of inlenersbeloning WAADI voor 1 januari 2026 werd toegepast en check of gelijkwaardige beloning per 1 januari 2026 wordt toegepast.",
    "Certificeringscheck: er is vaak een verplichting obv de cao om met gecertificeerde uitzendbureaus te werken.",
    "Let op: Als de target zelf werknemers uitleent/uitzendt/detacheert ->gebruik aanvullende IRL & Q&A. Neem rapporten van project Crest en project Evolve als voorbeeld en check bij Juliette en Julia.."
   ],
   "scope": [
    "Bekijk maximaal 5 contracten met uitzendbureaus. Indien er meer contracten zijn in de data room, afstemmen met het corporate team."
   ],
   "notes": [],
   "requests": [
    "Could you provide an overview of all temporary workers hired by the group?",
    "Could you provide all agreements with third-party employment agencies, such as temporary staffing agencies (uitzendbureau) or secondment agencies?",
    "Can you confirm that the company has fulfilled its obligations towards temporary staffing agencies with respect to the user company remuneration (inlenersbeloning) and equal pay (gelijkwaardige beloning) over the past five years?",
    "Are the temporary working agencies (uitzendbureaus) approved by the Labour Standards Foundation (Stichting Normering Arbeid)?",
    "Does the Company make use of a blocked account (g-rekening) or otherwise limit its hirer’s liability?",
    "Have the agencies used by the Company applied for admission under the Act on the Admission of Placement of Workers (WTTA)?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "uitzend-s1",
     "kind": "std",
     "title": "Staffing agencies",
     "rating": "info",
     "facts": "The Group engages several employees from a staffing agency. When temporary agency workers are hired from temporary employment agencies, the Dutch Sequential Liability Act (Wet Ketenaansprakelijkheid) provides that the hirer of the temporary agency workers can be held liable for any wage taxes should the temporary agency not meet its fiscal obligations toward the Dutch tax authorities. These liability risks for the hirer of the temporary agency workers can be limited by making payments on a blocked-account (\"g-rekening\"). These payments are exclusively intended for wage taxes and other mandatory contributions. [We understand that a portion of the payments to the temporary employment agencies is made directly to the Company's blocked account.]\nFurthermore, temporary employment agencies must be registered as such in the Dutch Trade Register (Waadi registration). The WAADI protects temporary agency workers against underpayment. According to the information publicly available in the Dutch Chamber of Commerce, [..] is registered as a temporary employment agency.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "uitzend-i1",
     "kind": "issue",
     "title": "Hirer’s remuneration",
     "rating": "oranje",
     "facts": "The Waadi applies when a company makes temporary workers available to another company to work under its supervision and direction, in exchange for compensation. The Waadi stipulates, amongst other things, that temporary workers are entitled to the same terms and conditions as employees directly employed by the customer. This may be deviated from in a CLA, which has been done in the ABU CLA. Until 1 January 2026, temporary workers were entitled to the hirer’s remuneration. The scope of the hirer’s remuneration included ten wage elements, which was generally less than what the customer’s direct employees were entitled to.\nAlthough this is generally customary in the industry, the general terms and conditions do not contain an indemnity in respect of the Labour Allocation by Intermediaries Act (Waadi) for the benefit of the Group. As a result, any error relating to the hirer’s remuneration (inlenersbeloning) (previously) and now the equivalent remuneration (gelijkwaardige beloning) cannot be recovered from the customer and is for the account of the Group, even if the customer provided incorrect or insufficient information.",
     "risk": "",
     "recommendation": "Include a warranty in the SPA confirming (i) compliance with all applicable (labour) laws regarding temporary workers, including the Waadi (ii) and that each subsidiary has correctly determined and paid the hirer’s remuneration and equal remuneration to all temporary workers employed in the past five years.",
     "protection": "garantie"
    },
    {
     "id": "uitzend-i2",
     "kind": "issue",
     "title": "Employment agreements agency clause",
     "rating": "oranje",
     "facts": "Phase A employment agreement with an agency clause (uitzendbeding)\nThis is a fixed-term employment agreement entered into for four weeks and automatically renewed every four weeks. Phase A has a maximum duration of 52 weeks, during which an unlimited number of contracts may be concluded. The employment agreement ends automatically when the customer ends the assignment. The temporary worker does not have fixed weekly working hours. In case of illness, a one-day waiting period applies, after which the Group pays 90% of the hourly wage until the end of the employment agreement.\nPhase B\nThis is a fixed-term employment agreement and applies for a maximum of six contracts over a maximum of three years. The temporary worker has a fixed number of hours.\nPhase C\nThis is an indefinite-term employment agreement.",
     "risk": "",
     "recommendation": "",
     "protection": "geen"
    },
    {
     "id": "uitzend-i3",
     "kind": "issue",
     "title": "NEN 4400-1",
     "rating": "oranje",
     "facts": "The NEN 4400-1 standard sets out requirements for assessing and evaluating companies established in the Netherlands that supply labour, as well as (sub)contractors, to establish that these entities meet obligations arising from employment. The SNA quality mark, awarded by the Stichting Normering Arbeid (Foundation for the Standardisation of Labour), demonstrates compliance with the NEN 4400 standard. This includes the correct declaration and remittance of payroll tax, VAT and social security contributions, the performance of identity checks and checks on the right to work in the Netherlands, and correct wage payment in accordance with the Minimum Wage and Minimum Holiday Allowance Act. An independent inspection body audits the personnel, payroll and financial administration, CLA compliance and specific situations (such as on-lending and the engagement of self-employed contractors) every six months.",
     "risk": "",
     "recommendation": "",
     "protection": "geen"
    }
   ]
  },
  {
   "key": "zzp",
   "title": "Zzp'ers en contractors",
   "reportTitle": "Self-employed contractors",
   "baseHours": 3,
   "doel": [
    "Herkwalificatie: Hoe wordt in de praktijk uitvoering gegeven aan de overeenkomst van opdracht? Staat er een vrijwaring in de overeenkomst van opdracht met betrekking herkwalificatie?",
    "Secondment: check waar werknemers dedicated werken (percentage van uren waar werkzaam) en op welke contractuele basis. Mogelijk er is overgang van onderneming van toepassing."
   ],
   "scope": [
    "Check hoeveel contracten door ons bekeken worden, Uitgangspunt is dat we maximaal 5 contracten bekijken met zzp’ers of andere flexibele werknemers. Indien er meer contracten zijn in de data room en de scope niet helder, afstemmen met het corporate kantoor."
   ],
   "notes": [],
   "requests": [
    "Does the Company engage self-employed personnel? If so, could you provide an overview of the independent contractors currently engaged.",
    "Could you provide the agreements with self-employed personnel (for example management agreements and consultancy agreements)?",
    "[If the target engages self-employed contractors (zzp'ers)]: Please clarify the following: (i) Do these contractors also work for other clients, or exclusively for the company? (ii) Do the contractors work under the direction and supervision of the company, or do they perform their work fully independently? (iii) Do the contractors work full-time for the company? (iv) When did the contractors' engagements commence, for what term and how often was the engagement renewed?",
    "Has the Company received any questions, audits or decisions from the Dutch Tax Authorities regarding the qualification of contractors?",
    "Could you provide an overview of (a) employees seconded by the company to third parties (or group companies) and (b) persons seconded to the company by third parties (or group companies), together with the relevant agreements? (verplaatsen naar uitzending en detachering)"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "zzp-s1",
     "kind": "std",
     "title": "Requalification",
     "rating": "oranje",
     "facts": "We understand that the Group Companies engage approximately […] contractors.\nThe template agreements contains the following provisions: […]. The template agreement [does not include][includes] a (tax) indemnity in favour of [..] in case of a requalification of the agreement as an employment agreement.\n[Describe circumstances (e.g. term of engagement, fulltime or partime basis, type of activities and whether contractors have other clients].\nDepending on how the services have been performed in practice, the agreements with the contractors may qualify as an employment relationship and/or employment agreement (for tax and civil law purposes). This could lead to Dutch employment laws being applicable and/or wage taxes and social security contributions being due.\nBased on the aforementioned circumstances, there is a risk of requalification of the agreements. However, the assessment of whether the agreements will be qualified as an employment relationship and/or employment agreement depends on the actual performance of the services by the contractors. [As such, we cannot fully assess this risk based on the reviewed documents.] of [Given the fact that [beschrijf beperkende of juist verhogende factoren voor herkwalificatie], we deem the risk of requalification of the service/consultancy/management agreement [low/high]",
     "risk": "",
     "recommendation": "We recommend to include an indemnity in the SPA for all claims relating to the requalification of the agreements with contractors as employment agreements (from both tax and civil perspective), as well as an indemnity for all (income) tax and social premiums resulting from the agreements in the period up to Completion.\nCompletion action\nIf it is intended that the self-employed workers will continue to perform services after Completion, we recommend assessing the risk of requalification and considering to enter into employment agreements depending on this outcome.",
     "protection": "vrijwaring"
    },
    {
     "id": "zzp-i1",
     "kind": "issue",
     "title": "Equal Pay",
     "rating": "oranje",
     "facts": "If contractors are engaged through an intermediary and work under the management and supervision (leiding en toezicht) of the Group, they may be entitled to equal pay (gelijkwaardige beloning) with the Group's employees pursuant to the Act on the Allocation of Workers by Intermediaries (WAADI).",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA in relation to claims to contractors for additional payment on the basis of equal pay.",
     "protection": "vrijwaring"
    },
    {
     "id": "zzp-i2",
     "kind": "issue",
     "title": "Remote contractors",
     "rating": "oranje",
     "facts": "We understand that several contractors work remotely from different countries. As such, it is also relevant to determine whether the relationship would qualify as an employment agreement on the basis of local laws.\nIf the agreements would be reclassified to an employment agreement mandatory employment law provisions (such as minimum wage, maximum working hours, statutory leave entitlements, termination protection, and health and safety regulations) of the country of work may apply regardless of the chosen law.",
     "risk": "",
     "recommendation": "If it is intended that the self-employed workers will continue to perform services after Completion, we recommend assessing the risk of requalification and considering to enter into employment agreements depending on this outcome.",
     "protection": "geen"
    }
   ]
  },
  {
   "key": "oproep",
   "title": "Oproepkrachten",
   "reportTitle": "On-call workers",
   "baseHours": 2,
   "doel": [
    "Check compliance WAB (waaronder aanbod vaste uren en oproeptermijnen)",
    "Check all-in loon",
    "0-uren contracten",
    "Wet zekerheid flexwerkers"
   ],
   "scope": [],
   "notes": [],
   "requests": [
    "Does the group have any on-call employees (oproepwerknemers)?",
    "Is there a policy for on-call employees and, if not, can you confirm that since January 2020 the company has continuously offered on-call employees an employment agreement after each twelve months of service, for the average hours worked in the preceding 12 months, and could you also provide the employees' responses to these offers?",
    "Are on-call employees called in at least four days in advance?",
    "Is an all-in wage used for on-call employees and, if so, are the holiday components specified on the payslip?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "oproep-s1",
     "kind": "std",
     "title": "Offer average hours",
     "rating": "oranje",
     "facts": "We understand that [..] employs [..] on-call employees. Employers are obliged to make a written offer of fixed working hours after twelve months of employment. The offered fixed working hours must be at least equal to the average number of hours worked per month in the preceding twelve months. If no written offer has been made, on-call employees can claim an employment agreement with a fixed number of working hours and can claim back payment for the hours they were entitled to work for under this employment agreement for a fixed number of working hours.\nIn the Q&A it was confirmed that no written offer of fixed working hours has been made to the on-call employees. As a result, the on-call employees can claim the average fixed number of working hours.",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA for potential claims from on-call employees arising from the failure to offer fixed working hours on the basis of the average working hours after twelve months of service.\nAfter Completion, we recommend offering the on-call employees fixed working hours on the basis of the average working hours.",
     "protection": "vrijwaring"
    },
    {
     "id": "oproep-i1",
     "kind": "issue",
     "title": "All-in salary",
     "rating": "oranje",
     "facts": "The template agreement provides that the on-call employee is entitled to an all-in salary. An all-in salary for the holiday allowance is permitted if agreed in the employment agreement and specified on the payslip; for holiday entitlements, this is only accepted in case of short and highly irregular working patterns. The salary slips provide for a break-down of payments related to the holiday allowance and holiday payments pursuant to the all in wage requirements.\nIf the employee works more frequently for [..] there is a risk that the all-in wage is considered invalid as a result of which the accrued holidays will have to be granted / compensated to the respective employees. Such wage claim can date back to five (5) years and is subject to the statutory increase and interest.",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA for potential claims from on-call employees.",
     "protection": "vrijwaring"
    },
    {
     "id": "oproep-i2",
     "kind": "issue",
     "title": "Deadline shift",
     "rating": "oranje",
     "facts": "Pursuant to Dutch law, the on-call employee should be called to work at least four days in advance. An employee is not obligated to work if the employee is called in less than four days in advance. [Such deadline is not included in the on-call agreements.]",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA for potential claims from on-call employees.",
     "protection": "vrijwaring"
    }
   ]
  },
  {
   "key": "cao",
   "title": "Cao",
   "reportTitle": "Collective labour agreements",
   "baseHours": 4,
   "doel": [
    "Hoe gebonden aan de cao? (lidmaatschap werkgeversvereniging, algemeen verbindend verklaard, partij bij cao of incorporatiebeding).",
    "Is in de cao iets opgenomen over overlegverplichting bij reorganisaties/fusies?",
    "Als er volgens target geen cao van toepassing is: altijd checken of mogelijk niet toch een cao van toepassing is/kan zijn. Ook controleren of er een werkingssfeeronderzoek is gedaan."
   ],
   "scope": [
    "Werkingssfeer onderzoek is standaard out of scope."
   ],
   "notes": [
    "Voorbeeldissues van specifieke cao's staan hieronder in de groep 'Specifieke cao's (bijlage 1)'."
   ],
   "requests": [
    "Which CLA(s) apply to the employees, and on what basis (membership of an employers’ organisation, declaration of general applicability, or incorporation in the employment agreements)? Has any dispensation been granted?",
    "Has the company carried out research into the scope of a possible applicable collective labour agreement (werkingssfeeronderzoek)?",
    "Has the Company been subject to a CLA compliance audit or received claims from trade unions?",
    "Please confirm that the group companies have always complied with the obligations under the collective labour agreement and that there are no outstanding payments relating to the applicable collective labour agreement."
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "cao-s1",
     "kind": "std",
     "title": "Collective labour agreement",
     "rating": "info",
     "facts": "Management confirmed that no collective labour agreement (collectieve arbeidsovereenkomst) applies within the Company.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "cao-s2",
     "kind": "std",
     "title": "Collective labour agreement",
     "rating": "info",
     "facts": "The collective labour agreement […] is applicable to the template employment agreements. The Seller has confirmed that the Group has always complied with the obligations under the collective labour agreement and that there are no outstanding liabilities in relation to the collective labour agreement.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "cao-i1",
     "kind": "issue",
     "title": "Scope review",
     "rating": "oranje",
     "facts": "Management confirmed that no scope research has been conducted and that the Group has not received any notices from trade unions or pension funds.\nAlthough a collective labour agreement scope research falls outside the scope of this Report, an initial review from our side as to possible applicable collective labour agreements identified, the collective labour agreement for [….] as being potentially applicable to the Group.\nThe risk of not correctly applying a collective labour agreement is that employees may claim compliance with the collective labour agreement retroactively up to 5 years. For example, if wages are not paid in accordance with the collective labour agreement, employees can claim payment of salary retroactively for up to 5 years. In addition, trade unions could also claim compliance with the collective labour agreement.\nSince collective labour agreements cover many different subjects and wage components, a more specific calculation should be carried out by an expert in quantitative analyses.",
     "risk": "",
     "recommendation": "We recommend including a warranty in the SPA that no mandatory collective labour agreement applies to the Group.\nClean-up\nWe recommend executing a scope research to the applicable collective labour agreement and possible other applicable collective labour agreements after Closing.",
     "protection": "spaitem"
    },
    {
     "id": "cao-ib4",
     "kind": "issue",
     "title": "Metaal & Techniek",
     "rating": "oranje",
     "facts": "The collective labour agreement Metal and Engineering – Metalworking company (cao Metaal en Techniek – Metaalbewerkingsbedrijf) (the “CLA”) is applicable to the employees.\nWe conducted a sample review of five employment agreements to assess whether they are fully compliant with the CLA.",
     "risk": "",
     "recommendation": "We recommend including warranties in the SPA pursuant to which the Sellers warrant that the CLA is and was applied correctly and completely.",
     "protection": "garantie",
     "group": "Specifieke cao's (bijlage 1)"
    },
    {
     "id": "cao-ib5",
     "kind": "issue",
     "title": "Beroepsgoederenvervoer",
     "rating": "oranje",
     "facts": "The collective labour agreement for professional road freight transport (cao beroepsgoederenvervoer) (\"CLA Professional Road Freight Transport\") is applicable to the employees of […]. The CLA Professional Road Freight Transport is incorporated in the employment agreement of these employees.",
     "risk": "",
     "recommendation": "We recommend including warranties in the SPA pursuant to which the Sellers warrant that the CLA is and was applied correctly and completely.",
     "protection": "garantie",
     "group": "Specifieke cao's (bijlage 1)"
    },
    {
     "id": "cao-ib6",
     "kind": "issue",
     "title": "Bouw & Infra",
     "rating": "oranje",
     "facts": "The collective labour agreement construction and infrastructure (cao bouw en infra) (\"CLA Construction and Infrastructure\") is applicable to the employees of […].\n[…] is a member of the employers’ association Bouwend Nederland which is a party to the CLA Construction and Infrastructure.",
     "risk": "",
     "recommendation": "We recommend including warranties in the SPA pursuant to which the Sellers warrant that the CLA is and was applied correctly and completely.",
     "protection": "garantie",
     "group": "Specifieke cao's (bijlage 1)"
    },
    {
     "id": "cao-ib7",
     "kind": "issue",
     "title": "CAO Groen, Grond en Infrastructuur",
     "rating": "oranje",
     "facts": "The collective labour agreement green spaces, groundwork and infrastructure (cao groen, grond en infrastructuur) (\"CLA GGI\") is applicable to the employees of […].\n[…] is a member of the employers’ association Cumela which is a party to the CLA GGI.",
     "risk": "",
     "recommendation": "We recommend including warranties in the SPA pursuant to which the Sellers warrant that the CLA is and was applied correctly and completely.",
     "protection": "garantie",
     "group": "Specifieke cao's (bijlage 1)"
    },
    {
     "id": "cao-ib8",
     "kind": "issue",
     "title": "Metaalbewerking",
     "rating": "oranje",
     "facts": "The Group applies the collective labour agreement Metalworking Industry (cao Metaalbewerking).\nManagement confirmed that the collective labour agreement has always been applied correctly to the employees and that there are no outstanding liabilities and obligations in that regard.",
     "risk": "",
     "recommendation": "We recommend including customary warranties in the SPA on the applicability of, and compliance with the CLA Metalworking Industry.",
     "protection": "garantie",
     "group": "Specifieke cao's (bijlage 1)"
    },
    {
     "id": "cao-ib9",
     "kind": "issue",
     "title": "Reisbranche",
     "rating": "oranje",
     "facts": "We understand that the collective labour agreement for the travel industry (cao voor de reisbranche) applies to the Dutch Group Companies.\nWe understand from the Q&A that this collective labour agreement is incorporated in the employment agreements of the employees. This collective labour agreement has been declared generally applicable (algemeen verbindend verklaard) and we understand from the Q&A that the Dutch Group Companies fall within its scope.",
     "risk": "",
     "recommendation": "We recommend including a warranty that the collective labour agreement for the travel industry is applied correctly to the employees of the Dutch Group Companies.",
     "protection": "garantie",
     "group": "Specifieke cao's (bijlage 1)"
    },
    {
     "id": "cao-ib10",
     "kind": "issue",
     "title": "ABU",
     "rating": "oranje",
     "facts": "The Group is a member of the Algemene Bond Uitzendondernemingen (ABU). Consequently, the ABU CLA applies to all employment agreements concluded with temporary workers. The ABU CLA is incorporated into the Group's template employment agreements for temporary workers and is also reflected in its general terms and conditions and customer agreements.",
     "risk": "",
     "recommendation": "Include a warranty in the SPA that the ABU CLA has been applied correctly and in full by […] for the past five years and that no other CLA is applicable.",
     "protection": "garantie",
     "group": "Specifieke cao's (bijlage 1)"
    }
   ]
  },
  {
   "key": "ziekte",
   "title": "Ziekte en arbeidsomstandigheden",
   "reportTitle": "Sickness and working conditions",
   "baseHours": 3,
   "doel": [
    "Inzicht in percentage ziekmeldingen en gemiddelde lengte ziekte",
    "Checken verzuimpercentages tegen landelijk gemiddelde. Indien het verzuimpercentage hoog is: wat is oorzaak en wat wordt er aan gedaan?",
    "Check of aan Wet Verbetering Poortwachter is voldaan, stand re-integratie en vraag eventueel garantie voor geval er na Closing een loonsanctie wordt opgelegd.",
    "Inzicht in naleving Arbeidsomstandighedenwet, waaronder: (i) inzicht in eventuele boetes als gevolg van non compliance, (ii) bij ongevallen: gemeld bij inspectie? Ook controleren of er claims of klachten zijn ingediend door werknemers en welke maatregelen zijn getroffen door de werkgever na een ongeval of incident."
   ],
   "scope": [],
   "notes": [],
   "requests": [
    "Has the company fulfilled all statutory obligations with respect to labour conditions and safety?",
    "Could you provide reports of, and correspondence with, the Employment Inspection Office (Arbeidsinspectie) over the last three years?",
    "Could you provide the most recent reports of, and agreements with, the Working Conditions Service (Arbodienst)?",
    "Could you provide an overview of employee absence due to illness over the past three years, and the illness percentages for those years?",
    "Could you confirm how many employees are absent due to long term illness, and whether any wage sanction (loonsanctie) has been imposed or announced by the UWV?",
    "Please confirm whether any employment agreements have not been terminated after two years of illness ('dormant employment relationships')?",
    "Could you provide details and the number of accidents in the working environment over the past five years, including whether (a) any reports have been made to the Dutch Labour Inspection in that regard, and (b) whether these accidents have resulted in (long term) illness and, if so, the relevant documents?",
    "[If accidents occurred]: Is the Company insured for workplace accidents and employer’s liability, and are the reported accidents covered? Have any claims been filed or announced, or any measures by the Dutch Labour Inspectorate been imposed or announced, in connection with these accidents? (ingekort)",
    "Could you provide a copy of the insurance policy in place for the continued payment of wages during the first two years of illness (loondoorbetaling bij twee jaar ziekte), or confirm that no such insurance is in place?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "ziekte-s1",
     "kind": "std",
     "title": "General",
     "rating": "info",
     "facts": "The illness rate of the Group has increased over the last years and is [include rate].\nManagement indicated that they are currently implementing several measures to limit the illness from employees, including: [include measures].\nManagement confirmed that there are currently no employees absent due to long-term illness and that the Group fulfilled its obligations under the Gatekeeper Improvement Act (Wet Verbetering Poortwachter).\nManagement confirmed that there has been no involvement from the Labour Inspection in the last three years. Management also confirmed that there are no long-term illnesses within the Group.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "ziekte-i1",
     "kind": "issue",
     "title": "IVA",
     "rating": "oranje",
     "facts": "One employee who is on sick leave has been granted an early disability benefit under the Dutch IVA scheme. This can be granted in exceptional circumstances by the Dutch Employee Insurance Agency (UWV) if an employee is seriously ill and it is expected that he will not be able return to work. This employee will be on sick leave for two years in [date] and we have been informed that it is the intention to terminate his employment at that moment.",
     "risk": "",
     "recommendation": "We recommend to include an indemnity in the SPA for any costs associated with the continuation of the employment agreement and the termination of the employment agreement of the employee who has been granted an early disability benefit under the Dutch IVA scheme in the case these costs are not reimbursed by the Dutch Employee Insurance Agency (UWV).",
     "protection": "vrijwaring"
    },
    {
     "id": "ziekte-i2",
     "kind": "issue",
     "title": "Working accidents",
     "rating": "oranje",
     "facts": "We understand from the Data Room that an accident took place. After this accident, the Dutch Labour inspectorate (arbeidsinspectie) ruled that: [include details on the accident and ruling]\nAn accident needs to be reported at the Dutch Labour Inspectorate in case of death, permanent injury or hospitalization.\nEmployees, temporary workers and independent contractors may hold an employer liable for damages suffered as a result of a workplace accident for a period up to 5 years from the day on which the injured party became aware of both the damage and the liable party.",
     "risk": "",
     "recommendation": "We recommend including indemnities in the SPA pursuant to which Seller shall indemnify Purchaser and the Group against any costs, damages and other expenses in relation to the accident that took place on [date].",
     "protection": "vrijwaring"
    }
   ]
  },
  {
   "key": "rie",
   "title": "RI&E",
   "reportTitle": "Risk inventory and evaluation (RI&E)",
   "baseHours": 1,
   "doel": [
    "Is de RI&E up to date en wanneer is deze voor het laatst uitgevoerd?",
    "Zijn alle punten uit het PvA geïmplementeerd?"
   ],
   "scope": [
    "RI&E wordt high-level bekeken en er wordt alleen gerapporteerd over hoge risico’s. Soms out of scope en dan niet bekijken!"
   ],
   "notes": [],
   "requests": [
    "Could you provide the most recent (i) risk inventory and evaluation (RI&E) and (ii) connected action plan (plan van aanpak)?",
    "Has the RI&E been reviewed by a certified expert (kerndeskundige), where required?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "rie-s1",
     "kind": "std",
     "title": "Not available",
     "rating": "oranje",
     "facts": "Management confirmed that there is no current risk inventory and evaluation (RI&E) and connected action plan (plan van aanpak) in place.\nPursuant to the Working Conditions Act (Arbeidsomstandighedenwet) a company is obliged to have an RI&E and plan of action in place and to keep both up to date. If there is no RI&E in place and no plan of action and there is a visit by the Employment Inspection Office, an administrative fine may be imposed as a result of the absence of these documents. The RI&E can lead to additional costs regarding updating employment conditions (like adjusting workplaces, safety measures, training etc.). The costs related to amendments cannot yet be assessed.",
     "risk": "",
     "recommendation": "An RI&E should be conducted. The outcome of the RI&E can lead to costs, such as necessary amendments for a safe working place.\nAlthough we cannot assess the costs, it can be considered to request an indemnity in the SPA for any costs resulting from the RI&E.",
     "protection": "vrijwaring"
    },
    {
     "id": "rie-s2",
     "kind": "std",
     "title": "Up to date RI&E",
     "rating": "info",
     "facts": "We understand from the Q&A that one risk inventory and evaluation (RI&E) is in place for […]. This RI&E is updated and assessed by a third party in October 2024. A corresponding plan of approach is also in place. We have been informed that no major risks need to be addressed.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    }
   ]
  },
  {
   "key": "erd",
   "title": "Eigenrisicodragerschap",
   "reportTitle": "Own risk bearer (ZW/WGA)",
   "baseHours": 1,
   "doel": [
    "Controleer of target eigenrisicodrager is",
    "Als target eigenrisicodrager is: hoeveel oud werknemers momenteel in ZW/WIA? Hoeveel werknemers langdurig ziek die naar verwachting ziek uit dienst gaan?",
    "Als target eigenrisicodrager is: is het risico herverzekerd of zijn er voorzieningen opgenomen in de jaarrekening?"
   ],
   "scope": [],
   "notes": [],
   "requests": [
    "Is the Company an own risk bearer (eigenrisicodrager) for the Return to Work (Partially Disabled Persons) Regulations (WGA) or the Sickness Benefits Act (Ziektewet)?",
    "Could you provide the decisions of the Dutch Tax Authorities on the differentiated Whk premium (beschikking gedifferentieerde premie Whk) for the last two calendar years?",
    "Has the Company switched from or to own risk bearing in the past ten years?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "erd-s1",
     "kind": "std",
     "title": "No insurance",
     "rating": "oranje",
     "facts": "Management confirmed that […] are own risk bearer for the Sickness Benefit Act (Ziektewet) or Partially Incapacitated Act (WGA).",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA against any claims to […] relating to own risk bearer for the Sickness Benefit Act (Ziektewet) or Partially Incapacitated Act (WGA) with regard to any employee that became ill/incapacitated to perform activities up to the Closing Date.",
     "protection": "vrijwaring"
    },
    {
     "id": "erd-s2",
     "kind": "std",
     "title": "Insurance",
     "rating": "info",
     "facts": "[…] is own risk bearer for the Sickness Act (Ziektewet) and the Return to Work (Partially Disabled Persons) Regulations (WGA). We have been informed that insurance has been taken out in this regard at ASR.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    }
   ]
  },
  {
   "key": "pensioen",
   "title": "Pensioen",
   "reportTitle": "Pensions",
   "baseHours": 4,
   "doel": [
    "Inzicht in pensioenregeling en aard (verplichtgesteld pensioenfonds, pensioenverzekering beschikbare premie of middelloon regeling etc.).",
    "Lijkt een Bpf van toepassing, en neemt de target daaraan deel of is er een vrijstelling?",
    "Nemen alle werknemers deel (ook oproepkrachten), is iedereen aangemeld bij de uitvoerder en zijn er afstandsverklaringen?",
    "Zijn er premieachterstanden of geschillen met de uitvoerder?",
    "Waar staat de target met Wtp doorvoeren?",
    "Resteren er volgens de target verplichtingen uit eerdere regelingen, of is er pensioen in eigen beheer? Indexatie en financiering van opgebouwde aanspraken horen bij de financial DD en een pensioenspecialist."
   ],
   "scope": [
    "Pensioen wordt at face value bekeken, beperkt tot de key topics uit de scopetekst (zie Pensioenen DD scope en signaleringen). Wij zijn geen pensioenrechtspecialisten.",
    "Out of scope: pensioenrechtelijke toets, de inhoud van de regeling en de rechtsgeldigheid van wijzigingen, actuariële en financiële aspecten (waaronder indexatie, financiering en premieberekeningen) en de beoordeling van de Wtp transitie.",
    "Bij key issues of berekeningen (bijvoorbeeld pensioencompensatie): KWPS inschakelen op basis van een aparte offerte, na akkoord van het corporate kantoor.",
    "Vraag niet om actuariële rapporten, dekkingsgraden, stukken van een werkingssfeeronderzoek of Wtp berekeningen: wie stukken opvraagt, wordt geacht ze te hebben beoordeeld."
   ],
   "notes": [],
   "requests": [
    "Could you provide all documents relating to the current pension plans, including the pension rules (pensioenreglement) and the administration agreement (uitvoeringsovereenkomst), with an overview per Dutch entity of the pension provider and the categories of employees covered?",
    "Please confirm that the documents provided cover all current pension plans, and that there are no other pension commitments, including individual pension commitments to management or key employees.",
    "Has a scope study (werkingssfeeronderzoek) regarding potentially applicable mandatory industry pension funds (Bpf) been carried out? If so, please state its outcome.",
    "Has the Company been granted an exemption from participation in a Bpf, or has it been approached by a Bpf regarding (retroactive) participation? If so, please provide details and, in case of an exemption, a copy of the exemption decision.",
    "Have the pension scheme(s) been amended in the past five years? If so, please briefly describe the amendment and confirm that no (former) employee has objected to it.",
    "Can you confirm that all (former) employees, including on-call employees (oproepkrachten), participate and have always participated in the pension scheme(s), and that they are duly registered with the pension provider? If any (groups of) employees are excluded, please state which employees and on what basis.",
    "Could you provide a list of (former) employees who signed a waiver of participation (afstandsverklaring), including copies of these waivers and the pension provider’s approval?",
    "Could you provide the most recent premium invoice or statement of account of each pension provider, and confirm that all pension contributions due over the past five years have been paid and that there are no arrears?",
    "Can you confirm that there are no outstanding or foreseen claims regarding the pension arrangements? If there are, please provide details.",
    "What is the current status of the transition under the Future Pensions Act (Wtp), including the intended transition date? Has the implementation plan been submitted to and approved by the works council or other employee representative body?",
    "Please confirm that no obligations remain for the Company in relation to previous pension schemes or former pension providers, and that the Company has no pension commitments administered in its own books (pension in eigen beheer)."
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "pensioen-s1",
     "kind": "std",
     "title": "General",
     "rating": "oranje",
     "facts": "We reviewed the pension documentation at face value. The Company offers its employees a [defined contribution (beschikbare premie) / average salary (middelloon)] pension scheme via [provider], as described in [the pension scheme rules dated [date]] / The Company participates in the mandatory industry pension fund [name] (Bpf). [Management / [group]] participate[s] in [scheme] administered by [provider].\nWe understand from Management that all employees, including on-call employees, participate in the pension scheme and are registered with the pension provider [, except [group], who [reason as stated]], that no waivers of participation have been signed, and that all premiums have been paid or are provided for in the accounts.\nAccording to Management, [status of the Wtp transition]. Management has confirmed that no obligations remain under previous pension schemes.\nWithin the key topics set out in our scope, no issues came to our attention. Our findings are based solely on a face value review and do not constitute a pension law assessment; they should not be read as confirmation that no pension related risks exist.",
     "risk": "",
     "recommendation": "We recommend including customary pension warranties in the SPA, including that all pension contributions have been paid or are duly provided for, that all employees participate in the pension scheme, and that no mandatory industry pension fund applies [other than [name]].\nThe transition under the Wtp may require consent of the works council and employees and may lead to additional costs. We recommend that the Purchaser liaises with a pension advisor in this respect.",
     "protection": "garantie"
    },
    {
     "id": "pensioen-i1",
     "kind": "issue",
     "title": "Possible mandatory Bpf",
     "rating": "oranje",
     "facts": "Based on the description of the business activities in [document], the activities of [entity] may fall within the scope of the mandatory industry pension fund [name]. From the documents provided, it does not appear that [entity] participates in this Bpf or has been granted an exemption. If mandatory participation applies, the Bpf may claim premiums with retroactive effect, plus interest and costs, and employees may claim pension rights for past periods. Whether mandatory participation applies requires a detailed review of the actual business activities, which falls outside the scope of our review.",
     "risk": "",
     "recommendation": "We recommend that a pension law specialist assesses whether mandatory participation applies and that a specific indemnity is included in the SPA.",
     "protection": "vrijwaring"
    },
    {
     "id": "pensioen-i2",
     "kind": "issue",
     "title": "Exclusion of employees",
     "rating": "oranje",
     "facts": "Based on [the employee overview / the pension scheme rules / Q&A answer [no.]], [number / group of] employees [, including on-call employees,] do not participate in [scheme / Bpf]. The exclusion of (groups of) employees may conflict with equal treatment legislation or with mandatory participation in a Bpf, in which case excluded employees may claim pension rights with retroactive effect. We have not assessed whether this exclusion is justified.",
     "risk": "",
     "recommendation": "We recommend that a pension law specialist assesses the exclusion and that, depending on the outcome, a specific indemnity is included in the SPA.",
     "protection": "vrijwaring"
    },
    {
     "id": "pensioen-i3",
     "kind": "issue",
     "title": "Waivers of participation",
     "rating": "oranje",
     "facts": "According to [the list provided / Q&A answer [no.]], [number] (former) employees have signed a waiver of participation (afstandsverklaring). [For [number] of these waivers, no approval of the pension provider has been provided.] If a waiver is not valid, the employee may claim pension rights for the period concerned. We have not assessed the validity of these waivers.",
     "risk": "",
     "recommendation": "We recommend including a specific indemnity in the SPA for claims of employees who waived participation.",
     "protection": "vrijwaring"
    },
    {
     "id": "pensioen-i4",
     "kind": "issue",
     "title": "Premium arrears",
     "rating": "oranje",
     "facts": "[The statement of account of [provider] dated [date] / Q&A answer [no.]] shows outstanding premiums of EUR [amount]. Outstanding premiums may result in claims from the pension provider for payment, interest and costs and, potentially, in claims from employees. We have not verified the premium calculations.",
     "risk": "",
     "recommendation": "We recommend that the outstanding amount is settled prior to Completion or covered by a specific indemnity in the SPA.",
     "protection": "presigning"
    },
    {
     "id": "pensioen-i5",
     "kind": "issue",
     "title": "Wtp transition",
     "rating": "oranje",
     "facts": "According to Management, [no implementation plan has been prepared yet / status]. The transition under the Wtp may have financial consequences for the Company, for example if compensation for certain employees is agreed, and requires consent of the works council or other employee representative body. We have not assessed the content or the financial consequences of the transition.",
     "risk": "",
     "recommendation": "We recommend that the Purchaser obtains further information on the planned transition and liaises with a pension advisor in this respect.",
     "protection": "valuation"
    },
    {
     "id": "pensioen-i6",
     "kind": "issue",
     "title": "Previous pension schemes",
     "rating": "oranje",
     "facts": "[Document] shows that [entity] [changed pension provider in [year] / previously operated an [average salary / final salary] scheme]. Pension liabilities, including any indexation or funding obligations in respect of accrued rights under previous schemes, fall outside the scope of our review.",
     "risk": "",
     "recommendation": "We recommend that this is assessed in the financial due diligence and, where relevant, by a pension law specialist.",
     "protection": "valuation"
    },
    {
     "id": "pensioen-i7",
     "kind": "issue",
     "title": "Pension commitment outside overview",
     "rating": "oranje",
     "facts": "[Document] provides that [employee] is entitled to [description of pension commitment]. This commitment is not included in the overview of pension schemes, and it is not apparent from the documents provided whether it has been placed with a pension provider. If not, the Company may bear the financial obligations under this commitment itself.",
     "risk": "",
     "recommendation": "We recommend that the Seller confirms how this commitment is administered and that, depending on the answer, a specific indemnity is included in the SPA.",
     "protection": "vrijwaring"
    },
    {
     "id": "pensioen-ib1",
     "kind": "issue",
     "title": "PMT",
     "rating": "oranje",
     "facts": "[…] applies the mandatory pension fund Metal and Engineering (PMT) to the employees. This pension fund participation is incorporated in the standard form employment agreement. It has been confirmed by Management in the Q&A that no other pension schemes are in place.\nThe pension fund PMT provides for an average pay pension scheme (middelloonregeling), which is a defined benefit pension scheme. The defined benefit scheme has been converted into a defined (solidarity) contribution pension scheme, based on changes in the Dutch pension laws. The new pension scheme applies as of 1 January 2026, based on the transition plan of PMT.\nDue to the aforementioned change, it can result in additional pension costs going forward.",
     "risk": "",
     "recommendation": "Recommended checking the impact on pension costs as of 1 January 2026.",
     "protection": "geen",
     "group": "Specifieke bedrijfstakpensioenfondsen (bijlage 1)"
    },
    {
     "id": "pensioen-ib2",
     "kind": "issue",
     "title": "Bpf Landbouw, Bpf Vervoer en Bpf Bouw",
     "rating": "oranje",
     "facts": "According to the Data Room the Group’s pension situation is as follows:\n• […] applies the CLA GGI. […] is affiliated to the mandatory industry-wide pension fund for the agricultural sector (“Bedrijfstakpensioenfonds Landbouw, BPL”). BPL applies a fixed premium of 26.40%. The employer contributes 19.09%;\n• [...] applies the CLA Professional Road Freight Transport. […] is affiliated to the mandatory industry-wide pension fund for this sector (“Pensioenfonds Vervoer”). Pensioenfonds Vervoer applies a fixed premium of 30.00%. The employer contributes 19.84%; and\n• […] applies the CLA Construction and Infrastructure. […] is affiliated to the mandatory industry-wide pension fund for this sector (“Bpf Bouw”). Bpf Bouw applies a fixed premium of 25.73%. The employer contributes 16.33%.",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA pursuant to which Seller shall indemnify Purchaser and the Group against any costs, damages and other expenses arising for the Group or legal predecessor(s) of a Group Company from a claim from any pension fund or (former) employee of the Group arising from the failure to affiliate with a relevant (mandatory) industry-wide pension fund.\nFurther, we recommend including a warranty in the SPA pursuant to which Seller warrants that all employees of the Group have been enrolled in the mentioned pension schemes and that all premiums due have been paid until completion date.\nFinally, we recommend Purchaser to conclude a thorough assessment of the activities in relation to the scope of the activities of the mandatory industry-wide pension fund.",
     "protection": "vrijwaring",
     "group": "Specifieke bedrijfstakpensioenfondsen (bijlage 1)"
    },
    {
     "id": "pensioen-ib3",
     "kind": "issue",
     "title": "Bpf PGB",
     "rating": "oranje",
     "facts": "Based on the activities the Dutch Group Companies are obliged to join the industry-wide pension fund PGB (Pensioenfonds PGB). All employees of the Dutch Group Companies must be enrolled in the pension scheme administration of PGB.\nIn the Q&A it was confirmed that, until 1 January 2021, the Dutch Group Companies were affiliated with the industry-wide pension fund for the travel sector (Reiswerk Pensioenen). Since 1 January 2021, the industry-wide pension fund for the travel sector has been dissolved and pensions for the travel industry have been transferred to PGB. In the Q&A, it was confirmed that all employees that were negatively affected by the change to PGB in 2021 were assisted by the trade union, who negotiated with PGB on their behalf. The Dutch Group Companies were not part of these discussions.\nIn the Q&A it was furthermore confirmed that:\n• the Dutch Group Companies have always been affiliated with Reiswerk Pensioenen and PGB, and that all employees have always been enrolled;\n(ii) no (ex-)employee signed a waiver of participation (afstandsverklaring); and\n• there are no appeals/claims from and discussions with (ex-)employees regarding pension.\nIn the Data Room, 2 administration agreements (uitvoeringsovereenkomsten) with the pension fund have been uploaded: 1) one based on a defined contribution pension scheme and 2) one based on a defined benefit pension scheme. From the PGB website, we understand that trade unions and/or employers are free to choose either one of the pension schemes.\nBased on the website of PGB, it is most likely that pension schemes of the Dutch Group Companies are defined benefit pension schemes. For accounting purposes, the defined benefit pension scheme can be considered as a defined contribution scheme, because employers are only obliged to pay the standard average premium. In 2025 the standard average premium in the defined benefit pension scheme was 25.30% of the pensionable base (50% of this premium is for the account of the employer). In this pension scheme, the pensionable base is the fixed salary, with a maximum of EUR 55,902 minus a mandatory offset of EUR 18,475 (2025 amounts).\nNew pension legislation has come into force as of 1 July 2023. In order to comply with new legislation, PGB will change the pension scheme to fully comply with the new pension legislation. It is expected that the standard average premium will remain about the same. PGB expects to transition to the new system on 1 January 2027.",
     "risk": "",
     "recommendation": "We recommend including a warranty in the SPA that all employees of the Dutch Group Companies have been registered with the mandatory industry-wide pension fund PGB (Pensioenfonds PGB) and all premiums due until Completion date have been paid.",
     "protection": "garantie",
     "group": "Specifieke bedrijfstakpensioenfondsen (bijlage 1)"
    }
   ]
  },
  {
   "key": "reorganisatie",
   "title": "Reorganisatie en vaststellingsovereenkomsten",
   "reportTitle": "Reorganisations and settlement agreements",
   "baseHours": 2,
   "doel": [
    "Inzicht in lopende of toekomstige vorderingen (onbetaalde ontslagvergoedingen) en lopende of mogelijke procedures UWV,",
    "Bij veel/grote reorganisaties: sfeer op werkvloer mogelijk beïnvloed."
   ],
   "scope": [],
   "notes": [],
   "requests": [
    "Could you provide the settlement agreements/arrangements entered into over the last three years?",
    "Could you provide a list of employees who will leave the business within six months?",
    "If settlement agreements are uploaded to the data room: What were the reasons for entering into each of these, and can you confirm that all payments have been made and that there are no outstanding obligations?",
    "Could you provide an overview of any restructurings in the past three years, and can you confirm that there have been no other reorganizations in the last three years?",
    "Have 20 or more employees been dismissed (including by settlement agreement) within a period of three months in one region in the past three years and, if so, was this notified under the Collective Dismissal Act (WMCO)?",
    "Are there any pending dismissal applications with the UWV or the subdistrict court?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "reorganisatie-i1",
     "kind": "issue",
     "title": "Settlement agreement",
     "rating": "oranje",
     "facts": "The Data Room contains […] settlement agreements entered into with employees between […]. Management confirmed that there has been an acquisition as a result of which a number of positions became redundant. In addition, as a result of poor figures, a couple of employees were offered a settlement agreement for business economic reasons.\nManagement confirmed that the Group has fulfilled all its payment obligations resulting from the settlement agreements.",
     "risk": "",
     "recommendation": "Customary warranties to be included in the SPA regarding (i) no (pending) disputes with employees exist or are expected, (ii) all employment laws (including for dismissal) have been properly adhered to.",
     "protection": "garantie"
    }
   ]
  },
  {
   "key": "ovo",
   "title": "Carve-out en overgang van onderneming",
   "reportTitle": "Carve-out and transfer of undertaking",
   "baseHours": 4,
   "doel": [
    "Controleren of er een overgang van onderneming wordt getriggerd",
    "Check welke werknemers gaan over met de transactie",
    "Check wat de communicatie is richting de werknemers",
    "Zijn er regelingen op groepsniveau die moeten worden vernieuwd als gevolg van de carve-out (bijvoorbeeld bonusregeling of verzekeringen)",
    "Pensioen is een belangrijk aandachtspunt: schakel met de kennisverantwoordelijke pensioen of KWPS"
   ],
   "scope": [],
   "notes": [],
   "requests": [
    "Where are the employees currently employed?",
    "How will the transfer of employees to [new entity] be organised?",
    "How will employees be selected for the transfer? Which employees are wholly or partly attached to the division?",
    "Apart from the employees, what else will be transferred to [new entity] (assets, contracts, licences, activities)?",
    "Have employees already been informed about the transfer?",
    "Will the Purchaser offer its own pension scheme to the transferring employees (article 7:664 DCC)?",
    "Which shared support services (HR, Finance, etc.), handbooks, insurance policies and pension arrangements need to be continued or replaced?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "ovo-s1",
     "kind": "std",
     "title": "Transfer of undertaking (OVO)",
     "rating": "oranje",
     "facts": "A transfer of undertaking (overgang van onderneming) means (i) the transfer arising from a “contract”, merger or division (ii) of an economic unit (iii) which keeps its identity. An \"economic unit\" means an undertaking or part thereof established for the pursuit of an activity irrespective whether this constitutes its principal activity.\nWe understand that the envisaged Transaction qualifies as a transfer of undertaking as all assets relevant to the business will transfer as part of the transaction and the business will retain its identity. As a result of the transfer of undertaking, the employees will remain entitled to all rights and benefits following from the employment agreements and the employment conditions cannot be amended negatively. Additionally, the employees can also not be dismissed as a result of the transaction.\nAs from the date of transfer, the Purchaser will have to bear the costs of the employment. For a year after the transfer, the Company shall remain jointly and severally liable together with the Purchaser for the performance of the obligations under the contracts of employment which arose before the date of transfer, being all employment conditions including pensions.",
     "risk": "",
     "recommendation": "We recommend informing the employees of the envisaged Transaction and that they will transfer to the Purchaser pursuant to the transfer of undertaking legislation. We also recommend informing the employees that they remain entitled to all rights and benefits following from their employment agreements.",
     "protection": "geen"
    }
   ],
   "assetOnly": true
  },
  {
   "key": "overig",
   "title": "Overig",
   "reportTitle": "Other",
   "baseHours": 2,
   "doel": [
    "Controleer of er afwijkende contracten of regelingen van toepassing zijn binnen de groep (bijvoorbeeld arbeidsmigranten, studieovereenkomsten).",
    "Controleer hoe het gesteld is met veiligheid en welk beleid er van toepassing is",
    "Controleer of nieuwe wetgeving van toepassing kan zijn op de target (bijvoorbeeld WTTA en Flexibele werkers)"
   ],
   "scope": [],
   "notes": [
    "Bij voorbeelden over nieuwe wetgeving: altijd controleren wat de laatste status is en of de voorbeeldtekst nog klopt."
   ],
   "requests": [
    "Please provide the applicable whistleblower policy and an overview of notifications made and internal/external investigations carried out over the past three years?",
    "Has the works council consented to the whistleblower procedure?",
    "Are there any pending or threatened employment claims, in particular regarding inappropriate or unacceptable behaviour (overschrijdend gedrag)?"
   ],
   "requestNotes": [],
   "introDesc": "",
   "introConcise": "",
   "findings": [
    {
     "id": "overig-i1",
     "kind": "issue",
     "title": "Internship agreement",
     "rating": "info",
     "facts": "Within the Group a standard template internship agreement is applied. The template internship agreement provides that it does not constitute an employment agreement within the meaning of the DCC.\nThe following key terms are included in the standard template internship agreement: (i) a fixed term duration, (ii) a monthly gross internship allowance of […], (iii) a description of learning activities limited to the Company’s core business and an explicit clause that the intern shall not perform activities outside the scope of the Company’s internship program and (iv) a confidentiality clause.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "overig-i2",
     "kind": "issue",
     "title": "Whistleblowing policy",
     "rating": "info",
     "facts": "The employee handbook provides for a whistleblower regulation (klokkenluidersregeling) that is generally in accordance with Dutch law requirements. Through Q&A Management has confirmed that the Company has always complied with applicable laws/regulations with regard to whistleblower requirements.",
     "risk": "",
     "recommendation": "",
     "protection": "info"
    },
    {
     "id": "overig-i3",
     "kind": "issue",
     "title": "Study agreement",
     "rating": "oranje",
     "facts": "The Data Room contains a study agreement for […]. We understand that this agreement is entered into with employees who will study for [study].\nUnder Dutch law, an employer is legally required to bear the costs of mandatory training for their employee. If the training is mandatory, an employee cannot be required to repay (part of) the training costs. An agreement which obliges the employee to repay the training costs in full or in part if they discontinue the training prematurely or leave within a certain period after completing the training is in such case not valid.\nFurther for a valid agreement on study costs, the following is required:\n• over which period the employer benefits from the knowledge acquired by the employee through the training completed;\n• that the employee must repay salary if the employment contract ends during or immediately after the training period (the consequences of the clause); and\n• that the repayment obligation decreases proportionally as the employment contract continues, during the period referred to under (i) (the sliding scale).\nIn case law, it has been decided that the study for company doctor is not mandatory training. As such, it is possible to enter into a study agreement with the relevant employees.\nThe template study agreement provides for repayment obligations on employees regarding two points: (i) repayment of the training costs charged by the training institute, and (ii) repayment of the study leave taken by employees, up to a maximum of ten hours per week.\nThe template study agreement states that the study costs have to be repaid by the employee if: (i) the employment agreement is terminated at the employee’s request during the training or within three years after completion of the training; (ii) the employment agreement is terminated for urgent cause; or (iii) the training is not successfully completed due to circumstances attributable to the employee.\nFor each month that the employment agreement, after completion of the training, has lasted less than 36 months, 1/36th of the study costs must be repaid per month. For example, if the employment agreement ends after 24 months due to resignation by the employee, a pro rata amount corresponding to 12 months of the training costs must be repaid.\nIn principle, the abovementioned conditions comply with the applicable requirements, meaning that the employee may be obliged to repay (part of) the study costs.\nIn addition, the template provides that study leave is granted for classes and mandatory internships during working hours. If the employee leaves in the relevant period, the financial value of the study leave is also repayable on a pro rata basis, applying the same 36-month reduction mechanism.\nAlthough Dutch case law accepts that study leave may, in principle, be included in a repayment obligation, enforceability depends on sufficient transparency and information for the employee. In particular, employees must be able to understand in advance how the costs are calculated. Courts have rejected claims where this requirement was not met.\nIn that context, case law indicates that repayment of study leave is only enforceable if the calculation method is explicitly defined in advance, for example by linking one hour of study leave to the employee’s gross hourly wage. The template does not include such an explicit calculation mechanism, which creates uncertainty as to enforceability of the study leave repayment.",
     "risk": "",
     "recommendation": "We recommend including an indemnity in the SPA for costs resulting from the unenforceability of repayment of the costs following from the study agreements in case the company appeals to repayment based on the study agreements.\nWe recommend for the template study agreement to be updated post-Completion and to include the total training costs.\nIn addition, a clear and enforceable clause should be added setting out the methodology for calculating any repayment obligations related to the study leave taken by employees for example by including that the study leave is calculated based on the employee’s gross hourly wage (including or excluding holiday allowance and other emoluments).",
     "protection": "vrijwaring"
    },
    {
     "id": "overig-i4",
     "kind": "issue",
     "title": "WTTA",
     "rating": "oranje",
     "facts": "The WTTA enters into force on 1 January 2027. It introduces a mandatory certification regime for employment agencies operating in the Netherlands.\nAs of 1 January 2027, employment agencies are prohibited from supplying workers unless they hold a valid approval issued by the Dutch Labour Market Authority (Naleving Arbeidswetgeving en Uitvoering, NAU). Applications for approval must be submitted to the NAU between November and December 2026. Compliance will be assessed by accredited auditing institutions. Employment agencies that meet the requirements will receive a certificate and will be listed in a publicly accessible register, enabling customers to verify an employment agency's authorised status at any time.\nAdmission requirements are:\n• Certificate of Conduct (VOG);\n• Ongoing regulatory compliance such as equivalent remuneration to all temporary workers; and\n• Security deposit. A mandatory deposit of EUR 100,000 must be paid upon registration. This amount is refunded after four consecutive years of compliance.\nEmployment agencies may be exempted from paying the deposit if they can demonstrate that they have already operated in full compliance for at least four years. The exemption conditions include: (i) registration with the Chamber of Commerce for a minimum of four years; and (ii) a clean statement (schone verklaring) from the Dutch Tax Authorities (Belastingdienst) confirming timely and correct payment of taxes throughout that period. That statement may not be older than 3 months. The Documents include a confirmation by the Dutch Tax Authorities (Belastingdienst) that [..] has met all payment obligations to the Dutch Tax Authorities (Belastingdienst) through [date]. Management confirmed through the Q&A that, from [date] up to and including the date hereof, it has also met all of its payment obligations to the Tax Authorities.\nIn addition, a transitional arrangement will apply to existing employment agencies, allowing them sufficient time to prepare for the new admission and licensing system. If an employment agency makes use of this transitional arrangement, it may continue supplying temporary agency workers while the NAU assesses its application.\nTo benefit from the transitional arrangement, the employment agency must register in a timely manner, which can be done between 1 November 2026 and 31 December 2026. Registration is not mandatory for employment agencies that hold an SNA certification mark as of 30 June 2027. Nevertheless, it is recommended that employment agencies register for the transitional arrangement in due time, given the risk that an agency could lose its SNA certification during the interim period. In such circumstances, the transitional arrangement would no longer apply, and the employment agency would need to cease staffing temporary workers. Timely registration mitigates this risk.\nIn any event, the employment agency must submit its formal application for admission between 1 May 2027 and 30 June 2027.",
     "risk": "",
     "recommendation": "We recommend taking prompt action after Closing in relation to the WTTA to ensure that the Group is compliant with the applicable requirements by 1 January 2027.",
     "protection": "geen"
    },
    {
     "id": "overig-i5",
     "kind": "issue",
     "title": "Pay Transparency Directive",
     "rating": "oranje",
     "facts": "The Wage Transparency Directive (Directive (EU) 2023/970 on pay transparency and equal pay for women and men, the \"Directive\") aims to ensure equal pay for equal work or work of equal value. Among other things, the Directive provides for: (i) pay transparency in the recruitment process, including disclosure of salary ranges and a prohibition on asking applicants about their salary history; (ii) a right for employees to request information on pay levels and average remuneration for comparable roles, differentiated by gender; (iii) gender pay gap reporting obligations for employers, depending on their size; and (iv) a mandatory joint pay assessment where an unjustified gender pay gap of 5% or more is identified. Breaches of the equal pay obligations can lead to sanctions and damages claims.\nThe Netherlands is expected to implement the Directive with effect from 1 January 2027. [Status of the Dutch implementing legislation to be confirmed as at the date of the report.] Employers should start at an early stage with assessing the impact of the Directive and take measures to reduce the gender pay gap as far as possible.\n[Optional, project-specific sentence:] Management has informed us through the Q&A that the Group [insert status preparation of the target]",
     "risk": "",
     "recommendation": "We recommend taking prompt action after Closing in relation to the Pay Transparency Directive to ensure that the Group is compliant with the applicable requirements by 1 January 2027.",
     "protection": "geen"
    },
    {
     "id": "overig-i6",
     "kind": "issue",
     "title": "More protection for flexible workers",
     "rating": "oranje",
     "facts": "This legislative proposal has been passed by the House of Representatives (Tweede Kamer) and will enter into force on 1 January 2028 once the act has been adopted by the Senate (Eerste Kamer). The core objective of this new legislation is to limit long-term flexible employment arrangements and strengthen the legal position of flexible workers, in particular on-call and temporary workers. The legislative proposal strongly focuses on reducing the use of zero-hour / on-call employment agreements as a standard form of employment. Zero-hour employment agreements will be replaced by a bandwidth employment agreement. Under this arrangement, a minimum and maximum number of working hours are agreed upon, with the maximum being no more than 130% of the minimum. This means that if the minimum is ten hours, the maximum may be 13 hours. Employees may refuse requests to work hours that exceed the agreed maximum. Furthermore, if an employee structurally works more hours, an employment agreement for the average hours worked arises by operation of law after 3 months.",
     "risk": "",
     "recommendation": "We recommend monitoring the progress of the More Protection for Flexible Workers Act and taking timely action after Closing to ensure that the Group is compliant with possible new legislation as per 1 January 2028",
     "protection": "geen"
    }
   ]
  }
 ]
};
export default MANUAL;
