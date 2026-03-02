"use client";

import { motion } from "framer-motion";
import { CheckCircle, Instagram } from "lucide-react";
import Image from "next/image";

const bulletPoints = [
  "Ingeniería de construcción especializada",
  "Gestión directa de proyectos",
  "Experiencia en obras residenciales, comerciales e industriales",
  "Comunicación directa con los clientes",
];

export default function CEOSection() {
  return (
    <section id="ceo" className="bg-[#1e2832] py-[70px] lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Photo Area */}
          <motion.div
            className="lg:w-[40%] w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#0f1923] border-b-4 border-[#F5A800] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <Image
                src="/images/ceo.jpg"
                alt="Ing. Johangel Pérez P. - CEO de Zohapes Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />

              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-[#F5A800] text-black font-bold text-sm px-4 py-2 rounded-lg z-10">
                CEO &amp; Fundador
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="lg:w-[60%] w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Label */}
            <p className="text-[#F5A800] font-semibold uppercase tracking-widest text-sm mb-4">
              LIDERAZGO
            </p>

            {/* Name */}
            <h2
              className="font-extrabold text-4xl md:text-5xl text-white uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Ing. Johangel
              <br />
              Pérez P.
            </h2>

            {/* Role */}
            <p className="text-[#8b95a1] text-lg mt-2 mb-6">
              CEO &amp; Fundador de Zohapes Solutions
            </p>

            {/* Paragraphs */}
            <p className="text-[#d1d5db] leading-relaxed mb-4">
              Ingeniero con visión, Johangel Pérez fundó Zohapes Solutions J.P
              con la misión de transformar la industria de la construcción en
              República Dominicana a través de un enfoque dinámico,
              multidisciplinario y orientado a resultados.
            </p>
            <p className="text-[#d1d5db] leading-relaxed mb-4">
              Su liderazgo directo en cada proyecto garantiza que los estándares
              de calidad, seguridad y cumplimiento de plazos se mantengan desde
              el primer día hasta la entrega final.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#2a3441] my-6" />

            {/* Bullet Points */}
            <ul>
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[#d1d5db] mb-3">
                  <CheckCircle className="text-[#F5A800] size-5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/ing.johangel_perez_p/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F5A800] hover:text-[#FFBF00] transition mt-6"
            >
              <Instagram className="size-5" />
              <span>@ing.johangel_perez_p</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
