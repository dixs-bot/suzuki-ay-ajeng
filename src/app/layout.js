import "./globals.css";
import { siteConfig } from "../data/siteConfig";

export const viewport = {
  themeColor: "#00439C",
  width: "device-width",
  initialScale: 1.0,
};

export const metadata = {
  metadataBase: new URL("https://suzuki-rian.vercel.app/"),

  // === SEO TITLE ===
  title: `Suzuki Ajeng | Sales Mobil Suzuki – Harga, Promo & Kredit`,

  // === SEO DESCRIPTION ===
  description:
    "Dapatkan informasi mobil Suzuki, harga, promo, simulasi kredit dan test drive. Konsultasi pembelian mobil Suzuki bersama Ajeng — Suzuki Sales Consultant untuk wilayah Bandung, Cimahi, dan Jawa Barat.",

  // === KEYWORDS ===
  keywords:
    "Suzuki Ajeng, Sales Suzuki, Mobil Suzuki Bandung, Harga Suzuki, Promo Suzuki, Simulasi Kredit Suzuki, Test Drive Suzuki, Suzuki XL7, Suzuki Ertiga, Suzuki Grand Vitara, Suzuki Jimny, Suzuki Fronx, Suzuki Carry, Konsultan Suzuki Bandung",

  authors: [{ name: siteConfig.businessName }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://suzuki-rian.vercel.app/",
  },

  openGraph: {
    title: `Suzuki Ajeng | Sales Mobil Suzuki – Harga, Promo & Kredit`,
    description:
      "Dapatkan informasi mobil Suzuki, harga, promo, simulasi kredit dan test drive. Konsultasi pembelian mobil Suzuki bersama Ajeng.",
    type: "website",
    url: "https://suzuki-rian.vercel.app/",
    siteName: siteConfig.businessName,
    locale: "id_ID",
    images: [{ url: "/images/newxl7.png", width: 1200, height: 800, alt: "Suzuki XL7 — Ajeng Sales Suzuki" }],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/newxl7.png"],
    title: `Suzuki Ajeng | Sales Mobil Suzuki – Harga, Promo & Kredit`,
    description:
      "Konsultasi pembelian mobil Suzuki bersama Ajeng — Harga, Promo, Simulasi Kredit & Test Drive.",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.salesName,
    jobTitle: siteConfig.salesRole,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.siteUrl,
    image: siteConfig.salesPhoto,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.dealerName,
    },
    areaServed: siteConfig.serviceArea,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.businessName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. A. Yani No.259, Cihapit, Kec. Bandung Wetan",
      addressLocality: "Kota Bandung",
      addressRegion: "Jawa Barat",
      postalCode: "40114",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.dealerCoords.lat,
      longitude: siteConfig.dealerCoords.lng,
    },
    areaServed: ["Bandung", "Cimahi", "Jawa Barat"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    description:
      "Website pemasaran & konsultasi pembelian mobil Suzuki bersama Ajeng — Suzuki Sales Consultant.",
  };

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/icon.png" />

        {/* Google Fonts: Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data: Person (Sales) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Structured Data: AutomotiveBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Bagaimana cara konsultasi pembelian mobil Suzuki dengan Ajeng?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `Anda bisa langsung chat WhatsApp ${siteConfig.salesName} di ${siteConfig.phoneNumberFormatted}, atau mengisi formulir kontak di halaman ini. ${siteConfig.salesName} akan membantu dari pemilihan unit, simulasi kredit, hingga serah terima unit.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa DP minimal mobil Suzuki?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `DP minimal mengikuti ketentuan leasing, namun banyak paket promo DP ringan mulai dari 15% untuk tipe tertentu. Hubungi ${siteConfig.salesName} via WhatsApp untuk cek promo terbaru yang sesuai dengan profil Anda.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah bisa tukar tambah mobil lama dengan mobil Suzuki baru?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `Bisa. ${siteConfig.salesName} melayani tukar tambah mobil lama Anda ke mobil Suzuki baru. Proses dibantu sampai selesai termasuk appraisal unit lama dan pengurusan berkas.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah bisa jadwalkan test drive?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `Tentu. Anda bisa menjadwalkan test drive melalui formulir di section Test Drive atau langsung chat WhatsApp ${siteConfig.salesName}. Silakan tentukan unit yang ingin dicoba dan tanggal yang diinginkan.`,
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
