import React, { useState } from 'react';
import { motion } from 'framer-motion';
import lipumetricas from '../assets/images/lipumetricasmty.png';
import pandaboutique from '../assets/images/pandaboutique.png';
import infobag from '../assets/images/infobag.png';
import econome from '../assets/images/econome.png';
import pingpong from '../assets/images/PingPongapp.png';
import compensaciones from '../assets/images/compensaciones_web.png';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  const projects = [
    {
      id: 1,
      name: 'Panda Boutique Ecommerce',
      description: 'Ecommerce de ropa, gorras y accesorios, desarrollado con Shopify, diseño personalizado e integración de pasarelas de pago.',
      link: 'https://pandaboutique.shop/',
      image: pandaboutique,
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
      category: 'Web Development'
    },
    {
      id: 2,
      name: 'Métricas Lipu MTY',
      description: 'Dashboard logístico con Flask, gráficos interactivos y filtros desde Excel para visualización de datos en tiempo real.',
      link: 'https://lipumtymetricas.com/',
      image: lipumetricas,
      technologies: ['Flask', 'Python', 'Chart.js', 'SQL'],
      category: 'Data Visualization'
    },
    {
      id: 3,
      name: 'Infobag',
      description: 'Aplicación de escritorio para visualizar información financiera de empresas bursátiles desarrollada con Python y Tkinter.',
      link: 'https://github.com/YeraldoCode/InfoBag',
      image: infobag,
      technologies: ['Python', 'Tkinter', 'APIs', 'Pandas'],
      category: 'Financial Software'
    },
    {
      id: 4,
      name: 'Econome',
      description: 'App web para gestión de finanzas personales con Flask, HTML, Bootstrap y JavaScript, incluyendo reportes y seguimiento de gastos.',
      link: 'https://github.com/YeraldoCode/EconoMe-app',
      image: econome,
      technologies: ['Flask', 'Bootstrap', 'JavaScript', 'SQLite'],
      category: 'Finance Tools'
    },
    {
      id: 5,
      name: 'Ping Pong Game',
      description: 'Juego de ping pong en 2D desarrollado con Python y Pygame, con gráficos mejorados, lógica de juego, control de jugadores y detección de colisiones.',
      link: 'https://github.com/YeraldoCode/PinpongApp',
      image: pingpong,
      technologies: ['Python', 'Pygame', 'Game Development'],
      category: 'Game Development'
    },
    {
      id: 6,
      name: 'Compensaciones de LIPU',
      description: 'Aplicación web para gestionar compensaciones de empleados, desarrollada con Flask, extrayendo datos de un excel que se actualiza semanalmente.',
      link: 'https://github.com/YeraldoCode/compensaciones_web',
      image: compensaciones, // Placeholder image
      technologies: ['Flask', 'Bootstrap', 'JavaScript', 'Excel'],
      category: 'Data Visualization'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <motion.h2
          className="text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Proyectos Destacados
        </motion.h2>
        
        <motion.p 
          className="text-center mb-5 text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: "700px", margin: "0 auto 50px auto" }}
        >
          Una selección de los proyectos más recientes y relevantes, enfocados en desarrollo web, 
          visualización de datos y aplicaciones de usuario.
        </motion.p>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              className="col-md-6 col-lg-4 mb-4"
              key={project.id}
              variants={projectVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card border-0 h-100"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                }}
              >
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="card-img-top"
                    style={{ 
                      height: '220px', 
                      objectFit: 'cover',
                      filter: hoveredId === project.id ? 'brightness(0.8)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <div 
                    className={`position-absolute top-0 end-0 m-3 badge ${
                      project.category === 'Web Development' ? 'bg-primary' : 
                      project.category === 'Data Visualization' ? 'bg-success' : 
                      project.category === 'Financial Software' ? 'bg-warning text-dark' : 
                      project.category === 'Game Development' ? 'bg-danger' : 'bg-info'
                    }`}
                    style={{ padding: '8px 12px', fontSize: '0.75rem' }}
                  >
                    {project.category}
                  </div>
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold mb-2" style={{ color: '#2c2c2c' }}>
                    {project.name}
                  </h5>
                  <p className="card-text flex-grow-1" style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  
                  <div className="mt-3 mb-3">
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="badge bg-light text-dark"
                          style={{ 
                            padding: '6px 10px', 
                            fontSize: '0.75rem', 
                            fontWeight: '500',
                            border: '1px solid #e0e0e0'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={project.link}
                    className="btn btn-primary d-flex align-items-center justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: '8px', padding: '10px 15px' }}
                  >
                    {project.link.includes('github.com') ? 
                      <><FaGithub className="me-2" /> Ver en GitHub</> : 
                      <><FaExternalLinkAlt className="me-2" /> Ver proyecto</>
                    }
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;