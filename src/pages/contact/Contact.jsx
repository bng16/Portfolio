import xIcon from '../../assets/logo/Social/x.png'
import Linkedin from "../../assets/logo/Social/linkedin.png";
import GitHub from "../../assets/logo/Social/github.png";
import Insta from "../../assets/logo/Social/insta.png";



function Contact({isEmailHover}) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center py-[5vw] bg-primary">
      <h1 className="font-black text-[4vw] mb-[5vw]">CONTACT ME<span className="text-tertiary leading-none">...</span></h1>
      <h1 
        className="font-thin text-[10vw] leading-none mb-[7vw] cursor-pointer"
        onClick={() => {
          window.navigator.clipboard.writeText('bngooff@gmail.com')
          isEmailHover(3)

        }}
        onMouseEnter={() => isEmailHover(2)}
        onMouseLeave={() => isEmailHover(false)}
      >bngooff<span className="text-tertiary">@</span>gmail<span className="text-tertiary">.</span>com</h1>
      <div className='flex gap-[5vw]'>
      {
      [[xIcon,'https://x.com/BiswajitNaag'],
        [Linkedin,'https://www.linkedin.com/in/biswajit-nag/'],
        [GitHub,'https://github.com/bng16'],
        [Insta,'https://www.instagram.com/ig_bng/']
      ].map((social, index) =>
          <a href={social[1]} target="_blank" rel="noopener noreferrer" key={index}>
            <img
              src={social[0]}
              alt={`Social icon ${index}`}
              className='cursor-pointer w-[2vw] opacity-100 hover:opacity-70 ease-in-out duration-300'
            />
          </a>
        
      )}
      </div>

      <div className='absolute w-full h-[3vw] bg-tertiary rounded-t-3xl bottom-0 flex justify-between items-center px-[5vw] text-primary '>
        <h1>Designed by : Biswajit Nag.</h1>
        <a href="https://github.com/bng16/Portfolio" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-secondary ease-in-out duration-300'>Repo Link</a>
        <h1>Version 1.0.0 </h1>
        <h1>Aug 24</h1>
      </div>

    </div>
  );
}

export default Contact;
