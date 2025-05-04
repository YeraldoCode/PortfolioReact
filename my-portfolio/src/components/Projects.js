import React from 'react';
import lipumetricas from '../assets/images/lipumetricasmty.png';
import pandaboutique from '../assets/images/pandaboutique.png';

const Projects = () => {
  const projects = [
    {
      name: 'Panda Boutique Ecommerce',
      description: 'Ecommerce de ropa, gorras y accesorios, desarrollado con Shopify, diseño personalizado y integración de pasarelas de pago.',
      link: 'https://pandaboutique.com/',
      image: pandaboutique,
    },
    {
      name: 'Metricas Lipu mty',
      description: 'Dashboard logístico con Flask, gráficos interactivos y filtros por Excel.',
      link: 'https://lipumtymetricas.com/',
      image: lipumetricas,
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Proyectos y Desarrollos</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  alt={`Imagen de ${project.name}`}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;