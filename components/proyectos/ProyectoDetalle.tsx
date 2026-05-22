"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  X,
  ArrowRight,
  ArrowUpRight,
  Plus,
  MapPin,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import type { Proyecto } from "@/data/proyectos";
import { getServicio } from "@/data/servicios";
import { servicioIcons } from "@/components/servicios/icons";

const WHATSAPP = "https://wa.me/message/NVBS7GYDP4XLJ1";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function ProyectoDetalle({ proyecto }: { proyecto: Proyecto }) {
  const servicio = getServicio(proyecto.servicioRelacionado);
  const ServIcon = servicio ? servicioIcons[servicio.icon] : null;
  const waMessage = encodeURIComponent(
    `Hola, vi el proyecto "${proyecto.name}" y quisiera mas informacion sobre sus servicios.`
  );

  // ---------------- lightbox ----------------
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImg = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i + 1) % proyecto.images.length
      ),
    [proyecto.images.length]
  );
  const prevImg = useCallback(
    () =>
      setLightbox((i) =>
        i === null
          ? i
          : (i - 1 + proyecto.images.length) % proyecto.images.length
      ),
    [proyecto.images.length]
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

  return (
    <article>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#0f1923] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F5A800]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.nav
              variants={fadeUp}
              className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-[#8b95a1]"
              aria-label="Ruta de navegación"
            >
              <Link href="/" className="transition hover:text-[#F5A800]">
                Inicio
              </Link>
              <ChevronRight className="size-3.5" />
              <Link
                href="/#proyectos"
                className="transition hover:text-[#F5A800]"
              >
                Proyectos
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-[#F5A800]">{proyecto.name}</span>
            </motion.nav>

            <motion.div variants={fadeUp} className="mb-5 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-[#F5A800]/30 bg-[#F5A800]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F5A800]">
                {proyecto.categoria}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#22C55E]">
                <CheckCircle2 className="size-3.5" />
                {proyecto.estado}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl"
            >
              {proyecto.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg font-medium text-[#F5A800]"
            >
              {proyecto.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#d1d5db]"
            >
              <MapPin className="size-4 text-[#F5A800]" />
              {proyecto.ubicacion}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href={`${WHATSAPP}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-7 py-3.5 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
              >
                Solicitar Cotización
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-7 py-3.5 font-bold text-white transition-colors duration-300 hover:border-[#F5A800] hover:text-[#F5A800]"
              >
                Ver Galería
              </a>
            </motion.div>
          </motion.div>

          {/* feature image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3441] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src={proyecto.cover}
                alt={proyecto.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-2xl border-2 border-[#F5A800]/40" />
          </motion.div>
        </div>
      </section>

      {/* ========================= EL PROYECTO ========================= */}
      <section className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {/* description */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
              El proyecto
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#0f1923] md:text-4xl">
              Una obra industrial de escala
            </h2>
            <div className="my-5 h-1 w-12 bg-[#F5A800]" />
            <div className="space-y-4">
              {proyecto.descripcion.map((p, i) => (
                <p key={i} className="leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ficha técnica */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-2xl bg-[#0f1923] p-7 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-white">
                Ficha técnica
              </h3>
              <div className="my-4 h-0.5 w-8 bg-[#F5A800]" />
              <dl className="divide-y divide-[#2a3441]">
                {proyecto.ficha.map((f) => (
                  <div key={f.label} className="py-3">
                    <dt className="text-xs uppercase tracking-wider text-[#8b95a1]">
                      {f.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-white">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================== HIGHLIGHTS ========================== */}
      <section className="bg-[#1e2832] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
              Lo que define la obra
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
              Claves de la construcción
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          </div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {proyecto.highlights.map((h, i) => (
              <motion.div
                key={h}
                variants={fadeUp}
                className="rounded-xl border border-[#2a3441] bg-[#0f1923] p-6 transition-colors duration-300 hover:border-[#F5A800]"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#F5A800]">
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-lg font-extrabold text-black">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#d1d5db]">
                  {h}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================== GALERÍA =========================== */}
      <section id="galeria" className="bg-[#0f1923] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
              El proyecto terminado
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
              Galería de la obra
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          </div>

          <motion.div
            className="grid grid-cols-2 gap-3 md:grid-cols-3"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {proyecto.images.map((img, i) => (
              <motion.button
                key={img}
                variants={fadeUp}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#2a3441]"
                aria-label={`Ampliar imagen ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${proyecto.name} — imagen ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#0f1923]/0 transition-colors duration-300 group-hover:bg-[#0f1923]/40">
                  <Plus className="size-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================ VIDEO ============================ */}
      {proyecto.video && (
        <section className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {/* video player (vertical) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="order-2 lg:order-1"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-black shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <video
                  src={proyecto.video}
                  poster={proyecto.cover}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="order-1 lg:order-2"
            >
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
                <PlayCircle className="size-5" />
                Recorrido en video
              </p>
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#0f1923] md:text-4xl">
                La obra terminada, en movimiento
              </h2>
              <div className="my-5 h-1 w-12 bg-[#F5A800]" />
              <p className="leading-relaxed text-gray-600">
                Un recorrido por la nave industrial ya finalizada: la estructura,
                la envolvente, los andenes de carga y el volumen de oficinas. La
                mejor forma de apreciar la escala y el nivel de terminación de un
                proyecto industrial ejecutado de principio a fin.
              </p>
              <a
                href={`${WHATSAPP}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0f1923] px-6 py-3.5 font-bold text-white transition-colors duration-300 hover:bg-[#1e2832]"
              >
                Quiero un proyecto así
                <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===================== SERVICIO RELACIONADO ===================== */}
      {servicio && (
        <section className="bg-[#1e2832] py-[70px] md:py-[90px]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
              Servicio aplicado
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
              Este proyecto fue posible con
            </h2>

            <Link
              href={`/servicios/${servicio.slug}`}
              className="group flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#2a3441] bg-[#0f1923] p-6 transition-all duration-300 hover:border-[#F5A800] md:flex-row md:items-center md:p-8"
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#F5A800]">
                {ServIcon && <ServIcon className="size-8 text-black" />}
              </div>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold uppercase text-white transition-colors group-hover:text-[#F5A800]">
                  {servicio.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#8b95a1]">
                  {servicio.heroDescription}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-lg border border-[#F5A800] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#F5A800] transition-colors duration-300 group-hover:bg-[#F5A800] group-hover:text-black md:self-center">
                Ver servicio
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* =========================== CTA BAND =========================== */}
      <section className="relative overflow-hidden bg-[#0f1923] py-[70px] md:py-[90px]">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#F5A800]/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            ¿Tienes un proyecto de esta escala?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#d1d5db]">
            Construimos obras industriales, comerciales y residenciales de
            principio a fin. Cuéntanos tu idea y te respondemos en menos de 24
            horas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${WHATSAPP}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-8 py-4 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
            >
              Solicitar Cotización por WhatsApp
            </a>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 font-bold text-white transition-colors duration-300 hover:border-[#F5A800] hover:text-[#F5A800]"
            >
              Ir al formulario
            </Link>
          </div>
        </div>
      </section>

      {/* =========================== LIGHTBOX =========================== */}
      <AnimatePresence>
        {lightbox !== null && (
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

            {proyecto.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImg();
                }}
                className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F5A800] hover:text-black md:left-6"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="size-6" />
              </button>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease }}
              className="relative h-[75vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={proyecto.images[lightbox]}
                alt={`${proyecto.name} — imagen ${lightbox + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {proyecto.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImg();
                }}
                className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F5A800] hover:text-black md:right-6"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="size-6" />
              </button>
            )}

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              {lightbox + 1} / {proyecto.images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
