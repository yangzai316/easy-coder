import { List, Button, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import NewRoute from "./new-route";

const { accessSync, readFileSync, constants } = window.require("fs");
const Store = window.require("electron-store");
const store = new Store();

const RouteList = ({ currentProject }) => {
  // 路由配置
  const navigate = useNavigate();
  // 视图更新动作
  const [times, updateTimes] = useState("");
  // 读取本地路由数据
  const routeList = useMemo(() => {
    return getRouteJson(currentProject);
  }, [times, currentProject]);
  // 跳转页面编辑页
  const editPage = (item) => {
    store.set("currentRoute", item);
    message.loading("正在跳转该路由的页面设置...", 0.4).then(() => {
      navigate("/set-page");
    });
  };
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
            <Button
              type="link"
              onClick={() => {
                editPage(item);
              }}
            >
              页面编辑
            </Button>,
            <Button
              danger
              type="text"
              onClick={() => {
                Modal.confirm({
                  title: "提示",
                  content:
                    "删除该路由数据，将导致对应的页面数据和路由数据同时被删除，请确认？",
                  okText: "确认",
                  cancelText: "取消",
                });
              }}
            >
              删除
            </Button>,
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
