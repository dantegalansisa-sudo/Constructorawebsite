"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  X,
  ArrowRight,
  Phone,
  Plus,
  Minus,
} from "lucide-react";
import type { Servicio } from "@/data/servicios";
import { servicioIcons } from "@/components/servicios/icons";

const WHATSAPP = "https://wa.me/message/NVBS7GYDP4XLJ1";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface Props {
  servicio: Servicio;
  relacionados: Servicio[];
}

export default function ServicioDetalle({ servicio, relacionados }: Props) {
  const Icon = servicioIcons[servicio.icon];
  const waMessage = encodeURIComponent(
    `Hola, me interesa el servicio de ${servicio.name}. Quisiera recibir mas informacion.`
  );

  // ---------------- lightbox ----------------
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImg = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i + 1) % servicio.images.length
      ),
    [servicio.images.length]
  );
  const prevImg = useCallback(
    () =>
      setLightbox((i) =>
        i === null
          ? i
          : (i - 1 + servicio.images.length) % servicio.images.length
      ),
    [servicio.images.length]
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

  // ---------------- faq ----------------
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <article>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#0f1923] pt-28 pb-16 md:pt-36 md:pb-24">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F5A800]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* --- text --- */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* breadcrumb */}
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
                href="/servicios"
                className="transition hover:text-[#F5A800]"
              >
                Servicios
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-[#F5A800]">{servicio.shortName}</span>
            </motion.nav>

            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-[#F5A800]">
                {Icon && <Icon className="size-6 text-black" />}
              </span>
              <span className="rounded-full border border-[#F5A800]/30 bg-[#F5A800]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F5A800]">
                Código {servicio.code}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl"
            >
              {servicio.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg font-medium text-[#F5A800]"
            >
              {servicio.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl leading-relaxed text-[#d1d5db]"
            >
              {servicio.heroDescription}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
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

          {/* --- featured image --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3441] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src={servicio.images[0]}
                alt={servicio.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* accent corner */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-2xl border-2 border-[#F5A800]/40" />
          </motion.div>
        </div>
      </section>

      {/* ====================== INTRO + BENEFICIOS ====================== */}
      <section className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {/* intro text */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
              El servicio en detalle
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#0f1923] md:text-4xl">
              ¿En qué consiste?
            </h2>
            <div className="my-5 h-1 w-12 bg-[#F5A800]" />
            <div className="space-y-4">
              {servicio.intro.map((p, i) => (
                <p key={i} className="leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* beneficios card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-2xl bg-[#0f1923] p-7 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-white">
                ¿Por qué elegirnos?
              </h3>
              <div className="my-4 h-0.5 w-8 bg-[#F5A800]" />
              <ul className="space-y-4">
                {servicio.beneficios.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F5A800]">
                      <Check className="size-3 text-black" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-[#d1d5db]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================= QUÉ INCLUYE ========================= */}
      <section className="bg-[#1e2832] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
              Alcance del servicio
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
              ¿Qué incluye este servicio?
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-2"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {servicio.incluye.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group flex gap-4 rounded-xl border border-[#2a3441] bg-[#0f1923] p-6 transition-all duration-300 hover:border-[#F5A800] hover:shadow-[0_4px_24px_rgba(245,168,0,0.12)]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#F5A800]/10 font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-[#F5A800] transition-colors duration-300 group-hover:bg-[#F5A800] group-hover:text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#8b95a1]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================== PROCESO =========================== */}
      <section className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
              Metodología
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#0f1923] md:text-4xl">
              Cómo trabajamos
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#e5e7eb] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {servicio.proceso.map((paso, i) => (
                <motion.div
                  key={paso.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`relative flex items-start gap-5 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:ml-auto md:flex-row md:pl-10"
                      : "md:mr-auto md:flex-row-reverse md:pr-10 md:text-right"
                  }`}
                >
                  <span
                    className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F5A800] font-[family-name:var(--font-barlow-condensed)] text-lg font-extrabold text-black md:absolute md:top-0 ${
                      i % 2 === 0
                        ? "md:-left-5"
                        : "md:-right-5"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-sm">
                    <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-[#0f1923]">
                      {paso.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {paso.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================== GALERÍA =========================== */}
      <section id="galeria" className="bg-[#0f1923] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
              Trabajos reales
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
              Galería del servicio
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
            <p className="mx-auto mt-4 max-w-xl text-[#8b95a1]">
              Fotografías de obras y trabajos ejecutados por Zohapes Solutions
              J.P.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {servicio.images.map((img, i) => (
              <motion.button
                key={img}
                variants={fadeUp}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-xl border border-[#2a3441]"
                aria-label={`Ampliar imagen ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${servicio.name} — trabajo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
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

      {/* ============================= FAQ ============================= */}
      <section className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
              Preguntas frecuentes
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#0f1923] md:text-4xl">
              Resolvemos tus dudas
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          </div>

          <div className="space-y-3">
            {servicio.faq.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-[#0f1923]">
                      {item.q}
                    </span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#F5A800]">
                      {open ? (
                        <Minus className="size-4 text-black" />
                      ) : (
                        <Plus className="size-4 text-black" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================== CTA BAND =========================== */}
      <section className="relative overflow-hidden bg-[#0f1923] py-[70px] md:py-[90px]">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#F5A800]/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            ¿Listo para iniciar tu proyecto de{" "}
            <span className="text-[#F5A800]">{servicio.shortName}</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#d1d5db]">
            Cuéntanos tu idea y te respondemos con una propuesta sin compromiso
            en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${WHATSAPP}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-8 py-4 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
            >
              <Phone className="size-5" />
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

      {/* ====================== SERVICIOS RELACIONADOS ====================== */}
      {relacionados.length > 0 && (
        <section className="bg-[#1e2832] py-[70px] md:py-[90px]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
                  Sigue explorando
                </p>
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white md:text-4xl">
                  Otros servicios
                </h2>
              </div>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#F5A800] transition hover:text-[#FFBF00]"
              >
                Ver todos
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relacionados.map((rel) => {
                const RelIcon = servicioIcons[rel.icon];
                return (
                  <Link
                    key={rel.slug}
                    href={`/servicios/${rel.slug}`}
                    className="group relative overflow-hidden rounded-xl border border-[#2a3441] bg-[#0f1923] transition-all duration-300 hover:border-[#F5A800]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={rel.images[0]}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent" />
                      <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-lg bg-[#F5A800]">
                        {RelIcon && <RelIcon className="size-5 text-black" />}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-white transition-colors group-hover:text-[#F5A800]">
                        {rel.name}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-[#8b95a1]">
                        {rel.heroDescription}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#F5A800]">
                        Ver servicio
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
            {/* close */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F5A800] hover:text-black"
              aria-label="Cerrar"
            >
              <X className="size-6" />
            </button>

            {/* prev */}
            {servicio.images.length > 1 && (
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

            {/* image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease }}
              className="relative h-[75vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={servicio.images[lightbox]}
                alt={`${servicio.name} — trabajo ${lightbox + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* next */}
            {servicio.images.length > 1 && (
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

            {/* counter */}
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              {lightbox + 1} / {servicio.images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
