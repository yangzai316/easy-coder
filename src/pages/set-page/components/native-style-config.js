import "./../../../style/native-style-config.scss";
import {
  Input,
  Row,
  Col,
  Collapse,
  Radio,
  Tooltip,
  Select,
  Switch,
} from "antd";
import EasyIcon from "./../../../components/EasyIcon";
import { useState } from "react";

const NativeStyleConfig = ({ styleData, change }) => {
  // 是否选择背景图
  const [selectBGImage, setSelectBGImage] = useState(false);

  return (
    <>
      <Row wrap={false}>
        <Col span={7}>宽x高：</Col>
        <Col span={17}>
          <Input
            size="small"
            style={{ width: "40%" }}
            defaultValue={styleData.width}
            onBlur={(e) => {
              change(e.target.value, "width", "style");
            }}
          />
          x
          <Input
            size="small"
            style={{ width: "40%" }}
            defaultValue={styleData.height}
            onBlur={(e) => {
              change(e.target.value, "height", "style");
            }}
          />
        </Col>
      </Row>
      <div className="nsc-container">
        <input
          className="nsc-container-margin-left"
          placeholder="left"
          defaultValue={styleData.marginLeft}
          onBlur={(e) => {
            change(e.target.value, "marginLeft", "style");
          }}
        />
        <input
          className="nsc-container-margin-right"
          placeholder="right"
          defaultValue={styleData.marginRight}
          onBlur={(e) => {
            change(e.target.value, "marginRight", "style");
          }}
        />
        <input
          className="nsc-container-margin-top"
          placeholder="外边距-top"
          defaultValue={styleData.marginTop}
          onBlur={(e) => {
            change(e.target.value, "marginTop", "style");
          }}
        />
        <input
          className="nsc-container-margin-bottom"
          placeholder="bottom"
          defaultValue={styleData.marginBottom}
          onBlur={(e) => {
            change(e.target.value, "marginBottom", "style");
          }}
        />
        <input
          className="nsc-container-border-left"
          placeholder="left"
          defaultValue={styleData.borderLeft}
          onBlur={(e) => {
            change(e.target.value, "borderLeft", "style");
          }}
        />
        <input
          className="nsc-container-border-right"
          placeholder="right"
          defaultValue={styleData.borderRight}
          onBlur={(e) => {
            change(e.target.value, "borderRight", "style");
          }}
        />
        <input
          className="nsc-container-border-top"
          placeholder="边框-top"
          defaultValue={styleData.borderTop}
          onBlur={(e) => {
            change(e.target.value, "borderTop", "style");
          }}
        />
        <input
          className="nsc-container-border-bottom"
          placeholder="bottom"
          defaultValue={styleData.borderBottom}
          onBlur={(e) => {
            change(e.target.value, "borderBottom", "style");
          }}
        />
        <input
          className="nsc-container-padding-left"
          placeholder="left"
          defaultValue={styleData.paddingLeft}
          onBlur={(e) => {
            change(e.target.value, "paddingLeft", "style");
          }}
        />
        <input
          className="nsc-container-padding-right"
          placeholder="right"
          defaultValue={styleData.paddingRight}
          onBlur={(e) => {
            change(e.target.value, "paddingRight", "style");
          }}
        />
        <input
          className="nsc-container-padding-top"
          placeholder="内边距-top"
          defaultValue={styleData.paddingTop}
          onBlur={(e) => {
            change(e.target.value, "paddingTop", "style");
          }}
        />
        <input
          className="nsc-container-padding-bottom"
          placeholder="bottom"
          defaultValue={styleData.paddingBottom}
          onBlur={(e) => {
            change(e.target.value, "paddingBottom", "style");
          }}
        />
      </div>
      <Collapse accordion>
        <Collapse.Panel header="布局设置" key="1">
          {ATTRS.map((item, index) => {
            return (
              <Row wrap={false} key={index}>
                <Col span={7}>{item.label}</Col>
                <Col span={17}>
                  <Radio.Group
                    defaultValue={styleData[item.name]}
                    onChange={(e) => {
                      console.log(e, item.name);
                      change(e.target.value, item.name, "style");
                    }}
                  >
                    {item.options.map((o) => {
                      return (
                        <Tooltip key={o.key} placement="top" title={o.title}>
                          <Radio.Button value={o.key}>
                            <EasyIcon fontSize="16">{o.name}</EasyIcon>
                          </Radio.Button>
                        </Tooltip>
                      );
                    })}
                  </Radio.Group>
                </Col>
              </Row>
            );
          })}
        </Collapse.Panel>
        <Collapse.Panel header="背景设置" key="2">
          <Row wrap={false}>
            <Col span={7}>背景色：</Col>
            <Col span={17}>
              <Input
                size="small"
                type="color"
                defaultValue={styleData.backgroundColor}
                onBlur={(e) => {
                  change(e.target.value, "backgroundColor", "style");
                }}
              />
            </Col>
          </Row>
          <Row wrap={false}>
            <Col span={7}>背景图片：</Col>
            <Col span={17}>
              <Switch
                size="small"
                defaultChecked={false}
                onChange={(val) => {
                  setSelectBGImage(val);
                }}
              />
            </Col>
          </Row>
          {selectBGImage && (
            <>
              <Row wrap={false}>
                <Col span={7}>图片地址：</Col>
                <Col span={17}>
                  <Input
                    size="small"
                    placeholder="请输入完整的图片地址"
                    defaultValue={styleData.backgroundImage}
                    onBlur={(e) => {
                      change(
                        `url(${e.target.value})`,
                        "backgroundImage",
                        "style"
                      );
                    }}
                  />
                </Col>
              </Row>
              <Row wrap={false}>
                <Col span={7}>图片位置：</Col>
                <Col span={17}>
                  <Select
                    size="small"
                    style={{ width: "100%" }}
                    defaultValue={styleData.backgroundPosition}
                    onChange={(val) => {
                      change(val, "backgroundPosition", "style");
                    }}
                  >
                    {backgroundPosition.map((o) => {
                      return (
                        <Select.Option key={o.key} value={o.key}>
                          {o.title}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
              <Row wrap={false}>
                <Col span={7}>图片尺寸：</Col>
                <Col span={17}>
                  <Select
                    size="small"
                    style={{ width: "100%" }}
                    defaultValue={styleData.backgroundSize}
                    onChange={(val) => {
                      change(val, "backgroundSize", "style");
                    }}
                  >
                    {backgroundSize.map((o) => {
                      return (
                        <Select.Option key={o.key} value={o.key}>
                          {o.title}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
              <Row wrap={false}>
                <Col span={7}>图片重复：</Col>
                <Col span={17}>
                  <Select
                    size="small"
                    style={{ width: "100%" }}
                    defaultValue={styleData.backgroundRepeat}
                    onChange={(val) => {
                      change(val, "backgroundRepeat", "style");
                    }}
                  >
                    {backgroundRepeat.map((o) => {
                      return (
                        <Select.Option key={o.key} value={o.key}>
                          {o.title}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
            </>
          )}
        </Collapse.Panel>
      </Collapse>
    </>
  );
};
const ATTRS = [
  {
    name: "flexDirection",
    label: "主轴方向",
    options: [
      {
        title: "由左向右",
        name: "icon-cs-jt-xy-1-1",
        key: "row",
      },
      {
        title: "由右向左",
        name: "icon-cs-jt-xz-1-1",
        key: "row-reverse",
      },
      {
        title: "由上向下",
        name: "icon-cs-jt-xx-1-1",
        key: "column",
      },
      {
        title: "由下向上",
        name: "icon-cs-jt-xs-1-1",
        key: "column-revers",
      },
    ],
  },
  {
    name: "flexWrap",
    label: "换行",
    options: [
      {
        title: "不换行",
        name: "icon-nowrap",
        key: "nowrap",
      },
      {
        title: "换行，第一行在上方",
        name: "icon-shanghuanhang",
        key: "wrap",
      },
      {
        title: "换行，第一行在下方",
        name: "icon-huanhang",
        key: "wrap-reverse",
      },
    ],
  },
  {
    name: "justifyContent",
    label: "主轴对齐",
    options: [
      {
        title: "左对齐",
        name: "icon-a-Justifyflex-startrow",
        key: "flex-start",
      },
      {
        title: "右对齐",
        name: "icon-a-Alignflex-endcolumn",
        key: "flex-end",
      },
      {
        title: "居中",
        name: "icon-cross-flex-center",
        key: "center",
      },
      {
        title: "两端对齐，两端不留间隔",
        name: "icon-SpaceBetweenHorizontally",
        key: "space-between",
      },
      {
        title: "间隔平分，两端间隔为中间间隔的一半",
        name: "icon-main-space-between",
        key: "space-around",
      },
    ],
  },
  {
    name: "alignItems",
    label: "交叉轴对齐",
    options: [
      {
        title: "起点对齐",
        name: "icon-a-Alignflex-endrow",
        key: "flex-start",
      },
      {
        title: "终点对齐",
        name: "icon-a-Alignflex-startrow",
        key: "flex-end",
      },
      {
        title: "中点对齐",
        name: "icon-piccenter-fill",
        key: "center",
      },
      {
        title: "充满",
        name: "icon-a-Alignstretchrow",
        key: "stretch",
      },
      {
        title: "基线对齐",
        name: "icon-align_baseline_outline",
        key: "baseline",
      },
    ],
  },
  {
    name: "overflow",
    label: "超出隐藏",
    options: [
      {
        title: "显示",
        key: "visible",
        name: "icon-visible",
      },
      {
        title: "隐藏",
        key: "hidden",
        name: "icon-visible1",
      },
      {
        title: "滚动条",
        key: "scroll",
        name: "icon-scroll-vertical",
      },
      {
        title: "自动",
        key: "auto",
        name: "icon-AirAuto-Outlined",
      },
    ],
  },
];
const backgroundPosition = [
  {
    title: "上-左边",
    key: "top left",
  },
  {
    title: "上-中间",
    key: "top center",
  },
  {
    title: "上-右边",
    key: "top right",
  },
  {
    title: "中间-左边",
    key: "center left",
  },
  {
    title: "中间",
    key: "center center",
  },
  {
    title: "中间-右边",
    key: "center right",
  },
  {
    title: "下-左边",
    key: "bottom left",
  },
  {
    title: "下-中间",
    key: "bottom center",
  },
  {
    title: "下-右边",
    key: "bottom right",
  },
];
const backgroundSize = [
  {
    title: "自适应",
    name: "\ue60a",
    key: "contain",
  },
  {
    title: "充满",
    name: "\ue64d",
    key: "cover",
  },
];
const backgroundRepeat = [
  {
    title: "仅横向重复",
    key: "repeat-x",
  },
  {
    title: "仅纵向重复",
    key: "repeat-y",
  },
  {
    title: "双向重复",
    key: "repeat",
  },
  {
    title: "尽可能的重复-不裁剪",
    key: "space",
  },
  {
    title: "尽可能的重复-可能改变形状",
    key: "round",
  },
  {
    title: "不重复",
    key: "no-repeat",
  },
];

export default NativeStyleConfig;
