import React from 'react';
import { MessageCircle } from 'lucide-react';
import './sections/sections.css';

const WhatsAppFloat = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Halo, saya ingin bertanya tentang layanan Exactacal');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button 
      className="whatsapp-float" 
      onClick={handleWhatsAppClick}
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppFloat;