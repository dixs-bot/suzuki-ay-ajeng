import { siteConfig } from "../data/siteConfig";

export default function robots() {
  const baseUrl = "https://www.suzukiuntukbdg.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  };
}
