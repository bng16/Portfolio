//! style imports:---
import './index.css';

//! Components imports:---
import Navbar from './components/Navbar';
import Hero from './pages/hero/Hero';
import HeroEnd from "./components/HeroEnd";
import Skills from "./pages/skills/Skills";
import SlidingProject from './components/SlidingProject';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

//! React imports:---


//! GSAP imports:---


//! Other imports:---




function App() {

  return (
    <main className='font-og relative'>
    <Navbar/>
    <Hero/>
    <HeroEnd/>
    <Skills/>
    <SlidingProject/>
    <Projects/>
    <Contact/>
    </main>
  )
}

export default App
