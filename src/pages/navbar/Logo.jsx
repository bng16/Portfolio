import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import bngLogo from "src/assets/logo/BngLogo.svg";

function Logo() {
  const logoRef = useRef(null);
  const [logoState, setLogoState] = useState(false);

  useEffect(() => {
    gsap.to(logoRef.current, {
      rotate: logoState ? 720 : -720,
      duration: 1,
      ease: "power2.inOut", // Added ease for smoother rotation
    });
  }, [logoState]);

  return (
    <div
      id="logo-section"
      className="w-[7vw] flex justify-around items-center cursor-pointer"
      onMouseEnter={() => setLogoState(true)}
      onMouseLeave={() => setLogoState(false)}
    >
      <img ref={logoRef} className="w-[2vw]" src={bngLogo} alt="Logo" />

      <h1 className="font-black text-[2vw] tracking-tighter leading-none">
        Bng<span className="text-tertiary">.</span>
      </h1>
    </div>
  );
}

export default Logo;
