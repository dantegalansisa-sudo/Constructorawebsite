"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { proyectos } from "@/data/proyectos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function ProjectsSection({
  hideHeader = false,
}: {
  hideHeader?: boolean;
} = {}) {
  return (
    <section id="proyectos" className="bg-[#0f1923] py-[70px] md:py-[90px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
              Portafolio
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-white md:text-5xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Nuestros Proyectos
            </h2>
            <div className="mx-auto mb-4 mt-4 h-1 w-16 bg-[#F5A800]" />
            <p className="mx-auto mb-12 max-w-2xl text-[#8b95a1]">
              Obras reales ejecutadas de principio a fin. Cada proyecto cuenta
              su propia historia: del plano a la entrega.
            </p>
          </div>
        )}

        {/* Projects */}
        <div className="space-y-8">
          {proyectos.map((p, idx) => {
            const imageRight = idx % 2 === 1;
            return (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <Link
                  href={`/proyectos/${p.slug}`}
                  className="group grid overflow-hidden rounded-2xl border border-[#2a3441] bg-[#1e2832] transition-all duration-300 hover:border-[#F5A800] hover:shadow-[0_8px_40px_rgba(245,168,0,0.12)] lg:grid-cols-2"
                >
                  {/* image */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px] ${
                      imageRight ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={p.cover}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/70 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#F5A800] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-black">
                      {p.categoria}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex flex-col justify-center gap-4 p-7 md:p-10">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#22C55E]">
                      <CheckCircle2 className="size-3.5" />
                      {p.estado}
                    </span>

                    <h3
                      className="text-3xl font-extrabold uppercase leading-tight text-white transition-colors group-hover:text-[#F5A800] md:text-4xl"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {p.name}
                    </h3>

                    <p className="flex items-center gap-2 text-sm text-[#8b95a1]">
                      <MapPin className="size-4 text-[#F5A800]" />
                      {p.ubicacion}
                    </p>

                    <p className="leading-relaxed text-[#d1d5db]">
                      {p.resumen}
                    </p>

                    <ul className="space-y-2">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-[#8b95a1]"
                        >
                          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#F5A800]">
                            <Check
                              className="size-2.5 text-black"
                              strokeWidth={3}
                            />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* thumbnails */}
                    <div className="flex gap-2">
                      {p.images.slice(2, 5).map((img) => (
                        <div
                          key={img}
                          className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border border-[#2a3441]"
                        >
                          <Image
                            src={img}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-[#F5A800] px-6 py-3 font-bold text-black transition-colors duration-300 group-hover:bg-[#FFBF00]">
                      Ver proyecto completo
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
