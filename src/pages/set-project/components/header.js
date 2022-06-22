import { useEffect, useState } from "react";
import "./../../../style/easy-header.scss";

const { ipcRenderer } = window.require("electron");

const Header = () => {
  const [appPath, setAppPath] = useState();
  useEffect(() => {
    ipcRenderer.invoke("get-app-path").then((result) => {
      setAppPath(result);
    });
  }, []);
  return (
    <div className="easy-header">
      <span>项目管理-存储位置：{appPath} </span>
    </div>
  );
};
export default Header;
