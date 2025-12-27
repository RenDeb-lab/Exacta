import React from 'react';
import { Wrench, GraduationCap, Package, Headphones } from 'lucide-react';
import './sections.css';

const Services = () => {
  const services = [
    {
      icon: <Wrench size={32} />,
      title: 'Layanan Kalibrasi',
      description: 'Kami menyediakan layanan kalibrasi untuk berbagai jenis instrumen pengukuran, termasuk instrumen elektrik, mekanik, dan termal. Teknisi kami yang terlatih dan bersertifikat memastikan bahwa semua instrumen memenuhi standar internasional.'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Pelatihan',
      description: 'Kami menyediakan layanan pelatihan di bidang laboratorium untuk membantu perusahaan meningkatkan kompetensi karyawan mereka.'
    },
    {
      icon: <Package size={32} />,
      title: 'Pengadaan Instrumen Pengukuran',
      description: 'Kami menyediakan berbagai pilihan instrumen pengukuran berkualitas tinggi dari merek-merek terkemuka. Kami menawarkan solusi untuk berbagai kebutuhan industri, termasuk otomotif, manufaktur, dan aplikasi laboratorium.'
    },
    {
      icon: <Headphones size={32} />,
      title: 'Perawatan dan Dukungan',
      description: 'Kami menawarkan layanan perawatan rutin dan dukungan teknis untuk memastikan instrumen pengukuran tetap beroperasi pada performa terbaiknya.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">PRODUK DAN LAYANAN</span>
          <h2 className="section-title">Solusi Komprehensif untuk Kebutuhan Anda</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;