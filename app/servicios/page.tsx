import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ServiciosIndex from "@/components/servicios/ServiciosIndex";

export const metadata: Metadata = {
  title:
    "Servicios | Zohapes Solutions J.P – Constructora en República Dominicana",
  description:
    "Catálogo de servicios de Zohapes Solutions J.P.: construcción y ampliación, estructuras permanentes y prefabricadas, movimiento de tierra, mantenimiento y servicios de ingeniería.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de construcción – Zohapes Solutions J.P",
    description:
      "Seis líneas de servicio que cubren el ciclo completo de una obra, del suelo a la entrega.",
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />
      <ServiciosIndex />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
