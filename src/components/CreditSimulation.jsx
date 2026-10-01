"use client";

import { useState, useMemo } from "react";
import { getWhatsAppLink } from "../data/siteConfig";

export default function CreditSimulation({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || "");
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenorYears, setTenorYears] = useState(5);

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];
  const selectedVariant =
    selectedProduct?.variants && selectedProduct.variants.length > 0
      ? selectedProduct.variants[selectedVariantIndex] || selectedProduct.variants[0]
      : { name: "", price: 0 };

  const handleProductChange = (e) => {
    setSelectedProductId(e.target.value);
    setSelectedVariantIndex(0);
  };

  const result = useMemo(() => {
    if (!selectedVariant || !selectedVariant.price) return null;
    const harga = selectedVariant.price;
    const dp = harga * (dpPercent / 100);
    const pokok = harga - dp;
    const bungaRates = { 1: 0.05, 2: 0.06, 3: 0.07, 4: 0.08, 5: 0.09 };
    const bunga = bungaRates[tenorYears] || 0.08;
    const totalBayar = pokok + pokok * bunga * tenorYears;
    const cicilan = Math.round(totalBayar / (tenorYears * 12));
    return { namaMobil: selectedProduct.name, namaVarian: selectedVariant.name, harga, dpPercent, dp, tenorYears, cicilan };
  }, [selectedProduct, selectedVariant, dpPercent, tenorYears]);

  return (
    <section id="simulasi" className="section">
      <div className="container">
        <h2 className="section-title reveal text-center">Simulasi Kredit Mobil Suzuki</h2>
        <div className="blue-line center" aria-hidden="true"></div>
        <p className="section-subtitle reveal text-center">
          Hitung estimasi Down Payment (DP) dan cicilan bulanan sesuai budget Anda
        </p>

        <div className="sim-grid reveal">
          <form
            id="global-simulation-form"
            className="card sim-form form-grid"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label htmlFor="sim-product">Pilih Model Mobil</label>
              <select
                id="sim-product"
                value={selectedProductId}
                onChange={handleProductChange}
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sim-variant">Pilih Tipe / Varian</label>
              <select
                id="sim-variant"
                value={selectedVariantIndex}
                onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              >
                {selectedProduct?.variants?.map((v, i) => (
                  <option key={i} value={i}>
                    {v.name} - Rp {(v.price || 0).toLocaleString("id-ID")}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sim-dp">Uang Muka / DP (%)</label>
              <select
                id="sim-dp"
                value={dpPercent}
                onChange={(e) => setDpPercent(Number(e.target.value))}
              >
                <option value={15}>15% (Promo DP Ringan)</option>
                <option value={20}>20% (Standar)</option>
                <option value={25}>25%</option>
                <option value={30}>30%</option>
                <option value={40}>40%</option>
                <option value={50}>50%</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sim-tenor">Jangka Waktu / Tenor</label>
              <select
                id="sim-tenor"
                value={tenorYears}
                onChange={(e) => setTenorYears(Number(e.target.value))}
              >
                <option value={1}>1 Tahun (12 Bulan)</option>
                <option value={2}>2 Tahun (24 Bulan)</option>
                <option value={3}>3 Tahun (36 Bulan)</option>
                <option value={4}>4 Tahun (48 Bulan)</option>
                <option value={5}>5 Tahun (60 Bulan)</option>
              </select>
            </div>

          </form>

          <div className="card sim-result-panel">
            <h3>Estimasi Cicilan</h3>
            {result ? (
              <div className="sim-details">
                <div className="sim-row">
                  <span>Unit:</span>
                  <strong>{result.namaMobil} ({result.namaVarian})</strong>
                </div>
                <div className="sim-row">
                  <span>Harga OTR:</span>
                  <strong>Rp {result.harga.toLocaleString("id-ID")}</strong>
                </div>
                <div className="sim-row">
                  <span>Estimasi DP ({result.dpPercent}%):</span>
                  <strong>Rp {Math.round(result.dp).toLocaleString("id-ID")}</strong>
                </div>
                <div className="sim-row">
                  <span>Tenor Kredit:</span>
                  <strong>{result.tenorYears} Tahun ({result.tenorYears * 12} Bulan)</strong>
                </div>
                <div className="sim-total-box">
                  <span className="total-label">Estimasi Angsuran</span>
                  <span className="total-val">Rp {result.cicilan.toLocaleString("id-ID")} <small>/ bulan</small></span>
                </div>
                <p className="sim-disclaimer">
                  *Hasil simulasi merupakan estimasi dan bukan penawaran pembiayaan resmi. Nilai
                  DP dan angsuran aktual dapat bervariasi sesuai paket promo leasing, asuransi, dan
                  wilayah domisili. Hubungi Ajeng untuk perhitungan final sesuai profil Anda.
                </p>
                <a
                  href={getWhatsAppLink(`Halo, saya ingin mengajukan kredit ${result.namaMobil} tipe ${result.namaVarian} dengan harga OTR Rp ${result.harga.toLocaleString("id-ID")}, DP ${result.dpPercent}% (Rp ${Math.round(result.dp).toLocaleString("id-ID")}), tenor ${result.tenorYears} tahun, estimasi angsuran Rp ${result.cicilan.toLocaleString("id-ID")}/bulan.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-full"
                  style={{ marginTop: "16px" }}
                >
                  Konsultasikan Simulasi
                </a>
              </div>
            ) : (
              <div className="sim-placeholder">
                <p>Pilih unit dan parameter kredit untuk melihat estimasi cicilan.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
