import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


function SlidingProject() {

  const slidingProjectRef = useRef(null);
  const slidingContainerRef= useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slidingProjectRef.current,
        // markers: true,
        start: '55% 50%',
        end: '1200% 60%',
        scrub: 1,
        pin: true,
      },
    });

    tl.to (slidingContainerRef.current, {
      left: "-635%",
    })
  }, []);

  return (
    <div ref={slidingProjectRef} className="relative w-full h-screen bg-primary whitespace-nowrap flex items-center overflow-hidden">
      <div ref={slidingContainerRef}  className="absolute left-[100%]">
        <h1  className="font-black text-[30vw] leading-none z-[0]">FROM CONCEPT TO CREATION, EXPLORE MY WORK<span className="text-tertiary">...</span></h1>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[12%] left-[7.5%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[75%] left-[17.5%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[12%] left-[25%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[75%] left-[32.5%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[12%] left-[44.4%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[75%] left-[53.5%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[12%] left-[63%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[75%] left-[75.5%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[12%] left-[87.5%]"></div>
        <div className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300 top-[75%] left-[95.5%]"></div>

      </div>
        

    </div>
  )
}

export default SlidingProject


// to : -625%