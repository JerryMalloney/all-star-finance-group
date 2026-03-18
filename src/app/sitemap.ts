import type { MetadataRoute } from "next";

const baseUrl = "https://allstarfinancegroup.com";

const routes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/services/poliza-de-seguros-suplementarios",
  "/services/seguros-de-accidente",
  "/services/seguros-de-automoviles",
  "/services/seguros-de-medicare",
  "/services/seguros-de-salud",
  "/services/seguros-de-vida",
  "/services/seguros-dentales",
  "/services/seguros-gastos-finales",
  "/services/servicios-de-taxes",
  "/impuestos",
  "/impuestos/impuestos-irs",
  "/impuestos/contabilidad-de-corporaciones",
  "/impuestos/nuevas-corporaciones",
  "/impuestos/enmiendas-reanudar-cambio-de-nombre-de-corporaciones",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    priority: route === "" ? 1 : 0.8,
  }));
}
