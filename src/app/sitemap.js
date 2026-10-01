import { siteConfig } from "../data/siteConfig";

export default function sitemap() {
  const baseUrl = "https://www.suzukiuntukbdg.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
