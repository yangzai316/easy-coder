import { Button } from "antd";
import "./../../../style/easy-header.scss";
import {
  EyeOutlined,
  DownloadOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import ORIGIN_TREE from "./../../../data/ORIGIN_TREE";

const Header = ({ currentProject, currentRoute }) => {
  return (
    <div className="easy-header">
      <span>
        页面管理-项目信息：{currentProject.projectName}，路由信息：
        {currentRoute.routeName}（path：{currentRoute.routePath}）
      </span>
      <div>
        <Button type="primary" size="small" icon={<FileProtectOutlined />}>
          保存
        </Button>
        &nbsp;
        <Button
          type="primary"
          size="small"
          icon={<EyeOutlined />}
          onClick={() => {
            const data = JSON.stringify(ORIGIN_TREE["id-root"]);
            console.log(data);
          }}
        >
          生成&预览
        </Button>
        &nbsp;
        <Button type="primary" size="small" icon={<DownloadOutlined />}>
          生成
        </Button>
      </div>
    </div>
  );
};
export default Header;
