const Img = ({ style, ...props }) => {
  return <img style={style} alt={props.alt} {...props}></img>;
};

export default Img;
