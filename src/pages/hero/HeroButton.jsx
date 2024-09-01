import { useRef, useEffect } from "react";
import gsap from "gsap";

function HeroButton() {
  const homeButtonRef = useRef(null);

  useEffect(() => {
    if (homeButtonRef.current) {
      gsap.fromTo(
        homeButtonRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.1,
          duration: 3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <button
        ref={homeButtonRef}
        className='relative cursor-pointer inline-block px-[2vw] py-[0.6vw] rounded-md font-bold uppercase border-[1px] bg-tertiary text-primary border-tertiary transition-all duration-500 ease-in-out hover:text-tertiary hover:bg-primary active:scale-90 z-10'
        >
        CONTACT ME
</button>
    </div>
  );
}

export default HeroButton;
