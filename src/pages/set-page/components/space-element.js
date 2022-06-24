import { useEffect } from "react";
import { Row, Col, Collapse } from "antd";
import { v4 as uuidv4 } from "uuid";
import EasyIcon from "../../../components/EasyIcon";
import { ELEMENT_LIST } from "./../../../data/ELEMENT";
import "./../../../style/space-element.scss";
// 左侧组件展示栏
const AreaComponent = () => {
  // 添加拖拽事件
  const dragStartEvent = (e) => {
    const uid = uuidv4();
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        uid,
        tag: e.target.dataset.tag,
        type: "create",
      })
    );
  };

  return (
    <div
      id="space-element"
      className="space-element"
      onDragStart={dragStartEvent}
    >
      <Collapse defaultActiveKey={["0"]} accordion>
        {ELEMENT_LIST.map((item, index) => {
          return (
            <Collapse.Panel header={item.label} key={index}>
              <Row gutter={[8, 8]}>
                {item.list.map((o) => {
                  return (
                    <Col span={12} key={o.name}>
                      <ComponentItem content={o}></ComponentItem>
                    </Col>
                  );
                })}
              </Row>
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </div>
  );
};
// 组件展示 item
const ComponentItem = ({ content }) => {
  return (
    <div
      className={`component-item ${content.disabled ? "is-disabled" : ""}`}
      data-tag={content.name}
      draggable={String(!content.disabled)}
    >
      <EasyIcon>{content.icon}</EasyIcon>
      <span>{content.label} </span>
    </div>
  );
};

export default AreaComponent;
