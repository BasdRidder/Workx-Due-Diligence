import { auth, authDisabled, emailAllowed } from "../auth";

/** Geeft de ingelogde gebruiker terug, of null. API-routes controleren dit zelf nog eens naast de middleware. */
export async function currentUser() {
  if (authDisabled) return { name: "Lokale ontwikkelaar", email: "dev@localhost" };
  const session = await auth();
  const u = session?.user;
  if (!u || !emailAllowed(u.email)) return null;
  return { name: u.name || u.email, email: u.email };
}

export function json(data, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
}
