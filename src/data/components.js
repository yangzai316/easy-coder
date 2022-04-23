import Container from "../components/Container";
import Button from "../components/Button";
import * as antd from "antd";

export const all = { ...antd, Container, FormItem: antd.Form.Item, Button };

export const elementList = [
  {
    label: "基础组件",
    list: [
      {
        name: "Container",
        label: "容器",
        icon: "icon-icon-test1",
      },
      {
        name: "Layout",
        label: "布局",
        icon: "icon-icon-test",
      },
      {
        name: "Form",
        label: "表单",
        icon: "icon-icon-test2",
      },
      {
        name: "FormItem",
        label: "表单项",
        icon: "icon-icon-test2",
        disabled: true,
      },
      {
        name: "Input",
        label: "输入框",
        icon: "icon-icon-test2",
      },
      {
        name: "Button",
        label: "按钮",
        icon: "icon-icon-test2",
      },
    ],
  },
  {
    label: "整合组件",
    list: [
      {
        name: "FormGroup",
        label: "表单",
        icon: "icon-icon-test2",
      },
    ],
  },
];

export const COMPONENT_MAP = {
  Container: {
    name: "Container",
    label: "容器",
    type: "contained",
  },
  Layout: {
    name: "Layout",
    label: "布局",
    type: "contained",
    style: {
      width: "auto",
      height: "200px",
      backgroundColor: "#fff",
      margin: "10px",
    },
  },
  Form: {
    name: "Form",
    label: "表单",
    type: "contained",
    style: {
      width: "auto",
      height: "400px",
      backgroundColor: "#fff",
      margin: "10px",
      padding: "10px",
    },
  },
  FormItem: {
    name: "FormItem",
    label: "表单项",
    type: "contained",
    style: {
      width: "auto",
      backgroundColor: "#ccc",
    },
    props: {
      name: "",
      label: "标题",
      labelAlign: "right",
      rules: [
        {
          required: true,
          message: "Please input your username!",
        },
      ],
    },
  },
  Input: {
    name: "Input",
    label: "输入框",
    props: {},
    style: {
      width: "auto",
      border: "1px solid #000",
    },
  },
  Button: {
    name: "Button",
    label: "按钮",
    props: {
      content: "按钮",
    },
    style: {},
  },
};
