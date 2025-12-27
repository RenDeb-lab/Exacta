import React from 'react';
import './sections.css';

const Partners = () => {
  const partners = [
    { name: 'SUNPOC', type: 'partner' },
    { name: 'EISEN', type: 'partner' },
    { name: 'TOHNICHI', type: 'partner' },
    { name: 'elcometer.', type: 'partner' },
    { name: 'INSIZE', type: 'partner' },
    { name: 'FLUKE', type: 'partner' },
    { name: 'TRUSCO', type: 'partner' }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">PARTNER KAMI</span>
          <h2 className="section-title">Bekerja Sama dengan Brand Terkemuka</h2>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-placeholder">
                <span className="partner-name">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;