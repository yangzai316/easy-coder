import { Card, Row, Col, Button, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Store = window.require("electron-store");
const store = new Store();

const ExistProject = () => {
  // 路由配置
  const navigate = useNavigate();
  // 获取store 中当前项目的uid
  const [currentProjectUid, setCurrentProjectUid] = useState(
    store.get("currentProject") || ""
  );
  // 获取store 数据
  const project = store.get("project") || {};

  // 点击打开
  const openProject = (uid) => {
    setCurrentProjectUid(uid);
    store.set("currentProject", uid);
    message.loading("正在跳转该项目的路由设置...", 0.4).then(() => {
      navigate("/set-route");
    });
  };
  return (
    <Row>
      {Object.values(project).map((item) => {
        return (
          <Col span={12} key={item.uid}>
            <Card
              hoverable
              title={item.projectName}
              extra={
                <Button
                  type="link"
                  onClick={() => {
                    openProject(item.uid);
                  }}
                >
                  打开
                </Button>
              }
              style={{
                width: 400,
                border:
                  currentProjectUid === item.uid ? "1px solid #1890ff" : "",
              }}
              headStyle={{
                color: currentProjectUid === item.uid ? "#1890ff" : "",
                borderBottom:
                  currentProjectUid === item.uid ? "1px solid #1890ff" : "",
              }}
              bodyStyle={{
                color: currentProjectUid === item.uid ? "#1890ff" : "",
              }}
            >
              <p>项目ID：{item.uid}</p>
              <p>
                项目路径：{item.projectPath}/{item.projectName}
              </p>
              <p>项目模板：基于webpack自搭建模版</p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ExistProject;
