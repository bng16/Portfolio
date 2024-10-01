import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroInfo() {
  const introTextRef = useRef(null);

  useGSAP(() => {
    gsap.from(introTextRef.current, {
      opacity: 0,
      delay: 1,
      duration: 3,
    })
  });


  return (
    <p
          ref={introTextRef}
          className="w-[30vw] font-normal text-center leading-tight text-[1.1vw] hidden sm:block"
        >
          I’m a frontend-focused full-stack developer who turns ideas into
          sleek, responsive digital experiences. Work with me, and gain the
          unfair advantage your project needs.
        </p>
  )
}

export default HeroInfo