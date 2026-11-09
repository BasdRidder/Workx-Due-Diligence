"use client";
import { useEffect } from "react";

export default function DDApp() {
  useEffect(() => {
    import("../lib/client/app.js").then(m => m.start());
  }, []);
  return (
    <>
      <div className="app">
        <aside className="side" id="side" />
        <main id="main"><div className="wrap"><p className="muted">Laden…</p></div></main>
      </div>
      <div className="toast" id="toast" hidden />
    </>
  );
}
