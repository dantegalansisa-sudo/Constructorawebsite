// ----------------------------------------------------------------------------
// Catálogo de servicios — Zohapes Solution J.P., S.R.L.
// Fuente: Catálogo 2026 + desarrollo de contenido.
// Cada servicio tiene URL propia: /servicios/<slug>
// ----------------------------------------------------------------------------

export interface ServicioIncluye {
  title: string;
  description: string;
}

export interface ServicioPaso {
  title: string;
  description: string;
}

export interface ServicioFaq {
  q: string;
  a: string;
}

export interface Servicio {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  heroDescription: string;
  intro: string[];
  incluye: ServicioIncluye[];
  proceso: ServicioPaso[];
  beneficios: string[];
  faq: ServicioFaq[];
  images: string[];
  metaDescription: string;
}

/** Genera las rutas de las fotos oficiales de cada tema. */
const fotos = (
  slug: string,
  count: number,
  prefix = "foto"
): string[] =>
  Array.from(
    { length: count },
    (_, i) => `/images/servicios/${slug}/${prefix}-${i + 1}.png`
  );

export const servicios: Servicio[] = [
  // --------------------------------------------------------------------------
  {
    slug: "construccion-y-ampliacion",
    code: "72130000",
    name: "Construcción y Ampliación",
    shortName: "Construcción",
    icon: "Building2",
    tagline: "Del plano a la entrega, edificamos espacios que perduran.",
    heroDescription:
      "Ejecutamos obras nuevas y ampliaciones para proyectos residenciales, comerciales e industriales, con control técnico en cada etapa.",
    intro: [
      "La construcción y ampliación es el corazón de nuestra operación. En Zohapes Solution J.P. acompañamos cada proyecto desde el replanteo inicial en el terreno hasta la entrega de la obra terminada, integrando obra gris, obra civil y la coordinación de las especialidades bajo una sola dirección técnica.",
      "Trabajamos con un alcance flexible: desde la edificación completa de viviendas, locales y naves, hasta ampliaciones que aumentan la capacidad de inmuebles existentes sin comprometer su estructura original. Cada intervención se planifica con cronograma, presupuesto y controles de calidad definidos desde el primer día.",
      "Como empresa habilitada en el Registro de Proveedores del Estado (RPE No. 132892 — Activo), ejecutamos obras conforme a la normativa vigente, lo que nos permite atender tanto a clientes privados como a proyectos institucionales.",
    ],
    incluye: [
      {
        title: "Construcción de edificios residenciales",
        description:
          "Viviendas unifamiliares, residencias y edificios de apartamentos construidos bajo planos aprobados, con acabados a la medida del cliente y supervisión estructural permanente.",
      },
      {
        title: "Construcción de edificios comerciales",
        description:
          "Locales, oficinas, plazas y edificaciones de uso comercial diseñadas para optimizar el flujo de personas, la funcionalidad y la imagen del negocio.",
      },
      {
        title: "Construcción de naves industriales",
        description:
          "Galpones y naves para producción, logística o almacenamiento, con grandes luces estructurales, alturas libres y previsión de instalaciones técnicas.",
      },
      {
        title: "Ampliaciones y remodelaciones estructurales",
        description:
          "Crecimiento de inmuebles existentes —nuevos niveles, anexos o áreas— con refuerzo y conexión segura a la estructura original.",
      },
      {
        title: "Obras grises y obra civil en general",
        description:
          "Fundaciones, muros, losas y contrapisos: todos los elementos de obra gris que conforman la base sólida de cualquier edificación.",
      },
      {
        title: "Proyectos llave en mano (según alcance)",
        description:
          "Gestión integral del proyecto: una sola empresa responsable del diseño, la construcción y la entrega lista para usar, según el alcance acordado.",
      },
    ],
    proceso: [
      {
        title: "Levantamiento y planificación",
        description:
          "Visitamos el terreno, revisamos los planos y definimos alcance, presupuesto y cronograma.",
      },
      {
        title: "Replanteo y movimiento inicial",
        description:
          "Trazado de la obra, preparación del área y ejecución de las fundaciones.",
      },
      {
        title: "Obra gris y estructura",
        description:
          "Levantamos columnas, vigas, losas y muros que dan forma y resistencia al proyecto.",
      },
      {
        title: "Instalaciones y acabados",
        description:
          "Coordinamos electricidad, plomería y terminaciones según las especificaciones.",
      },
      {
        title: "Entrega y cierre",
        description:
          "Inspección final, corrección de detalles y entrega formal de la obra.",
      },
    ],
    beneficios: [
      "Una sola dirección técnica responsable de toda la obra",
      "Cronograma y presupuesto definidos desde el inicio",
      "Control de calidad en cada etapa constructiva",
      "Empresa habilitada en el RPE para obra pública y privada",
    ],
    faq: [
      {
        q: "¿Trabajan proyectos residenciales y comerciales por igual?",
        a: "Sí. Ejecutamos obras residenciales, comerciales e industriales, adaptando el equipo y los procesos a la escala de cada proyecto.",
      },
      {
        q: "¿Puedo ampliar mi propiedad sin demoler lo existente?",
        a: "En la mayoría de los casos sí. Evaluamos la estructura actual y diseñamos la ampliación para conectarse de forma segura, sin comprometer lo ya construido.",
      },
      {
        q: "¿Qué incluye un proyecto llave en mano?",
        a: "Según el alcance acordado, nos encargamos del diseño, los permisos coordinados, la construcción y la entrega final, para que reciba la obra lista para usar.",
      },
    ],
    images: fotos("construccion-y-ampliacion", 11),
    metaDescription:
      "Construcción y ampliación de edificios residenciales, comerciales e industriales en República Dominicana. Obra gris, obra civil y proyectos llave en mano.",
  },

  // --------------------------------------------------------------------------
  {
    slug: "estructuras-permanentes",
    code: "30220000",
    name: "Estructuras Permanentes",
    shortName: "Estructuras",
    icon: "Building",
    tagline: "El esqueleto que sostiene cada proyecto.",
    heroDescription:
      "Diseñamos y construimos elementos estructurales fijos en hormigón armado: la base resistente y duradera de toda edificación.",
    intro: [
      "Las estructuras permanentes son los elementos fijos que soportan las cargas de una edificación durante toda su vida útil. En Zohapes Solution J.P. ejecutamos estructuras de hormigón armado calculadas para resistir, con seguridad, las solicitaciones de cada proyecto.",
      "Cada elemento —fundación, columna, viga o losa— se construye respetando el diseño estructural, las resistencias de concreto especificadas y el detallado de acero correspondiente. El resultado es una estructura monolítica, estable y preparada para las condiciones del entorno dominicano, incluidas las exigencias sísmicas y climáticas.",
    ],
    incluye: [
      {
        title: "Estructuras de hormigón armado",
        description:
          "Sistemas estructurales completos en concreto reforzado, vaciados y curados bajo control para alcanzar las resistencias de diseño.",
      },
      {
        title: "Muros estructurales",
        description:
          "Muros de carga y muros de corte que aportan rigidez y estabilidad lateral a la edificación.",
      },
      {
        title: "Vigas, columnas y losas",
        description:
          "Elementos portantes que transmiten las cargas de forma segura hasta las fundaciones, con armado y dimensiones según cálculo.",
      },
      {
        title: "Elementos estructurales fijos",
        description:
          "Escaleras, rampas, pedestales y demás componentes permanentes integrados a la estructura principal.",
      },
      {
        title: "Obras estructurales en edificios y naves",
        description:
          "Esqueletos estructurales completos para edificaciones de varios niveles y naves de grandes luces.",
      },
    ],
    proceso: [
      {
        title: "Revisión del diseño estructural",
        description:
          "Analizamos los planos y las especificaciones de cálculo antes de iniciar.",
      },
      {
        title: "Habilitado y armado de acero",
        description:
          "Cortamos, doblamos y montamos el refuerzo según el detallado estructural.",
      },
      {
        title: "Encofrado",
        description:
          "Montamos moldes alineados y nivelados para dar forma a cada elemento.",
      },
      {
        title: "Vaciado de concreto",
        description:
          "Colocamos el hormigón con la resistencia especificada y lo compactamos correctamente.",
      },
      {
        title: "Curado y desencofrado",
        description:
          "Garantizamos el curado del concreto antes de retirar los moldes con seguridad.",
      },
    ],
    beneficios: [
      "Estructuras calculadas para durabilidad y seguridad",
      "Concreto con resistencias verificadas según especificación",
      "Detallado de acero conforme al diseño estructural",
      "Ejecución apta para las exigencias sísmicas del entorno",
    ],
    faq: [
      {
        q: "¿Qué diferencia una estructura permanente de una prefabricada?",
        a: "La estructura permanente se construye y se vacía en sitio formando un conjunto monolítico; la prefabricada se fabrica por piezas y se monta en obra. Ofrecemos ambas soluciones.",
      },
      {
        q: "¿Trabajan a partir de planos de un ingeniero externo?",
        a: "Sí. Ejecutamos la estructura siguiendo el diseño y el cálculo estructural aprobado, y también podemos coordinar ese diseño dentro de nuestros servicios de ingeniería.",
      },
      {
        q: "¿Las estructuras cumplen con requisitos sísmicos?",
        a: "Construimos respetando el detallado y las resistencias del diseño estructural, que en RD contempla las solicitaciones sísmicas de la zona.",
      },
    ],
    images: fotos("estructuras-permanentes", 8, "g"),
    metaDescription:
      "Estructuras de hormigón armado: muros, vigas, columnas y losas. Obras estructurales seguras y duraderas para edificios y naves en República Dominicana.",
  },

  // --------------------------------------------------------------------------
  {
    slug: "estructuras-prefabricadas",
    code: "30200000",
    name: "Estructuras Prefabricadas",
    shortName: "Prefabricados",
    icon: "Component",
    tagline: "Construcción industrializada: montaje rápido y limpio.",
    heroDescription:
      "Fabricamos y montamos elementos prefabricados de concreto y metálicos para acelerar plazos sin sacrificar resistencia.",
    intro: [
      "La construcción prefabricada permite producir elementos estructurales en condiciones controladas y montarlos en obra de forma rápida y ordenada. En Zohapes Solution J.P. integramos sistemas prefabricados de concreto y metálicos como alternativa eficiente a la construcción tradicional.",
      "Este sistema reduce los tiempos de ejecución, disminuye los desperdicios y aporta uniformidad en la calidad de cada pieza. Es especialmente ventajoso en naves, proyectos repetitivos y obras donde el plazo es un factor crítico.",
    ],
    incluye: [
      {
        title: "Elementos prefabricados de concreto",
        description:
          "Piezas de concreto producidas con moldes y dosificaciones controladas para garantizar una calidad uniforme.",
      },
      {
        title: "Montaje de estructuras prefabricadas",
        description:
          "Izaje, posicionamiento y conexión de los elementos en obra con equipos y personal especializado.",
      },
      {
        title: "Paneles, vigas y losas prefabricadas",
        description:
          "Componentes que conforman cerramientos, entrepisos y cubiertas con una instalación ágil.",
      },
      {
        title: "Estructuras metálicas prefabricadas",
        description:
          "Sistemas de acero para naves y cubiertas, fabricados a medida y ensamblados en sitio.",
      },
      {
        title: "Sistemas constructivos industrializados",
        description:
          "Soluciones modulares que estandarizan el proceso y acortan significativamente los plazos de obra.",
      },
    ],
    proceso: [
      {
        title: "Definición del sistema",
        description:
          "Seleccionamos el sistema prefabricado adecuado al proyecto y a su uso.",
      },
      {
        title: "Fabricación de elementos",
        description:
          "Producimos las piezas con moldes y controles de calidad.",
      },
      {
        title: "Transporte y logística",
        description:
          "Coordinamos el traslado de los elementos al sitio de obra.",
      },
      {
        title: "Montaje e izaje",
        description:
          "Posicionamos cada pieza con los equipos adecuados y con precisión.",
      },
      {
        title: "Conexiones y terminación",
        description:
          "Aseguramos uniones y conexiones para integrar el conjunto estructural.",
      },
    ],
    beneficios: [
      "Plazos de ejecución más cortos",
      "Calidad uniforme por fabricación controlada",
      "Menos desperdicio y obra más limpia",
      "Ideal para naves y proyectos repetitivos",
    ],
    faq: [
      {
        q: "¿La prefabricación es más económica?",
        a: "Depende del proyecto. En obras repetitivas o con plazos ajustados suele reducir costos indirectos y tiempos; lo evaluamos caso por caso.",
      },
      {
        q: "¿Las estructuras prefabricadas son resistentes?",
        a: "Sí. Las piezas se fabrican con dosificaciones y controles que garantizan resistencias equivalentes a las del vaciado en sitio.",
      },
      {
        q: "¿Pueden combinar prefabricado con obra tradicional?",
        a: "Por supuesto. Es común combinar fundaciones vaciadas en sitio con elementos prefabricados para optimizar tiempo y costo.",
      },
    ],
    images: fotos("estructuras-prefabricadas", 4),
    metaDescription:
      "Estructuras prefabricadas de concreto y metálicas: paneles, vigas, losas y sistemas industrializados con montaje rápido en República Dominicana.",
  },

  // --------------------------------------------------------------------------
  {
    slug: "preparacion-del-terreno",
    code: "70130000",
    name: "Preparación, Gestión y Protección del Terreno y del Suelo",
    shortName: "Movimiento de Tierra",
    icon: "Tractor",
    tagline: "Todo gran proyecto empieza por el suelo.",
    heroDescription:
      "Movimiento de tierra, excavación, relleno y nivelación: dejamos el terreno listo y estable para construir.",
    intro: [
      "Antes de levantar cualquier estructura, el terreno debe estar preparado, nivelado y estable. En Zohapes Solution J.P. ejecutamos los trabajos de movimiento de tierra y acondicionamiento del suelo que dan un inicio seguro a cualquier obra.",
      "Contamos con la capacidad para operar equipos pesados —retroexcavadoras, retro pala y maquinaria de compactación— y ejecutar excavaciones, rellenos y nivelaciones con la precisión que exige la fase de cimentación. Un terreno bien preparado evita asentamientos, problemas de drenaje y sobrecostos en las etapas posteriores.",
    ],
    incluye: [
      {
        title: "Movimiento de tierra",
        description:
          "Corte, transporte y conformación de volúmenes de tierra para adaptar el terreno al proyecto.",
      },
      {
        title: "Excavaciones",
        description:
          "Apertura de zanjas y excavaciones para fundaciones, instalaciones e infraestructura.",
      },
      {
        title: "Rellenos y compactaciones",
        description:
          "Colocación de material por capas y compactación controlada para lograr un suelo firme.",
      },
      {
        title: "Nivelación de terrenos",
        description:
          "Conformación de la rasante a los niveles de diseño para obtener una base uniforme.",
      },
      {
        title: "Preparación de plataformas",
        description:
          "Creación de plataformas estables y niveladas, listas para edificar.",
      },
      {
        title: "Obras de infraestructura básica",
        description:
          "Trabajos de drenaje, accesos y obras complementarias que acondicionan el sitio.",
      },
      {
        title: "Trabajos con retro pala y equipos pesados",
        description:
          "Operación de maquinaria especializada para ejecutar con rendimiento y seguridad.",
      },
    ],
    proceso: [
      {
        title: "Inspección del terreno",
        description:
          "Evaluamos topografía, tipo de suelo y condiciones del sitio.",
      },
      {
        title: "Desmonte y limpieza",
        description:
          "Retiramos vegetación, escombros y material no apto.",
      },
      {
        title: "Excavación y corte",
        description:
          "Ejecutamos cortes y excavaciones según los niveles de diseño.",
      },
      {
        title: "Relleno y compactación",
        description:
          "Colocamos y compactamos material por capas hasta la rasante.",
      },
      {
        title: "Nivelación final",
        description:
          "Entregamos la plataforma nivelada y lista para cimentar.",
      },
    ],
    beneficios: [
      "Base estable que previene asentamientos futuros",
      "Operación de equipos pesados con personal capacitado",
      "Niveles de diseño ejecutados con precisión",
      "Drenaje y accesos previstos desde el inicio",
    ],
    faq: [
      {
        q: "¿Por qué es tan importante esta etapa?",
        a: "Un terreno mal preparado provoca asentamientos, fisuras y problemas de drenaje que encarecen el proyecto. Hacerlo bien desde el inicio protege toda la inversión.",
      },
      {
        q: "¿Cuentan con maquinaria pesada?",
        a: "Sí. Ejecutamos los trabajos con retro pala, retroexcavadora y equipos de compactación operados por personal capacitado.",
      },
      {
        q: "¿Realizan estudios de suelo?",
        a: "Evaluamos las condiciones del sitio y, cuando el proyecto lo requiere, coordinamos los estudios de suelo dentro de nuestros servicios de ingeniería.",
      },
    ],
    images: fotos("preparacion-del-terreno", 6),
    metaDescription:
      "Movimiento de tierra, excavación, relleno, compactación y nivelación de terrenos en República Dominicana. Preparación de plataformas con equipos pesados.",
  },

  // --------------------------------------------------------------------------
  {
    slug: "mantenimiento-y-reparaciones",
    code: "72100000",
    name: "Servicios de Mantenimiento y Reparaciones de Construcciones",
    shortName: "Mantenimiento",
    icon: "Wrench",
    tagline: "Cuidamos y devolvemos la vida útil a lo construido.",
    heroDescription:
      "Mantenimiento preventivo y correctivo, reparaciones estructurales y rehabilitación de edificaciones existentes.",
    intro: [
      "Toda edificación requiere atención a lo largo del tiempo. En Zohapes Solution J.P. ejecutamos trabajos de mantenimiento y reparación que preservan el valor, la seguridad y la funcionalidad de los inmuebles.",
      "Intervenimos tanto de forma preventiva —para anticipar el deterioro— como correctiva —para resolver daños ya presentes—, desde reparaciones civiles menores hasta rehabilitaciones estructurales de mayor alcance. Cada intervención se realiza con un diagnóstico previo, para atacar la causa del problema y no solo sus síntomas.",
    ],
    incluye: [
      {
        title: "Mantenimiento de edificaciones",
        description:
          "Programas de mantenimiento preventivo que conservan el inmueble y evitan reparaciones mayores.",
      },
      {
        title: "Reparaciones estructurales",
        description:
          "Refuerzo y recuperación de elementos estructurales afectados por el tiempo, las cargas o daños.",
      },
      {
        title: "Reparaciones civiles",
        description:
          "Intervenciones en pisos, muros, techos, impermeabilización y acabados.",
      },
      {
        title: "Rehabilitación de obras",
        description:
          "Recuperación integral de edificaciones deterioradas para devolverles su funcionalidad.",
      },
      {
        title: "Trabajos correctivos y preventivos",
        description:
          "Soluciones para corregir fallas existentes y prevenir las futuras.",
      },
      {
        title: "Intervenciones en edificaciones existentes",
        description:
          "Trabajos planificados para minimizar las molestias en inmuebles que siguen en uso.",
      },
    ],
    proceso: [
      {
        title: "Diagnóstico",
        description:
          "Inspeccionamos la edificación e identificamos la causa real del problema.",
      },
      {
        title: "Propuesta de intervención",
        description:
          "Definimos alcance, solución técnica y presupuesto.",
      },
      {
        title: "Preparación del área",
        description:
          "Protegemos el entorno y preparamos la zona de trabajo.",
      },
      {
        title: "Ejecución de la reparación",
        description:
          "Realizamos la intervención con los materiales y técnicas adecuadas.",
      },
      {
        title: "Verificación y entrega",
        description:
          "Comprobamos el resultado y entregamos el área en condiciones.",
      },
    ],
    beneficios: [
      "Diagnóstico que ataca la causa, no solo el síntoma",
      "Intervenciones preventivas que evitan gastos mayores",
      "Trabajo planificado para inmuebles en uso",
      "Recuperación del valor y la seguridad del inmueble",
    ],
    faq: [
      {
        q: "¿Atienden emergencias o solo mantenimiento programado?",
        a: "Atendemos ambos: programas de mantenimiento preventivo y reparaciones correctivas puntuales según la necesidad.",
      },
      {
        q: "¿Pueden trabajar en un inmueble ocupado?",
        a: "Sí. Planificamos las intervenciones por etapas y protegemos las áreas para reducir las molestias a los ocupantes.",
      },
      {
        q: "¿Reparan fisuras y filtraciones?",
        a: "Sí. Diagnosticamos el origen de fisuras y filtraciones y aplicamos la solución correspondiente, incluida la impermeabilización.",
      },
    ],
    images: fotos("mantenimiento-y-reparaciones", 8),
    metaDescription:
      "Mantenimiento, reparaciones estructurales y civiles, y rehabilitación de edificaciones en República Dominicana. Trabajos preventivos y correctivos.",
  },

  // --------------------------------------------------------------------------
  {
    slug: "servicios-de-ingenieria",
    code: "81100000",
    name: "Servicios Profesionales de Ingeniería",
    shortName: "Ingeniería",
    icon: "Ruler",
    tagline: "Criterio técnico que respalda cada decisión.",
    heroDescription:
      "Supervisión de obra, dirección técnica, consultoría y asistencia profesional para proyectos de construcción.",
    intro: [
      "Detrás de toda obra bien ejecutada hay decisiones técnicas acertadas. En Zohapes Solution J.P. ponemos a disposición de cada proyecto el respaldo de servicios profesionales de ingeniería.",
      "Acompañamos al cliente con supervisión, dirección técnica y consultoría, ya sea como complemento de nuestra construcción o como servicio independiente para proyectos de terceros. Nuestro objetivo es que cada obra se ejecute conforme a los planos, las normas y el presupuesto, con un responsable técnico velando por la calidad.",
    ],
    incluye: [
      {
        title: "Supervisión de obras",
        description:
          "Control técnico en sitio para verificar que la ejecución cumpla planos, especificaciones y normas.",
      },
      {
        title: "Dirección técnica",
        description:
          "Conducción profesional del proyecto, tomando las decisiones técnicas que garantizan su correcto desarrollo.",
      },
      {
        title: "Asistencia técnica",
        description:
          "Apoyo especializado para resolver dudas y situaciones técnicas durante la obra.",
      },
      {
        title: "Consultoría en proyectos de construcción",
        description:
          "Asesoría experta en la planificación, la viabilidad y el desarrollo de proyectos.",
      },
      {
        title: "Apoyo técnico a proyectos",
        description:
          "Acompañamiento a equipos y propietarios en aspectos técnicos puntuales.",
      },
      {
        title: "Coordinación de obras",
        description:
          "Articulación de las distintas especialidades y actores para que la obra avance de forma ordenada.",
      },
    ],
    proceso: [
      {
        title: "Revisión del proyecto",
        description: "Analizamos planos, alcance y objetivos.",
      },
      {
        title: "Planificación técnica",
        description:
          "Definimos controles, cronograma y puntos críticos.",
      },
      {
        title: "Supervisión en sitio",
        description:
          "Verificamos la ejecución frente a planos y especificaciones.",
      },
      {
        title: "Informes y coordinación",
        description:
          "Reportamos avances y coordinamos las especialidades.",
      },
      {
        title: "Cierre técnico",
        description:
          "Validamos el cumplimiento y documentamos la entrega.",
      },
    ],
    beneficios: [
      "Un responsable técnico velando por la obra",
      "Ejecución conforme a planos, normas y presupuesto",
      "Disponible como servicio independiente o integrado",
      "Decisiones respaldadas por criterio profesional",
    ],
    faq: [
      {
        q: "¿Ofrecen supervisión para obras que no construyen ustedes?",
        a: "Sí. La supervisión y la dirección técnica están disponibles como servicios independientes para proyectos de terceros.",
      },
      {
        q: "¿Qué hace un director técnico de obra?",
        a: "Es el profesional responsable de las decisiones técnicas del proyecto, asegurando que la ejecución cumpla el diseño, las normas y la calidad esperada.",
      },
      {
        q: "¿Pueden asesorarme antes de iniciar mi proyecto?",
        a: "Sí. Nuestra consultoría abarca la etapa previa: viabilidad, planificación y definición del alcance del proyecto.",
      },
    ],
    images: fotos("servicios-de-ingenieria", 2),
    metaDescription:
      "Servicios profesionales de ingeniería: supervisión de obra, dirección técnica, consultoría y coordinación de proyectos de construcción en República Dominicana.",
  },
];

/** Devuelve un servicio por su slug. */
export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}

/** Lista de todos los slugs (para generación estática de rutas). */
export const servicioSlugs = servicios.map((s) => s.slug);
