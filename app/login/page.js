import { redirect } from "next/navigation";
import { auth, authDisabled, signIn } from "../../auth";

export const dynamic = "force-dynamic";
export const metadata = { title: "Inloggen · Workx Due Diligence" };

export default async function LoginPage({ searchParams }) {
  if (authDisabled) redirect("/");
  const session = await auth();
  if (session?.user) redirect("/");
  const sp = await searchParams;
  return (
    <main className="login">
      <div className="login-card">
        <img src="/workx-logo.png" alt="Workx advocaten" />
        <h1>Due diligence</h1>
        <p>Log in met je Workx Microsoft-account om dossiers, fee quotes en rapporten te openen.</p>
        {sp?.error ? <p className="login-err">Inloggen is niet gelukt. Gebruik je Workx-account, of vraag de beheerder om toegang.</p> : null}
        <form action={async () => { "use server"; await signIn("microsoft-entra-id", { redirectTo: "/" }); }}>
          <button className="btn primary" type="submit">Inloggen met Microsoft</button>
        </form>
      </div>
    </main>
  );
}
