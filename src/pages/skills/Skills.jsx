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


function Skills() {
  return (
    <div className='relative w-full h-screen flex justify-center items-center '>
      <h1 className='text-[10vw] font-black '><span className='text-tertiary'>!</span> SKILLS <span className='text-tertiary'>!</span></h1>
      
      <img src={htmlLogo} alt="HTML Logo" className="w-[10vw] absolute" style={{ top: '10%', left: '20%' }} />
      <img src={cssLogo} alt="CSS Logo" className="w-[10vw] absolute" style={{ top: '10%', left: '77%' }} />
      <img src={jsLogo} alt="JavaScript Logo" className="w-[12vw] absolute" style={{ top: '65%', left: '40%' }} />
      <img src={tailwindLogo} alt="Tailwind CSS Logo" className="w-[8vw] absolute" style={{ top: '75%', left: '70%' }} />
      <img src={reactLogo} alt="React Logo" className="w-[10vw] absolute" style={{ top: '60%', left: '15%' }} />
      <img src={gsapLogo} alt="GSAP Logo" className="w-[10vw] absolute" style={{ top: '8%', left: '50%' }} />
      <img src={tsLogo} alt="TypeScript Logo" className="w-[6vw] absolute" style={{ top: '40%', left: '10%' }} />
      <img src={daisyUiLogo} alt="Daisy UI Logo" className="w-[5vw] absolute" style={{ top: '60%', left: '90%' }} />
      <img src={reactRouterLogo} alt="React Router Logo" className="w-[5vw] absolute" style={{ top: '75%', left: '30%' }} />
      <img src={reduxLogo} alt="Redux Logo" className="w-[5vw] absolute" style={{ top: '80%', left: '5%' }} />
      <img src={nextLogo} alt="Next.js Logo" className="w-[5vw] absolute" style={{ top: '5%', left: '5%' }} />
      <img src={famerLogo} alt="Framer Motion Logo" className="w-[3vw] absolute" style={{ top: '10%', left: '65%' }} />
      <img src={bootstrapLogo} alt="Bootstrap Logo" className="w-[3vw] absolute" style={{ top: '30%', left: '35%' }} />
      <img src={gitLogo} alt="Git Logo" className="w-[5vw] absolute" style={{ top: '35%', left: '90%' }} />
      <img src={gitHubLogo} alt="GitHub Logo" className="w-[5vw] absolute" style={{ top: '45%', left: '75%' }} />
      <img src={figmaLogo} alt="Figma Logo" className="w-[3vw] absolute" style={{ top: '85%', left: '85%' }} />
      <img src={canvaLogo} alt="Canva Logo" className="w-[4vw] absolute" style={{ top: '5%', left: '92%' }} />
      <img src={keyBrLogo} alt="Keybr Logo" className="w-[3vw] absolute" style={{ top: '70%', left: '60%' }} />
      <img src={typingClubLogo} alt="TypingClub Logo" className="w-[5vw] absolute" style={{ top: '10%', left: '40%' }} />
      <img src={vercelLogo} alt="Vercel Logo" className="w-[5vw] absolute" style={{ top: '30%', left: '70%' }} />

      <div className='absolute w-full bg-primary z-[99]'></div>

    </div>
  )
}

export default Skills;
