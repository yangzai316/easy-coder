import { Form, Input, Button, Row, Col, Modal } from "antd";
import { useState, useRef } from "react";
import { FormOutlined } from "@ant-design/icons";

const { ipcRenderer } = window.require("electron");
const SetProject = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const ouputRef = useRef(null);

  const onFinish = (values) => {
    setIsModalVisible(true);
    cloneTemplate(values);
  };
  // 设置项目地址
  const setProjectPath = () => {
    ipcRenderer.invoke("open-directory-for-project-path").then((result) => {
      if (result) {
        form.setFieldsValue({
          projectPath: result[0],
        });
      }
    });
  };
  // 下载项目模版
  const cloneTemplate = (data) => {
    ipcRenderer.send("clone-template", data);
  };
  ipcRenderer.on("data", (e, data) => {
    ouputRef.current.innerText = ouputRef.current.innerText + "\n" + data;
  });

  return (
    <>
      <Row>
        <Col span={12}>
          <Form
            form={form}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="项目名称"
              name="projectName"
              rules={[
                {
                  required: true,
                  message: "Please input your projectName !",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="地址"
              name="projectPath"
              rules={[
                {
                  required: true,
                  message: "Please input your project path !",
                },
              ]}
            >
              <Input
                readOnly
                addonAfter={<FormOutlined onClick={setProjectPath} />}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 20,
              }}
            >
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}></Col>
      </Row>
      <Modal title="Basic Modal" visible={isModalVisible} footer={false}>
        <p ref={ouputRef}>Some contents...</p>
      </Modal>
    </>
  );
};

export default SetProject;
