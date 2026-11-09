"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { currentUser } from "../../lib/session";
import { countActiveAdmins, createUser, deleteUser, getUser, normEmail, resetPassword, setActive, setRole } from "../../lib/users";

async function requireAdmin() {
  const me = await currentUser();
  if (!me) redirect("/login");
  if (me.mustChange) redirect("/account");
  if (me.role !== "admin") redirect("/");
  return me;
}

export async function addUser(prev, formData) {
  await requireAdmin();
  const email = normEmail(formData.get("email"));
  const name = String(formData.get("name") || "").trim();
  const role = formData.get("role") === "admin" ? "admin" : "user";
  if (!name) return { error: "Vul een naam in." };
  try {
    const password = await createUser({ email, name, role });
    revalidatePath("/beheer");
    return { ok: true, email, name, password };
  } catch (e) {
    if (e.message === "email") return { error: "Dit is geen geldig e-mailadres." };
    if (e.message === "exists") return { error: "Er bestaat al een account met dit e-mailadres." };
    console.error("addUser", e);
    return { error: "Aanmaken is niet gelukt." };
  }
}

export async function resetUser(prev, formData) {
  await requireAdmin();
  const email = normEmail(formData.get("email"));
  const u = await getUser(email);
  if (!u) return { error: "Account niet gevonden." };
  const password = await resetPassword(email);
  revalidatePath("/beheer");
  return { ok: true, email, name: u.name, password };
}

/** Onderhoud aan een account: activeren, deactiveren, rol wijzigen of verwijderen. */
export async function updateUser(formData) {
  const me = await requireAdmin();
  const email = normEmail(formData.get("email"));
  const op = String(formData.get("op") || "");
  const u = await getUser(email);
  if (!u) return;
  const isSelf = email === me.email;
  const lastAdmin = u.role === "admin" && u.active && (await countActiveAdmins()) <= 1;
  if (op === "deactivate" && !isSelf && !lastAdmin) await setActive(email, false);
  if (op === "activate") await setActive(email, true);
  if (op === "make-admin") await setRole(email, "admin");
  if (op === "make-user" && !isSelf && !lastAdmin) await setRole(email, "user");
  if (op === "delete" && !isSelf && !lastAdmin && formData.get("confirm") === "ja") await deleteUser(email);
  revalidatePath("/beheer");
}
