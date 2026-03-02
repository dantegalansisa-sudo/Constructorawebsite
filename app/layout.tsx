import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Zohapes Solutions J.P | Constructora Multidisciplinaria – República Dominicana",
  description:
    "Empresa constructora dinámica y multidisciplinaria en República Dominicana. Construcción residencial, comercial e industrial. Gestión de proyectos, diseño estructural y acabados. Solicita tu cotización.",
  keywords:
    "constructora República Dominicana, construcción RD, Zohapes Solutions, Johangel Pérez, construcción comercial RD, remodelación Santo Domingo, ingeniería construcción",
  openGraph: {
    title: "Zohapes Solutions J.P – Construyendo el Futuro de RD",
    description:
      "Constructora multidisciplinaria con experiencia en proyectos residenciales, comerciales e industriales. Solicita cotización gratis.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
