import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const mainSectionRef = useRef();
  const textRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();
  const image5Ref = useRef();

  // Define initial dimensions as variables
  const initialWidth = '80%';
  const initialHeight = '80vh';

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSectionRef.current,
        // markers: true,
        start: '38% 50%',
        end: '1500% 50%',
        scrub: 1,
        pin: true,
      },
    });

    tl.from(textRef.current, {
      scale: 0,
      opacity: 0,
    }, 'start')

    .to(textRef.current, {
      top: '5%',
      scale: 0.5,
    }, 'a')
    .to(image1Ref.current, {
      top: '30%',
    }, 'a')

    .to(image2Ref.current, {
      top: '34%',
    }, 'b')
    .to(image1Ref.current, {
      width: '50%',
      height: '50vh',
    }, 'b')

    .to(image3Ref.current, {
      top: '38%',
    }, 'c')
    .to(image2Ref.current, {
      width: '55%',
      height: '55vh',
    }, 'c')

    .to(image4Ref.current, {
      top: '42%',
    }, 'd')
    .to(image3Ref.current, {
      width: '60%',
      height: '60vh',
    }, 'd')

    .to(image5Ref.current, {
      top: '46%',
    }, 'e')
    .to(image4Ref.current, {
      width: '65%',
      height: '65vh',
    }, 'e')


  }, []);

  return (
    <main ref={mainSectionRef} className='relative w-full h-[150vh] flex flex-col items-center'>
      <h1 ref={textRef} className='font-bold absolute top-[20vh] text-secondary text-[10vw]'>
        <span className='text-tertiary'>!</span> PROJECTS <span className='text-tertiary'>!</span>
      </h1>
      <div
        ref={image1Ref}
        className={`w-[${initialWidth}] h-[${initialHeight}] bg-red-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl`}
        // style={{ backgroundImage: 'url(./images/1.jpg)' }}
      ></div>

      <div
        ref={image2Ref}
        className={`w-[${initialWidth}] h-[${initialHeight}] bg-blue-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl`}
        // style={{ backgroundImage: 'url(./images/2.jpg)' }}
      ></div>

      <div
        ref={image3Ref}
        className={`w-[${initialWidth}] h-[${initialHeight}] bg-green-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl`}
        // style={{ backgroundImage: 'url(./images/3.jpg)' }}
      ></div>

      <div
        ref={image4Ref}
        className={`w-[${initialWidth}] h-[${initialHeight}] bg-yellow-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl`}
        // style={{ backgroundImage: 'url(./images/4.jpg)' }}
      ></div>

      <div
        ref={image5Ref}
        className={`w-[${initialWidth}] h-[${initialHeight}] bg-red-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl`}
        // style={{ backgroundImage: 'url(./images/5.jpg)' }}
      ></div>
    </main>
  );
}

export default Projects;
