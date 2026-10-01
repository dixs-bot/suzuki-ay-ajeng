"use client";

import { useState } from "react";
import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function WhatsAppButton() {
  const [popupOpen, setPopupOpen] = useState(false);

  const defaultMessage = `Halo Kak ${siteConfig.salesName}, saya ingin mendapatkan informasi mengenai mobil Suzuki dan promo terbaru.`;

  return (
    <>
      <button
        id="wa-float"
        className="wa-float"
        aria-label={`Chat WhatsApp ${siteConfig.salesName}`}
        onClick={() => setPopupOpen(!popupOpen)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.593-.836-6.32-2.228l-.44-.358-2.898.972.972-2.898-.358-.44A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
        </svg>
        {!popupOpen && <span className="wa-float-pulse" aria-hidden="true"></span>}
      </button>

      <div
        id="wa-popup"
        className={`wa-popup ${popupOpen ? "" : "hidden"}`}
        aria-hidden={!popupOpen}
      >
        <div className="wa-popup-card">
          <div className="wa-popup-arrow"></div>
          <div className="wa-popup-header">
            <p className="wa-popup-title">Konsultasi dengan {siteConfig.salesName}</p>
            <p className="wa-popup-subtitle">{siteConfig.salesRole}</p>
          </div>

          <a
            href={getWhatsAppLink(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-sales-btn"
          >
            <div className="wa-sales-avatar">
              <img
                src={siteConfig.salesPhoto}
                alt={siteConfig.salesName}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
            <div className="wa-sales-info">
              <span className="wa-sales-name">{siteConfig.salesName}</span>
              <span className="wa-sales-role">{siteConfig.salesRole}</span>
              <span className="wa-sales-status">
                <span className="wa-status-dot" aria-hidden="true"></span>
                Online · Respon Cepat
              </span>
            </div>
            <svg className="wa-sales-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>

          <p className="wa-popup-help-text">
            Klik untuk memulai chat WhatsApp dengan {siteConfig.salesName}. Pesan otomatis sudah
            disiapkan untuk Anda.
          </p>
        </div>
      </div>
    </>
  );
}
