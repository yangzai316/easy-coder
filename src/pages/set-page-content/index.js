import { Layout, Switch } from "antd";
import { useEffect, useState, useRef } from "react";
import SpaceElement from "./components/space-element";
import SpaceWork from "./components/space-work";
import SpaceConfig from "./components/space-config";
import Assist from "./components/assist";

const { Sider, Content } = Layout;

const SetPageContent = () => {
  const [currentUid, setCurrentUid] = useState("id-root");

  const updateCount = useRef(0);
  useEffect(() => {
    updateCount.current = updateCount.current + 1;
  }, [currentUid]);

  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light" style={{ height: "100%" }}>
        <SpaceElement></SpaceElement>
      </Sider>
      <Content style={{ height: "100%" }}>
        <Assist updateCount={updateCount.current}></Assist>
        <SpaceWork setCurrentUid={setCurrentUid}></SpaceWork>
      </Content>
      <Sider theme="light" width={240} style={{ height: "100%" }}>
        <SpaceConfig
          setCurrentUid={setCurrentUid}
          currentUid={currentUid}
        ></SpaceConfig>
      </Sider>
    </Layout>
  );
};

export default SetPageContent;
