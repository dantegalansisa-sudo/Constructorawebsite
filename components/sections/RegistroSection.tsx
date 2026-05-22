"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Landmark,
  Hash,
  CalendarDays,
  Building2,
  Wallet,
  MapPin,
  ClipboardCheck,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { empresa, actividadComercial } from "@/data/empresa";
import { servicios } from "@/data/servicios";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Devuelve el slug del servicio que corresponde a un código de actividad. */
function slugPorCodigo(code: string): string | undefined {
  return servicios.find((s) => s.code === code)?.slug;
}

export default function RegistroSection() {
  const datos = [
    {
      icon: Hash,
      label: "RNC / No. Documento",
      value: empresa.rnc,
    },
    {
      icon: CalendarDays,
      label: "Fecha de registro",
      value: empresa.fechaRegistro,
    },
    {
      icon: Building2,
      label: "Tipo de entidad",
      value: empresa.tipoEntidad,
    },
    {
      icon: Wallet,
      label: "Cuenta bancaria registrada",
      value: empresa.cuentaBancaria ? "Sí" : "No",
    },
  ];

  return (
    <section id="registro" className="relative overflow-hidden bg-[#0f1923] py-[70px] md:py-[90px]">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#F5A800]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------------- Header ---------------- */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A800]">
            Respaldo Institucional
          </p>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            Empresa registrada y habilitada por el Estado
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#F5A800]" />
          <p className="mt-5 leading-relaxed text-[#8b95a1]">
            Zohapes Solutions J.P. está inscrita en el Registro de Proveedores
            del Estado (RPE) ante la Dirección General de Contrataciones
            Públicas. Este registro nos habilita para contratar y ejecutar
            obras y servicios con instituciones del Estado dominicano, conforme
            a la Ley 340-06 de Compras y Contrataciones Públicas.
          </p>
        </motion.div>

        {/* ---------------- Credential cards ---------------- */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* --- Main constancia card --- */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="h-full overflow-hidden rounded-2xl border border-[#2a3441] bg-[#1e2832]">
              {/* institution strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2a3441] bg-[#0f1923] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#F5A800]/10">
                    <Landmark className="size-5 text-[#F5A800]" />
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight text-white">
                      Registro de Proveedores del Estado
                    </p>
                    <p className="text-xs text-[#8b95a1]">
                      {empresa.emisor} ({empresa.emisorSiglas})
                    </p>
                  </div>
                </div>
                {/* estado activo */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#22C55E]">
                  <BadgeCheck className="size-4" />
                  Estado: {empresa.estado}
                </span>
              </div>

              {/* body */}
              <div className="p-6 md:p-8">
                {/* RPE number */}
                <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#8b95a1]">
                      No. de Registro (RPE)
                    </p>
                    <p className="font-[family-name:var(--font-barlow-condensed)] text-5xl font-extrabold leading-none text-[#F5A800] md:text-6xl">
                      {empresa.rpe}
                    </p>
                  </div>
                  <p className="pb-1 text-xs text-[#8b95a1]">
                    Constancia certificada el{" "}
                    <span className="font-semibold text-[#d1d5db]">
                      {empresa.fechaCertificacion}
                    </span>
                  </p>
                </div>

                {/* data grid */}
                <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#2a3441] bg-[#2a3441] sm:grid-cols-2">
                  {datos.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-start gap-3 bg-[#1e2832] p-4"
                    >
                      <d.icon className="mt-0.5 size-4 shrink-0 text-[#F5A800]" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#8b95a1]">
                          {d.label}
                        </p>
                        <p className="mt-0.5 font-semibold text-white">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* domicilio - full width */}
                  <div className="flex items-start gap-3 bg-[#1e2832] p-4 sm:col-span-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-[#F5A800]" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#8b95a1]">
                        Domicilio registrado
                      </p>
                      <p className="mt-0.5 font-semibold text-white">
                        {empresa.domicilio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Verified seal card --- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="flex h-full flex-col items-center rounded-2xl border border-[#F5A800]/30 bg-gradient-to-b from-[#1e2832] to-[#0f1923] p-7 text-center">
              {/* seal */}
              <div className="relative flex size-24 items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#F5A800]/40" />
                <span className="flex size-16 items-center justify-center rounded-full bg-[#F5A800]">
                  <ShieldCheck className="size-9 text-black" />
                </span>
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase leading-tight text-white">
                Proveedor del Estado
                <br />
                Verificado
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8b95a1]">
                Inscripción amparada en el marco legal de compras y
                contrataciones públicas.
              </p>

              {/* marco legal chips */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {empresa.marcoLegal.map((ley) => (
                  <span
                    key={ley}
                    className="rounded-md border border-[#2a3441] bg-[#0f1923] px-2.5 py-1 text-xs font-medium text-[#d1d5db]"
                  >
                    {ley}
                  </span>
                ))}
              </div>

              <a
                href={`https://www.${empresa.portalVerificacion}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#F5A800] transition-colors hover:text-[#FFBF00]"
              >
                Verificable en {empresa.portalVerificacion}
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ---------------- Actividades comerciales ---------------- */}
        <motion.div
          className="mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <ClipboardCheck className="size-5 text-[#F5A800]" />
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-white md:text-2xl">
              Actividades comerciales habilitadas
            </h3>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-[#8b95a1]">
            Las seis líneas de actividad inscritas oficialmente en nuestro
            registro. Cada una corresponde a un servicio del catálogo.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {actividadComercial.map((act) => {
            const slug = slugPorCodigo(act.code);
            const inner = (
              <div className="flex h-full flex-col rounded-xl border border-[#2a3441] bg-[#1e2832] p-5 transition-all duration-300 group-hover:border-[#F5A800] group-hover:shadow-[0_4px_24px_rgba(245,168,0,0.12)]">
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold tracking-wide text-[#F5A800]">
                    {act.code}
                  </span>
                  {slug && (
                    <ArrowUpRight className="size-4 text-[#8b95a1] transition-colors group-hover:text-[#F5A800]" />
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#d1d5db]">
                  {act.desc}
                </p>
                {slug && (
                  <span className="mt-3 text-xs font-bold uppercase tracking-wider text-[#8b95a1] transition-colors group-hover:text-[#F5A800]">
                    Ver servicio
                  </span>
                )}
              </div>
            );

            return (
              <motion.div key={act.code} variants={fadeUp}>
                {slug ? (
                  <Link href={`/servicios/${slug}`} className="group block h-full">
                    {inner}
                  </Link>
                ) : (
                  <div className="group h-full">{inner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
