import "./globals.css";
import "./dashboard.css";

export const metadata = {
  title: "Workx Due Diligence",
  description: "Dossiers, fee quotes en rapporten voor arbeidsrechtelijke due diligence",
  robots: { index: false, follow: false }
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
