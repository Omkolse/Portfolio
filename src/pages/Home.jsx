import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
