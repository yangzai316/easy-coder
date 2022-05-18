import { Form, Input, Button, Row, Col, Modal, Select } from "antd";
import { useState, useRef } from "react";
import { FormOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
const { ipcRenderer } = window.require("electron");
const Store = window.require("electron-store");
const store = new Store();

const NewProject = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const ouputRef = useRef(null);

  const onFinish = (values) => {
    setIsModalVisible(true);
    const uid = uuidv4();
    const oldMap = store.get("project") || {};
    const newMap = {
      [uid]: {
        uid,
        ...values,
      },
      ...oldMap,
    };
    store.set("project", newMap);
    store.set("currentProject", uid);
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
            initialValues={{
              projectTemplateUrl:
                "https://gitee.com/yangzai316/easy-coder-template-self.git",
            }}
          >
            <Form.Item
              label="项目名称"
              name="projectName"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="项目路径"
              name="projectPath"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input
                readOnly
                addonAfter={<FormOutlined onClick={setProjectPath} />}
              />
            </Form.Item>
            <Form.Item
              label="项目模块"
              name="projectTemplateUrl"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Select>
                <Select.Option value="https://gitee.com/yangzai316/easy-coder-template-self.git">
                  基于webpack自搭建模版
                </Select.Option>
                <Select.Option value="https://gitee.com/yangzai316/template-antd-pro.git">
                  基于antd-pro-admin搭建模板
                </Select.Option>
              </Select>
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
      <Modal visible={isModalVisible} footer={false}>
        <p style={{ maxHeight: "300px", overflow: "auto" }} ref={ouputRef}>
          以下将完成项目克隆和依赖包安装，可能需要一点时间，耐心等待...
        </p>
      </Modal>
    </>
  );
};

export default NewProject;
