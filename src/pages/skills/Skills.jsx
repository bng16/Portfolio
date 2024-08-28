import htmlLogo from '../../assets/logo/technologies/01_html.png';
import cssLogo from '../../assets/logo/technologies/02_css.png';
import jsLogo from '../../assets/logo/technologies/03_js.png';
import tailwindLogo from '../../assets/logo/technologies/04_tailwind.png';
import reactLogo from '../../assets/logo/technologies/05_react.png';
import gsapLogo from '../../assets/logo/technologies/06_GSAP.png';
import tsLogo from '../../assets/logo/technologies/07_typeScript.png';
import daisyUiLogo from '../../assets/logo/technologies/08_daisy_UI.png';
import reactRouterLogo from '../../assets/logo/technologies/09_react_router.png';
import reduxLogo from '../../assets/logo/technologies/10_redux.png';
import nextLogo from '../../assets/logo/technologies/11_nextjs.png';
import famerLogo from '../../assets/logo/technologies/12_famer_motion.png';
import bootstrapLogo from '../../assets/logo/technologies/13_bootStrap.png';
import gitLogo from '../../assets/logo/technologies/14_git.png';
import gitHubLogo from '../../assets/logo/technologies/15_github.png';
import figmaLogo from '../../assets/logo/technologies/16_Figma.png';
import canvaLogo from '../../assets/logo/technologies/17_canva.png';
import keyBrLogo from '../../assets/logo/technologies/18_keybr.png';
import typingClubLogo from '../../assets/logo/technologies/19_typingclub.png';
import vercelLogo from '../../assets/logo/technologies/20_vercel.png';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillMainRef = useRef(null);
  const skillTextRef = useRef(null);
  const skillCoverRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillMainRef.current,
        // markers: true,
        start: '55% 50%',
        end: '1200% 60%',
        scrub: 1,
        pin: true,
      },
    });

    tl.from(skillTextRef.current, {
      scale: 0,
      opacity: 0,
    }, 'start')

    .to("#html",{
      opacity: 1,
      filter: "blur(0px)",
    },'a')
    .to("#css",{
      opacity: 1,
      filter: "blur(0px)",
    },'a')
    .to("#js",{
      opacity: 1,
      filter: "blur(0px)",
    },'a')

    .to("#tailwind", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'b')
    .to("#react", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'b')
    .to("#gsap", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'b')

    .to("#ts", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'b')
    .to("#daisy", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'c')
    .to("#reactrouter", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'c')

    .to("#redux", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'c')
    .to("#next", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'c')
    .to("#famer", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'd')

    .to("#bootstrap", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'd')
    .to("#git", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'd')
    .to("#github", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'd')

    .to("#figma", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'e')
    .to("#canva", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'e')
    .to("#keybr", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'e')

    .to("#typingclub", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'e')
    .to("#vercel", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'e')
    .to(skillCoverRef.current, {
      height: '100vh',
    }, 'f');

  }, []);

  return (
    <div ref={skillMainRef} className='relative w-full h-screen flex justify-center items-center '>
      <h1 ref={skillTextRef} className='text-[10vw] font-black '><span className='text-tertiary'>!</span> SKILLS <span className='text-tertiary'>!</span></h1>
      
      <img id='html' src={htmlLogo} alt="HTML Logo" className="w-[10vw] absolute" style={{ top: '10%', left: '20%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='css' src={cssLogo} alt="CSS Logo" className="w-[10vw] absolute" style={{ top: '10%', left: '77%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='js' src={jsLogo} alt="JavaScript Logo" className="w-[12vw] absolute" style={{ top: '65%', left: '40%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='tailwind' src={tailwindLogo} alt="Tailwind CSS Logo" className="w-[8vw] absolute" style={{ top: '75%', left: '70%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='react' src={reactLogo} alt="React Logo" className="w-[10vw] absolute" style={{ top: '60%', left: '15%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='gsap' src={gsapLogo} alt="GSAP Logo" className="w-[10vw] absolute" style={{ top: '8%', left: '50%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='ts' src={tsLogo} alt="TypeScript Logo" className="w-[6vw] absolute" style={{ top: '40%', left: '10%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='daisy' src={daisyUiLogo} alt="Daisy UI Logo" className="w-[5vw] absolute" style={{ top: '60%', left: '90%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='reactrouter' src={reactRouterLogo} alt="React Router Logo" className="w-[5vw] absolute" style={{ top: '75%', left: '30%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='redux' src={reduxLogo} alt="Redux Logo" className="w-[5vw] absolute" style={{ top: '80%', left: '5%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='next' src={nextLogo} alt="Next.js Logo" className="w-[5vw] absolute" style={{ top: '5%', left: '5%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='famer' src={famerLogo} alt="Framer Motion Logo" className="w-[3vw] absolute" style={{ top: '10%', left: '65%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='bootstrap' src={bootstrapLogo} alt="Bootstrap Logo" className="w-[3vw] absolute" style={{ top: '30%', left: '35%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='git' src={gitLogo} alt="Git Logo" className="w-[5vw] absolute" style={{ top: '35%', left: '90%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='github' src={gitHubLogo} alt="GitHub Logo" className="w-[5vw] absolute" style={{ top: '45%', left: '75%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='figma' src={figmaLogo} alt="Figma Logo" className="w-[3vw] absolute" style={{ top: '85%', left: '85%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='canva' src={canvaLogo} alt="Canva Logo" className="w-[4vw] absolute" style={{ top: '70%', left: '55%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='keybr' src={keyBrLogo} alt="Keybr Logo" className="w-[5vw] absolute" style={{ top: '30%', left: '65%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='typingclub' src={typingClubLogo} alt="Typing Club Logo" className="w-[4vw] absolute" style={{ top: '20%', left: '45%', filter: 'blur(100px)', opacity: '0' }} />
      <img id='vercel' src={vercelLogo} alt="Vercel Logo" className="w-[5vw] absolute" style={{ top: '95%', left: '60%', filter: 'blur(100px)', opacity: '0' }} />
      
      <div ref={skillCoverRef} className='w-full bg-primary absolute'></div>
    </div>
  );
}

export default Skills;
