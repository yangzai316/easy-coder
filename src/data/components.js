import Container from "../components/Container";
import * as antd from "antd";

export const all = { ...antd, Container, FormItem: antd.Form.Item };

export const elementList = [
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
    prop: {
      label: "标题",
    },
  },
  Input: {
    name: "Input",
    label: "输入框",
  },
};
