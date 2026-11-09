import { redirect } from "next/navigation";
import { currentUser } from "../../lib/session";
import { listUsers } from "../../lib/users";
import { updateUser } from "./actions";
import { AddUserForm, ResetForm } from "./forms";

export const dynamic = "force-dynamic";
export const metadata = { title: "Gebruikers · Workx Due Diligence" };

const fmt = d => d ? d.toLocaleString("nl-NL", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Europe/Amsterdam" }) : "—";

function Op({ email, op, label, danger, confirm }) {
  return (
    <form action={updateUser} style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="op" value={op} />
      {confirm ? <label className="small" style={{ display: "inline-flex", gap: 4, alignItems: "center" }}><input type="checkbox" name="confirm" value="ja" required /> zeker</label> : null}
      <button className={"btn sm" + (danger ? " danger" : "")} type="submit">{label}</button>
    </form>
  );
}

export default async function BeheerPage() {
  const me = await currentUser();
  if (!me) redirect("/login");
  if (me.mustChange) redirect("/account");
  if (me.role !== "admin") redirect("/");
  const users = await listUsers();
  const now = new Date();
  return (
    <main style={{ paddingBlock: "28px 64px" }}>
      <div className="wrap">
        <div><a className="btn ghost sm" href="/">← Terug naar de tool</a></div>
        <header className="page-head"><div><p className="eyebrow">Toegang tot de tool</p><h1>Gebruikers<span className="arrow" aria-hidden="true">↘</span></h1></div></header>
        <div className="card">
          <div className="card-head"><h2>Collega toevoegen</h2></div>
          <AddUserForm />
        </div>
        <div className="table-wrap">
          <table className="list" style={{ minWidth: 860 }}>
            <thead><tr><th>Naam</th><th>Rol</th><th>Status</th><th>Laatst ingelogd</th><th>Acties</th></tr></thead>
            <tbody>
              {users.map(u => {
                const self = u.email === me.email;
                const locked = u.lockedUntil && u.lockedUntil > now;
                return (
                  <tr key={u.email} style={{ cursor: "default" }}>
                    <td><div className="name">{u.name}{self ? " (jij)" : ""}</div><div className="small muted">{u.email}</div></td>
                    <td><span className="tag">{u.role === "admin" ? "Beheerder" : "Gebruiker"}</span></td>
                    <td>
                      {!u.active ? <span className="pill st-afgewezen">Gedeactiveerd</span>
                        : locked ? <span className="pill st-lopend">Tijdelijk geblokkeerd</span>
                        : u.mustChange ? <span className="pill st-offerte">Wacht op eerste login</span>
                        : <span className="pill st-definitief">Actief</span>}
                    </td>
                    <td className="small">{fmt(u.lastLogin)}</td>
                    <td><div className="row">
                      <ResetForm email={u.email} />
                      {u.role === "admin"
                        ? (self ? null : <Op email={u.email} op="make-user" label="Maak gebruiker" />)
                        : <Op email={u.email} op="make-admin" label="Maak beheerder" />}
                      {self ? null : u.active
                        ? <Op email={u.email} op="deactivate" label="Deactiveren" />
                        : <Op email={u.email} op="activate" label="Activeren" />}
                      {self ? null : <Op email={u.email} op="delete" label="Verwijderen" danger confirm />}
                    </div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="hint">Een gedeactiveerd account kan direct niet meer inloggen en niets meer opslaan. Na 5 mislukte inlogpogingen wordt een account 15 minuten geblokkeerd; een nieuw tijdelijk wachtwoord heft de blokkade op.</p>
      </div>
    </main>
  );
}
