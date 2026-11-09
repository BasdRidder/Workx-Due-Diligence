import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
const memory = (globalThis.__workxDdMemory ||= new Map());
let sql = null;
let ready = null;

/** Zonder database draait de app alleen lokaal (gegevens in het geheugen). In productie is een database verplicht. */
export const storageMode = url ? "database" : "memory";

async function init() {
  if (!url) {
    if (process.env.NODE_ENV === "production") throw new Error("DATABASE_URL ontbreekt. Koppel een Neon-database in Vercel.");
    return;
  }
  sql = neon(url);
  await sql`create table if not exists dd_docs (
    collection text not null,
    id text not null,
    data jsonb not null,
    updated_at timestamptz not null default now(),
    updated_by text,
    primary key (collection, id)
  )`;
}

function ensure() {
  return (ready ||= init().catch(e => { ready = null; throw e; }));
}

export async function listAll() {
  await ensure();
  if (!sql) return [...memory.values()].map(r => ({ collection: r.collection, id: r.id, data: r.data }));
  return await sql`select collection, id, data from dd_docs`;
}

export async function putDoc(collection, id, data, by) {
  await ensure();
  if (!sql) { memory.set(collection + "/" + id, { collection, id, data, by }); return; }
  await sql`insert into dd_docs (collection, id, data, updated_at, updated_by)
    values (${collection}, ${id}, ${JSON.stringify(data)}::jsonb, now(), ${by})
    on conflict (collection, id) do update set data = excluded.data, updated_at = now(), updated_by = excluded.updated_by`;
}

export async function deleteDoc(collection, id) {
  await ensure();
  if (!sql) { memory.delete(collection + "/" + id); return; }
  await sql`delete from dd_docs where collection = ${collection} and id = ${id}`;
}
