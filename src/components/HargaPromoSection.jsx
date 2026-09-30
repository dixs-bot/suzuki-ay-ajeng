"use client";

import { getWhatsAppLink, siteConfig } from "../data/siteConfig";

const formatRupiah = (val) => "Rp " + (val || 0).toLocaleString("id-ID");

/**
 * Section "Harga & Promo Suzuki"
 *
 * Hanya menampilkan ringkasan harga mulai dari berbagai model + CTA tanya promo.
 * TIDAK mengarang harga / promo / cashback. Semua angka berasal dari data produk
 * yang sudah tersedia di repository (src/data/products.js).
 */
export default function HargaPromoSection({ products }) {
  // Ambil 6 produk pilihan untuk ditampilkan ringkasan harga mulai
  const featured = products.slice(0, 6);

  const promoInfo = [
    {
      icon: "💰",
      title: "Promo & Diskon Spesial",
      desc: "Dapatkan penawaran terbaik untuk setiap model & varian Suzuki.",
      ctaText: "Tanya Promo Aktif"
    },
    {
      icon: "📋",
      title: "Paket Kredit Fleksibel",
      desc: "Tenor 1–5 tahun, DP mulai 15%, simulasi sesuai budget Anda.",
      ctaText: "Simulasi Kredit"
    },
    {
      icon: "🚗",
      title: "Tukar Tambah (Trade-In)",
      desc: "Appraisal unit lama dibantu, proses cepat & transparan.",
      ctaText: "Konsultasi Trade-In"
    },
    {
      icon: "🎁",
      title: "Bonus Aksesoris",
      desc: "Tersedia paket bonus aksesoris untuk pembelian tertentu.",
      ctaText: "Minta Info Bonus"
    }
  ];

  return (
    <section id="promo" className="section section-alt">
      <div className="container">
        <div className="reveal text-center" style={{ marginBottom: "40px" }}>
          <span className="section-eyebrow">Penawaran Terkini</span>
          <h2 className="section-title">
            Harga &amp; <span className="title-accent">Promo</span> Suzuki
          </h2>
          <p className="section-subtitle">
            Cek harga mulai dari berbagai model Suzuki dan dapatkan informasi promo, paket kredit,
            serta bonus aksesoris terbaru langsung dari {siteConfig.salesName}.
          </p>
        </div>

        {/* Daftar harga mulai dari */}
        <div className="price-list-grid reveal">
          {featured.map((p) => {
            const prices = (p.variants || [])
              .map((v) => (typeof v.price === "number" ? v.price : 0))
              .filter((v) => v > 0);
            const minPrice = prices.length ? Math.min(...prices) : 0;
            const waMsg = `Halo Kak ${siteConfig.salesName}, saya ingin tanya harga, promo, dan simulasi kredit untuk ${p.name}.`;

            return (
              <a
                key={p.id}
                href={getWhatsAppLink(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="price-list-item card"
              >
                <div className="price-list-thumb">
                  <img src={`/images/${p.image}`} alt={p.name} loading="lazy" />
                </div>
                <div className="price-list-info">
                  <h4>{p.name}</h4>
                  <p className="price-list-tagline">{p.tagline}</p>
                  <div className="price-list-price">
                    <span className="price-label">Mulai dari</span>
                    <span className="price-val-sm">{formatRupiah(minPrice)}</span>
                  </div>
                </div>
                <span className="price-list-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>

        {/* Promo / Layanan cards */}
        <div className="promo-cards-grid reveal">
          {promoInfo.map((item, idx) => (
            <div key={idx} className="card promo-card">
              <div className="promo-card-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <a
                href={getWhatsAppLink(
                  `Halo Kak ${siteConfig.salesName}, saya ingin informasi mengenai ${item.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="promo-card-link"
              >
                {item.ctaText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="promo-disclaimer reveal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>
            Harga, promo, dan program kredit dapat berubah sewaktu-waktu. Silakan hubungi{" "}
            <strong>{siteConfig.salesName}</strong> untuk mendapatkan informasi terbaru yang sesuai
            dengan profil dan wilayah Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
