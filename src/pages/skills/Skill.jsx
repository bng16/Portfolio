const Skill = ({ id, src, alt, style }) => {
  return <img id={id} src={src} alt={alt} className="w-[5vw] absolute" style={style} />;
};

export default Skill;
