"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Proyecto Residencial",
    initials: "CM",
    stars: 5,
    text: "Zohapes super\u00f3 nuestras expectativas en tiempo y calidad. El Ing. Johangel estuvo presente en cada etapa. Construyeron nuestra casa con una dedicaci\u00f3n que no encontramos en ninguna otra empresa.",
  },
  {
    name: "Mar\u00eda J.",
    role: "Remodelaci\u00f3n Comercial",
    initials: "MJ",
    stars: 5,
    text: "Contratamos a Zohapes para la ampliaci\u00f3n de nuestro local y el resultado fue impresionante. Profesionales, puntuales y siempre con soluciones para cada desaf\u00edo. Los recomendamos al 100%.",
  },
  {
    name: "Roberto P.",
    role: "Obra Industrial",
    initials: "RP",
    stars: 5,
    text: "Una empresa din\u00e1mica como ellos mismos se describen. Resolvieron el proyecto industrial con ingenier\u00eda de primera y una comunicaci\u00f3n directa durante todo el proceso. Definitivamente volveremos a trabajar juntos.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0f1923] py-[70px] md:py-[90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left">
          <p className="text-[#F5A800] font-semibold uppercase tracking-widest text-sm mb-2">
            TESTIMONIOS
          </p>
          <h2
            className="uppercase font-extrabold text-4xl md:text-5xl text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Lo Que Dicen
            <br />
            Nuestros Clientes
          </h2>
          <div className="w-10 h-1 bg-[#F5A800] mt-4 mb-12" />
        </div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#1e2832] border border-[#2a3441] rounded-xl p-6 hover:border-[#F5A800]/30 transition-all duration-300"
            >
              {/* Decorative Quote Mark */}
              <span className="text-[#F5A800] text-5xl font-serif leading-none mb-2 block">
                &ldquo;
              </span>

              {/* Testimonial Text */}
              <p className="text-[#d1d5db] text-sm leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    fill="#F5A800"
                    stroke="#F5A800"
                    size={16}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-[#F5A800] rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#8b95a1] text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
