// import React from 'react'

// function Cursor() {
//   return (
//     <div className="w-[1vw] h-[1vw] rounded-full bg-tertiary fixed z-[9]"></div>
//   )
// }

// export default Cursor



import React, { forwardRef } from 'react';

const Cursor = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-[1vw] h-[1vw] rounded-full bg-tertiary fixed z-[1000] mix-blend-difference"
    ></div>
  );
});

export default Cursor;
