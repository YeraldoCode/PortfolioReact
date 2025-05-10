import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaDatabase, FaCloud } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creación de sitios web modernos, responsivos y optimizados para SEO.',
      icon: <FaCode size={40} color="#cc0033" />,
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma.',
      icon: <FaMobileAlt size={40} color="#ff6600" />,
    },
    {
      title: 'Bases de Datos',
      description: 'Diseño, implementación y optimización de bases de datos relacionales y no relacionales.',
      icon: <FaDatabase size={40} color="#007bff" />,
    },
    {
      title: 'Servicios en la Nube',
      description: 'Implementación y gestión de soluciones en la nube como AWS, Firebase y más.',
      icon: <FaCloud size={40} color="#00cc99" />,
    },
    {
      title: 'Automatizacion de Procesos',
      description: 'Automatización y optimización de procesos utilizando herramientas como Google Workspace, WhatsApp Business API y más.',
      icon: <FaCloud size={40} color="#ffcc00" />,
    },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Servicios
        </motion.h2>
        <motion.div
          className="d-flex flex-wrap justify-content-center align-items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card text-center border-0 shadow-sm rounded-4"
              style={{ width: '18rem' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-body">
                <div className="mb-3">{service.icon}</div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;