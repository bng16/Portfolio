import HeroEnd from "./HeroEnd";
import MyName from "./MyName";
import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroEndRef = useRef(null);

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
        top: "50vh",
      },
      "a"
    );
  }, []);

  return (
    <div id="heroMain" className="w-full h-screen flex relative bg-primary">
      <div className="w-2/3 h-screen flex flex-col gap-6 justify-center items-center">
        <MyName name={'BISWAJIT NAG'}/>
        <HeroInfo/>
        <button className="bg-tertiary px-[1.5vw] py-[0.5vw] font-bold text-primary rounded-lg hover:rounded-xl ease-in-out duration-300">
          CONTACT ME
        </button>
      </div>
      <div className="w-1/3 h-screen flex flex-col">
        <HeroImg/>
      </div>

      <HeroEnd endRef={heroEndRef} />
    </div>
  );
}

export default Hero;
