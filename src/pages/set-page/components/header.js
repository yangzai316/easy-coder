import { Button } from "antd";
import "./../../../style/easy-header.scss";
import {
  EyeOutlined,
  DownloadOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import ORIGIN_TREE from "./../../../data/ORIGIN_TREE";
import { writePageJson } from "./../../../helper/fs";
const Header = ({ currentProject, currentRoute }) => {
  return (
    <div className="easy-header">
      <span>
        页面管理-项目信息：{currentProject.projectName}，路由信息：
        {currentRoute.routeName}（path：{currentRoute.routePath}）
      </span>
      <div>
        <Button
          type="primary"
          size="small"
          icon={<FileProtectOutlined />}
          onClick={() => {
            const data = ORIGIN_TREE["id-root"];
            writePageJson(currentProject, currentRoute, data);
          }}
        >
          保存
        </Button>
        &nbsp;
        <Button type="primary" size="small" icon={<EyeOutlined />}>
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
