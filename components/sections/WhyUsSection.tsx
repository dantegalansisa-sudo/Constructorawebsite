"use client";

import { motion } from "framer-motion";
import { Trophy, Compass, Shield, Clock, Smartphone } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Empresa Dinámica y Multidisciplinaria",
    description:
      "Capacidad para abordar proyectos de cualquier tipo, escala y complejidad.",
  },
  {
    icon: Compass,
    title: "Ingeniería de Alta Precisión",
    description:
      "Cada proyecto es dirigido por el Ing. Johangel Pérez P. con supervisión técnica directa.",
  },
  {
    icon: Shield,
    title: "Materiales de Primera Calidad",
    description:
      "Trabajamos solo con proveedores certificados y materiales que garantizan durabilidad.",
  },
  {
    icon: Clock,
    title: "Entrega en Tiempo y Forma",
    description:
      "Cumplimos los plazos acordados sin comprometer la calidad del resultado final.",
  },
  {
    icon: Smartphone,
    title: "Comunicación Directa y Transparente",
    description:
      "Acceso directo al CEO vía WhatsApp para seguimiento del proyecto en tiempo real.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyUsSection() {
  return (
    <section
      id="nosotros"
      className="bg-[#f4f6f8] py-[70px] lg:py-[90px]"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Image Placeholder */}
          <div className="relative w-full lg:w-[45%]">
            <div className="bg-[#1e2832] rounded-2xl aspect-[4/5] w-full overflow-hidden relative">
              {/* Construction-themed gradient pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e2832] via-[#2a3a48] to-[#0f1923]" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 20px,
                    rgba(245,168,0,0.3) 20px,
                    rgba(245,168,0,0.3) 22px
                  ), repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 20px,
                    rgba(245,168,0,0.3) 20px,
                    rgba(245,168,0,0.3) 22px
                  )`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#F5A800]/30 flex items-center justify-center">
                    <Shield className="size-8 text-[#F5A800]/40" />
                  </div>
                  <p className="text-white/20 text-sm font-semibold uppercase tracking-widest">
                    Zohapes Solutions
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute bottom-0 left-0 bg-[#F5A800] text-black font-bold px-4 py-2 text-sm rounded-tr-xl">
                Desde 2019
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="lg:w-[55%]">
            {/* Header */}
            <p className="text-[#F5A800] font-semibold uppercase tracking-widest text-sm mb-2">
              ¿POR QUÉ ELEGIRNOS?
            </p>
            <h2
              className="uppercase font-extrabold text-4xl md:text-5xl text-[#0f1923] leading-tight mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Por Qué Elegir
              <br />
              Zohapes Solutions
            </h2>
            <div className="w-10 h-1 bg-[#F5A800] mb-8" />

            {/* Reasons List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const isLast = index === reasons.length - 1;

                return (
                  <motion.div
                    key={reason.title}
                    variants={staggerItem}
                    className={`flex flex-row gap-4 py-5 ${
                      isLast ? "border-0" : "border-b border-[#e5e7eb]"
                    }`}
                  >
                    {/* Icon Circle */}
                    <div className="w-10 h-10 shrink-0 bg-[#F5A800]/10 rounded-full flex items-center justify-center">
                      <Icon className="size-5 text-[#F5A800]" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-bold text-[#0f1923]">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
