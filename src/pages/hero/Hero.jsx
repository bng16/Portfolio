import BngImage from '../../assets/Images/BngImage.png';

function Hero() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-screen flex flex-col gap-6 justify-center items-center">
        <h1 className="font-black text-[10vw] leading-none tracking-tighter">
          BISWAJIT NAG<span className="text-tertiary">.</span>
        </h1>
        <p className="w-[30vw] font-normal text-center leading-tight text-[1.1vw]">
          I’m a frontend-focused full-stack developer who turns ideas into sleek, responsive digital experiences. Work with me, and gain the unfair advantage your project needs.
        </p>
        <button className="bg-tertiary px-[1.5vw] py-[0.5vw] font-bold text-primary rounded-lg hover:rounded-xl ease-in-out duration-300">
          CONTACT ME
        </button>
      </div>
      <div className=" w-1/3 h-screen flex flex-col">
        <div className="flex-grow"></div>
        <img src={BngImage} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default Hero;
