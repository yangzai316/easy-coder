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
      form.resetFields();
      setVisible(false);
    });
  };
  // 事件目的 控制
  const [methodTarget, setMethodTarget] = useState(0);

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
        labelCol={{ span: 4 }}
        labelAlign="left"
        autoComplete="off"
        size="small"
        form={form}
      >
        <Form.Item
          label="事件名"
          name="eventName"
          rules={[{ required: true, message: "This is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="事件类型"
          name="eventType"
          rules={[{ required: true, message: "This is required" }]}
        >
          <Select
            options={[
              { label: "提交", value: "onFinish" },
              { label: "重置", value: "reset" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="事件目的"
          name="eventResult"
          rules={[{ required: true, message: "This is required" }]}
        >
          <Select
            onChange={(val) => {
              setMethodTarget(val);
            }}
            options={[
              { label: "请求Api接口", value: 1 },
              { label: "请求Api接口后修改数据", value: 2 },
            ]}
          />
        </Form.Item>
        {methodTarget === 1 ? (
          <>
            <Form.Item
              label="成功回调"
              name="successCb"
              rules={[{ required: true, message: "This is required" }]}
            >
              <Input.TextArea rows={10} />
            </Form.Item>
            <Form.Item
              label="失败回调"
              name="failCb"
              rules={[{ required: true, message: "This is required" }]}
            >
              <Input.TextArea rows={10} />
            </Form.Item>
          </>
        ) : methodTarget === 2 ? (
          <>
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
            <Form.Item
              label="修改数据字段"
              name="editFieldName"
              rules={[{ required: true, message: "This is required" }]}
            >
              <Input />
            </Form.Item>
          </>
        ) : null}
      </Form>
    </Drawer>
  );
});
