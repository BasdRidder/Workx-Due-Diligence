import { redirect } from "next/navigation";
import { signOut } from "../../auth";

import { authDisabled } from "../../auth";

export const dynamic = "force-dynamic";
export const metadata = { title: "Uitloggen · Workx Due Diligence" };

export default function LogoutPage() {
  if (authDisabled) redirect("/");
  return (
    <main className="login">
      <div className="login-card">
        <img src="/workx-logo.png" alt="Workx advocaten" />
        <h1>Uitloggen</h1>
        <p>Je wordt afgemeld bij de due diligence-tool.</p>
        <form action={async () => { "use server"; await signOut({ redirectTo: "/login" }); }}>
          <button className="btn primary" type="submit">Uitloggen</button>
        </form>
        <a className="btn ghost" href="/">Terug naar de tool</a>
      </div>
    </main>
  );
}
