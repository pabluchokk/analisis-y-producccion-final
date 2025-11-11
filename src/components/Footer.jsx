import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#6A2C70] text-gray-400 py-12 text-center">
      <div className="container mx-auto px-6">
        {/* Consigna: El "staff" */}
        <p><strong className="text-white">Staff:</strong> Pablo Agustín Rivero</p>
        <p className="text-sm mt-1">Trabajo Práctico Final - Análisis y Producción Periodística - UNLaM</p>
      </div>
    </footer>
  );
}

export default Footer;