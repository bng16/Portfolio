import gsap from 'gsap';
import { useRef, useEffect } from 'react';

import pdfFile from '../../assets/pdf/bng.pdf';

function CustomButton() {
  const buttonRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    // Function to handle hover effect
    const handleHover = (isHovered) => {
      if (isHovered) {
        gsap.to(coverRef.current, {
          width: '100%',
          opacity: 1,
          duration: 0.3,
        });
      } else {
        gsap.to(coverRef.current, {
          width: '0%',
          opacity: 0,
          duration: 0.1,
        });
      }
    };

    const buttonElement = buttonRef.current;

    // Add event listeners
    buttonElement.addEventListener('mouseenter', () => handleHover(true));
    buttonElement.addEventListener('mouseleave', () => handleHover(false));

    // Cleanup event listeners on component unmount
    return () => {
      buttonElement.removeEventListener('mouseenter', () => handleHover(true));
      buttonElement.removeEventListener('mouseleave', () => handleHover(false));
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={pdfFile}
      download="BiswajitNag.pdf" // The name of the file when downloaded
      className='relative cursor-pointer inline-block px-[2vw] py-[0.6vw] rounded-md font-bold uppercase border-3 bg-tertiary text-primary border-black transition-all duration-300 ease-in-out hover:text-tertiary active:scale-90 z-10'
    >
      RESUME
      <span
        ref={coverRef}
        className="absolute rounded-md border-[1px] border-tertiary inset-0 w-0 h-full bg-primary opacity-0 transition-all duration-500 ease-in-out z-[-1]"
      ></span>
    </a>
  );
}

export default CustomButton;

