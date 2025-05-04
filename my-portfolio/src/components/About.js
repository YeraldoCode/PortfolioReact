import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/images/avatar.jpg'; // Asegúrate de tener esta imagen

const About = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Personal information
  const personalInfo = {
    name: "Yeraldo Alexander Avila",
    role: "Desarrollador Web Full Stack",
    description: "Hola, soy Yeraldo Alexander Avila, un desarrollador web especializado en crear aplicaciones modernas, eficientes y escalables con tecnologías como React, Flask, Node.js, y Python con bases de datos en la nube.",
    passion: "Me apasiona la innovación, la optimización de procesos y el diseño de soluciones tecnológicas que generen impacto real, y los deportes de contacto."
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Variantes más amigables para la descripción
  const descriptionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Trigger animations when section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section 
      id="about" 
      className="py-5 about-section"
      ref={ref}
    >
      <div className="container">
        <motion.div 
          className="row align-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
          <motion.img
          src={profileImage}
          className="rounded-circle img-fluid mb-3"
          alt="Yeraldo Alexander Avila"
          style={{ 
            maxWidth: '250px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            border: '4px solid rgba(255, 255, 255, 0.7)'
          }}
          variants={itemVariants}
          animate={{ 
            y: [0, -10, 0],
            boxShadow: [
              '0 4px 8px rgba(0,0,0,0.1)', 
              '0 8px 16px rgba(255, 0, 0, 0.3)', 
              '0 4px 8px rgba(0,0,0,0.1)'
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "easeInOut" 
          }}
          whileHover={{ 
            scale: 1.05,
            rotate: [0, 2, 0, -2, 0],
            transition: {
              duration: 0.5,
              rotate: {
                repeat: Infinity,
                duration: 2
              }
            }
          }}
        />
          </div>
          <div className="col-lg-8">
            <motion.h2 
              className="mb-3" 
              variants={itemVariants}
            >
              {personalInfo.name}
            </motion.h2>
            <motion.h4 
              className="mb-4" 
              variants={itemVariants}
              style={{ color: '#ff0000' }} // Cambiado a rojo vivo
            >
              {personalInfo.role}
            </motion.h4>
            <motion.p 
              className="about-text mb-4" 
              variants={descriptionVariants}
            >
              {personalInfo.description}
            </motion.p>
            <motion.p 
              className="about-text" 
              variants={descriptionVariants}
            >
              {personalInfo.passion}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;