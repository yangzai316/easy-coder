import { Tabs, Layout } from "antd";
import NewProject from "./components/new-project";
import ExistProject from "./components/exist-project";
import Header from "./components/header";
const { TabPane } = Tabs;

const SetProject = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header></Header>
      <Layout
        style={{ height: "100%", padding: "0 24px", backgroundColor: "#fff" }}
      >
        <Tabs defaultActiveKey="1" style={{ marginBottom: 32 }}>
          <TabPane tab="已存在项目" key="1">
            <ExistProject></ExistProject>
          </TabPane>
          <TabPane tab="新建项目" key="2">
            <NewProject />
          </TabPane>
        </Tabs>
      </Layout>
    </Layout>
  );
};

export default SetProject;
