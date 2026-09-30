"use client";

import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      {/* Decorative gradient background */}
      <div className="hero-bg-decor" aria-hidden="true"></div>

      <div className="container hero-grid">
        <div className="hero-left">
          <div className="badge badge-sales animate-fade-up">
            <span className="badge-dot"></span>
            {siteConfig.salesTagline} · {siteConfig.dealerName}
          </div>

          <h1 className="animate-fade-up hero-headline" style={{ "--delay": "0.15s" }}>
            Temukan Mobil Suzuki <span className="text-accent">Impian Anda</span>
          </h1>

          <p className="animate-fade-up hero-subheadline" style={{ "--delay": "0.3s" }}>
            Dapatkan informasi harga, promo, simulasi kredit, dan konsultasi
            pembelian mobil Suzuki bersama <strong>{siteConfig.salesName}</strong>.
          </p>

          <div className="hero-trust-pills animate-fade-up" style={{ "--delay": "0.4s" }}>
            <span className="trust-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Respon Cepat
            </span>
            <span className="trust-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Konsultasi Gratis
            </span>
            <span className="trust-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Dibantu sampai Pembelian
            </span>
          </div>

          <div className="hero-actions animate-fade-up" style={{ "--delay": "0.45s" }}>
            <a
              href={getWhatsAppLink(siteConfig.defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-glow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Konsultasi via WhatsApp
            </a>
            <a href="#produk" className="btn btn-outline">
              Lihat Mobil Suzuki
            </a>
          </div>

          <div className="sales-card animate-fade-up" style={{ "--delay": "0.6s" }}>
            <div className="sales-card-avatar">
              <img
                src={siteConfig.salesPhoto}
                alt={`${siteConfig.salesName} — ${siteConfig.salesRole}`}
                loading="eager"
              />
            </div>
            <div className="sales-card-info">
              <p className="sales-name">{siteConfig.salesName}</p>
              <p className="sales-role">{siteConfig.salesRole}</p>
              <p className="sales-area">📍 Melayani {siteConfig.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="hero-right animate-fade-up" style={{ "--delay": "0.3s" }}>
          <div className="hero-video-wrap">
            <img
              src="/images/newxl7.png"
              alt="Suzuki XL7 — Unit Unggulan"
              className="hero-product-img"
              loading="eager"
            />
            <div className="hero-video-overlay">
              <span className="hero-video-tag">Unit Unggulan Suzuki</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-stats animate-fade-up" style={{ "--delay": "0.75s" }}>
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Unit Terjual / Tahun</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Kredit Disetujui</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Fast</span>
          <span className="stat-label">Respon Konsultasi</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1-Stop</span>
          <span className="stat-label">Dibantu sampai Serah Terima</span>
        </div>
      </div>
    </section>
  );
}
