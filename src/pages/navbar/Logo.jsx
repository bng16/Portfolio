function Logo() {
  return (
    <>
    <div id="logo-section" className="flex gap-[0.5vw] cursor-pointer">
        <img className=' w-[2vw] ' src="src\assets\logo\BngLogo.svg" alt="" />
        <h1 className="font-black text-[2vw] tracking-tighter">Bng<span className="text-tertiary">.</span></h1>
      </div>
    </>
  )
}

export default Logo