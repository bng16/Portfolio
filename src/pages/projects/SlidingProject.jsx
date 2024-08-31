import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SlidingBox from './SlidingBox'; // Make sure the path is correct

gsap.registerPlugin(ScrollTrigger);


import slidingImg1 from "../../assets/projects/slidingImage/1.png";
import slidingImg2 from "../../assets/projects/slidingImage/2.png";
import slidingImg3 from "../../assets/projects/slidingImage/3.png";
import slidingImg4 from "../../assets/projects/slidingImage/4.png";
import slidingImg5 from "../../assets/projects/slidingImage/5.png";
import slidingImg6 from "../../assets/projects/slidingImage/6.png";
import slidingImg7 from "../../assets/projects/slidingImage/7.png";
import slidingImg8 from "../../assets/projects/slidingImage/8.png";
import slidingImg9 from "../../assets/projects/slidingImage/9.png";
import slidingImg10 from "../../assets/projects/slidingImage/10.png";

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
    { top: '12%', left: '7.5%', backgroundImage: `url(${slidingImg1})` },
    { top: '75%', left: '17.5%', backgroundImage: `url(${slidingImg2})` },
    { top: '12%', left: '25%', backgroundImage: `url(${slidingImg3})` },
    { top: '75%', left: '32.5%', backgroundImage: `url(${slidingImg4})` },
    { top: '12%', left: '44.4%', backgroundImage: `url(${slidingImg5})` },
    { top: '75%', left: '53.5%', backgroundImage: `url(${slidingImg6})` },
    { top: '12%', left: '63%', backgroundImage: `url(${slidingImg7})` },
    { top: '75%', left: '75.5%', backgroundImage: `url(${slidingImg8})` },
    { top: '12%', left: '87.5%', backgroundImage: `url(${slidingImg9})` },
    { top: '75%', left: '95.5%', backgroundImage: `url(${slidingImg10})` },
  ];

  return (
    <div ref={slidingProjectRef} className="relative w-full h-screen bg-primary whitespace-nowrap flex items-center overflow-hidden">
      <div ref={slidingContainerRef} className="absolute left-[100%]">
        <h1 className="font-black text-[30vw] leading-none z-[0]">
          FROM CONCEPT TO CREATION, EXPLORE MY WORK<span className="text-tertiary">...</span>
        </h1>
        {boxPositions.map((pos, index) => (
  <SlidingBox key={index} top={pos.top} left={pos.left} backgroundImage={pos.backgroundImage} />
))}

      </div>
    </div>
  );
}

export default SlidingProject;
