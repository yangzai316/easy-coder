import { useRef } from "react";
import { Button, Divider, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import EventDrawer from "./event-drawer";
import ORIGIN from "../../../data/ORIGIN_TREE";
import { mixComponentToTree, editConfigForEvent } from "../../../helper";

const AddFormItem = ({ parentUid, updateView }) => {
  // 添加标单项的事件处理
  const add = () => {
    const uid = uuidv4();
    mixComponentToTree(uid, "FormItem", parentUid, () => {
      updateView(uid);
    });
  };
  // 事件设置
  const EVENT_DRAWER_REF = useRef(null);
  const editEvent = () => {
    EVENT_DRAWER_REF.current.show();
  };
  const eventSuccessCb = (val) => {
    editConfigForEvent(parentUid, val);
    updateView();
  };
  return (
    <div>
      <Divider plain orientation="left">
        表单子项设置
      </Divider>
      <Button size="small" type="primary" onClick={add}>
        新增
        <PlusOutlined />
      </Button>
      <Divider plain orientation="left">
        事件设置
      </Divider>
      <Button size="small" type="primary" onClick={editEvent}>
        添加
        <PlusOutlined />
      </Button>
      <br />
      <br />
      {(Object.values(ORIGIN.TREE[parentUid].event || {}) || []).map((item) => {
        return (
          <Row align="middle" key={item.eventType}>
            <Col span={12}>{item.eventName}</Col>
            <Col span={12}>
              <Button type="link">编辑</Button>
              <Button danger type="text">
                删除
              </Button>
            </Col>
          </Row>
        );
      })}
      <EventDrawer
        ref={EVENT_DRAWER_REF}
        successCb={eventSuccessCb}
      ></EventDrawer>
    </div>
  );
};

export default AddFormItem;
