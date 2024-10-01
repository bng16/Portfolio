import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithubSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAppwrite } from "react-icons/si";

function SkillSlider() {
  return (
    <div className="bg-red-500 w-full h-[10vh] rounded-md flex justify-around text-4xl items-center overflow-hidden absolute bottom-0 z-[100] text-white">
      <FaHtml5 className="animate-bounce" style={{ animationDelay: '0s' }} />
      <FaCss3Alt className="animate-bounce" style={{ animationDelay: '0.1s' }} />
      <FaJsSquare className="animate-bounce" style={{ animationDelay: '0.2s' }} />
      <FaReact className="animate-bounce" style={{ animationDelay: '0.3s' }} />
      <RiTailwindCssFill className="animate-bounce" style={{ animationDelay: '0.4s' }} />
      <SiAppwrite className="animate-bounce" style={{ animationDelay: '0.5s' }} />
      <FaGithubSquare className="animate-bounce" style={{ animationDelay: '0.6s' }} />
    </div>
  );
}

export default SkillSlider;
