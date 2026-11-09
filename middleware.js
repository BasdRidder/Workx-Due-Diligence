import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig, authDisabled } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth(req => {
  if (authDisabled || req.auth?.user) return;
  if (req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Niet ingelogd", code: "auth" }, { status: 401 });
  }
  return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
});

export const config = {
  matcher: ["/((?!api/auth|login|_next/static|_next/image|favicon.ico|workx-logo.png).*)"]
};
