import React from 'react';
import { ArrowRight } from 'lucide-react';
import './sections.css';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Halo, saya ingin bertanya tentang layanan Exactacal');
    window.open(`https://wa.me/6281299287559?text=${message}`, '_blank');
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-text">PROFIL PERUSAHAAN</span>
          </div>
          
          <h1 className="hero-title">
            PT. EXACTACAL<br />
            TECHNOLOGY<br />
            SOLUTION
          </h1>
          
          <p className="hero-tagline">TRUSTED INSTRUMENT PARTNER</p>
          
          <p className="hero-description">
            Perusahaan terkemuka yang bergerak di bidang jasa kalibrasi, pelatihan laboratorium, 
            serta pengadaan instrumen pengukuran.
          </p>
          
          <div className="hero-cta">
            <button className="btn-primary" onClick={handleWhatsAppClick}>
              Hubungi Kami via WhatsApp
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-item">
              <h3>2024</h3>
              <p>Tahun Didirikan</p>
            </div>
            <div className="hero-card-item">
              <h3>100+</h3>
              <p>Klien Terpercaya</p>
            </div>
            <div className="hero-card-item">
              <h3>ISO 17025</h3>
              <p>Standar Internasional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-bg-shape shape-1"></div>
      <div className="hero-bg-shape shape-2"></div>
    </section>
  );
};

export default Hero;