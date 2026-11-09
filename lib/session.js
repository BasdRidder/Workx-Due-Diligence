import { auth, authDisabled } from "../auth";
import { getUser } from "./users";

/**
 * Geeft de ingelogde gebruiker terug, of null. De gebruiker wordt elke keer in de database opgezocht,
 * zodat een gedeactiveerd account direct geen toegang meer heeft.
 */
export async function currentUser() {
  if (authDisabled) return { name: "Lokale ontwikkelaar", email: "dev@localhost", role: "admin", mustChange: false };
  const session = await auth();
  const email = session?.user?.email;
  if (!email) return null;
  const u = await getUser(email);
  if (!u || !u.active) return null;
  return { name: u.name, email: u.email, role: u.role, mustChange: u.mustChange };
}

/** Voor API-routes: geeft [gebruiker, null] of [null, foutantwoord]. */
export async function apiUser() {
  const user = await currentUser();
  if (!user) return [null, json({ error: "Niet ingelogd", code: "auth" }, 401)];
  if (user.mustChange) return [null, json({ error: "Kies eerst een nieuw wachtwoord", code: "must_change" }, 403)];
  return [user, null];
}

export function json(data, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
}
