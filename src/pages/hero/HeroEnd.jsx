

function HeroEnd({endRef}) {
  return (
    <div ref={endRef} className="hidden md:flex bg-red-500 w-full h-[50vh] rounded-3xl items-center overflow-hidden absolute top-[100vh] z-[100]">
      <div className="w-full h-[70%] border-4 border-x-0">
        <h1 className="animate-moveLeft font-black text-[10vw] whitespace-nowrap text-primary">
          FRONTEND ENGINEER ★ FULL STACK DEVELOPER ★
          JAVASCRIPT SPECIALIST ★ REACT.JS ARCHITECT ★
          MERN STACK DEVELOPER ★ WEB APPLICATION DEVELOPER ★
          RESPONSIVE DESIGN EXPERT ★ INTERACTIVE WEB DEVELOPER ★
        </h1>
      </div>
    </div>
  );
}

export default HeroEnd;
