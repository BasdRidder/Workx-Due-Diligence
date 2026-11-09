import { deleteDoc, putDoc } from "../../../../../lib/db";
import { currentUser, json } from "../../../../../lib/session";

export const dynamic = "force-dynamic";
const MAX_BYTES = 900_000;

function check(collection, id) {
  if (collection === "dossiers") return /^[A-Za-z0-9_-]{1,80}$/.test(id);
  if (collection === "config") return id === "settings" || id === "library";
  return false;
}

export async function PUT(req, { params }) {
  const user = await currentUser();
  if (!user) return json({ error: "Niet ingelogd", code: "auth" }, 401);
  const { collection, id } = await params;
  if (!check(collection, id)) return json({ error: "Onbekend document", code: "invalid_argument" }, 400);
  const raw = await req.text();
  if (raw.length > MAX_BYTES) return json({ error: "Document is te groot", code: "quota_exceeded" }, 413);
  let data;
  try { data = JSON.parse(raw); } catch { return json({ error: "Ongeldige gegevens", code: "invalid_argument" }, 400); }
  if (!data || typeof data !== "object" || Array.isArray(data)) return json({ error: "Ongeldige gegevens", code: "invalid_argument" }, 400);
  if (collection === "dossiers" && data.id !== id) return json({ error: "Id komt niet overeen", code: "invalid_argument" }, 400);
  try {
    await putDoc(collection, id, data, user.email);
    return new Response(null, { status: 204 });
  } catch (e) {
    console.error("docs PUT", e);
    return json({ error: "Opslaan mislukt", code: "unavailable" }, 503);
  }
}

export async function DELETE(req, { params }) {
  const user = await currentUser();
  if (!user) return json({ error: "Niet ingelogd", code: "auth" }, 401);
  const { collection, id } = await params;
  if (collection !== "dossiers" || !check(collection, id)) return json({ error: "Onbekend document", code: "invalid_argument" }, 400);
  try {
    await deleteDoc(collection, id);
    return new Response(null, { status: 204 });
  } catch (e) {
    console.error("docs DELETE", e);
    return json({ error: "Verwijderen mislukt", code: "unavailable" }, 503);
  }
}
