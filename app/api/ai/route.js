import Anthropic from "@anthropic-ai/sdk";
import { apiUser, json } from "../../../lib/session";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5-5";
const EFFORT = process.env.ANTHROPIC_EFFORT || "medium";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM = `Je bent een ervaren Nederlandse arbeidsrechtadvocaat bij Workx advocaten. Je schrijft onderdelen van arbeidsrechtelijke due diligence rapporten voor ondernemingsrechtkantoren.
Regels:
- Voeg geen feiten, bedragen, namen of data toe die niet in de input staan. Laat placeholders tussen [ ] staan.
- Noem alleen wetsartikelen waarvan je zeker weet dat ze kloppen.
- Schrijf zakelijk, helder en zonder opsmuk.`;

const RATING = { rood: "hoog (rood)", oranje: "gemiddeld (oranje)", groen: "laag (groen)", info: "informatief" };
const clip = (s, n = 4000) => String(s ?? "").slice(0, n);

function findingPrompt(b) {
  const f = b.finding || {};
  const en = b.lang === "en";
  return `Herschrijf de onderstaande bevinding in het ${en ? "Engels (juridisch Brits-Engels)" : "Nederlands"}.
Stijl: ${b.style === "bondig" ? "bondig rapport in tabelvorm: kort en zakelijk, maximaal twee zinnen per veld" : "beschrijvend rapport: lopende, volledige alinea's met een korte juridische onderbouwing"}.
Onze cliënt is de ${b.role === "verkoper" ? "verkoper (vendor due diligence): formuleer aanbevelingen als herstel- of disclosure-acties" : "koper: formuleer aanbevelingen gericht op bescherming in de koopovereenkomst"}.
Gekozen maatregel: ${clip(f.protection, 100)}. Risicoclassificatie: ${RATING[f.rating] || "onbekend"}.
Antwoord met uitsluitend JSON in deze vorm: {"title":"...","facts":"...","risk":"...","recommendation":"..."}

Onderwerp: ${clip(b.topic, 200)}
Titel: ${clip(f.title, 300)}
Bevinding: ${clip(f.facts)}
Risico: ${clip(f.risk)}
Aanbeveling: ${clip(f.recommendation)}`;
}

function summaryPrompt(b) {
  const en = b.lang === "en";
  const items = (Array.isArray(b.findings) ? b.findings : []).slice(0, 200).map(f =>
    `- [${RATING[f.rating] || "?"}] ${clip(f.topic, 200)}: ${clip(f.title, 300)}. ${clip(f.facts, 1500)} Risico: ${clip(f.risk, 1500)} Aanbeveling: ${clip(f.recommendation, 1500)}`);
  return `Schrijf de management summary voor een arbeidsrechtelijk due diligence rapport in het ${en ? "Engels" : "Nederlands"}, ${b.style === "bondig" ? "in maximaal 120 woorden" : "in twee of drie alinea's van samen maximaal 250 woorden"}.
Cliënt: ${b.role === "verkoper" ? "verkoper (vendor due diligence)" : "koper"}. Doelvennootschap: ${clip(b.target, 200) || "[doelvennootschap]"}.
Begin met het algemene beeld, noem daarna de belangrijkste (hoge) risico's en de aanbevolen maatregelen. Gebruik geen opsommingstekens of kopjes; zet een lege regel tussen alinea's. Geef alleen de tekst.

Bevindingen:
${items.join("\n")}`;
}

function parseJson(text) {
  try { return JSON.parse(text); } catch {}
  const a = text.indexOf("{"), b = text.lastIndexOf("}");
  if (a >= 0 && b > a) { try { return JSON.parse(text.slice(a, b + 1)); } catch {} }
  return null;
}

export async function POST(req) {
  const [user, denied] = await apiUser();
  if (denied) return denied;
  if (!client) return json({ error: "Claude is niet ingesteld", code: "ai_disabled" }, 503);
  let body;
  try { body = await req.json(); } catch { return json({ error: "Ongeldig verzoek", code: "invalid_request" }, 400); }
  const task = body?.task;
  if (task !== "finding" && task !== "summary") return json({ error: "Onbekende taak", code: "invalid_request" }, 400);
  if (task === "summary" && !(body.findings || []).length) return json({ error: "Geen bevindingen", code: "invalid_request" }, 400);

  try {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: EFFORT },
      system: SYSTEM,
      messages: [{ role: "user", content: task === "finding" ? findingPrompt(body) : summaryPrompt(body) }]
    });
    if (response.stop_reason === "refusal") return json({ error: "Claude heeft dit verzoek afgewezen", code: "refused" }, 422);
    const text = response.content.filter(b => b.type === "text").map(b => b.text).join("").trim();
    if (!text) return json({ error: "Leeg antwoord", code: "empty_completion" }, 502);
    if (task === "summary") return json({ text });
    const data = parseJson(text);
    if (!data || typeof data !== "object") return json({ error: "Onbruikbaar antwoord", code: "invalid_json" }, 502);
    return json({ data });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return json({ error: "Te veel verzoeken", code: "rate_limited" }, 429);
    if (e instanceof Anthropic.AuthenticationError) { console.error("ai auth", e.message); return json({ error: "API-sleutel ongeldig", code: "ai_disabled" }, 503); }
    if (e instanceof Anthropic.APIError) { console.error("ai api", e.status, e.message); return json({ error: "Claude is tijdelijk niet bereikbaar", code: "upstream_error" }, 502); }
    console.error("ai", e);
    return json({ error: "Onbekende fout", code: "upstream_error" }, 500);
  }
}
