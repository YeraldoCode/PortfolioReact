import React from 'react';

const About = () => {
  const name = "Yeraldo Alexander Avila";
  const description = `Hola, soy ${name}, un desarrollador web especializado en crear aplicaciones modernas, eficientes y escalables con tecnologías como React, Flask, Node.js, Python y bases de datos en la nube.`;
  const passion = "Me apasiona la innovación, la optimización de procesos y el diseño de soluciones tecnológicas que generen impacto real.";

  return (
    <section id="about" className="about-section" aria-label="Sobre mí">
      <div className="about-container">
        <h2 className="about-title">Sobre mí</h2>
        <p className="about-text">{description}</p>
        <p className="about-text">{passion}</p>
      </div>
    </section>
  );
};

export default About;
