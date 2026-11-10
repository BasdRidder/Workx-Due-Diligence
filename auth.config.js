/**
 * Deel van de inlogconfiguratie dat ook in de middleware (edge) draait.
 * Hier staan geen providers of database-aanroepen; die zitten in auth.js.
 */

// Inloggen staat uit totdat LOGIN_ENABLED=true is ingesteld (in Vercel: Settings → Environment Variables).
// Zolang het uit staat, is de tool open voor iedereen met de link; de app toont dan een waarschuwing.
// Lokaal zet AUTH_DISABLED=true het inloggen altijd uit.
export const loginEnabled = process.env.LOGIN_ENABLED === "true" && !(process.env.AUTH_DISABLED === "true" && process.env.NODE_ENV !== "production");
export const authDisabled = !loginEnabled;

export const authConfig = {
  pages: { signIn: "/login", error: "/login" },
  session: { strategy: "jwt", maxAge: 60 * 60 * 12 },
  trustHost: true,
  providers: [],
  callbacks: {
    jwt({ token, user }) {
      if (user) { token.email = user.email; token.name = user.name; }
      return token;
    },
    session({ session, token }) {
      if (session.user) { session.user.email = token.email; session.user.name = token.name; }
      return session;
    }
  }
};
