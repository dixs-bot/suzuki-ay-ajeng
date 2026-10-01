"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#beranda", label: "Home" },
  { href: "#produk", label: "Mobil" },
  { href: "#promo", label: "Harga & Promo" },
  { href: "#simulasi", label: "Simulasi" },
  { href: "#test-drive", label: "Test Drive" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#beranda");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 140;
      let cur = "#beranda";
      navItems.forEach((n) => {
        const el = document.querySelector(n.href);
        if (el && el.offsetTop <= y) cur = n.href;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar" aria-label="Navigasi utama">
      <div className="container nav-container">
        <a href="#beranda" className="nav-logo" onClick={closeMenu} aria-label="Suzuki - Ajeng Sales Consultant">
          <img src="/images/suzuki-logo.png" alt="Logo Suzuki" className="logo-img" />
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
              className={`nav-link ${active === item.href ? "active" : ""}`}
              aria-current={active === item.href ? "true" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a href="#kontak" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Konsultasi
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          id="nav-toggle"
          aria-label="Buka menu"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
