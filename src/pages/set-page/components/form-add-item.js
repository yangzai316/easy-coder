import { useRef, useState } from "react";
import { Button, Divider, Row, Col, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import EventDrawer from "./event-drawer";
import ORIGIN from "../../../data/ORIGIN_TREE";
import { mixComponentToTree, editConfigForEvent } from "../../../helper";

const AddFormItem = ({ parentUid, updateView }) => {
  // 更新当前组件
  const [, update] = useState({});
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

  const deleteEvent = (type) => {
    Modal.confirm({
      title: "提示",
      content: "确定要删除该事件吗？",
      okText: "确认",
      cancelText: "取消",
      onOk() {
        delete ORIGIN.TREE[parentUid].event[type];
        update({});
      },
      onCancel() {
        console.log("Cancel");
      },
    });
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
      {(Object.values(ORIGIN.TREE[parentUid].event || {}) || []).map(
        (item, index) => {
          return (
            <Row align="middle" key={item.eventType}>
              <Col span={12}>{item.eventName}</Col>
              <Col span={12}>
                <Button
                  type="link"
                  onClick={() => {
                    message.warning("对不住了，该功能待开发...");
                  }}
                >
                  编辑
                </Button>
                <Button
                  danger
                  type="text"
                  onClick={() => {
                    deleteEvent(item.eventType);
                  }}
                >
                  删除
                </Button>
              </Col>
            </Row>
          );
        }
      )}
      <EventDrawer
        ref={EVENT_DRAWER_REF}
        successCb={eventSuccessCb}
      ></EventDrawer>
    </div>
  );
};

export default AddFormItem;
