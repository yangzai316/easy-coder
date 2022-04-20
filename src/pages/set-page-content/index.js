import { Layout } from "antd";
import SpaceElement from "./components/space-element";
import SpaceWork from "./components/space-work";

const { Sider, Content } = Layout;

const SetPageContent = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light" style={{ height: "100%" }}>
        <SpaceElement></SpaceElement>
      </Sider>
      <Content style={{ height: "100%" }}>
        <SpaceWork></SpaceWork>
      </Content>
      <Sider theme="light" style={{ height: "100%" }}>
        Sider2
      </Sider>
    </Layout>
  );
};

export default SetPageContent;
