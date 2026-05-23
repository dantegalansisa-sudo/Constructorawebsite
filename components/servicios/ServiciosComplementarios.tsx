"use client";

import { motion } from "framer-motion";
import { serviciosComplementarios } from "@/data/servicios-complementarios";
import { servicioIcons } from "@/components/servicios/icons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

interface Props {
  /** Variante visual: en una página clara o en una oscura. */
  theme?: "dark" | "light";
}

export default function ServiciosComplementarios({ theme = "dark" }: Props) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-[70px] md:py-[90px] ${
        isDark ? "bg-[#1e2832]" : "bg-[#f4f6f8]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p
            className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-[#F5A800]" : "text-[#CC8C00]"
            }`}
          >
            Más allá del catálogo
          </p>
          <h2
            className={`font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase md:text-4xl ${
              isDark ? "text-white" : "text-[#0f1923]"
            }`}
          >
            Servicios Complementarios
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          <p
            className={`mx-auto mt-5 max-w-2xl ${
              isDark ? "text-[#8b95a1]" : "text-gray-600"
            }`}
          >
            Junto a nuestras seis líneas de servicio del catálogo, ofrecemos
            estos servicios de apoyo que cubren la obra de extremo a extremo.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {serviciosComplementarios.map((s) => {
            const Icon = servicioIcons[s.icon];
            return (
              <motion.div
                key={s.slug}
                variants={fadeUp}
                className={`rounded-xl border p-6 transition-all duration-300 ${
                  isDark
                    ? "border-[#2a3441] bg-[#0f1923] hover:border-[#F5A800] hover:shadow-[0_4px_24px_rgba(245,168,0,0.12)]"
                    : "border-[#e5e7eb] bg-white hover:border-[#F5A800] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                }`}
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#F5A800]">
                  {Icon && <Icon className="size-6 text-black" />}
                </div>
                <h3
                  className={`mt-5 font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase ${
                    isDark ? "text-white" : "text-[#0f1923]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isDark ? "text-[#8b95a1]" : "text-gray-600"
                  }`}
                >
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
