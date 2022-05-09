const Text = ({ content, style, ...props }) => {
  return (
    <span style={style} {...props}>
      {content}
    </span>
  );
};

export default Text;
