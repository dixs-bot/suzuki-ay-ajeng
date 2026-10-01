"use client";

import { getCategory, CATEGORY_LABEL, getMinPrice, formatRupiah } from "../lib/category";

export default function ProductCard({ product, onOpenDetail }) {
  const minPrice = getMinPrice(product.variants);
  const seat = (product.briefSpecs || []).find((s) => /seater/i.test(s));
  const type = [CATEGORY_LABEL[getCategory(product)], seat || product.tagline].filter(Boolean).join(" • ");

  return (
    <article className="product-card card">
      <div className="product-img-wrap">
        <img
          src={`/images/${product.image}`}
          alt={`${product.name} — ${product.tagline}`}
          className="product-img"
          loading="lazy"
        />
      </div>
      <div className="product-body">
        <p className="product-type">{type}</p>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <div className="product-price-box">
          <span className="price-label">Mulai dari</span>
          <span className="price-val">{formatRupiah(minPrice)}</span>
        </div>
        <button type="button" className="detail-link" onClick={() => onOpenDetail(product)}>
          Lihat Detail <span className="arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
