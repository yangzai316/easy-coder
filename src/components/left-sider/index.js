import { Menu } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import { PartitionOutlined, LayoutOutlined } from "@ant-design/icons";

const items = [
  {
    label: <Link to="/set-page-content"> </Link>,
    key: "set-page-content",
    icon: <LayoutOutlined style={{ fontSize: "28px" }} />,
  },
  {
    label: <Link to="/set-route"> </Link>,
    key: "set-route",
    icon: <PartitionOutlined style={{ fontSize: "28px" }} />,
  },
];

const LeftSider = () => {
  return (
    <Menu mode="inline" style={{ width: 66 }} theme="dark" items={items} />
  );
};

export default LeftSider;
