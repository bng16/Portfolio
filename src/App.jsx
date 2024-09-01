//! style imports:---
import './index.css';

//! Components imports:---
import Navbar from "./pages/navbar/Navbar";
import Hero from './pages/hero/Hero';
import Skills from "./pages/skills/Skills";
import SlidingProject from './pages/projects/SlidingProject';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Cursor from './components/Cursor';

//! React imports:---
import { useEffect, useRef } from 'react';

//! GSAP imports:---
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

//! Other imports:---


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const main = document.querySelector('main');

    main.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 1.25, // smooth animation
        ease: "power2.out"
      });
    });

    main.addEventListener("mousemove", (dets) => {
      gsap.to(cursor, {
        x: dets.clientX+10,
        y: dets.clientY,
        duration: 1.5, // smooth animation
        ease: "power2.out"
      });
    });

    main.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 1.25, // smooth animation
        ease: "power2.out"
      });
    });

    return () => {
      main.removeEventListener("mouseenter", null);
      main.removeEventListener("mousemove", null);
      main.removeEventListener("mouseleave", null);
    };
  }, []);

  return (
    <main className='font-og relative bg-primary select-none w-full h-screen'>
      <Cursor ref={cursorRef} />
      <Navbar/>
      <Hero/>
      <Skills/>
      <SlidingProject/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
