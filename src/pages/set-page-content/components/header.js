import { Button } from "antd";
import "./../../../style/easy-header.scss";
import { EyeOutlined } from "@ant-design/icons";
import ORIGIN_TREE from "./../../../data/ORIGIN_TREE";

const Header = ({ currentProject }) => {
  return (
    <div className="easy-header">
      <span>
        页面管理-当前项目为 {currentProject.projectName}（ID:
        {currentProject.uid}）
      </span>
      <div>
        <Button
          type="primary"
          size="small"
          icon={<EyeOutlined />}
          onClick={() => {
            const data = JSON.stringify(ORIGIN_TREE["id-root"]);
            console.log(data);
          }}
        >
          预览
        </Button>
        <Button type="primary" size="small" icon={<EyeOutlined />}>
          OPEN
        </Button>
      </div>
    </div>
  );
};
export default Header;
