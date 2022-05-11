import { Button } from "antd";
import "./../../../style/easy-header.scss";
import { EyeOutlined } from "@ant-design/icons";
const { ipcRenderer } = window.require("electron");

const Header = () => {
  return (
    <div className="easy-header">
      <Button
        type="primary"
        size="small"
        icon={<EyeOutlined />}
        onClick={() => {
          ipcRenderer.send("open-prv-view");
        }}
      >
        预览
      </Button>
    </div>
  );
};
export default Header;
