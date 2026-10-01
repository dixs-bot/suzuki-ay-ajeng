"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Show only once per session
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ajeng_promo_shown") === "1") {
      setIsOpen(false);
      return;
    }
    if (isOpen) {
      sessionStorage.setItem("ajeng_promo_shown", "1");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="spp-overlay spp-active"
      onClick={(e) => {
        if (e.target.classList.contains("spp-overlay")) setIsOpen(false);
      }}
    >
      <div className="spp-card">
        <button
          onClick={() => setIsOpen(false)}
          className="spp-close"
          aria-label="Tutup"
        >
          &times;
        </button>

        <div className="spp-card-header">
          <span className="spp-badge">Konsultasi & Penawaran Mobil Suzuki</span>
          <h3 className="spp-title">Dapatkan Info Promo & Simulasi Kredit Suzuki</h3>
          <p className="spp-text">
            Hubungi <strong>{siteConfig.salesName}</strong> — {siteConfig.salesRole} — untuk
            mendapatkan informasi harga, promo, paket kredit, dan bonus aksesoris terbaru untuk
            pembelian mobil Suzuki di {siteConfig.serviceArea}.
          </p>
        </div>

        <div className="spp-actions">
          <a href="#promo" className="btn btn-primary btn-full" onClick={() => setIsOpen(false)}>
            Lihat Harga &amp; Promo <span className="arrow" aria-hidden="true">→</span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-outline btn-full"
          >
            Tutup
          </button>
        </div>

        <p className="spp-disclaimer">
          Harga, promo, dan program kredit dapat berubah sewaktu-waktu.
        </p>
      </div>
    </div>
  );
}
