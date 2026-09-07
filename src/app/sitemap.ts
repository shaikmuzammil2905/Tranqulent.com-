import { MetadataRoute } from "next";
import { CAPABILITIES_DATA } from "@/data/websiteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tranquelent.com";

  const staticRoutes = [
    "",
    "/services",
    "/about-us",
    "/industries",
    "/careers",
    "/contact-us",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = CAPABILITIES_DATA.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
