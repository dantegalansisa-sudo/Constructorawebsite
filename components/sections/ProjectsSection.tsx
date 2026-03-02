"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Construccion y Ampliacion",
    category: "Comercial",
    image: "/images/project-1.jpg",
    description:
      "Proyecto de construccion y ampliacion de instalacion comercial.",
  },
  {
    id: 2,
    name: "Instalaciones Industriales",
    category: "Industrial",
    image: "/images/project-2.jpg",
    description:
      "Construccion de nave industrial con acabados especializados.",
  },
  {
    id: 3,
    name: "Proyecto Residencial",
    category: "Residencial",
    image: "/images/project-3.jpg",
    description:
      "Vivienda residencial con diseno moderno y acabados de primera.",
  },
  {
    id: 4,
    name: "Infraestructura y Obra Civil",
    category: "Civil",
    image: "/images/project-4.jpg",
    description: "Obras de infraestructura y urbanizacion de terreno.",
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
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-[70px] md:py-[90px] bg-[#0f1923]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-[#F5A800] font-semibold uppercase tracking-widest text-sm mb-2">
            PORTAFOLIO
          </p>
          <h2
            className="uppercase font-extrabold text-4xl md:text-5xl text-white text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Nuestros Proyectos
          </h2>
          <div className="w-16 h-1 bg-[#F5A800] mx-auto mt-4 mb-4" />
          <p className="text-[#8b95a1] text-center max-w-2xl mx-auto mb-12">
            Del plano a la realidad — cada proyecto es nuestra carta de
            presentaci&oacute;n.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Placeholder Background */}
              <motion.div
                className="absolute inset-0 bg-[#1e2832] flex items-center justify-center"
                variants={{
                  hover: {
                    scale: 1.05,
                  },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span
                  className="text-white/20 text-6xl font-extrabold uppercase select-none text-center px-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {project.name}
                </span>
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 border-t-2 border-transparent group-hover:border-[#F5A800] transition-all duration-300">
                <span className="text-[#F5A800] text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3
                  className="text-white font-bold text-lg mt-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {project.name}
                </h3>
                <p className="text-[#d1d5db] text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link
            href="https://www.instagram.com/zohapes_solutions_j.p/"
            target="_blank"
            className="inline-block border-2 border-[#F5A800] text-[#F5A800] font-bold px-8 py-3 rounded-lg hover:bg-[#F5A800] hover:text-black transition-all duration-300"
          >
            Ver Todos los Proyectos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
