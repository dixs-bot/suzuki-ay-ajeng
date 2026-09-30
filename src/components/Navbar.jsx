"use client";

import { useState, useEffect } from "react";
import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { href: "#beranda", label: "Home" },
    { href: "#produk", label: "Mobil Suzuki" },
    { href: "#promo", label: "Harga & Promo" },
    { href: "#simulasi", label: "Simulasi Kredit" },
    { href: "#test-drive", label: "Test Drive" },
    { href: "#tentang", label: "Tentang Ajeng" },
    { href: "#kontak", label: "Kontak" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        <a href="#beranda" className="nav-logo" onClick={closeMenu} aria-label="Suzuki - Ajeng Sales Consultant">
          <img
            src="/images/suzuki-logo.png"
            alt="Logo Suzuki - Ajeng Sales Consultant"
            className="logo-img"
          />
          <span className="nav-brand-text">
            <span className="nav-brand-name">SUZUKI</span>
            <span className="nav-brand-sub">Sales Consultant</span>
          </span>
        </a>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`} id="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink(siteConfig.defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-glow nav-cta"
            onClick={closeMenu}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Konsultasi Sekarang
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          id="nav-toggle"
          aria-label="Buka menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
