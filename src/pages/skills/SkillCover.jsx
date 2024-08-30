// components/SkillCover.jsx
import React, { forwardRef } from 'react';

const SkillCover = forwardRef((props, ref) => {
  return <div ref={ref} className='w-[5vw] h-[5vw] bg-secondary absolute rounded-full'></div>;
});

export default SkillCover;
