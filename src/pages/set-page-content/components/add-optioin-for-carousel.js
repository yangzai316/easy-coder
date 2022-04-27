import React from "react";
import { Form, Input, Button, Space, notification } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { editConfigForProps } from "../../../helper";
import ORIGIN_TREE from "../../../data/origin-tree";

const AddOptionForCarousel = ({ parentUid, updateView }) => {
  const onFinish = (val) => {
    editConfigForProps(parentUid, "options", val.options || []);
    notification.success({
      message: "添加成功",
      style: { width: "160px" },
      duration: 2,
    });
    updateView();
  };

  return (
    <Form onFinish={onFinish} autoComplete="off">
      <Form.List
        name="options"
        initialValue={ORIGIN_TREE[parentUid].props.options}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "url"]}
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Key" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "backgroundColor"]}
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Value" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button onClick={() => add()} block icon={<PlusOutlined />}>
                Add Option
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <br />
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddOptionForCarousel;
