import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mdsaidulislam.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mdsaidulislam.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://mdsaidulislam.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://mdsaidulislam.com/contact",
      lastModified: new Date(),
    },
  ];
}