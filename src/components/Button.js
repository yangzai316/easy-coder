import * as Antd from "antd";

const Button = ({ content, ...props }) => {
  return <Antd.Button {...props}>{content}</Antd.Button>;
};

export default Button;
