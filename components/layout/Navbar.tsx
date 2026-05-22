"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Inicio", id: "inicio" },
  { label: "Nosotros", id: "nosotros" },
  { label: "Servicios", id: "servicios" },
  { label: "Proyectos", id: "proyectos" },
  { label: "CEO", id: "ceo" },
  { label: "Contacto", id: "contacto" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  // ---------- active section observer (home only) ----------
  useEffect(() => {
    if (!isHome) return;

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
  }, [isHome]);

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
  // On the homepage we intercept and smooth-scroll; on other routes we let the
  // <Link href="/#section"> navigate normally.
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      setMobileOpen(false);
      if (!isHome) return;
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    [isHome]
  );

  // ---------- scroll to top ----------
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      setMobileOpen(false);
      if (!isHome) return;
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [isHome]
  );

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#0f1923]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ---- Logo ---- */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex shrink-0 items-center gap-2.5"
        >
          {!logoError && (
            <Image
              src="/images/logo.png"
              alt="Zohapes Solution"
              width={48}
              height={48}
              priority
              className="h-11 w-11 rounded-full object-contain ring-1 ring-white/10 sm:h-12 sm:w-12"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="flex flex-col leading-none">
            <span
              className="text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Zohapes
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5A800] sm:text-xs">
              Solution
            </span>
          </span>
        </Link>

        {/* ---- Desktop links ---- */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = isHome && activeSection === link.id;

            return (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[#F5A800]"
                      : "text-white/80 hover:text-[#F5A800]"
                  }`}
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ---- Desktop CTA ---- */}
        <Link
          href="/#contacto"
          onClick={(e) => handleNavClick(e, "contacto")}
          className="hidden cursor-pointer rounded-lg bg-[#F5A800] px-5 py-2.5 text-sm font-bold text-black transition-colors duration-200 hover:bg-[#FFBF00] lg:inline-flex"
        >
          Solicitar Cotización
        </Link>

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
                <Link
                  href="/"
                  onClick={handleLogoClick}
                  className="flex items-center gap-2"
                >
                  {!logoError && (
                    <Image
                      src="/images/logo.png"
                      alt="Zohapes Solution"
                      width={40}
                      height={40}
                      className="h-9 w-9 rounded-full object-contain ring-1 ring-white/10"
                      onError={() => setLogoError(true)}
                    />
                  )}
                  <span className="flex flex-col leading-none">
                    <span
                      className="text-lg font-extrabold uppercase tracking-wide text-white"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                      }}
                    >
                      Zohapes
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#F5A800]">
                      Solution
                    </span>
                  </span>
                </Link>

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
                  const isActive = isHome && activeSection === link.id;

                  return (
                    <li key={link.id}>
                      <Link
                        href={`/#${link.id}`}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`block rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                          isActive
                            ? "bg-[#F5A800]/10 text-[#F5A800]"
                            : "text-white/80 hover:bg-white/5 hover:text-[#F5A800]"
                        }`}
                        style={{ fontFamily: "'Barlow', sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* drawer CTA */}
              <div className="px-5 pb-8">
                <Link
                  href="/#contacto"
                  onClick={(e) => handleNavClick(e, "contacto")}
                  className="block w-full cursor-pointer rounded-lg bg-[#F5A800] px-5 py-3 text-center text-sm font-bold text-black transition-colors duration-200 hover:bg-[#FFBF00]"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
