"use client";
import { useActionState } from "react";
import { changePassword } from "./actions";

export default function PasswordForm({ min }) {
  const [state, action, pending] = useActionState(changePassword, null);
  return (
    <form action={action} className="login-form">
      <div className="field"><label htmlFor="current">Huidig of tijdelijk wachtwoord</label><input type="password" id="current" name="current" autoComplete="current-password" required /></div>
      <div className="field"><label htmlFor="next">Nieuw wachtwoord</label><input type="password" id="next" name="next" autoComplete="new-password" minLength={min} required /><span className="hint">Minstens {min} tekens. Een zin van een paar woorden werkt goed.</span></div>
      <div className="field"><label htmlFor="repeat">Herhaal nieuw wachtwoord</label><input type="password" id="repeat" name="repeat" autoComplete="new-password" minLength={min} required /></div>
      {state?.error ? <p className="login-err">{state.error}</p> : null}
      <button className="btn primary" type="submit" disabled={pending}>{pending ? "Opslaan…" : "Wachtwoord opslaan"}</button>
    </form>
  );
}
