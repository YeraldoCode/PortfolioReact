import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div id="root">
      <Header />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;