"use client";

const ic = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export default function TrustSection() {
  const points = [
    { title: "Pilihan Kendaraan", desc: "SUV, MPV, City Car hingga kendaraan niaga untuk keluarga, perjalanan, dan bisnis.",
      icon: <svg {...ic}><path d="M5 17h14M6 17l1.5-5h9L18 17M7.5 12l.7-2.5a2 2 0 012-1.5h3.6a2 2 0 012 1.5L16.5 12" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" /></svg> },
    { title: "Teknologi", desc: "Smart Hybrid dan fitur keselamatan modern pada berbagai model Suzuki.",
      icon: <svg {...ic}><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" /></svg> },
    { title: "Kenyamanan", desc: "Kabin luas dan nyaman untuk aktivitas harian maupun perjalanan jauh.",
      icon: <svg {...ic}><path d="M6 20v-6a3 3 0 013-3h6a3 3 0 013 3v6M4 20h16M8 11V6a2 2 0 012-2h4a2 2 0 012 2v5" /></svg> },
    { title: "Layanan", desc: "Konsultasi, simulasi kredit, test drive, hingga pendampingan serah terima unit.",
      icon: <svg {...ic}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> }
  ];

  return (
    <section id="trust" className="section section-soft">
      <div className="container">
        <div className="reveal text-center sec-head">
          <span className="section-eyebrow">Why Suzuki</span>
          <h2 className="section-title">Mengapa Suzuki</h2>
          <div className="blue-line center" aria-hidden="true"></div>
        </div>
        <div className="trust-grid reveal">
          {points.map((p) => (
            <div key={p.title} className="card trust-card">
              <div className="trust-icon-wrap">{p.icon}</div>
              <h3 className="trust-title">{p.title}</h3>
              <p className="trust-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
