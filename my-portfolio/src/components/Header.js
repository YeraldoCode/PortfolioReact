import React from 'react';

const Header = () => {
    return (
        <header className="bg-black text-white">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <a className="navbar-brand fw-bold" href="#">YeraldoCode</a>
                <button 
                    className="navbar-toggler" 
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
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Proyectos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;