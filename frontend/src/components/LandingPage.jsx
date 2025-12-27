import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import './LandingPage.css';
import Hero from './sections/Hero';
import About from './sections/About';
import MissionVision from './sections/MissionVision';
import Services from './sections/Services';
import CalibrationScope from './sections/CalibrationScope';
import Training from './sections/Training';
import Partners from './sections/Partners';
import Products from './sections/Products';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import WhatsAppFloat from './WhatsAppFloat';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <h2 className="logo-text">Exacta</h2>
            <span className="logo-tagline">TRUSTED INSTRUMENT PARTNER</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <button onClick={() => scrollToSection('about')} className="nav-link">Tentang Kami</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Layanan</button>
            <button onClick={() => scrollToSection('calibration')} className="nav-link">Kalibrasi</button>
            <button onClick={() => scrollToSection('training')} className="nav-link">Pelatihan</button>
            <button onClick={() => scrollToSection('products')} className="nav-link">Produk</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Kontak</button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <button onClick={() => scrollToSection('about')} className="nav-link">Tentang Kami</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Layanan</button>
            <button onClick={() => scrollToSection('calibration')} className="nav-link">Kalibrasi</button>
            <button onClick={() => scrollToSection('training')} className="nav-link">Pelatihan</button>
            <button onClick={() => scrollToSection('products')} className="nav-link">Produk</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Kontak</button>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <CalibrationScope />
        <Training />
        <Partners />
        <Products />
        <Clients />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">Exacta</h3>
              <p className="footer-tagline">TRUSTED INSTRUMENT PARTNER</p>
              <p className="footer-company">PT. EXACTACAL TECHNOLOGY SOLUTION</p>
            </div>

            <div className="footer-contact">
              <h4>Kontak</h4>
              <div className="footer-contact-item">
                <Phone size={18} />
                <span>+62 811-9229-908</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <span>admin@Exactacal.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>Jl.Tamarind No.50, Vida, Bekasi</span>
              </div>
            </div>

            <div className="footer-social">
              <h4>Sosial Media</h4>
              <p>@exactacal</p>
              <p>www.exactacal.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 PT. Exactacal Technology Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat phoneNumber="6281299287559" />
    </div>
  );
};

export default LandingPage;