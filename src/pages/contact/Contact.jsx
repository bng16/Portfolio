import xIcon from '../../assets/logo/Social/x.png'
import Linkedin from "../../assets/logo/Social/linkedin.png";
import GitHub from "../../assets/logo/Social/github.png";
import Insta from "../../assets/logo/Social/insta.png";



function Contact() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center py-[5vw]">
      <h1 className="font-black text-[4vw] mb-[5vw]">CONTACT ME<span className="text-tertiary leading-none">...</span></h1>
      <h1 className="font-thin text-[10vw] leading-none mb-[7vw]">bngooff<span className="text-tertiary">@</span>gmail<span className="text-tertiary">.</span>com</h1>
      <div className='flex gap-[5vw]'>
        {[xIcon,Linkedin,GitHub,Insta].map((link,index)=><img src={link} alt="" key={index} className='cursor-pointer w-[2vw] opacity-100 hover:opacity-70 ease-in-out duration-300'/>)}
      </div>

      <div className='absolute w-full h-[3vw] bg-tertiary rounded-t-3xl bottom-0 flex justify-between items-center px-[5vw] text-primary '>
        <h1>Designed by : Biswajit Nag.</h1>
        <h1>GitHub Link</h1>
        <h1>Version 1.0.0 </h1>
        <h1>Aug 24</h1>
        
      </div>
    </div>
  );
}

export default Contact;
