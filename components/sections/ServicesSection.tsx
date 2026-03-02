"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hammer,
  ClipboardList,
  Ruler,
  Paintbrush,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: "Home",
    name: "Construcción Residencial",
    description:
      "Casas, chalets y viviendas personalizadas con los más altos estándares de calidad.",
    tag: "Residencial",
  },
  {
    id: 2,
    icon: "Building2",
    name: "Construcción Comercial",
    description:
      "Edificios de oficinas, locales comerciales e instalaciones industriales.",
    tag: "Comercial",
  },
  {
    id: 3,
    icon: "Hammer",
    name: "Remodelación y Ampliación",
    description:
      "Transformamos espacios existentes con renovaciones completas o parciales.",
    tag: "Remodelación",
  },
  {
    id: 4,
    icon: "ClipboardList",
    name: "Gestión de Proyectos",
    description:
      "Planificación, supervisión y control total del proyecto de principio a fin.",
    tag: "Gestión",
  },
  {
    id: 5,
    icon: "Ruler",
    name: "Diseño Estructural",
    description:
      "Ingeniería y diseño de estructuras seguras, eficientes y duraderas.",
    tag: "Ingeniería",
  },
  {
    id: 6,
    icon: "Paintbrush",
    name: "Acabados e Interiores",
    description:
      "Terminaciones de alta calidad: pisos, pintura, cielos rasos y más.",
    tag: "Acabados",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Hammer,
  ClipboardList,
  Ruler,
  Paintbrush,
};

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
    <section
      id="servicios"
      className="py-[70px] md:py-[90px] bg-[#1e2832]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left">
          <p className="text-[#F5A800] font-semibold tracking-widest text-sm uppercase mb-2">
            NUESTROS SERVICIOS
          </p>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] uppercase font-extrabold text-4xl md:text-5xl text-white mb-2">
            Lo Que Hacemos
          </h2>
          <div className="w-10 h-1 bg-[#F5A800] mb-12" />
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-[#0f1923] border border-[#2a3441] rounded-xl p-6 hover:border-[#F5A800] hover:shadow-[0_4px_20px_rgba(245,168,0,0.15)] transition-all duration-250"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#F5A800] rounded-lg flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="size-6 text-black" />
                  )}
                </div>

                {/* Tag */}
                <p className="text-[#F5A800] text-xs font-bold uppercase tracking-wider mt-4">
                  {service.tag}
                </p>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-white font-bold text-lg mt-2">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-[#8b95a1] text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
