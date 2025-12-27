import React from 'react';
import { Target, Eye } from 'lucide-react';
import './sections.css';

const MissionVision = () => {
  const missions = [
    'Menjamin Kepuasan Pelanggan melalui Layanan yang Cepat dan Profesional',
    'Berkomitmen pada Pengembangan dan Perbaikan Berkelanjutan',
    'Menjamin Kepatuhan terhadap Standar dan Regulasi yang Berlaku',
    'Menyediakan Layanan Kalibrasi yang Akurat dan Berkualitas Tinggi',
    'Menyajikan Solusi Kalibrasi, Pelatihan, dan Pengadaan Instrumen Pengukuran yang Inovatif dengan Mengoptimalkan Teknologi Terkini untuk Meningkatkan Efisiensi dan Akurasi'
  ];

  const visions = [
    'Menjadi penyedia solusi kalibrasi dan instrumen pengukuran terkemuka, yang diakui atas akurasi dan layanan pelanggan yang luar biasa.',
    'Menjadi penyedia terpercaya utama dalam kalibrasi, pelatihan, dan instrumen pengukuran.',
    'Mencapai standar kualitas global dalam kalibrasi, pelatihan, dan pengadaan instrumen pengukuran.',
    'Memberikan inovasi dan teknologi terdepan dalam kalibrasi, pelatihan, dan pengadaan instrumen pengukuran.',
    'Menjadi mitra strategis terpercaya untuk semua kebutuhan kalibrasi, pelatihan, dan instrumen pengukuran.'
  ];

  return (
    <section className="mission-vision-section" id="mission-vision">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">MISI & VISI</span>
          <h2 className="section-title">Komitmen Kami</h2>
        </div>

        <div className="mission-vision-grid">
          {/* Mission */}
          <div className="mv-card">
            <div className="mv-card-header">
              <div className="mv-icon mission-icon">
                <Target size={32} />
              </div>
              <h3 className="mv-title">MISI</h3>
            </div>
            <ul className="mv-list">
              {missions.map((mission, index) => (
                <li key={index} className="mv-item">
                  <span className="mv-bullet">•</span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="mv-card">
            <div className="mv-card-header">
              <div className="mv-icon vision-icon">
                <Eye size={32} />
              </div>
              <h3 className="mv-title">VISI</h3>
            </div>
            <ul className="mv-list">
              {visions.map((vision, index) => (
                <li key={index} className="mv-item">
                  <span className="mv-bullet">•</span>
                  <span>{vision}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;