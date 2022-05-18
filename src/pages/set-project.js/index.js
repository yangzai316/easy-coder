import { Tabs } from "antd";
import NewProject from "./components/new-project";
import ExistProject from "./components/exist-project";
const { TabPane } = Tabs;

const SetProject = () => {
  return (
    <div
      style={{ backgroundColor: "#fff", height: "100%", padding: "16px 24px" }}
    >
      <Tabs defaultActiveKey="1" style={{ marginBottom: 32 }}>
        <TabPane tab="打开已存在项目" key="1">
          <ExistProject></ExistProject>
        </TabPane>
        <TabPane tab="新建项目" key="2">
          <NewProject />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SetProject;
