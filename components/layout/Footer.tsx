"use client";

import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const serviciosLinks = [
    "Construcción Residencial",
    "Construcción Comercial",
    "Remodelación",
    "Gestión de Proyectos",
    "Diseño Estructural",
    "Acabados e Interiores",
  ];

  const empresaLinks = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "CEO", href: "#ceo" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-[#080e14]">
      {/* Top border */}
      <div className="h-[2px] w-full bg-[#F5A800]" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div>
            <div>
              <span
                className="text-2xl font-extrabold uppercase text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                ZOHAPES
              </span>
              <span className="block text-sm font-semibold tracking-widest text-[#F5A800]">
                SOLUTIONS J.P
              </span>
            </div>
            <div className="my-4 h-0.5 w-8 bg-[#F5A800]" />
            <p className="text-sm leading-relaxed text-[#8b95a1]">
              Empresa dinámica y multidisciplinaria dedicada a la construcción
              en República Dominicana.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/zohapes_solutions_j.p/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a3441] text-[#F5A800] transition hover:bg-[#F5A800] hover:text-black"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://wa.me/message/NVBS7GYDP4XLJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a3441] text-[#F5A800] transition hover:bg-[#F5A800] hover:text-black"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Servicios */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul>
              {serviciosLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#servicios"
                    className="mb-2.5 block text-sm text-[#8b95a1] transition hover:text-[#F5A800]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Empresa */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul>
              {empresaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="mb-2.5 block text-sm text-[#8b95a1] transition hover:text-[#F5A800]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <div className="mb-3 flex items-center gap-2 text-sm text-[#8b95a1]">
              <Phone className="size-4 text-[#F5A800]" />
              <a
                href="https://wa.me/message/NVBS7GYDP4XLJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5A800] transition hover:text-[#FFBF00]"
              >
                WhatsApp Directo
              </a>
            </div>
            <div className="mb-3 flex items-center gap-2 text-sm text-[#8b95a1]">
              <Instagram className="size-4 text-[#F5A800]" />
              <span>@zohapes_solutions_j.p</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8b95a1]">
              <MapPin className="size-4 text-[#F5A800]" />
              <span>República Dominicana</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-[#2a3441] pt-6 md:flex-row">
          <p className="text-xs text-[#8b95a1]">
            &copy; 2025 Zohapes Solutions J.P, S.R.L. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-[#8b95a1]">República Dominicana</p>
        </div>
      </div>
    </footer>
  );
}
