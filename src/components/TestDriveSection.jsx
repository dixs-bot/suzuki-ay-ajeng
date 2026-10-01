"use client";

import { useState } from "react";
import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

/**
 * Section "Jadwalkan Test Drive Suzuki"
 *
 * Form mengirim data langsung ke WhatsApp Ajeng (tidak ada backend).
 */
export default function TestDriveSection({ products }) {
  const today = new Date().toISOString().split("T")[0];
  const productOptions = (products || []).map((p) => p.name);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: productOptions[0] || "",
    city: "",
    date: ""
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateStr = form.date
      ? new Date(form.date).toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        })
      : "-";
    const message =
      `Halo Kak ${siteConfig.salesName}, saya ingin menjadwalkan Test Drive Suzuki.\n\n` +
      `• Nama: ${form.name}\n` +
      `• No. WhatsApp: ${form.phone}\n` +
      `• Mobil yang diminati: ${form.car}\n` +
      `• Kota: ${form.city}\n` +
      `• Tanggal yang diinginkan: ${dateStr}\n\n` +
      `Mohon info jadwal & lokasi test drive. Terima kasih.`;
    window.open(getWhatsAppLink(message), "_blank");
    setSent(true);
  };

  return (
    <section id="test-drive" className="section test-drive-section">
      <div className="container">
        <div className="test-drive-grid">
          <div className="test-drive-info reveal">
            <span className="section-eyebrow">Test Drive Suzuki</span>
            <h2 className="section-title">Rasakan Suzuki Secara Langsung</h2>
            <div className="blue-line" aria-hidden="true"></div>
            <p className="section-subtitle">
              Pilih kendaraan yang ingin Anda coba dan jadwalkan test drive.
            </p>
            <div className="td-visual">
              <span className="hero-shape" aria-hidden="true"></span>
              <img src="/images/grand-vitara.png" alt="Suzuki Grand Vitara untuk test drive" loading="lazy" />
            </div>

            <ul className="test-drive-benefits">
              <li>
                <span className="td-check" aria-hidden="true">✓</span>
                <div>
                  <strong>Gratis & Tanpa Biaya</strong>
                  <p>Test drive tidak dikenakan biaya, cukup jadwalkan jauh hari.</p>
                </div>
              </li>
              <li>
                <span className="td-check" aria-hidden="true">✓</span>
                <div>
                  <strong>Bebas Pilih Unit</strong>
                  <p>Pilih unit Suzuki yang ingin Anda coba sesuai kebutuhan.</p>
                </div>
              </li>
              <li>
                <span className="td-check" aria-hidden="true">✓</span>
                <div>
                  <strong>Dampingi Sales</strong>
                  <p>{siteConfig.salesName} akan mendampingi & menjelaskan fitur unit.</p>
                </div>
              </li>
            </ul>

            <div className="test-drive-cta-callout card">
              <div>
                <p className="td-callout-label">Butuh bantuan cepat?</p>
                <p className="td-callout-text">
                  Telepon {siteConfig.salesName} di{" "}
                  <strong>{siteConfig.phoneNumberFormatted}</strong>
                </p>
              </div>
              <a href={`tel:${siteConfig.phone}`} className="btn btn-outline btn-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Telepon
              </a>
            </div>
          </div>

          <form className="card test-drive-form reveal" onSubmit={handleSubmit}>
            <h3>Formulir Jadwal Test Drive</h3>

            <div className="form-group">
              <label htmlFor="td-name">Nama Lengkap</label>
              <input
                type="text"
                id="td-name"
                name="name"
                placeholder="Nama lengkap Anda"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="td-phone">Nomor WhatsApp</label>
              <input
                type="tel"
                id="td-phone"
                name="phone"
                placeholder="08xx-xxxx-xxxx"
                required
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="td-car">Mobil yang Diminati</label>
              <select
                id="td-car"
                name="car"
                required
                value={form.car}
                onChange={handleChange}
              >
                {productOptions.map((name, i) => (
                  <option key={i} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="td-city">Kota</label>
              <input
                type="text"
                id="td-city"
                name="city"
                placeholder="Contoh: Bandung, Cimahi, Garut, dst."
                required
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="td-date">Tanggal yang Diinginkan</label>
              <input
                type="date"
                id="td-date"
                name="date"
                min={today}
                required
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Jadwalkan Test Drive <span className="arrow" aria-hidden="true">→</span>
            </button>

            {sent && (
              <p className="form-success-msg">
                ✓ Permintaan test drive telah disiapkan untuk {siteConfig.salesName}. Silakan kirim pesan konfirmasi pada jendela yang terbuka.
              </p>
            )}

            <p className="form-disclaimer">
              Data formulir diteruskan ke konsultan untuk konfirmasi jadwal, tidak disimpan di server.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
