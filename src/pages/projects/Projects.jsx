import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectImage from "./ProjectImage";
import ProjectsHeading from "./ProjectsHeading";

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/Projects/1.jpg';
import img2 from '../../assets/Projects/2.jpg';
import img3 from '../../assets/Projects/3.jpg';
import img4 from '../../assets/Projects/4.jpg';
import img5 from '../../assets/Projects/5.jpg';

function Projects({ isProjectHover }) {
  const mainSectionRef = useRef();
  const textRef = useRef();
  const imageRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

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
      .to(imageRefs[0].current, { top: "30%" }, "a")
      .to(imageRefs[1].current, { top: "34%" }, "b")
      .to(imageRefs[0].current, { width: "50%", height: "50vh" }, "b")
      .to(imageRefs[2].current, { top: "38%" }, "c")
      .to(imageRefs[1].current, { width: "55%", height: "55vh" }, "c")
      .to(imageRefs[3].current, { top: "42%" }, "d")
      .to(imageRefs[2].current, { width: "60%", height: "60vh" }, "d")
      .to(imageRefs[4].current, { top: "46%" }, "e")
      .to(imageRefs[3].current, { width: "65%", height: "65vh" }, "e")
      .to(imageRefs[4].current, { bottom: '0px', width: "120%", height: "120vh" }, "f");
  }, []);

  return (
    <main
      ref={mainSectionRef}
      className="relative w-full h-[150vh] flex flex-col items-center bg-primary overflow-hidden"
    >
      <ProjectsHeading textRef={textRef} />
      <ProjectImage
        imgSrc={img1}
        imgAlt="Project 1"
        href="https://www.google.co.in/"
        imgRef={imageRefs[0]}
        onHover={(hovering) => isProjectHover(hovering ? 1 : false)}
      />
      <ProjectImage
        imgSrc={img2}
        imgAlt="Project 2"
        href="https://www.facebook.com/"
        imgRef={imageRefs[1]}
        onHover={(hovering) => isProjectHover(hovering ? 2 : false)}
      />
      <ProjectImage
        imgSrc={img3}
        imgAlt="Project 3"
        href="https://www.google.co.in/"
        imgRef={imageRefs[2]}
        onHover={(hovering) => isProjectHover(hovering ? 3 : false)}
      />
      <ProjectImage
        imgSrc={img4}
        imgAlt="Project 4"
        href="https://www.google.co.in/"
        imgRef={imageRefs[3]}
        onHover={(hovering) => isProjectHover(hovering ? 4 : false)}
      />
      <ProjectImage
        imgSrc={img5}
        imgAlt="Project 5"
        href="https://www.google.co.in/"
        imgRef={imageRefs[4]}
        onHover={(hovering) => isProjectHover(hovering ? 5 : false)}
      />
    </main>
  );
}

export default Projects;
