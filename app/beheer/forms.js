"use client";
import { useActionState } from "react";
import { addUser, resetUser } from "./actions";

function PasswordNotice({ state, label }) {
  if (!state) return null;
  if (state.error) return <p className="login-err" style={{ margin: 0 }}>{state.error}</p>;
  return (
    <div className="notice" role="status">
      <strong>{label} voor {state.name} ({state.email}).</strong><br />
      Tijdelijk wachtwoord: <code style={{ fontSize: 15, userSelect: "all" }}>{state.password}</code><br />
      Geef dit persoonlijk of via een apart kanaal door. Het wordt maar één keer getoond; bij de eerste keer inloggen kiest de collega een eigen wachtwoord.
    </div>
  );
}

export function AddUserForm() {
  const [state, action, pending] = useActionState(addUser, null);
  return (
    <form action={action} className="form" style={{ alignItems: "end" }}>
      <div className="field"><label htmlFor="new-name">Naam</label><input type="text" id="new-name" name="name" required maxLength={120} /></div>
      <div className="field"><label htmlFor="new-email">E-mailadres</label><input type="email" id="new-email" name="email" required /></div>
      <div className="field"><label htmlFor="new-role">Rol</label><select id="new-role" name="role" defaultValue="user"><option value="user">Gebruiker</option><option value="admin">Beheerder</option></select></div>
      <div className="field"><button className="btn primary" type="submit" disabled={pending}>{pending ? "Aanmaken…" : "Account aanmaken"}</button></div>
      <div className="field full"><PasswordNotice state={state} label="Account aangemaakt" /></div>
    </form>
  );
}

export function ResetForm({ email }) {
  const [state, action, pending] = useActionState(resetUser, null);
  return (
    <form action={action} style={{ display: "contents" }}>
      <input type="hidden" name="email" value={email} />
      <button className="btn sm" type="submit" disabled={pending}>{pending ? "Bezig…" : "Nieuw wachtwoord"}</button>
      {state ? <div style={{ flexBasis: "100%" }}><PasswordNotice state={state} label="Nieuw tijdelijk wachtwoord" /></div> : null}
    </form>
  );
}
