import Logo from "./Logo";
import Navitems from './NavItems';


function Navbar() {
  return (
    <div className='w-full  px-[5vw] py-2 flex justify-between items-center absolute z-[1000] '>
      <Logo/>
      <Navitems/>
    </div>
  )
}

export default Navbar