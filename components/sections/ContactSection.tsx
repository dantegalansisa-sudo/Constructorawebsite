"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Phone, Instagram, Wrench, MapPin, Send, Mail } from "lucide-react";
import { empresa } from "@/data/empresa";

interface ContactFormData {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  tipo: string;
  descripcion: string;
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const message = `Hola, soy ${data.nombre}. ${data.empresa ? `Empresa: ${data.empresa}. ` : ""}Teléfono: ${data.telefono}. ${data.email ? `Email: ${data.email}. ` : ""}${data.tipo ? `Tipo de proyecto: ${data.tipo}. ` : ""}${data.descripcion ? `Descripción: ${data.descripcion}` : ""}`;
    window.open(
      `https://wa.me/message/NVBS7GYDP4XLJ1?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const inputStyles =
    "w-full bg-[#f4f6f8] border border-[#e5e7eb] rounded-lg px-4 py-3 text-[#0f1923] text-sm focus:outline-none focus:border-[#F5A800] focus:ring-1 focus:ring-[#F5A800] transition";

  return (
    <section id="contacto" className="bg-[#f4f6f8] py-[70px] md:py-[90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="bg-[#F5A800]/10 text-[#F5A800] border border-[#F5A800]/30 font-semibold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full inline-block mb-4">
            COTIZACI&Oacute;N GRATUITA
          </span>
          <h2
            className="font-extrabold text-4xl md:text-5xl text-[#0f1923] text-center leading-tight uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            &iquest;Tienes un Proyecto
            <br />
            en Mente?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-12">
            Cu&eacute;ntanos tu idea y te respondemos con una propuesta sin
            compromiso en menos de 24 horas.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Nombre completo */}
                <div>
                  <label className="block text-[#0f1923] font-semibold text-sm mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className={inputStyles}
                    placeholder="Tu nombre"
                    {...register("nombre", { required: true })}
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1">
                      Este campo es requerido
                    </p>
                  )}
                </div>

                {/* Empresa / Proyecto */}
                <div>
                  <label className="block text-[#0f1923] font-semibold text-sm mb-1.5">
                    Empresa / Proyecto
                  </label>
                  <input
                    type="text"
                    className={inputStyles}
                    placeholder="Nombre de tu empresa o proyecto"
                    {...register("empresa")}
                  />
                </div>

                {/* Teléfono / WhatsApp */}
                <div>
                  <label className="block text-[#0f1923] font-semibold text-sm mb-1.5">
                    Tel&eacute;fono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className={inputStyles}
                    placeholder="Tu número de teléfono"
                    {...register("telefono", { required: true })}
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-xs mt-1">
                      Este campo es requerido
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#0f1923] font-semibold text-sm mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className={inputStyles}
                    placeholder="tu@email.com"
                    {...register("email")}
                  />
                </div>

                {/* Tipo de proyecto */}
                <div>
                  <label className="block text-[#0f1923] font-semibold text-sm mb-1.5">
                    Tipo de proyecto
                  </label>
                  <select className={inputStyles} {...register("tipo")}>
                    <option value="">Seleccionar...</option>
                    <option value="Construcción y Ampliación">
                      Construcci&oacute;n y Ampliaci&oacute;n
                    </option>
                    <option value="Estructuras Permanentes">
                      Estructuras Permanentes
                    </option>
                    <option value="Estructuras Prefabricadas">
                      Estructuras Prefabricadas
                    </option>
                    <option value="Preparación del Terreno / Movimiento de Tierra">
                      Preparaci&oacute;n del Terreno / Movimiento de Tierra
                    </option>
                    <option value="Mantenimiento y Reparaciones">
                      Mantenimiento y Reparaciones
                    </option>
                    <option value="Servicios de Ingeniería">
                      Servicios de Ingenier&iacute;a
                    </option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                {/* Descripción del proyecto */}
                <div>
                  <label className="block text-[#0f1923] font-semibold text-sm mb-1.5">
                    Descripci&oacute;n del proyecto
                  </label>
                  <textarea
                    className={inputStyles}
                    rows={4}
                    placeholder="Cuéntanos los detalles de tu proyecto..."
                    {...register("descripcion")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#F5A800] text-black font-bold py-4 rounded-lg hover:bg-[#FFBF00] transition text-lg mt-2"
                >
                  Solicitar Cotizaci&oacute;n &rarr;
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT - Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* WhatsApp Directo */}
            <div className="mb-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F5A800]/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-[#F5A800]" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0f1923] text-sm uppercase">
                  WHATSAPP DIRECTO
                </h4>
                <a
                  href="https://wa.me/message/NVBS7GYDP4XLJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5A800] hover:underline text-sm"
                >
                  Enviar mensaje
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="mb-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F5A800]/10 rounded-xl flex items-center justify-center shrink-0">
                <Instagram className="text-[#F5A800]" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0f1923] text-sm uppercase">
                  INSTAGRAM
                </h4>
                <p className="text-gray-600 text-sm">@zohapes_solutions_j.p</p>
                <p className="text-gray-600 text-sm">
                  CEO: @ing.johangel_perez_p
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F5A800]/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-[#F5A800]" size={20} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-[#0f1923] text-sm uppercase">
                  EMAIL
                </h4>
                <a
                  href={`mailto:${empresa.email}`}
                  className="text-[#F5A800] hover:underline text-sm break-all"
                >
                  {empresa.email}
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div className="mb-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F5A800]/10 rounded-xl flex items-center justify-center shrink-0">
                <Wrench className="text-[#F5A800]" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0f1923] text-sm uppercase">
                  SERVICIOS
                </h4>
                <p className="text-gray-600 text-sm">
                  Construcci&oacute;n &middot; Remodelaci&oacute;n &middot;
                  Dise&ntilde;o &middot; Gesti&oacute;n &middot; Acabados
                </p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="mb-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F5A800]/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-[#F5A800]" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0f1923] text-sm uppercase">
                  UBICACI&Oacute;N
                </h4>
                <p className="text-gray-600 text-sm">
                  Rep&uacute;blica Dominicana
                </p>
              </div>
            </div>

            {/* Big WhatsApp CTA */}
            <a
              href="https://wa.me/message/NVBS7GYDP4XLJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0f1923] text-white font-bold py-4 rounded-xl hover:bg-[#1e2832] transition flex items-center justify-center gap-3 mt-4"
            >
              <svg
                viewBox="0 0 24 24"
                fill="#25D366"
                className="w-6 h-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chatear por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
