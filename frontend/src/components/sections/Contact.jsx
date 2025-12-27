import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './sections.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo, saya ${formData.name || '[Nama]'}\n` +
      `Email: ${formData.email || '[Email]'}\n` +
      `Telepon: ${formData.phone || '[Telepon]'}\n\n` +
      `Pesan: ${formData.message || '[Pesan]'}`
    );
    window.open(`https://wa.me/6281299287559?text=${message}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">CONTACT US</span>
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-description">
            Siap membantu kebutuhan kalibrasi dan instrumen pengukuran Anda
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Telepon</h4>
                <p>+62 811-9229-908</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Email</h4>
                <p>admin@Exactacal.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-info-text">
                <h4>Alamat</h4>
                <p>Jl.Tamarind No.50<br />Vida, Bekasi</p>
              </div>
            </div>

            <div className="contact-whatsapp-cta">
              <h3>Butuh Respons Cepat?</h3>
              <p>Chat langsung dengan tim kami via WhatsApp</p>
              <button 
                className="btn-whatsapp"
                onClick={() => {
                  const message = encodeURIComponent('Halo, saya ingin bertanya tentang layanan Exactacal');
                  window.open(`https://wa.me/6281299287559?text=${message}`, '_blank');
                }}
              >
                <Phone size={20} />
                Chat via WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">Kirim Pesan</h3>
            <p className="contact-form-subtitle">
              Isi form di bawah dan klik tombol untuk mengirim via WhatsApp
            </p>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@perusahaan.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08xx xxxx xxxx"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan Anda..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="button" className="btn-submit" onClick={handleWhatsAppClick}>
                <Send size={20} />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;