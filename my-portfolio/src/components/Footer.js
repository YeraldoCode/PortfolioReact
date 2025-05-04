import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <motion.h5 
              className="text-white mb-3 fw-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              YeraldoCode
            </motion.h5>
            <motion.p 
              className="text-light mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desarrollo de aplicaciones web modernas y soluciones tecnológicas innovadoras.
            </motion.p>
          </div>
          
          <div className="col-md-4">
            <motion.h5 
              className="text-white mb-3 fw-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contacto
            </motion.h5>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-1 text-light">
                <FaEnvelope className="me-2" /> 
                <a href="mailto:yeraldocode@gmail.com" className="text-decoration-none text-light">
                  yeramtza@gmail.com
                </a>
              </p>
              <p className="mb-0 text-light">México</p>
            </motion.div>
          </div>
          
          <div className="col-md-4">
            <motion.h5 
              className="text-white mb-3 fw-bold text-center text-md-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Conéctate
            </motion.h5>
            <motion.div 
              className="d-flex justify-content-center justify-content-md-start gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://github.com/YeraldoCode"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="GitHub"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, y: -5 }} 
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <FaGithub size={24} />
                </motion.div>
              </a>
              <a
                href="https://www.linkedin.com/in/yeraldo-avila"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="LinkedIn"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, y: -5 }} 
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <FaLinkedin size={24} />
                </motion.div>
              </a>
              <a
                href="https://www.instagram.com/yeraldodev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="Instagram"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, y: -5 }} 
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <FaInstagram size={24} />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.hr 
          className="my-4 border-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
        />
        
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <motion.p 
            className="mb-0 text-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {year} <strong>YeraldoCode</strong>. Todos los derechos reservados.
          </motion.p>
          
          <motion.p 
            className="mb-0 text-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hecho con <FaHeart className="mx-1 text-danger" /> y <FaCode className="mx-1" /> en México
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;