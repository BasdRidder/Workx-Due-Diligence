import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig, loginEnabled } from "./auth.config";

// Zonder inloggen wordt Auth.js in de middleware niet gestart (dan is ook geen AUTH_SECRET nodig).
const guarded = loginEnabled
  ? NextAuth(authConfig).auth(req => {
      if (req.auth?.user) return;
      if (req.nextUrl.pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Niet ingelogd", code: "auth" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
    })
  : () => NextResponse.next();

export default guarded;

export const config = {
  matcher: ["/((?!api/auth|login|_next/static|_next/image|favicon.ico|workx-logo.png).*)"]
};
