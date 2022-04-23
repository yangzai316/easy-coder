import { Button, Row, Col, Input, Form } from "antd";
import {
  PlusOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree, focusElement } from "../../../helper";
import { useState } from "react";
import ORIGIN_TREE from "../../../data/origin-tree";

const SelectAddOption = ({ currentUid, setCurrentUid }) => {
  //   const add = () => {
  //     const uid = uuidv4();
  //     mixComponentToTree(uid, "FormItem", parentUid);
  //     setCurrentUid(uid);
  //   };
  const [options, setOptions] = useState(ORIGIN_TREE[currentUid].options || []);
  console.log(options);
  // 添加子项
  const addItem = () => {
    setOptions((prv) => {
      return [...prv, { label: "", value: "" }];
    });
  };
  // 清空所有子项
  const clearItem = () => {
    setOptions([]);
  };
  // 删除某一个子项
  const removeItem = (index) => {
    setOptions((prv) => {
      const list = prv.slice();
      list.splice(index, 1);
      return list;
    });
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div>
      <Row gutter={[8, 16]} style={{ marginBottom: "10px" }}>
        <Col span={10}>
          <Button size="small" type="primary" onClick={addItem}>
            添加选项 <PlusOutlined />
          </Button>
        </Col>
        <Col span={10}>
          <Button size="small" type="primary" onClick={clearItem}>
            清空选项 <DeleteOutlined />
          </Button>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Form onFinish={onFinish}>
        {options.map((item, index) => {
          return (
            <Row gutter={[8, 16]} key={index}>
              <Col span={10}>
                <Form.Item
                  style={{ marginBottom: "6px" }}
                  name={`label${index}`}
                  initialValue={item.label}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  style={{ marginBottom: "6px" }}
                  name={`value${index}`}
                  initialValue={item.value}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={4}>
                <CloseCircleOutlined
                  className="delete-select-option"
                  onClick={() => {
                    removeItem(index);
                  }}
                />
              </Col>
            </Row>
          );
        })}

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SelectAddOption;
