"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import { servicios } from "@/data/servicios";
import { servicioIcons } from "@/components/servicios/icons";

const WHATSAPP = "https://wa.me/message/NVBS7GYDP4XLJ1";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function ServiciosIndex() {
  return (
    <article>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#0f1923] pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#F5A800]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex items-center gap-1.5 text-xs text-[#8b95a1]"
            aria-label="Ruta de navegación"
          >
            <Link href="/" className="transition hover:text-[#F5A800]">
              Inicio
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#F5A800]">Servicios</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#F5A800]"
            >
              Catálogo 2026
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl"
            >
              Soluciones de construcción
              <br />
              de principio a fin
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl leading-relaxed text-[#d1d5db]"
            >
              Zohapes Solutions J.P., S.R.L. es una empresa dinámica y
              multidisciplinaria dedicada al mundo de la construcción en todas
              sus formas. Reunimos seis líneas de servicio que cubren el ciclo
              completo de una obra: del suelo a la entrega.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-6 inline-flex items-center gap-2.5 rounded-lg border border-[#2a3441] bg-[#1e2832] px-4 py-2.5"
            >
              <ShieldCheck className="size-5 text-[#F5A800]" />
              <span className="text-sm text-[#d1d5db]">
                Habilitada en el Registro de Proveedores del Estado —{" "}
                <strong className="text-white">RPE No. 132892 (Activo)</strong>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================== GRID =========================== */}
      <section className="bg-[#0f1923] pb-[70px] md:pb-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {servicios.map((s) => {
              const Icon = servicioIcons[s.icon];
              return (
                <motion.div key={s.slug} variants={fadeUp}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#2a3441] bg-[#1e2832] transition-all duration-300 hover:border-[#F5A800] hover:shadow-[0_8px_30px_rgba(245,168,0,0.12)]"
                  >
                    {/* image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={s.images[0]}
                        alt={s.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e2832] via-[#1e2832]/30 to-transparent" />
                      <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-lg bg-[#F5A800] shadow-lg">
                        {Icon && <Icon className="size-5 text-black" />}
                      </span>
                      <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-[#0f1923]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F5A800]">
                        {s.code}
                      </span>
                    </div>

                    {/* body */}
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase leading-tight text-white transition-colors group-hover:text-[#F5A800]">
                        {s.name}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8b95a1]">
                        {s.heroDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#F5A800]">
                        Ver servicio
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================== CTA BAND =========================== */}
      <section className="relative overflow-hidden bg-[#1e2832] py-[70px] md:py-[90px]">
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#F5A800]/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            ¿No sabes qué servicio necesitas?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#d1d5db]">
            Cuéntanos tu proyecto y te orientamos sin compromiso. Te respondemos
            en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(
                "Hola, quiero asesoria sobre los servicios de Zohapes Solutions J.P."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5A800] px-8 py-4 font-bold text-black transition-colors duration-300 hover:bg-[#FFBF00]"
            >
              Hablar por WhatsApp
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 font-bold text-white transition-colors duration-300 hover:border-[#F5A800] hover:text-[#F5A800]"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
