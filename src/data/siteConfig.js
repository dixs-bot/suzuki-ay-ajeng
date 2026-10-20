/**
 * ============================================================
 *  SITE CONFIG — KONFIGURASI TUNGGAL SUZUKI AJENG
 *  Ubah nilai di sini, seluruh website ikut update.
 *  Sales: AJENG — Suzuki Sales Consultant
 * ============================================================
 */

export const siteConfig = {
  // === IDENTITAS SALES ===
  salesName: "Ajeng",
  salesRole: "Suzuki Sales Consultant",
  salesTagline: "Sales Consultant Suzuki",
  salesPhoto: "/images/profil.jpeg",

  // === BRAND / WEBSITE ===
  businessName: "Ajeng – Sales Suzuki",
  brand: "SUZUKI",
  dealerName: "Suzuki NJS Ahmad Yani Bandung",

  // === KONTAK SALES (DEFAULT DARI REPOSITORY — JANGAN DIUBAH KECUALI PERLU) ===
  phone: "+62895326056743",
  phoneNumberFormatted: "+62 895-3260-56743",
  whatsappNumber: "62895326056743",
  email: "riyansuzuki.bandung@gmail.com",

  // === AREA PELAYANAN ===
  serviceArea: "Bandung, Cimahi, dan Jawa Barat",
  address: "Jl. A. Yani No.259, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40114, Indonesia",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.535!2d107.6316605!3d-6.9147128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e781f491aa2d%3A0x1eabdb84d1cee61b!2sSuzuki%20Ahmad%20Yani%20PT%20Nusantara%20Jaya%20Sentosa!5e0!3m2!1sen!2sid!4v1750000000000",

  // === JAM PELAYANAN ===
  operatingHours: "Senin – Minggu, 08.00 – 17.00 WIB",

  // === SOSIAL MEDIA (Kosongkan jika tidak tersedia) ===
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://suzuki-rian.vercel.app/"
  },

  // === URL WEBSITE ===
  siteUrl: "https://suzuki-rian.vercel.app/",

  // === KOORDINAT DEALER ===
  dealerCoords: {
    lat: -6.9147128,
    lng: 107.6316605
  },

  // === PESAN WHATSAPP DEFAULT ===
  defaultWaMessage: "Halo Kak Ajeng, saya ingin mendapatkan informasi mengenai mobil Suzuki dan promo terbaru."
};

/**
 * Buat link WhatsApp ke nomor Ajeng dengan pesan tertentu.
 * @param {string} message - Pesan yang akan dikirim
 * @returns {string} URL wa.me
 */
export function getWhatsAppLink(message = siteConfig.defaultWaMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Buat link tel: ke nomor telepon sales.
 * @returns {string} URL tel:
 */
export function getPhoneLink() {
  return `tel:${siteConfig.phone}`;
}

/**
 * Daftar foto serah terima unit untuk galeri social proof.
 */
export const deliveryPhotos = [
  { src: "1.jpg" },
  { src: "2.jpg" },
  { src: "3.jpg" },
  { src: "4.jpg" },
  { src: "5.jpg" },
  { src: "6.jpg" },
  { src: "7.jpg" },
  { src: "8.jpg" },
  { src: "9.jpg" },
  { src: "10.jpg" },
  { src: "11.jpg" },
  { src: "12.jpg" },
  { src: "13.jpg" },
  { src: "14.jpg" },
  { src: "15.jpg" },
  { src: "16.jpg" },
  { src: "17.jpg" },
  { src: "18.jpg" },
]
