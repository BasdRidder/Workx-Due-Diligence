import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { authDisabled, signIn } from "../../auth";
import { currentUser } from "../../lib/session";
import { MIN_PASSWORD, setupStatus } from "../../lib/users";

export const dynamic = "force-dynamic";
export const metadata = { title: "Inloggen · Workx Due Diligence" };

async function login(formData) {
  "use server";
  try {
    await signIn("credentials", {
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || ""),
      redirectTo: "/"
    });
  } catch (e) {
    if (e instanceof AuthError) {
      if (e.type === "CredentialsSignin") redirect("/login?error=1");
      console.error("login", e.type, e.cause?.err || e);
      redirect("/login?error=server");
    }
    throw e;
  }
}

/** Controlelijst die alleen verschijnt zolang er nog geen accounts zijn, of als de server niet goed is ingesteld. */
function SetupCheck({ st }) {
  const items = [
    [st.secret, "AUTH_SECRET is ingesteld"],
    [st.database, "Database is gekoppeld (DATABASE_URL)"],
    [st.databaseOk, "Database is bereikbaar"],
    [st.adminEmail, "ADMIN_EMAIL bevat een geldig e-mailadres"],
    [st.adminPassword, `ADMIN_PASSWORD heeft minstens ${MIN_PASSWORD} tekens`]
  ];
  return (
    <div className="notice warn" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <strong>Eerste inrichting: controle van de instellingen</strong>
      <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 3 }}>
        {items.map(([ok, label]) => <li key={label}>{ok ? "✓" : "✗"} {label}</li>)}
      </ul>
      <span>Log in met het e-mailadres uit ADMIN_EMAIL en het wachtwoord uit ADMIN_PASSWORD. Na het wijzigen van instellingen in Vercel moet je opnieuw deployen.</span>
    </div>
  );
}

export default async function LoginPage({ searchParams }) {
  if (authDisabled) redirect("/");
  // Controle via de database: een verwijderd of gedeactiveerd account krijgt gewoon het inlogformulier.
  let me = null;
  try { me = await currentUser(); } catch {}
  if (me) redirect("/");
  const sp = await searchParams;
  const st = await setupStatus();
  const setupMode = st.users === 0 || !st.databaseOk || !st.secret;
  return (
    <main className="login">
      <div className="login-card">
        <img src="/workx-logo.png" alt="Workx advocaten" />
        <h1>Due diligence</h1>
        <p>Log in met je e-mailadres en wachtwoord voor deze tool. Dit is een apart account, niet je Vercel-, Claude- of Microsoft-account.</p>
        {sp?.error === "1" ? <p className="login-err">E-mailadres of wachtwoord klopt niet. Na 5 mislukte pogingen wordt het account 15 minuten geblokkeerd.</p> : null}
        {sp?.error && sp.error !== "1" ? <p className="login-err">Inloggen is mislukt door een serverfout. Controleer de instellingen hieronder of de logs in Vercel.</p> : null}
        {sp?.changed ? <p>Je wachtwoord is gewijzigd. Log opnieuw in.</p> : null}
        {setupMode ? <SetupCheck st={st} /> : null}
        <form action={login} className="login-form">
          <div className="field"><label htmlFor="email">E-mailadres</label><input type="email" id="email" name="email" autoComplete="username" required autoFocus /></div>
          <div className="field"><label htmlFor="password">Wachtwoord</label><input type="password" id="password" name="password" autoComplete="current-password" required /></div>
          <button className="btn primary" type="submit">Inloggen</button>
        </form>
        <p className="small">Wachtwoord vergeten? Vraag de beheerder om een nieuw tijdelijk wachtwoord.</p>
      </div>
    </main>
  );
}
