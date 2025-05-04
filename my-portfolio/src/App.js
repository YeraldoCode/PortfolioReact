import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills  from './components/Skills';

function App() {
  return (
    <div id="root">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>

  );
}

export default App;