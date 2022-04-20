import { useEffect } from "react";
import { Row, Col, Divider } from "antd";
import { v4 as uuidv4 } from 'uuid';
import "./style.css";
import EasyIcon from "../../../components/EasyIcon";
import { componentList } from "../../../data/components";
// 左侧组件展示栏
const AreaComponent = () => {
  // 添加拖拽事件
  useEffect(() => {
    const dragStart = (e) => {
      const id = uuidv4();
      e.dataTransfer.setData("text/plain", `${id}-&-${e.target.dataset.type}`);
    };
    const spaceElement = document.getElementById("space-element");
    spaceElement.addEventListener("dragstart", dragStart, false);
    return () => {
      spaceElement.removeEventListener("dragstart", dragStart, false);
    };
  }, []);

  return (
    <div id="space-element">
      <Divider orientation="left">Normal</Divider>
      <Row gutter={[8, 8]}>
        {componentList.map((item, index) => {
          return (
            <Col span={12} key={item.name}>
              <ComponentItem content={item}></ComponentItem>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
// 组件展示 item
const ComponentItem = ({ content }) => {
  return (
    <div className="component-item" data-type={content.name} draggable="true">
      <EasyIcon fontSize="48">icon-buju</EasyIcon>
      <span>{content.label}</span>
    </div>
  );
};

export default AreaComponent;
