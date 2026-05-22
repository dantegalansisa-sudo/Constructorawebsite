"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Instagram,
} from "lucide-react";
import { servicios } from "@/data/servicios";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Foto {
  src: string;
  categoria: string;
  slug: string;
}

// Galería construida a partir de las fotos oficiales de cada servicio.
const galeria: Foto[] = servicios.flatMap((s) =>
  s.images.map((src) => ({ src, categoria: s.shortName, slug: s.slug }))
);

const filtros = [
  { label: "Todos", value: "Todos" },
  ...servicios.map((s) => ({ label: s.shortName, value: s.shortName })),
];

export default function ProjectsSection() {
  const [filtro, setFiltro] = useState("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const fotos = useMemo(
    () =>
      filtro === "Todos"
        ? galeria
        : galeria.filter((f) => f.categoria === filtro),
    [filtro]
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImg = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % fotos.length)),
    [fotos.length]
  );
  const prevImg = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + fotos.length) % fotos.length
      ),
    [fotos.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, closeLightbox, nextImg, prevImg]);

  const activa = lightbox !== null ? fotos[lightbox] : null;
  const servicioActivo = activa
    ? servicios.find((s) => s.slug === activa.slug)
    : null;

  return (
    <section id="proyectos" className="bg-[#0f1923] py-[70px] md:py-[90px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
            Portafolio
          </p>
          <h2
            className="text-center text-4xl font-extrabold uppercase text-white md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Nuestros Proyectos
          </h2>
          <div className="mx-auto mb-4 mt-4 h-1 w-16 bg-[#F5A800]" />
          <p className="mx-auto mb-10 max-w-2xl text-[#8b95a1]">
            Una muestra real de obras y trabajos ejecutados en nuestras seis
            áreas de servicio. Filtra por especialidad y explora cada imagen.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {filtros.map((f) => {
            const activo = filtro === f.value;
            const count =
              f.value === "Todos"
                ? galeria.length
                : galeria.filter((g) => g.categoria === f.value).length;
            return (
              <button
                key={f.value}
                onClick={() => setFiltro(f.value)}
                className={`rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activo
                    ? "bg-[#F5A800] text-black"
                    : "border border-[#2a3441] text-[#8b95a1] hover:border-[#F5A800] hover:text-[#F5A800]"
                }`}
              >
                {f.label}
                <span
                  className={`ml-1.5 ${
                    activo ? "text-black/60" : "text-[#5a6573]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photo grid */}
        <motion.div
          key={filtro}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
        >
          {fotos.map((foto, i) => (
            <motion.button
              key={foto.src}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
              }}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-[#2a3441]"
              aria-label={`Ampliar foto de ${foto.categoria}`}
            >
              <Image
                src={foto.src}
                alt={`Obra de ${foto.categoria}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* permanent bottom gradient + label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent p-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A800]">
                  {foto.categoria}
                </span>
              </div>
              {/* hover state */}
              <span className="absolute inset-0 flex items-center justify-center bg-[#0f1923]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="size-7 text-white" />
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://www.instagram.com/zohapes_solutions_j.p/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-7 py-3.5 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
          >
            <Instagram className="size-4" />
            Ver más en Instagram
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-7 py-3.5 font-bold text-white transition-colors duration-300 hover:border-[#F5A800] hover:text-[#F5A800]"
          >
            Explorar Servicios
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activa && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F5A800] hover:text-black"
              aria-label="Cerrar"
            >
              <X className="size-6" />
            </button>

            {fotos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImg();
                }}
                className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F5A800] hover:text-black md:left-6"
                aria-label="Anterior"
              >
                <ChevronLeft className="size-6" />
              </button>
            )}

            <motion.div
              key={activa.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease }}
              className="flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[68vh] w-[88vw] max-w-4xl">
                <Image
                  src={activa.src}
                  alt={`Obra de ${activa.categoria}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              {/* caption */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                <span className="rounded-full bg-[#F5A800] px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  {activa.categoria}
                </span>
                {servicioActivo && (
                  <Link
                    href={`/servicios/${servicioActivo.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-[#F5A800]"
                  >
                    Ver servicio de {servicioActivo.shortName}
                    <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </div>
            </motion.div>

            {fotos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImg();
                }}
                className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F5A800] hover:text-black md:right-6"
                aria-label="Siguiente"
              >
                <ChevronRight className="size-6" />
              </button>
            )}

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              {(lightbox ?? 0) + 1} / {fotos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
