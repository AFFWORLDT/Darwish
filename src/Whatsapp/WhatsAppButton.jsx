import React from 'react';
import styles from './WhatsAppButton.module.css';
import whatsapp from '/images/WhatsApp.png'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+971567599006';
    const message = 'Hello, I have a need for repairing services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.whatsappButton} onClick={handleWhatsAppClick}>
      <img
        src={whatsapp}
        alt="WhatsApp"
        className={styles.whatsappIcon}
      />
    </div>
  );
};

export default WhatsAppButton;
