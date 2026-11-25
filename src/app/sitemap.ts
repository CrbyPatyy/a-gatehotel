import type { MetadataRoute } from "next";

const BASE_URL = "https://www.a-gatehotel.com/hakodate";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/rooms",
    "/plan",
    "/merit",
    "/faq",
    "/access",
    "/reservation",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
