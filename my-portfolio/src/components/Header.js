import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [scrolled, setScrolled] = useState(false);
    
    // Detectar scroll para cambiar el estilo del header
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects'];
            
            // Detectar la sección activa basada en la posición de scroll
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
            
            // Cambiar estilo del header al hacer scroll
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <motion.header 
            className={`bg-black text-white ${scrolled ? 'shadow-lg' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            style={{ 
                position: 'sticky', 
                top: 0, 
                zIndex: 1000,
                transition: 'all 0.3s ease'
            }}
        >
            <nav className="navbar navbar-expand-lg navbar-dark container py-3">
                <motion.a 
                    className="navbar-brand fw-bold"
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ 
                        fontSize: '1.5rem', 
                        background: 'linear-gradient(90deg, #cc0033, #ff3366)', 
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '0.5px'
                    }}
                >
                    YeraldoCode
                </motion.a>
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        {[
                            { id: 'about', text: 'Sobre mí' },
                            { id: 'services', text: 'Servicios'},
                            { id: 'projects', text: 'Proyectos' },
                            { id: 'skills', text: 'Habilidades' },
                            { id: 'contact', text: 'Contacto' }
                        ].map((item) => (
                            <motion.li 
                                className="nav-item mx-1" 
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <a 
                                    className={`nav-link px-3 py-2 ${activeSection === item.id ? 'active' : ''}`} 
                                    href={`#${item.id}`}
                                    onClick={() => setActiveSection(item.id)}
                                    style={{
                                        borderRadius: '4px',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        fontWeight: activeSection === item.id ? '600' : '400',
                                    }}
                                    
                                >
                                    
                                    {activeSection === item.id && (
                                        <motion.span
                                            className="position-absolute"
                                            style={{
                                                bottom: '0',
                                                left: '0',
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#cc0033',
                                                borderRadius: '2px'
                                            }}
                                            layoutId="activeSection"
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        />
                                    )}
                                    {item.text}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;