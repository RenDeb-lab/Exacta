import React from 'react';
import './sections.css';

const Clients = () => {
  const clients = [
    'member of ASTRA',
    'MKM',
    'ETS',
    'SUMBER',
    'YANMAR',
    'GRP',
    'SARI MURNI',
    'Aice',
    'SEKARBUMI',
    'MURO',
    'ASTARI',
    'Jababeka Infrastruktur'
  ];

  return (
    <section className="clients-section" id="clients">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">OUR VALUED CLIENTS</span>
          <h2 className="section-title">Dipercaya oleh Perusahaan Terkemuka</h2>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-logo-placeholder">
                <span className="client-name">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;