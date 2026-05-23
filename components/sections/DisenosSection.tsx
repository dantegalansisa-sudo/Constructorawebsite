"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PencilRuler, Check } from "lucide-react";
import { disenos } from "@/data/disenos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function DisenosSection() {
  if (disenos.length === 0) return null;

  return (
    <section
      id="disenos"
      className="relative overflow-hidden bg-[#f4f6f8] py-[70px] md:py-[90px]"
    >
      {/* decorative accent */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#F5A800]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#CC8C00]">
            <PencilRuler className="size-4" />
            Diseño · Renders 3D
          </p>
          <h2
            className="text-4xl font-extrabold uppercase text-[#0f1923] md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Antes de construir, diseñamos
          </h2>
          <div className="mx-auto mb-4 mt-4 h-1 w-16 bg-[#F5A800]" />
          <p className="mx-auto mb-12 max-w-2xl text-gray-600">
            En Zohapes Solution J.P. también desarrollamos el diseño
            arquitectónico de tu proyecto: planos, plantas y renders 3D que
            permiten ver la casa antes de construirla.
          </p>
        </div>

        {/* Disenos list */}
        <div className="space-y-8">
          {disenos.map((d, idx) => {
            const imageRight = idx % 2 === 1;
            const thumbs = [...d.exterior.slice(0, 2), ...d.interior.slice(0, 2)];
            return (
              <motion.div
                key={d.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <Link
                  href={`/disenos/${d.slug}`}
                  className="group grid overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm transition-all duration-300 hover:border-[#F5A800] hover:shadow-[0_8px_40px_rgba(245,168,0,0.18)] lg:grid-cols-2"
                >
                  {/* cover */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[460px] ${
                      imageRight ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={d.cover}
                      alt={d.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* dim wash for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-[#F5A800] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-black">
                      <Sparkles className="size-3.5" />
                      {d.categoria}
                    </span>
                    <span className="absolute right-5 top-5 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                      Render 3D
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex flex-col justify-center gap-4 p-7 md:p-10">
                    <h3
                      className="text-3xl font-extrabold uppercase leading-tight text-[#0f1923] transition-colors group-hover:text-[#F5A800] md:text-4xl"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {d.name}
                    </h3>

                    <p className="text-sm font-semibold text-[#CC8C00]">
                      {d.tagline}
                    </p>

                    <p className="leading-relaxed text-gray-600">
                      {d.resumen}
                    </p>

                    <ul className="space-y-2">
                      {d.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-gray-600"
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

                    {/* thumbnails (mix exterior + interior) */}
                    <div className="flex gap-2">
                      {thumbs.map((img) => (
                        <div
                          key={img}
                          className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border border-[#e5e7eb]"
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

                    <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-[#0f1923] px-6 py-3 font-bold text-white transition-colors duration-300 group-hover:bg-[#F5A800] group-hover:text-black">
                      Ver diseño completo
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
