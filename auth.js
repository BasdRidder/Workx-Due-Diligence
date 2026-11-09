import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { verifyLogin } from "./lib/users";

export { authDisabled } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: { email: { label: "E-mailadres" }, password: { label: "Wachtwoord", type: "password" } },
      async authorize(credentials) {
        const u = await verifyLogin(credentials?.email, credentials?.password);
        return u ? { id: u.email, email: u.email, name: u.name } : null;
      }
    })
  ]
});
