import { Layout, Switch } from "antd";
import { useEffect, useState, useRef, useCallback } from "react";
import SpaceElement from "./components/space-element";
import SpaceWork from "./components/space-work";
import SpaceConfig from "./components/space-config";
import Assist from "./components/assist";

const { Sider, Content } = Layout;

const SetPageContent = () => {
  // 当前操作的组件 uid
  const [currentUid, setCurrentUid] = useState("id-root");
  const [updateCount, setUpdateCount] = useState(0);

  // 操作次数统计 
  useEffect(() => {
    setUpdateCount(updateCount+1)
  }, [currentUid]);

  const updateConfig = () => {
    setUpdateCount(updateCount+1)
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light" style={{ height: "100%" }}>
        <SpaceElement></SpaceElement>
      </Sider>
      <Content style={{ height: "100%" }}>
        <Assist updateCount={updateCount.current}></Assist>
        <SpaceWork
          currentUid={currentUid}
          setCurrentUid={setCurrentUid}
        ></SpaceWork>
      </Content>
      <Sider theme="light" width={240} style={{ height: "100%" }}>
        <SpaceConfig
          currentUid={currentUid}
          setCurrentUid={setCurrentUid}
          updateConfig={updateConfig}
        ></SpaceConfig>
      </Sider>
    </Layout>
  );
};

export default SetPageContent;
