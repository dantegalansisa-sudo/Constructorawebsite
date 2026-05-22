// ----------------------------------------------------------------------------
// Proyectos reales ejecutados — Zohapes Solution J.P, S.R.L.
// Cada proyecto tiene URL propia: /proyectos/<slug>
// ----------------------------------------------------------------------------

export interface ProyectoFicha {
  label: string;
  value: string;
}

export interface Proyecto {
  slug: string;
  name: string;
  categoria: string;
  ubicacion: string;
  estado: string;
  tagline: string;
  resumen: string;
  descripcion: string[];
  ficha: ProyectoFicha[];
  highlights: string[];
  cover: string;
  images: string[];
  video?: string;
  servicioRelacionado: string;
  metaDescription: string;
}

const fotos = (slug: string, count: number): string[] =>
  Array.from(
    { length: count },
    (_, i) => `/images/proyectos/${slug}/foto-${i + 1}.png`
  );

export const proyectos: Proyecto[] = [
  {
    slug: "nave-industrial-nigua",
    name: "Nave Industrial en Nigua",
    categoria: "Construcción Industrial",
    ubicacion: "San Gregorio de Nigua, San Cristóbal",
    estado: "Obra terminada",
    tagline: "Una nave industrial moderna, construida para producir y resistir.",
    resumen:
      "Edificación de una nave industrial de gran formato en una de las zonas industriales de mayor crecimiento del país, con estructura de acero de grandes luces y un volumen de oficinas integrado.",
    descripcion: [
      "Este proyecto consistió en la construcción de una nave industrial de gran formato en San Gregorio de Nigua, provincia San Cristóbal: una de las zonas industriales que con mayor fuerza ha crecido en la República Dominicana durante los últimos años, gracias a su cercanía estratégica con los mercados de exportación.",
      "Una nave de este tipo impone retos estructurales muy particulares. La prioridad es generar grandes espacios diáfanos —amplias luces libres, sin columnas intermedias— que permitan distribuir con libertad las líneas de producción, el almacenamiento y la circulación interna. La estructura se resolvió con un sistema portante de acero, dimensionado para cubrir esas luces y soportar las cargas de cubierta y de operación.",
      "La envolvente combina cerramientos industriales de gran superficie con un volumen de oficinas integrado al frente, resuelto con una fachada de muro cortina acristalado. Esa fachada aporta identidad al acceso principal y lleva luz natural a las áreas administrativas. La cubierta metálica y sus sistemas de evacuación de aguas se concibieron para el régimen de lluvias del clima tropical.",
      "El diseño respondió, además, a un criterio de resiliencia. En la República Dominicana toda nave industrial debe proyectarse para resistir vientos huracanados y eventos climáticos severos; cada elemento estructural se dimensionó bajo esa exigencia, de manera que la edificación proteja la inversión y la continuidad de las operaciones que alberga.",
      "El resultado es una instalación industrial completa y lista para operar: áreas de producción y almacenamiento de gran capacidad, andenes de carga para la logística y espacios de oficina terminados con acabados modernos —cielos rasos, pisos e iluminación—. Una obra que refleja la capacidad de Zohapes Solution J.P. para llevar un proyecto industrial desde la estructura hasta el último detalle de acabado.",
    ],
    ficha: [
      { label: "Tipo de obra", value: "Nave / edificación industrial" },
      { label: "Ubicación", value: "San Gregorio de Nigua, San Cristóbal" },
      { label: "Uso", value: "Industrial — manufactura y logística" },
      {
        label: "Sistema estructural",
        value: "Estructura de acero de grandes luces",
      },
      {
        label: "Cerramientos",
        value: "Paneles industriales y muro cortina acristalado",
      },
      {
        label: "Cubierta",
        value: "Metálica, apta para clima tropical y vientos huracanados",
      },
      {
        label: "Componentes",
        value: "Producción, almacenamiento, andenes de carga y oficinas",
      },
      { label: "Estado", value: "Obra terminada y entregada" },
    ],
    highlights: [
      "Grandes luces estructurales, sin columnas intermedias",
      "Estructura de acero con diseño resiliente ante huracanes",
      "Andenes de carga para operación logística",
      "Volumen de oficinas con fachada de muro cortina",
    ],
    cover: "/images/proyectos/nave-industrial-nigua/cover.png",
    images: fotos("nave-industrial-nigua", 6),
    video: "/video/nave-industrial-nigua.mp4",
    servicioRelacionado: "construccion-y-ampliacion",
    metaDescription:
      "Construcción de una nave industrial moderna en San Gregorio de Nigua, San Cristóbal: estructura de acero de grandes luces, andenes de carga y oficinas. Proyecto de Zohapes Solution J.P.",
  },
];

/** Devuelve un proyecto por su slug. */
export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}

/** Lista de todos los slugs (para generación estática de rutas). */
export const proyectoSlugs = proyectos.map((p) => p.slug);
