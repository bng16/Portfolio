//! style imports:---
import './index.css';

//! Components imports:---
import Hero from './pages/hero/Hero';
import Navbar from './components/Navbar';
import Skills from "./pages/skills/Skills";
import SlidingProject from './components/SlidingProject';

//! React imports:---


//! GSAP imports:---


//! Other imports:---




function App() {

  return (
    <main className='font-og relative'>
    {/* <Navbar/>
    <Hero/>
    <Skills/> */}
    <SlidingProject/>
    </main>
  )
}

export default App
