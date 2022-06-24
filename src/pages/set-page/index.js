import { Layout } from "antd";
import { useState, useCallback, useMemo } from "react";
import SpaceElement from "./components/space-element";
import SpaceWork from "./components/space-work";
import SpaceConfig from "./components/space-config";
import Assist from "./components/assist";
import Header from "./components/header";

const Store = window.require("electron-store");
const store = new Store();

const { Sider, Content } = Layout;

const SetPageContent = () => {
  // 获取当前项目的信息
  const projectData = useMemo(() => {
    const currentProjectUid = store.get("currentProject");
    return {
      currentProject: store.get(`project.${currentProjectUid}`),
      currentRoute: store.get("currentRoute"),
    };
  }, []);
  // 更新视图
  const [viewData, setViewData] = useState({
    currentUid: "id-root",
    updateCount: 0,
  });
  const updateView = useCallback((uid) => {
    setViewData((prv) => {
      return {
        currentUid: uid ? uid : prv.currentUid,
        updateCount: prv.updateCount + 1,
      };
    });
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <Header
        currentProject={projectData.currentProject}
        currentRoute={projectData.currentRoute}
      ></Header>
      <Layout style={{ height: "100%" }}>
        {/* 左侧组件展示区 */}
        <Sider theme="light" style={{ height: "100%", overflow: "auto" }}>
          <SpaceElement></SpaceElement>
        </Sider>
        {/* 中间组件组合区 */}
        <Content style={{ height: "100%" }}>
          <Assist
            updateCount={viewData.updateCount}
            updateView={updateView}
          ></Assist>
          <SpaceWork
            currentProject={projectData.currentProject}
            currentRoute={projectData.currentRoute}
            currentUid={viewData.currentUid}
            updateView={updateView}
          ></SpaceWork>
        </Content>
        {/* 右边组件属性设置区 */}
        <Sider theme="light" width={264} style={{ height: "100%" }}>
          <SpaceConfig
            currentUid={viewData.currentUid}
            updateView={updateView}
          ></SpaceConfig>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default SetPageContent;
