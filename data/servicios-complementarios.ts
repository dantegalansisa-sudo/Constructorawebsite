// ----------------------------------------------------------------------------
// Servicios complementarios — además de las 6 líneas oficiales del catálogo
// (RPE), Zohapes Solution J.P. ofrece estos servicios de apoyo a la obra.
// ----------------------------------------------------------------------------

export interface ServicioComplementario {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
}

export const serviciosComplementarios: ServicioComplementario[] = [
  {
    slug: "compras-suministros",
    title: "Compras y Suministro de Materiales",
    icon: "Package",
    short: "Materiales gestionados de principio a fin.",
    description:
      "Adquisición y suministro de materiales de construcción para tu obra: gestión de proveedores, control de calidad y entrega en sitio según el cronograma.",
  },
  {
    slug: "transportacion",
    title: "Transportación",
    icon: "Truck",
    short: "Logística de materiales y equipos.",
    description:
      "Transporte de materiales, equipos y maquinaria desde el suministrador hasta el sitio de obra, con la logística que cada proyecto requiere.",
  },
  {
    slug: "remodelacion",
    title: "Remodelación",
    icon: "Hammer",
    short: "Renovación integral de espacios.",
    description:
      "Renovación de espacios existentes: cambios de distribución, mejoras de acabados y reformas integrales para residencias, oficinas y locales comerciales.",
  },
  {
    slug: "disenos",
    title: "Diseños",
    icon: "PencilRuler",
    short: "Tu idea aterrizada en planos.",
    description:
      "Apoyo en el diseño técnico del proyecto: planos, esquemas y propuestas que materializan la idea del cliente antes de pasar a construcción.",
  },
  {
    slug: "lotificacion",
    title: "Lotificación",
    icon: "LandPlot",
    short: "Terrenos divididos y listos para urbanizar.",
    description:
      "División y preparación de terrenos en lotes definidos —con áreas, accesos y configuración urbanística— listos para urbanizar, vender o desarrollar.",
  },
];
