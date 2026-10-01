"use client";

import ProductCard from "./ProductCard";
import { FILTERS, getCategory } from "../lib/category";

export default function ProductSection({ products, currentFilter, onFilterChange, onOpenDetail }) {
  const filtered = products.filter((p) => currentFilter === "all" || getCategory(p) === currentFilter);

  return (
    <section id="produk" className="section">
      <div className="container">
        <div className="reveal text-center sec-head">
          <span className="section-eyebrow">Lineup Mobil Suzuki</span>
          <h2 className="section-title">Pilihan Suzuki Untuk Setiap Kebutuhan</h2>
          <div className="blue-line center" aria-hidden="true"></div>
          <p className="section-subtitle">
            Temukan mobil Suzuki yang sesuai dengan kebutuhan dan budget Anda.
          </p>
        </div>

        <div className="filter-chips reveal" role="tablist" aria-label="Filter kategori mobil">
          {FILTERS.map((chip) => (
            <button
              key={chip.id}
              type="button"
              role="tab"
              aria-selected={currentFilter === chip.id}
              className={`chip ${currentFilter === chip.id ? "active" : ""}`}
              onClick={() => onFilterChange(chip.id)}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="product-grid" id="product-list">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onOpenDetail={onOpenDetail} />
          ))}
          {filtered.length === 0 && <p className="text-center">Belum ada unit pada kategori ini.</p>}
        </div>
      </div>
    </section>
  );
}
