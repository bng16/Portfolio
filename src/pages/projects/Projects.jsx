import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/Projects/1.jpg';
import img2 from '../../assets/Projects/2.jpg';
import img3 from '../../assets/Projects/3.jpg';
import img4 from '../../assets/Projects/4.jpg';
import img5 from '../../assets/Projects/5.jpg';

function Projects({isProjectHover}) {
  const mainSectionRef = useRef();
  const textRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();
  const image5Ref = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSectionRef.current,
        start: "38% 50%",
        end: "1400% 50%",
        scrub: 3,
        pin: true,
      },
    });

    tl.from(textRef.current, { scale: 0, opacity: 0 }, "start")
      .to(textRef.current, { top: "5%", scale: 0.5 }, "a")
      .to(image1Ref.current, { top: "30%" }, "a")
      .to(image2Ref.current, { top: "34%" }, "b")
      .to(image1Ref.current, { width: "50%", height: "50vh" }, "b")
      .to(image3Ref.current, { top: "38%" }, "c")
      .to(image2Ref.current, { width: "55%", height: "55vh" }, "c")
      .to(image4Ref.current, { top: "42%" }, "d")
      .to(image3Ref.current, { width: "60%", height: "60vh" }, "d")
      .to(image5Ref.current, { top: "46%" }, "e")
      .to(image4Ref.current, { width: "65%", height: "65vh" }, "e")
      .to(image5Ref.current, { bottom:'0px',width: "120%", height: "120vh" }, "f");
  }, []);

  return (
    <main ref={mainSectionRef} className="relative w-full h-[150vh] flex flex-col items-center bg-primary overflow-hidden">
      <h1 ref={textRef} className="font-black absolute top-[20vh] text-secondary text-[10vw]">
        <span className="text-tertiary">!</span> PROJECTS <span className="text-tertiary">!</span>
      </h1>

      <a href="https://www.google.co.in/" target="_blank">
        <div
            ref={image1Ref}
          className="w-[80%] h-[80vh] bg-red-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
          style={{ backgroundImage: `url(${img1})` }}

          onMouseEnter={() => isProjectHover(1)}
          onMouseLeave={() => isProjectHover(false)}
        ></div>
      </a>

      <a href="https://www.facebook.com/" target="_blank">
        <div
          ref={image2Ref}
          className="w-[80%] h-[80vh] bg-blue-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
          style={{ backgroundImage: `url(${img2})` }}

          onMouseEnter={() => isProjectHover(1)}
          onMouseLeave={() => isProjectHover(false)}
        ></div>
      </a>

      <a href="https://www.google.co.in/" target="_blank">
        <div
          ref={image3Ref}
          className="w-[80%] h-[80vh] bg-green-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
          style={{ backgroundImage: `url(${img3})` }}

          onMouseEnter={() => isProjectHover(1)}
          onMouseLeave={() => isProjectHover(false)}
        ></div>
      </a>

      <a href="https://www.google.co.in/" target="_blank">
        <div
          ref={image4Ref}
          className="w-[80%] h-[80vh] bg-yellow-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
          style={{ backgroundImage: `url(${img4})` }}

          onMouseEnter={() => isProjectHover(1)}
          onMouseLeave={() => isProjectHover(false)}
        ></div>
      </a>

      <a href="https://www.google.co.in/" target="_blank">
        <div
          ref={image5Ref}
          className="w-[80%] h-[80vh] bg-red-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
          style={{ backgroundImage: `url(${img5})` }}

          onMouseEnter={() => isProjectHover(1)}
          onMouseLeave={() => isProjectHover(false)}
        ></div>
      </a>
    </main>
  );
}

export default Projects;
