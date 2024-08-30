function Logo() {
  return (
    <>
    <div id="logo-section" className=" w-[7vw] flex justify-around items-center  cursor-pointer">
        <img className=' w-[2vw] ' src="src\assets\logo\BngLogo.svg" alt="" />
        <h1 className="font-black text-[2vw] tracking-tighter leading-none">Bng<span className="text-tertiary">.</span></h1>
      </div>
    </>
  )
}

export default Logo

