import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ServicioDetalle from "@/components/servicios/ServicioDetalle";
import { servicios, getServicio, servicioSlugs } from "@/data/servicios";

interface PageProps {
  params: { slug: string };
}

/** Genera estáticamente una página por cada servicio del catálogo. */
export function generateStaticParams() {
  return servicioSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const servicio = getServicio(params.slug);
  if (!servicio) {
    return { title: "Servicio no encontrado | Zohapes Solution J.P" };
  }
  return {
    title: `${servicio.name} | Zohapes Solution J.P`,
    description: servicio.metaDescription,
    alternates: { canonical: `/servicios/${servicio.slug}` },
    openGraph: {
      title: `${servicio.name} – Zohapes Solution J.P`,
      description: servicio.metaDescription,
      images: [servicio.images[0]],
    },
  };
}

export default function ServicioPage({ params }: PageProps) {
  const servicio = getServicio(params.slug);
  if (!servicio) notFound();

  const relacionados = servicios
    .filter((s) => s.slug !== servicio.slug)
    .slice(0, 3);

  return (
    <main>
      <Navbar />
      <ServicioDetalle servicio={servicio} relacionados={relacionados} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
