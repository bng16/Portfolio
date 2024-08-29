//! style imports:---
import './index.css';

//! Components imports:---
import Navbar from './components/Navbar';
import Hero from './pages/hero/Hero';
import Skills from "./pages/skills/Skills";
import SlidingProject from './components/SlidingProject';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

//! React imports:---


//! GSAP imports:---
import LocomotiveScroll from 'locomotive-scroll';


//! Other imports:---




function App() {
const locomotiveScroll = new LocomotiveScroll();


  return (
    <main className='font-og relative'>
    <Navbar/>
    <Hero/>
    <Skills/>
    <SlidingProject/>
    <Projects/>
    <Contact/>
    </main>
  )
}

export default App
