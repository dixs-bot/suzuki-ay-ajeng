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
            <h2 className="section-title">
              Ingin mencoba <span className="title-accent">langsung?</span>
            </h2>
            <p className="section-subtitle">
              Jadwalkan Test Drive Suzuki dan rasakan langsung kenyamanan berkendara mobil Suzuki
              pilihan Anda. Form akan dikirim ke WhatsApp {siteConfig.salesName} untuk konfirmasi
              jadwal dan lokasi.
            </p>

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
                  Hubungi langsung {siteConfig.salesName} di{" "}
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

            <button type="submit" className="btn btn-primary btn-glow btn-full">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Kirim via WhatsApp
            </button>

            {sent && (
              <p className="form-success-msg">
                ✓ Formulir telah disiapkan di WhatsApp {siteConfig.salesName}. Silakan kirim pesan
                dari aplikasi WhatsApp Anda.
              </p>
            )}

            <p className="form-disclaimer">
              Data formulir dikirim langsung ke WhatsApp sales, tidak disimpan di server.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
