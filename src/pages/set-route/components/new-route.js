import { Form, Input, Button, Row, Col } from "antd";

const NewRoute = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <Form
            form={form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="路由路径"
              name="routePath"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="请输入英文与斜杠组合，如：/index" />
            </Form.Item>

            <Form.Item
              label="路由名称"
              name="routeName"
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
              label="页面组件命名"
              name="pageName"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="请输入英文且首字母大写，如：Index" />
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
    </>
  );
};

export default NewRoute;
