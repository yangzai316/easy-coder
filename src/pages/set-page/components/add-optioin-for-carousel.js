import React from "react";
import { Form, Input, Button, Space, notification } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { editConfigForProps } from "../../../helper";
import ORIGIN from "../../../data/ORIGIN_TREE";

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
        initialValue={ORIGIN.TREE[parentUid].props.options}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                direction="vertical"
                key={key}
                style={{ width: "100%", marginBottom: 8 }}
              >
                <Form.Item
                  {...restField}
                  name={[name, "url"]}
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="图片地址" />
                </Form.Item>
                <Form.Item {...restField} name={[name, "backgroundColor"]}>
                  <Input placeholder="背景色，默认#000" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
                <br />
              </Space>
            ))}
            <Form.Item>
              <Button onClick={() => add()} block icon={<PlusOutlined />}>
                添加轮播单元
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
