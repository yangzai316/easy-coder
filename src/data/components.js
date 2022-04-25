import Container from "../extend-components/Container";
import Button from "../extend-components/Button";
import DatePicker from "../extend-components/DatePicker";
import InputNumber from "../extend-components/InputNumber";
import TimePicker from "../extend-components/TimePicker";
import Slider from "../extend-components/Slider";
import Rate from "./../extend-components/Rate";
import * as antd from "antd";

export const all = {
  ...antd,
  Container,
  FormItem: antd.Form.Item,
  Button,
  TimePickerRangePicker: antd.TimePicker.RangePicker,
  DatePicker,
  TimePicker,
  DatePickerRangePicker: antd.DatePicker.RangePicker,
  InputNumber,
  CheckboxGroup: antd.Checkbox.Group,
  RadioGroup: antd.Radio.Group,
  Slider,
  Rate,
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
        icon: "icon-anniuguanli-02",
      },
    ],
  },
  {
    label: "表单组件",
    list: [
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
        name: "InputNumber",
        label: "数字输入框",
        icon: "icon-shuzishurukuang",
      },
      {
        name: "Select",
        label: "下拉选择器",
        icon: "icon-xialaxuanzeqi",
      },
      {
        name: "Switch",
        label: "开关",
        icon: "icon-kaiguan",
      },
      {
        name: "TimePicker",
        label: "时间选择",
        icon: "icon-icon-test8",
      },
      {
        name: "TimePickerRangePicker",
        label: "时间范围选择",
        icon: "icon-shijianfanweixuanze",
      },
      {
        name: "DatePicker",
        label: "日期选择",
        icon: "icon-icon-test9",
      },
      {
        name: "DatePickerRangePicker",
        label: "日期范围选择",
        icon: "icon-riqifanweixuanze",
      },
      {
        name: "Rate",
        label: "评分",
        icon: "icon-icon-test10",
      },
      {
        name: "CheckboxGroup",
        label: "多选框组",
        icon: "icon-tubiao10",
      },
      {
        name: "RadioGroup",
        label: "单选框组",
        icon: "",
      },
      {
        name: "Slider",
        label: "滑动输入条",
        icon: "",
      },
      {
        name: "Cascader",
        label: "级联选择",
        icon: "",
      },
    ],
  },
];
// 组件数据映射数据源
export const COMPONENT_MAP = {
  Container: {
    name: "Container",
    label: "容器",
    type: "contained",
    style: {
      width: "200px",
      height: "200px",
      margin: "4px",
      padding: "4px",
    },
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
    label: "下拉选择器",
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
  DatePickerRangePicker: {
    name: "DatePickerRangePicker",
    label: "日期范围选择器",
    props: {
      picker: "date",
    },
    style: {},
  },
  InputNumber: {
    name: "InputNumber",
    label: "数字输入框",
    props: {},
    style: {},
  },
  Rate: {
    name: "Rate",
    label: "评分",
    props: {},
    style: {},
  },
  CheckboxGroup: {
    name: "CheckboxGroup",
    label: "多选框组",
    props: {
      options: [{ label: "演示项", value: "test" }],
    },
    style: {},
  },
  RadioGroup: {
    name: "RadioGroup",
    label: "单选框组",
    props: {
      options: [{ label: "演示项", value: "test" }],
    },
    style: {},
  },
  Slider: {
    name: "Slider",
    label: "单选框组",
    props: {},
    style: {},
  },
  Cascader: {
    name: "Cascader",
    label: "级联选择",
    props: {
      options: [],
    },
    style: {},
  },
};
