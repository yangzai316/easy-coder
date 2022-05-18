import { Menu } from "antd";
import React from "react";
import router from "../router";

const LeftSider = () => {
  return (
    <Menu mode="inline" style={{ width: 66 }} theme="dark" items={router} />
  );
};

export default LeftSider;
