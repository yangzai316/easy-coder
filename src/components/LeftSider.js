import { Menu } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import router from "../router";

const LeftSider = () => {
  const location = useLocation();
  return (
    <Menu
      mode="inline"
      style={{ width: 66 }}
      theme="dark"
      defaultSelectedKeys={[location.pathname]}
      items={router}
    />
  );
};

export default LeftSider;
