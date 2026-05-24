// ----------------------------------------------------------------------------
// Diseños — proyectos diseñados por Zohapes Solution J.P.
// Renders y propuestas arquitectónicas (no necesariamente construidos).
// Cada diseño tiene URL propia: /disenos/<slug>
// ----------------------------------------------------------------------------

export interface DisenoFicha {
  label: string;
  value: string;
}

export interface Diseno {
  slug: string;
  name: string;
  categoria: string;
  estado: string;
  tagline: string;
  resumen: string;
  descTitulo: string;
  descripcion: string[];
  ficha: DisenoFicha[];
  highlights: string[];
  cover: string;
  exterior: string[];
  interior: string[];
  planoPdf?: string;
  metaDescription: string;
}

const fotos = (
  slug: string,
  vista: "exterior" | "interior",
  count: number
): string[] =>
  Array.from(
    { length: count },
    (_, i) => `/images/disenos/${slug}/${vista}/foto-${i + 1}.jpg`
  );

export const disenos: Diseno[] = [
  {
    slug: "villa-el-rubio",
    name: "Villa El Rubio",
    categoria: "Villa Contemporánea",
    estado: "Diseño completado — pendiente de construcción",
    tagline:
      "Una villa contemporánea diseñada para vivir el lujo en cada detalle.",
    resumen:
      "Diseño completo de Villa El Rubio: una residencia moderna concebida íntegramente por Zohapes Solution J.P., con un programa exterior de piscinas y jardines, e interiores cálidos y minimalistas.",
    descTitulo: "Un diseño residencial pensado al detalle",
    descripcion: [
      "Villa El Rubio es uno de los proyectos de diseño residencial desarrollados por Zohapes Solution J.P. Una villa contemporánea concebida desde cero, con un programa arquitectónico que combina volúmenes limpios, materiales nobles y un fuerte vínculo entre el interior y el exterior.",
      "El partido exterior se apoya en líneas horizontales sobrias —techos planos, voladizos, paramentos blancos y franjas de madera— enmarcadas por un paisajismo de palmas reales que define el carácter caribeño del conjunto. El acceso principal se anuncia con un portón perforado y la rotulación retroiluminada de la villa, integrada a la fachada perimetral.",
      "Hacia el interior del lote se desarrolla un programa social generoso: piscina principal, áreas de tumbonas, una segunda piscina infantil, zona de juegos para niños y un jardín perimetral que envuelve la vivienda. El estacionamiento techado al frente complementa los espacios funcionales del proyecto.",
      "En el interior, el diseño apuesta por una paleta cálida en tonos arena, madera y grises suaves. La sala principal articula sofá, comedor y mueble de televisión integrado en un solo eje visual; las habitaciones se resuelven con cabeceras tapizadas, paneles de madera, iluminación decorativa y armarios de pared a pared cuidadosamente proporcionados.",
      "Es un proyecto que refleja el lado más arquitectónico de la empresa: bajo la dirección técnica del Ing. Johangel Pérez P., no solo construimos —también diseñamos, de las plantas a los renders, el espacio donde nuestros clientes van a vivir. Villa El Rubio aún no se ha construido; lo que se muestra aquí es la propuesta de diseño completa, lista para llevarse a obra.",
    ],
    ficha: [
      { label: "Tipología", value: "Villa residencial unifamiliar" },
      { label: "Estilo", value: "Arquitectura contemporánea" },
      {
        label: "Programa exterior",
        value: "Piscinas, jardín, juegos infantiles y parqueo techado",
      },
      {
        label: "Paleta interior",
        value: "Tonos arena, madera natural y grises suaves",
      },
      { label: "Diseño y renders", value: "Zohapes Solution J.P, S.R.L." },
      { label: "Dirección técnica", value: "Ing. Johangel Pérez P." },
      {
        label: "Alcance",
        value: "Diseño arquitectónico — renders exterior e interior",
      },
      { label: "Estado", value: "Diseño completado · Pendiente de obra" },
    ],
    highlights: [
      "Arquitectura contemporánea con líneas horizontales sobrias",
      "Programa social con dos piscinas y áreas de esparcimiento",
      "Interiores cálidos en paleta arena, madera y grises",
      "Diseño íntegro de Zohapes Solution J.P. — del plano al render",
    ],
    cover: "/images/disenos/villa-el-rubio/cover.jpg",
    exterior: fotos("villa-el-rubio", "exterior", 7),
    interior: fotos("villa-el-rubio", "interior", 6),
    planoPdf: "/docs/planos-villa-el-rubio.pdf",
    metaDescription:
      "Villa El Rubio: diseño completo de una villa residencial contemporánea por Zohapes Solution J.P. — renders exterior e interior de una propuesta lista para construirse.",
  },
];

export function getDiseno(slug: string): Diseno | undefined {
  return disenos.find((d) => d.slug === slug);
}

export const disenoSlugs = disenos.map((d) => d.slug);
