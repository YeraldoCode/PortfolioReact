import React from 'react';
import {
  FaReact, FaPython, FaGitAlt, FaHtml5, FaCss3Alt,
  FaJs, FaDatabase, FaFileExcel, FaFlask
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80 } }
};

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Intermedio', icon: <FaJs size={40} color="#f7df1e" />, 
      description: 'Desarrollo de aplicaciones web interactivas y funcionales.' },
    { name: 'React', level: 'Intermedio', icon: <FaReact size={40} color="#61DBFB" />,
      description: 'Creación de interfaces de usuario modernas y eficientes.' },
    { name: 'HTML & CSS', level: 'Avanzado', 
      icon: <div className="d-flex justify-content-center">
              <FaHtml5 size={35} color="#e34c26" />
              <FaCss3Alt size={35} color="#264de4" style={{ marginLeft: 12 }} />
            </div>,
      description: 'Maquetación responsive y diseño de interfaces atractivas.' },
    { name: 'Git', level: 'Intermedio', icon: <FaGitAlt size={40} color="#f34f29" />,
      description: 'Control de versiones y colaboración en proyectos de desarrollo.' },
    { name: 'SQL', level: 'Principiante', icon: <FaDatabase size={40} color="#00758f" />,
      description: 'Gestión y consulta de bases de datos relacionales.' },
    { name: 'Flask', level: 'Intermedio', icon: <FaFlask size={40} color="#3776ab" />,
      description: 'Framework web de Python para desarrollo de aplicaciones.' },
    { name: 'Python', level: 'Intermedio', icon: <FaPython size={40} color="#306998" />,
      description: 'Automatización, análisis de datos y desarrollo backend.' },
    { name: 'Excel', level: 'Intermedio', icon: <FaFileExcel size={40} color="#217346" />,
      description: 'Análisis de datos y creación de informes empresariales.' },
  ];

  // Función para obtener el color de fondo según el nivel
  const getLevelColor = (level) => {
    switch(level) {
      case 'Avanzado': return '#d4edda'; // Verde claro
      case 'Intermedio': return '#fff3cd'; // Amarillo claro
      case 'Principiante': return '#f8d7da'; // Rojo claro
      default: return '#e2e3e5'; // Gris claro
    }
  };

  return (
    <section id="skills" className="py-5 about-section"> {/* Usando about-section para mantener consistencia */}
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          style={{ fontFamily: 'Montserrat', fontWeight: 700, color: '#333' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Habilidades Técnicas
        </motion.h2>

        <motion.div
          className="row g-4" // Aumentando el espacio entre tarjetas
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="card-header bg-dark text-white py-3">
                  <h5 className="card-title fw-bold mb-0">{skill.name}</h5>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="mb-4 mt-2 text-center">
                    {skill.icon}
                  </div>
                  <p className="card-text flex-grow-1">{skill.description}</p>
                  <div className="mt-auto">
                    <div 
                      className="badge py-2 px-3 w-100 text-dark" 
                      style={{ 
                        backgroundColor: getLevelColor(skill.level),
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      Nivel: {skill.level}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;