import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { editConfigForProps } from "../../../helper";
import ORIGIN_TREE from "../../../data/origin-tree";

const SelectAddOption = ({ currentUid, updateConfig }) => {
  const onFinish = (val) => {
    editConfigForProps(currentUid, "options", val.options || []);
    updateConfig();
  };

  return (
    <Form onFinish={onFinish} autoComplete="off">
      <Form.List
        name="options"
        initialValue={ORIGIN_TREE[currentUid].props.options}
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
                  name={[name, "key"]}
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Key" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "value"]}
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

export default SelectAddOption;
