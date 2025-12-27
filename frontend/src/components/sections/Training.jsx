import React from 'react';
import { CheckCircle } from 'lucide-react';
import './sections.css';

const Training = () => {
  const trainingCategories = [
    {
      title: 'Pelatihan pengukuran dan kalibrasi',
      items: [
        'Besaran Dimensi',
        'Besaran Massa',
        'Besaran Gaya',
        'Besaran Tekanan',
        'Besaran Suhu',
        'Besaran Kelistrikan',
        'Besaran Volume'
      ]
    },
    {
      title: 'Pelatihan perhitungan ketidakpastian',
      items: []
    },
    {
      title: 'Pelatihan Pemahaman SNI ISO/IEC17025:2017',
      items: []
    },
    {
      title: 'Pelatihan Internal Audit',
      items: []
    },
    {
      title: 'Pelatihan Jaminan Mutu Hasil Kalibrasi',
      items: []
    },
    {
      title: 'Lainnya',
      items: []
    }
  ];

  return (
    <section className="training-section" id="training">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">PELATIHAN LABORATORIUM</span>
          <h2 className="section-title">Tingkatkan Kompetensi Tim Anda</h2>
        </div>

        <div className="training-intro">
          <p className="training-description">
            Kami menyediakan layanan pelatihan di bidang laboratorium untuk membantu perusahaan 
            meningkatkan kompetensi karyawan mereka.
          </p>
          <p className="training-note">
            Pelatihan dapat dilakukan secara offline maupun online (inhouse dan publik) sesuai 
            dengan kebutuhan pelanggan.
          </p>
        </div>

        <div className="training-list">
          <h3 className="training-subtitle">Pelatihan yang tersedia adalah:</h3>
          
          {trainingCategories.map((category, index) => (
            <div key={index} className="training-card">
              <div className="training-card-header">
                <CheckCircle size={24} className="training-check" />
                <h4 className="training-card-title">
                  {index + 1}. {category.title}
                </h4>
              </div>
              
              {category.items.length > 0 && (
                <ul className="training-items">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="training-item">
                      <span className="training-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;