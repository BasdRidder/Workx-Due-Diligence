import { redirect } from "next/navigation";
import { currentUser } from "../../lib/session";
import { MIN_PASSWORD } from "../../lib/users";
import PasswordForm from "./PasswordForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Account · Workx Due Diligence" };

export default async function AccountPage() {
  const user = await currentUser();
  if (!user) redirect("/login");
  return (
    <main className="login">
      <div className="login-card">
        <img src="/workx-logo.png" alt="Workx advocaten" />
        <h1>{user.mustChange ? "Kies je wachtwoord" : "Wachtwoord wijzigen"}</h1>
        <p>{user.mustChange
          ? `Welkom, ${user.name}. Je bent ingelogd met een tijdelijk wachtwoord. Kies een eigen wachtwoord om verder te gaan.`
          : `Ingelogd als ${user.email}.`}</p>
        <PasswordForm min={MIN_PASSWORD} />
        <div className="row">
          {user.mustChange ? null : <a className="btn ghost" href="/">Terug naar de tool</a>}
          <a className="btn ghost" href="/logout">Uitloggen</a>
        </div>
      </div>
    </main>
  );
}
