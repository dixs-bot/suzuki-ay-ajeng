"use client";

import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-wrap">
              <img
                src="/images/suzuki-logo.png"
                alt="Logo Suzuki"
                className="footer-logo-img"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">SUZUKI</span>
                <span className="footer-brand-sub">Sales Consultant</span>
              </div>
            </div>
            <p className="footer-desc">
              Konsultasi & penawaran mobil Suzuki bersama {siteConfig.salesName} —{" "}
              {siteConfig.salesRole}. Dapatkan informasi harga, promo, simulasi kredit, dan test
              drive untuk seluruh model Suzuki.
            </p>
            <p className="footer-area">
              <strong>Area Pelayanan:</strong> {siteConfig.serviceArea}
            </p>
          </div>

          {/* Navigation: Suzuki */}
          <div className="footer-col">
            <h4 className="footer-heading">SUZUKI</h4>
            <nav className="footer-nav">
              <a href="#produk">Mobil Suzuki</a>
              <a href="#promo">Harga & Promo</a>
              <a href="#test-drive">Test Drive</a>
              <a href="#simulasi">Simulasi Kredit</a>
              <a href="#kontak">Konsultasi</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4 className="footer-heading">Produk Populer</h4>
            <nav className="footer-nav">
              <a href="#produk">Suzuki XL7</a>
              <a href="#produk">Suzuki Ertiga</a>
              <a href="#produk">Suzuki Grand Vitara</a>
              <a href="#produk">Suzuki Jimny</a>
              <a href="#produk">Suzuki Fronx</a>
              <a href="#produk">Suzuki Carry</a>
            </nav>
          </div>

          {/* Sales Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">{siteConfig.salesName}</h4>
            <p className="footer-sales-role">{siteConfig.salesRole}</p>
            <nav className="footer-nav footer-contact-nav">
              <a href="#kontak">Kontak &amp; Konsultasi</a>
              <a href={`tel:${siteConfig.phone}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Telepon: {siteConfig.phoneNumberFormatted}
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {siteConfig.email}
              </a>
            </nav>
            <p className="footer-hours">
              <strong>Jam Pelayanan:</strong>
              <br />
              {siteConfig.operatingHours}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          <p>
            Website ini digunakan sebagai media informasi dan konsultasi penjualan kendaraan Suzuki.
            Harga, promo, spesifikasi, warna, dan ketersediaan kendaraan dapat berubah sewaktu-waktu.
            Hubungi {siteConfig.salesName} untuk informasi terbaru.
          </p>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="footer-bottom-note">
            Suzuki dan logo Suzuki adalah merek dagang milik Suzuki Motor Corporation. Website ini
            dikelola secara independen oleh {siteConfig.salesName} sebagai {siteConfig.salesRole}.
          </p>
        </div>
      </div>
    </footer>
  );
}
