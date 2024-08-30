// components/Skills.js
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Skill from './Skill.jsx';
import SkillCover from './SkillCover.jsx';

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

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillMainRef = useRef(null);
  const skillTextRef = useRef(null);
  const skillCoverRef = useRef(null);
  const skillCover2Ref = useRef(null);

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

    .to("#html", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'a')
    .to("#css", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'a')
    .to("#js", {
      opacity: 1,
      filter: "blur(0px)",
    }, 'a')

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
    .from(skillCoverRef.current, {
      x: '200vw',
    }, 'f')
    .from(skillCover2Ref.current, {
      x: '-200vw',
    }, 'f')
    .to(skillCoverRef.current, {
      width: "200vw",
      height: "200vw",
      backgroundColor: "#FFFFFF",
    }, 'g')
    .to(skillCover2Ref.current, {
      width: "200vw",
      height: "200vw",
      backgroundColor: "#FFFFFF",
    }, 'g');
  }, []);

  return (
    <div ref={skillMainRef} className='relative w-full h-screen flex justify-center items-center bg-primary overflow-hidden'>
      <h1 ref={skillTextRef} className='text-[10vw] font-black '>
        <span className='text-tertiary'>!</span> SKILLS <span className='text-tertiary'>!</span>
      </h1>
      
      <Skill id='html' src={htmlLogo} size={10} alt="HTML Logo" style={{ top: '10%', left: '20%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='css' src={cssLogo} size={10} alt="CSS Logo" style={{ top: '10%', left: '77%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='js' src={jsLogo} size={12} alt="JavaScript Logo" style={{ top: '65%', left: '40%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='tailwind' src={tailwindLogo} size={8} alt="Tailwind CSS Logo" style={{ top: '75%', left: '70%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='react' src={reactLogo} size={10} alt="React Logo" style={{ top: '60%', left: '15%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='gsap' src={gsapLogo} size={10} alt="GSAP Logo" style={{ top: '8%', left: '50%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='ts' src={tsLogo} size={6} alt="TypeScript Logo" style={{ top: '40%', left: '10%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='daisy' src={daisyUiLogo} size={5} alt="Daisy UI Logo" style={{ top: '60%', left: '90%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='reactrouter' src={reactRouterLogo} size={5} alt="React Router Logo" style={{ top: '75%', left: '30%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='redux' src={reduxLogo} size={5} alt="Redux Logo" style={{ top: '80%', left: '5%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='next' src={nextLogo} size={5} alt="Next.js Logo" style={{ top: '5%', left: '5%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='famer' src={famerLogo} size={3} alt="Framer Motion Logo" style={{ top: '10%', left: '65%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='bootstrap' src={bootstrapLogo} size={3} alt="Bootstrap Logo" style={{ top: '30%', left: '35%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='git' src={gitLogo} size={5} alt="Git Logo" style={{ top: '35%', left: '90%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='github' src={gitHubLogo} size={5} alt="GitHub Logo" style={{ top: '45%', left: '75%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='figma' src={figmaLogo} size={3} alt="Figma Logo" style={{ top: '85%', left: '20%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='canva' src={canvaLogo} size={4} alt="Canva Logo" style={{ top: '70%', left: '55%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='keybr' src={keyBrLogo} size={5} alt="Keybr Logo" style={{ top: '30%', left: '65%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='typingclub' src={typingClubLogo} size={4} alt="Typing Club Logo" style={{ top: '20%', left: '45%', filter: 'blur(100px)', opacity: '0' }} />
      <Skill id='vercel' src={vercelLogo} size={5} alt="Vercel Logo" style={{ top: '95%', left: '85%', filter: 'blur(100px)', opacity: '0' }} />
      
      <SkillCover ref={skillCoverRef} />
      <SkillCover ref={skillCover2Ref} />
    </div>
  );
}

export default Skills;
