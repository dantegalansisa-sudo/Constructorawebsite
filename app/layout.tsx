import type { Metadata } from "next";
import "./globals.css";
import { empresa } from "@/data/empresa";

const SITE_URL = "https://www.zohapessolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Zohapes Solution J.P | Constructora Multidisciplinaria – República Dominicana",
    template: "%s | Zohapes Solution J.P",
  },
  description:
    "Empresa constructora dinámica y multidisciplinaria en República Dominicana. Construcción residencial, comercial e industrial, diseño arquitectónico, remodelación y mantenimiento. Solicita tu cotización.",
  keywords: [
    "Zohapes Solution",
    "Zohapes Solutions J.P",
    "constructora República Dominicana",
    "constructora Santo Domingo",
    "construcción RD",
    "Johangel Pérez",
    "construcción comercial RD",
    "remodelación Santo Domingo",
    "ingeniería construcción",
    "diseño arquitectónico RD",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: SITE_URL,
    siteName: "Zohapes Solution J.P",
    title: "Zohapes Solution J.P – Construyendo el Futuro de RD",
    description:
      "Constructora multidisciplinaria con experiencia en proyectos residenciales, comerciales e industriales. Solicita cotización gratis.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Zohapes Solution J.P — Constructora multidisciplinaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohapes Solution J.P – Construyendo el Futuro de RD",
    description:
      "Constructora multidisciplinaria con experiencia en proyectos residenciales, comerciales e industriales.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Zohapes Solution J.P, S.R.L.",
  alternateName: ["Zohapes Solutions J.P", "Zohapes Solution"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/hero-bg.jpg`,
  email: empresa.email,
  description:
    "Constructora multidisciplinaria en República Dominicana: construcción, diseño arquitectónico, remodelación, mantenimiento e ingeniería.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Primera #102, Reparto La Rosa",
    addressLocality: "Santo Domingo",
    addressCountry: "DO",
  },
  areaServed: {
    "@type": "Country",
    name: "República Dominicana",
  },
  identifier: [
    { "@type": "PropertyValue", propertyID: "RNC", value: empresa.rnc },
    { "@type": "PropertyValue", propertyID: "RPE", value: empresa.rpe },
  ],
  sameAs: ["https://www.instagram.com/zohapes_solutions_j.p/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
