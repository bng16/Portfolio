import BngImage from "../../assets/Images/BngImage.png";


import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroImg() {
  const heroImageRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroImageRef.current, {
      opacity: 0,
      delay: 1,
      duration: 3
    })
  });


  return (
    <>
      <div className="flex-grow "></div>
        <img
          ref={heroImageRef}
          src={BngImage}
          alt="image of Biswajit Nag"
          className="w-full object-cover"
        />
    </>
  )
}

export default HeroImg