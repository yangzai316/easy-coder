import { Button } from "antd";
import "./../../../style/easy-header.scss";
import { EyeOutlined } from "@ant-design/icons";
import ORIGIN_TREE from "./../../../data/ORIGIN_TREE";
// service 模块

const Header = () => {
  return (
    <div className="easy-header">
      <Button
        type="primary"
        size="small"
        icon={<EyeOutlined />}
        onClick={() => {
          const data = JSON.stringify(ORIGIN_TREE["id-root"]);
        }}
      >
        预览
      </Button>
      <Button type="primary" size="small" icon={<EyeOutlined />}>
        OPEN
      </Button>
    </div>
  );
};
export default Header;
