// ----------------------------------------------------------------------------
// Datos oficiales de la empresa.
// Razón social: Zohapes Solution J.P, S.R.L
// Fuente: Constancia del Registro de Proveedores del Estado (RPE),
// Dirección General de Contrataciones Públicas (DGCP) — certificada 06/01/2026.
// ----------------------------------------------------------------------------

export const empresa = {
  rpe: "132892",
  rnc: "133531992",
  estado: "Activo",
  fechaRegistro: "08/12/2025",
  fechaCertificacion: "06/01/2026",
  tipoEntidad: "Sociedades Comerciales",
  cuentaBancaria: true,
  domicilio:
    "Calle Primera #102, Reparto La Rosa, Santo Domingo, República Dominicana",
  email: "zohapessolutionsjpperez@gmail.com",
  emisor: "Dirección General de Contrataciones Públicas",
  emisorSiglas: "DGCP",
  marcoLegal: ["Ley 340-06", "Decreto 416-23", "Resolución PNP-08-2023"],
  portalVerificacion: "dgcp.gob.do",
};

/** Actividades comerciales habilitadas en el RPE (códigos oficiales). */
export const actividadComercial = [
  { code: "30200000", desc: "Estructuras prefabricadas" },
  { code: "30220000", desc: "Estructuras permanentes" },
  {
    code: "70130000",
    desc: "Preparación, gestión y protección del terreno y del suelo",
  },
  {
    code: "72100000",
    desc: "Servicios de mantenimiento y reparaciones de construcciones e instalaciones",
  },
  { code: "72130000", desc: "Construcción general de edificios" },
  { code: "81100000", desc: "Servicios profesionales de ingeniería" },
];
