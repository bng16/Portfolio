function SlidingBox({ top, left, backgroundImage }) {
  return (
    <div 
      className="absolute w-[10vw] h-[6vw] bg-yellow-200 bg-cover bg-center rounded-lg hover:rounded-none ease-in-out duration-300" 
      style={{ top, left, backgroundImage }}
    />
  );
}

export default SlidingBox;
