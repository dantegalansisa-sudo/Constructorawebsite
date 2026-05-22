import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ProyectoDetalle from "@/components/proyectos/ProyectoDetalle";
import { getProyecto, proyectoSlugs } from "@/data/proyectos";

interface PageProps {
  params: { slug: string };
}

/** Genera estáticamente una página por cada proyecto. */
export function generateStaticParams() {
  return proyectoSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const proyecto = getProyecto(params.slug);
  if (!proyecto) {
    return { title: "Proyecto no encontrado | Zohapes Solution J.P" };
  }
  return {
    title: `${proyecto.name} | Proyectos – Zohapes Solution J.P`,
    description: proyecto.metaDescription,
    alternates: { canonical: `/proyectos/${proyecto.slug}` },
    openGraph: {
      title: `${proyecto.name} – Zohapes Solution J.P`,
      description: proyecto.metaDescription,
      images: [proyecto.images[0]],
    },
  };
}

export default function ProyectoPage({ params }: PageProps) {
  const proyecto = getProyecto(params.slug);
  if (!proyecto) notFound();

  return (
    <main>
      <Navbar />
      <ProyectoDetalle proyecto={proyecto} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
