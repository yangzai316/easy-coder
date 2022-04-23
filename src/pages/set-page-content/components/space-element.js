import { useEffect } from "react";
import { Row, Col, Divider } from "antd";
import { v4 as uuidv4 } from "uuid";
import EasyIcon from "../../../components/EasyIcon";
import { elementList } from "../../../data/components";
import "./../../../style/space-element.scss";
// 左侧组件展示栏
const AreaComponent = () => {
  // 添加拖拽事件
  useEffect(() => {
    const dragStart = (e) => {
      const uid = uuidv4();
      e.dataTransfer.setData("text/plain", `${uid}-&-${e.target.dataset.type}`);
    };
    const spaceElement = document.getElementById("space-element");
    spaceElement.addEventListener("dragstart", dragStart, false);
    return () => {
      spaceElement.removeEventListener("dragstart", dragStart, false);
    };
  }, []);

  return (
    <div id="space-element" className="space-element">
      {elementList.map((item, index) => {
        return (
          <div key={index}>
            <Divider orientation="left">{item.label}</Divider>
            <Row gutter={[8, 8]}>
              {item.list.map((o) => {
                return (
                  <Col span={12} key={o.name}>
                    <ComponentItem content={o}></ComponentItem>
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </div>
  );
};
// 组件展示 item
const ComponentItem = ({ content }) => {
  return (
    <div
      className={`component-item ${content.disabled ? "is-disabled" : ""}`}
      data-type={content.name}
      draggable={String(!content.disabled)}
    >
      <EasyIcon>{content.icon}</EasyIcon>
      <span>{content.label} </span>
    </div>
  );
};

export default AreaComponent;
