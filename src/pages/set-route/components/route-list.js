import { List, Button, Modal } from "antd";
import { useMemo, useState } from "react";
import NewRoute from "./new-route";

const { accessSync, readFileSync, constants } = window.require("fs");

const RouteList = ({ currentProject }) => {
  // 视图更新动作
  const [times, updateTimes] = useState(0);
  // 读取本地路由数据
  const routeList = useMemo(() => {
    return getRouteJson(currentProject);
  }, [times]);

  return (
    <List
      header={
        <RouteListHeader
          currentProject={currentProject}
          updateTimes={updateTimes}
        ></RouteListHeader>
      }
      itemLayout="horizontal"
      dataSource={routeList}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button type="link">路由编辑</Button>,
            <Button type="link">页面编辑</Button>,
          ]}
        >
          <List.Item.Meta
            title={`路由：${item.routePath}`}
            description={`路由名称：${item.routeName}（${
              currentProject.projectPath
            }/${
              currentProject.projectName
            }/src/pages/${item.componentName.toLowerCase()}/index.js）`}
          />
        </List.Item>
      )}
    />
  );
};
// 路由列表，头部组件
const RouteListHeader = ({ currentProject, updateTimes }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const addSuccess = () => {
    setIsModalVisible(false);
    updateTimes(+new Date());
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "15px",
        }}
      >
        <span
          style={{
            fontWeight: "bolder",
          }}
        >
          该项目的路由列表
        </span>
        <Button size="small" type="primary" onClick={showModal}>
          新增
        </Button>
      </div>
      <Modal
        width="600px"
        title="路由新增"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <NewRoute
          onSuccessCk={addSuccess}
          currentProject={currentProject}
        ></NewRoute>
      </Modal>
    </>
  );
};
// 读取本地项目路由json信息
const getRouteJson = (currentProject) => {
  const path = `${currentProject.projectPath}/${currentProject.projectName}/src/router/index.json`;
  let routeList = [];
  try {
    accessSync(path, constants.R_OK | constants.W_OK);
    const data = readFileSync(path, {
      encoding: "utf-8",
    });
    routeList = JSON.parse(data).list;
  } catch (err) {
    console.error("route-list is error : ", err);
  }
  return routeList;
};

export default RouteList;
