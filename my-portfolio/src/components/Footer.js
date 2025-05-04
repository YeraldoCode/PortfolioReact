import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        <p className="footer-text">© 2025 YeraldoCode. Todos los derechos reservados.</p>
        <a 
          href="https://github.com/YeraldoCode" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link"
        >
          Visita mi GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;