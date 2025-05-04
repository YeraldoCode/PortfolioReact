import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const name = "Yeraldo Alexander Avila";
  const description = `Hola, soy ${name}, un desarrollador web especializado en crear aplicaciones modernas, eficientes y escalables con tecnologías como React, Flask, Node.js, Python y bases de datos en la nube.`;
  const passion = "Me apasiona la innovación, la optimización de procesos y el diseño de soluciones tecnológicas que generen impacto real.";

  return (
    <section id="about" className="about-section" aria-label="Sobre mí">
      <div className="about-container text-center">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sobre mí
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {description}
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {passion}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
