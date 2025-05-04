import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="footer-container">
        <p className="footer-text">
          © {year} <strong>YeraldoCode</strong>. Todos los derechos reservados.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/YeraldoCode"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yeraldo-avila"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/yeraldodev"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
