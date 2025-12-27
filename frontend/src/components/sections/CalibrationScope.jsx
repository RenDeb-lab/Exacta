import React, { useState } from 'react';
import './sections.css';

const CalibrationScope = () => {
  const [activeTab, setActiveTab] = useState('dimensi');

  const scopes = {
    dimensi: {
      title: 'Dimensi',
      items: [
        'Pin Gauge', 'Feeler Gauge', 'Dial / Digital Indicator', 'Dial Test Indicator',
        'CMM', 'VMM', 'Meja Granite', 'Micrometer', 'Profile Projector', 'Steel Ruller',
        'Bevel Protactor', 'Thickness Gauge', 'Coating Thickness Gauge', 'Thread Gauge',
        'Caliper', 'Ring Gauge', 'Gauge Block'
      ]
    },
    waktu: {
      title: 'Waktu dan Frekuensi',
      items: ['Tachometer', 'Stopwatch', 'Timer']
    },
    suhu: {
      title: 'Suhu',
      items: [
        'Enclosure', 'Thermohygrometer', 'Sensor Indicator', 'IR Thermometer',
        'Furnance', 'Thermometer Glass', 'PT100 Sensor'
      ]
    },
    gaya: {
      title: 'Gaya',
      items: [
        'Push Pull Gauge', 'Torque Wrench', 'Torque Meter', 'Torque Driver',
        'Universal Testing Machine'
      ]
    },
    massa: {
      title: 'Massa',
      items: ['Anak Timbang', 'Timbangan']
    },
    volumetrik: {
      title: 'Volumetrik',
      items: ['Gelas Ukur', 'Micropipet', 'Pipet Volume', 'Pipet Graduasi']
    },
    analis: {
      title: 'Instrumen Analis',
      items: [
        'PH Meter', 'Viscometer', 'Conductivity meter', 'Spectrophotometer', 'Refractometer'
      ]
    },
    kelistrikan: {
      title: 'Kelistrikan',
      items: [
        'Multimeter', 'Clamp Meter', 'Insulation', 'DC Power Supply',
        'Withstanding', 'High Voltage', 'Earth Tester'
      ]
    }
  };

  return (
    <section className="calibration-section" id="calibration">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">LINGKUP KALIBRASI</span>
          <h2 className="section-title">Jenis Instrumen yang Kami Kalibrasi</h2>
        </div>

        {/* Tab Navigation */}
        <div className="calibration-tabs">
          {Object.keys(scopes).map((key) => (
            <button
              key={key}
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {scopes[key].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="calibration-content">
          <h3 className="calibration-category-title">{scopes[activeTab].title}</h3>
          <div className="calibration-grid">
            {scopes[activeTab].items.map((item, index) => (
              <div key={index} className="calibration-item">
                <div className="calibration-item-icon">✓</div>
                <span className="calibration-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalibrationScope;