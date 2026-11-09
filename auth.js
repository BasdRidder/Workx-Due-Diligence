import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";

const allowedDomains = (process.env.ALLOWED_EMAIL_DOMAINS || "")
  .split(",").map(s => s.trim().toLowerCase()).filter(Boolean);

// Inloggen overslaan kan alleen lokaal; in productie (ook op Vercel) wordt dit genegeerd.
export const authDisabled = process.env.AUTH_DISABLED === "true" && process.env.NODE_ENV !== "production";

export function emailAllowed(email) {
  const e = String(email || "").toLowerCase();
  if (!allowedDomains.length) return !!e;
  return allowedDomains.some(d => e.endsWith("@" + d));
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER
    })
  ],
  pages: { signIn: "/login", error: "/login" },
  session: { strategy: "jwt", maxAge: 60 * 60 * 12 },
  trustHost: true,
  callbacks: {
    signIn({ user, profile }) {
      return emailAllowed(user?.email || profile?.email || profile?.preferred_username);
    }
  }
});
