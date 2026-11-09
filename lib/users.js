import { randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { getSql, memoryUsers } from "./db";

const scrypt = promisify(scryptCb);
const N = 16384, R = 8, P = 1, KEYLEN = 64;
export const MIN_PASSWORD = 12;
const MAX_FAILS = 5;
const LOCK_MINUTES = 15;

export const normEmail = e => String(e || "").trim().toLowerCase();
export const validEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 200;

export async function hashPassword(password) {
  const salt = randomBytes(16);
  const key = await scrypt(String(password), salt, KEYLEN, { N, r: R, p: P });
  return `scrypt$${N}$${R}$${P}$${salt.toString("base64")}$${key.toString("base64")}`;
}

async function verifyPassword(password, stored) {
  const parts = String(stored || "").split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;
  const [, n, r, p, salt, hash] = parts;
  const expected = Buffer.from(hash, "base64");
  const key = await scrypt(String(password), Buffer.from(salt, "base64"), expected.length, { N: +n, r: +r, p: +p });
  return key.length === expected.length && timingSafeEqual(key, expected);
}

function safeEqual(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Leesbaar tijdelijk wachtwoord zonder verwarrende tekens (0/O, 1/l/I). */
export function tempPassword() {
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(16);
  let s = "";
  for (const b of bytes) s += chars[b % chars.length];
  return s.slice(0, 4) + "-" + s.slice(4, 8) + "-" + s.slice(8, 12) + "-" + s.slice(12, 16);
}

const toUser = u => u && ({
  email: u.email, name: u.name, role: u.role, passwordHash: u.password_hash, mustChange: !!u.must_change, active: !!u.active,
  failedCount: u.failed_count || 0, lockedUntil: u.locked_until ? new Date(u.locked_until) : null,
  lastLogin: u.last_login ? new Date(u.last_login) : null, createdAt: u.created_at ? new Date(u.created_at) : null
});

export async function getUser(email) {
  const sql = await getSql();
  email = normEmail(email);
  if (!sql) return toUser(memoryUsers.get(email));
  const rows = await sql`select * from dd_users where email = ${email}`;
  return toUser(rows[0]);
}

export async function listUsers() {
  const sql = await getSql();
  const rows = sql ? await sql`select * from dd_users order by name` : [...memoryUsers.values()].sort((a, b) => a.name.localeCompare(b.name));
  return rows.map(toUser);
}

async function countUsers() {
  const sql = await getSql();
  if (!sql) return memoryUsers.size;
  const rows = await sql`select count(*)::int as n from dd_users`;
  return rows[0].n;
}

async function insertUser({ email, name, role, hash, mustChange }) {
  const sql = await getSql();
  if (!sql) {
    if (memoryUsers.has(email)) throw new Error("exists");
    memoryUsers.set(email, { email, name, role, password_hash: hash, must_change: mustChange, active: true, failed_count: 0, locked_until: null, last_login: null, created_at: new Date() });
    return;
  }
  const rows = await sql`insert into dd_users (email, name, role, password_hash, must_change)
    values (${email}, ${name}, ${role}, ${hash}, ${mustChange}) on conflict (email) do nothing returning email`;
  if (!rows.length) throw new Error("exists");
}

async function patchUser(email, f) {
  const sql = await getSql();
  if (!sql) {
    const u = memoryUsers.get(email);
    if (u) { Object.assign(u, f); if ("password_hash" in f || "last_login" in f) Object.assign(u, { failed_count: 0, locked_until: null }); }
    return;
  }
  // Vaste kolommen; waarden gaan altijd als parameter mee.
  if ("password_hash" in f) await sql`update dd_users set password_hash = ${f.password_hash}, must_change = ${f.must_change}, failed_count = 0, locked_until = null where email = ${email}`;
  if ("failed_count" in f && !("password_hash" in f)) await sql`update dd_users set failed_count = ${f.failed_count}, locked_until = ${f.locked_until ?? null} where email = ${email}`;
  if ("last_login" in f) await sql`update dd_users set last_login = ${f.last_login}, failed_count = 0, locked_until = null where email = ${email}`;
  if ("active" in f) await sql`update dd_users set active = ${f.active} where email = ${email}`;
  if ("role" in f) await sql`update dd_users set role = ${f.role} where email = ${email}`;
}

export async function createUser({ email, name, role }) {
  email = normEmail(email);
  if (!validEmail(email)) throw new Error("email");
  const pw = tempPassword();
  await insertUser({ email, name: String(name || "").trim().slice(0, 120) || email, role: role === "admin" ? "admin" : "user", hash: await hashPassword(pw), mustChange: true });
  return pw;
}

export async function resetPassword(email) {
  const pw = tempPassword();
  await patchUser(normEmail(email), { password_hash: await hashPassword(pw), must_change: true, failed_count: 0, locked_until: null });
  return pw;
}

/** Geeft "ok" terug, of de reden waarom het niet lukte. */
export async function changeOwnPassword(email, current, next) {
  const u = await getUser(email);
  if (!u || !u.active) return "account";
  if (!(await verifyPassword(current, u.passwordHash))) return "current";
  if (String(next).length < MIN_PASSWORD) return "short";
  if (safeEqual(current, next)) return "same";
  await patchUser(u.email, { password_hash: await hashPassword(next), must_change: false });
  return "ok";
}

export const setActive = (email, active) => patchUser(normEmail(email), { active: !!active });
export const setRole = (email, role) => patchUser(normEmail(email), { role: role === "admin" ? "admin" : "user" });

export async function deleteUser(email) {
  const sql = await getSql();
  email = normEmail(email);
  if (!sql) { memoryUsers.delete(email); return; }
  await sql`delete from dd_users where email = ${email}`;
}

export async function countActiveAdmins() {
  return (await listUsers()).filter(u => u.role === "admin" && u.active).length;
}

/**
 * Controleert e-mail en wachtwoord. Geeft de gebruiker terug, of null.
 * De eerste beheerder ontstaat bij de eerste login met ADMIN_EMAIL en ADMIN_PASSWORD, zolang er nog geen accounts zijn.
 */
export async function verifyLogin(emailIn, password) {
  const email = normEmail(emailIn);
  if (!email || !password) return null;
  const u = await getUser(email);
  if (!u) {
    const adminEmail = normEmail(process.env.ADMIN_EMAIL), adminPw = process.env.ADMIN_PASSWORD || "";
    if (adminEmail && adminPw.length >= MIN_PASSWORD && email === adminEmail && safeEqual(password, adminPw) && (await countUsers()) === 0) {
      const name = email.split("@")[0];
      await insertUser({ email, name, role: "admin", hash: await hashPassword(password), mustChange: true });
      await patchUser(email, { last_login: new Date() });
      return { email, name, role: "admin" };
    }
    await hashPassword(password); // gelijke rekentijd, zodat niet te zien is welke adressen bestaan
    return null;
  }
  if (!u.active) return null;
  if (u.lockedUntil && u.lockedUntil > new Date()) return null;
  if (!(await verifyPassword(password, u.passwordHash))) {
    const fails = u.failedCount + 1;
    await patchUser(email, fails >= MAX_FAILS
      ? { failed_count: 0, locked_until: new Date(Date.now() + LOCK_MINUTES * 60000) }
      : { failed_count: fails, locked_until: null });
    return null;
  }
  await patchUser(email, { last_login: new Date() });
  return { email: u.email, name: u.name, role: u.role };
}
