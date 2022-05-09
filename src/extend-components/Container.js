const Container = ({ children, style, ...props }) => {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default Container;
