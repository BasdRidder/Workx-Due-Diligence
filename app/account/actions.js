"use server";
import { redirect } from "next/navigation";
import { currentUser } from "../../lib/session";
import { changeOwnPassword, MIN_PASSWORD } from "../../lib/users";

const REASONS = {
  current: "Je huidige (of tijdelijke) wachtwoord klopt niet.",
  short: `Het nieuwe wachtwoord moet minstens ${MIN_PASSWORD} tekens hebben.`,
  same: "Kies een ander wachtwoord dan je huidige.",
  account: "Je account is niet (meer) actief.",
  repeat: "De twee nieuwe wachtwoorden zijn niet gelijk."
};

export async function changePassword(prev, formData) {
  const user = await currentUser();
  if (!user) redirect("/login");
  const current = String(formData.get("current") || "");
  const next = String(formData.get("next") || "");
  if (next !== String(formData.get("repeat") || "")) return { error: REASONS.repeat };
  const result = await changeOwnPassword(user.email, current, next);
  if (result !== "ok") return { error: REASONS[result] || "Wijzigen is niet gelukt." };
  redirect("/");
}
