import React from 'react';

function SlidingBox({ top, left }) {
  return (
    <div 
      className="absolute w-[10vw] h-[6vw] bg-yellow-200 rounded-lg hover:rounded-none ease-in-out duration-300" 
      style={{ top, left }}
    />
  );
}

export default SlidingBox;
