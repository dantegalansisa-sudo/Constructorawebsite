import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { proyectos } from "@/data/proyectos";

const WHATSAPP = "https://wa.me/message/NVBS7GYDP4XLJ1";

export const metadata: Metadata = {
  title:
    "Portafolio | Zohapes Solution J.P – Obras de construcción en República Dominicana",
  description:
    "Portafolio de obras de Zohapes Solution J.P.: edificaciones, estructuras metálicas, naves industriales y proyectos institucionales ejecutados en República Dominicana.",
  alternates: { canonical: "/portafolio" },
  openGraph: {
    title: "Portafolio de proyectos – Zohapes Solution J.P",
    description:
      "Obras reales ejecutadas por Zohapes Solution J.P. en República Dominicana. Del plano a la entrega.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function PortafolioPage() {
  const totalProyectos = proyectos.length;

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0f1923] pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#F5A800]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#F5A800]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F5A800]/30 bg-[#F5A800]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5A800]">
            <Briefcase className="size-3.5" />
            Portafolio
          </span>

          <h1
            className="mt-6 text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Obras que hablan
            <br />
            <span className="text-[#F5A800]">por nosotros</span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#F5A800]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#d1d5db] md:text-lg">
            {totalProyectos} proyectos ejecutados y en marcha por Zohapes
            Solution J.P. en República Dominicana — del plano a la entrega,
            bajo la dirección técnica del Ing. Johangel Pérez P.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-7 py-3.5 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
            >
              <MessageCircle className="size-4" />
              Cotizar mi proyecto
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-7 py-3.5 font-bold text-white transition-colors duration-300 hover:border-[#F5A800] hover:text-[#F5A800]"
            >
              Ver servicios
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectsSection hideHeader />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
