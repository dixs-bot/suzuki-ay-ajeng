"use client";

import { siteConfig } from "../data/siteConfig";

export default function CategorySection({ currentFilter, onSelectCategory }) {
  const categories = [
    {
      id: "suv",
      title: "SUV & Crossover",
      models: "Grand Vitara, XL7, Fronx, Jimny",
      desc: "Tangguh untuk segala medan dengan teknologi hybrid modern dan fitur kenyamanan premium.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 17h14M6 17l1.5-5h9L18 17M7.5 12l.7-2.5a2 2 0 012-1.5h3.6a2 2 0 012 1.5L16.5 12" />
          <circle cx="7.5" cy="17" r="1.5" />
          <circle cx="16.5" cy="17" r="1.5" />
        </svg>
      )
    },
    {
      id: "mpv",
      title: "MPV & City Car",
      models: "All New Ertiga, S-Presso, APV",
      desc: "Kabin luas dan nyaman untuk keluarga, konsumsi BBM super irit, lincah bermanuver di perkotaan.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="8" width="18" height="9" rx="2" />
          <path d="M3 12h18" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
        </svg>
      )
    },
    {
      id: "komersial",
      title: "Komersial & Niaga",
      models: "Carry Pick Up, Carry Box, APV Blind Van",
      desc: "Rajanya Pick Up di Indonesia! Mesin bandel, muatan banyak, hemat bahan bakar, bisnis makin untung.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="kategori" className="section section-alt category-intro-section">
      <div className="container">
        <div className="text-center reveal" style={{ maxWidth: "880px", margin: "0 auto" }}>
          <span className="section-eyebrow">Konsultasi & Penawaran Mobil Suzuki</span>
          <h2 className="section-title">
            Konsultasi Pembelian Mobil Suzuki Bersama{" "}
            <span className="title-accent">{siteConfig.salesName}</span>
          </h2>
          <p className="section-subtitle">
            Dapatkan informasi harga, promo, simulasi kredit, dan jadwalkan test drive mobil Suzuki
            bersama {siteConfig.salesName} — {siteConfig.salesRole}. Melayani pembelian cash maupun
            kredit untuk area {siteConfig.serviceArea}, dibantu dari pemilihan unit hingga serah terima.
          </p>
        </div>

        <h3 className="category-section-heading reveal">
          <span className="title-accent">Kategori</span> Mobil Suzuki
        </h3>
        <p className="section-subtitle reveal">
          Pilih kategori mobil yang sesuai dengan kebutuhan dan gaya hidup Anda
        </p>

        <div className="category-grid reveal">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`card category-card ${currentFilter === cat.id ? "active-cat" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                onSelectCategory(cat.id);
                const el = document.getElementById("produk");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                  document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p className="category-models">{cat.models}</p>
              <p className="category-desc">{cat.desc}</p>
              <div className="btn btn-outline btn-sm" style={{ marginTop: "12px", width: "100%" }}>
                Lihat Unit {cat.title.split(" ")[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
