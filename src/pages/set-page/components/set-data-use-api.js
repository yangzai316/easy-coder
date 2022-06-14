import { Button, Drawer, Form, Input, Select, Space } from "antd";
import React, { useState, useImperativeHandle } from "react";

export default React.forwardRef(({ successCb }, ref) => {
  // 当前组件事件上升
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
  }));
  // 抽屉出现控制
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  // 表单初始化
  const [form] = Form.useForm();
  const onFinish = () => {
    form.validateFields().then((res) => {
      successCb(res);
      setVisible(false);
    });
  };

  return (
    <Drawer
      title="事件设置"
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{
        paddingBottom: 80,
      }}
      extra={
        <Space>
          <Button onClick={onClose}>取消</Button>
          <Button onClick={onFinish} type="primary">
            确定
          </Button>
        </Space>
      }
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        labelAlign="left"
        onFinish={onFinish}
        autoComplete="off"
        size="small"
        //initialValues={ORIGIN.TREE[parentUid].dataSource}
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
      </Form>
    </Drawer>
  );
});
