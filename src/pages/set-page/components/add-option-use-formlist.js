import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  notification,
  Radio,
  Select,
  Divider,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { editConfigForProps, editConfigForDataSource } from "../../../helper";
import ORIGIN from "../../../data/ORIGIN_TREE";

const AddOptionUseFormList = ({ parentUid, updateView }) => {
  const [addType, setAddType] = useState(2);
  // 绑定静态数据 点击确定逻辑
  const onFinish1 = (val) => {
    delete ORIGIN.TREE[parentUid].dataSource; // 移除 dataSource 字段，避免和 props.options冲突
    editConfigForProps(parentUid, "options", val.options || []);
    notification.success({
      message: "添加成功",
      style: { width: "160px" },
      duration: 2,
    });
    updateView();
  };
  // Api动态数据 点击确定逻辑
  const onFinish2 = (val) => {
    ORIGIN.TREE[parentUid].props.options = []; // 移除 props.options  字段，避免和 dataSource冲突
    editConfigForDataSource(parentUid, val);
    notification.success({
      message: "添加成功",
      style: { width: "160px" },
      duration: 2,
    });
  };
  return (
    <>
      <div>
        <span>下拉选项数据绑定：</span>
        <Radio.Group
          onChange={(e) => {
            setAddType(e.target.value);
          }}
          defaultValue={2}
        >
          <Radio value={1}>静态数据</Radio>
          <Radio value={2}>Api动态数据</Radio>
        </Radio.Group>
      </div>
      <Divider style={{ margin: "8px 0" }} />
      {addType === 1 ? (
        <Form onFinish={onFinish1} autoComplete="off" size="small">
          <Form.List
            name="options"
            initialValue={ORIGIN.TREE[parentUid].props.options}
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
                      name={[name, "label"]}
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
      ) : (
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          labelAlign="left"
          onFinish={onFinish2}
          autoComplete="off"
          size="small"
          initialValues={ORIGIN.TREE[parentUid].dataSource}
          key={+new Date()}
        >
          <Form.Item
            label="数据源字段"
            name="fieldName"
            rules={[{ required: true, message: "This is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Api地址"
            name="apiUrl"
            rules={[{ required: true, message: "This is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="请求方法"
            name="apiMethod"
            rules={[{ required: true, message: "This is required" }]}
          >
            <Select
              options={[
                { label: "GET", value: "get" },
                { label: "POST", value: "post" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="空值"
            name="nullValue"
            rules={[{ required: true, message: "This is required" }]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item
            label="返回值结构"
            name="resultStructure"
            rules={[{ required: true, message: "This is required" }]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>
          <br />
          <Button type="primary" htmlType="submit" block>
            确定
          </Button>
        </Form>
      )}
    </>
  );
};

export default AddOptionUseFormList;
