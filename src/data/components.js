import Container from "../components/Container";
import Button from "../components/Button";
import * as antd from "antd";

export const all = {
  ...antd,
  Container,
  FormItem: antd.Form.Item,
  Button,
  TimePickerRangePicker: antd.TimePicker.RangePicker,
};
// 左侧组件展示区-展示数据
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
        name: "Button",
        label: "按钮",
        icon: "icon-icon-test4",
      },
      {
        name: "Form",
        label: "表单",
        icon: "icon-icon-test2",
      },
      {
        name: "FormItem",
        label: "表单项",
        icon: "icon-icon-test3",
        disabled: true,
      },
      {
        name: "Input",
        label: "输入框",
        icon: "icon-bianji-xiugai-pinglun-03",
      },
      {
        name: "Select",
        label: "选择器",
        icon: "icon-icon-test5",
      },
      {
        name: "Switch",
        label: "开关",
        icon: "icon-icon-test5",
      },
      {
        name: "TimePicker",
        label: "时间选择框",
        icon: "icon-icon-test5",
      },
      {
        name: "TimePickerRangePicker",
        label: "时间范围选择器",
        icon: "icon-icon-test5",
      },
      {
        name: "DatePicker",
        label: "日期选择框",
        icon: "icon-icon-test5",
      },
    ],
  },
  {
    label: "整合组件",
    list: [],
  },
];
// 组件数据映射数据源
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
      width: "500px",
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
      width: "100%",
    },
  },
  Select: {
    name: "Select",
    label: "选择框",
    props: {
      options: [],
    },
    style: {
      width: "100%",
    },

    children: [],
  },
  Button: {
    name: "Button",
    label: "按钮",
    props: {
      content: "按钮",
    },
    style: {},
  },
  Switch: {
    name: "Switch",
    label: "开关",
    props: {},
    style: {},
  },
  TimePicker: {
    name: "TimePicker",
    label: "时间选择框",
    props: {},
    style: {},
  },
  TimePickerRangePicker: {
    name: "TimePickerRangePicker",
    label: "时间范围选择器",
    props: {},
    style: {},
  },
  DatePicker: {
    name: "DatePicker",
    label: "日期选择框",
    props: {
      picker: "date",
    },
    style: {},
  },
};
