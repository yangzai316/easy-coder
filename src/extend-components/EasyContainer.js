const EasyContainer = ({ children, style, ...props }) => {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default EasyContainer;
