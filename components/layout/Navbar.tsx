"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "CEO", href: "#ceo" },
  { label: "Contacto", href: "#contacto" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [logoError, setLogoError] = useState(false);

  // ---------- scroll background ----------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll(); // initialise on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------- active section observer ----------
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // ---------- lock body scroll when drawer is open ----------
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ---------- smooth scroll handler ----------
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  // ---------- CTA smooth scroll to contacto ----------
  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const element = document.getElementById("contacto");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  // ---------- scroll to top ----------
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1923]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ---- Logo ---- */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="relative flex shrink-0 items-center"
        >
          {!logoError ? (
            <Image
              src="/images/logo.png"
              alt="Zohapes Solutions J.P."
              width={160}
              height={48}
              priority
              className="h-10 w-auto object-contain sm:h-12"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span
              className="text-2xl font-bold tracking-wide text-white sm:text-3xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              ZOHAPES
            </span>
          )}
        </a>

        {/* ---- Desktop links ---- */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[#F5A800]"
                      : "text-white/80 hover:text-[#F5A800]"
                  }`}
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ---- Desktop CTA ---- */}
        <button
          onClick={handleCtaClick}
          className="hidden cursor-pointer rounded-lg bg-[#F5A800] px-5 py-2.5 text-sm font-bold text-black transition-colors duration-200 hover:bg-[#FFBF00] lg:inline-flex"
        >
          Solicitar Cotización
        </button>

        {/* ---- Mobile hamburger ---- */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center text-white lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---- Mobile drawer ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />

            {/* drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-[#0f1923] shadow-2xl sm:w-80"
            >
              {/* drawer header */}
              <div className="flex items-center justify-between px-5 py-4">
                <a
                  href="#"
                  onClick={handleLogoClick}
                  className="flex items-center"
                >
                  {!logoError ? (
                    <Image
                      src="/images/logo.png"
                      alt="Zohapes Solutions J.P."
                      width={130}
                      height={40}
                      className="h-8 w-auto object-contain"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <span
                      className="text-xl font-bold tracking-wide text-white"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                      }}
                    >
                      ZOHAPES
                    </span>
                  )}
                </a>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white"
                  aria-label="Cerrar menú"
                >
                  <X size={26} />
                </button>
              </div>

              {/* drawer links */}
              <ul className="mt-4 flex flex-1 flex-col gap-1 px-5">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                          isActive
                            ? "bg-[#F5A800]/10 text-[#F5A800]"
                            : "text-white/80 hover:bg-white/5 hover:text-[#F5A800]"
                        }`}
                        style={{ fontFamily: "'Barlow', sans-serif" }}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* drawer CTA */}
              <div className="px-5 pb-8">
                <button
                  onClick={handleCtaClick}
                  className="w-full cursor-pointer rounded-lg bg-[#F5A800] px-5 py-3 text-sm font-bold text-black transition-colors duration-200 hover:bg-[#FFBF00]"
                >
                  Solicitar Cotización
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
