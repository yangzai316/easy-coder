import { Layout } from "antd";
import { useState } from "react";
import SpaceElement from "./components/space-element";
import SpaceWork from "./components/space-work";
import SpaceConfig from "./components/space-config";

const { Sider, Content } = Layout;

const SetPageContent = () => {
  const [currentUid, setCurrentUid] = useState("id-root");
  const [pageUpdate, setPageUpdate] = useState(1);

  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light" style={{ height: "100%" }}>
        <SpaceElement></SpaceElement>
      </Sider>
      <Content style={{ height: "100%" }}>
        <SpaceWork
          setCurrentUid={setCurrentUid}
          pageUpdate={pageUpdate}
        ></SpaceWork>
      </Content>
      <Sider theme="light" style={{ height: "100%" }}>
        <SpaceConfig
          currentUid={currentUid}
          pageUpdate={pageUpdate}
          setPageUpdate={setPageUpdate}
        ></SpaceConfig>
      </Sider>
    </Layout>
  );
};

export default SetPageContent;
