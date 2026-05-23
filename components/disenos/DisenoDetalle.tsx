"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  X,
  ArrowRight,
  Plus,
  Sparkles,
  PencilRuler,
  Building2,
  Home,
} from "lucide-react";
import type { Diseno } from "@/data/disenos";

const WHATSAPP = "https://wa.me/message/NVBS7GYDP4XLJ1";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function DisenoDetalle({ diseno }: { diseno: Diseno }) {
  const waMessage = encodeURIComponent(
    `Hola, vi el diseno "${diseno.name}" en su web y quisiera mas informacion.`
  );

  // -------- combined image list for the lightbox --------
  const allImages = useMemo(
    () =>
      [
        ...diseno.exterior.map((src) => ({ src, label: "Vista exterior" })),
        ...diseno.interior.map((src) => ({ src, label: "Vista interior" })),
      ] as { src: string; label: string }[],
    [diseno.exterior, diseno.interior]
  );

  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImg = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i + 1) % allImages.length
      ),
    [allImages.length]
  );
  const prevImg = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + allImages.length) % allImages.length
      ),
    [allImages.length]
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

  const offsetInterior = diseno.exterior.length;

  return (
    <article>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#0f1923] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F5A800]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
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
                href="/#disenos"
                className="transition hover:text-[#F5A800]"
              >
                Diseños
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-[#F5A800]">{diseno.name}</span>
            </motion.nav>

            <motion.div
              variants={fadeUp}
              className="mb-5 flex flex-wrap gap-2.5"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5A800]/30 bg-[#F5A800]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F5A800]">
                <Sparkles className="size-3.5" />
                {diseno.categoria}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#d1d5db]">
                Render 3D
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl"
            >
              {diseno.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg font-medium text-[#F5A800]"
            >
              {diseno.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm text-[#8b95a1]"
            >
              {diseno.estado}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href={`${WHATSAPP}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-7 py-3.5 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
              >
                Quiero un diseño así
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#exterior"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-7 py-3.5 font-bold text-white transition-colors duration-300 hover:border-[#F5A800] hover:text-[#F5A800]"
              >
                Ver Renders
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3441] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src={diseno.cover}
                alt={diseno.name}
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

      {/* ========================= SOBRE EL DISEÑO ========================= */}
      <section className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <motion.div
            className="lg:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
              Sobre el diseño
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#0f1923] md:text-4xl">
              {diseno.descTitulo}
            </h2>
            <div className="my-5 h-1 w-12 bg-[#F5A800]" />
            <div className="space-y-4">
              {diseno.descripcion.map((p, i) => (
                <p key={i} className="leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ficha */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-2xl bg-[#0f1923] p-7 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-white">
                Ficha del diseño
              </h3>
              <div className="my-4 h-0.5 w-8 bg-[#F5A800]" />
              <dl className="divide-y divide-[#2a3441]">
                {diseno.ficha.map((f) => (
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
              Lo que define la propuesta
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
              Claves del diseño
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
            {diseno.highlights.map((h, i) => (
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

      {/* ======================== GALERÍA EXTERIOR ======================== */}
      <section id="exterior" className="bg-[#0f1923] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
              <Building2 className="size-4" />
              El proyecto por fuera
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
              Vista Exterior
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          </div>

          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {diseno.exterior.map((img, i) => (
              <motion.button
                key={img}
                variants={fadeUp}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#2a3441]"
                aria-label={`Ampliar render exterior ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${diseno.name} — render exterior ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#0f1923]/0 transition-colors duration-300 group-hover:bg-[#0f1923]/40">
                  <Plus className="size-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================== GALERÍA INTERIOR ======================== */}
      <section id="interior" className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
              <Home className="size-4" />
              El proyecto por dentro
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#0f1923] md:text-4xl">
              Vista Interior
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          </div>

          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {diseno.interior.map((img, i) => (
              <motion.button
                key={img}
                variants={fadeUp}
                onClick={() => setLightbox(offsetInterior + i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#e5e7eb] bg-white"
                aria-label={`Ampliar render interior ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${diseno.name} — render interior ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#0f1923]/0 transition-colors duration-300 group-hover:bg-[#0f1923]/40">
                  <Plus className="size-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================== CTA BAND =========================== */}
      <section className="relative overflow-hidden bg-[#0f1923] py-[70px] md:py-[90px]">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#F5A800]/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5A800]/30 bg-[#F5A800]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F5A800]">
            <PencilRuler className="size-4" />
            Diseñamos y construimos
          </div>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            ¿Quieres una casa diseñada a tu medida?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#d1d5db]">
            Acompañamos tu proyecto desde la idea hasta la entrega: diseño,
            planos, renders y construcción, bajo una sola dirección técnica.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${WHATSAPP}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-8 py-4 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
            >
              Solicitar diseño por WhatsApp
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

            {allImages.length > 1 && (
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
              className="flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[72vh] w-[88vw] max-w-5xl">
                <Image
                  src={allImages[lightbox].src}
                  alt={`${diseno.name} — render ${lightbox + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <span className="rounded-full bg-[#F5A800] px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                {allImages[lightbox].label}
              </span>
            </motion.div>

            {allImages.length > 1 && (
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
              {lightbox + 1} / {allImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
