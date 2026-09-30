"use client";

import { useState } from "react";
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

      {/* Trust / Why consult with Ajeng */}
      <TrustSection />

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
      <HargaPromoSection products={products} />

      {/* Credit simulation */}
      <CreditSimulation products={products} />

      {/* Test drive booking */}
      <TestDriveSection products={products} />

      {/* About Ajeng + dealer location */}
      <AboutSection />

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
