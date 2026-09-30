"use client";

import { getWhatsAppLink, siteConfig } from "../data/siteConfig";

const formatRupiah = (val) => "Rp " + (val || 0).toLocaleString("id-ID");

/**
 * Mencari harga termurah dari daftar varian produk.
 */
function getMinPrice(variants) {
  if (!variants || variants.length === 0) return 0;
  const prices = variants
    .map((v) => (typeof v.price === "number" ? v.price : 0))
    .filter((p) => p > 0);
  if (prices.length === 0) return variants[0].price || 0;
  return Math.min(...prices);
}

export default function ProductCard({ product, onOpenDetail }) {
  const minPrice = getMinPrice(product.variants);

  const waMessage = `Halo Kak ${siteConfig.salesName}, saya tertarik dengan mobil Suzuki ${product.name}. Mohon info harga, promo, dan simulasi kredit terbaru.`;

  return (
    <div className="product-card card">
      <div className="product-img-wrap">
        <img
          src={`/images/${product.image}`}
          alt={`${product.name} — ${product.tagline}`}
          className="product-img"
          loading="lazy"
        />
        {product.briefSpecs && product.briefSpecs[0] && (
          <span className="product-category-tag">{product.briefSpecs[0]}</span>
        )}
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>

        <div className="product-price-box">
          <span className="price-label">Harga mulai dari</span>
          <span className="price-val">{formatRupiah(minPrice)}</span>
          <span className="price-note">OTR Bandung · Tipe terjangkau</span>
        </div>

        <div className="product-highlights">
          {product.briefSpecs &&
            product.briefSpecs.slice(0, 4).map((h, i) => (
              <span key={i} className="highlight-tag">
                {h}
              </span>
            ))}
        </div>

        <div className="product-actions">
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => onOpenDetail(product)}
          >
            Lihat Detail
          </button>
          <a
            href={getWhatsAppLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Tanya Harga
          </a>
        </div>
      </div>
    </div>
  );
}
