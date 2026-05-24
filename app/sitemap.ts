import type { MetadataRoute } from "next";
import { proyectoSlugs } from "@/data/proyectos";
import { servicioSlugs } from "@/data/servicios";
import { disenoSlugs } from "@/data/disenos";

const SITE_URL = "https://zohapessolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicioRoutes: MetadataRoute.Sitemap = servicioSlugs.map((slug) => ({
    url: `${SITE_URL}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const proyectoRoutes: MetadataRoute.Sitemap = proyectoSlugs.map((slug) => ({
    url: `${SITE_URL}/proyectos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const disenoRoutes: MetadataRoute.Sitemap = disenoSlugs.map((slug) => ({
    url: `${SITE_URL}/disenos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...servicioRoutes, ...proyectoRoutes, ...disenoRoutes];
}
