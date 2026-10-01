"use client";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="hero-bg-decor" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="badge badge-sales animate-fade-up">
            <span className="badge-dot"></span>
            SUZUKI SALES CONSULTANT
          </div>
          <h1 className="animate-fade-up hero-headline" style={{ "--delay": "0.15s" }}>
            Temukan <span className="text-accent">Suzuki</span> Pilihan Anda
          </h1>
          <div className="blue-line" aria-hidden="true"></div>
          <p className="animate-fade-up hero-subheadline" style={{ "--delay": "0.3s" }}>
            Jelajahi pilihan mobil Suzuki untuk keluarga, perjalanan, aktivitas harian, hingga kebutuhan bisnis.
          </p>
          <div className="hero-actions animate-fade-up" style={{ "--delay": "0.45s" }}>
            <a href="#produk" className="btn btn-primary">
              Lihat Pilihan Mobil <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#promo" className="btn btn-outline">Harga &amp; Promo</a>
          </div>
        </div>

        <div className="hero-right animate-fade-up" style={{ "--delay": "0.3s" }}>
          <div className="hero-visual">
            <span className="hero-shape" aria-hidden="true"></span>
            <span className="hero-curve" aria-hidden="true"></span>
            <img
              src="/images/newxl7.png"
              alt="Suzuki XL7 — unit unggulan"
              className="hero-product-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
