import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div id="root">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;