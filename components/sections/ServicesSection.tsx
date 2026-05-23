"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { servicios } from "@/data/servicios";
import { serviciosComplementarios } from "@/data/servicios-complementarios";
import { servicioIcons } from "@/components/servicios/icons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-[70px] md:py-[90px] bg-[#1e2832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left">
          <p className="text-[#F5A800] font-semibold tracking-widest text-sm uppercase mb-2">
            NUESTROS SERVICIOS
          </p>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] uppercase font-extrabold text-4xl md:text-5xl text-white mb-2">
            Lo Que Hacemos
          </h2>
          <div className="w-10 h-1 bg-[#F5A800] mb-4" />
          <p className="text-[#8b95a1] max-w-2xl mb-12">
            Seis líneas de servicio que cubren el ciclo completo de una obra.
            Haz clic en cada una para conocer el detalle.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {servicios.map((service) => {
            const IconComponent = servicioIcons[service.icon];

            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-[#2a3441] bg-[#0f1923] p-6 transition-all duration-300 hover:border-[#F5A800] hover:shadow-[0_4px_20px_rgba(245,168,0,0.15)]"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F5A800]">
                      {IconComponent && (
                        <IconComponent className="size-6 text-black" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b95a1]">
                      {service.code}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-white font-bold text-xl uppercase leading-tight mt-4 transition-colors group-hover:text-[#F5A800]">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8b95a1] text-sm mt-2 leading-relaxed flex-1">
                    {service.heroDescription}
                  </p>

                  {/* Link */}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#F5A800]">
                    Ver servicio
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Servicios complementarios — chip row */}
        <div className="mt-12 rounded-xl border border-dashed border-[#F5A800]/30 bg-[#F5A800]/5 p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#F5A800]">
                <Plus className="size-4 text-black" strokeWidth={3} />
              </span>
              <p className="text-sm font-bold uppercase tracking-wider text-[#F5A800]">
                También ofrecemos
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviciosComplementarios.map((s) => (
                <span
                  key={s.slug}
                  className="rounded-full border border-[#2a3441] bg-[#0f1923] px-3.5 py-1.5 text-xs font-semibold text-[#d1d5db]"
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#F5A800] px-8 py-3 font-bold text-[#F5A800] transition-all duration-300 hover:bg-[#F5A800] hover:text-black"
          >
            Ver Todos los Servicios
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
