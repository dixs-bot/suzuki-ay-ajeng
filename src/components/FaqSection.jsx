"use client";

import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Bagaimana cara konsultasi pembelian mobil Suzuki dengan Ajeng?",
      a: `Anda bisa langsung chat WhatsApp ${siteConfig.salesName} di ${siteConfig.phoneNumberFormatted}, atau mengisi formulir kontak di halaman ini. ${siteConfig.salesName} akan membantu dari pemilihan unit, simulasi kredit, hingga serah terima unit.`
    },
    {
      q: "Berapa DP minimal mobil Suzuki?",
      a: `DP minimal mengikuti ketentuan leasing, namun banyak paket promo DP ringan mulai dari 15% untuk tipe tertentu. Hubungi ${siteConfig.salesName} via WhatsApp untuk cek promo terbaru yang sesuai dengan profil Anda.`
    },
    {
      q: "Apakah bisa tukar tambah mobil lama dengan mobil Suzuki baru?",
      a: `Bisa. ${siteConfig.salesName} melayani tukar tambah mobil lama Anda ke mobil Suzuki baru. Proses dibantu sampai selesai termasuk appraisal unit lama dan pengurusan berkas.`
    },
    {
      q: "Apakah melayani pembelian dari luar kota Bandung?",
      a: `Ya, ${siteConfig.salesName} melayani konsumen dari ${siteConfig.serviceArea}. Untuk wilayah yang lebih jauh, silakan diskusikan langsung via WhatsApp untuk pengaturan proses pembelian.`
    },
    {
      q: "Apakah bisa jadwalkan test drive?",
      a: `Tentu. Anda bisa menjadwalkan test drive melalui formulir di section "Test Drive" atau langsung chat WhatsApp ${siteConfig.salesName}. Silakan tentukan unit yang ingin dicoba dan tanggal yang diinginkan.`
    },
    {
      q: "Apakah simulasi kredit di website sudah final?",
      a: `Hasil simulasi kredit di website merupakan estimasi dan bukan penawaran pembiayaan resmi. Untuk perhitungan final sesuai profil Anda, silakan hubungi ${siteConfig.salesName} yang akan membantu proses pengajuan ke leasing.`
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="reveal text-center" style={{ marginBottom: "32px" }}>
          <span className="section-eyebrow">Pertanyaan Umum</span>
          <h2 className="section-title">
            <span className="title-accent">FAQ</span> Konsultasi Pembelian Suzuki
          </h2>
          <p className="section-subtitle">
            Jawaban atas pertanyaan yang sering ditanyakan calon pembeli mobil Suzuki.
          </p>
        </div>

        <div className="faq-list reveal" style={{ maxWidth: "880px", margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "active" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleFaq(i)}
                aria-expanded={openIndex === i}
              >
                <h3>{faq.q}</h3>
                <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
