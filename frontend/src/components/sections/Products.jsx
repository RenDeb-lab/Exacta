import React from 'react';
import './sections.css';

const Products = () => {
  const products = [
    {
      brand: 'SUNPOC',
      category: 'VIDEO MEASURING',
      description: 'Pengukuran berbagai sampel dengan presisi tinggi, kecepatan tinggi, dan kemudahan.'
    },
    {
      brand: 'SUNPOC',
      category: 'PROFILE PROJECTOR',
      models: 'SOBEKK, SOBENG',
      description: 'Instrumen ini dapat dengan mudah dan cepat memeriksa profil serta bentuk permukaan berbagai bagian yang diukur.'
    },
    {
      brand: 'SUNPOC',
      category: 'HARDNESS TESTER',
      description: 'Mesin pengujian kekerasan presisi yang mengintegrasikan teknologi optik, mekanik, dan komputer.'
    },
    {
      brand: 'SUNPOC',
      category: 'CUTTING MACHINE',
      model: '8J00-6002',
      description: 'Ini adalah salah satu peralatan ideal untuk mempersiapkan spesimen berkualitas tinggi bagi industri.'
    },
    {
      brand: 'SUNPOC',
      category: 'POLISHING MACHINE',
      model: 'ONO',
      description: 'Ini adalah peralatan ideal untuk persiapan sampel metalografi.'
    },
    {
      brand: 'SUNPOC',
      category: 'MOUNTING MACHINE',
      model: 'SYMPZ-100',
      description: 'Inlaying adalah proses yang sangat penting dalam persiapan sampel metalografi, terutama untuk beberapa sampel kecil yang sulit dipegang, sampel dengan bentuk tidak beraturan, atau yang membutuhkan perlindungan pada tepi serta pengamplasan dan pemolesan otomatis. Inlaying merupakan prosedur esensial sebelum persiapan sampel.'
    },
    {
      brand: 'EISEN',
      category: 'PIONEER OF PIN GAUGE',
      description: 'Kami secara konsisten memproduksi rangkaian lengkap pengukur presisi tinggi guna memenuhi kebutuhan industri global. Pengukur Eisen dikenal karena keandalannya dan inovasinya, menggunakan material berlapis HSS dan PCD yang dirancang khusus untuk pengukuran chamfer serta landasan presisi.',
      subcategories: [
        { name: 'PIN GAUGE', series: 'EP-Series, EX-Series, EMC-Series' },
        { name: 'THREAD GAUGE', series: 'SPM-Series' },
        { name: 'MASTER RING GAUGE', series: 'RG-Series' }
      ]
    },
    {
      brand: 'FLUKE',
      description: 'Fluke Corporation adalah pemimpin dunia dalam alat uji elektronik profesional dan perangkat lunak untuk pengukuran serta pemantauan kondisi. Alat Fluke dikenal karena portabilitas, keamanan, kemudahan penggunaan, akurasi, dan standar kualitas yang ketat.',
      categories: ['ELECTRICAL TOOLS', 'CALIBRATION TOOLS', 'TEMPERATURE MEASUREMENT']
    },
    {
      brand: 'elcometer',
      description: 'Elcometer telah menjadi pemimpin dunia dalam desain, manufaktur, dan penyediaan peralatan inspeksi untuk industri pelapisan, beton, dan deteksi logam.',
      categories: ['COATING THICKNESS', 'SURFACE PROFILE', 'GLOSS METER']
    }
  ];

  return (
    <section className="products-section" id="products">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-label">PRODUK KAMI</span>
          <h2 className="section-title">Instrumen Berkualitas Tinggi</h2>
        </div>

        <div className="products-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-brand">{product.brand}</div>
              
              {product.category && (
                <h3 className="product-category">{product.category}</h3>
              )}
              
              {product.model && (
                <p className="product-model">Model: {product.model}</p>
              )}
              
              {product.models && (
                <p className="product-model">{product.models}</p>
              )}
              
              <p className="product-description">{product.description}</p>
              
              {product.subcategories && (
                <div className="product-subcategories">
                  {product.subcategories.map((sub, idx) => (
                    <div key={idx} className="product-subcategory">
                      <strong>{sub.name}</strong>
                      <span className="product-series">{sub.series}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {product.categories && (
                <div className="product-categories">
                  {product.categories.map((cat, idx) => (
                    <span key={idx} className="product-cat-tag">{cat}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;