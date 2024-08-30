import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function MyName({ name }) {
  const myNameRef = useRef(null);

  // Function to split the name into individual letters with spans
  const splitText = (name) => {
    return name.split("").map((item, index) => (
      <span key={index} id={index} >
        {item}
      </span>
    ));
  };

  const animatableText = splitText(name);

  useGSAP(() => {
    const entryTl = gsap.timeline({
      delay: 1,
      duration: 1, // Increase duration for a slower effect
    });
    entryTl.from(myNameRef.current.querySelectorAll('span'), {
      opacity: 0,
      y:100,
      stagger: 0.2, // Stagger animation for each letter
      // ease: "power3.out", // Easing function for smoother animation
    });
  }, [myNameRef.current]);


  return (
    <div className="overflow-hidden relative">
      <h1
        ref={myNameRef}
        className="font-black text-[10vw] leading-none tracking-tighter"
      >
        {animatableText}
        <span className="text-tertiary">.</span>
      </h1>
    </div>
  );
}

export default MyName;
