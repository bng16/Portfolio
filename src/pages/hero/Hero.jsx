import BngImage from "../../assets/Images/BngImage.png";
import HeroEnd from "./HeroEnd";
import MyName from "./MyName";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroEndRef = useRef(null);
  const introTextRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#heroMain",
        // markers: true,
        start: "50% 50%",
        end: "200% 50%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(
      heroEndRef.current,
      {
        top: "50vh", // Move HeroEnd to 40vh from the top of the viewport
      },
      "a"
    );
  }, []);

  return (
    <div id="heroMain" className="w-full h-screen flex relative bg-primary">
      <div className="w-2/3 h-screen flex flex-col gap-6 justify-center items-center">
        <MyName name={'BISWAJIT NAG'}/>
        <p
          ref={introTextRef}
          className="w-[30vw] font-normal text-center leading-tight text-[1.1vw]"
        >
          I’m a frontend-focused full-stack developer who turns ideas into
          sleek, responsive digital experiences. Work with me, and gain the
          unfair advantage your project needs.
        </p>
        <button className="bg-tertiary px-[1.5vw] py-[0.5vw] font-bold text-primary rounded-lg hover:rounded-xl ease-in-out duration-300">
          CONTACT ME
        </button>
      </div>
      <div className="w-1/3 h-screen flex flex-col">
        <div className="flex-grow"></div>
        <img
          src={BngImage}
          alt="image of Biswajit Nag"
          className="w-full object-cover"
        />
      </div>

      <HeroEnd endRef={heroEndRef} />
    </div>
  );
}

export default Hero;
