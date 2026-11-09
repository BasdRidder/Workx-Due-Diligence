import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { authDisabled, signIn } from "../../auth";
import { currentUser } from "../../lib/session";

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
    if (e instanceof AuthError) redirect("/login?error=1");
    throw e;
  }
}

export default async function LoginPage({ searchParams }) {
  if (authDisabled) redirect("/");
  // Controle via de database: een verwijderd of gedeactiveerd account krijgt gewoon het inlogformulier.
  if (await currentUser()) redirect("/");
  const sp = await searchParams;
  return (
    <main className="login">
      <div className="login-card">
        <img src="/workx-logo.png" alt="Workx advocaten" />
        <h1>Due diligence</h1>
        <p>Log in met je e-mailadres en wachtwoord.</p>
        {sp?.error ? <p className="login-err">E-mailadres of wachtwoord klopt niet. Na 5 mislukte pogingen wordt het account 15 minuten geblokkeerd.</p> : null}
        {sp?.changed ? <p>Je wachtwoord is gewijzigd. Log opnieuw in.</p> : null}
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
