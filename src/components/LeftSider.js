import { Menu } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import EasyIcon from "./EasyIcon";

const items = [
  {
    label: <Link to="/set-project"> </Link>,
    key: "set-project",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-shiyonggongju
      </EasyIcon>
    ),
  },
  {
    label: <Link to="/set-route"> </Link>,
    key: "set-route",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-shuxingtu
      </EasyIcon>
    ),
  },
  {
    label: <Link to="/set-page-content"> </Link>,
    key: "set-page-content",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-huanjingsheji
      </EasyIcon>
    ),
  },
];

const LeftSider = () => {
  return (
    <Menu mode="inline" style={{ width: 66 }} theme="dark" items={items} />
  );
};

export default LeftSider;
