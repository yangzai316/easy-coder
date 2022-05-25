import * as Antd from "antd";

const EasyButton = ({ content, ...props }) => {
  return <Antd.Button {...props}>{content}</Antd.Button>;
};

export default EasyButton;
