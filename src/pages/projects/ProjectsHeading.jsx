import React from "react";

function ProjectsHeading({ textRef }) {
  return (
    <h1
      ref={textRef}
      className="font-black absolute top-[20vh] text-secondary text-[10vw]"
    >
      <span className="text-tertiary">!</span> PROJECTS{" "}
      <span className="text-tertiary">!</span>
    </h1>
  );
}

export default ProjectsHeading;
