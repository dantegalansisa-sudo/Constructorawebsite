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
  descTitulo: string;
  descripcion: string[];
  ficha: ProyectoFicha[];
  highlights: string[];
  cover: string;
  images: string[];
  video?: string;
  servicioRelacionado: string;
  metaDescription: string;
}

const fotos = (slug: string, count: number, ext = "png"): string[] =>
  Array.from(
    { length: count },
    (_, i) => `/images/proyectos/${slug}/foto-${i + 1}.${ext}`
  );

export const proyectos: Proyecto[] = [
  {
    slug: "torre-parque-de-gazcue",
    name: "Torre Parque de Gazcue",
    categoria: "Pintura y Mantenimiento",
    ubicacion: "Gazcue, Distrito Nacional",
    estado: "Trabajo completado",
    tagline:
      "Renovación integral del exterior de una torre residencial en Gazcue.",
    resumen:
      "Trabajo de pintura integral de fachada y mantenimiento exterior de la Torre Parque de Gazcue, una torre residencial en el sector de Gazcue, Distrito Nacional.",
    descTitulo: "Una intervención de mantenimiento exterior",
    descripcion: [
      "La Torre Parque de Gazcue es una torre residencial ubicada en el sector de Gazcue, en el Distrito Nacional. En este proyecto, Zohapes Solution J.P. no participó en la construcción del edificio —el inmueble ya existía—, sino en su renovación exterior.",
      "El alcance del trabajo consistió en la pintura integral de toda la fachada de la torre: muros perimetrales, balcones, parapetos y elementos verticales del edificio. Una intervención de mantenimiento que devuelve a la edificación una apariencia limpia y unifica visualmente todos los niveles.",
      "Pintar una torre de varios niveles impone retos particulares: trabajos en altura con sistemas de andamiaje o suspensión, protección del entorno y de los residentes durante la jornada, y una preparación previa de las superficies para que el acabado tenga durabilidad.",
      "El trabajo se ejecutó bajo la dirección técnica del Ing. Johangel Pérez P., con un equipo capacitado en trabajos en altura y acabados de exterior. Es un ejemplo del servicio de mantenimiento que ofrecemos para edificaciones existentes: cuidar lo que ya está construido también forma parte del oficio.",
    ],
    ficha: [
      {
        label: "Tipo de intervención",
        value: "Pintura integral y mantenimiento exterior",
      },
      { label: "Tipo de edificación", value: "Torre residencial" },
      { label: "Ubicación", value: "Gazcue, Distrito Nacional" },
      {
        label: "Alcance",
        value: "Fachada completa — muros, balcones y parapetos",
      },
      {
        label: "Construcción del edificio",
        value: "El inmueble ya existía — no construido por Zohapes",
      },
      {
        label: "Ejecutó el mantenimiento",
        value: "Zohapes Solution J.P, S.R.L.",
      },
      { label: "Dirección técnica", value: "Ing. Johangel Pérez P." },
      { label: "Estado", value: "Trabajo completado" },
    ],
    highlights: [
      "Pintura integral de la fachada de la torre",
      "Trabajos en altura con seguridad y planificación",
      "Intervención sobre edificación existente, sin desalojar a los residentes",
      "Ejecución bajo la dirección técnica del Ing. Johangel Pérez P.",
    ],
    cover: "/images/proyectos/torre-parque-de-gazcue/cover.jpeg",
    images: fotos("torre-parque-de-gazcue", 5, "jpeg"),
    servicioRelacionado: "mantenimiento-y-reparaciones",
    metaDescription:
      "Pintura integral y mantenimiento exterior de la Torre Parque de Gazcue, una torre residencial en Gazcue, Distrito Nacional, ejecutado por Zohapes Solution J.P.",
  },
  {
    slug: "techo-metalico-onda",
    name: "Techo Metálico — ONDA",
    categoria: "Estructura Metálica",
    ubicacion: "Distrito Nacional",
    estado: "Obra terminada",
    tagline: "Una estructura ligera en acero para cubrir y aprovechar nuevos espacios.",
    resumen:
      "Construcción de una estructura metálica ligera —un techo en acero— para cubrir y habilitar un área en la sede de la Oficina Nacional de Derecho de Autor (ONDA).",
    descTitulo: "Una estructura ligera en acero",
    descripcion: [
      "Este proyecto consistió en la construcción de una estructura metálica ligera —un techo en acero— en la sede de la Oficina Nacional de Derecho de Autor (ONDA), en el Distrito Nacional. La intervención permitió cubrir y habilitar un área de terraza para su uso.",
      "La solución se basó en un sistema de acero liviano: cerchas y perfiles metálicos que conforman la estructura portante, sobre la cual se instaló la cubierta de láminas metálicas. Es un sistema eficiente, de montaje rápido y limpio, ideal para techar espacios sin sobrecargar la edificación existente.",
      "La obra se ejecutó bajo la dirección técnica del Ing. Johangel Pérez P., fundador de Zohapes Solution J.P.",
    ],
    ficha: [
      {
        label: "Tipo de obra",
        value: "Estructura metálica ligera — techo en acero",
      },
      {
        label: "Cliente",
        value: "Oficina Nacional de Derecho de Autor (ONDA)",
      },
      { label: "Ubicación", value: "Distrito Nacional" },
      {
        label: "Sistema",
        value: "Cerchas de acero y cubierta de láminas metálicas",
      },
      { label: "Constructora", value: "Zohapes Solution J.P, S.R.L." },
      { label: "Dirección técnica", value: "Ing. Johangel Pérez P." },
      { label: "Estado", value: "Obra terminada" },
    ],
    highlights: [
      "Estructura metálica ligera, de montaje rápido y limpio",
      "Cerchas de acero y cubierta de láminas metálicas",
      "Habilitación de un área de terraza",
      "Ejecución bajo la dirección técnica del Ing. Johangel Pérez P.",
    ],
    cover: "/images/proyectos/techo-metalico-onda/cover.jpeg",
    images: fotos("techo-metalico-onda", 7, "jpeg"),
    servicioRelacionado: "estructuras-prefabricadas",
    metaDescription:
      "Zohapes Solution J.P. construyó una estructura metálica ligera —un techo en acero— en la sede de la Oficina Nacional de Derecho de Autor (ONDA), Distrito Nacional.",
  },
  {
    slug: "cuartel-femenino-fard",
    name: "Cuartel Femenino de la Fuerza Aérea",
    categoria: "Construcción Institucional",
    ubicacion: "República Dominicana",
    estado: "Obra terminada",
    tagline: "Una obra institucional para la Fuerza Aérea de la República Dominicana.",
    resumen:
      "Construcción del Cuartel Femenino del Comando de Mantenimiento Aéreo: una edificación institucional de alojamiento para el personal militar femenino de la Fuerza Aérea de República Dominicana.",
    descTitulo: "Una obra de carácter institucional",
    descripcion: [
      "El Cuartel Femenino del Comando de Mantenimiento Aéreo es una edificación institucional construida para la Fuerza Aérea de República Dominicana (FARD), como parte del fortalecimiento de su infraestructura. La obra responde a la creciente participación de la mujer militar en funciones técnicas, administrativas y operativas vinculadas al mantenimiento aeronáutico.",
      "Zohapes Solution J.P. asumió la ejecución de esta obra con la responsabilidad que exige un proyecto de carácter institucional y militar. Construir para una institución de las Fuerzas Armadas implica cumplir estándares estrictos de calidad, organización y funcionalidad, además de protocolos y plazos rigurosamente definidos.",
      "La edificación se organiza en dos pabellones de alojamiento: un Pabellón de Oficiales Femeninas, con capacidad para 44 oficiales, y un Pabellón de Alistadas, con capacidad para 106 alistadas. En conjunto ofrece espacios de descanso adecuados, organizados y funcionales, acordes con los estándares de la vida militar y las necesidades del servicio.",
      "La obra se ejecutó bajo la dirección técnica del Ing. Johangel Pérez P., fundador de Zohapes Solution J.P. Su supervisión directa aseguró que cada etapa —de la estructura a los acabados, las áreas verdes y los accesos— cumpliera con la calidad y la seriedad que demanda una instalación de este tipo.",
      "Para Zohapes Solution J.P., haber construido una instalación para la Fuerza Aérea de República Dominicana es una muestra de confianza y un respaldo a su capacidad para ejecutar obras de carácter institucional y para el Estado dominicano.",
    ],
    ficha: [
      {
        label: "Tipo de obra",
        value: "Edificación institucional — alojamiento militar",
      },
      {
        label: "Institución",
        value: "Fuerza Aérea de República Dominicana (FARD)",
      },
      {
        label: "Destino",
        value: "Cuartel Femenino del Comando de Mantenimiento Aéreo",
      },
      {
        label: "Componentes",
        value: "Pabellón de Oficiales y Pabellón de Alistadas",
      },
      { label: "Capacidad", value: "150 plazas — 44 oficiales y 106 alistadas" },
      { label: "Constructora", value: "Zohapes Solution J.P, S.R.L." },
      { label: "Dirección técnica", value: "Ing. Johangel Pérez P." },
      { label: "Estado", value: "Obra terminada e inaugurada" },
    ],
    highlights: [
      "Edificación construida para la Fuerza Aérea de República Dominicana",
      "Dos pabellones de alojamiento, con 150 plazas en total",
      "Ejecución bajo la dirección técnica del Ing. Johangel Pérez P.",
      "Obra de carácter institucional, con estándares militares",
    ],
    cover: "/images/proyectos/cuartel-femenino-fard/cover.png",
    images: fotos("cuartel-femenino-fard", 7),
    servicioRelacionado: "construccion-y-ampliacion",
    metaDescription:
      "Zohapes Solution J.P. construyó el Cuartel Femenino del Comando de Mantenimiento Aéreo, una edificación institucional de alojamiento para la Fuerza Aérea de República Dominicana.",
  },
  {
    slug: "nuevo-domingo-savio",
    name: "Nuevo Domingo Savio",
    categoria: "Obra Pública",
    ubicacion: "La Ciénaga y Los Guandules, Distrito Nacional",
    estado: "Obra terminada",
    tagline: "Construyendo el nuevo borde del río Ozama.",
    resumen:
      "Participación de Zohapes Solution J.P. en la ejecución de obras del proyecto Nuevo Domingo Savio, la gran regeneración urbana del borde del río Ozama, en el Distrito Nacional.",
    descTitulo: "Parte de una gran transformación urbana",
    descripcion: [
      "Nuevo Domingo Savio es uno de los proyectos de regeneración urbana más importantes de la República Dominicana: una intervención de gran escala sobre el borde del río Ozama, en el Distrito Nacional, impulsada por el Estado dominicano para recuperar el hábitat de los barrios de La Ciénaga y Los Guandules y proteger a sus comunidades frente a las crecidas del río.",
      "En una obra de esta magnitud, Zohapes Solution J.P. aportó su capacidad constructiva a la ejecución de trabajos sobre el nuevo frente de río: paseos peatonales y promenades de la avenida Paseo del Río, muros y barandas de protección de la ribera, espacios verdes y áreas recreativas, y edificaciones de servicio que acompañan los parques recuperados.",
      "Cada frente de trabajo asumido por la empresa se ejecutó bajo la dirección técnica del Ing. Johangel Pérez P., fundador de Zohapes Solution J.P. Su supervisión directa garantizó que la obra cumpliera los estándares de calidad, seguridad y plazo que exige un proyecto de interés público de esta importancia.",
      "Construir sobre el borde de un río impone retos particulares: estabilizar el terreno de la ribera, integrar la obra civil al paisaje y, sobre todo, ejecutar el trabajo conviviendo con la vida cotidiana de una de las zonas más densamente pobladas del país. El equipo respondió con obra civil de espacio público —aceras amplias, paseos, ciclovía y mobiliario urbano— y con edificaciones pensadas para el uso de la comunidad.",
      "El resultado es un nuevo borde de río: un paseo público que devolvió a la comunidad su relación con el Ozama. Para Zohapes Solution J.P., haber construido parte de esta transformación es motivo de orgullo y la confirmación de su perfil como constructora preparada para obras del Estado de alcance nacional.",
    ],
    ficha: [
      {
        label: "Tipo de obra",
        value: "Obra pública — espacio público y edificaciones",
      },
      { label: "Proyecto", value: "Nuevo Domingo Savio — borde del río Ozama" },
      {
        label: "Ubicación",
        value: "La Ciénaga y Los Guandules, Distrito Nacional",
      },
      { label: "Constructora", value: "Zohapes Solution J.P, S.R.L." },
      { label: "Dirección técnica", value: "Ing. Johangel Pérez P." },
      { label: "Carácter", value: "Obra del Estado dominicano" },
      {
        label: "Alcance ejecutado",
        value: "Paseos, ribera, espacios verdes y edificaciones de servicio",
      },
      { label: "Estado", value: "Obra terminada" },
    ],
    highlights: [
      "Participación en un proyecto emblemático del Estado dominicano",
      "Obra civil y espacio público sobre el borde del río Ozama",
      "Ejecución bajo la dirección técnica del Ing. Johangel Pérez P.",
      "Edificaciones de servicio para uso de la comunidad",
    ],
    cover: "/images/proyectos/nuevo-domingo-savio/portada.png",
    images: fotos("nuevo-domingo-savio", 5),
    servicioRelacionado: "construccion-y-ampliacion",
    metaDescription:
      "Zohapes Solution J.P. participó en la ejecución de obras del proyecto Nuevo Domingo Savio, la regeneración urbana del borde del río Ozama en el Distrito Nacional, Santo Domingo.",
  },
  {
    slug: "nave-industrial-nigua",
    name: "Nave Industrial en Nigua",
    categoria: "Construcción Industrial",
    ubicacion: "San Gregorio de Nigua, San Cristóbal",
    estado: "Obra terminada",
    tagline: "Una nave industrial moderna, construida para producir y resistir.",
    resumen:
      "Edificación de una nave industrial de gran formato en una de las zonas industriales de mayor crecimiento del país, con estructura de acero de grandes luces y un volumen de oficinas integrado.",
    descTitulo: "Una obra industrial de escala",
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
    images: fotos("nave-industrial-nigua", 4),
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
