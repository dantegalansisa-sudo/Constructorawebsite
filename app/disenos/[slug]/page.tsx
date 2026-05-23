import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import DisenoDetalle from "@/components/disenos/DisenoDetalle";
import { getDiseno, disenoSlugs } from "@/data/disenos";

interface PageProps {
  params: { slug: string };
}

/** Genera estáticamente una página por cada diseño. */
export function generateStaticParams() {
  return disenoSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const diseno = getDiseno(params.slug);
  if (!diseno) {
    return { title: "Diseño no encontrado | Zohapes Solution J.P" };
  }
  return {
    title: `${diseno.name} | Diseños – Zohapes Solution J.P`,
    description: diseno.metaDescription,
    alternates: { canonical: `/disenos/${diseno.slug}` },
    openGraph: {
      title: `${diseno.name} – Zohapes Solution J.P`,
      description: diseno.metaDescription,
      images: [diseno.cover],
    },
  };
}

export default function DisenoPage({ params }: PageProps) {
  const diseno = getDiseno(params.slug);
  if (!diseno) notFound();

  return (
    <main>
      <Navbar />
      <DisenoDetalle diseno={diseno} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
