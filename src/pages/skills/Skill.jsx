const Skill = ({ id, src, alt, style, size }) => {
  return <img id={id} src={src} alt={alt} className={`w-[${size}vw] absolute`} style={style} />;
};

export default Skill;
