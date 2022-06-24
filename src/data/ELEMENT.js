// antd 组件
import * as antd from "antd";
// antd 组件的拓展 & 自定义组件
import EasyContainer from "../extend-components/EasyContainer";
import EasyText from "../extend-components/EasyText";
import Img from "../extend-components/Img";
import EasyButton from "../extend-components/EasyButton";
import DatePicker from "../extend-components/DatePicker";
import InputNumber from "../extend-components/InputNumber";
import TimePicker from "../extend-components/TimePicker";
import Slider from "../extend-components/Slider";
import Rate from "../extend-components/Rate";
import Calendar from "../extend-components/Calendar";
import Carousel from "../extend-components/Carousel";
import Collapse from "../extend-components/Collapse";
import TimelineItem from "../extend-components/TimelineItem";
// 数据可视化-组件
import {
  ChartLine,
  ChartColumn,
  ChartPie,
  ChartGauge,
  ChartLiquid,
  ChartRadar,
  ChartStock,
} from "../extend-components/antd-charts";
// 组件集合
export const ELEMENT_ALL = {
  ...antd,
  EasyContainer,
  EasyText,
  EasyButton,
  Img,
  FormItem: antd.Form.Item,
  TimePickerRangePicker: antd.TimePicker.RangePicker,
  DatePickerRangePicker: antd.DatePicker.RangePicker,
  CheckboxGroup: antd.Checkbox.Group,
  RadioGroup: antd.Radio.Group,
  CollapsePanel: antd.Collapse.Panel,
  MultiChartLine: ChartLine,
  MultiChartColumn: ChartColumn,
  ChartRing: ChartPie,
  DatePicker,
  TimePicker,
  InputNumber,
  Slider,
  Rate,
  Calendar,
  Carousel,
  Collapse,
  TimelineItem,
  ChartLine,
  ChartColumn,
  ChartPie,
  ChartGauge,
  ChartLiquid,
  ChartRadar,
  ChartStock,
};

// 左侧组件展示区-展示数据
export const ELEMENT_LIST = [
  {
    label: "基础组件",
    list: [
      {
        name: "EasyContainer",
        label: "容器",
        icon: "icon-icon-test1",
      },
      {
        name: "EasyText",
        label: "文本",
        icon: "icon-wenzi",
      },
      {
        name: "Img",
        label: "图片",
        icon: "icon-tupian1",
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
        icon: "icon-shurukuang",
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
        name: "Cascader",
        label: "级联选择",
        icon: "icon-jilianxuanze",
      },
      {
        name: "CheckboxGroup",
        label: "多选框组",
        icon: "icon-duoxuankuang1",
      },
      {
        name: "RadioGroup",
        label: "单选框组",
        icon: "icon-danxuanzu",
      },
      {
        name: "Slider",
        label: "滑动输入条",
        icon: "icon-huadongshurutiao",
      },
      {
        name: "EasyButton",
        label: "按钮",
        icon: "icon-anniuguanli-02",
      },
    ],
  },
  {
    label: "数据展示",
    list: [
      {
        name: "Avatar",
        label: "头像",
        icon: "icon-touxiang3",
      },
      {
        name: "Badge",
        label: "徽标数",
        icon: "icon-huibiaoshu",
      },
      {
        name: "Calendar",
        label: "日历",
        icon: "icon-rili-xianxing-xi",
      },
      {
        name: "Carousel",
        label: "轮播",
        icon: "icon-lunboxiaoguo",
      },
      {
        name: "Collapse",
        label: "折叠面板",
        icon: "icon-zhediemianban",
      },
      {
        name: "CollapsePanel",
        label: "折叠子面板",
        disabled: true,
        icon: "icon-qiapian",
      },
      {
        name: "Empty",
        label: "空状态",
        icon: "icon-wushuju1",
      },
      {
        name: "Image",
        label: "图片",
        icon: "icon-tupian",
      },
      {
        name: "Table",
        label: "表格",
        icon: "icon-24gl-table",
      },
      {
        name: "Timeline",
        label: "时间轴",
        icon: "icon-shijianzhou",
      },
      {
        name: "Tree",
        label: "树形控件",
        icon: "icon-shuxingkongjian",
      },
      {
        name: "TimelineItem",
        label: "时间轴子项",
        icon: "icon-icon-test5",
        disabled: true,
      },
    ],
  },
  {
    label: "数据可视化",
    list: [
      {
        name: "ChartLine",
        label: "折线图",
        icon: "icon-zhexiantu1",
      },
      {
        name: "MultiChartLine",
        label: "分组折线图",
        icon: "icon-fenzuzhexiantu-32",
      },
      { name: "ChartColumn", label: "柱状图", icon: "icon-fenzuzhuzhuangtu" },
      {
        name: "MultiChartColumn",
        label: "分组柱状图",
        icon: "icon-zhuzhuangtu1",
      },
      { name: "ChartPie", label: "饼图", icon: "icon-bingtu1" },
      { name: "ChartRing", label: "环图", icon: "icon-fsux_tubiao_bingtu" },
      {
        name: "ChartGauge",
        label: "仪表盘",
        icon: "icon-fsux_tubiao_yibiaopan",
      },
      { name: "ChartLiquid", label: "水波图", icon: "icon-shuibotu" },
      { name: "ChartRadar", label: "基础雷达图", icon: "icon-leidatu1" },
      { name: "ChartStock", label: "基础蜡烛图", icon: "icon-gupiao" },
    ],
  },
];

// 组件数据映射数据源
export const ELEMENT_MAP = {
  EasyContainer: {
    name: "EasyContainer",
    label: "容器",
    children: [],
    nature: "basic",
    style: {
      width: "200px",
      height: "200px",
      padding: "4px",
      overflow: "auto",
      backgroundColor: "#fff",
    },
  },
  EasyText: {
    name: "EasyText",
    label: "文本",
    props: {
      content: "文本内容",
    },
    style: {},
  },
  Img: {
    name: "Img",
    label: "图片",
    props: {
      width: "200px",
      height: "200px",
      src: "https://images4.c-ctrip.com/target//100t0i0000009mrsd86B4_C_292_192.jpg",
      alt: "默认图片",
    },
    style: {},
  },
  Form: {
    name: "Form",
    label: "表单",
    style: {
      width: "500px",
      height: "400px",
      backgroundColor: "#fff",
      margin: "10px",
      padding: "10px",
    },
    props: {
      labelAlign: "right",
      labelWrap: false,
      layout: "horizontal",
    },
    children: [],
  },
  FormItem: {
    name: "FormItem",
    label: "表单项",
    style: {
      width: "auto",
    },
    props: {
      fieldname: "",
      label: "标题",
      labelAlign: "right",
    },
    children: {},
    realName: "Form.Item",
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
  EasyButton: {
    name: "EasyButton",
    label: "按钮",
    props: {
      content: "按钮",
      block: false,
      danger: false,
      disabled: false,
      ghost: false,
      // href: "",
      // target: "",
      htmlType: "button",
      shape: "default",
      size: "small",
      type: "default",
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
    realName: "TimePicker.RangePicker",
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
    realName: "DatePicker.RangePicker",
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
    realName: "Checkbox.Group",
    label: "多选框组",
    props: {
      options: [{ label: "演示项", value: "test" }],
    },
    style: {},
  },
  RadioGroup: {
    name: "RadioGroup",
    realName: "Radio.Group",
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
  Avatar: {
    name: "Avatar",
    label: "头像",
    props: {
      src: "https://joeschmoe.io/api/v1/random",
      shape: "circle",
      size: "default",
    },
    style: {},
  },
  Badge: {
    name: "Badge",
    label: "徽标数",
    children: [],
    props: {
      count: 66,
      dot: false,
      showZero: false,
    },
    style: {},
  },
  Calendar: {
    name: "Calendar",
    label: "日历",
    props: {
      fullscreen: false,
    },
    style: {},
  },
  Carousel: {
    name: "Carousel",
    label: "轮播",
    props: {
      height: "300px",
      options: [
        {
          url: "https://images4.c-ctrip.com/target//100t0i0000009mrsd86B4_C_292_192.jpg",
          backgroundColor: "#000",
        },
      ],
    },
    style: {},
  },
  Collapse: {
    name: "Collapse",
    label: "折叠面板",
    children: [],
  },
  CollapsePanel: {
    name: "CollapsePanel",
    realName: "Collapse.Panel",
    label: "折叠面板子元素",
    props: {
      header: "测试Tile",
    },
    children: [],
  },
  Empty: {
    name: "Empty",
    label: "空状态",
    props: {
      description: "暂无数据",
    },
    children: [],
  },
  Image: {
    name: "Image",
    props: {
      width: 200,
      height: 300,
      src: "https://joeschmoe.io/api/v1/random",
    },
    children: [],
  },
  Table: {
    name: "Table",
    props: {
      dataSource: [],
      columns: [],
      bordered: true,
    },
    children: [],
  },
  Timeline: {
    name: "Timeline",
    props: {},
    children: [],
  },
  TimelineItem: {
    name: "TimelineItem",
    props: { content: "测试默认数据 2022-12-12" },
  },
  Tree: {
    name: "Tree",
    props: { checkable: true, treeData: [] },
  },
  ChartLine: {
    name: "ChartLine",
    realName: "Line",
    props: {
      width: 800,
      height: 400,
      autoFit: false,
      xField: "x",
      yField: "y",
      data: [
        {
          x: "2010-01",
          y: 18,
        },
        {
          x: "2010-02",
          y: 30,
        },
        {
          x: "2010-03",
          y: 20,
        },
        {
          x: "2010-04",
          y: 48,
        },
      ],
    },
  },
  MultiChartLine: {
    name: "MultiChartLine",
    realName: "Line",
    props: {
      width: 800,
      height: 400,
      autoFit: false,
      xField: "x",
      yField: "y",
      seriesField: "z",
      data: [
        {
          x: "1850",
          y: 10,
          z: "安徽",
        },
        {
          x: "1850",
          y: 12,
          z: "上海",
        },
        {
          x: "1851",
          y: 20,
          z: "安徽",
        },
        {
          x: "1851",
          y: 19,
          z: "上海",
        },
        {
          x: "1852",
          y: 39,
          z: "安徽",
        },
        {
          x: "1852",
          y: 21,
          z: "上海",
        },
        {
          x: "1853",
          y: 24,
          z: "安徽",
        },
        {
          x: "1853",
          y: 14,
          z: "上海",
        },
      ],
    },
  },
  ChartColumn: {
    name: "ChartColumn",
    realName: "Column",
    props: {
      width: 400,
      height: 400,
      autoFit: false,
      xField: "x",
      yField: "y",
      label: {
        position: "middle",
        style: {
          fill: "#fff",
          opacity: 0.6,
        },
      },
      meta: {
        x: {
          alias: "类别",
        },
        y: {
          alias: "销售额",
        },
      },
      data: [
        {
          x: "家具家电",
          y: 38,
        },
        {
          x: "粮油副食",
          y: 52,
        },
        {
          x: "生鲜水果",
          y: 61,
        },
      ],
    },
  },
  MultiChartColumn: {
    name: "MultiChartColumn",
    realName: "Column",
    props: {
      width: 800,
      height: 400,
      autoFit: false,
      isGroup: true,
      xField: "月份",
      yField: "月均降雨量",
      seriesField: "name",
      label: {
        position: "middle",
        layout: [
          {
            type: "interval-adjust-position",
          },
          {
            type: "interval-hide-overlap",
          },
          {
            type: "adjust-color",
          },
        ],
      },
      data: [
        {
          name: "London",
          月份: "Jan.",
          月均降雨量: 18.9,
        },
        {
          name: "London",
          月份: "Feb.",
          月均降雨量: 28.8,
        },
        {
          name: "London",
          月份: "Mar.",
          月均降雨量: 39.3,
        },
        {
          name: "London",
          月份: "Apr.",
          月均降雨量: 81.4,
        },
        {
          name: "London",
          月份: "May",
          月均降雨量: 47,
        },
        {
          name: "London",
          月份: "Jun.",
          月均降雨量: 20.3,
        },
        {
          name: "London",
          月份: "Jul.",
          月均降雨量: 24,
        },
        {
          name: "London",
          月份: "Aug.",
          月均降雨量: 35.6,
        },
        {
          name: "Berlin",
          月份: "Jan.",
          月均降雨量: 12.4,
        },
        {
          name: "Berlin",
          月份: "Feb.",
          月均降雨量: 23.2,
        },
        {
          name: "Berlin",
          月份: "Mar.",
          月均降雨量: 34.5,
        },
        {
          name: "Berlin",
          月份: "Apr.",
          月均降雨量: 99.7,
        },
        {
          name: "Berlin",
          月份: "May",
          月均降雨量: 52.6,
        },
        {
          name: "Berlin",
          月份: "Jun.",
          月均降雨量: 35.5,
        },
        {
          name: "Berlin",
          月份: "Jul.",
          月均降雨量: 37.4,
        },
        {
          name: "Berlin",
          月份: "Aug.",
          月均降雨量: 42.4,
        },
      ],
    },
  },
  ChartPie: {
    name: "ChartPie",
    realName: "Pie",
    props: {
      width: 400,
      height: 400,
      autoFit: false,
      appendPadding: 10,
      angleField: "value",
      colorField: "type",
      radius: 1,
      innerRadius: 0,
      label: {
        type: "inner",
        offset: "-30%",
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: "center",
        },
      },
      interactions: [
        {
          type: "element-active",
        },
      ],
      data: [
        {
          type: "分类一",
          value: 27,
        },
        {
          type: "分类二",
          value: 25,
        },
        {
          type: "分类三",
          value: 18,
        },
        {
          type: "分类四",
          value: 15,
        },
        {
          type: "分类五",
          value: 10,
        },
        {
          type: "其他",
          value: 5,
        },
      ],
    },
  },
  ChartRing: {
    name: "ChartRing",
    realName: "Pie",
    props: {
      width: 400,
      height: 400,
      autoFit: false,
      appendPadding: 10,
      angleField: "value",
      colorField: "type",
      radius: 1,
      innerRadius: 0.4,
      label: {
        type: "inner",
        offset: "-30%",
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: "center",
        },
      },
      interactions: [
        {
          type: "element-active",
        },
      ],
      data: [
        {
          type: "分类一",
          value: 27,
        },
        {
          type: "分类二",
          value: 25,
        },
        {
          type: "分类三",
          value: 18,
        },
        {
          type: "分类四",
          value: 15,
        },
        {
          type: "分类五",
          value: 10,
        },
        {
          type: "其他",
          value: 5,
        },
      ],
    },
  },
  ChartGauge: {
    name: "ChartGauge",
    realName: "Gauge",
    props: {
      width: 400,
      height: 400,
      autoFit: false,
      percent: 0.75,
      range: {
        color: "#30BF78",
      },
      indicator: {
        pointer: {
          style: {
            stroke: "#D0D0D0",
          },
        },
        pin: {
          style: {
            stroke: "#D0D0D0",
          },
        },
      },
      axis: {
        label: {
          formatter(v) {
            return Number(v) * 100;
          },
        },
        subTickLine: {
          count: 3,
        },
      },
      statistic: {
        content: {
          formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
          style: {
            color: "rgba(0,0,0,0.65)",
            fontSize: 48,
          },
        },
      },
    },
  },
  ChartLiquid: {
    name: "ChartLiquid",
    realName: "Liquid",
    props: {
      width: 400,
      height: 400,
      autoFit: false,
      percent: 0.25,
      outline: {
        border: 4,
        distance: 8,
      },
      wave: {
        length: 128,
      },
    },
  },
  ChartRadar: {
    name: "ChartRadar",
    realName: "Radar",
    props: {
      width: 400,
      height: 400,
      autoFit: false,
      xField: "name",
      yField: "star",
      appendPadding: [0, 10, 0, 10],
      meta: {
        star: {
          alias: "star 数量",
          min: 0,
          nice: true,
          formatter: (v) => Number(v).toFixed(2),
        },
      },
      yAxis: {
        label: false,
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      data: [
        {
          name: "G2",
          star: 10371,
        },
        {
          name: "G6",
          star: 7380,
        },
        {
          name: "F2",
          star: 7414,
        },
        {
          name: "L7",
          star: 2140,
        },
      ],
    },
  },
  ChartStock: {
    name: "ChartStock",
    realName: "Stock",
    props: {
      width: 400,
      height: 400,
      autoFit: false,
      xField: "trade_date",
      yField: ["open", "close", "high", "low"],
      data: [
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-13",
          close: 2887.4265,
          open: 2804.2322,
          high: 2910.8812,
          low: 2799.9841,
          vol: 366450436,
          amount: 393019665.2,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-12",
          close: 2923.4856,
          open: 2936.0163,
          high: 2944.4651,
          low: 2906.2838,
          vol: 307778457,
          amount: 328209202.4,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-11",
          close: 2968.5174,
          open: 3001.7616,
          high: 3010.0286,
          low: 2968.5174,
          vol: 352470970,
          amount: 378766619,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-10",
          close: 2996.7618,
          open: 2918.9347,
          high: 3000.2963,
          low: 2904.7989,
          vol: 393296648,
          amount: 425017184.8,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-09",
          close: 2943.2907,
          open: 2987.1805,
          high: 2989.2051,
          low: 2940.7138,
          vol: 414560736,
          amount: 438143854.6,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-06",
          close: 3034.5113,
          open: 3039.9395,
          high: 3052.4439,
          low: 3029.4632,
          vol: 362061533,
          amount: 377388542.7,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-05",
          close: 3071.6771,
          open: 3036.1545,
          high: 3074.2571,
          low: 3022.9262,
          vol: 445425806,
          amount: 482770471.4,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-04",
          close: 3011.6657,
          open: 2981.806,
          high: 3012.0035,
          low: 2974.3583,
          vol: 353338278,
          amount: 389893917.5,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-03",
          close: 2992.8968,
          open: 3006.8888,
          high: 3026.842,
          low: 2976.623,
          vol: 410108047,
          amount: 447053681.5,
        },
        {
          ts_code: "000001.SH",
          trade_date: "2020-03-02",
          close: 2970.9312,
          open: 2899.31,
          high: 2982.5068,
          low: 2899.31,
          vol: 367333369,
          amount: 397244201.2,
        },
      ],
    },
  },
};
