import { Button } from "antd";
import "./../../../style/easy-header.scss";
import { EyeOutlined } from "@ant-design/icons";
import ORIGIN_TREE from "./../../../data/ORIGIN_TREE";
// service 模块
const { ipcRenderer } = window.require("electron");

const Header = () => {
  return (
    <div className="easy-header">
      <Button
        type="primary"
        size="small"
        icon={<EyeOutlined />}
        onClick={() => {
          const data = JSON.stringify(ORIGIN_TREE["id-root"]);
          console.log(data);
          ipcRenderer.send("open-prv-view", data);
        }}
      >
        预览
      </Button>
    </div>
  );
};
export default Header;
