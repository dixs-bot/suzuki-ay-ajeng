"use client";

import { siteConfig } from "../data/siteConfig";
import { getMinPrice, formatRupiah } from "../lib/category";

export default function HargaPromoSection({ products, onOpenDetail }) {
  const featured = products.slice(0, 6);

  const promoInfo = [
    { title: "Promo & Diskon Spesial", desc: "Dapatkan penawaran terbaik untuk setiap model & varian Suzuki.", ctaText: "Tanya Promo Aktif", href: "#kontak" },
    { title: "Paket Kredit Fleksibel", desc: "Tenor 1–5 tahun, DP mulai 15%, simulasi sesuai budget Anda.", ctaText: "Simulasi Kredit", href: "#simulasi" },
    { title: "Tukar Tambah (Trade-In)", desc: "Appraisal unit lama dibantu, proses cepat & transparan.", ctaText: "Konsultasi Trade-In", href: "#kontak" },
    { title: "Bonus Aksesoris", desc: "Tersedia paket bonus aksesoris untuk pembelian tertentu.", ctaText: "Minta Info Bonus", href: "#kontak" }
  ];

  return (
    <section id="promo" className="section section-alt promo-section">
      <div className="section-grid-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="reveal text-center sec-head">
          <span className="section-eyebrow">Penawaran Terkini</span>
          <h2 className="section-title">Harga &amp; Promo Suzuki</h2>
          <div className="blue-line center" aria-hidden="true"></div>
          <p className="section-subtitle">
            Cek harga mulai dari berbagai model Suzuki dan informasi promo, paket kredit, serta bonus aksesoris
            terbaru dari {siteConfig.salesName}.
          </p>
        </div>

        <div className="price-list-grid reveal">
          {featured.map((p, i) => (
            <article key={p.id} className="price-list-item card">
              <span className="promo-label">{i % 2 === 0 ? "PROMO" : "SPECIAL OFFER"}</span>
              <div className="price-list-thumb">
                <img src={`/images/${p.image}`} alt={p.name} loading="lazy" />
              </div>
              <div className="price-list-info">
                <h3>{p.name}</h3>
                <p className="price-list-tagline">{p.tagline}</p>
                <div className="price-list-price">
                  <span className="price-label">Harga mulai</span>
                  <span className="price-val-sm">{formatRupiah(getMinPrice(p.variants))}</span>
                </div>
                <button type="button" className="btn btn-outline btn-sm" onClick={() => onOpenDetail(p)}>
                  Lihat Program <span className="arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="promo-cards-grid reveal">
          {promoInfo.map((item, idx) => (
            <div key={idx} className="card promo-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.href} className="promo-card-link">
                {item.ctaText} <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="promo-disclaimer reveal">
          <p>
            Harga, promo, dan program kredit dapat berubah sewaktu-waktu. Hubungi <strong>{siteConfig.salesName}</strong>{" "}
            untuk informasi terbaru yang sesuai dengan profil dan wilayah Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
