"use client";

import { siteConfig } from "../data/siteConfig";

/**
 * Section "Mengapa Konsultasi Bersama Ajeng?"
 * 4 poin keunggulan konsultasi dengan sales.
 */
export default function TrustSection() {
  const points = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
      title: "Konsultasi Sesuai Kebutuhan",
      desc: "Pendampingan pemilihan unit Suzuki yang sesuai dengan kebutuhan, gaya hidup, dan budget Anda — tanpa paksaan."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
      title: "Informasi Produk & Harga",
      desc: "Detail spesifikasi, varian, warna, dan harga OTR yang transparan untuk semua model mobil Suzuki."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: "Bantuan Simulasi Kredit",
      desc: "Simulasi DP, tenor, dan estimasi cicilan sesuai profil Anda, dibantu proses pengajuan ke leasing."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      ),
      title: "Pendampingan Proses Pembelian",
      desc: "Dibantu dari awal pemberkasan hingga serah terima unit — termasuk tukar tambah, klaim asuransi, & after sales."
    }
  ];

  return (
    <section id="trust" className="section section-alt">
      <div className="container">
        <div className="reveal text-center" style={{ marginBottom: "40px" }}>
          <span className="section-eyebrow">Kepercayaan Pelanggan</span>
          <h2 className="section-title">
            Mengapa Konsultasi Bersama <span className="title-accent">{siteConfig.salesName}</span>?
          </h2>
          <p className="section-subtitle">
            {siteConfig.salesName} berkomitmen memberikan pelayanan profesional dan transparan
            untuk pembelian mobil Suzuki Anda.
          </p>
        </div>

        <div className="trust-grid reveal">
          {points.map((p, i) => (
            <div key={i} className="card trust-card">
              <div className="trust-icon-wrap">{p.icon}</div>
              <h3 className="trust-title">
                <span className="trust-check" aria-hidden="true">✓</span>
                {p.title}
              </h3>
              <p className="trust-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
