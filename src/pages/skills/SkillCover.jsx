// components/SkillCover.jsx
import React, { forwardRef } from 'react';

const SkillCover = forwardRef((props, ref) => {
  return <div ref={ref} className='w-full bg-primary absolute'></div>;
});

export default SkillCover;
