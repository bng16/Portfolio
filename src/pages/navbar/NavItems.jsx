import xIcon from '../../assets/logo/Social/x.png';
import Linkedin from "../../assets/logo/Social/linkedin.png";
import GitHub from "../../assets/logo/Social/github.png";
import Insta from "../../assets/logo/Social/insta.png";
import CustomButton from './CustomButton';

function NavItems() {
  return (
    <div id="nav-section" className='flex gap-[2vw] items-center'>
      {[[xIcon,'https://x.com/BiswajitNaag'],
        [Linkedin,'https://www.linkedin.com/in/biswajit-nag/'],
        [GitHub,'https://github.com/bng16'],
        [Insta,'https://www.instagram.com/ig_bng/'],
        'button'].map((social, index) =>
        index === 4 ? (
          <div className="ml-[5vw]" key={index}>
            <CustomButton />
          </div>
        ) : (
          <a href={social[1]} target="_blank" rel="noopener noreferrer" key={index}>
            <img
              src={social[0]}
              alt={`Social icon ${index}`}
              className='cursor-pointer w-[2vw] opacity-100 hover:opacity-70 ease-in-out duration-300'
            />
          </a>
        )
      )}
    </div>
  );
}

export default NavItems;
