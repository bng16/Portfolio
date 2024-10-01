import "../../index.css";
import HeroEnd from "./HeroEnd";
import MyName from "./MyName";
import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";
import HeroButton from "./HeroButton";
import { IoMdClose } from "react-icons/io";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SkillSlider from "../../components/SkillSlider";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroEndRef = useRef(null);
  const contactpageRef = useRef(null);
  const [contactState, setContactState] = useState(false);

  useEffect(() => {
    gsap.to(contactpageRef.current, {
      left: contactState ? 0 : "100vw",
      duration: 1,
    });
  }, [contactState]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#heroMain",
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
    <div
      id="heroMain"
      className="relative w-full h-screen flex flex-col justify-center items-center md:justify-start md:items-start md:flex-row bg-primary overflow-hidden"
    >
      {/* Contact Form */}
      <div
        ref={contactpageRef}
        className="absolute bg-primary w-full h-screen z-[1200] left-[100vw] flex justify-center items-center"
      >
        <IoMdClose
          className="text-[10vw] absolute top-[10vh] right-[5vw] hover:scale-110"
          onClick={() => setContactState(false)}
        />
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="border-2 border-secondary rounded-lg  w-[50vw] flex flex-col gap-4 p-8"
        >
          <input
            type="hidden"
            name="access_key"
            value="aacb1469-31ce-4ed9-8694-948b15089e7d"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-2 border border-gray-300 rounded"
          />
          <button
            className="relative cursor-pointer inline-block px-[2vw] py-[0.6vw] rounded-md font-bold uppercase border-[1px] bg-tertiary text-primary border-tertiary transition-all duration-500 ease-in-out hover:text-tertiary hover:bg-primary active:scale-90 z-10"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>

      {/* Hero Section */}
      <div className="w-2/3 h-screen flex flex-col gap-6 justify-center items-center">
        <MyName name={"BISWAJIT NAG"} />
        <HeroInfo />
        <HeroButton setContactState={setContactState} />
      </div>
      <div className="h-1/2 md:w-1/3 md:h-screen flex flex-col">
        <HeroImg />
      </div>
      
      <HeroEnd endRef={heroEndRef} />

      {/* SkillSlider only on small screens */}
      <div className="block md:hidden w-full absolute bottom-0">
        <SkillSlider />
      </div>
    </div>
  );
}

export default Hero;
