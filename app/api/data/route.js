import { listAll, storageMode } from "../../../lib/db";
import { apiUser, json } from "../../../lib/session";

export const dynamic = "force-dynamic";

export async function GET() {
  const [user, denied] = await apiUser();
  if (denied) return denied;
  try {
    const rows = await listAll();
    const dossiers = rows.filter(r => r.collection === "dossiers").map(r => r.data);
    const config = Object.fromEntries(rows.filter(r => r.collection === "config").map(r => [r.id, r.data]));
    return json({
      dossiers,
      settings: config.settings || null,
      library: config.library?.topics || null,
      libraryVersion: config.library?.version || 1,
      user,
      storage: storageMode,
      aiEnabled: !!process.env.ANTHROPIC_API_KEY
    });
  } catch (e) {
    console.error("data GET", e);
    if (String(e?.message || "").startsWith("DATABASE_URL")) return json({ error: "Er is nog geen database gekoppeld.", code: "database_missing" }, 503);
    return json({ error: "De database is niet bereikbaar.", code: "unavailable" }, 503);
  }
}
