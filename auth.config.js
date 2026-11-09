/**
 * Deel van de inlogconfiguratie dat ook in de middleware (edge) draait.
 * Hier staan geen providers of database-aanroepen; die zitten in auth.js.
 */

// Inloggen overslaan kan alleen lokaal; in productie (ook op Vercel) wordt dit genegeerd.
export const authDisabled = process.env.AUTH_DISABLED === "true" && process.env.NODE_ENV !== "production";

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
