"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const chipVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9 + i * 0.12,
      duration: 0.5,
      ease,
    },
  }),
};

export default function HeroSection() {
  const chips = [
    { icon: "\u{1F3C6}", label: "Empresa Certificada" },
    { icon: "\u{1F4CD}", label: "Rep\u00FAblica Dominicana" },
    { icon: "\u26A1", label: "Respuesta R\u00E1pida" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background fallback */}
      <div className="absolute inset-0 bg-[#0f1923]" />

      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,14,20,0.88) 0%, rgba(8,14,20,0.65) 60%, rgba(8,14,20,0.30) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-block bg-[#F5A800]/10 text-[#F5A800] border border-[#F5A800]/30 text-xs sm:text-sm font-semibold tracking-wide px-4 py-2 rounded-full mb-8">
              {"\u{1F3D7}\uFE0F"} CONSTRUCTORA MULTIDISCIPLINARIA EN RD
            </span>
          </motion.div>

          {/* Main heading area with yellow accent line */}
          <motion.div variants={fadeUp} custom={1} className="relative pl-8 mb-8">
            {/* Yellow accent line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[80px] bg-[#F5A800] rounded-full"
            />
            <h1 className="font-['Barlow_Condensed'] uppercase font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              CONSTRUYENDO
              <br />
              SOLUCIONES
              <br />
              PARA EL FUTURO
            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[#d1d5db] text-lg max-w-xl leading-relaxed mb-10"
          >
            Zohapes Solution J.P es una empresa dinámica dedicada al mundo de
            la construcción en todas sus formas, con experiencia en proyectos
            residenciales, comerciales e industriales.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="https://wa.me/message/NVBS7GYDP4XLJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F5A800] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#FFBF00] transition-colors duration-300"
            >
              Solicitar Cotización →
            </a>
            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#proyectos");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:border-[#F5A800] hover:text-[#F5A800] transition-colors duration-300"
            >
              Ver Proyectos
            </a>
          </motion.div>

          {/* Chips */}
          <div className="flex flex-wrap gap-3">
            {chips.map((chip, i) => (
              <motion.span
                key={chip.label}
                variants={chipVariant}
                custom={i}
                initial="hidden"
                animate="visible"
                className="bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-full"
              >
                {chip.icon} {chip.label}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
