import './App.css';
import ParallaxBackground from './Components/ParallaxBackground';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

export default function App() {
  return (
    <>
      <ParallaxBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}