"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import ProductModal from "../components/ProductModal";
import HargaPromoSection from "../components/HargaPromoSection";
import CreditSimulation from "../components/CreditSimulation";
import TestDriveSection from "../components/TestDriveSection";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import DeliverySection from "../components/DeliverySection";
import WhatsAppButton from "../components/WhatsAppButton";
import MobileStickyNav from "../components/MobileStickyNav";
import PromoPopup from "../components/PromoPopup";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function HomePage() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("revealed"); io.unobserve(en.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [currentFilter]);

  const handleSelectCategory = (categoryId) => {
    setCurrentFilter(categoryId);
  };

  const handleOpenDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <main>
      <Navbar />
      <Hero />

      {/* Category intro + category picker */}
      <CategorySection
        currentFilter={currentFilter}
        onSelectCategory={handleSelectCategory}
      />

      {/* Product list */}
      <ProductSection
        products={products}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        onOpenDetail={handleOpenDetail}
      />

      {/* Pricing & promo summary */}
      <HargaPromoSection products={products} onOpenDetail={handleOpenDetail} />

      {/* Credit simulation */}
      <CreditSimulation products={products} />

      {/* Test drive booking */}
      <TestDriveSection products={products} />

      {/* About Ajeng + dealer location */}
      <AboutSection productCount={products.length} />

      {/* Why Suzuki */}
      <TrustSection />

      {/* Delivery gallery (social proof) */}
      <DeliverySection />

      {/* FAQ */}
      <FaqSection />

      {/* Contact form */}
      <ContactSection />

      <Footer />

      {/* Floating / overlays */}
      <WhatsAppButton />
      <MobileStickyNav />
      <PromoPopup />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseDetail} />
      )}
    </main>
  );
}
