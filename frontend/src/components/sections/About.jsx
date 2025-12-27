import React from 'react';
import './sections.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">TENTANG KAMI</span>
          <h2 className="section-title">Pengenalan</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              PT Exactacal Technology Solution adalah perusahaan terkemuka yang bergerak di bidang jasa kalibrasi, 
              pelatihan laboratorium, serta pengadaan instrumen pengukuran. Kami berkomitmen untuk menyediakan solusi 
              yang akurat dan andal guna mendukung berbagai industri dalam mencapai standar mutu dan kepatuhan yang tinggi.
            </p>
            <p className="about-paragraph">
              Didirikan pada tahun 2024, PT Exactacal Technology Solution telah berkembang menjadi salah satu penyedia 
              jasa kalibrasi dan instrumen pengukuran terdepan di Indonesia. Kami memadukan keahlian teknis dengan 
              teknologi terkini untuk memenuhi kebutuhan para klien kami secara optimal.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">📐</div>
              <h3 className="stat-number">Akurat</h3>
              <p className="stat-label">Kalibrasi Presisi Tinggi</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <h3 className="stat-number">Profesional</h3>
              <p className="stat-label">Tim Bersertifikat</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <h3 className="stat-number">Terpercaya</h3>
              <p className="stat-label">Layanan Berkualitas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;