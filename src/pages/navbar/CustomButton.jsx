import gsap from 'gsap';
import { useRef, useEffect } from 'react';

import pdfFile from '../../assets/pdf/bng.pdf';

function CustomButton() {

  return (
    <a
    href={pdfFile}
      download="BiswajitNag.pdf" // The name of the file when downloaded
    className='relative cursor-pointer inline-block px-[2vw] py-[0.6vw] rounded-md font-bold uppercase border-[1px] bg-tertiary text-primary border-tertiary transition-all duration-500 ease-in-out hover:text-tertiary hover:bg-primary active:scale-90 z-10'
  >
    CONTACT ME

  </a>
  );
}

export default CustomButton;

