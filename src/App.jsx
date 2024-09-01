import './index.css'; // Ensure Tailwind CSS is imported
import Navbar from "./pages/navbar/Navbar";
import Hero from './pages/hero/Hero';
import Skills from "./pages/skills/Skills";
import SlidingProject from './pages/projects/SlidingProject';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = useRef(null); 
  const cursorRef = useRef(null);
  const [compHover, setCompHover] = useState(false);

  useEffect(() => {
    locomotiveScroll.current = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    const cursor = cursorRef.current;
    const main = document.querySelector('main');

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 1.25,
        ease: "power2.out"
      });
    };

    const handleMouseMove = (dets) => {
      gsap.to(cursor, {
        x: dets.clientX + 10,
        y: dets.clientY,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 1.25,
        ease: "power2.out"
      });
    };

    main.addEventListener("mouseenter", handleMouseEnter);
    main.addEventListener("mousemove", handleMouseMove);
    main.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      main.removeEventListener("mouseenter", handleMouseEnter);
      main.removeEventListener("mousemove", handleMouseMove);
      main.removeEventListener("mouseleave", handleMouseLeave);
      locomotiveScroll.current.destroy(); // Clean up LocomotiveScroll instance
    };
  }, []);

  return (
    <main className='font-og relative bg-primary select-none w-full h-screen' data-scroll-container>
      <div
        ref={cursorRef}
        className="min-w-[1vw] min-h-[1vw] px-2 py-1 rounded-full bg-tertiary text-primary fixed z-[1000]"
      >
        {compHover && (compHover === 1 ? 'View' : (compHover===2 ? 'Click to Copy' : "Copied"))} </div> <div>
      </div>

      <Navbar/>
      <Hero/>
      <Skills/>
      <SlidingProject/>
      <Projects isProjectHover={setCompHover}/>
      <Contact isEmailHover={setCompHover}/>
    </main>
  );
}

export default App;
