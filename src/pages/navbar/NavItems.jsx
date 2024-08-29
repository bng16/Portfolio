import xIcon from '../../assets/logo/Social/x.png';
import Linkedin from "../../assets/logo/Social/linkedin.png";
import GitHub from "../../assets/logo/Social/github.png";
import Insta from "../../assets/logo/Social/insta.png";




function NavItems() {
  

  return (
    <>
      <div id="nav-section" className='flex gap-[2vw] items-center'>
        {[xIcon,Linkedin,GitHub,Insta,'button'].map((link,index)=>index===4 ? <button className="ml-[5vw] bg-tertiary px-[1.5vw] py-[0.5vw] font-bold text-primary rounded-lg hover:rounded-xl ease-in-out duration-300">Resume</button> : <img src={link} alt="" key={index} className='cursor-pointer w-[2vw] opacity-100 hover:opacity-70 ease-in-out duration-300'/>)}
      </div>
    </>
  )
}

export default NavItems


