import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 'Intermedio' },
        { name: 'React', level: 'Intermedio' },
        { name: 'HTML & CSS', level: 'Avanzado' },
        { name: 'Git', level: 'Intermedio' },
        { name: 'SQL', level: 'Principiante' },
        { name: 'Flask', level: 'Intermedio' },
        { name: 'Python', level: 'Intermedio' },
        { name: 'Excel', level: 'Intermedio' },

    ];

    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Habilidades Técnicas</h2>
                <div className="row">
                    {skills.map((skill, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{skill.name}</h5>
                                    <p className="card-text">Nivel: {skill.level}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;