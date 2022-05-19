import { Layout } from "antd";
import { useMemo } from "react";
import Header from "./components/header";
import RouteList from "./components/route-list";
const Store = window.require("electron-store");
const store = new Store();

const SetRoute = () => {
  // 获取当前项目的信息
  const currentProjectUid = store.get("currentProject");
  const currentProject = useMemo(() => {
    return store.get(`project.${currentProjectUid}`);
  }, [currentProjectUid]);

  return (
    <Layout style={{ height: "100%" }}>
      <Header data={currentProject}></Header>
      <Layout
        style={{ height: "100%", padding: "24px", backgroundColor: "#fff" }}
      >
        <RouteList currentProject={currentProject}></RouteList>
      </Layout>
    </Layout>
  );
};

export default SetRoute;
