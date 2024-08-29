import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SlidingBox from './SlidingBox'; // Make sure the path is correct

gsap.registerPlugin(ScrollTrigger);

function SlidingProject() {
  const slidingProjectRef = useRef(null);
  const slidingContainerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slidingProjectRef.current,
        // markers: true, // Uncomment for debugging
        start: '55% 50%',
        end: '1200% 60%',
        scrub: 1,
        pin: true,
      },
    });

    tl.to(slidingContainerRef.current, {
      left: "-635%",
    });
  }, []);

  const boxPositions = [
    { top: '12%', left: '7.5%' },
    { top: '75%', left: '17.5%' },
    { top: '12%', left: '25%' },
    { top: '75%', left: '32.5%' },
    { top: '12%', left: '44.4%' },
    { top: '75%', left: '53.5%' },
    { top: '12%', left: '63%' },
    { top: '75%', left: '75.5%' },
    { top: '12%', left: '87.5%' },
    { top: '75%', left: '95.5%' },
  ];

  return (
    <div ref={slidingProjectRef} className="relative w-full h-screen bg-primary whitespace-nowrap flex items-center overflow-hidden">
      <div ref={slidingContainerRef} className="absolute left-[100%]">
        <h1 className="font-black text-[30vw] leading-none z-[0]">
          FROM CONCEPT TO CREATION, EXPLORE MY WORK<span className="text-tertiary">...</span>
        </h1>
        {boxPositions.map((pos, index) => (
          <SlidingBox key={index} top={pos.top} left={pos.left} />
        ))}
      </div>
    </div>
  );
}

export default SlidingProject;
