"use client";

import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function AboutSection() {
  return (
    <section id="tentang" className="section about-ajeng-section">
      <div className="container about-grid">
        <div className="about-image-wrap reveal">
          <div className="sales-photo-wrap">
            <img
              src={siteConfig.salesPhoto}
              alt={`${siteConfig.salesName} — ${siteConfig.salesRole} Suzuki`}
              className="sales-photo"
              loading="lazy"
            />
            <div className="sales-photo-badge">
              <span className="badge-name">{siteConfig.salesName}</span>
              <span className="badge-status">{siteConfig.salesRole}</span>
            </div>
          </div>
        </div>

        <div className="about-text reveal">
          <span className="section-eyebrow">Tentang Sales</span>
          <h2 className="section-title">
            Konsultasi Bersama <span className="title-accent">{siteConfig.salesName}</span>
          </h2>
          <p className="about-lead">
            Halo! Saya <strong>{siteConfig.salesName}</strong>,{" "}
            <strong>{siteConfig.salesRole}</strong> di {siteConfig.dealerName}.
          </p>
          <p>
            Siap membantu Anda menemukan kendaraan Suzuki yang sesuai dengan kebutuhan dan budget
            Anda. Saya melayani pembelian cash maupun kredit untuk wilayah {siteConfig.serviceArea}.
          </p>

          <div className="about-features">
            <div className="about-feature-item">
              <div className="af-icon" aria-hidden="true">✓</div>
              <div>
                <h4>Konsultasi Sesuai Kebutuhan</h4>
                <p>Bantuan pilih unit Suzuki yang paling cocok untuk gaya hidup & budget Anda.</p>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="af-icon" aria-hidden="true">✓</div>
              <div>
                <h4>Informasi Produk & Harga</h4>
                <p>Detail spesifikasi, varian, warna, dan harga OTR yang transparan.</p>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="af-icon" aria-hidden="true">✓</div>
              <div>
                <h4>Bantuan Simulasi Kredit</h4>
                <p>Simulasi DP, tenor, dan cicilan, dibantu proses pengajuan ke leasing.</p>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="af-icon" aria-hidden="true">✓</div>
              <div>
                <h4>Pendampingan Hingga Serah Terima</h4>
                <p>Dibantu dari pemberkasan hingga serah terima unit di lokasi Anda.</p>
              </div>
            </div>
          </div>

          <div className="about-cta-row">
            <a
              href={getWhatsAppLink(siteConfig.defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-glow"
            >
              Hubungi {siteConfig.salesName} via WhatsApp
            </a>
            <a href="#test-drive" className="btn btn-outline">
              Jadwalkan Test Drive
            </a>
          </div>
        </div>
      </div>

      {/* Lokasi Dealer */}
      <section className="section section-alt about-location-section">
        <div className="container text-center reveal">
          <span className="section-eyebrow">Lokasi Dealer</span>
          <h2 className="section-title">
            Kunjungi <span className="title-accent">{siteConfig.dealerName}</span>
          </h2>
          <p className="section-subtitle">
            Datang langsung ke showroom untuk melihat unit mobil Suzuki, test drive, dan konsultasi
            pembelian bersama {siteConfig.salesName}.
          </p>

          <div
            className="map-container"
            style={{ marginTop: "24px", borderRadius: "16px", overflow: "hidden" }}
          >
            <iframe
              src={siteConfig.mapsUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Lokasi ${siteConfig.dealerName}`}
            ></iframe>
          </div>

          <div
            className="card about-location-card"
            style={{ marginTop: "24px", maxWidth: "640px", margin: "24px auto 0" }}
          >
            <h3 style={{ marginBottom: "8px" }}>Alamat Showroom</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "12px" }}>
              {siteConfig.address}
            </p>
            <p style={{ color: "var(--text-secondary)", marginBottom: "12px" }}>
              <strong>Jam Pelayanan:</strong> {siteConfig.operatingHours}
            </p>
            <a
              href={getWhatsAppLink(
                `Halo Kak ${siteConfig.salesName}, saya ingin kunjungan ke showroom ${siteConfig.dealerName}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-glow"
              style={{ marginTop: "4px" }}
            >
              Jadwalkan Kunjungan
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
