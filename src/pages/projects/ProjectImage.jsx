import React, { useRef } from "react";

function ProjectImage({ imgSrc, imgAlt, href, imgRef, onHover }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        ref={imgRef}
        className="w-[80%] h-[80vh] bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
        style={{ backgroundImage: `url(${imgSrc})` }}
        alt={imgAlt}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      ></div>
    </a>
  );
}

export default ProjectImage;
